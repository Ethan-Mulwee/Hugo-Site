---
date: '2025-07-22T14:13:13-04:00'
draft: false
title: 'Hello World'
mathjax: true
showtoc: false
cover:
    image: "images/Overlook-Banner.png"

---
Behold a website. I want to use this as a place to host projects, documentation, findings, tutorials, whatever. It's built using [HUGO](https://gohugo.io/) with the theme [PaperMod](https://github.com/adityatelange/hugo-PaperMod).

[Link to site's source on GitHub](https://github.com/Ethan-Mulwee/Hugo-Site)

---

### MathJax
I managed to add MathJax support after a bunch of fumbling around. If you want to add MathJax to a Hugo site yourself [see](https://geoffruddock.com/math-typesetting-in-hugo/) 

To give a good test here are some equations from my notes 
$\definecolor{blenderRed}{RGB}{255,51,82}$ $\definecolor{blenderGreen}{RGB}{120,220,0}$ $\definecolor{blenderBlue}{RGB}{40,144,255}$
$$\begin{bmatrix}
ax +by +cz \\\ ex + fy +gz \\\ ix+jy+kz
\end{bmatrix}+\begin{bmatrix}
d\\\h\\\i
\end{bmatrix} = \begin{bmatrix}
 ax+by+cz+d \\\ ex+fy+gz+h \\\ ix+jy+kz+l
\end{bmatrix} = \begin{bmatrix}
a&b&c&d \\\ e&f&g&h\\\i&j&k&l
\end{bmatrix}\begin{bmatrix}
x\\\y\\\z\\\1
\end{bmatrix}$$

$${\Huge\LaTeX}$$

$$\Large C_{ij} = \sum\limits_{i} A_{ik}B_{kj}$$
$$\Large \color{blenderRed}{x} \color{white} + \color{blenderGreen}{y} \color{white} + \color{blenderBlue}{z}$$

---

### Code Formating
```cpp
#include <iostream>

struct Vector3 {
    float x,y,z;
};

int main() {
    Vector3 vec;

    std::cout << "hello world \n";    
}
```
---

### Embedded Content
{{< youtube 5GtWIwTeS-4 >}}
<img src="/images/maxwell.gif" alt="alt" title="Maxwell" width="800" height="200">
{{< sketchfab id="ti-84-calculator-66585409eb6b4104809b34cc219ae142" width="800" height="600">}}


### Raylib Game
[tetris](/tetris.html), I'm working figuring out how to better embed these so it sizes and centers more properly. As well as on screen buttons for mobile devices?


---

{{% columns ratio="1:2" %}}
### Maxwell
![](/images/maxwell.gif)
![](/images/maxwell.gif)

<--->

### His Equations

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
$$({\vec {\nabla }}\cdot {\vec {E}}={\frac {\rho }{\varepsilon _{0}}})$$

quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore

{{% /columns %}}

---
{{% columns %}}
### Left
{{< collapse Title="left test">}}
it's left
{{< /collapse >}}
<--->
### Center
{{< collapse Title="center test">}}
it's life
{{< /collapse >}}
<--->
### Right
{{< collapse Title="right test">}}
it's right
{{< /collapse >}}

{{% /columns %}}

---
## GLSL Canvas

<script type="text/javascript" src="https://rawgit.com/patriciogonzalezvivo/glslCanvas/master/dist/GlslCanvas.js"></script>

<canvas class="glslCanvas" data-fragment-url="/shader.frag" width="710" height="500"></canvas>

```glsl
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float map(vec3 p) {
    vec3 q = p;

    q = mod(p, vec3(1,1,1)) - 0.5;
    return length(q) - 0.3 /*((sin(u_Time)*0.5)+1)*/;
}

void main() {
   vec2 uv = (gl_FragCoord.xy/u_resolution)-vec2(0.5,0.5);
   vec3 ro = vec3(0.0,u_time*0.5,u_time*1.0);
   vec3 rd = normalize(vec3(uv.xy,1));
   vec3 col = vec3(0);

   float t = 0.0;

   for (int i = 0; i < 150; i++) {
       vec3 p = ro + rd * t;
       float d = map(p);
       t += d;
       col = vec3(i)/150.0; // Debug code for iteration code

       if (d < 0.001) break;
       if (t > 100.0) break;
   }

//    col = vec3(t*0.2);

   gl_FragColor = vec4(col, 1.0);
}
```
see https://github.com/patriciogonzalezvivo/glslCanvas


