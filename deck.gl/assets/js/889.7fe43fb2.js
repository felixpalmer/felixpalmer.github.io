"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[889],{3905:(i,t,e)=>{e.d(t,{Zo:()=>h,kt:()=>p});var r=e(67294);function o(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function n(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.push.apply(e,r)}return e}function l(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?n(Object(e),!0).forEach((function(t){o(i,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}function c(i,t){if(null==i)return{};var e,r,o=function(i,t){if(null==i)return{};var e,r,o={},n=Object.keys(i);for(r=0;r<n.length;r++)e=n[r],t.indexOf(e)>=0||(o[e]=i[e]);return o}(i,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);for(r=0;r<n.length;r++)e=n[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(i,e)&&(o[e]=i[e])}return o}var a=r.createContext({}),s=function(i){var t=r.useContext(a),e=t;return i&&(e="function"==typeof i?i(t):l(l({},t),i)),e},h=function(i){var t=s(i.components);return r.createElement(a.Provider,{value:t},i.children)},g="mdxType",u={inlineCode:"code",wrapper:function(i){var t=i.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(i,t){var e=i.components,o=i.mdxType,n=i.originalType,a=i.parentName,h=c(i,["components","mdxType","originalType","parentName"]),g=s(e),f=o,p=g["".concat(a,".").concat(f)]||g[f]||u[f]||n;return e?r.createElement(p,l(l({ref:t},h),{},{components:e})):r.createElement(p,l({ref:t},h))}));function p(i,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof i||o){var n=e.length,l=new Array(n);l[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=i,c[g]="string"==typeof i?i:o,l[1]=c;for(var s=2;s<n;s++)l[s]=e[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}f.displayName="MDXCreateElement"},66871:(i,t,e)=>{e.d(t,{Z:()=>g,Q:()=>h});var r=e(67614),o=e(51212),n=e(48348),l=e(46196),c=e(33085);var a=e(42957);function s(i,t,e,o){var n,s=(0,r.ly)(i,t,e);switch((o=(0,l.Z)(null==o?",f":o)).type){case"s":var h=Math.max(Math.abs(i),Math.abs(t));return null!=o.precision||isNaN(n=function(i,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,c.Z)(t)/3)))-(0,c.Z)(Math.abs(i)))}(s,h))||(o.precision=n),(0,a.jH)(o,h);case"":case"e":case"g":case"p":case"r":null!=o.precision||isNaN(n=function(i,t){return i=Math.abs(i),t=Math.abs(t)-i,Math.max(0,(0,c.Z)(t)-(0,c.Z)(i))+1}(s,Math.max(Math.abs(i),Math.abs(t))))||(o.precision=n-("e"===o.type));break;case"f":case"%":null!=o.precision||isNaN(n=function(i){return Math.max(0,-(0,c.Z)(Math.abs(i)))}(s))||(o.precision=n-2*("%"===o.type))}return(0,a.WU)(o)}function h(i){var t=i.domain;return i.ticks=function(i){var e=t();return(0,r.ZP)(e[0],e[e.length-1],null==i?10:i)},i.tickFormat=function(i,e){var r=t();return s(r[0],r[r.length-1],null==i?10:i,e)},i.nice=function(e){null==e&&(e=10);var o,n,l=t(),c=0,a=l.length-1,s=l[c],h=l[a],g=10;for(h<s&&(n=s,s=h,h=n,n=c,c=a,a=n);g-- >0;){if((n=(0,r.G9)(s,h,e))===o)return l[c]=s,l[a]=h,t(l);if(n>0)s=Math.floor(s/n)*n,h=Math.ceil(h/n)*n;else{if(!(n<0))break;s=Math.ceil(s*n)/n,h=Math.floor(h*n)/n}o=n}return i},i}function g(){var i=(0,o.ZP)();return i.copy=function(){return(0,o.JG)(i,g())},n.o.apply(i,arguments),h(i)}},20745:(i,t,e)=>{var r=e(73935);t.s=r.createRoot,r.hydrateRoot},41708:(i,t,e)=>{e.d(t,{Z:()=>n});var r=e(60326),o=e(67532);class n{id;topology;vertexCount;indices;attributes;userData={};constructor(i){const{attributes:t={},indices:e=null,vertexCount:n=null}=i;this.id=i.id||(0,r.h)("geometry"),this.topology=i.topology,e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),this.attributes={};for(const[r,l]of Object.entries(t)){const i=ArrayBuffer.isView(l)?{value:l}:l;(0,o.h)(ArrayBuffer.isView(i.value),`${this._print(r)}: must be typed array or object with value as typed array`),"POSITION"!==r&&"positions"!==r||i.size||(i.size=3),"indices"===r?((0,o.h)(!this.indices),this.indices=i):this.attributes[r]=i}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=n||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(i){return`Geometry ${this.id} attribute ${i}`}_setAttributes(i,t){return this}_calculateVertexCount(i,t){if(t)return t.value.length;let e=1/0;for(const r of Object.values(i)){const{value:i,size:t,constant:o}=r;!o&&i&&t>=1&&(e=Math.min(e,i.length/t))}return(0,o.h)(Number.isFinite(e)),e}}},35300:(i,t,e)=>{e.d(t,{q:()=>n});var r=e(27872);const o=new Float32Array([0,1,1,1]),n={name:"picking",vs:r.H`\
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
`,fs:r.H`\
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
`,uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:o},getUniforms:function(i={},t){const e={};if(void 0===i.highlightedObjectColor);else if(null===i.highlightedObjectColor)e.isHighlightActive=!1;else{e.isHighlightActive=!0;const t=i.highlightedObjectColor.slice(0,3);e.highlightedObjectColor=t}if(i.highlightColor){const t=Array.from(i.highlightColor,(i=>i/255));Number.isFinite(t[3])||(t[3]=1),e.highlightColor=t}void 0!==i.isActive&&(e.isActive=Boolean(i.isActive),e.isAttribute=Boolean(i.isAttribute));void 0!==i.useFloatColors&&(e.useFloatColors=Boolean(i.useFloatColors));return e}}},39875:(i,t,e)=>{e.d(t,{Z:()=>o});const r=1e20;class o{constructor({fontSize:i=24,buffer:t=3,radius:e=8,cutoff:r=.25,fontFamily:o="sans-serif",fontWeight:n="normal",fontStyle:l="normal"}={}){this.buffer=t,this.cutoff=r,this.radius=e;const c=this.size=i+4*t,a=this._createCanvas(c),s=this.ctx=a.getContext("2d",{willReadFrequently:!0});s.font=`${l} ${n} ${i}px ${o}`,s.textBaseline="alphabetic",s.textAlign="left",s.fillStyle="black",this.gridOuter=new Float64Array(c*c),this.gridInner=new Float64Array(c*c),this.f=new Float64Array(c),this.z=new Float64Array(c+1),this.v=new Uint16Array(c)}_createCanvas(i){const t=document.createElement("canvas");return t.width=t.height=i,t}draw(i){const{width:t,actualBoundingBoxAscent:e,actualBoundingBoxDescent:o,actualBoundingBoxLeft:l,actualBoundingBoxRight:c}=this.ctx.measureText(i),a=Math.ceil(e),s=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(c-l))),h=Math.min(this.size-this.buffer,a+Math.ceil(o)),g=s+2*this.buffer,u=h+2*this.buffer,f=Math.max(g*u,0),p=new Uint8ClampedArray(f),d={data:p,width:g,height:u,glyphWidth:s,glyphHeight:h,glyphTop:a,glyphLeft:0,glyphAdvance:t};if(0===s||0===h)return d;const{ctx:v,buffer:b,gridInner:k,gridOuter:m}=this;v.clearRect(b,b,s,h),v.fillText(i,b,b+a);const y=v.getImageData(b,b,s,h);m.fill(r,0,f),k.fill(0,0,f);for(let n=0;n<h;n++)for(let i=0;i<s;i++){const t=y.data[4*(n*s+i)+3]/255;if(0===t)continue;const e=(n+b)*g+i+b;if(1===t)m[e]=0,k[e]=r;else{const i=.5-t;m[e]=i>0?i*i:0,k[e]=i<0?i*i:0}}n(m,0,0,g,u,g,this.f,this.v,this.z),n(k,b,b,s,h,g,this.f,this.v,this.z);for(let r=0;r<f;r++){const i=Math.sqrt(m[r])-Math.sqrt(k[r]);p[r]=Math.round(255-255*(i/this.radius+this.cutoff))}return d}}function n(i,t,e,r,o,n,c,a,s){for(let h=t;h<t+r;h++)l(i,e*n+h,n,o,c,a,s);for(let h=e;h<e+o;h++)l(i,h*n+t,1,r,c,a,s)}function l(i,t,e,o,n,l,c){l[0]=0,c[0]=-r,c[1]=r,n[0]=i[t];for(let a=1,s=0,h=0;a<o;a++){n[a]=i[t+a*e];const o=a*a;do{const i=l[s];h=(n[a]-n[i]+o-i*i)/(a-i)/2}while(h<=c[s]&&--s>-1);s++,l[s]=a,c[s]=h,c[s+1]=r}for(let r=0,a=0;r<o;r++){for(;c[a+1]<r;)a++;const o=l[a],s=r-o;i[t+r*e]=n[o]+s*s}}}}]);