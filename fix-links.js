const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const extensions = ['.njk', '.html', '.md'];

walkDir('./src', function(filePath) {
  if (extensions.includes(path.extname(filePath))) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace href/src/action with variable to add | url if missing
    // Regex breakdown:
    // - (href|src|action)         captures the attribute
    // - ="\{\{\s*([^}|]+?)\s*\}\}" captures the variable inside {{ }}
    // - ensures | is not present already
    content = content.replace(
      /(href|src|action)="\{\{\s*([^}|]+?)\s*\}\}"/g,
      (match, attr, variable) => {
        if (!variable.includes('|')) {
          return `${attr}="{{ ${variable.trim()} | url }}"`;
        } else {
          return match; // skip if already has a filter
        }
      }
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
  }
});