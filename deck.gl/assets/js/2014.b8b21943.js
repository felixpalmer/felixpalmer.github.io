"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2014],{3905:(i,t,e)=>{e.d(t,{Zo:()=>s,kt:()=>d});var o=e(67294);function n(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function r(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.push.apply(e,o)}return e}function l(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){n(i,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}function c(i,t){if(null==i)return{};var e,o,n=function(i,t){if(null==i)return{};var e,o,n={},r=Object.keys(i);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(n[e]=i[e]);return n}(i,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(i,e)&&(n[e]=i[e])}return n}var g=o.createContext({}),a=function(i){var t=o.useContext(g),e=t;return i&&(e="function"==typeof i?i(t):l(l({},t),i)),e},s=function(i){var t=a(i.components);return o.createElement(g.Provider,{value:t},i.children)},h="mdxType",u={inlineCode:"code",wrapper:function(i){var t=i.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(i,t){var e=i.components,n=i.mdxType,r=i.originalType,g=i.parentName,s=c(i,["components","mdxType","originalType","parentName"]),h=a(e),p=n,d=h["".concat(g,".").concat(p)]||h[p]||u[p]||r;return e?o.createElement(d,l(l({ref:t},s),{},{components:e})):o.createElement(d,l({ref:t},s))}));function d(i,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof i||n){var r=e.length,l=new Array(r);l[0]=p;var c={};for(var g in t)hasOwnProperty.call(t,g)&&(c[g]=t[g]);c.originalType=i,c[h]="string"==typeof i?i:n,l[1]=c;for(var a=2;a<r;a++)l[a]=e[a];return o.createElement.apply(null,l)}return o.createElement.apply(null,e)}p.displayName="MDXCreateElement"},20745:(i,t,e)=>{var o=e(73935);t.s=o.createRoot,o.hydrateRoot},41708:(i,t,e)=>{e.d(t,{Z:()=>r});var o=e(60326),n=e(67532);class r{id;topology;vertexCount;indices;attributes;userData={};constructor(i){const{attributes:t={},indices:e=null,vertexCount:r=null}=i;this.id=i.id||(0,o.h)("geometry"),this.topology=i.topology,e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),this.attributes={};for(const[o,l]of Object.entries(t)){const i=ArrayBuffer.isView(l)?{value:l}:l;(0,n.h)(ArrayBuffer.isView(i.value),`${this._print(o)}: must be typed array or object with value as typed array`),"POSITION"!==o&&"positions"!==o||i.size||(i.size=3),"indices"===o?((0,n.h)(!this.indices),this.indices=i):this.attributes[o]=i}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(i){return`Geometry ${this.id} attribute ${i}`}_setAttributes(i,t){return this}_calculateVertexCount(i,t){if(t)return t.value.length;let e=1/0;for(const o of Object.values(i)){const{value:i,size:t,constant:n}=o;!n&&i&&t>=1&&(e=Math.min(e,i.length/t))}return(0,n.h)(Number.isFinite(e)),e}}},42013:(i,t,e)=>{e.d(t,{H:()=>l});const o=e(27872).H`\
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
`,n={lightSources:{}};function r(i={}){const{color:t=[0,0,0],intensity:e=1}=i;return t.map((i=>i*e/255))}const l={name:"lights",vs:o,fs:o,getUniforms:function i(t=n){if("lightSources"in t){const{ambientLight:i,pointLights:e,directionalLights:o}=t.lightSources||{};return i||e&&e.length>0||o&&o.length>0?Object.assign({},function({ambientLight:i,pointLights:t=[],directionalLights:e=[]}){const o={};return o["lighting_uAmbientLight.color"]=i?r(i):[0,0,0],t.forEach(((i,t)=>{o[`lighting_uPointLight[${t}].color`]=r(i),o[`lighting_uPointLight[${t}].position`]=i.position,o[`lighting_uPointLight[${t}].attenuation`]=i.attenuation||[1,0,0]})),o.lighting_uPointLightCount=t.length,e.forEach(((i,t)=>{o[`lighting_uDirectionalLight[${t}].color`]=r(i),o[`lighting_uDirectionalLight[${t}].direction`]=i.direction})),o.lighting_uDirectionalLightCount=e.length,o}({ambientLight:i,pointLights:e,directionalLights:o}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in t){const e={pointLights:[],directionalLights:[]};for(const i of t.lights||[])switch(i.type){case"ambient":e.ambientLight=i;break;case"directional":e.directionalLights?.push(i);break;case"point":e.pointLights?.push(i)}return i({lightSources:e})}return{}},defines:{MAX_LIGHTS:3}}},55098:(i,t,e)=>{e.d(t,{N:()=>c,s:()=>g});var o=e(42013);const n=e(27872).H`\

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
`,r={};function l(i=r){if(!("material"in i))return{};const{material:t}=i;return t?function(i){const{ambient:t=.35,diffuse:e=.6,shininess:o=32,specularColor:n=[30,30,30]}=i;return{lighting_uAmbient:t,lighting_uDiffuse:e,lighting_uShininess:o,lighting_uSpecularColor:n.map((i=>i/255))}}(t):{lighting_uEnabled:!1}}const c={name:"gouraud-lighting",dependencies:[o.H],vs:n,defines:{LIGHTING_VERTEX:1},getUniforms:l},g={name:"phong-lighting",dependencies:[o.H],fs:n,defines:{LIGHTING_FRAGMENT:1},getUniforms:l}},35300:(i,t,e)=>{e.d(t,{q:()=>r});var o=e(27872);const n=new Float32Array([0,1,1,1]),r={name:"picking",vs:o.H`\
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
`,uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:n},getUniforms:function(i={},t){const e={};if(void 0===i.highlightedObjectColor);else if(null===i.highlightedObjectColor)e.isHighlightActive=!1;else{e.isHighlightActive=!0;const t=i.highlightedObjectColor.slice(0,3);e.highlightedObjectColor=t}if(i.highlightColor){const t=Array.from(i.highlightColor,(i=>i/255));Number.isFinite(t[3])||(t[3]=1),e.highlightColor=t}void 0!==i.isActive&&(e.isActive=Boolean(i.isActive),e.isAttribute=Boolean(i.isAttribute));void 0!==i.useFloatColors&&(e.useFloatColors=Boolean(i.useFloatColors));return e}}},30070:(i,t,e)=>{e.d(t,{M:()=>o});const o={name:"LAS",id:"las",module:"las",version:"4.1.1",worker:!0,extensions:["las","laz"],mimeTypes:["application/octet-stream"],text:!0,binary:!0,tests:["LAS"],options:{las:{shape:"mesh",fp64:!1,skip:1,colorDepth:8}}}}}]);