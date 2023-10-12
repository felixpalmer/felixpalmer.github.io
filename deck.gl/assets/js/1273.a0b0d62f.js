"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1273],{9187:i=>{function t(i,t,e){e=e||2;var o,l,g,a,c,s,f,v=t&&t.length,p=v?t[0]*e:i.length,_=n(i,0,p,e,!0),d=[];if(!_||_.next===_.prev)return d;if(v&&(_=function(i,t,e,r){var o,l,g,a=[];for(o=0,l=t.length;o<l;o++)(g=n(i,t[o]*r,o<l-1?t[o+1]*r:i.length,r,!1))===g.next&&(g.steiner=!0),a.push(x(g));for(a.sort(h),o=0;o<a.length;o++)e=u(a[o],e);return e}(i,t,_,e)),i.length>80*e){o=g=i[0],l=a=i[1];for(var L=e;L<p;L+=e)(c=i[L])<o&&(o=c),(s=i[L+1])<l&&(l=s),c>g&&(g=c),s>a&&(a=s);f=0!==(f=Math.max(g-o,a-l))?32767/f:0}return r(_,d,e,o,l,f,0),d}function n(i,t,n,e,r){var o,l;if(r===E(i,t,n,e)>0)for(o=t;o<n;o+=e)l=b(o,i[o],i[o+1],l);else for(o=n-e;o>=t;o-=e)l=b(o,i[o],i[o+1],l);return l&&_(l,l.next)&&(C(l),l=l.next),l}function e(i,t){if(!i)return i;t||(t=i);var n,e=i;do{if(n=!1,e.steiner||!_(e,e.next)&&0!==p(e.prev,e,e.next))e=e.next;else{if(C(e),(e=t=e.prev)===e.next)break;n=!0}}while(n||e!==t);return t}function r(i,t,n,h,u,c,x){if(i){!x&&c&&function(i,t,n,e){var r=i;do{0===r.z&&(r.z=s(r.x,r.y,t,n,e)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,function(i){var t,n,e,r,o,l,g,a,h=1;do{for(n=i,i=null,o=null,l=0;n;){for(l++,e=n,g=0,t=0;t<h&&(g++,e=e.nextZ);t++);for(a=h;g>0||a>0&&e;)0!==g&&(0===a||!e||n.z<=e.z)?(r=n,n=n.nextZ,g--):(r=e,e=e.nextZ,a--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=e}o.nextZ=null,h*=2}while(l>1)}(r)}(i,h,u,c);for(var f,v,p=i;i.prev!==i.next;)if(f=i.prev,v=i.next,c?l(i,h,u,c):o(i))t.push(f.i/n|0),t.push(i.i/n|0),t.push(v.i/n|0),C(i),i=v.next,p=v.next;else if((i=v)===p){x?1===x?r(i=g(e(i),t,n),t,n,h,u,c,2):2===x&&a(i,t,n,h,u,c):r(e(i),t,n,h,u,c,1);break}}}function o(i){var t=i.prev,n=i,e=i.next;if(p(t,n,e)>=0)return!1;for(var r=t.x,o=n.x,l=e.x,g=t.y,a=n.y,h=e.y,u=r<o?r<l?r:l:o<l?o:l,c=g<a?g<h?g:h:a<h?a:h,s=r>o?r>l?r:l:o>l?o:l,x=g>a?g>h?g:h:a>h?a:h,v=e.next;v!==t;){if(v.x>=u&&v.x<=s&&v.y>=c&&v.y<=x&&f(r,g,o,a,l,h,v.x,v.y)&&p(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function l(i,t,n,e){var r=i.prev,o=i,l=i.next;if(p(r,o,l)>=0)return!1;for(var g=r.x,a=o.x,h=l.x,u=r.y,c=o.y,x=l.y,v=g<a?g<h?g:h:a<h?a:h,_=u<c?u<x?u:x:c<x?c:x,d=g>a?g>h?g:h:a>h?a:h,L=u>c?u>x?u:x:c>x?c:x,m=s(v,_,t,n,e),y=s(d,L,t,n,e),w=i.prevZ,b=i.nextZ;w&&w.z>=m&&b&&b.z<=y;){if(w.x>=v&&w.x<=d&&w.y>=_&&w.y<=L&&w!==r&&w!==l&&f(g,u,a,c,h,x,w.x,w.y)&&p(w.prev,w,w.next)>=0)return!1;if(w=w.prevZ,b.x>=v&&b.x<=d&&b.y>=_&&b.y<=L&&b!==r&&b!==l&&f(g,u,a,c,h,x,b.x,b.y)&&p(b.prev,b,b.next)>=0)return!1;b=b.nextZ}for(;w&&w.z>=m;){if(w.x>=v&&w.x<=d&&w.y>=_&&w.y<=L&&w!==r&&w!==l&&f(g,u,a,c,h,x,w.x,w.y)&&p(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=y;){if(b.x>=v&&b.x<=d&&b.y>=_&&b.y<=L&&b!==r&&b!==l&&f(g,u,a,c,h,x,b.x,b.y)&&p(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function g(i,t,n){var r=i;do{var o=r.prev,l=r.next.next;!_(o,l)&&d(o,r,r.next,l)&&y(o,l)&&y(l,o)&&(t.push(o.i/n|0),t.push(r.i/n|0),t.push(l.i/n|0),C(r),C(r.next),r=i=l),r=r.next}while(r!==i);return e(r)}function a(i,t,n,o,l,g){var a=i;do{for(var h=a.next.next;h!==a.prev;){if(a.i!==h.i&&v(a,h)){var u=w(a,h);return a=e(a,a.next),u=e(u,u.next),r(a,t,n,o,l,g,0),void r(u,t,n,o,l,g,0)}h=h.next}a=a.next}while(a!==i)}function h(i,t){return i.x-t.x}function u(i,t){var n=function(i,t){var n,e=t,r=i.x,o=i.y,l=-1/0;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){var g=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=r&&g>l&&(l=g,n=e.x<e.next.x?e:e.next,g===r))return n}e=e.next}while(e!==t);if(!n)return null;var a,h=n,u=n.x,s=n.y,x=1/0;e=n;do{r>=e.x&&e.x>=u&&r!==e.x&&f(o<s?r:l,o,u,s,o<s?l:r,o,e.x,e.y)&&(a=Math.abs(o-e.y)/(r-e.x),y(e,i)&&(a<x||a===x&&(e.x>n.x||e.x===n.x&&c(n,e)))&&(n=e,x=a)),e=e.next}while(e!==h);return n}(i,t);if(!n)return t;var r=w(n,i);return e(r,r.next),e(n,n.next)}function c(i,t){return p(i.prev,i,t.prev)<0&&p(t.next,i,i.next)<0}function s(i,t,n,e,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-n)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-e)*r|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function x(i){var t=i,n=i;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==i);return n}function f(i,t,n,e,r,o,l,g){return(r-l)*(t-g)>=(i-l)*(o-g)&&(i-l)*(e-g)>=(n-l)*(t-g)&&(n-l)*(o-g)>=(r-l)*(e-g)}function v(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!function(i,t){var n=i;do{if(n.i!==i.i&&n.next.i!==i.i&&n.i!==t.i&&n.next.i!==t.i&&d(n,n.next,i,t))return!0;n=n.next}while(n!==i);return!1}(i,t)&&(y(i,t)&&y(t,i)&&function(i,t){var n=i,e=!1,r=(i.x+t.x)/2,o=(i.y+t.y)/2;do{n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(e=!e),n=n.next}while(n!==i);return e}(i,t)&&(p(i.prev,i,t.prev)||p(i,t.prev,t))||_(i,t)&&p(i.prev,i,i.next)>0&&p(t.prev,t,t.next)>0)}function p(i,t,n){return(t.y-i.y)*(n.x-t.x)-(t.x-i.x)*(n.y-t.y)}function _(i,t){return i.x===t.x&&i.y===t.y}function d(i,t,n,e){var r=m(p(i,t,n)),o=m(p(i,t,e)),l=m(p(n,e,i)),g=m(p(n,e,t));return r!==o&&l!==g||(!(0!==r||!L(i,n,t))||(!(0!==o||!L(i,e,t))||(!(0!==l||!L(n,i,e))||!(0!==g||!L(n,t,e)))))}function L(i,t,n){return t.x<=Math.max(i.x,n.x)&&t.x>=Math.min(i.x,n.x)&&t.y<=Math.max(i.y,n.y)&&t.y>=Math.min(i.y,n.y)}function m(i){return i>0?1:i<0?-1:0}function y(i,t){return p(i.prev,i,i.next)<0?p(i,t,i.next)>=0&&p(i,i.prev,t)>=0:p(i,t,i.prev)<0||p(i,i.next,t)<0}function w(i,t){var n=new Z(i.i,i.x,i.y),e=new Z(t.i,t.x,t.y),r=i.next,o=t.prev;return i.next=t,t.prev=i,n.next=r,r.prev=n,e.next=n,n.prev=e,o.next=e,e.prev=o,e}function b(i,t,n,e){var r=new Z(i,t,n);return e?(r.next=e.next,r.prev=e,e.next.prev=r,e.next=r):(r.prev=r,r.next=r),r}function C(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Z(i,t,n){this.i=i,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E(i,t,n,e){for(var r=0,o=t,l=n-e;o<n;o+=e)r+=(i[l]-i[o])*(i[o+1]+i[l+1]),l=o;return r}i.exports=t,i.exports.default=t,t.deviation=function(i,t,n,e){var r=t&&t.length,o=r?t[0]*n:i.length,l=Math.abs(E(i,0,o,n));if(r)for(var g=0,a=t.length;g<a;g++){var h=t[g]*n,u=g<a-1?t[g+1]*n:i.length;l-=Math.abs(E(i,h,u,n))}var c=0;for(g=0;g<e.length;g+=3){var s=e[g]*n,x=e[g+1]*n,f=e[g+2]*n;c+=Math.abs((i[s]-i[f])*(i[x+1]-i[s+1])-(i[s]-i[x])*(i[f+1]-i[s+1]))}return 0===l&&0===c?0:Math.abs((c-l)/l)},t.flatten=function(i){for(var t=i[0][0].length,n={vertices:[],holes:[],dimensions:t},e=0,r=0;r<i.length;r++){for(var o=0;o<i[r].length;o++)for(var l=0;l<t;l++)n.vertices.push(i[r][o][l]);r>0&&(e+=i[r-1].length,n.holes.push(e))}return n}},41173:(i,t,n)=>{n.d(t,{N:()=>c,s:()=>s});var e=n(27872);const r=e.H`\
#if (defined(SHADER_TYPE_FRAGMENT) && defined(LIGHTING_FRAGMENT)) || (defined(SHADER_TYPE_VERTEX) && defined(LIGHTING_VERTEX))

struct AmbientLight {
 vec3 color;
};

struct PointLight {
 vec3 color;
 vec3 position;

 // Constant-Linear-Exponential
 vec3 attenuation;
};

struct DirectionalLight {
  vec3 color;
  vec3 direction;
};

uniform AmbientLight lighting_uAmbientLight;
uniform PointLight lighting_uPointLight[MAX_LIGHTS];
uniform DirectionalLight lighting_uDirectionalLight[MAX_LIGHTS];
uniform int lighting_uPointLightCount;
uniform int lighting_uDirectionalLightCount;

uniform bool lighting_uEnabled;

float getPointLightAttenuation(PointLight pointLight, float distance) {
  return pointLight.attenuation.x
       + pointLight.attenuation.y * distance
       + pointLight.attenuation.z * distance * distance;
}

#endif
`,o={lightSources:{}};function l(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{color:t=[0,0,0],intensity:n=1}=i;return t.map((i=>i*n/255))}const g={name:"lights",vs:r,fs:r,getUniforms:function i(){var t,n;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;if("lightSources"in e){const{ambientLight:i,pointLights:t,directionalLights:n}=e.lightSources||{};return i||t&&t.length>0||n&&n.length>0?Object.assign({},function(i){let{ambientLight:t,pointLights:n=[],directionalLights:e=[]}=i;const r={};return r["lighting_uAmbientLight.color"]=t?l(t):[0,0,0],n.forEach(((i,t)=>{r[`lighting_uPointLight[${t}].color`]=l(i),r[`lighting_uPointLight[${t}].position`]=i.position,r[`lighting_uPointLight[${t}].attenuation`]=i.attenuation||[1,0,0]})),r.lighting_uPointLightCount=n.length,e.forEach(((i,t)=>{r[`lighting_uDirectionalLight[${t}].color`]=l(i),r[`lighting_uDirectionalLight[${t}].direction`]=i.direction})),r.lighting_uDirectionalLightCount=e.length,r}({ambientLight:i,pointLights:t,directionalLights:n}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in e){const r={pointLights:[],directionalLights:[]};for(const i of e.lights||[])switch(i.type){case"ambient":r.ambientLight=i;break;case"directional":null===(t=r.directionalLights)||void 0===t||t.push(i);break;case"point":null===(n=r.pointLights)||void 0===n||n.push(i)}return i({lightSources:r})}return{}},defines:{MAX_LIGHTS:3}},a=e.H`\

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
`,h={};function u(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;if(!("material"in i))return{};const{material:t}=i;return t?function(i){const{ambient:t=.35,diffuse:n=.6,shininess:e=32,specularColor:r=[30,30,30]}=i;return{lighting_uAmbient:t,lighting_uDiffuse:n,lighting_uShininess:e,lighting_uSpecularColor:r.map((i=>i/255))}}(t):{lighting_uEnabled:!1}}const c={name:"gouraud-lighting",dependencies:[g],vs:a,defines:{LIGHTING_VERTEX:1},getUniforms:u},s={name:"phong-lighting",dependencies:[g],fs:a,defines:{LIGHTING_FRAGMENT:1},getUniforms:u}}}]);