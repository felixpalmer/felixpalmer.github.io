"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4699],{9187:e=>{function i(e,i,n){n=n||2;var o,l,a,u,h,g,v,s=i&&i.length,p=s?i[0]*n:e.length,_=t(e,0,p,n,!0),d=[];if(!_||_.next===_.prev)return d;if(s&&(_=function(e,i,n,r){var o,l,a,u=[];for(o=0,l=i.length;o<l;o++)(a=t(e,i[o]*r,o<l-1?i[o+1]*r:e.length,r,!1))===a.next&&(a.steiner=!0),u.push(f(a));for(u.sort(x),o=0;o<u.length;o++)n=c(u[o],n);return n}(e,i,_,n)),e.length>80*n){o=a=e[0],l=u=e[1];for(var y=n;y<p;y+=n)(h=e[y])<o&&(o=h),(g=e[y+1])<l&&(l=g),h>a&&(a=h),g>u&&(u=g);v=0!==(v=Math.max(a-o,u-l))?32767/v:0}return r(_,d,n,o,l,v,0),d}function t(e,i,t,n,r){var o,l;if(r===M(e,i,t,n)>0)for(o=i;o<t;o+=n)l=C(o,e[o],e[o+1],l);else for(o=t-n;o>=i;o-=n)l=C(o,e[o],e[o+1],l);return l&&_(l,l.next)&&(b(l),l=l.next),l}function n(e,i){if(!e)return e;i||(i=e);var t,n=e;do{if(t=!1,n.steiner||!_(n,n.next)&&0!==p(n.prev,n,n.next))n=n.next;else{if(b(n),(n=i=n.prev)===n.next)break;t=!0}}while(t||n!==i);return i}function r(e,i,t,x,c,h,f){if(e){!f&&h&&function(e,i,t,n){var r=e;do{0===r.z&&(r.z=g(r.x,r.y,i,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,function(e){var i,t,n,r,o,l,a,u,x=1;do{for(t=e,e=null,o=null,l=0;t;){for(l++,n=t,a=0,i=0;i<x&&(a++,n=n.nextZ);i++);for(u=x;a>0||u>0&&n;)0!==a&&(0===u||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,u--),o?o.nextZ=r:e=r,r.prevZ=o,o=r;t=n}o.nextZ=null,x*=2}while(l>1)}(r)}(e,x,c,h);for(var v,s,p=e;e.prev!==e.next;)if(v=e.prev,s=e.next,h?l(e,x,c,h):o(e))i.push(v.i/t|0),i.push(e.i/t|0),i.push(s.i/t|0),b(e),e=s.next,p=s.next;else if((e=s)===p){f?1===f?r(e=a(n(e),i,t),i,t,x,c,h,2):2===f&&u(e,i,t,x,c,h):r(n(e),i,t,x,c,h,1);break}}}function o(e){var i=e.prev,t=e,n=e.next;if(p(i,t,n)>=0)return!1;for(var r=i.x,o=t.x,l=n.x,a=i.y,u=t.y,x=n.y,c=r<o?r<l?r:l:o<l?o:l,h=a<u?a<x?a:x:u<x?u:x,g=r>o?r>l?r:l:o>l?o:l,f=a>u?a>x?a:x:u>x?u:x,s=n.next;s!==i;){if(s.x>=c&&s.x<=g&&s.y>=h&&s.y<=f&&v(r,a,o,u,l,x,s.x,s.y)&&p(s.prev,s,s.next)>=0)return!1;s=s.next}return!0}function l(e,i,t,n){var r=e.prev,o=e,l=e.next;if(p(r,o,l)>=0)return!1;for(var a=r.x,u=o.x,x=l.x,c=r.y,h=o.y,f=l.y,s=a<u?a<x?a:x:u<x?u:x,_=c<h?c<f?c:f:h<f?h:f,d=a>u?a>x?a:x:u>x?u:x,y=c>h?c>f?c:f:h>f?h:f,m=g(s,_,i,t,n),w=g(d,y,i,t,n),L=e.prevZ,C=e.nextZ;L&&L.z>=m&&C&&C.z<=w;){if(L.x>=s&&L.x<=d&&L.y>=_&&L.y<=y&&L!==r&&L!==l&&v(a,c,u,h,x,f,L.x,L.y)&&p(L.prev,L,L.next)>=0)return!1;if(L=L.prevZ,C.x>=s&&C.x<=d&&C.y>=_&&C.y<=y&&C!==r&&C!==l&&v(a,c,u,h,x,f,C.x,C.y)&&p(C.prev,C,C.next)>=0)return!1;C=C.nextZ}for(;L&&L.z>=m;){if(L.x>=s&&L.x<=d&&L.y>=_&&L.y<=y&&L!==r&&L!==l&&v(a,c,u,h,x,f,L.x,L.y)&&p(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;C&&C.z<=w;){if(C.x>=s&&C.x<=d&&C.y>=_&&C.y<=y&&C!==r&&C!==l&&v(a,c,u,h,x,f,C.x,C.y)&&p(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function a(e,i,t){var r=e;do{var o=r.prev,l=r.next.next;!_(o,l)&&d(o,r,r.next,l)&&w(o,l)&&w(l,o)&&(i.push(o.i/t|0),i.push(r.i/t|0),i.push(l.i/t|0),b(r),b(r.next),r=e=l),r=r.next}while(r!==e);return n(r)}function u(e,i,t,o,l,a){var u=e;do{for(var x=u.next.next;x!==u.prev;){if(u.i!==x.i&&s(u,x)){var c=L(u,x);return u=n(u,u.next),c=n(c,c.next),r(u,i,t,o,l,a,0),void r(c,i,t,o,l,a,0)}x=x.next}u=u.next}while(u!==e)}function x(e,i){return e.x-i.x}function c(e,i){var t=function(e,i){var t,n=i,r=e.x,o=e.y,l=-1/0;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){var a=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=r&&a>l&&(l=a,t=n.x<n.next.x?n:n.next,a===r))return t}n=n.next}while(n!==i);if(!t)return null;var u,x=t,c=t.x,g=t.y,f=1/0;n=t;do{r>=n.x&&n.x>=c&&r!==n.x&&v(o<g?r:l,o,c,g,o<g?l:r,o,n.x,n.y)&&(u=Math.abs(o-n.y)/(r-n.x),w(n,e)&&(u<f||u===f&&(n.x>t.x||n.x===t.x&&h(t,n)))&&(t=n,f=u)),n=n.next}while(n!==x);return t}(e,i);if(!t)return i;var r=L(t,e);return n(r,r.next),n(t,t.next)}function h(e,i){return p(e.prev,e,i.prev)<0&&p(i.next,e,e.next)<0}function g(e,i,t,n,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-t)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))|(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-n)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))<<1}function f(e){var i=e,t=e;do{(i.x<t.x||i.x===t.x&&i.y<t.y)&&(t=i),i=i.next}while(i!==e);return t}function v(e,i,t,n,r,o,l,a){return(r-l)*(i-a)>=(e-l)*(o-a)&&(e-l)*(n-a)>=(t-l)*(i-a)&&(t-l)*(o-a)>=(r-l)*(n-a)}function s(e,i){return e.next.i!==i.i&&e.prev.i!==i.i&&!function(e,i){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==i.i&&t.next.i!==i.i&&d(t,t.next,e,i))return!0;t=t.next}while(t!==e);return!1}(e,i)&&(w(e,i)&&w(i,e)&&function(e,i){var t=e,n=!1,r=(e.x+i.x)/2,o=(e.y+i.y)/2;do{t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next}while(t!==e);return n}(e,i)&&(p(e.prev,e,i.prev)||p(e,i.prev,i))||_(e,i)&&p(e.prev,e,e.next)>0&&p(i.prev,i,i.next)>0)}function p(e,i,t){return(i.y-e.y)*(t.x-i.x)-(i.x-e.x)*(t.y-i.y)}function _(e,i){return e.x===i.x&&e.y===i.y}function d(e,i,t,n){var r=m(p(e,i,t)),o=m(p(e,i,n)),l=m(p(t,n,e)),a=m(p(t,n,i));return r!==o&&l!==a||(!(0!==r||!y(e,t,i))||(!(0!==o||!y(e,n,i))||(!(0!==l||!y(t,e,n))||!(0!==a||!y(t,i,n)))))}function y(e,i,t){return i.x<=Math.max(e.x,t.x)&&i.x>=Math.min(e.x,t.x)&&i.y<=Math.max(e.y,t.y)&&i.y>=Math.min(e.y,t.y)}function m(e){return e>0?1:e<0?-1:0}function w(e,i){return p(e.prev,e,e.next)<0?p(e,i,e.next)>=0&&p(e,e.prev,i)>=0:p(e,i,e.prev)<0||p(e,e.next,i)<0}function L(e,i){var t=new Z(e.i,e.x,e.y),n=new Z(i.i,i.x,i.y),r=e.next,o=i.prev;return e.next=i,i.prev=e,t.next=r,r.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function C(e,i,t,n){var r=new Z(e,i,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function b(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Z(e,i,t){this.i=e,this.x=i,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M(e,i,t,n){for(var r=0,o=i,l=t-n;o<t;o+=n)r+=(e[l]-e[o])*(e[o+1]+e[l+1]),l=o;return r}e.exports=i,e.exports.default=i,i.deviation=function(e,i,t,n){var r=i&&i.length,o=r?i[0]*t:e.length,l=Math.abs(M(e,0,o,t));if(r)for(var a=0,u=i.length;a<u;a++){var x=i[a]*t,c=a<u-1?i[a+1]*t:e.length;l-=Math.abs(M(e,x,c,t))}var h=0;for(a=0;a<n.length;a+=3){var g=n[a]*t,f=n[a+1]*t,v=n[a+2]*t;h+=Math.abs((e[g]-e[v])*(e[f+1]-e[g+1])-(e[g]-e[f])*(e[v+1]-e[g+1]))}return 0===l&&0===h?0:Math.abs((h-l)/l)},i.flatten=function(e){for(var i=e[0][0].length,t={vertices:[],holes:[],dimensions:i},n=0,r=0;r<e.length;r++){for(var o=0;o<e[r].length;o++)for(var l=0;l<i;l++)t.vertices.push(e[r][o][l]);r>0&&(n+=e[r-1].length,t.holes.push(n))}return t}},55098:(e,i,t)=>{t.d(i,{N:()=>a,s:()=>u});var n=t(42013);const r=t(27872).H`\

uniform float lighting_uAmbient;
uniform float lighting_uDiffuse;
uniform float lighting_uShininess;
uniform vec3  lighting_uSpecularColor;

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 light_direction, vec3 view_direction, vec3 normal_worldspace, vec3 color) {
    vec3 halfway_direction = normalize(light_direction + view_direction);
    float lambertian = dot(light_direction, normal_worldspace);
    float specular = 0.0;
    if (lambertian > 0.0) {
      float specular_angle = max(dot(normal_worldspace, halfway_direction), 0.0);
      specular = pow(specular_angle, lighting_uShininess);
    }
    lambertian = max(lambertian, 0.0);
    return (lambertian * lighting_uDiffuse * surfaceColor + specular * lighting_uSpecularColor) * color;
}

vec3 lighting_getLightColor(vec3 surfaceColor, vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = surfaceColor;

  if (lighting_uEnabled) {
    vec3 view_direction = normalize(cameraPosition - position_worldspace);
    lightColor = lighting_uAmbient * surfaceColor * lighting_uAmbientLight.color;

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uPointLightCount) {
        break;
      }
      PointLight pointLight = lighting_uPointLight[i];
      vec3 light_position_worldspace = pointLight.position;
      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
    }

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uDirectionalLightCount) {
        break;
      }
      DirectionalLight directionalLight = lighting_uDirectionalLight[i];
      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}

vec3 lighting_getSpecularLightColor(vec3 cameraPosition, vec3 position_worldspace, vec3 normal_worldspace) {
  vec3 lightColor = vec3(0, 0, 0);
  vec3 surfaceColor = vec3(0, 0, 0);

  if (lighting_uEnabled) {
    vec3 view_direction = normalize(cameraPosition - position_worldspace);

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uPointLightCount) {
        break;
      }
      PointLight pointLight = lighting_uPointLight[i];
      vec3 light_position_worldspace = pointLight.position;
      vec3 light_direction = normalize(light_position_worldspace - position_worldspace);
      lightColor += lighting_getLightColor(surfaceColor, light_direction, view_direction, normal_worldspace, pointLight.color);
    }

    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= lighting_uDirectionalLightCount) {
        break;
      }
      DirectionalLight directionalLight = lighting_uDirectionalLight[i];
      lightColor += lighting_getLightColor(surfaceColor, -directionalLight.direction, view_direction, normal_worldspace, directionalLight.color);
    }
  }
  return lightColor;
}
`,o={};function l(e=o){if(!("material"in e))return{};const{material:i}=e;return i?function(e){const{ambient:i=.35,diffuse:t=.6,shininess:n=32,specularColor:r=[30,30,30]}=e;return{lighting_uAmbient:i,lighting_uDiffuse:t,lighting_uShininess:n,lighting_uSpecularColor:r.map((e=>e/255))}}(i):{lighting_uEnabled:!1}}const a={name:"gouraud-lighting",dependencies:[n.H],vs:r,defines:{LIGHTING_VERTEX:1},getUniforms:l},u={name:"phong-lighting",dependencies:[n.H],fs:r,defines:{LIGHTING_FRAGMENT:1},getUniforms:l}}}]);