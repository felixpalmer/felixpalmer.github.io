"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2539],{3905:(t,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>_});var o=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var a=o.createContext({}),c=function(t){var e=o.useContext(a),i=e;return t&&(i="function"==typeof t?t(e):l(l({},e),t)),i},u=function(t){var e=c(t.components);return o.createElement(a.Provider,{value:e},t.children)},h="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var i=t.components,n=t.mdxType,r=t.originalType,a=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=c(i),d=n,_=h["".concat(a,".").concat(d)]||h[d]||g[d]||r;return i?o.createElement(_,l(l({ref:e},u),{},{components:i})):o.createElement(_,l({ref:e},u))}));function _(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=i.length,l=new Array(r);l[0]=d;var s={};for(var a in e)hasOwnProperty.call(e,a)&&(s[a]=e[a]);s.originalType=t,s[h]="string"==typeof t?t:n,l[1]=s;for(var c=2;c<r;c++)l[c]=i[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},41708:(t,e,i)=>{i.d(e,{Z:()=>r});var o=i(60326),n=i(67532);class r{id;topology;vertexCount;indices;attributes;userData={};constructor(t){const{attributes:e={},indices:i=null,vertexCount:r=null}=t;this.id=t.id||(0,o.h)("geometry"),this.topology=t.topology,i&&(this.indices=ArrayBuffer.isView(i)?{value:i,size:1}:i),this.attributes={};for(const[o,l]of Object.entries(e)){const t=ArrayBuffer.isView(l)?{value:l}:l;(0,n.h)(ArrayBuffer.isView(t.value),`${this._print(o)}: must be typed array or object with value as typed array`),"POSITION"!==o&&"positions"!==o||t.size||(t.size=3),"indices"===o?((0,n.h)(!this.indices),this.indices=t):this.attributes[o]=t}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(t){return`Geometry ${this.id} attribute ${t}`}_setAttributes(t,e){return this}_calculateVertexCount(t,e){if(e)return e.value.length;let i=1/0;for(const o of Object.values(t)){const{value:t,size:e,constant:n}=o;!n&&t&&e>=1&&(i=Math.min(i,t.length/e))}return(0,n.h)(Number.isFinite(i)),i}}},42013:(t,e,i)=>{i.d(e,{H:()=>l});const o=i(27872).H`\
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
`,n={lightSources:{}};function r(t={}){const{color:e=[0,0,0],intensity:i=1}=t;return e.map((t=>t*i/255))}const l={name:"lights",vs:o,fs:o,getUniforms:function t(e=n){if("lightSources"in e){const{ambientLight:t,pointLights:i,directionalLights:o}=e.lightSources||{};return t||i&&i.length>0||o&&o.length>0?Object.assign({},function({ambientLight:t,pointLights:e=[],directionalLights:i=[]}){const o={};return o["lighting_uAmbientLight.color"]=t?r(t):[0,0,0],e.forEach(((t,e)=>{o[`lighting_uPointLight[${e}].color`]=r(t),o[`lighting_uPointLight[${e}].position`]=t.position,o[`lighting_uPointLight[${e}].attenuation`]=t.attenuation||[1,0,0]})),o.lighting_uPointLightCount=e.length,i.forEach(((t,e)=>{o[`lighting_uDirectionalLight[${e}].color`]=r(t),o[`lighting_uDirectionalLight[${e}].direction`]=t.direction})),o.lighting_uDirectionalLightCount=i.length,o}({ambientLight:t,pointLights:i,directionalLights:o}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in e){const i={pointLights:[],directionalLights:[]};for(const t of e.lights||[])switch(t.type){case"ambient":i.ambientLight=t;break;case"directional":i.directionalLights?.push(t);break;case"point":i.pointLights?.push(t)}return t({lightSources:i})}return{}},defines:{MAX_LIGHTS:3}}},55098:(t,e,i)=>{i.d(e,{N:()=>s,s:()=>a});var o=i(42013);const n=i(27872).H`\

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
`,r={};function l(t=r){if(!("material"in t))return{};const{material:e}=t;return e?function(t){const{ambient:e=.35,diffuse:i=.6,shininess:o=32,specularColor:n=[30,30,30]}=t;return{lighting_uAmbient:e,lighting_uDiffuse:i,lighting_uShininess:o,lighting_uSpecularColor:n.map((t=>t/255))}}(e):{lighting_uEnabled:!1}}const s={name:"gouraud-lighting",dependencies:[o.H],vs:n,defines:{LIGHTING_VERTEX:1},getUniforms:l},a={name:"phong-lighting",dependencies:[o.H],fs:n,defines:{LIGHTING_FRAGMENT:1},getUniforms:l}},35300:(t,e,i)=>{i.d(e,{q:()=>r});var o=i(27872);const n=new Float32Array([0,1,1,1]),r={name:"picking",vs:o.H`\
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
`,uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:n},getUniforms:function(t={},e){const i={};if(void 0===t.highlightedObjectColor);else if(null===t.highlightedObjectColor)i.isHighlightActive=!1;else{i.isHighlightActive=!0;const e=t.highlightedObjectColor.slice(0,3);i.highlightedObjectColor=e}if(t.highlightColor){const e=Array.from(t.highlightColor,(t=>t/255));Number.isFinite(e[3])||(e[3]=1),i.highlightColor=e}void 0!==t.isActive&&(i.isActive=Boolean(t.isActive),i.isAttribute=Boolean(t.isAttribute));void 0!==t.useFloatColors&&(i.useFloatColors=Boolean(t.useFloatColors));return i}}},4942:(t,e,i)=>{function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,{Z:()=>o})},6089:(t,e,i)=>{i.d(e,{N:()=>rt});var o=i(86986),n=i(39470),r=i(51394),l=i(84900),s=i(99313),a=i(34707),c=i(28083),u=i(17935),h=i(85835),g=i(90152),d=i(56709),_=i(77979),f=i(60908);const p={MAGIC_NUMBER:542327876,HEADER_LENGTH:31,MAGIC_NUMBER_INDEX:0,HEADER_SIZE_INDEX:1,HEADER_FLAGS_INDEX:2,HEADER_HEIGHT_INDEX:3,HEADER_WIDTH_INDEX:4,MIPMAPCOUNT_INDEX:7,HEADER_PF_FLAGS_INDEX:20,HEADER_PF_FOURCC_INDEX:21,DDSD_MIPMAPCOUNT:131072,DDPF_FOURCC:4},m={DXT1:_.p.COMPRESSED_RGB_S3TC_DXT1_EXT,DXT3:_.p.COMPRESSED_RGBA_S3TC_DXT3_EXT,DXT5:_.p.COMPRESSED_RGBA_S3TC_DXT5_EXT,"ATC ":_.p.COMPRESSED_RGB_ATC_WEBGL,ATCA:_.p.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL,ATCI:_.p.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL},C={DXT1:v,DXT3:A,DXT5:A,"ATC ":v,ATCA:A,ATCI:A};function E(t){const e=new Int32Array(t,0,p.HEADER_LENGTH),i=e[p.HEADER_PF_FOURCC_INDEX];(0,d.h)(Boolean(e[p.HEADER_PF_FLAGS_INDEX]&p.DDPF_FOURCC),"DDS: Unsupported format, must contain a FourCC code");const o=(n=i,String.fromCharCode(255&n,n>>8&255,n>>16&255,n>>24&255));var n;const r=m[o],l=C[o];(0,d.h)(r&&l,`DDS: Unknown pixel format ${i}`);let s=1;e[p.HEADER_FLAGS_INDEX]&p.DDSD_MIPMAPCOUNT&&(s=Math.max(1,e[p.MIPMAPCOUNT_INDEX]));const a=e[p.HEADER_WIDTH_INDEX],c=e[p.HEADER_HEIGHT_INDEX],u=e[p.HEADER_SIZE_INDEX]+4,h=new Uint8Array(t,u);return(0,f.J)(h,{mipMapLevels:s,width:a,height:c,sizeFunction:l,internalFormat:r})}function v(t,e){return(t+3>>2)*(e+3>>2)*8}function A(t,e){return(t+3>>2)*(e+3>>2)*16}const S={MAGIC_NUMBER:55727696,MAGIC_NUMBER_EXTRA:1347834371,HEADER_LENGTH:13,HEADER_SIZE:52,MAGIC_NUMBER_INDEX:0,PIXEL_FORMAT_INDEX:2,COLOUR_SPACE_INDEX:4,HEIGHT_INDEX:6,WIDTH_INDEX:7,MIPMAPCOUNT_INDEX:11,METADATA_SIZE_INDEX:12},b={0:[_.p.COMPRESSED_RGB_PVRTC_2BPPV1_IMG],1:[_.p.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG],2:[_.p.COMPRESSED_RGB_PVRTC_4BPPV1_IMG],3:[_.p.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG],6:[_.p.COMPRESSED_RGB_ETC1_WEBGL],7:[_.p.COMPRESSED_RGB_S3TC_DXT1_EXT],9:[_.p.COMPRESSED_RGBA_S3TC_DXT3_EXT],11:[_.p.COMPRESSED_RGBA_S3TC_DXT5_EXT],22:[_.p.COMPRESSED_RGB8_ETC2],23:[_.p.COMPRESSED_RGBA8_ETC2_EAC],24:[_.p.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2],25:[_.p.COMPRESSED_R11_EAC],26:[_.p.COMPRESSED_RG11_EAC],27:[_.p.COMPRESSED_RGBA_ASTC_4X4_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_4X4_KHR],28:[_.p.COMPRESSED_RGBA_ASTC_5X4_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_5X4_KHR],29:[_.p.COMPRESSED_RGBA_ASTC_5X5_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_5X5_KHR],30:[_.p.COMPRESSED_RGBA_ASTC_6X5_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_6X5_KHR],31:[_.p.COMPRESSED_RGBA_ASTC_6X6_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_6X6_KHR],32:[_.p.COMPRESSED_RGBA_ASTC_8X5_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_8X5_KHR],33:[_.p.COMPRESSED_RGBA_ASTC_8X6_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_8X6_KHR],34:[_.p.COMPRESSED_RGBA_ASTC_8X8_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_8X8_KHR],35:[_.p.COMPRESSED_RGBA_ASTC_10X5_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_10X5_KHR],36:[_.p.COMPRESSED_RGBA_ASTC_10X6_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_10X6_KHR],37:[_.p.COMPRESSED_RGBA_ASTC_10X8_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_10X8_KHR],38:[_.p.COMPRESSED_RGBA_ASTC_10X10_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_10X10_KHR],39:[_.p.COMPRESSED_RGBA_ASTC_12X10_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_12X10_KHR],40:[_.p.COMPRESSED_RGBA_ASTC_12X12_KHR,_.p.COMPRESSED_SRGB8_ALPHA8_ASTC_12X12_KHR]},R={0:T,1:T,2:D,3:D,6:P,7:P,9:M,11:M,22:P,23:M,24:P,25:P,26:M,27:M,28:function(t,e){return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16},29:function(t,e){return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16},30:function(t,e){return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16},31:function(t,e){return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16},32:function(t,e){return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16},33:function(t,e){return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16},34:function(t,e){return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16},35:function(t,e){return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16},36:function(t,e){return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16},37:function(t,e){return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16},38:function(t,e){return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16},39:function(t,e){return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16},40:function(t,e){return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16}};function T(t,e){return(t=Math.max(t,16))*(e=Math.max(e,8))/4}function D(t,e){return(t=Math.max(t,8))*(e=Math.max(e,8))/2}function P(t,e){return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8}function M(t,e){return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16}function y(t){if((0,g.j)(t))return(0,g.P)(t);if(function(t){return new Uint32Array(t,0,p.HEADER_LENGTH)[p.MAGIC_NUMBER_INDEX]===p.MAGIC_NUMBER}(t))return E(t);if(function(t){const e=new Uint32Array(t,0,S.HEADER_LENGTH)[S.MAGIC_NUMBER_INDEX];return e===S.MAGIC_NUMBER||e===S.MAGIC_NUMBER_EXTRA}(t))return function(t){const e=new Uint32Array(t,0,S.HEADER_LENGTH),i=e[S.PIXEL_FORMAT_INDEX],o=e[S.COLOUR_SPACE_INDEX],n=b[i]||[],r=n.length>1&&o?n[1]:n[0],l=R[i],s=e[S.MIPMAPCOUNT_INDEX],a=e[S.WIDTH_INDEX],c=e[S.HEIGHT_INDEX],u=S.HEADER_SIZE+e[S.METADATA_SIZE_INDEX],h=new Uint8Array(t,u);return(0,f.J)(h,{mipMapLevels:s,width:a,height:c,sizeFunction:l,internalFormat:r})}(t);throw new Error("Texture container format not recognized")}var L=i(94396);const x={...{name:"Texture Containers",id:"compressed-texture",module:"textures",version:h.q,worker:!0,extensions:["ktx","ktx2","dds","pvr"],mimeTypes:["image/ktx2","image/ktx","image/vnd-ms.dds","image/x-dds","application/octet-stream"],binary:!0,options:{"compressed-texture":{libraryPath:"libs/",useBasis:!1}}},parse:async(t,e)=>{var i;if(null!=e&&null!==(i=e["compressed-texture"])&&void 0!==i&&i.useBasis){e.basis={format:{alpha:"BC3",noAlpha:"BC1"},...e.basis,containerFormat:"ktx2",module:"encoder"};return(await(0,L.Z)(t,e))[0]}return y(t)}};var O=i(22406);let I=function(t){return t.vertexCount="vertexCount",t.featureCount="featureCount",t}({});function G(t){let e;try{const i=new URL(t);e=`${i.origin}${i.pathname}`}catch(i){}return e||t}function w(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?`${t}?token=${e}`:t}var H=i(2634);function N(t){switch(t){case"UInt8":return Uint8Array;case"UInt16":return Uint16Array;case"UInt32":return Uint32Array;case"Float32":return Float32Array;case"UInt64":return Float64Array;default:throw new Error(`parse i3s tile content: unknown type of data: ${t}`)}}const k={UInt8:H.GL.UNSIGNED_BYTE,UInt16:H.GL.UNSIGNED_SHORT,Float32:H.GL.FLOAT,UInt32:H.GL.UNSIGNED_INT,UInt64:H.GL.DOUBLE};function B(t){switch(t){case"UInt8":return 1;case"UInt16":case"Int16":return 2;case"UInt32":case"Int32":case"Float32":return 4;case"UInt64":case"Int64":case"Float64":return 8;default:throw new Error(`parse i3s tile content: unknown size of data: ${t}`)}}let F=function(t){return t[t.DEFAULT=-1]="DEFAULT",t[t.LNGLAT=1]="LNGLAT",t[t.METER_OFFSETS=2]="METER_OFFSETS",t[t.LNGLAT_OFFSETS=3]="LNGLAT_OFFSETS",t[t.CARTESIAN=0]="CARTESIAN",t}({});const X=new r.P([0,0,0]);const U="i3s-attribute-type";async function j(t,e,i,h,g){const d={attributes:{},indices:null,featureIds:[],vertexCount:0,modelMatrix:new l.y,coordinateSystem:0,byteLength:0,texture:null};if(e.textureUrl){var _;const t=w(e.textureUrl,null==h||null===(_=h.i3s)||void 0===_?void 0:_.token),i=function(t){switch(t){case"ktx-etc2":case"dds":return x;case"ktx2":return O.G;default:return c.S}}(e.textureFormat),r=(null==g?void 0:g.fetch)||fetch,l=await r(t),s=await l.arrayBuffer();if(null!=h&&h.i3s.decodeTextures){if(i===c.S){const t={...e.textureLoaderOptions,image:{type:"data"}};try{const e=await(0,a.cr)(s,[],t,g);d.texture=e}catch(f){const e=await(0,o.Q)(s,i,t,g);d.texture=e}}else if(i===x||i===O.G){let t=await(0,n.z)(s,i,e.textureLoaderOptions);i===O.G&&(t=t[0]),d.texture={compressed:!0,mipmaps:!1,width:t[0].width,height:t[0].height,data:t}}}else d.texture=s}return d.material=function(t,e){let i;t?i={...t,pbrMetallicRoughness:t.pbrMetallicRoughness?{...t.pbrMetallicRoughness}:{baseColorFactor:[255,255,255,255]}}:(i={pbrMetallicRoughness:{}},e?i.pbrMetallicRoughness.baseColorTexture={texCoord:0}:i.pbrMetallicRoughness.baseColorFactor=[255,255,255,255]);i.alphaCutoff=i.alphaCutoff||.25,i.alphaMode&&(i.alphaMode=i.alphaMode.toUpperCase());i.emissiveFactor&&(i.emissiveFactor=V(i.emissiveFactor));i.pbrMetallicRoughness&&i.pbrMetallicRoughness.baseColorFactor&&(i.pbrMetallicRoughness.baseColorFactor=V(i.pbrMetallicRoughness.baseColorFactor));e&&function(t,e){const i={source:{image:e}};t.pbrMetallicRoughness&&t.pbrMetallicRoughness.baseColorTexture?t.pbrMetallicRoughness.baseColorTexture={...t.pbrMetallicRoughness.baseColorTexture,texture:i}:t.emissiveTexture?t.emissiveTexture={...t.emissiveTexture,texture:i}:t.pbrMetallicRoughness&&t.pbrMetallicRoughness.metallicRoughnessTexture?t.pbrMetallicRoughness.metallicRoughnessTexture={...t.pbrMetallicRoughness.metallicRoughnessTexture,texture:i}:t.normalTexture?t.normalTexture={...t.normalTexture,texture:i}:t.occlusionTexture&&(t.occlusionTexture={...t.occlusionTexture,texture:i})}(i,e);return i}(e.materialDefinition,d.texture),d.material&&(d.texture=null),await async function(t,e,i,n,a){var c;const h=t.byteLength;let g,d,_,f=0,p=0;if(i.isDracoGeometry){var m;const e=await(0,o.Q)(t,u.VJ,{draco:{attributeNameEntry:U}});d=e.header.vertexCount,_=null===(m=e.indices)||void 0===m?void 0:m.value;const{POSITION:i,NORMAL:n,COLOR_0:r,TEXCOORD_0:l,"feature-index":s,"uv-region":a}=e.attributes;g={position:i,normal:n,color:r,uv0:l,uvRegion:a,id:s},function(t,e){for(const i in e.loaderData.attributes){const o=e.loaderData.attributes[i];switch(o.name){case"POSITION":t.position.metadata=o.metadata;break;case"feature-index":t.id.metadata=o.metadata}}}(g,e);const c=function(t){var e,i;return null==t||null===(e=t.metadata)||void 0===e||null===(i=e["i3s-feature-ids"])||void 0===i?void 0:i.intArray}(s);c&&function(t,e){const i=t.id.value,o=new Float32Array(i.length);for(let n=0;n<i.length;n++)o[n]=e[i[n]];t.id.value=o}(g,c)}else{const{vertexAttributes:e,ordering:i,featureAttributes:o,featureAttributeOrder:r}=n.store.defaultGeometrySchema,l=function(t,e){let i=0,o=0,n=0;for(const{property:r,type:l}of e.store.defaultGeometrySchema.header){const e=N(l);switch(r){case I.vertexCount:o=new e(t,0,4)[0],i+=B(l);break;case I.featureCount:n=new e(t,4,4)[0],i+=B(l)}}return{vertexCount:o,featureCount:n,byteOffset:i}}(t,n);f=l.byteOffset,d=l.vertexCount,p=l.featureCount;const{attributes:s,byteOffset:a}=z(t,f,e,d,i),{attributes:c}=z(t,a,o,p,r);!function(t){const{id:e,faceRange:i}=t;if(!e||!i)return;const o=e.value,n=i.value,r=n[n.length-1]+1,l=new Uint32Array(3*r);let s=0,a=0;for(let c=1;c<n.length;c+=2){const t=Number(o[s]),e=a+3*(n[c]-n[c-1]+1);l.fill(t,a,e),s++,a=e}t.id.value=l}(c),g=function(t,e){return{...t,...e}}(s,c)}if(null!=a&&null!==(c=a.i3s)&&void 0!==c&&c.coordinateSystem&&a.i3s.coordinateSystem!==F.METER_OFFSETS)e.modelMatrix=function(t){var e,i;const o=t.metadata,n=(null==o||null===(e=o["i3s-scale_x"])||void 0===e?void 0:e.double)||1,r=(null==o||null===(i=o["i3s-scale_y"])||void 0===i?void 0:i.double)||1,s=new l.y;return s[0]=n,s[5]=r,s}(g.position),e.coordinateSystem=F.LNGLAT_OFFSETS;else{const t=function(t,e){const i=e.mbs,o=t.value,n=t.metadata,a=new l.y,c=new r.P(i[0],i[1],i[2]),u=new r.P;return s.H.WGS84.cartographicToCartesian(c,u),s.H.WGS84.eastNorthUpToFixedFrame(u,a),t.value=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;const o=new Float64Array(t.length),n=e["i3s-scale_x"]&&e["i3s-scale_x"].double||1,r=e["i3s-scale_y"]&&e["i3s-scale_y"].double||1;for(let l=0;l<o.length;l+=3)o[l]=t[l]*n+i.x,o[l+1]=t[l+1]*r+i.y,o[l+2]=t[l+2]+i.z;for(let l=0;l<o.length;l+=3)s.H.WGS84.cartographicToCartesian(o.subarray(l,l+3),X),o[l]=X.x,o[l+1]=X.y,o[l+2]=X.z;return o}(o,n,c),a}(g.position,i);e.modelMatrix=t.invert(),e.coordinateSystem=F.METER_OFFSETS}e.attributes={positions:g.position,normals:g.normal,colors:$(g.color),texCoords:g.uv0,uvRegions:$(g.uvRegion||g.region)},e.indices=_||null,g.id&&g.id.value&&(e.featureIds=g.id.value);for(const o in e.attributes)e.attributes[o]||delete e.attributes[o];return e.vertexCount=d,e.byteLength=h,e}(t,d,e,i,h)}function $(t){return t?(t.normalized=!0,t):t}function z(t,e,i,o,n){const r={};for(const l of n)if(i[l]){const{valueType:n,valuesPerElement:s}=i[l];if(e+o*s*B(n)<=t.byteLength){const i=t.slice(e);let a;if("UInt64"===n)a=K(i,o*s,B(n));else{a=new(N(n))(i,0,o*s)}if(r[l]={value:a,type:k[n],size:s},"color"===l)r.color.normalized=!0;e+=o*s*B(n)}else if("uv0"!==l)break}return{attributes:r,byteOffset:e}}function K(t,e,i){const o=[],n=new DataView(t);let r=0;for(let l=0;l<e;l++){const t=n.getUint32(r,!0)+2**32*n.getUint32(r+4,!0);o.push(t),r+=i}return new Uint32Array(o)}function V(t){const e=[...t];for(let i=0;i<t.length;i++)e[i]=t[i]/255;return e}const W={name:"I3S Content (Indexed Scene Layers)",id:"i3s-content",module:"i3s",worker:!0,version:"4.1.1",mimeTypes:["application/octet-stream"],parse:async function(t,e,i){const{tile:o,_tileOptions:n,tileset:r,_tilesetOptions:l}=(null==e?void 0:e.i3s)||{},s=n||o,a=l||r;if(!s||!a)return null;return await j(t,s,a,e,i)},extensions:["bin"],options:{"i3s-content":{}}};var Z=i(5044),J=i(61439),q=i(63663);const Q={name:"I3S Node Page",id:"i3s-node-page",module:"i3s",version:"4.1.1",mimeTypes:["application/json"],parse:async function(t,e){return JSON.parse((new TextDecoder).decode(t))},extensions:["json"],options:{i3s:{}}};class Y{constructor(t){var e,i;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0;this.tileset=void 0,this.nodePages=[],this.pendingNodePages=[],this.nodesPerPage=void 0,this.options=void 0,this.lodSelectionMetricType=void 0,this.textureDefinitionsSelectedFormats=[],this.nodesInNodePages=void 0,this.url=void 0,this.textureLoaderOptions={},this.tileset={...t},this.url=o,this.nodesPerPage=(null===(e=t.nodePages)||void 0===e?void 0:e.nodesPerPage)||64,this.lodSelectionMetricType=null===(i=t.nodePages)||void 0===i?void 0:i.lodSelectionMetricType,this.options=n,this.nodesInNodePages=0,this.initSelectedFormatsForTextureDefinitions(t)}async getNodeById(t){const e=Math.floor(t/this.nodesPerPage);if(!this.nodePages[e]&&!this.pendingNodePages[e]){var i;const t=w(`${this.url}/nodepages/${e}`,null===(i=this.options.i3s)||void 0===i?void 0:i.token);this.pendingNodePages[e]={status:"Pending",promise:(0,n.z)(t,Q,this.options)},this.nodePages[e]=await this.pendingNodePages[e].promise,this.nodesInNodePages+=this.nodePages[e].nodes.length,this.pendingNodePages[e].status="Done"}"Pending"===this.pendingNodePages[e].status&&(this.nodePages[e]=await this.pendingNodePages[e].promise);const o=t%this.nodesPerPage;return this.nodePages[e].nodes[o]}async formTileFromNodePages(t){const e=await this.getNodeById(t),i=[],o=[];for(const g of e.children||[])o.push(this.getNodeById(g));const n=await Promise.all(o);for(const g of n)i.push({id:g.index.toString(),obb:g.obb});let r,l,s,a="jpg",c=[],u=!1;if(e&&e.mesh){const{url:t,isDracoGeometry:i}=e.mesh.geometry&&this.getContentUrl(e.mesh.geometry)||{isDracoGeometry:!1};r=t,u=i;const{textureData:o,materialDefinition:n}=this.getInformationFromMaterial(e.mesh.material);s=n,a=o.format||a,o.name&&(l=`${this.url}/nodes/${e.mesh.material.resource}/textures/${o.name}`),this.tileset.attributeStorageInfo&&(c=function(t,e,i){const o=[],{attributeStorageInfo:n=[]}=t;for(let r=0;r<n.length;r++){const t=n[r].key;o.push(`${e}/nodes/${i}/attributes/${t}/0`)}return o}(this.tileset,this.url,e.mesh.attribute.resource))}const h=this.getLodSelection(e);return tt({id:t.toString(),lodSelection:h,obb:e.obb,contentUrl:r,textureUrl:l,attributeUrls:c,materialDefinition:s,textureFormat:a,textureLoaderOptions:this.textureLoaderOptions,children:i,isDracoGeometry:u})}getContentUrl(t){let e=null;const i=this.tileset.geometryDefinitions[t.definition];let o=-1;if(this.options.i3s&&this.options.i3s.useDracoGeometry&&(o=i.geometryBuffers.findIndex((t=>t.compressedAttributes&&"draco"===t.compressedAttributes.encoding))),-1===o&&(o=i.geometryBuffers.findIndex((t=>!t.compressedAttributes))),-1!==o){const n=Boolean(i.geometryBuffers[o].compressedAttributes);e={url:`${this.url}/nodes/${t.resource}/geometries/${o}`,isDracoGeometry:n}}return e}getLodSelection(t){const e=[];return"maxScreenThresholdSQ"===this.lodSelectionMetricType&&e.push({metricType:"maxScreenThreshold",maxError:Math.sqrt(t.lodThreshold/(.25*Math.PI))}),e.push({metricType:this.lodSelectionMetricType,maxError:t.lodThreshold}),e}getInformationFromMaterial(t){const e={textureData:{name:null}};if(t){var i;const r=null===(i=this.tileset.materialDefinitions)||void 0===i?void 0:i[t.definition];if(r){var o,n;e.materialDefinition=r;const t=null==r||null===(o=r.pbrMetallicRoughness)||void 0===o||null===(n=o.baseColorTexture)||void 0===n?void 0:n.textureSetDefinitionId;"number"==typeof t&&(e.textureData=this.textureDefinitionsSelectedFormats[t]||e.textureData)}}return e}initSelectedFormatsForTextureDefinitions(t){this.textureDefinitionsSelectedFormats=[];const e=this.getSupportedTextureFormats(),i=t.textureSetDefinitions||[];for(const o of i){const t=o&&o.formats||[];let i=null;for(const o of e){const e=t.find((t=>t.format===o));if(e){i=e;break}}i&&"ktx2"===i.format&&(this.textureLoaderOptions.basis={format:(0,L.h)(),containerFormat:"ktx2",module:"encoder"}),this.textureDefinitionsSelectedFormats.push(i)}}getSupportedTextureFormats(){const t=[];if(!this.options.i3s||this.options.i3s.useCompressedTextures){const e=(0,q.U)();e.has("etc2")&&t.push("ktx-etc2"),e.has("dxt")&&t.push("dds"),t.push("ktx2")}return t.push("jpg"),t.push("png"),t}}function tt(t){var e,i;const o={};let n=[0,0,0,1];if(t.mbs)n=t.mbs,o.sphere=[...s.H.WGS84.cartographicToCartesian(t.mbs.slice(0,3)),t.mbs[3]];else if(t.obb){o.box=[...s.H.WGS84.cartographicToCartesian(t.obb.center),...t.obb.halfSize,...t.obb.quaternion];const e=(new Z.F7).fromCenterHalfSizeQuaternion(o.box.slice(0,3),t.obb.halfSize,t.obb.quaternion).getBoundingSphere();o.sphere=[...e.center,e.radius],n=[...t.obb.center,e.radius]}const r=null===(e=t.lodSelection)||void 0===e?void 0:e[0].metricType,l=null===(i=t.lodSelection)||void 0===i?void 0:i[0].maxError,a=J.R7.MESH,c=J.F$.REPLACE;return{...t,mbs:n,boundingVolume:o,lodMetricType:r,lodMetricValue:l,type:a,refine:c}}const et=/layers\/[0-9]+$/,it=/nodes\/([0-9-]+|root)$/,ot="504b0304",nt="PointCloud",rt={name:"I3S (Indexed Scene Layers)",id:"i3s",module:"i3s",version:"4.1.1",mimeTypes:["application/octet-stream"],parse:async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;const r=i.url;e.i3s=e.i3s||{};if(function(t){if(t instanceof ArrayBuffer)return[...new Uint8Array(t,0,4)].map((t=>t.toString(16).padStart(2,"0"))).join("");return null}(t)===ot)throw new Error("Files with .slpk extention currently are not supported by I3SLoader");const l=G(r);let s,a;s="auto"===e.i3s.isTileset?et.test(l):e.i3s.isTileset;a="auto"===e.isTileHeader?it.test(l):e.i3s.isTileHeader;t=s?await async function(t,e,i){const o=JSON.parse((new TextDecoder).decode(t));if((null==o?void 0:o.layerType)===nt)throw new Error("Point Cloud layers currently are not supported by I3SLoader");const r=await async function(t,e,i){const o=G(i.url||"");let r,l;if(t.nodePages)r=new Y(t,o,e),l=await r.formTileFromNodePages(0);else{const t=w(`${o}/nodes/root`,e.i3s.token);l=await(0,n.z)(t,rt,{...e,i3s:{...e.i3s,loadContent:!1,isTileHeader:!0,isTileset:!1}})}return{...t,loader:rt,url:o,basePath:o,type:J.i3.I3S,nodePagesTile:r,root:l,lodMetricType:l.lodMetricType,lodMetricValue:l.lodMetricValue}}(o,e,i);return r}(t,e,i):a?await async function(t,e){return t=JSON.parse((new TextDecoder).decode(t)),function(t,e){const i=e.url||"";let o,n,r;t.geometryData&&(o=`${i}/${t.geometryData[0].href}`),t.textureData&&(n=`${i}/${t.textureData[0].href}`),t.attributeData&&(r=function(t,e){const{attributeData:i=[]}=e,o=[];for(let n=0;n<i.length;n++){const e=i[n].href.replace("./","");o.push(`${t}/${e}`)}return o}(i,t));const l=t.children||[];return tt({...t,children:l,url:i,contentUrl:o,textureUrl:n,textureFormat:"jpg",attributeUrls:r,isDracoGeometry:!1})}(t,e)}(t,i):await async function(t,e){return await(0,o.Q)(t,W,e)}(t,e);return t},extensions:["bin"],options:{i3s:{token:null,isTileset:"auto",isTileHeader:"auto",tile:null,tileset:null,_tileOptions:null,_tilesetOptions:null,useDracoGeometry:!0,useCompressedTextures:!0,decodeTextures:!0,coordinateSystem:F.METER_OFFSETS}}}}}]);