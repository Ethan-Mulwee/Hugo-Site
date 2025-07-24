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

