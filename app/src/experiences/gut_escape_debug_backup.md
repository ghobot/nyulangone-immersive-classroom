---
title: GI Escape Room
short_description: "Teams of learners on the desktop navigate the gut by solving clinicaly relevent questions / clues to discover ways around the gastro-intestinal tract."
date_deployed: "5-3-2021"
tags: experience
eleventyExcludeFromCollections: true
hero_video: "https://vimeo.com/695472713"
thumbnail: "https://cdn.glitch.global/bf2d4b6c-c9a9-46ba-a671-61e2f05114b6/hubs3.png?v=1648918735630"
layout: "layouts/experience_debug.njk"
---

<div class="row">
  
<!-- {% include "hubs_experience_spyscroll.html" %}
 -->
<div class="scrollTarget col-9">
  
<div id="hero_video">

  {{ hero_video }}  

</div>

<hr class="my-3">

<div data-bs-spy="scroll" data-bs-target="#experience-list" data-bs-offset="0" class="scrollspy-example" tabindex="0">

<h2 id="objectives">
  Objectives
</h2>

### Learning

- Synthesize gross anatomy and GI clinical content
- Display the spatial relationships between the gut tube and associated vasculature
- Display the biliary system
- Demonstrate clinical procedures in the foregut
- Review the histology and radiology of the foregut

### User Behavior

- Gamify learning with questions and clue-based prompts to navigate the experience
- Team-based 

<h2 id="experience">
  Experience
</h2>

This experience was built in conjunction with the survey tool Qualtrics where prompts, questions, and additional assets were provided to students to navigate through the escape room. Users traversed through the foregut, from the fundus of the stomach near the esophageal junction to the distal duodenum. As they progress through the foregut users encounter 4 discrete clinical cases: esophageal varices due to portal hypertension, pernicious anemia, a duodenal ulcer, and a common bile duct stone. Histological and radiological supplemental assets were embedded within the accompanying Qualtrics form, and windows through the walls of the GI tract at key locations allowed users to visualize and reference adjacent arteries, veins, and ducts involved in the various cases. Within the Hubs room, links to progress through the escape room were hidden in the wall of the GI tract and within other structures that were the correct answers to questions posed in the Qualtrics form. Changes in the room state such as presence or absence of blood and other bodily fluids provided context clues for the cases and their interventions. 


<h2 id="assets">
  Outside Assets
</h2> 

The escape room was synced with a Qualtrics survey that provided instructions and context to navigate the experience. Supplementary content such as embedded radiological imaging and histology slides was embedded within the Qualtrics form and shown to students in conjunction with the applicable case. Both assets, the Qualtrics instructions and Hubs experience, were embedded on one webpage to allow for easy reference between the two components. 

Radiological content is created in-house by taking anonymized DICOM data and converting the images into a JPEG stack, annotating as needed. The images are then uploaded into Radiopaedia, a web-based scrollable image stack viewer and embedded into the Qualtrics form. 

A histology slide was provided by the consulting Gastroenterologist. 

</div>
</div>
</div>
