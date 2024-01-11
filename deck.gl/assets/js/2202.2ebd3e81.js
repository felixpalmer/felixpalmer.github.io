"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2202],{3905:(t,i,e)=>{e.d(i,{Zo:()=>h,kt:()=>d});var r=e(67294);function n(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function o(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?o(Object(e),!0).forEach((function(i){n(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}function l(t,i){if(null==t)return{};var e,r,n=function(t,i){if(null==t)return{};var e,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],i.indexOf(e)>=0||(n[e]=t[e]);return n}(t,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var c=r.createContext({}),s=function(t){var i=r.useContext(c),e=i;return t&&(e="function"==typeof t?t(i):a(a({},i),t)),e},h=function(t){var i=s(t.components);return r.createElement(c.Provider,{value:i},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var i=t.children;return r.createElement(r.Fragment,{},i)}},f=r.forwardRef((function(t,i){var e=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,h=l(t,["components","mdxType","originalType","parentName"]),u=s(e),f=n,d=u["".concat(c,".").concat(f)]||u[f]||g[f]||o;return e?r.createElement(d,a(a({ref:i},h),{},{components:e})):r.createElement(d,a({ref:i},h))}));function d(t,i){var e=arguments,n=i&&i.mdxType;if("string"==typeof t||n){var o=e.length,a=new Array(o);a[0]=f;var l={};for(var c in i)hasOwnProperty.call(i,c)&&(l[c]=i[c]);l.originalType=t,l[u]="string"==typeof t?t:n,a[1]=l;for(var s=2;s<o;s++)a[s]=e[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}f.displayName="MDXCreateElement"},66871:(t,i,e)=>{e.d(i,{Z:()=>u,Q:()=>h});var r=e(67614),n=e(51212),o=e(48348),a=e(46196),l=e(33085);var c=e(42957);function s(t,i,e,n){var o,s=(0,r.ly)(t,i,e);switch((n=(0,a.Z)(null==n?",f":n)).type){case"s":var h=Math.max(Math.abs(t),Math.abs(i));return null!=n.precision||isNaN(o=function(t,i){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,l.Z)(i)/3)))-(0,l.Z)(Math.abs(t)))}(s,h))||(n.precision=o),(0,c.jH)(n,h);case"":case"e":case"g":case"p":case"r":null!=n.precision||isNaN(o=function(t,i){return t=Math.abs(t),i=Math.abs(i)-t,Math.max(0,(0,l.Z)(i)-(0,l.Z)(t))+1}(s,Math.max(Math.abs(t),Math.abs(i))))||(n.precision=o-("e"===n.type));break;case"f":case"%":null!=n.precision||isNaN(o=function(t){return Math.max(0,-(0,l.Z)(Math.abs(t)))}(s))||(n.precision=o-2*("%"===n.type))}return(0,c.WU)(n)}function h(t){var i=t.domain;return t.ticks=function(t){var e=i();return(0,r.ZP)(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=i();return s(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var n,o,a=i(),l=0,c=a.length-1,s=a[l],h=a[c],u=10;for(h<s&&(o=s,s=h,h=o,o=l,l=c,c=o);u-- >0;){if((o=(0,r.G9)(s,h,e))===n)return a[l]=s,a[c]=h,i(a);if(o>0)s=Math.floor(s/o)*o,h=Math.ceil(h/o)*o;else{if(!(o<0))break;s=Math.ceil(s*o)/o,h=Math.floor(h*o)/o}n=o}return t},t}function u(){var t=(0,n.ZP)();return t.copy=function(){return(0,n.JG)(t,u())},o.o.apply(t,arguments),h(t)}},20745:(t,i,e)=>{var r=e(73935);i.s=r.createRoot,r.hydrateRoot},78542:(t,i,e)=>{function r(t){let i=1/0,e=1/0,r=1/0,n=-1/0,o=-1/0,a=-1/0;const l=t.POSITION?t.POSITION.value:[],c=l&&l.length;for(let s=0;s<c;s+=3){const t=l[s],c=l[s+1],h=l[s+2];i=t<i?t:i,e=c<e?c:e,r=h<r?h:r,n=t>n?t:n,o=c>o?c:o,a=h>a?h:a}return[[i,e,r],[n,o,a]]}e.d(i,{v:()=>r})},41708:(t,i,e)=>{e.d(i,{Z:()=>o});var r=e(41199),n=e(53563);class o{constructor(t){this.id=void 0,this.topology=void 0,this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.userData={};const{attributes:i={},indices:e=null,vertexCount:o=null}=t;this.id=t.id||(0,r.hQ)("geometry"),this.topology=t.topology,e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),this.attributes={};for(const[r,a]of Object.entries(i)){const t=ArrayBuffer.isView(a)?{value:a}:a;(0,n.h)(ArrayBuffer.isView(t.value),`${this._print(r)}: must be typed array or object with value as typed array`),"POSITION"!==r&&"positions"!==r||t.size||(t.size=3),"indices"===r?((0,n.h)(!this.indices),this.indices=t):this.attributes[r]=t}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=o||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(t){return`Geometry ${this.id} attribute ${t}`}_setAttributes(t,i){return this}_calculateVertexCount(t,i){if(i)return i.value.length;let e=1/0;for(const r of Object.values(t)){const{value:t,size:i,constant:n}=r;!n&&t&&i>=1&&(e=Math.min(e,t.length/i))}return(0,n.h)(Number.isFinite(e)),e}}},31456:(t,i,e)=>{e.d(i,{N:()=>l,s:()=>c});var r=e(57406);const n=e(27872).H`\

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
`,o={};function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;if(!("material"in t))return{};const{material:i}=t;return i?function(t){const{ambient:i=.35,diffuse:e=.6,shininess:r=32,specularColor:n=[30,30,30]}=t;return{lighting_uAmbient:i,lighting_uDiffuse:e,lighting_uShininess:r,lighting_uSpecularColor:n.map((t=>t/255))}}(i):{lighting_uEnabled:!1}}const l={name:"gouraud-lighting",dependencies:[r.H],vs:n,defines:{LIGHTING_VERTEX:1},getUniforms:a},c={name:"phong-lighting",dependencies:[r.H],fs:n,defines:{LIGHTING_FRAGMENT:1},getUniforms:a}},39875:(t,i,e)=>{e.d(i,{Z:()=>n});const r=1e20;class n{constructor({fontSize:t=24,buffer:i=3,radius:e=8,cutoff:r=.25,fontFamily:n="sans-serif",fontWeight:o="normal",fontStyle:a="normal"}={}){this.buffer=i,this.cutoff=r,this.radius=e;const l=this.size=t+4*i,c=this._createCanvas(l),s=this.ctx=c.getContext("2d",{willReadFrequently:!0});s.font=`${a} ${o} ${t}px ${n}`,s.textBaseline="alphabetic",s.textAlign="left",s.fillStyle="black",this.gridOuter=new Float64Array(l*l),this.gridInner=new Float64Array(l*l),this.f=new Float64Array(l),this.z=new Float64Array(l+1),this.v=new Uint16Array(l)}_createCanvas(t){const i=document.createElement("canvas");return i.width=i.height=t,i}draw(t){const{width:i,actualBoundingBoxAscent:e,actualBoundingBoxDescent:n,actualBoundingBoxLeft:a,actualBoundingBoxRight:l}=this.ctx.measureText(t),c=Math.ceil(e),s=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(l-a))),h=Math.min(this.size-this.buffer,c+Math.ceil(n)),u=s+2*this.buffer,g=h+2*this.buffer,f=Math.max(u*g,0),d=new Uint8ClampedArray(f),p={data:d,width:u,height:g,glyphWidth:s,glyphHeight:h,glyphTop:c,glyphLeft:0,glyphAdvance:i};if(0===s||0===h)return p;const{ctx:v,buffer:m,gridInner:_,gridOuter:b}=this;v.clearRect(m,m,s,h),v.fillText(t,m,m+c);const y=v.getImageData(m,m,s,h);b.fill(r,0,f),_.fill(0,0,f);for(let o=0;o<h;o++)for(let t=0;t<s;t++){const i=y.data[4*(o*s+t)+3]/255;if(0===i)continue;const e=(o+m)*u+t+m;if(1===i)b[e]=0,_[e]=r;else{const t=.5-i;b[e]=t>0?t*t:0,_[e]=t<0?t*t:0}}o(b,0,0,u,g,u,this.f,this.v,this.z),o(_,m,m,s,h,u,this.f,this.v,this.z);for(let r=0;r<f;r++){const t=Math.sqrt(b[r])-Math.sqrt(_[r]);d[r]=Math.round(255-255*(t/this.radius+this.cutoff))}return p}}function o(t,i,e,r,n,o,l,c,s){for(let h=i;h<i+r;h++)a(t,e*o+h,o,n,l,c,s);for(let h=e;h<e+n;h++)a(t,h*o+i,1,r,l,c,s)}function a(t,i,e,n,o,a,l){a[0]=0,l[0]=-r,l[1]=r,o[0]=t[i];for(let c=1,s=0,h=0;c<n;c++){o[c]=t[i+c*e];const n=c*c;do{const t=a[s];h=(o[c]-o[t]+n-t*t)/(c-t)/2}while(h<=l[s]&&--s>-1);s++,a[s]=c,l[s]=h,l[s+1]=r}for(let r=0,c=0;r<n;r++){for(;l[c+1]<r;)c++;const n=a[c],s=r-n;t[i+r*e]=o[n]+s*s}}}}]);