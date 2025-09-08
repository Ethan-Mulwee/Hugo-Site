---
date: '2025-08-18T11:22:05-04:00'
draft: false
title: 'Stylizing Minecraft Renders in Blender'
cover:
    image: "images/03_Stylization-Thumbnail.png"
imgbg: "images/03_Stylization-Thumbnail.png"
build:
  list: never
---

# Introduction
![](/images/Stylized-Shading.webp)
When I create stylized Minecraft artwork my workflow is almost entirely within Blender. This way of working allows for a lot of flexiblity as the scene and shading can be worked on simultaneously. And since much of the shading can be done procedually it also adapts very well to animation. There are many ways to do it so I'm going to cover the basic theory that encompases the idea. And then the past present and future of my workflow.

Note: this workflow does not to automate the artistic process. It can provide decent default results that can be easily tweaked by a technically minded artist.


---

# Overview
This is a relatively software agnostic overview of how to go about creating stylized shading

## Highlights
Highlights can be split into two different maps a edge map and a light map which makes it much easier to work with. 

{{% columns ratio="1.5:1" %}}
### Hightlight Mask
The highlight mask determines where highlights can and cannot go. It can also be used to encode varying widths and strength of highlights. 

For example I can change the strength of highlights in an area simply by making the edges darker.
<--->

![](/images/Edge-Map.png)

{{% /columns %}}

{{% columns ratio="1.5:1" %}}
### Light Map
The light map is used to determine where highlights go and what color they will be. 

Often times I will use the scene lighting for this map with minor tweaks. But it could also be handpainted for more control or for flat shaded scenes.


<--->

![](/images/Light-Map.png)

{{% /columns %}}

### Creating Highlights
The process for creating highlights typically ends up looking something like this:

![](/images/Highlights-Nodes.png)


## Outlines
Outlines can be achieved in a similar way to highlights they function almost as the inverse of a highlight.



## Gradients


---

# Workflow
There are A LOT of different ways to go about implementing this kind of shading in Blender. So I've made a list in order of relevance / usefulness.

## 1. Goo Engine
Goo engine is a branch of blender developed by Dillon Goo Studios to add additonal NPR features to EEVEE (legacy). As EEVEE Next came out in Blender 4.1 massively altering EEVEE this branch remains on blender 4.1 and will get no further Blender updates. Despite this, at the time of writing it still remains the most powerful option for doing NPR shading in Blender. And is what I have used for the majority of my stylized projects.

{{% columns ratio="3:1" %}}
### The Curvature Node

Goo Engine provides exactly the node needed to make this possible as a easy to use shader. The curvature node can be used to detected the edges of objects as well as their outlines.

<--->

![](/images/Curvature.png)

{{% /columns %}}

{{% columns ratio="3:1" %}}
### My Goo Engine Shader

This large group node is the one I use for shading with Goo Engine. It contains many settings which are probably best explained simply by messing around with them one by one and looking at the debug outputs. It can be applied to roughly any object, material, or shader as long as they are at least somewhat suited to stylized shading off this kind.

To use it just add it to the end of your shader node tree. Then from there tweak the settings as needed. The download includes a basic example scene.

[Download link](https://drive.google.com/file/d/17hxKhxx-PUnSgdRoFRYSVUQFM3fal2yZ/view?usp=sharing)

<--->

![](/images/PS_Combined(Goo).png)

{{% /columns %}}



### Downloading/Compiling Goo Engine
You can find info about how to get Goo Engine at https://www.dillongoostudios.com/gooengine. 

Dillon Goo Studios only provides Goo Engine pre-built to patreons and only includes Windows and Mac builds. However the project is open-source so you can just compile it for yourself should you choose. [Source Code on Github](https://github.com/dillongoostudios/goo-engine). 

Note that since this repo is out of date with the main Blender branch the typical building process doesn't qutie work. This is because `make update` will get libraries from SVN for the main branch of Blender. In the latest builds of blender libraries are now stored in `lib` rather than `../lib` and the names of OS platforms have changed. To solve this issue you can manually checkout the [SVN repositories for blender 4.1](https://svn.blender.org/svnroot/bf-blender/tags/blender-4.1-release/).  


```bash
# run command from project root
# i.e. cd ~/goo-engine-git/goo-engine
svn checkout https://svn.blender.org/svnroot/bf-blender/tags/blender-4.1-release/
```


As this process is usually pretty slow you can just checkout the files relevant to your OS. Once this is done you should be able to build Blender as normal.

## 2. Viewport Compositing 

## 3. Vanilla Blender shaders

## 4. Outline Branch



---

# Other Cool Stuff