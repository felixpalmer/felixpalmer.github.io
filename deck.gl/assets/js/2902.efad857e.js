"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2902],{57406:(t,i,e)=>{e.d(i,{H:()=>l});const n=e(27872).H`\
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
`,uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:o},getUniforms:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i={};if(void 0===t.highlightedObjectColor);else if(null===t.highlightedObjectColor)i.isHighlightActive=!1;else{i.isHighlightActive=!0;const e=t.highlightedObjectColor.slice(0,3);i.highlightedObjectColor=e}if(t.highlightColor){const e=Array.from(t.highlightColor,(t=>t/255));Number.isFinite(e[3])||(e[3]=1),i.highlightColor=e}void 0!==t.isActive&&(i.isActive=Boolean(t.isActive),i.isAttribute=Boolean(t.isAttribute));void 0!==t.useFloatColors&&(i.useFloatColors=Boolean(t.useFloatColors));return i}}},78064:(t,i,e)=>{e.d(i,{wG:()=>n,WZ:()=>S,GU:()=>K,dj:()=>j,ct:()=>W,OT:()=>s,ap:()=>l,Ny:()=>o});const n={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function o(t,i,e={}){const n=function(t,i={}){return Math.sign(l(t,i))}(t,e);return n!==i&&(function(t,i){const{start:e=0,end:n=t.length,size:o=2}=i,r=(n-e)/o,l=Math.floor(r/2);for(let c=0;c<l;++c){const i=e+c*o,n=e+(r-1-c)*o;for(let e=0;e<o;++e){const o=t[i+e];t[i+e]=t[n+e],t[n+e]=o}}}(t,e),!0)}const r={x:0,y:1,z:2};function l(t,i={}){const{start:e=0,end:n=t.length,plane:o="xy"}=i,l=i.size||2;let c=0;const s=r[o[0]],h=r[o[1]];for(let r=e,g=n-l;r<n;r+=l)c+=(t[r+s]-t[g+s])*(t[r+h]+t[g+h]),g=r;return c/2}var c=e(4942);function s(t,i,e=2,n,o="xy"){const r=i&&i.length,l=r?i[0]*e:t.length;let c=h(t,0,l,e,!0,n&&n[0],o);const s=[];if(!c||c.next===c.prev)return s;let g,f,p,a,x,y,b;if(r&&(c=function(t,i,e,n,o,r){const l=[];let c,s,g,u,f;for(c=0,s=i.length;c<s;c++)g=i[c]*n,u=c<s-1?i[c+1]*n:t.length,f=h(t,g,u,n,!1,o&&o[c+1],r),f===f.next&&(f.steiner=!0),l.push(k(f));for(l.sort(v),c=0;c<l.length;c++)e=d(l[c],e);return e}(t,i,c,e,n,o)),t.length>80*e){a=f=t[0],x=p=t[1];for(let i=e;i<l;i+=e)y=t[i],b=t[i+1],y<a&&(a=y),b<x&&(x=b),y>f&&(f=y),b>p&&(p=b);g=Math.max(f-a,p-x),g=0!==g?32767/g:0}return u(c,s,e,a,x,g,0),s}function h(t,i,e,n,o,c,s){let h,g;void 0===c&&(c=l(t,{start:i,end:e,size:n,plane:s}));let u=r[s[0]],f=r[s[1]];if(o===c<0)for(h=i;h<e;h+=n)g=G(h,t[h+u],t[h+f],g);else for(h=e-n;h>=i;h-=n)g=G(h,t[h+u],t[h+f],g);return g&&m(g,g.next)&&(M(g),g=g.next),g}function g(t,i){if(!t)return t;i||(i=t);let e,n=t;do{if(e=!1,n.steiner||!m(n,n.next)&&0!==A(n.prev,n,n.next))n=n.next;else{if(M(n),n=i=n.prev,n===n.next)break;e=!0}}while(e||n!==i);return i}function u(t,i,e,n,o,r,l){if(!t)return;!l&&r&&function(t,i,e,n){let o=t;do{0===o.z&&(o.z=b(o.x,o.y,i,e,n)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next}while(o!==t);o.prevZ.nextZ=null,o.prevZ=null,function(t){let i,e,n,o,r,l,c,s,h=1;do{for(o=t,t=null,s=null,n=0;o;){for(n++,l=o,r=0,e=0;e<h&&(r++,l=l.nextZ,l);e++);for(c=h;r>0||c>0&&l;)0!==r&&(0===c||!l||o.z<=l.z)?(i=o,o=o.nextZ,r--):(i=l,l=l.nextZ,c--),s?s.nextZ=i:t=i,i.prevZ=s,s=i;o=l}s.nextZ=null,h*=2}while(n>1)}(o)}(t,n,o,r);let c,s,h=t;for(;t.prev!==t.next;)if(c=t.prev,s=t.next,r?p(t,n,o,r):f(t))i.push(c.i/e|0),i.push(t.i/e|0),i.push(s.i/e|0),M(t),t=s.next,h=s.next;else if((t=s)===h){l?1===l?u(t=a(g(t),i,e),i,e,n,o,r,2):2===l&&x(t,i,e,n,o,r):u(g(t),i,e,n,o,r,1);break}}function f(t){const i=t.prev,e=t,n=t.next;if(A(i,e,n)>=0)return!1;const o=i.x,r=e.x,l=n.x,c=i.y,s=e.y,h=n.y,g=o<r?o<l?o:l:r<l?r:l,u=c<s?c<h?c:h:s<h?s:h,f=o>r?o>l?o:l:r>l?r:l,p=c>s?c>h?c:h:s>h?s:h;let a=n.next;for(;a!==i;){if(a.x>=g&&a.x<=f&&a.y>=u&&a.y<=p&&C(o,c,r,s,l,h,a.x,a.y)&&A(a.prev,a,a.next)>=0)return!1;a=a.next}return!0}function p(t,i,e,n){const o=t.prev,r=t,l=t.next;if(A(o,r,l)>=0)return!1;const c=o.x,s=r.x,h=l.x,g=o.y,u=r.y,f=l.y,p=c<s?c<h?c:h:s<h?s:h,a=g<u?g<f?g:f:u<f?u:f,x=c>s?c>h?c:h:s>h?s:h,v=g>u?g>f?g:f:u>f?u:f,d=b(p,a,i,e,n),y=b(x,v,i,e,n);let k=t.prevZ,_=t.nextZ;for(;k&&k.z>=d&&_&&_.z<=y;){if(k.x>=p&&k.x<=x&&k.y>=a&&k.y<=v&&k!==o&&k!==l&&C(c,g,s,u,h,f,k.x,k.y)&&A(k.prev,k,k.next)>=0)return!1;if(k=k.prevZ,_.x>=p&&_.x<=x&&_.y>=a&&_.y<=v&&_!==o&&_!==l&&C(c,g,s,u,h,f,_.x,_.y)&&A(_.prev,_,_.next)>=0)return!1;_=_.nextZ}for(;k&&k.z>=d;){if(k.x>=p&&k.x<=x&&k.y>=a&&k.y<=v&&k!==o&&k!==l&&C(c,g,s,u,h,f,k.x,k.y)&&A(k.prev,k,k.next)>=0)return!1;k=k.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=x&&_.y>=a&&_.y<=v&&_!==o&&_!==l&&C(c,g,s,u,h,f,_.x,_.y)&&A(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function a(t,i,e){let n=t;do{const o=n.prev,r=n.next.next;!m(o,r)&&L(o,n,n.next,r)&&w(o,r)&&w(r,o)&&(i.push(o.i/e|0),i.push(n.i/e|0),i.push(r.i/e|0),M(n),M(n.next),n=t=r),n=n.next}while(n!==t);return g(n)}function x(t,i,e,n,o,r){let l=t;do{let t=l.next.next;for(;t!==l.prev;){if(l.i!==t.i&&_(l,t)){let c=z(l,t);return l=g(l,l.next),c=g(c,c.next),u(l,i,e,n,o,r,0),void u(c,i,e,n,o,r,0)}t=t.next}l=l.next}while(l!==t)}function v(t,i){return t.x-i.x}function d(t,i){const e=function(t,i){let e=i;const n=t.x,o=t.y;let r,l=-1/0;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const t=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(t<=n&&t>l&&(l=t,r=e.x<e.next.x?e:e.next,t===n))return r}e=e.next}while(e!==i);if(!r)return null;const c=r,s=r.x,h=r.y;let g,u=1/0;e=r;do{n>=e.x&&e.x>=s&&n!==e.x&&C(o<h?n:l,o,s,h,o<h?l:n,o,e.x,e.y)&&(g=Math.abs(o-e.y)/(n-e.x),w(e,t)&&(g<u||g===u&&(e.x>r.x||e.x===r.x&&y(r,e)))&&(r=e,u=g)),e=e.next}while(e!==c);return r}(t,i);if(!e)return i;const n=z(e,t);return g(n,n.next),g(e,e.next)}function y(t,i){return A(t.prev,t,i.prev)<0&&A(i.next,t,t.next)<0}function b(t,i,e,n,o){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-e)*o|0)|t<<8))|t<<4))|t<<2))|t<<1))|(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-n)*o|0)|i<<8))|i<<4))|i<<2))|i<<1))<<1}function k(t){let i=t,e=t;do{(i.x<e.x||i.x===e.x&&i.y<e.y)&&(e=i),i=i.next}while(i!==t);return e}function C(t,i,e,n,o,r,l,c){return(o-l)*(i-c)>=(t-l)*(r-c)&&(t-l)*(n-c)>=(e-l)*(i-c)&&(e-l)*(r-c)>=(o-l)*(n-c)}function _(t,i){return t.next.i!==i.i&&t.prev.i!==i.i&&!function(t,i){let e=t;do{if(e.i!==t.i&&e.next.i!==t.i&&e.i!==i.i&&e.next.i!==i.i&&L(e,e.next,t,i))return!0;e=e.next}while(e!==t);return!1}(t,i)&&(w(t,i)&&w(i,t)&&function(t,i){let e=t,n=!1;const o=(t.x+i.x)/2,r=(t.y+i.y)/2;do{e.y>r!=e.next.y>r&&e.next.y!==e.y&&o<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next}while(e!==t);return n}(t,i)&&(A(t.prev,t,i.prev)||A(t,i.prev,i))||m(t,i)&&A(t.prev,t,t.next)>0&&A(i.prev,i,i.next)>0)}function A(t,i,e){return(i.y-t.y)*(e.x-i.x)-(i.x-t.x)*(e.y-i.y)}function m(t,i){return t.x===i.x&&t.y===i.y}function L(t,i,e,n){const o=R(A(t,i,e)),r=R(A(t,i,n)),l=R(A(e,n,t)),c=R(A(e,n,i));return o!==r&&l!==c||(!(0!==o||!Z(t,e,i))||(!(0!==r||!Z(t,n,i))||(!(0!==l||!Z(e,t,n))||!(0!==c||!Z(e,i,n)))))}function Z(t,i,e){return i.x<=Math.max(t.x,e.x)&&i.x>=Math.min(t.x,e.x)&&i.y<=Math.max(t.y,e.y)&&i.y>=Math.min(t.y,e.y)}function R(t){return t>0?1:t<0?-1:0}function w(t,i){return A(t.prev,t,t.next)<0?A(t,i,t.next)>=0&&A(t,t.prev,i)>=0:A(t,i,t.prev)<0||A(t,t.next,i)<0}function z(t,i){const e=new H(t.i,t.x,t.y),n=new H(i.i,i.x,i.y),o=t.next,r=i.prev;return t.next=i,i.prev=t,e.next=o,o.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function G(t,i,e,n){const o=new H(t,i,e);return n?(o.next=n.next,o.prev=n,n.next.prev=o,n.next=o):(o.prev=o,o.next=o),o}function M(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}class H{constructor(t,i,e){(0,c.Z)(this,"i",void 0),(0,c.Z)(this,"x",void 0),(0,c.Z)(this,"y",void 0),(0,c.Z)(this,"prev",null),(0,c.Z)(this,"next",null),(0,c.Z)(this,"z",0),(0,c.Z)(this,"prevZ",null),(0,c.Z)(this,"nextZ",null),(0,c.Z)(this,"steiner",!1),this.i=t,this.x=i,this.y=e}}function O(t,i,e,n,o=[]){let r,l;if(8&e)r=(n[3]-t[1])/(i[1]-t[1]),l=3;else if(4&e)r=(n[1]-t[1])/(i[1]-t[1]),l=1;else if(2&e)r=(n[2]-t[0])/(i[0]-t[0]),l=2;else{if(!(1&e))return null;r=(n[0]-t[0])/(i[0]-t[0]),l=0}for(let c=0;c<t.length;c++)o[c]=(1&l)===c?n[l]:r*(i[c]-t[c])+t[c];return o}function E(t,i){let e=0;return t[0]<i[0]?e|=1:t[0]>i[2]&&(e|=2),t[1]<i[1]?e|=4:t[1]>i[3]&&(e|=8),e}function P(t,i){const e=i.length,n=t.length;if(n>0){let o=!0;for(let r=0;r<e;r++)if(t[n-e+r]!==i[r]){o=!1;break}if(o)return!1}for(let o=0;o<e;o++)t[n+o]=i[o];return!0}function T(t,i){const e=i.length;for(let n=0;n<e;n++)t[n]=i[n]}function B(t,i,e,n,o=[]){const r=n+i*e;for(let l=0;l<e;l++)o[l]=t[r+l];return o}function j(t,i){const{size:e=2,broken:n=!1,gridResolution:o=10,gridOffset:r=[0,0],startIndex:l=0,endIndex:c=t.length}=i||{},s=(c-l)/e;let h=[];const g=[h],u=B(t,0,e,l);let f,p;const a=N(u,o,r,[]),x=[];P(h,u);for(let v=1;v<s;v++){for(f=B(t,v,e,l,f),p=E(f,a);p;){O(u,f,p,a,x);const t=E(x,a);t&&(O(u,x,t,a,x),p=t),P(h,x),T(u,x),U(a,o,p),n&&h.length>e&&(h=[],g.push(h),P(h,u)),p=E(f,a)}P(h,f),T(u,f)}return n?g:g[0]}const I=0,F=1;function S(t,i=null,e){if(!t.length)return[];const{size:n=2,gridResolution:o=10,gridOffset:r=[0,0],edgeTypes:l=!1}=e||{},c=[],s=[{pos:t,types:l?new Array(t.length/n).fill(F):null,holes:i||[]}],h=[[],[]];let g=[];for(;s.length;){const{pos:t,types:i,holes:e}=s.shift();V(t,n,e[0]||t.length,h),g=N(h[0],o,r,g);const u=E(h[1],g);if(u){let o=D(t,i,n,0,e[0]||t.length,g,u);const r={pos:o[0].pos,types:o[0].types,holes:[]},c={pos:o[1].pos,types:o[1].types,holes:[]};s.push(r,c);for(let s=0;s<e.length;s++)o=D(t,i,n,e[s],e[s+1]||t.length,g,u),o[0]&&(r.holes.push(r.pos.length),r.pos=X(r.pos,o[0].pos),l&&(r.types=X(r.types,o[0].types))),o[1]&&(c.holes.push(c.pos.length),c.pos=X(c.pos,o[1].pos),l&&(c.types=X(c.types,o[1].types)))}else{const n={positions:t};l&&(n.edgeTypes=i),e.length&&(n.holeIndices=e),c.push(n)}}return c}function D(t,i,e,n,o,r,l){const c=(o-n)/e,s=[],h=[],g=[],u=[],f=[];let p,a,x;const v=B(t,c-1,e,n);let d=Math.sign(8&l?v[1]-r[3]:v[0]-r[2]),y=i&&i[c-1],b=0,k=0;for(let C=0;C<c;C++)p=B(t,C,e,n,p),a=Math.sign(8&l?p[1]-r[3]:p[0]-r[2]),x=i&&i[n/e+C],a&&d&&d!==a&&(O(v,p,l,r,f),P(s,f)&&g.push(y),P(h,f)&&u.push(y)),a<=0?(P(s,p)&&g.push(x),b-=a):g.length&&(g[g.length-1]=I),a>=0?(P(h,p)&&u.push(x),k+=a):u.length&&(u[u.length-1]=I),T(v,p),d=a,y=x;return[b?{pos:s,types:i&&g}:null,k?{pos:h,types:i&&u}:null]}function N(t,i,e,n){const o=Math.floor((t[0]-e[0])/i)*i+e[0],r=Math.floor((t[1]-e[1])/i)*i+e[1];return n[0]=o,n[1]=r,n[2]=o+i,n[3]=r+i,n}function U(t,i,e){8&e?(t[1]+=i,t[3]+=i):4&e?(t[1]-=i,t[3]-=i):2&e?(t[0]+=i,t[2]+=i):1&e&&(t[0]-=i,t[2]-=i)}function V(t,i,e,n){let o=1/0,r=-1/0,l=1/0,c=-1/0;for(let s=0;s<e;s+=i){const i=t[s],e=t[s+1];o=i<o?i:o,r=i>r?i:r,l=e<l?e:l,c=e>c?e:c}return n[0][0]=o,n[0][1]=l,n[1][0]=r,n[1][1]=c,n}function X(t,i){for(let e=0;e<i.length;e++)t.push(i[e]);return t}const $=85.051129;function W(t,i){const{size:e=2,startIndex:n=0,endIndex:o=t.length,normalize:r=!0}=i||{},l=t.slice(n,o);J(l,e,0,o-n);const c=j(l,{size:e,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(r)for(const s of c)Q(s,e);return c}function K(t,i=null,e){const{size:n=2,normalize:o=!0,edgeTypes:r=!1}=e||{};i=i||[];const l=[],c=[];let s=0,h=0;for(let u=0;u<=i.length;u++){const o=i[u]||t.length,r=h,g=Y(t,n,s,o);for(let i=g;i<o;i++)l[h++]=t[i];for(let i=s;i<g;i++)l[h++]=t[i];J(l,n,r,h),q(l,n,r,h,null==e?void 0:e.maxLatitude),s=o,c[u]=h}c.pop();const g=S(l,c,{size:n,gridResolution:360,gridOffset:[-180,-180],edgeTypes:r});if(o)for(const u of g)Q(u.positions,n);return g}function Y(t,i,e,n){let o=-1,r=-1;for(let l=e+1;l<n;l+=i){const i=Math.abs(t[l]);i>o&&(o=i,r=l-1)}return r}function q(t,i,e,n,o=$){const r=t[e],l=t[n-i];if(Math.abs(r-l)>180){const n=B(t,0,i,e);n[0]+=360*Math.round((l-r)/360),P(t,n),n[1]=Math.sign(n[1])*o,P(t,n),n[0]=r,P(t,n)}}function J(t,i,e,n){let o,r=t[0];for(let l=e;l<n;l+=i){o=t[l];const i=o-r;(i>180||i<-180)&&(o-=360*Math.round(i/360)),t[l]=r=o}}function Q(t,i){let e;const n=t.length/i;for(let r=0;r<n&&(e=t[r*i],(e+180)%360==0);r++);const o=360*-Math.round(e/360);if(0!==o)for(let r=0;r<n;r++)t[r*i]+=o}},4942:(t,i,e)=>{function n(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}e.d(i,{Z:()=>n})}}]);