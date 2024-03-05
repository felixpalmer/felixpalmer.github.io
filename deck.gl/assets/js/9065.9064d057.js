"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9065,4763],{3905:(i,t,e)=>{e.d(t,{Zo:()=>s,kt:()=>p});var o=e(67294);function r(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function n(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.push.apply(e,o)}return e}function l(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?n(Object(e),!0).forEach((function(t){r(i,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}function c(i,t){if(null==i)return{};var e,o,r=function(i,t){if(null==i)return{};var e,o,r={},n=Object.keys(i);for(o=0;o<n.length;o++)e=n[o],t.indexOf(e)>=0||(r[e]=i[e]);return r}(i,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);for(o=0;o<n.length;o++)e=n[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(i,e)&&(r[e]=i[e])}return r}var a=o.createContext({}),h=function(i){var t=o.useContext(a),e=t;return i&&(e="function"==typeof i?i(t):l(l({},t),i)),e},s=function(i){var t=h(i.components);return o.createElement(a.Provider,{value:t},i.children)},g="mdxType",u={inlineCode:"code",wrapper:function(i){var t=i.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(i,t){var e=i.components,r=i.mdxType,n=i.originalType,a=i.parentName,s=c(i,["components","mdxType","originalType","parentName"]),g=h(e),d=r,p=g["".concat(a,".").concat(d)]||g[d]||u[d]||n;return e?o.createElement(p,l(l({ref:t},s),{},{components:e})):o.createElement(p,l({ref:t},s))}));function p(i,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof i||r){var n=e.length,l=new Array(n);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=i,c[g]="string"==typeof i?i:r,l[1]=c;for(var h=2;h<n;h++)l[h]=e[h];return o.createElement.apply(null,l)}return o.createElement.apply(null,e)}d.displayName="MDXCreateElement"},20745:(i,t,e)=>{var o=e(73935);t.s=o.createRoot,o.hydrateRoot},78542:(i,t,e)=>{function o(i){let t=1/0,e=1/0,o=1/0,r=-1/0,n=-1/0,l=-1/0;const c=i.POSITION?i.POSITION.value:[],a=c&&c.length;for(let h=0;h<a;h+=3){const i=c[h],a=c[h+1],s=c[h+2];t=i<t?i:t,e=a<e?a:e,o=s<o?s:o,r=i>r?i:r,n=a>n?a:n,l=s>l?s:l}return[[t,e,o],[r,n,l]]}e.d(t,{v:()=>o})},57111:(i,t,e)=>{e.d(t,{x:()=>n});var o=e(60326),r=e(41708);class n extends r.Z{constructor(i={}){const{id:t=(0,o.h)("sphere-geometry")}=i,{indices:e,attributes:r}=function(i){const{nlat:t=10,nlong:e=10}=i,o=0,r=Math.PI-o,n=0,l=2*Math.PI-n,c=(t+1)*(e+1),a=(t,e,o,r,n)=>i.radius||1,h=new Float32Array(3*c),s=new Float32Array(3*c),g=new Float32Array(2*c),u=new(c>65535?Uint32Array:Uint16Array)(t*e*6);for(let p=0;p<=t;p++)for(let i=0;i<=e;i++){const o=i/e,n=p/t,c=i+p*(e+1),u=2*c,d=3*c,f=l*o,v=r*n,_=Math.sin(f),b=Math.cos(f),m=Math.sin(v),C=b*m,L=Math.cos(v),k=_*m,A=a(C,L,k,o,n);h[d+0]=A*C,h[d+1]=A*L,h[d+2]=A*k,s[d+0]=C,s[d+1]=L,s[d+2]=k,g[u+0]=o,g[u+1]=1-n}const d=e+1;for(let p=0;p<e;p++)for(let i=0;i<t;i++){const e=6*(p*t+i);u[e+0]=i*d+p,u[e+1]=i*d+p+1,u[e+2]=(i+1)*d+p,u[e+3]=(i+1)*d+p,u[e+4]=i*d+p+1,u[e+5]=(i+1)*d+p+1}return{indices:{size:1,value:u},attributes:{POSITION:{size:3,value:h},NORMAL:{size:3,value:s},TEXCOORD_0:{size:2,value:g}}}}(i);super({...i,id:t,topology:"triangle-list",indices:e,attributes:{...r,...i.attributes}})}}},41708:(i,t,e)=>{e.d(t,{Z:()=>n});var o=e(60326),r=e(67532);class n{id;topology;vertexCount;indices;attributes;userData={};constructor(i){const{attributes:t={},indices:e=null,vertexCount:n=null}=i;this.id=i.id||(0,o.h)("geometry"),this.topology=i.topology,e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),this.attributes={};for(const[o,l]of Object.entries(t)){const i=ArrayBuffer.isView(l)?{value:l}:l;(0,r.h)(ArrayBuffer.isView(i.value),`${this._print(o)}: must be typed array or object with value as typed array`),"POSITION"!==o&&"positions"!==o||i.size||(i.size=3),"indices"===o?((0,r.h)(!this.indices),this.indices=i):this.attributes[o]=i}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=n||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(i){return`Geometry ${this.id} attribute ${i}`}_setAttributes(i,t){return this}_calculateVertexCount(i,t){if(t)return t.value.length;let e=1/0;for(const o of Object.values(i)){const{value:i,size:t,constant:r}=o;!r&&i&&t>=1&&(e=Math.min(e,i.length/t))}return(0,r.h)(Number.isFinite(e)),e}}},42013:(i,t,e)=>{e.d(t,{H:()=>l});const o=e(27872).H`\
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
`,r={lightSources:{}};function n(i={}){const{color:t=[0,0,0],intensity:e=1}=i;return t.map((i=>i*e/255))}const l={name:"lights",vs:o,fs:o,getUniforms:function i(t=r){if("lightSources"in t){const{ambientLight:i,pointLights:e,directionalLights:o}=t.lightSources||{};return i||e&&e.length>0||o&&o.length>0?Object.assign({},function({ambientLight:i,pointLights:t=[],directionalLights:e=[]}){const o={};return o["lighting_uAmbientLight.color"]=i?n(i):[0,0,0],t.forEach(((i,t)=>{o[`lighting_uPointLight[${t}].color`]=n(i),o[`lighting_uPointLight[${t}].position`]=i.position,o[`lighting_uPointLight[${t}].attenuation`]=i.attenuation||[1,0,0]})),o.lighting_uPointLightCount=t.length,e.forEach(((i,t)=>{o[`lighting_uDirectionalLight[${t}].color`]=n(i),o[`lighting_uDirectionalLight[${t}].direction`]=i.direction})),o.lighting_uDirectionalLightCount=e.length,o}({ambientLight:i,pointLights:e,directionalLights:o}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in t){const e={pointLights:[],directionalLights:[]};for(const i of t.lights||[])switch(i.type){case"ambient":e.ambientLight=i;break;case"directional":e.directionalLights?.push(i);break;case"point":e.pointLights?.push(i)}return i({lightSources:e})}return{}},defines:{MAX_LIGHTS:3}}},55098:(i,t,e)=>{e.d(t,{N:()=>c,s:()=>a});var o=e(42013);const r=e(27872).H`\

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
`,n={};function l(i=n){if(!("material"in i))return{};const{material:t}=i;return t?function(i){const{ambient:t=.35,diffuse:e=.6,shininess:o=32,specularColor:r=[30,30,30]}=i;return{lighting_uAmbient:t,lighting_uDiffuse:e,lighting_uShininess:o,lighting_uSpecularColor:r.map((i=>i/255))}}(t):{lighting_uEnabled:!1}}const c={name:"gouraud-lighting",dependencies:[o.H],vs:r,defines:{LIGHTING_VERTEX:1},getUniforms:l},a={name:"phong-lighting",dependencies:[o.H],fs:r,defines:{LIGHTING_FRAGMENT:1},getUniforms:l}},35300:(i,t,e)=>{e.d(t,{q:()=>n});var o=e(27872);const r=new Float32Array([0,1,1,1]),n={name:"picking",vs:o.H`\
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
`,uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:r},getUniforms:function(i={},t){const e={};if(void 0===i.highlightedObjectColor);else if(null===i.highlightedObjectColor)e.isHighlightActive=!1;else{e.isHighlightActive=!0;const t=i.highlightedObjectColor.slice(0,3);e.highlightedObjectColor=t}if(i.highlightColor){const t=Array.from(i.highlightColor,(i=>i/255));Number.isFinite(t[3])||(t[3]=1),e.highlightColor=t}void 0!==i.isActive&&(e.isActive=Boolean(i.isActive),e.isAttribute=Boolean(i.isAttribute));void 0!==i.useFloatColors&&(e.useFloatColors=Boolean(i.useFloatColors));return e}}},80503:(i,t,e)=>{e.d(t,{i:()=>a});var o=e(4942),r=e(51394),n=e(55715),l=e(53015);const c=1e-6;class a{constructor({phi:i=0,theta:t=0,radius:e=1,bearing:r,pitch:n,altitude:l,radiusScale:c=6371e3}={}){(0,o.Z)(this,"phi",void 0),(0,o.Z)(this,"theta",void 0),(0,o.Z)(this,"radius",void 0),(0,o.Z)(this,"radiusScale",void 0),this.phi=i,this.theta=t,this.radius=e||l||1,this.radiusScale=c||1,void 0!==r&&(this.bearing=r),void 0!==n&&(this.pitch=n),this.check()}toString(){return this.formatString(n.vc)}formatString({printTypes:i=!1}){const t=n.Bw;return"".concat(i?"Spherical":"","[rho:").concat(t(this.radius),",theta:").concat(t(this.theta),",phi:").concat(t(this.phi),"]")}equals(i){return(0,n.fS)(this.radius,i.radius)&&(0,n.fS)(this.theta,i.theta)&&(0,n.fS)(this.phi,i.phi)}exactEquals(i){return this.radius===i.radius&&this.theta===i.theta&&this.phi===i.phi}get bearing(){return 180-(0,n.RW)(this.phi)}set bearing(i){this.phi=Math.PI-(0,n.uR)(i)}get pitch(){return(0,n.RW)(this.theta)}set pitch(i){this.theta=(0,n.uR)(i)}get longitude(){return(0,n.RW)(this.phi)}get latitude(){return(0,n.RW)(this.theta)}get lng(){return(0,n.RW)(this.phi)}get lat(){return(0,n.RW)(this.theta)}get z(){return(this.radius-1)*this.radiusScale}set(i,t,e){return this.radius=i,this.phi=t,this.theta=e,this.check()}clone(){return(new a).copy(this)}copy(i){return this.radius=i.radius,this.phi=i.phi,this.theta=i.theta,this.check()}fromLngLatZ([i,t,e]){return this.radius=1+e/this.radiusScale,this.phi=(0,n.uR)(t),this.theta=(0,n.uR)(i),this.check()}fromVector3(i){return this.radius=l.kE(i),this.radius>0&&(this.theta=Math.atan2(i[0],i[1]),this.phi=Math.acos((0,n.uZ)(i[2]/this.radius,-1,1))),this.check()}toVector3(){return new r.P(0,0,this.radius).rotateX({radians:this.theta}).rotateZ({radians:this.phi})}makeSafe(){return this.phi=Math.max(c,Math.min(Math.PI-c,this.phi)),this}check(){if(!(Number.isFinite(this.phi)&&Number.isFinite(this.theta)&&this.radius>0))throw new Error("SphericalCoordinates: some fields set to invalid numbers");return this}}},4942:(i,t,e)=>{function o(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}e.d(t,{Z:()=>o})}}]);