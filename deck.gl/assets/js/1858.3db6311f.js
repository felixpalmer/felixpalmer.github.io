"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1858],{3905:(t,i,e)=>{e.d(i,{Zo:()=>h,kt:()=>d});var o=e(67294);function r(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function n(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);i&&(o=o.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?n(Object(e),!0).forEach((function(i){r(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}function s(t,i){if(null==t)return{};var e,o,r=function(t,i){if(null==t)return{};var e,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)e=n[o],i.indexOf(e)>=0||(r[e]=t[e]);return r}(t,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)e=n[o],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var a=o.createContext({}),c=function(t){var i=o.useContext(a),e=i;return t&&(e="function"==typeof t?t(i):l(l({},i),t)),e},h=function(t){var i=c(t.components);return o.createElement(a.Provider,{value:i},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var i=t.children;return o.createElement(o.Fragment,{},i)}},p=o.forwardRef((function(t,i){var e=t.components,r=t.mdxType,n=t.originalType,a=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),g=c(e),p=r,d=g["".concat(a,".").concat(p)]||g[p]||u[p]||n;return e?o.createElement(d,l(l({ref:i},h),{},{components:e})):o.createElement(d,l({ref:i},h))}));function d(t,i){var e=arguments,r=i&&i.mdxType;if("string"==typeof t||r){var n=e.length,l=new Array(n);l[0]=p;var s={};for(var a in i)hasOwnProperty.call(i,a)&&(s[a]=i[a]);s.originalType=t,s[g]="string"==typeof t?t:r,l[1]=s;for(var c=2;c<n;c++)l[c]=e[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,e)}p.displayName="MDXCreateElement"},78542:(t,i,e)=>{function o(t){let i=1/0,e=1/0,o=1/0,r=-1/0,n=-1/0,l=-1/0;const s=t.POSITION?t.POSITION.value:[],a=s&&s.length;for(let c=0;c<a;c+=3){const t=s[c],a=s[c+1],h=s[c+2];i=t<i?t:i,e=a<e?a:e,o=h<o?h:o,r=t>r?t:r,n=a>n?a:n,l=h>l?h:l}return[[i,e,o],[r,n,l]]}e.d(i,{v:()=>o})},57406:(t,i,e)=>{e.d(i,{H:()=>l});const o=e(27872).H`\
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
`,r={lightSources:{}};function n(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{color:i=[0,0,0],intensity:e=1}=t;return i.map((t=>t*e/255))}const l={name:"lights",vs:o,fs:o,getUniforms:function t(){var i,e;let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;if("lightSources"in o){const{ambientLight:t,pointLights:i,directionalLights:e}=o.lightSources||{};return t||i&&i.length>0||e&&e.length>0?Object.assign({},function(t){let{ambientLight:i,pointLights:e=[],directionalLights:o=[]}=t;const r={};return r["lighting_uAmbientLight.color"]=i?n(i):[0,0,0],e.forEach(((t,i)=>{r[`lighting_uPointLight[${i}].color`]=n(t),r[`lighting_uPointLight[${i}].position`]=t.position,r[`lighting_uPointLight[${i}].attenuation`]=t.attenuation||[1,0,0]})),r.lighting_uPointLightCount=e.length,o.forEach(((t,i)=>{r[`lighting_uDirectionalLight[${i}].color`]=n(t),r[`lighting_uDirectionalLight[${i}].direction`]=t.direction})),r.lighting_uDirectionalLightCount=o.length,r}({ambientLight:t,pointLights:i,directionalLights:e}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in o){const r={pointLights:[],directionalLights:[]};for(const t of o.lights||[])switch(t.type){case"ambient":r.ambientLight=t;break;case"directional":null===(i=r.directionalLights)||void 0===i||i.push(t);break;case"point":null===(e=r.pointLights)||void 0===e||e.push(t)}return t({lightSources:r})}return{}},defines:{MAX_LIGHTS:3}}},31456:(t,i,e)=>{e.d(i,{N:()=>s,s:()=>a});var o=e(57406);const r=e(27872).H`\

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
`,n={};function l(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;if(!("material"in t))return{};const{material:i}=t;return i?function(t){const{ambient:i=.35,diffuse:e=.6,shininess:o=32,specularColor:r=[30,30,30]}=t;return{lighting_uAmbient:i,lighting_uDiffuse:e,lighting_uShininess:o,lighting_uSpecularColor:r.map((t=>t/255))}}(i):{lighting_uEnabled:!1}}const s={name:"gouraud-lighting",dependencies:[o.H],vs:r,defines:{LIGHTING_VERTEX:1},getUniforms:l},a={name:"phong-lighting",dependencies:[o.H],fs:r,defines:{LIGHTING_FRAGMENT:1},getUniforms:l}},35300:(t,i,e)=>{e.d(i,{q:()=>n});var o=e(27872);const r=new Float32Array([0,1,1,1]),n={name:"picking",vs:o.H`\
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
`,uniformTypes:{isActive:"f32",isAttribute:"f32",isHighlightActive:"f32",useFloatColors:"f32",highlightedObjectColor:"vec3<f32>",highlightColor:"vec4<f32>"},defaultUniforms:{isActive:!1,isAttribute:!1,isHighlightActive:!1,useFloatColors:!0,highlightedObjectColor:new Float32Array([0,0,0]),highlightColor:r},getUniforms:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i={};if(void 0===t.highlightedObjectColor);else if(null===t.highlightedObjectColor)i.isHighlightActive=!1;else{i.isHighlightActive=!0;const e=t.highlightedObjectColor.slice(0,3);i.highlightedObjectColor=e}if(t.highlightColor){const e=Array.from(t.highlightColor,(t=>t/255));Number.isFinite(e[3])||(e[3]=1),i.highlightColor=e}void 0!==t.isActive&&(i.isActive=Boolean(t.isActive),i.isAttribute=Boolean(t.isAttribute));void 0!==t.useFloatColors&&(i.useFloatColors=Boolean(t.useFloatColors));return i}}},25825:(t,i,e)=>{e.d(i,{LU:()=>m});var o=e(78542);const r=/^[og]\s*(.+)?/,n=/^mtllib /,l=/^usemtl /;class s{constructor(t){let{index:i,name:e="",mtllib:o,smooth:r,groupStart:n}=t;this.index=i,this.name=e,this.mtllib=o,this.smooth=r,this.groupStart=n,this.groupEnd=-1,this.groupCount=-1,this.inherited=!1}clone(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.index;return new s({index:t,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0})}}class a{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.name=t,this.geometry={vertices:[],normals:[],colors:[],uvs:[]},this.materials=[],this.smooth=!0,this.fromDeclaration=null}startMaterial(t,i){const e=this._finalize(!1);e&&(e.inherited||e.groupCount<=0)&&this.materials.splice(e.index,1);const o=new s({index:this.materials.length,name:t,mtllib:Array.isArray(i)&&i.length>0?i[i.length-1]:"",smooth:void 0!==e?e.smooth:this.smooth,groupStart:void 0!==e?e.groupEnd:0});return this.materials.push(o),o}currentMaterial(){if(this.materials.length>0)return this.materials[this.materials.length-1]}_finalize(t){const i=this.currentMaterial();if(i&&-1===i.groupEnd&&(i.groupEnd=this.geometry.vertices.length/3,i.groupCount=i.groupEnd-i.groupStart,i.inherited=!1),t&&this.materials.length>1)for(let e=this.materials.length-1;e>=0;e--)this.materials[e].groupCount<=0&&this.materials.splice(e,1);return t&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),i}}class c{constructor(){this.objects=[],this.object=null,this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.materialLibraries=[],this.startObject("",!1)}startObject(t){let i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.object&&!this.object.fromDeclaration)return this.object.name=t,void(this.object.fromDeclaration=i);const e=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object=new a(t),this.object.fromDeclaration=i,e&&e.name&&"function"==typeof e.clone){const t=e.clone(0);t.inherited=!0,this.object.materials.push(t)}this.objects.push(this.object)}finalize(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)}parseVertexIndex(t,i){const e=parseInt(t);return 3*(e>=0?e-1:e+i/3)}parseNormalIndex(t,i){const e=parseInt(t);return 3*(e>=0?e-1:e+i/3)}parseUVIndex(t,i){const e=parseInt(t);return 2*(e>=0?e-1:e+i/2)}addVertex(t,i,e){const o=this.vertices,r=this.object.geometry.vertices;r.push(o[t+0],o[t+1],o[t+2]),r.push(o[i+0],o[i+1],o[i+2]),r.push(o[e+0],o[e+1],o[e+2])}addVertexPoint(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])}addVertexLine(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])}addNormal(t,i,e){const o=this.normals,r=this.object.geometry.normals;r.push(o[t+0],o[t+1],o[t+2]),r.push(o[i+0],o[i+1],o[i+2]),r.push(o[e+0],o[e+1],o[e+2])}addColor(t,i,e){const o=this.colors,r=this.object.geometry.colors;r.push(o[t+0],o[t+1],o[t+2]),r.push(o[i+0],o[i+1],o[i+2]),r.push(o[e+0],o[e+1],o[e+2])}addUV(t,i,e){const o=this.uvs,r=this.object.geometry.uvs;r.push(o[t+0],o[t+1]),r.push(o[i+0],o[i+1]),r.push(o[e+0],o[e+1])}addUVLine(t){const i=this.uvs;this.object.geometry.uvs.push(i[t+0],i[t+1])}addFace(t,i,e,o,r,n,l,s,a){const c=this.vertices.length;let h=this.parseVertexIndex(t,c),g=this.parseVertexIndex(i,c),u=this.parseVertexIndex(e,c);if(this.addVertex(h,g,u),void 0!==o&&""!==o){const t=this.uvs.length;h=this.parseUVIndex(o,t),g=this.parseUVIndex(r,t),u=this.parseUVIndex(n,t),this.addUV(h,g,u)}if(void 0!==l&&""!==l){const t=this.normals.length;h=this.parseNormalIndex(l,t),g=l===s?h:this.parseNormalIndex(s,t),u=l===a?h:this.parseNormalIndex(a,t),this.addNormal(h,g,u)}this.colors.length>0&&this.addColor(h,g,u)}addPointGeometry(t){this.object.geometry.type="Points";const i=this.vertices.length;for(const e of t)this.addVertexPoint(this.parseVertexIndex(e,i))}addLineGeometry(t,i){this.object.geometry.type="Line";const e=this.vertices.length,o=this.uvs.length;for(const r of t)this.addVertexLine(this.parseVertexIndex(r,e));for(const r of i)this.addUVLine(this.parseUVIndex(r,o))}}var h=e(75177);function g(t,i){const e={};for(const r in i)"value"!==r&&(e[r]=JSON.stringify(i[r]));let{type:o}=(0,h.gU)(i.value);return 1===i.size||void 0===i.size||(o={type:"fixed-size-list",listSize:i.size,children:[{name:"values",type:o}]}),{name:t,type:o,nullable:!1,metadata:e}}function u(t,i){const{meshes:e}=function(t){const i=new c;-1!==t.indexOf("\r\n")&&(t=t.replace(/\r\n/g,"\n")),-1!==t.indexOf("\\\n")&&(t=t.replace(/\\\n/g,""));const e=t.split("\n");let o="",s="",a=0,h=[];const g="function"==typeof"".trimLeft;for(let c=0,d=e.length;c<d;c++)if(o=e[c],o=g?o.trimLeft():o.trim(),a=o.length,0!==a&&(s=o.charAt(0),"#"!==s))if("v"===s){const t=o.split(/\s+/);switch(t[0]){case"v":i.vertices.push(parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])),t.length>=7&&i.colors.push(parseFloat(t[4]),parseFloat(t[5]),parseFloat(t[6]));break;case"vn":i.normals.push(parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]));break;case"vt":i.uvs.push(parseFloat(t[1]),parseFloat(t[2]))}}else if("f"===s){const t=o.substr(1).trim().split(/\s+/),e=[];for(let i=0,o=t.length;i<o;i++){const o=t[i];if(o.length>0){const t=o.split("/");e.push(t)}}const r=e[0];for(let o=1,n=e.length-1;o<n;o++){const t=e[o],n=e[o+1];i.addFace(r[0],t[0],n[0],r[1],t[1],n[1],r[2],t[2],n[2])}}else if("l"===s){const t=o.substring(1).trim().split(" ");let e;const r=[];if(-1===o.indexOf("/"))e=t;else{e=[];for(let i=0,o=t.length;i<o;i++){const o=t[i].split("/");""!==o[0]&&e.push(o[0]),""!==o[1]&&r.push(o[1])}}i.addLineGeometry(e,r)}else if("p"===s){const t=o.substr(1).trim().split(" ");i.addPointGeometry(t)}else if(null!==(h=r.exec(o))){const t=(" "+h[0].substr(1).trim()).substr(1);i.startObject(t)}else if(l.test(o))i.object.startMaterial(o.substring(7).trim(),i.materialLibraries);else if(n.test(o))i.materialLibraries.push(o.substring(7).trim());else{if("s"!==s){if("\0"===o)continue;throw new Error(`Unexpected line: "${o}"`)}{if(h=o.split(" "),h.length>1){const t=h[1].trim().toLowerCase();i.object.smooth="0"!==t&&"off"!==t}else i.object.smooth=!0;const t=i.object.currentMaterial();t&&(t.smooth=i.object.smooth)}}i.finalize();const u=[],p=[];for(const r of i.objects){const{geometry:t}=r;if(0===t.vertices.length)continue;const i={header:{vertexCount:t.vertices.length/3},attributes:{}};switch(t.type){case"Points":i.mode=0;break;case"Line":i.mode=1;break;default:i.mode=4}i.attributes.POSITION={value:new Float32Array(t.vertices),size:3},t.normals.length>0&&(i.attributes.NORMAL={value:new Float32Array(t.normals),size:3}),t.colors.length>0&&(i.attributes.COLOR_0={value:new Float32Array(t.colors),size:3}),t.uvs.length>0&&(i.attributes.TEXCOORD_0={value:new Float32Array(t.uvs),size:2}),i.materials=[];for(const e of r.materials){const t={name:e.name,flatShading:!e.smooth};i.materials.push(t),p.push(t)}i.name=r.name,u.push(i)}return{meshes:u,materials:p}}(t),s=e.reduce(((t,i)=>t+i.header.vertexCount),0),a=function(t,i){const e=new Float32Array(3*i);let o,r,n,l=0;for(const a of t){const{POSITION:t,NORMAL:s,COLOR_0:c,TEXCOORD_0:h}=a.attributes;e.set(t.value,3*l),s&&(o=o||new Float32Array(3*i),o.set(s.value,3*l)),c&&(r=r||new Float32Array(3*i),r.set(c.value,3*l)),h&&(n=n||new Float32Array(2*i),n.set(h.value,2*l)),l+=t.value.length/3}const s={};s.POSITION={value:e,size:3},o&&(s.NORMAL={value:o,size:3});r&&(s.COLOR_0={value:r,size:3});n&&(s.TEXCOORD_0={value:n,size:2});return s}(e,s),h={vertexCount:s,boundingBox:(0,o.v)(a)},u=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const e={};for(const r in i)"value"!==r&&(e[r]=JSON.stringify(i[r]));const o=[];for(const r in t){const i=g(r,t[r]);o.push(i)}return{fields:o,metadata:e}}(a,{mode:4,boundingBox:h.boundingBox});return{loaderData:{header:{}},schema:u,header:h,mode:4,topology:"point-list",attributes:a}}const p=/\s+/;function d(t,i){const e=[];let o={name:"placeholder"};const r=t.split("\n");for(let n of r){if(n=n.trim(),0===n.length||"#"===n.charAt(0))continue;const t=n.indexOf(" ");let i=t>=0?n.substring(0,t):n;i=i.toLowerCase();let r=t>=0?n.substring(t+1):"";switch(r=r.trim(),i){case"newmtl":o={name:r},e.push(o);break;case"ka":o.ambientColor=f(r);break;case"kd":o.diffuseColor=f(r);break;case"map_kd":o.diffuseTextureUrl=r;break;case"ks":o.specularColor=f(r);break;case"map_ks":o.specularTextureUrl=r;break;case"ke":o.emissiveColor=f(r);break;case"map_ke":o.emissiveTextureUrl=r;break;case"ns":o.shininess=parseFloat(r);break;case"map_ns":default:break;case"ni":o.refraction=parseFloat(r);break;case"illum":o.illumination=parseFloat(r)}}return e}function f(t,i){const e=t.split(p,3);return[parseFloat(e[0]),parseFloat(e[1]),parseFloat(e[2])]}const m={...{name:"OBJ",id:"obj",module:"obj",version:"4.1.0-alpha.9",worker:!0,extensions:["obj"],mimeTypes:["text/plain"],testText:function(t){return"v"===t[0]},options:{obj:{}}},parse:async(t,i)=>u((new TextDecoder).decode(t)),parseTextSync:(t,i)=>u(t)}}}]);