---
layout: layouts/hubs_page.njk
title: Experiences
active: experiences 
---

  
<ul class="icon-list">
{%- for experience in collections.experience -%}
  <div class="row mb-2">
        <div class="col-md-8">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              
              <h3 class="mb-0">
                <a class="text-dark" href="{{experience.data.slug}}">{{ experience.data.title }}</a>
              </h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p class="card-text mb-auto"> {{ experience.data.short_description }}</p>
              <a href="#">Continue reading</a>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style="width: 200px; height: 250px;" src="" data-holder-rendered="true">
          </div>
        </div>
      </div>
  <li><h3><a href=""></a></h3>
    <p>
     
    </p>  
  </li>
{%- endfor -%}
</ul>
