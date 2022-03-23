---
layout: layouts/hubs_page.njk
title: Experiences
active: experiences 
---

   <div class="row mb-2">

{%- for experience in collections.experience -%}

  
        <div class="col-md-12">
          <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">           
              <h5 class="mb-0 mt-0">
                <a class="text-dark" href="{{ experience.data.slug }}">{{ experience.data.title }}</a>
              </h5>
              <div class="mb-1 text-muted">Deployed: {{ experience.data.date_deployed }}</div>
              <p class="card-text mb-auto"> {{ experience.data.short_description }}</p>
            </div>
            <img class="card-img-right flex-auto d-none d-md-block"  alt="Thumbnail [200]"  src="{{ experience.data.thumbnail }}" data-holder-rendered="true">
          </div>
        </div>
       
{%- endfor -%}
</div> 