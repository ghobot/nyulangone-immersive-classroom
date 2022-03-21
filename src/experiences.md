---
layout: layouts/hubs_page.njk
title: Experiences
active: experiences 
---

  
<ul>
{%- for experience in collections.experience -%}
  <li><h3><a href="{{experience.data.slug}}">{{ experience.data.title }}</a></h3></li>
{%- endfor -%}
</ul>
