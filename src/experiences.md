---
layout: layouts/hubs_page.njk
title: Experiences
active: experiences 
---

  
<ul class="icon-list">
{%- for experience in collections.experience -%}
  
  <li><h3><a href="{{experience.data.slug}}">{{ experience.data.title }}</a></h3>
    <p>
      {{ experience.data.short_description }}
    </p>  
  </li>
{%- endfor -%}
</ul>
