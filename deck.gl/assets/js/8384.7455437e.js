"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8384],{41708:(i,t,e)=>{e.d(t,{Z:()=>r});var o=e(41199),n=e(53563);class r{constructor(i){this.id=void 0,this.topology=void 0,this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.userData={};const{attributes:t={},indices:e=null,vertexCount:r=null}=i;this.id=i.id||(0,o.hQ)("geometry"),this.topology=i.topology,e&&(this.indices=ArrayBuffer.isView(e)?{value:e,size:1}:e),this.attributes={};for(const[o,s]of Object.entries(t)){const i=ArrayBuffer.isView(s)?{value:s}:s;(0,n.h)(ArrayBuffer.isView(i.value),`${this._print(o)}: must be typed array or object with value as typed array`),"POSITION"!==o&&"positions"!==o||i.size||(i.size=3),"indices"===o?((0,n.h)(!this.indices),this.indices=i):this.attributes[o]=i}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=r||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(i){return`Geometry ${this.id} attribute ${i}`}_setAttributes(i,t){return this}_calculateVertexCount(i,t){if(t)return t.value.length;let e=1/0;for(const o of Object.values(i)){const{value:i,size:t,constant:n}=o;!n&&i&&t>=1&&(e=Math.min(e,i.length/t))}return(0,n.h)(Number.isFinite(e)),e}}},70138:(i,t,e)=>{e.d(t,{H:()=>p});var o=e(41199);function n(i,t,e){if(i===t)return!0;if(!e||!i||!t)return!1;if(Array.isArray(i)){if(!Array.isArray(t)||i.length!==t.length)return!1;for(let o=0;o<i.length;o++)if(!n(i[o],t[o],e-1))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof i&&"object"==typeof t){const o=Object.keys(i),r=Object.keys(t);if(o.length!==r.length)return!1;for(const s of o){if(!t.hasOwnProperty(s))return!1;if(!n(i[s],t[s],e-1))return!1}return!0}return!1}var r=e(47407),s=e(34210),l=e(55866),a=e(65352),c=e(53563),u=e(63847);class h{constructor(i){this.id=void 0,this.userData={},this.topology=void 0,this.bufferLayout=[],this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.id=i.id||(0,o.hQ)("geometry"),this.topology=i.topology,this.indices=i.indices||null,this.attributes=i.attributes,this.vertexCount=i.vertexCount,this.bufferLayout=i.bufferLayout||[],this.indices&&(0,c.h)(this.indices.usage===u.l.INDEX)}destroy(){var i;this.indices.destroy(),this.attributes.positions.destroy(),this.attributes.normals.destroy(),this.attributes.texCoords.destroy(),null===(i=this.attributes.colors)||void 0===i||i.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices}_calculateVertexCount(i){return i.byteLength/12}}function g(i,t){if(t instanceof h)return t;const e=function(i,t){if(!t.indices)return;const e=t.indices.value;return i.createBuffer({usage:u.l.INDEX,data:e})}(i,t),{attributes:o,bufferLayout:n}=function(i,t){const e=[],o={};for(const[r,s]of Object.entries(t.attributes)){let t=r;switch(r){case"POSITION":t="positions";break;case"NORMAL":t="normals";break;case"TEXCOORD_0":t="texCoords"}o[t]=i.createBuffer({data:s.value,id:`${r}-buffer`}),e.push({name:t,format:`float32x${s.size}`})}const n=t._calculateVertexCount(t.attributes,t.indices);return{attributes:o,bufferLayout:e,vertexCount:n}}(i,t);return new h({topology:t.topology||"triangle-list",bufferLayout:n,vertexCount:t.vertexCount,indices:e,attributes:o})}var d=e(38908);class p{constructor(i,t){this.device=void 0,this.id=void 0,this.vs=void 0,this.fs=void 0,this.pipelineFactory=void 0,this.userData={},this.parameters=void 0,this.topology=void 0,this.bufferLayout=void 0,this.vertexCount=void 0,this.instanceCount=0,this.indexBuffer=null,this.bufferAttributes={},this.constantAttributes={},this.bindings={},this.uniforms={},this.pipeline=void 0,this.vertexArray=void 0,this._pipelineNeedsUpdate="newly created",this._attributeInfos={},this._gpuGeometry=null,this._getModuleUniforms=void 0,this.props=void 0,this.props={...p.defaultProps,...t},t=this.props,this.id=t.id||(0,o.hQ)("model"),this.device=i,Object.assign(this.userData,t.userData);const e={type:i.info.type,shaderLanguage:i.info.shadingLanguages[0],gpu:i.info.gpu,features:i.features},{vs:n,fs:r,getUniforms:s}=this.props.shaderAssembler.assembleShaders(e,this.props);if(this.vs=n,this.fs=r,this._getModuleUniforms=s,this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,t.geometry&&(this._gpuGeometry=this.setGeometry(t.geometry)),this.pipelineFactory=t.pipelineFactory||d.g.getDefaultPipelineFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=i.createVertexArray({renderPipeline:this.pipeline}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),t.vertexCount&&this.setVertexCount(t.vertexCount),t.instanceCount&&this.setInstanceCount(t.instanceCount),t.indices)throw new Error("Model.props.indices removed. Use props.indexBuffer");t.indexBuffer&&this.setIndexBuffer(t.indexBuffer),t.attributes&&this.setAttributes(t.attributes),t.constantAttributes&&this.setConstantAttributes(t.constantAttributes),t.bindings&&this.setBindings(t.bindings),t.uniforms&&this.setUniforms(t.uniforms),t.moduleSettings&&this.updateModuleSettings(t.moduleSettings),this.setUniforms(this._getModuleUniforms()),Object.seal(this)}destroy(){this.pipelineFactory.release(this.pipeline)}draw(i){this.pipeline=this._updatePipeline(),this.pipeline.setBindings(this.bindings),this.pipeline.setUniforms(this.uniforms),this.pipeline.draw({renderPass:i,vertexArray:this.vertexArray,vertexCount:this.vertexCount,instanceCount:this.instanceCount})}setGeometry(i){const t=i&&g(this.device,i);return this.setTopology(t.topology||"triangle-list"),this.bufferLayout=f(this.bufferLayout,t.bufferLayout),this.vertexArray&&this._setGeometryAttributes(t),t}_setGeometryAttributes(i){this.vertexCount=i.vertexCount,this.setAttributes(i.attributes),this.setIndexBuffer(i.indices)}setTopology(i){i!==this.topology&&(this.topology=i,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(i){this.bufferLayout=this._gpuGeometry?f(i,this._gpuGeometry.bufferLayout):i,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({renderPipeline:this.pipeline}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(i){n(i,this.parameters,2)||(this.parameters=i,this._setPipelineNeedsUpdate("parameters"))}setVertexCount(i){this.vertexCount=i}setInstanceCount(i){this.instanceCount=i}setShaderModuleProps(i){const t=this._getModuleUniforms(i);Object.assign(this.uniforms,t)}updateModuleSettings(i){this.setShaderModuleProps(i)}setBindings(i){Object.assign(this.bindings,i)}setUniforms(i){this.pipeline.setUniforms(i),Object.assign(this.uniforms,i)}setIndexBuffer(i){this.vertexArray.setIndexBuffer(i)}setAttributes(i){i.indices&&r.c.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`);for(const[e,o]of Object.entries(i)){var t;const i=this.bufferLayout.find((i=>i.name===e));if(!i)continue;const n=i.attributes?null===(t=i.attributes)||void 0===t?void 0:t.map((i=>i.attribute)):[i.name];let s=!1;for(const t of n){const i=this._attributeInfos[t];i&&(this.vertexArray.setBuffer(i.location,o),s=!0)}s||r.c.warn(`Model(${this.id}): Ignoring buffer "${o.id}" for unknown attribute "${e}"`)()}}setConstantAttributes(i){for(const[t,e]of Object.entries(i)){const i=this._attributeInfos[t];i?this.vertexArray.setConstant(i.location,e):r.c.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${t}"`)()}}_setPipelineNeedsUpdate(i){this._pipelineNeedsUpdate=this._pipelineNeedsUpdate||i}_updatePipeline(){return this._pipelineNeedsUpdate&&(this.pipeline&&r.c.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),this._pipelineNeedsUpdate=!1,this.pipeline=this.device.createRenderPipeline({...this.props,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,vs:this.device.createShader({id:"{$this.id}-vertex",stage:"vertex",source:this.vs}),fs:this.fs?this.device.createShader({id:"{$this.id}-fragment",stage:"fragment",source:this.fs}):null}),this._attributeInfos=(0,l.G5)(this.pipeline.shaderLayout,this.bufferLayout)),this.pipeline}}function f(i,t){const e=[...i];for(const o of t){const i=e.findIndex((i=>i.name===o.name));i<0?e.push(o):e[i]=o}return e}p.defaultProps={...s.h.defaultProps,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],moduleSettings:{},geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},pipelineFactory:void 0,shaderAssembler:a.q.getDefaultShaderAssembler()}},41173:(i,t,e)=>{e.d(t,{N:()=>h,s:()=>g});var o=e(27872);const n=o.H`\
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
`,r={lightSources:{}};function s(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{color:t=[0,0,0],intensity:e=1}=i;return t.map((i=>i*e/255))}const l={name:"lights",vs:n,fs:n,getUniforms:function i(){var t,e;let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;if("lightSources"in o){const{ambientLight:i,pointLights:t,directionalLights:e}=o.lightSources||{};return i||t&&t.length>0||e&&e.length>0?Object.assign({},function(i){let{ambientLight:t,pointLights:e=[],directionalLights:o=[]}=i;const n={};return n["lighting_uAmbientLight.color"]=t?s(t):[0,0,0],e.forEach(((i,t)=>{n[`lighting_uPointLight[${t}].color`]=s(i),n[`lighting_uPointLight[${t}].position`]=i.position,n[`lighting_uPointLight[${t}].attenuation`]=i.attenuation||[1,0,0]})),n.lighting_uPointLightCount=e.length,o.forEach(((i,t)=>{n[`lighting_uDirectionalLight[${t}].color`]=s(i),n[`lighting_uDirectionalLight[${t}].direction`]=i.direction})),n.lighting_uDirectionalLightCount=o.length,n}({ambientLight:i,pointLights:t,directionalLights:e}),{lighting_uEnabled:!0}):{lighting_uEnabled:!1}}if("lights"in o){const n={pointLights:[],directionalLights:[]};for(const i of o.lights||[])switch(i.type){case"ambient":n.ambientLight=i;break;case"directional":null===(t=n.directionalLights)||void 0===t||t.push(i);break;case"point":null===(e=n.pointLights)||void 0===e||e.push(i)}return i({lightSources:n})}return{}},defines:{MAX_LIGHTS:3}},a=o.H`\

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
`,c={};function u(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;if(!("material"in i))return{};const{material:t}=i;return t?function(i){const{ambient:t=.35,diffuse:e=.6,shininess:o=32,specularColor:n=[30,30,30]}=i;return{lighting_uAmbient:t,lighting_uDiffuse:e,lighting_uShininess:o,lighting_uSpecularColor:n.map((i=>i/255))}}(t):{lighting_uEnabled:!1}}const h={name:"gouraud-lighting",dependencies:[l],vs:a,defines:{LIGHTING_VERTEX:1},getUniforms:u},g={name:"phong-lighting",dependencies:[l],fs:a,defines:{LIGHTING_FRAGMENT:1},getUniforms:u}},7206:(i,t,e)=>{e.d(t,{q:()=>r});var o=e(27872);const n={pickingActive:!1,pickingAttribute:!1,pickingSelectedColor:null,pickingHighlightColor:new Uint8Array([0,255,255,255]),pickingColorRange:255};const r={name:"picking",vs:o.H`\
uniform bool picking_uActive;
uniform bool picking_uAttribute;
uniform vec3 picking_uSelectedColor;
uniform bool picking_uSelectedColorValid;
uniform float picking_uColorScale;

out vec4 picking_vRGBcolor_Avalid;

bool picking_isColorValid(vec3 color) {
  return dot(color, vec3(1.0)) > 0.001;
}

bool isVertexPicked(vec3 vertexColor) {
  return
    picking_uSelectedColorValid &&
    !picking_isColorValid(abs(vertexColor - picking_uSelectedColor));
}

void picking_setPickingColor(vec3 pickingColor) {
  if (picking_uActive) {
    // Use alpha as the validity flag. If pickingColor is [0, 0, 0] fragment is non-pickable
    picking_vRGBcolor_Avalid.a = float(picking_isColorValid(pickingColor));

    // if (!picking_uAttribute) {
      // Stores the picking color so that the fragment shader can render it during picking
      picking_vRGBcolor_Avalid.rgb = pickingColor * picking_uColorScale;
    // }
  } else {
    // Do the comparison with selected item color in vertex shader as it should mean fewer compares
    picking_vRGBcolor_Avalid.a = float(isVertexPicked(pickingColor));
  }
}

void picking_setPickingAttribute(float value) {
  if (picking_uAttribute) {
    picking_vRGBcolor_Avalid.r = value;
  }
}
void picking_setPickingAttribute(vec2 value) {
  if (picking_uAttribute) {
    picking_vRGBcolor_Avalid.rg = value;
  }
}
void picking_setPickingAttribute(vec3 value) {
  if (picking_uAttribute) {
    picking_vRGBcolor_Avalid.rgb = value;
  }
}
`,fs:o.H`\
uniform bool picking_uActive;
uniform vec3 picking_uSelectedColor;
uniform vec4 picking_uHighlightColor;

in vec4 picking_vRGBcolor_Avalid;

/*
 * Returns highlight color if this item is selected.
 */
vec4 picking_filterHighlightColor(vec4 color) {
  if (picking_uActive) {
    return color;
  }
  bool selected = bool(picking_vRGBcolor_Avalid.a);

  if (selected) {
    float highLightAlpha = picking_uHighlightColor.a;
    float blendedAlpha = highLightAlpha + color.a * (1.0 - highLightAlpha);
    float highLightRatio = highLightAlpha / blendedAlpha;

    vec3 blendedRGB = mix(color.rgb, picking_uHighlightColor.rgb, highLightRatio);
    return vec4(blendedRGB, blendedAlpha);
  } else {
    return color;
  }
}

/*
 * Returns picking color if picking enabled else unmodified argument.
 */
vec4 picking_filterPickingColor(vec4 color) {
  if (picking_uActive) {
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
  vec4 highightColor = picking_filterHighlightColor(color);
  return picking_filterPickingColor(highightColor);
}

`,getUniforms:function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;const t={};if(void 0!==i.pickingActive&&(t.picking_uActive=Boolean(i.pickingActive),t.picking_uAttribute=Boolean(i.pickingAttribute)),void 0!==i.pickingSelectedColor)if(i.pickingSelectedColor){const e=i.pickingSelectedColor.slice(0,3);t.picking_uSelectedColorValid=1,t.picking_uSelectedColor=e}else t.picking_uSelectedColorValid=0;if(i.pickingHighlightColor){const e=Array.from(i.pickingHighlightColor,(i=>i/255));Number.isFinite(e[3])||(e[3]=1),t.picking_uHighlightColor=e}return i.pickingColorRange&&(t.picking_uColorScale=1/i.pickingColorRange),t}}}}]);