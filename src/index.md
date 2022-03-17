---
layout: layouts/home.njk
---

# The Immersive Classroom

https://vimeo.com/642006159

## Projects

<ul>
{%- for project in collections.projects -%}
  <li>[{{ page.data.title }}]({{ page.url}})</li>
{%- endfor -%}
</ul>

## Topics

- 3D scanning
- 3D Printing
- Asset Generation
  - Modeling
    - Blender
    - Gravity Sketch
    - Adobe Medium
  - Stores
- Animation
- AR
  - Zappar
  - Sketchfab
  - Complete Anatomy
- VR
  - Mozilla hubs
  - Unreal
  - Aframe
  - Sketchfab
- Video
- Audio
  - Podcast
