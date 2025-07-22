---
date: '2025-07-22T14:13:13-04:00'
draft: false
title: 'Hello World'
mathjax: true
showtoc: false
---
I just put together this little website. I want to use it as a place to host projects, documentation, findings, tutorials, whatever. This site was built using [HUGO](https://gohugo.io/) with the theme [PaperMod](https://github.com/adityatelange/hugo-PaperMod). Below are the features I've managed to get working so far that i want for this site.

### MathJax
I managed to add MathJax support after a bunch of fumbling around. If you want to add MathJax to a Hugo site yourself see https://geoffruddock.com/math-typesetting-in-hugo/. 

To give a good test here are some equations from my notes 
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

### Embedded Content
{{< youtube 5GtWIwTeS-4 >}}
![](/images/maxwell.gif#center)
{{< sketchfab id="ti-84-calculator-66585409eb6b4104809b34cc219ae142" width="800" height="600">}}

### Raylib Game
[tetris](/tetris.html)