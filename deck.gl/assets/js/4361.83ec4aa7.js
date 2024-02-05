"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4361],{41708:(t,i,e)=>{e.d(i,{Z:()=>r});var n=e(60326),o=e(67532);class r{constructor(t){this.id=void 0,this.topology=void 0,this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.userData={};const{attributes:i={},indices:e=null,vertexCount:r=null}=t;this.id=t.id||(0,n.hQ)("geometry"),this.topology=t.topology,e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),this.attributes={};for(const[n,l]of Object.entries(i)){const t=ArrayBuffer.isView(l)?{value:l}:l;(0,o.h)(ArrayBuffer.isView(t.value),`${this._print(n)}: must be typed array or object with value as typed array`),"POSITION"!==n&&"positions"!==n||t.size||(t.size=3),"indices"===n?((0,o.h)(!this.indices),this.indices=t):this.attributes[n]=t}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(t){return`Geometry ${this.id} attribute ${t}`}_setAttributes(t,i){return this}_calculateVertexCount(t,i){if(i)return i.value.length;let e=1/0;for(const n of Object.values(t)){const{value:t,size:i,constant:o}=n;!o&&t&&i>=1&&(e=Math.min(e,t.length/i))}return(0,o.h)(Number.isFinite(e)),e}}},57406:(t,i,e)=>{e.d(i,{H:()=>l});const n=e(27872).H`\
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
`,o={lightSources:{}};function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{color:i=[0,0,0],intensity:e=1}=t;return i.map((t=>t*e/255))}const l={name:"lights",vs:n,fs:n,getUniforms:function t(){var i,e;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;if("lightSources"in n){const{ambientLight:t,pointLights:i,directionalLights:e}=n.lightSources||{};return t||i&&i.length>0||e&&e.length>0?Object.assign({},function(t){let{ambientLight:i,pointLights:e=[],directionalLights:n=[]}=t;const o={};return o["lighting_uAmbientLight.color"]=i?r(i):[0,0,0],e.forEach(((t,i)=>{o[`lighting_uPointLight[${i}].color`]=r(t),o[`lighting_uPointLight[${i}].position`]=t.position,o[`lighting_uPointLight[${i}].attenuation`]=t.attenuation||[1,0,0]})),o.lighting_uPointLightCount=e.length,n.forEach(((t,i)=>{o[`lighting_uDirectionalLight[${i}].color`]=r(t),o[`lighting_uDirectionalLight[${i}].direction`]=t.direction})),o.lighting_uDirectionalLightCount=n.length,o}({ambientLight:t,pointLights:i,directionalLights:e}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in n){const o={pointLights:[],directionalLights:[]};for(const t of n.lights||[])switch(t.type){case"ambient":o.ambientLight=t;break;case"directional":null===(i=o.directionalLights)||void 0===i||i.push(t);break;case"point":null===(e=o.pointLights)||void 0===e||e.push(t)}return t({lightSources:o})}return{}},defines:{MAX_LIGHTS:3}}},35300:(t,i,e)=>{e.d(i,{q:()=>r});var n=e(27872);const o=new Float32Array([0,1,1,1]),r={name:"picking",vs:n.H`\
uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useFloatColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

out vec4 picking_vRGBcolor_Avalid;

// Normalize unsigned byte color to 0-1 range
vec3 picking_normalizeColor(vec3 color) {
  return picking.useFloatColors > 0.5 ? color : color / 255.0;
}

// Normalize unsigned byte color to 0-1 range
vec4 picking_normalizeColor(vec4 color) {
  return picking.useFloatColors > 0.5 ? color : color / 255.0;
}

bool picking_isColorZero(vec3 color) {
  return dot(color, vec3(1.0)) < 0.00001;
}

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.00001;
}

// Check if this vertex is highlighted 
bool isVertexHighlighted(vec3 vertexColor) {
  vec3 highlightedObjectColor = picking_normalizeColor(picking.highlightedObjectColor);
  return
    bool(picking.isHighlightActive) && picking_isColorZero(abs(vertexColor - highlightedObjectColor));
}

// Set the current picking color
void picking_setPickingColor(vec3 pickingColor) {
  pickingColor = picking_normalizeColor(pickingColor);

  if (bool(picking.isActive)) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    // if (!bool(picking.isAttribute)) {
    // Stores the picking color so that the fragment shader can render it during picking
    picking_vRGBcolor_Avalid.rgb = pickingColor;
    // }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexHighlighted(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.r = value;
  }
}

void picking_setPickingAttribute(vec2 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}

void picking_setPickingAttribute(vec3 value) {
  if (bool(picking.isAttribute)) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,fs:n.H`\
uniform pickingUniforms {
  float isActive;
  float isAttribute;
  float isHighlightActive;
  float useFloatColors;
  vec3 highlightedObjectColor;
  vec4 highlightColor;
} picking;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  // If we are still picking, we don't highlight
  if (picking.isActive > 0.5) {
    return color;
  }

  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    // Blend in highlight color based on its alpha value
    float highLightAlpha = picking.highlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking.highlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (bool(picking.isActive)) {
    if (picking_vRGBcolor_Avalid.a == 0.0) {
      discard;
    }
    return picking_vRGBcolor_Avalid;
  }
  return color;
}

/*
 * Returns picking color if picking is enabled if not
 * highlight color if this item is selected, otherwise unmodified argument.
 */
vec4 picking_filterColor(vec4 color) {
  vec4 highlightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highlightColor);
}
`,uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:o},getUniforms:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i={};if(void 0===t.highlightedObjectColor);else if(null===t.highlightedObjectColor)i.isHighlightActive=!1;else{i.isHighlightActive=!0;const e=t.highlightedObjectColor.slice(0,3);i.highlightedObjectColor=e}if(t.highlightColor){const e=Array.from(t.highlightColor,(t=>t/255));Number.isFinite(e[3])||(e[3]=1),i.highlightColor=e}void 0!==t.isActive&&(i.isActive=Boolean(t.isActive),i.isAttribute=Boolean(t.isAttribute));void 0!==t.useFloatColors&&(i.useFloatColors=Boolean(t.useFloatColors));return i}}},78064:(t,i,e)=>{e.d(i,{wG:()=>n,WZ:()=>S,GU:()=>K,dj:()=>E,ct:()=>W,OT:()=>c,ap:()=>l,Ny:()=>o});const n={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function o(t,i,e={}){const n=function(t,i={}){return Math.sign(l(t,i))}(t,e);return n!==i&&(function(t,i){const{start:e=0,end:n=t.length,size:o=2}=i,r=(n-e)/o,l=Math.floor(r/2);for(let s=0;s<l;++s){const i=e+s*o,n=e+(r-1-s)*o;for(let e=0;e<o;++e){const o=t[i+e];t[i+e]=t[n+e],t[n+e]=o}}}(t,e),!0)}const r={x:0,y:1,z:2};function l(t,i={}){const{start:e=0,end:n=t.length,plane:o="xy"}=i,l=i.size||2;let s=0;const c=r[o[0]],h=r[o[1]];for(let r=e,g=n-l;r<n;r+=l)s+=(t[r+c]-t[g+c])*(t[r+h]+t[g+h]),g=r;return s/2}var s=e(4942);function c(t,i,e=2,n,o="xy"){const r=i&&i.length,l=r?i[0]*e:t.length;let s=h(t,0,l,e,!0,n&&n[0],o);const c=[];if(!s||s.next===s.prev)return c;let g,f,a,p,x,y,b;if(r&&(s=function(t,i,e,n,o,r){const l=[];let s,c,g,u,f;for(s=0,c=i.length;s<c;s++)g=i[s]*n,u=s<c-1?i[s+1]*n:t.length,f=h(t,g,u,n,!1,o&&o[s+1],r),f===f.next&&(f.steiner=!0),l.push(k(f));for(l.sort(d),s=0;s<l.length;s++)e=v(l[s],e);return e}(t,i,s,e,n,o)),t.length>80*e){p=f=t[0],x=a=t[1];for(let i=e;i<l;i+=e)y=t[i],b=t[i+1],y<p&&(p=y),b<x&&(x=b),y>f&&(f=y),b>a&&(a=b);g=Math.max(f-p,a-x),g=0!==g?32767/g:0}return u(s,c,e,p,x,g,0),c}function h(t,i,e,n,o,s,c){let h,g;void 0===s&&(s=l(t,{start:i,end:e,size:n,plane:c}));let u=r[c[0]],f=r[c[1]];if(o===s<0)for(h=i;h<e;h+=n)g=O(h,t[h+u],t[h+f],g);else for(h=e-n;h>=i;h-=n)g=O(h,t[h+u],t[h+f],g);return g&&m(g,g.next)&&(G(g),g=g.next),g}function g(t,i){if(!t)return t;i||(i=t);let e,n=t;do{if(e=!1,n.steiner||!m(n,n.next)&&0!==A(n.prev,n,n.next))n=n.next;else{if(G(n),n=i=n.prev,n===n.next)break;e=!0}}while(e||n!==i);return i}function u(t,i,e,n,o,r,l){if(!t)return;!l&&r&&function(t,i,e,n){let o=t;do{0===o.z&&(o.z=b(o.x,o.y,i,e,n)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next}while(o!==t);o.prevZ.nextZ=null,o.prevZ=null,function(t){let i,e,n,o,r,l,s,c,h=1;do{for(o=t,t=null,c=null,n=0;o;){for(n++,l=o,r=0,e=0;e<h&&(r++,l=l.nextZ,l);e++);for(s=h;r>0||s>0&&l;)0!==r&&(0===s||!l||o.z<=l.z)?(i=o,o=o.nextZ,r--):(i=l,l=l.nextZ,s--),c?c.nextZ=i:t=i,i.prevZ=c,c=i;o=l}c.nextZ=null,h*=2}while(n>1)}(o)}(t,n,o,r);let s,c,h=t;for(;t.prev!==t.next;)if(s=t.prev,c=t.next,r?a(t,n,o,r):f(t))i.push(s.i/e|0),i.push(t.i/e|0),i.push(c.i/e|0),G(t),t=c.next,h=c.next;else if((t=c)===h){l?1===l?u(t=p(g(t),i,e),i,e,n,o,r,2):2===l&&x(t,i,e,n,o,r):u(g(t),i,e,n,o,r,1);break}}function f(t){const i=t.prev,e=t,n=t.next;if(A(i,e,n)>=0)return!1;const o=i.x,r=e.x,l=n.x,s=i.y,c=e.y,h=n.y,g=o<r?o<l?o:l:r<l?r:l,u=s<c?s<h?s:h:c<h?c:h,f=o>r?o>l?o:l:r>l?r:l,a=s>c?s>h?s:h:c>h?c:h;let p=n.next;for(;p!==i;){if(p.x>=g&&p.x<=f&&p.y>=u&&p.y<=a&&C(o,s,r,c,l,h,p.x,p.y)&&A(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function a(t,i,e,n){const o=t.prev,r=t,l=t.next;if(A(o,r,l)>=0)return!1;const s=o.x,c=r.x,h=l.x,g=o.y,u=r.y,f=l.y,a=s<c?s<h?s:h:c<h?c:h,p=g<u?g<f?g:f:u<f?u:f,x=s>c?s>h?s:h:c>h?c:h,d=g>u?g>f?g:f:u>f?u:f,v=b(a,p,i,e,n),y=b(x,d,i,e,n);let k=t.prevZ,_=t.nextZ;for(;k&&k.z>=v&&_&&_.z<=y;){if(k.x>=a&&k.x<=x&&k.y>=p&&k.y<=d&&k!==o&&k!==l&&C(s,g,c,u,h,f,k.x,k.y)&&A(k.prev,k,k.next)>=0)return!1;if(k=k.prevZ,_.x>=a&&_.x<=x&&_.y>=p&&_.y<=d&&_!==o&&_!==l&&C(s,g,c,u,h,f,_.x,_.y)&&A(_.prev,_,_.next)>=0)return!1;_=_.nextZ}for(;k&&k.z>=v;){if(k.x>=a&&k.x<=x&&k.y>=p&&k.y<=d&&k!==o&&k!==l&&C(s,g,c,u,h,f,k.x,k.y)&&A(k.prev,k,k.next)>=0)return!1;k=k.prevZ}for(;_&&_.z<=y;){if(_.x>=a&&_.x<=x&&_.y>=p&&_.y<=d&&_!==o&&_!==l&&C(s,g,c,u,h,f,_.x,_.y)&&A(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function p(t,i,e){let n=t;do{const o=n.prev,r=n.next.next;!m(o,r)&&L(o,n,n.next,r)&&z(o,r)&&z(r,o)&&(i.push(o.i/e|0),i.push(n.i/e|0),i.push(r.i/e|0),G(n),G(n.next),n=t=r),n=n.next}while(n!==t);return g(n)}function x(t,i,e,n,o,r){let l=t;do{let t=l.next.next;for(;t!==l.prev;){if(l.i!==t.i&&_(l,t)){let s=R(l,t);return l=g(l,l.next),s=g(s,s.next),u(l,i,e,n,o,r,0),void u(s,i,e,n,o,r,0)}t=t.next}l=l.next}while(l!==t)}function d(t,i){return t.x-i.x}function v(t,i){const e=function(t,i){let e=i;const n=t.x,o=t.y;let r,l=-1/0;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const t=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(t<=n&&t>l&&(l=t,r=e.x<e.next.x?e:e.next,t===n))return r}e=e.next}while(e!==i);if(!r)return null;const s=r,c=r.x,h=r.y;let g,u=1/0;e=r;do{n>=e.x&&e.x>=c&&n!==e.x&&C(o<h?n:l,o,c,h,o<h?l:n,o,e.x,e.y)&&(g=Math.abs(o-e.y)/(n-e.x),z(e,t)&&(g<u||g===u&&(e.x>r.x||e.x===r.x&&y(r,e)))&&(r=e,u=g)),e=e.next}while(e!==s);return r}(t,i);if(!e)return i;const n=R(e,t);return g(n,n.next),g(e,e.next)}function y(t,i){return A(t.prev,t,i.prev)<0&&A(i.next,t,t.next)<0}function b(t,i,e,n,o){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-e)*o|0)|t<<8))|t<<4))|t<<2))|t<<1))|(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-n)*o|0)|i<<8))|i<<4))|i<<2))|i<<1))<<1}function k(t){let i=t,e=t;do{(i.x<e.x||i.x===e.x&&i.y<e.y)&&(e=i),i=i.next}while(i!==t);return e}function C(t,i,e,n,o,r,l,s){return(o-l)*(i-s)>=(t-l)*(r-s)&&(t-l)*(n-s)>=(e-l)*(i-s)&&(e-l)*(r-s)>=(o-l)*(n-s)}function _(t,i){return t.next.i!==i.i&&t.prev.i!==i.i&&!function(t,i){let e=t;do{if(e.i!==t.i&&e.next.i!==t.i&&e.i!==i.i&&e.next.i!==i.i&&L(e,e.next,t,i))return!0;e=e.next}while(e!==t);return!1}(t,i)&&(z(t,i)&&z(i,t)&&function(t,i){let e=t,n=!1;const o=(t.x+i.x)/2,r=(t.y+i.y)/2;do{e.y>r!=e.next.y>r&&e.next.y!==e.y&&o<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next}while(e!==t);return n}(t,i)&&(A(t.prev,t,i.prev)||A(t,i.prev,i))||m(t,i)&&A(t.prev,t,t.next)>0&&A(i.prev,i,i.next)>0)}function A(t,i,e){return(i.y-t.y)*(e.x-i.x)-(i.x-t.x)*(e.y-i.y)}function m(t,i){return t.x===i.x&&t.y===i.y}function L(t,i,e,n){const o=w(A(t,i,e)),r=w(A(t,i,n)),l=w(A(e,n,t)),s=w(A(e,n,i));return o!==r&&l!==s||(!(0!==o||!Z(t,e,i))||(!(0!==r||!Z(t,n,i))||(!(0!==l||!Z(e,t,n))||!(0!==s||!Z(e,i,n)))))}function Z(t,i,e){return i.x<=Math.max(t.x,e.x)&&i.x>=Math.min(t.x,e.x)&&i.y<=Math.max(t.y,e.y)&&i.y>=Math.min(t.y,e.y)}function w(t){return t>0?1:t<0?-1:0}function z(t,i){return A(t.prev,t,t.next)<0?A(t,i,t.next)>=0&&A(t,t.prev,i)>=0:A(t,i,t.prev)<0||A(t,t.next,i)<0}function R(t,i){const e=new M(t.i,t.x,t.y),n=new M(i.i,i.x,i.y),o=t.next,r=i.prev;return t.next=i,i.prev=t,e.next=o,o.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function O(t,i,e,n){const o=new M(t,i,e);return n?(o.next=n.next,o.prev=n,n.next.prev=o,n.next=o):(o.prev=o,o.next=o),o}function G(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}class M{constructor(t,i,e){(0,s.Z)(this,"i",void 0),(0,s.Z)(this,"x",void 0),(0,s.Z)(this,"y",void 0),(0,s.Z)(this,"prev",null),(0,s.Z)(this,"next",null),(0,s.Z)(this,"z",0),(0,s.Z)(this,"prevZ",null),(0,s.Z)(this,"nextZ",null),(0,s.Z)(this,"steiner",!1),this.i=t,this.x=i,this.y=e}}function H(t,i,e,n,o=[]){let r,l;if(8&e)r=(n[3]-t[1])/(i[1]-t[1]),l=3;else if(4&e)r=(n[1]-t[1])/(i[1]-t[1]),l=1;else if(2&e)r=(n[2]-t[0])/(i[0]-t[0]),l=2;else{if(!(1&e))return null;r=(n[0]-t[0])/(i[0]-t[0]),l=0}for(let s=0;s<t.length;s++)o[s]=(1&l)===s?n[l]:r*(i[s]-t[s])+t[s];return o}function j(t,i){let e=0;return t[0]<i[0]?e|=1:t[0]>i[2]&&(e|=2),t[1]<i[1]?e|=4:t[1]>i[3]&&(e|=8),e}function B(t,i){const e=i.length,n=t.length;if(n>0){let o=!0;for(let r=0;r<e;r++)if(t[n-e+r]!==i[r]){o=!1;break}if(o)return!1}for(let o=0;o<e;o++)t[n+o]=i[o];return!0}function I(t,i){const e=i.length;for(let n=0;n<e;n++)t[n]=i[n]}function P(t,i,e,n,o=[]){const r=n+i*e;for(let l=0;l<e;l++)o[l]=t[r+l];return o}function E(t,i){const{size:e=2,broken:n=!1,gridResolution:o=10,gridOffset:r=[0,0],startIndex:l=0,endIndex:s=t.length}=i||{},c=(s-l)/e;let h=[];const g=[h],u=P(t,0,e,l);let f,a;const p=D(u,o,r,[]),x=[];B(h,u);for(let d=1;d<c;d++){for(f=P(t,d,e,l,f),a=j(f,p);a;){H(u,f,a,p,x);const t=j(x,p);t&&(H(u,x,t,p,x),a=t),B(h,x),I(u,x),N(p,o,a),n&&h.length>e&&(h=[],g.push(h),B(h,u)),a=j(f,p)}B(h,f),I(u,f)}return n?g:g[0]}const T=0,F=1;function S(t,i=null,e){if(!t.length)return[];const{size:n=2,gridResolution:o=10,gridOffset:r=[0,0],edgeTypes:l=!1}=e||{},s=[],c=[{pos:t,types:l?new Array(t.length/n).fill(F):null,holes:i||[]}],h=[[],[]];let g=[];for(;c.length;){const{pos:t,types:i,holes:e}=c.shift();U(t,n,e[0]||t.length,h),g=D(h[0],o,r,g);const u=j(h[1],g);if(u){let o=V(t,i,n,0,e[0]||t.length,g,u);const r={pos:o[0].pos,types:o[0].types,holes:[]},s={pos:o[1].pos,types:o[1].types,holes:[]};c.push(r,s);for(let c=0;c<e.length;c++)o=V(t,i,n,e[c],e[c+1]||t.length,g,u),o[0]&&(r.holes.push(r.pos.length),r.pos=$(r.pos,o[0].pos),l&&(r.types=$(r.types,o[0].types))),o[1]&&(s.holes.push(s.pos.length),s.pos=$(s.pos,o[1].pos),l&&(s.types=$(s.types,o[1].types)))}else{const n={positions:t};l&&(n.edgeTypes=i),e.length&&(n.holeIndices=e),s.push(n)}}return s}function V(t,i,e,n,o,r,l){const s=(o-n)/e,c=[],h=[],g=[],u=[],f=[];let a,p,x;const d=P(t,s-1,e,n);let v=Math.sign(8&l?d[1]-r[3]:d[0]-r[2]),y=i&&i[s-1],b=0,k=0;for(let C=0;C<s;C++)a=P(t,C,e,n,a),p=Math.sign(8&l?a[1]-r[3]:a[0]-r[2]),x=i&&i[n/e+C],p&&v&&v!==p&&(H(d,a,l,r,f),B(c,f)&&g.push(y),B(h,f)&&u.push(y)),p<=0?(B(c,a)&&g.push(x),b-=p):g.length&&(g[g.length-1]=T),p>=0?(B(h,a)&&u.push(x),k+=p):u.length&&(u[u.length-1]=T),I(d,a),v=p,y=x;return[b?{pos:c,types:i&&g}:null,k?{pos:h,types:i&&u}:null]}function D(t,i,e,n){const o=Math.floor((t[0]-e[0])/i)*i+e[0],r=Math.floor((t[1]-e[1])/i)*i+e[1];return n[0]=o,n[1]=r,n[2]=o+i,n[3]=r+i,n}function N(t,i,e){8&e?(t[1]+=i,t[3]+=i):4&e?(t[1]-=i,t[3]-=i):2&e?(t[0]+=i,t[2]+=i):1&e&&(t[0]-=i,t[2]-=i)}function U(t,i,e,n){let o=1/0,r=-1/0,l=1/0,s=-1/0;for(let c=0;c<e;c+=i){const i=t[c],e=t[c+1];o=i<o?i:o,r=i>r?i:r,l=e<l?e:l,s=e>s?e:s}return n[0][0]=o,n[0][1]=l,n[1][0]=r,n[1][1]=s,n}function $(t,i){for(let e=0;e<i.length;e++)t.push(i[e]);return t}const X=85.051129;function W(t,i){const{size:e=2,startIndex:n=0,endIndex:o=t.length,normalize:r=!0}=i||{},l=t.slice(n,o);Q(l,e,0,o-n);const s=E(l,{size:e,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(r)for(const c of s)J(c,e);return s}function K(t,i=null,e){const{size:n=2,normalize:o=!0,edgeTypes:r=!1}=e||{};i=i||[];const l=[],s=[];let c=0,h=0;for(let u=0;u<=i.length;u++){const o=i[u]||t.length,r=h,g=Y(t,n,c,o);for(let i=g;i<o;i++)l[h++]=t[i];for(let i=c;i<g;i++)l[h++]=t[i];Q(l,n,r,h),q(l,n,r,h,null==e?void 0:e.maxLatitude),c=o,s[u]=h}s.pop();const g=S(l,s,{size:n,gridResolution:360,gridOffset:[-180,-180],edgeTypes:r});if(o)for(const u of g)J(u.positions,n);return g}function Y(t,i,e,n){let o=-1,r=-1;for(let l=e+1;l<n;l+=i){const i=Math.abs(t[l]);i>o&&(o=i,r=l-1)}return r}function q(t,i,e,n,o=X){const r=t[e],l=t[n-i];if(Math.abs(r-l)>180){const n=P(t,0,i,e);n[0]+=360*Math.round((l-r)/360),B(t,n),n[1]=Math.sign(n[1])*o,B(t,n),n[0]=r,B(t,n)}}function Q(t,i,e,n){let o,r=t[0];for(let l=e;l<n;l+=i){o=t[l];const i=o-r;(i>180||i<-180)&&(o-=360*Math.round(i/360)),t[l]=r=o}}function J(t,i){let e;const n=t.length/i;for(let r=0;r<n&&(e=t[r*i],(e+180)%360==0);r++);const o=360*-Math.round(e/360);if(0!==o)for(let r=0;r<n;r++)t[r*i]+=o}},4942:(t,i,e)=>{function n(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}e.d(i,{Z:()=>n})}}]);