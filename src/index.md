---
layout: layouts/home2.njk
---


# The Immersive Classroom

https://vimeo.com/642006159

## Projects
<ul>
{%- for project in collections.projects -%}
  <li>[{{ page.data.title }}]({{ page.url}})</li>
{%- endfor -%}
</ul>

