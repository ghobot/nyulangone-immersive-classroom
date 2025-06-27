---
layout: layouts/hubs_page.njk
title: Methods
---


The [Mozilla Hubs platform](https://hubs.mozilla.com/) was chosen for in-house produced XR educational activities because of its accessibility and ease of customization and deployment. However, 3D assets needed to first be developed in other programs and imported.

https://youtu.be/5QnOsyyebEQ

<hr class="my-5">

## User-centered Design and User Testing
User adoption and success is tied to utilizing [Human-centered design principles](https://www.designkit.org/human-centered-design). Reach out often to educators and students (both different sets of users) to test out design decisions. Hubs makes it possible to quickly create testing scenarios, but a paper prototype of your experience can yield fruitful feedback in less time.

<hr class="my-5">

## Model Sculpting
First, Kristen Ramirez uses Adobe Medium in a virtual reality headset to sculpt the rooms and other assets for the Hubs experience. At times, reference models were imported and modified within Medium while other rooms and assets were built from scratch. 

https://vimeo.com/695216682

<hr class="my-5">

## Model and Scene Optimization


The model was then imported into Blender, an open-source 3D software toolkit. In Blender, the model can be optimized for the Hubs platform and components like physics-based lighting, rendering to the texture, and animations can be added. 

https://youtu.be/afB8eQO_rEI

#
#

https://youtu.be/OX88H3rDWtA

<hr class="my-5">

## Scene Creation 
The blender project is exported as a .glb 3D file that is supported in Hubs. Baked texture atlases and lightmaps can reduce scene files sizes and reduce the need for real-time lighting, making the experience run smoothly on most devices. The .glb model is imported into Hubs authoring tool, spoke, that allows the creation of scene logic, generic 3D assets, and web objects. Publishing a compiled scene and the creation of scene templates are also done in spoke. 

The mozilla team is always improving the scene deployment strategy. We highly recommend joining the [Mozilla Hubs Discord](https://hubs.mozilla.com/discord)  with an active community and lively conversation about unlocking this platform!  

https://youtu.be/DUECN5fEN-o

<hr class="my-5">

## Asset and Media Creation

Image, audio and video files can be added to scenes via hubs authoring tool Spoke where they can be triggered to play by user action and location. In order to make the scene run well on the web on multiple devices, asset size and resolution is critical. Take note of Video Bit Rate, image dimensions, file size to optimize your scene frame rate and draw calls. Decimating large meshes for smaller mesh counts, and baking light information into textures can also dramatically improve performance. 

<hr class="my-5">

## User Orientation
Three different tutorial rooms have been built out thus far: two for desktop-based experiences and one for VR. Time permitting, these tutorial rooms have been deployed from immediately to up to one week before a given Hubs based educational intervention. Each tutorial is a simplified room that directs students how to navigate the spaces and use commands to interact with the digital assets. Each was curated to the types of interactions and prompts present in the corresponding educational room and encouraged exploration of the space to highlight the immersive capabilities of the platform. 

<iframe src="https://hubs.mozilla.com/v6Vh9zj//?embed_token=3f536ac80badaa0bac8451a673e026e2" style="width: 100%; height: 80vh;" allow="microphone; camera; vr; speaker;"></iframe>

#

<iframe src="https://hubs.mozilla.com/m6sawum//?embed_token=35aed08d83c6eb6f3118b56d51bf3512" style="width: 100%; height: 80vh;" allow="microphone; camera; vr; speaker;"></iframe>

#

https://vimeo.com/641014605

<hr class="my-5">

## Resources:
- [Adobe Medium](https://www.adobe.com/products/medium.html)
- [Blender](https://www.blender.org/)
- [Mozilla Hubs](https://hubs.mozilla.com/)
- [Mozilla Hubs Labs](https://hubs.mozilla.com/labs/)
- [Spoke](https://hubs.mozilla.com/spoke)
- [Sketchfab](https://sketchfab.com)
- [Adobe Creative Cloud](https://www.adobe.com/creativecloud.html)
- [Google Drawing](https://docs.google.com/drawings)
- [TinyPNG](https://tinypng.com/)
- [Ideo Human-centered Design Toolkit](https://www.designkit.org/human-centered-design)
