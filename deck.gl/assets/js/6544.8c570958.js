"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6544],{3905:(t,i,e)=>{e.d(i,{Zo:()=>a,kt:()=>d});var o=e(67294);function n(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function r(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);i&&(o=o.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,o)}return e}function s(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?r(Object(e),!0).forEach((function(i){n(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}function l(t,i){if(null==t)return{};var e,o,n=function(t,i){if(null==t)return{};var e,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)e=r[o],i.indexOf(e)>=0||(n[e]=t[e]);return n}(t,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)e=r[o],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var c=o.createContext({}),h=function(t){var i=o.useContext(c),e=i;return t&&(e="function"==typeof t?t(i):s(s({},i),t)),e},a=function(t){var i=h(t.components);return o.createElement(c.Provider,{value:i},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var i=t.children;return o.createElement(o.Fragment,{},i)}},p=o.forwardRef((function(t,i){var e=t.components,n=t.mdxType,r=t.originalType,c=t.parentName,a=l(t,["components","mdxType","originalType","parentName"]),u=h(e),p=n,d=u["".concat(c,".").concat(p)]||u[p]||g[p]||r;return e?o.createElement(d,s(s({ref:i},a),{},{components:e})):o.createElement(d,s({ref:i},a))}));function d(t,i){var e=arguments,n=i&&i.mdxType;if("string"==typeof t||n){var r=e.length,s=new Array(r);s[0]=p;var l={};for(var c in i)hasOwnProperty.call(i,c)&&(l[c]=i[c]);l.originalType=t,l[u]="string"==typeof t?t:n,s[1]=l;for(var h=2;h<r;h++)s[h]=e[h];return o.createElement.apply(null,s)}return o.createElement.apply(null,e)}p.displayName="MDXCreateElement"},20745:(t,i,e)=>{var o=e(73935);i.s=o.createRoot,o.hydrateRoot},60850:(t,i,e)=>{function o(t,i,e,r,s,l){if(s-r<=e)return;const c=r+s>>1;n(t,i,c,r,s,l%2),o(t,i,e,r,c-1,l+1),o(t,i,e,c+1,s,l+1)}function n(t,i,e,o,s,l){for(;s>o;){if(s-o>600){const r=s-o+1,c=e-o+1,h=Math.log(r),a=.5*Math.exp(2*h/3),u=.5*Math.sqrt(h*a*(r-a)/r)*(c-r/2<0?-1:1);n(t,i,e,Math.max(o,Math.floor(e-c*a/r+u)),Math.min(s,Math.floor(e+(r-c)*a/r+u)),l)}const c=i[2*e+l];let h=o,a=s;for(r(t,i,o,e),i[2*s+l]>c&&r(t,i,o,s);h<a;){for(r(t,i,h,a),h++,a--;i[2*h+l]<c;)h++;for(;i[2*a+l]>c;)a--}i[2*o+l]===c?r(t,i,o,a):(a++,r(t,i,a,s)),a<=e&&(o=a+1),e<=a&&(s=a-1)}}function r(t,i,e,o){s(t,e,o),s(i,2*e,2*o),s(i,2*e+1,2*o+1)}function s(t,i,e){const o=t[i];t[i]=t[e],t[e]=o}function l(t,i,e,o){const n=t-e,r=i-o;return n*n+r*r}e.d(i,{Z:()=>d});const c=t=>t[0],h=t=>t[1];class a{constructor(t,i=c,e=h,n=64,r=Float64Array){this.nodeSize=n,this.points=t;const s=t.length<65536?Uint16Array:Uint32Array,l=this.ids=new s(t.length),a=this.coords=new r(2*t.length);for(let o=0;o<t.length;o++)l[o]=o,a[2*o]=i(t[o]),a[2*o+1]=e(t[o]);o(l,a,n,0,l.length-1,0)}range(t,i,e,o){return function(t,i,e,o,n,r,s){const l=[0,t.length-1,0],c=[];let h,a;for(;l.length;){const u=l.pop(),g=l.pop(),p=l.pop();if(g-p<=s){for(let s=p;s<=g;s++)h=i[2*s],a=i[2*s+1],h>=e&&h<=n&&a>=o&&a<=r&&c.push(t[s]);continue}const d=Math.floor((p+g)/2);h=i[2*d],a=i[2*d+1],h>=e&&h<=n&&a>=o&&a<=r&&c.push(t[d]);const f=(u+1)%2;(0===u?e<=h:o<=a)&&(l.push(p),l.push(d-1),l.push(f)),(0===u?n>=h:r>=a)&&(l.push(d+1),l.push(g),l.push(f))}return c}(this.ids,this.coords,t,i,e,o,this.nodeSize)}within(t,i,e){return function(t,i,e,o,n,r){const s=[0,t.length-1,0],c=[],h=n*n;for(;s.length;){const a=s.pop(),u=s.pop(),g=s.pop();if(u-g<=r){for(let n=g;n<=u;n++)l(i[2*n],i[2*n+1],e,o)<=h&&c.push(t[n]);continue}const p=Math.floor((g+u)/2),d=i[2*p],f=i[2*p+1];l(d,f,e,o)<=h&&c.push(t[p]);const v=(a+1)%2;(0===a?e-n<=d:o-n<=f)&&(s.push(g),s.push(p-1),s.push(v)),(0===a?e+n>=d:o+n>=f)&&(s.push(p+1),s.push(u),s.push(v))}return c}(this.ids,this.coords,t,i,e,this.nodeSize)}}const u={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},g=Math.fround||(p=new Float32Array(1),t=>(p[0]=+t,p[0]));var p;class d{constructor(t){this.options=_(Object.create(u),t),this.trees=new Array(this.options.maxZoom+1)}load(t){const{log:i,minZoom:e,maxZoom:o,nodeSize:n}=this.options;i&&console.time("total time");const r=`prepare ${t.length} points`;i&&console.time(r),this.points=t;let s=[];for(let l=0;l<t.length;l++)t[l].geometry&&s.push(v(t[l],l));this.trees[o+1]=new a(s,A,x,n,Float32Array),i&&console.timeEnd(r);for(let l=o;l>=e;l--){const t=+Date.now();s=this._cluster(s,l),this.trees[l]=new a(s,A,x,n,Float32Array),i&&console.log("z%d: %d clusters in %dms",l,s.length,+Date.now()-t)}return i&&console.timeEnd("total time"),this}getClusters(t,i){let e=((t[0]+180)%360+360)%360-180;const o=Math.max(-90,Math.min(90,t[1]));let n=180===t[2]?180:((t[2]+180)%360+360)%360-180;const r=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)e=-180,n=180;else if(e>n){const t=this.getClusters([e,o,180,r],i),s=this.getClusters([-180,o,n,r],i);return t.concat(s)}const s=this.trees[this._limitZoom(i)],l=s.range(k(e),y(r),k(n),y(o)),c=[];for(const h of l){const t=s.points[h];c.push(t.numPoints?m(t):this.points[t.index])}return c}getChildren(t){const i=this._getOriginId(t),e=this._getOriginZoom(t),o="No cluster with the specified id.",n=this.trees[e];if(!n)throw new Error(o);const r=n.points[i];if(!r)throw new Error(o);const s=this.options.radius/(this.options.extent*Math.pow(2,e-1)),l=n.within(r.x,r.y,s),c=[];for(const h of l){const i=n.points[h];i.parentId===t&&c.push(i.numPoints?m(i):this.points[i.index])}if(0===c.length)throw new Error(o);return c}getLeaves(t,i,e){i=i||10,e=e||0;const o=[];return this._appendLeaves(o,t,i,e,0),o}getTile(t,i,e){const o=this.trees[this._limitZoom(t)],n=Math.pow(2,t),{extent:r,radius:s}=this.options,l=s/r,c=(e-l)/n,h=(e+1+l)/n,a={features:[]};return this._addTileFeatures(o.range((i-l)/n,c,(i+1+l)/n,h),o.points,i,e,n,a),0===i&&this._addTileFeatures(o.range(1-l/n,c,1,h),o.points,n,e,n,a),i===n-1&&this._addTileFeatures(o.range(0,c,l/n,h),o.points,-1,e,n,a),a.features.length?a:null}getClusterExpansionZoom(t){let i=this._getOriginZoom(t)-1;for(;i<=this.options.maxZoom;){const e=this.getChildren(t);if(i++,1!==e.length)break;t=e[0].properties.cluster_id}return i}_appendLeaves(t,i,e,o,n){const r=this.getChildren(i);for(const s of r){const i=s.properties;if(i&&i.cluster?n+i.point_count<=o?n+=i.point_count:n=this._appendLeaves(t,i.cluster_id,e,o,n):n<o?n++:t.push(s),t.length===e)break}return n}_addTileFeatures(t,i,e,o,n,r){for(const s of t){const t=i[s],l=t.numPoints;let c,h,a;if(l)c=b(t),h=t.x,a=t.y;else{const i=this.points[t.index];c=i.properties,h=k(i.geometry.coordinates[0]),a=y(i.geometry.coordinates[1])}const u={type:1,geometry:[[Math.round(this.options.extent*(h*n-e)),Math.round(this.options.extent*(a*n-o))]],tags:c};let g;l?g=t.id:this.options.generateId?g=t.index:this.points[t.index].id&&(g=this.points[t.index].id),void 0!==g&&(u.id=g),r.features.push(u)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,i){const e=[],{radius:o,extent:n,reduce:r,minPoints:s}=this.options,l=o/(n*Math.pow(2,i));for(let c=0;c<t.length;c++){const o=t[c];if(o.zoom<=i)continue;o.zoom=i;const n=this.trees[i+1],h=n.within(o.x,o.y,l),a=o.numPoints||1;let u=a;for(const t of h){const e=n.points[t];e.zoom>i&&(u+=e.numPoints||1)}if(u>a&&u>=s){let t=o.x*a,s=o.y*a,l=r&&a>1?this._map(o,!0):null;const g=(c<<5)+(i+1)+this.points.length;for(const e of h){const c=n.points[e];if(c.zoom<=i)continue;c.zoom=i;const h=c.numPoints||1;t+=c.x*h,s+=c.y*h,c.parentId=g,r&&(l||(l=this._map(o,!0)),r(l,this._map(c)))}o.parentId=g,e.push(f(t/u,s/u,g,u,l))}else if(e.push(o),u>1)for(const t of h){const o=n.points[t];o.zoom<=i||(o.zoom=i,e.push(o))}}return e}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,i){if(t.numPoints)return i?_({},t.properties):t.properties;const e=this.points[t.index].properties,o=this.options.map(e);return i&&o===e?_({},o):o}}function f(t,i,e,o,n){return{x:g(t),y:g(i),zoom:1/0,id:e,parentId:-1,numPoints:o,properties:n}}function v(t,i){const[e,o]=t.geometry.coordinates;return{x:g(k(e)),y:g(y(o)),zoom:1/0,index:i,parentId:-1}}function m(t){return{type:"Feature",id:t.id,properties:b(t),geometry:{type:"Point",coordinates:[(i=t.x,360*(i-.5)),C(t.y)]}};var i}function b(t){const i=t.numPoints,e=i>=1e4?`${Math.round(i/1e3)}k`:i>=1e3?Math.round(i/100)/10+"k":i;return _(_({},t.properties),{cluster:!0,cluster_id:t.id,point_count:i,point_count_abbreviated:e})}function k(t){return t/360+.5}function y(t){const i=Math.sin(t*Math.PI/180),e=.5-.25*Math.log((1+i)/(1-i))/Math.PI;return e<0?0:e>1?1:e}function C(t){const i=(180-360*t)*Math.PI/180;return 360*Math.atan(Math.exp(i))/Math.PI-90}function _(t,i){for(const e in i)t[e]=i[e];return t}function A(t){return t.x}function x(t){return t.y}},41708:(t,i,e)=>{e.d(i,{Z:()=>r});var o=e(60326),n=e(67532);class r{constructor(t){this.id=void 0,this.topology=void 0,this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.userData={};const{attributes:i={},indices:e=null,vertexCount:r=null}=t;this.id=t.id||(0,o.hQ)("geometry"),this.topology=t.topology,e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),this.attributes={};for(const[o,s]of Object.entries(i)){const t=ArrayBuffer.isView(s)?{value:s}:s;(0,n.h)(ArrayBuffer.isView(t.value),`${this._print(o)}: must be typed array or object with value as typed array`),"POSITION"!==o&&"positions"!==o||t.size||(t.size=3),"indices"===o?((0,n.h)(!this.indices),this.indices=t):this.attributes[o]=t}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(t){return`Geometry ${this.id} attribute ${t}`}_setAttributes(t,i){return this}_calculateVertexCount(t,i){if(i)return i.value.length;let e=1/0;for(const o of Object.values(t)){const{value:t,size:i,constant:n}=o;!n&&t&&i>=1&&(e=Math.min(e,t.length/i))}return(0,n.h)(Number.isFinite(e)),e}}},35300:(t,i,e)=>{e.d(i,{q:()=>r});var o=e(27872);const n=new Float32Array([0,1,1,1]),r={name:"picking",vs:o.H`\
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
`,fs:o.H`\
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
`,uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:n},getUniforms:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i={};if(void 0===t.highlightedObjectColor);else if(null===t.highlightedObjectColor)i.isHighlightActive=!1;else{i.isHighlightActive=!0;const e=t.highlightedObjectColor.slice(0,3);i.highlightedObjectColor=e}if(t.highlightColor){const e=Array.from(t.highlightColor,(t=>t/255));Number.isFinite(e[3])||(e[3]=1),i.highlightColor=e}void 0!==t.isActive&&(i.isActive=Boolean(t.isActive),i.isAttribute=Boolean(t.isAttribute));void 0!==t.useFloatColors&&(i.useFloatColors=Boolean(t.useFloatColors));return i}}}}]);