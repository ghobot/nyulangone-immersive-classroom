---
layout: layouts/hubs_about_page.njk
title: About
---

Mozilla Hubs is a web-based 3D virtual environment that allows for the creation of customizable 3D virtual spaces accessible on mobile, desktop, and XR/VR devices via a URL. We leveraged this platform to create immersive educational experiences in anatomy for students at NYU Grossman School of Medicine.

The digital space can host and display assets such as 3D models users can interact with, video, and images. Key structures were labeled and these additional assets contributed to the student interaction with and immersion in the virtual spaces. Internal links and instructions to move within the space provided sequence and organization to the content presented. Users choose avatars to represent themselves in the digital space and are able to navigate within it using their keyboard and mouse reminiscent of other PC based game environments or within an Oculus Virtual Reality headset using the hand controllers. When possible, faculty-guided training sessions in the medium of deployment were organized prior to the educational intervention to reduce user error. When multiple users are present in a given Hubs room, they can communicate by voice and text, and use a pen as a laser pointer.

These projects are the result of a collaboration with Greg Dorsainville, a creative technologist, and Kristen Ramirez, anatomy faculty at NYU Grossman School of Medicine in conjunction with other anatomists, clinicians, and instructional designers. This page will chronicle the development, content, and deployment of our immersive experiences utilizing 3D modeling, animation, and staging programs and incorporating additional digital anatomy assets.

<hr>

<h2>
  The Team
</h2>

{%- for profile in collections.profile -%}
<div class="card mb-4">
  <div class="row">
    <div class="col-md-12">
      <img src="{{ profile.data.thumbnail }}" class="col-md-6 float-md-end mb-3 ms-md-3 img-fluid" alt="{{ profile.data.name }}">    
      <div class="card-body">
        <h4 class="card-title"> {{ profile.data.name }}, {{ profile.data.title }} </h4>
        <p class="card-text"><small class="text-muted"></small> {{ profile.data.affiliation }} </p>
        <p class="card-text">{{ profile.templateContent }}</p>   
        <p><a type="button" class="btn btn-primary" href="mailto:{{ profile.data.contact }}">Contact</a></p> 
      </div>
    </div>
  </div>
</div>
{%- endfor -%} 

<h2>
  Additional Collaborators
</h2>

##### Victoria Harnik, PhD

- Assistant Dean for Curriculum
- Associate Professor of Cell Biology (Anatomy)

##### Michael Poles, MD, PhD

- Assistant Dean of Medical Education for the Pre-clinical Sciences
- Associate Professor of Medicine, Microbiology and Pathology (GI)
- GI Section Chief, Manhattan VA Hospital

##### So-Young Oh, MA, MS

- Assistant Director, Program for Digital Learning
- Institute for Innovations in Medical Education

##### Kira Melamud, MD

- Assistant Professor of Radiology
- Content Director (Radiology)

##### Jillian Lieber, MA

- Instructional Designer
- Institute for Innovations in Medical Education

##### Andrew Clayburn

- Medical Student , NYU Grossman School of Medicine

##### Adam Skolnick, MD

- Associate Professor of Medicine (Cardiology)

##### Brian Shearer, PhD

- Assistant Professor of Cell Biology (Anatomy)
