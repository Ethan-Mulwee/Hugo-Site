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