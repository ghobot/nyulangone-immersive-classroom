---
layout: layouts/hubs_page.njk
title: Experiences
active: experiences 
---

  
<ul>
{%- for experience in collections.experience -%}
  <li><h2>{{ post.data.title }}</h2></li>
{%- endfor -%}
</ul>
