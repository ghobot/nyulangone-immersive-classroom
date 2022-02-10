---
layout: layouts/home.njk
---

<div class="illo-container">
</div>

# The Immersive Classroom

https://www.youtube.com/watch?v=dQw4w9WgXcQ


### Projects
<ul>
{%- for project in collections.projects -%}
  <li>[{{ page.data.title }}]({{ page.url}})</li>
  {%- endfor -%}
</ul>

<ul>
      {%- for post in collections.posts -%}
        <li{% if page.url == post.url %} aria-current="page"{% endif %}>{{ post.data.page.date | htmlDateString }} — <a href='{{ post.url }}'>{{ post.data.title }}</a></li>
      {%- endfor -%}
      <li><a href="/posts">View all posts</a></li>
</ul>

