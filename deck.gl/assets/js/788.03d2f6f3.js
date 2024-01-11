"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[788],{3905:(i,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>d});var e=o(67294);function n(i,t,o){return t in i?Object.defineProperty(i,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[t]=o,i}function r(i,t){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),o.push.apply(o,e)}return o}function l(i){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(i,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(o,t))}))}return i}function c(i,t){if(null==i)return{};var o,e,n=function(i,t){if(null==i)return{};var o,e,n={},r=Object.keys(i);for(e=0;e<r.length;e++)o=r[e],t.indexOf(o)>=0||(n[o]=i[o]);return n}(i,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);for(e=0;e<r.length;e++)o=r[e],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(i,o)&&(n[o]=i[o])}return n}var g=e.createContext({}),a=function(i){var t=e.useContext(g),o=t;return i&&(o="function"==typeof i?i(t):l(l({},t),i)),o},h=function(i){var t=a(i.components);return e.createElement(g.Provider,{value:t},i.children)},s="mdxType",u={inlineCode:"code",wrapper:function(i){var t=i.children;return e.createElement(e.Fragment,{},t)}},p=e.forwardRef((function(i,t){var o=i.components,n=i.mdxType,r=i.originalType,g=i.parentName,h=c(i,["components","mdxType","originalType","parentName"]),s=a(o),p=n,d=s["".concat(g,".").concat(p)]||s[p]||u[p]||r;return o?e.createElement(d,l(l({ref:t},h),{},{components:o})):e.createElement(d,l({ref:t},h))}));function d(i,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof i||n){var r=o.length,l=new Array(r);l[0]=p;var c={};for(var g in t)hasOwnProperty.call(t,g)&&(c[g]=t[g]);c.originalType=i,c[s]="string"==typeof i?i:n,l[1]=c;for(var a=2;a<r;a++)l[a]=o[a];return e.createElement.apply(null,l)}return e.createElement.apply(null,o)}p.displayName="MDXCreateElement"},18469:(i,t,o)=>{o.d(t,{Z:()=>g});var e=o(95190),n=o(67823),r=o(56709);const l="https://api.cesium.com/v1/assets";async function c(i,t){if(!t){const o=await async function(i){(0,r.h)(i);const t=l,o={Authorization:`Bearer ${i}`},e=await(0,n.dc)(t,{headers:o});if(!e.ok)throw new Error(e.statusText);return await e.json()}(i);for(const i of o.items)"3DTILES"===i.type&&(t=i.id)}const o=await async function(i,t){(0,r.h)(i,t);const o={Authorization:`Bearer ${i}`},e=`${l}/${t}`;let c=await(0,n.dc)(`${e}`,{headers:o});if(!c.ok)throw new Error(c.statusText);let g=await c.json();if(c=await(0,n.dc)(`${e}/endpoint`,{headers:o}),!c.ok)throw new Error(c.statusText);const a=await c.json();return g={...g,...a},g}(i,t),{type:e,url:c}=o;return(0,r.h)("3DTILES"===e&&c),o.headers={Authorization:`Bearer ${o.accessToken}`},o}const g={...e.u,id:"cesium-ion",name:"Cesium Ion",preload:async function(i){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=t["cesium-ion"]||{};const{accessToken:o}=t;let e=t.assetId;if(!Number.isFinite(e)){const t=i.match(/\/([0-9]+)\/tileset.json/);e=t&&t[1]}return c(o,e)},parse:async(i,t,o)=>((t={...t})["3d-tiles"]=t["cesium-ion"],t.loader=g,e.u.parse(i,t,o)),options:{"cesium-ion":{...e.u.options["3d-tiles"],accessToken:null}}}},57406:(i,t,o)=>{o.d(t,{H:()=>l});const e=o(27872).H`\
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
`,n={lightSources:{}};function r(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{color:t=[0,0,0],intensity:o=1}=i;return t.map((i=>i*o/255))}const l={name:"lights",vs:e,fs:e,getUniforms:function i(){var t,o;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;if("lightSources"in e){const{ambientLight:i,pointLights:t,directionalLights:o}=e.lightSources||{};return i||t&&t.length>0||o&&o.length>0?Object.assign({},function(i){let{ambientLight:t,pointLights:o=[],directionalLights:e=[]}=i;const n={};return n["lighting_uAmbientLight.color"]=t?r(t):[0,0,0],o.forEach(((i,t)=>{n[`lighting_uPointLight[${t}].color`]=r(i),n[`lighting_uPointLight[${t}].position`]=i.position,n[`lighting_uPointLight[${t}].attenuation`]=i.attenuation||[1,0,0]})),n.lighting_uPointLightCount=o.length,e.forEach(((i,t)=>{n[`lighting_uDirectionalLight[${t}].color`]=r(i),n[`lighting_uDirectionalLight[${t}].direction`]=i.direction})),n.lighting_uDirectionalLightCount=e.length,n}({ambientLight:i,pointLights:t,directionalLights:o}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in e){const n={pointLights:[],directionalLights:[]};for(const i of e.lights||[])switch(i.type){case"ambient":n.ambientLight=i;break;case"directional":null===(t=n.directionalLights)||void 0===t||t.push(i);break;case"point":null===(o=n.pointLights)||void 0===o||o.push(i)}return i({lightSources:n})}return{}},defines:{MAX_LIGHTS:3}}},31456:(i,t,o)=>{o.d(t,{N:()=>c,s:()=>g});var e=o(57406);const n=o(27872).H`\

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
`,r={};function l(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;if(!("material"in i))return{};const{material:t}=i;return t?function(i){const{ambient:t=.35,diffuse:o=.6,shininess:e=32,specularColor:n=[30,30,30]}=i;return{lighting_uAmbient:t,lighting_uDiffuse:o,lighting_uShininess:e,lighting_uSpecularColor:n.map((i=>i/255))}}(t):{lighting_uEnabled:!1}}const c={name:"gouraud-lighting",dependencies:[e.H],vs:n,defines:{LIGHTING_VERTEX:1},getUniforms:l},g={name:"phong-lighting",dependencies:[e.H],fs:n,defines:{LIGHTING_FRAGMENT:1},getUniforms:l}},35300:(i,t,o)=>{o.d(t,{q:()=>r});var e=o(27872);const n=new Float32Array([0,1,1,1]),r={name:"picking",vs:e.H`\
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
`,uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:n},getUniforms:function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={};if(void 0===i.highlightedObjectColor);else if(null===i.highlightedObjectColor)t.isHighlightActive=!1;else{t.isHighlightActive=!0;const o=i.highlightedObjectColor.slice(0,3);t.highlightedObjectColor=o}if(i.highlightColor){const o=Array.from(i.highlightColor,(i=>i/255));Number.isFinite(o[3])||(o[3]=1),t.highlightColor=o}void 0!==i.isActive&&(t.isActive=Boolean(i.isActive),t.isAttribute=Boolean(i.isAttribute));void 0!==i.useFloatColors&&(t.useFloatColors=Boolean(i.useFloatColors));return t}}},4942:(i,t,o)=>{function e(i,t,o){return t in i?Object.defineProperty(i,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[t]=o,i}o.d(t,{Z:()=>e})}}]);