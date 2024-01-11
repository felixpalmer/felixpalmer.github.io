"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1677],{3905:(t,o,i)=>{i.d(o,{Zo:()=>a,kt:()=>f});var e=i(67294);function n(t,o,i){return o in t?Object.defineProperty(t,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[o]=i,t}function r(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),i.push.apply(i,e)}return i}function s(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?r(Object(i),!0).forEach((function(o){n(t,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))}))}return t}function l(t,o){if(null==t)return{};var i,e,n=function(t,o){if(null==t)return{};var i,e,n={},r=Object.keys(t);for(e=0;e<r.length;e++)i=r[e],o.indexOf(i)>=0||(n[i]=t[i]);return n}(t,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)i=r[e],o.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var c=e.createContext({}),h=function(t){var o=e.useContext(c),i=o;return t&&(i="function"==typeof t?t(o):s(s({},o),t)),i},a=function(t){var o=h(t.components);return e.createElement(c.Provider,{value:o},t.children)},g="mdxType",p={inlineCode:"code",wrapper:function(t){var o=t.children;return e.createElement(e.Fragment,{},o)}},u=e.forwardRef((function(t,o){var i=t.components,n=t.mdxType,r=t.originalType,c=t.parentName,a=l(t,["components","mdxType","originalType","parentName"]),g=h(i),u=n,f=g["".concat(c,".").concat(u)]||g[u]||p[u]||r;return i?e.createElement(f,s(s({ref:o},a),{},{components:i})):e.createElement(f,s({ref:o},a))}));function f(t,o){var i=arguments,n=o&&o.mdxType;if("string"==typeof t||n){var r=i.length,s=new Array(r);s[0]=u;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=t,l[g]="string"==typeof t?t:n,s[1]=l;for(var h=2;h<r;h++)s[h]=i[h];return e.createElement.apply(null,s)}return e.createElement.apply(null,i)}u.displayName="MDXCreateElement"},20745:(t,o,i)=>{var e=i(73935);o.s=e.createRoot,e.hydrateRoot},60850:(t,o,i)=>{function e(t,o,i,r,s,l){if(s-r<=i)return;const c=r+s>>1;n(t,o,c,r,s,l%2),e(t,o,i,r,c-1,l+1),e(t,o,i,c+1,s,l+1)}function n(t,o,i,e,s,l){for(;s>e;){if(s-e>600){const r=s-e+1,c=i-e+1,h=Math.log(r),a=.5*Math.exp(2*h/3),g=.5*Math.sqrt(h*a*(r-a)/r)*(c-r/2<0?-1:1);n(t,o,i,Math.max(e,Math.floor(i-c*a/r+g)),Math.min(s,Math.floor(i+(r-c)*a/r+g)),l)}const c=o[2*i+l];let h=e,a=s;for(r(t,o,e,i),o[2*s+l]>c&&r(t,o,e,s);h<a;){for(r(t,o,h,a),h++,a--;o[2*h+l]<c;)h++;for(;o[2*a+l]>c;)a--}o[2*e+l]===c?r(t,o,e,a):(a++,r(t,o,a,s)),a<=i&&(e=a+1),i<=a&&(s=a-1)}}function r(t,o,i,e){s(t,i,e),s(o,2*i,2*e),s(o,2*i+1,2*e+1)}function s(t,o,i){const e=t[o];t[o]=t[i],t[i]=e}function l(t,o,i,e){const n=t-i,r=o-e;return n*n+r*r}i.d(o,{Z:()=>f});const c=t=>t[0],h=t=>t[1];class a{constructor(t,o=c,i=h,n=64,r=Float64Array){this.nodeSize=n,this.points=t;const s=t.length<65536?Uint16Array:Uint32Array,l=this.ids=new s(t.length),a=this.coords=new r(2*t.length);for(let e=0;e<t.length;e++)l[e]=e,a[2*e]=o(t[e]),a[2*e+1]=i(t[e]);e(l,a,n,0,l.length-1,0)}range(t,o,i,e){return function(t,o,i,e,n,r,s){const l=[0,t.length-1,0],c=[];let h,a;for(;l.length;){const g=l.pop(),p=l.pop(),u=l.pop();if(p-u<=s){for(let s=u;s<=p;s++)h=o[2*s],a=o[2*s+1],h>=i&&h<=n&&a>=e&&a<=r&&c.push(t[s]);continue}const f=Math.floor((u+p)/2);h=o[2*f],a=o[2*f+1],h>=i&&h<=n&&a>=e&&a<=r&&c.push(t[f]);const d=(g+1)%2;(0===g?i<=h:e<=a)&&(l.push(u),l.push(f-1),l.push(d)),(0===g?n>=h:r>=a)&&(l.push(f+1),l.push(p),l.push(d))}return c}(this.ids,this.coords,t,o,i,e,this.nodeSize)}within(t,o,i){return function(t,o,i,e,n,r){const s=[0,t.length-1,0],c=[],h=n*n;for(;s.length;){const a=s.pop(),g=s.pop(),p=s.pop();if(g-p<=r){for(let n=p;n<=g;n++)l(o[2*n],o[2*n+1],i,e)<=h&&c.push(t[n]);continue}const u=Math.floor((p+g)/2),f=o[2*u],d=o[2*u+1];l(f,d,i,e)<=h&&c.push(t[u]);const m=(a+1)%2;(0===a?i-n<=f:e-n<=d)&&(s.push(p),s.push(u-1),s.push(m)),(0===a?i+n>=f:e+n>=d)&&(s.push(u+1),s.push(g),s.push(m))}return c}(this.ids,this.coords,t,o,i,this.nodeSize)}}const g={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},p=Math.fround||(u=new Float32Array(1),t=>(u[0]=+t,u[0]));var u;class f{constructor(t){this.options=y(Object.create(g),t),this.trees=new Array(this.options.maxZoom+1)}load(t){const{log:o,minZoom:i,maxZoom:e,nodeSize:n}=this.options;o&&console.time("total time");const r=`prepare ${t.length} points`;o&&console.time(r),this.points=t;let s=[];for(let l=0;l<t.length;l++)t[l].geometry&&s.push(m(t[l],l));this.trees[e+1]=new a(s,A,x,n,Float32Array),o&&console.timeEnd(r);for(let l=e;l>=i;l--){const t=+Date.now();s=this._cluster(s,l),this.trees[l]=new a(s,A,x,n,Float32Array),o&&console.log("z%d: %d clusters in %dms",l,s.length,+Date.now()-t)}return o&&console.timeEnd("total time"),this}getClusters(t,o){let i=((t[0]+180)%360+360)%360-180;const e=Math.max(-90,Math.min(90,t[1]));let n=180===t[2]?180:((t[2]+180)%360+360)%360-180;const r=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)i=-180,n=180;else if(i>n){const t=this.getClusters([i,e,180,r],o),s=this.getClusters([-180,e,n,r],o);return t.concat(s)}const s=this.trees[this._limitZoom(o)],l=s.range(k(i),_(r),k(n),_(e)),c=[];for(const h of l){const t=s.points[h];c.push(t.numPoints?v(t):this.points[t.index])}return c}getChildren(t){const o=this._getOriginId(t),i=this._getOriginZoom(t),e="No cluster with the specified id.",n=this.trees[i];if(!n)throw new Error(e);const r=n.points[o];if(!r)throw new Error(e);const s=this.options.radius/(this.options.extent*Math.pow(2,i-1)),l=n.within(r.x,r.y,s),c=[];for(const h of l){const o=n.points[h];o.parentId===t&&c.push(o.numPoints?v(o):this.points[o.index])}if(0===c.length)throw new Error(e);return c}getLeaves(t,o,i){o=o||10,i=i||0;const e=[];return this._appendLeaves(e,t,o,i,0),e}getTile(t,o,i){const e=this.trees[this._limitZoom(t)],n=Math.pow(2,t),{extent:r,radius:s}=this.options,l=s/r,c=(i-l)/n,h=(i+1+l)/n,a={features:[]};return this._addTileFeatures(e.range((o-l)/n,c,(o+1+l)/n,h),e.points,o,i,n,a),0===o&&this._addTileFeatures(e.range(1-l/n,c,1,h),e.points,n,i,n,a),o===n-1&&this._addTileFeatures(e.range(0,c,l/n,h),e.points,-1,i,n,a),a.features.length?a:null}getClusterExpansionZoom(t){let o=this._getOriginZoom(t)-1;for(;o<=this.options.maxZoom;){const i=this.getChildren(t);if(o++,1!==i.length)break;t=i[0].properties.cluster_id}return o}_appendLeaves(t,o,i,e,n){const r=this.getChildren(o);for(const s of r){const o=s.properties;if(o&&o.cluster?n+o.point_count<=e?n+=o.point_count:n=this._appendLeaves(t,o.cluster_id,i,e,n):n<e?n++:t.push(s),t.length===i)break}return n}_addTileFeatures(t,o,i,e,n,r){for(const s of t){const t=o[s],l=t.numPoints;let c,h,a;if(l)c=b(t),h=t.x,a=t.y;else{const o=this.points[t.index];c=o.properties,h=k(o.geometry.coordinates[0]),a=_(o.geometry.coordinates[1])}const g={type:1,geometry:[[Math.round(this.options.extent*(h*n-i)),Math.round(this.options.extent*(a*n-e))]],tags:c};let p;l?p=t.id:this.options.generateId?p=t.index:this.points[t.index].id&&(p=this.points[t.index].id),void 0!==p&&(g.id=p),r.features.push(g)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,o){const i=[],{radius:e,extent:n,reduce:r,minPoints:s}=this.options,l=e/(n*Math.pow(2,o));for(let c=0;c<t.length;c++){const e=t[c];if(e.zoom<=o)continue;e.zoom=o;const n=this.trees[o+1],h=n.within(e.x,e.y,l),a=e.numPoints||1;let g=a;for(const t of h){const i=n.points[t];i.zoom>o&&(g+=i.numPoints||1)}if(g>a&&g>=s){let t=e.x*a,s=e.y*a,l=r&&a>1?this._map(e,!0):null;const p=(c<<5)+(o+1)+this.points.length;for(const i of h){const c=n.points[i];if(c.zoom<=o)continue;c.zoom=o;const h=c.numPoints||1;t+=c.x*h,s+=c.y*h,c.parentId=p,r&&(l||(l=this._map(e,!0)),r(l,this._map(c)))}e.parentId=p,i.push(d(t/g,s/g,p,g,l))}else if(i.push(e),g>1)for(const t of h){const e=n.points[t];e.zoom<=o||(e.zoom=o,i.push(e))}}return i}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,o){if(t.numPoints)return o?y({},t.properties):t.properties;const i=this.points[t.index].properties,e=this.options.map(i);return o&&e===i?y({},e):e}}function d(t,o,i,e,n){return{x:p(t),y:p(o),zoom:1/0,id:i,parentId:-1,numPoints:e,properties:n}}function m(t,o){const[i,e]=t.geometry.coordinates;return{x:p(k(i)),y:p(_(e)),zoom:1/0,index:o,parentId:-1}}function v(t){return{type:"Feature",id:t.id,properties:b(t),geometry:{type:"Point",coordinates:[(o=t.x,360*(o-.5)),C(t.y)]}};var o}function b(t){const o=t.numPoints,i=o>=1e4?`${Math.round(o/1e3)}k`:o>=1e3?Math.round(o/100)/10+"k":o;return y(y({},t.properties),{cluster:!0,cluster_id:t.id,point_count:o,point_count_abbreviated:i})}function k(t){return t/360+.5}function _(t){const o=Math.sin(t*Math.PI/180),i=.5-.25*Math.log((1+o)/(1-o))/Math.PI;return i<0?0:i>1?1:i}function C(t){const o=(180-360*t)*Math.PI/180;return 360*Math.atan(Math.exp(o))/Math.PI-90}function y(t,o){for(const i in o)t[i]=o[i];return t}function A(t){return t.x}function x(t){return t.y}},35300:(t,o,i)=>{i.d(o,{q:()=>r});var e=i(27872);const n=new Float32Array([0,1,1,1]),r={name:"picking",vs:e.H`\
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
`,fs:e.H`\
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
`,uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:n},getUniforms:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o={};if(void 0===t.highlightedObjectColor);else if(null===t.highlightedObjectColor)o.isHighlightActive=!1;else{o.isHighlightActive=!0;const i=t.highlightedObjectColor.slice(0,3);o.highlightedObjectColor=i}if(t.highlightColor){const i=Array.from(t.highlightColor,(t=>t/255));Number.isFinite(i[3])||(i[3]=1),o.highlightColor=i}void 0!==t.isActive&&(o.isActive=Boolean(t.isActive),o.isAttribute=Boolean(t.isAttribute));void 0!==t.useFloatColors&&(o.useFloatColors=Boolean(t.useFloatColors));return o}}}}]);