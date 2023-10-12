"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1559],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var r=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(i),d=o,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||n;return i?r.createElement(f,s(s({ref:t},c),{},{components:i})):r.createElement(f,s({ref:t},c))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,s=new Array(n);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<n;u++)s[u]=i[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},20745:(e,t,i)=>{var r=i(73935);t.s=r.createRoot,r.hydrateRoot},70138:(e,t,i)=>{i.d(t,{H:()=>f});var r=i(41199);function o(e,t,i){if(e===t)return!0;if(!i||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!o(e[r],t[r],i-1))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const s of r){if(!t.hasOwnProperty(s))return!1;if(!o(e[s],t[s],i-1))return!1}return!0}return!1}var n=i(47407),s=i(34210),a=i(55866),l=i(65352),u=i(53563),c=i(63847);class p{constructor(e){this.id=void 0,this.userData={},this.topology=void 0,this.bufferLayout=[],this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.id=e.id||(0,r.hQ)("geometry"),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&(0,u.h)(this.indices.usage===c.l.INDEX)}destroy(){var e;this.indices.destroy(),this.attributes.positions.destroy(),this.attributes.normals.destroy(),this.attributes.texCoords.destroy(),null===(e=this.attributes.colors)||void 0===e||e.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices}_calculateVertexCount(e){return e.byteLength/12}}function h(e,t){if(t instanceof p)return t;const i=function(e,t){if(!t.indices)return;const i=t.indices.value;return e.createBuffer({usage:c.l.INDEX,data:i})}(e,t),{attributes:r,bufferLayout:o}=function(e,t){const i=[],r={};for(const[n,s]of Object.entries(t.attributes)){let t=n;switch(n){case"POSITION":t="positions";break;case"NORMAL":t="normals";break;case"TEXCOORD_0":t="texCoords"}r[t]=e.createBuffer({data:s.value,id:`${n}-buffer`}),i.push({name:t,format:`float32x${s.size}`})}const o=t._calculateVertexCount(t.attributes,t.indices);return{attributes:r,bufferLayout:i,vertexCount:o}}(e,t);return new p({topology:t.topology||"triangle-list",bufferLayout:o,vertexCount:t.vertexCount,indices:i,attributes:r})}var d=i(38908);class f{constructor(e,t){this.device=void 0,this.id=void 0,this.vs=void 0,this.fs=void 0,this.pipelineFactory=void 0,this.userData={},this.parameters=void 0,this.topology=void 0,this.bufferLayout=void 0,this.vertexCount=void 0,this.instanceCount=0,this.indexBuffer=null,this.bufferAttributes={},this.constantAttributes={},this.bindings={},this.uniforms={},this.pipeline=void 0,this.vertexArray=void 0,this._pipelineNeedsUpdate="newly created",this._attributeInfos={},this._gpuGeometry=null,this._getModuleUniforms=void 0,this.props=void 0,this.props={...f.defaultProps,...t},t=this.props,this.id=t.id||(0,r.hQ)("model"),this.device=e,Object.assign(this.userData,t.userData);const i={type:e.info.type,shaderLanguage:e.info.shadingLanguages[0],gpu:e.info.gpu,features:e.features},{vs:o,fs:n,getUniforms:s}=this.props.shaderAssembler.assembleShaders(i,this.props);if(this.vs=o,this.fs=n,this._getModuleUniforms=s,this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,t.geometry&&(this._gpuGeometry=this.setGeometry(t.geometry)),this.pipelineFactory=t.pipelineFactory||d.g.getDefaultPipelineFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=e.createVertexArray({renderPipeline:this.pipeline}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),t.vertexCount&&this.setVertexCount(t.vertexCount),t.instanceCount&&this.setInstanceCount(t.instanceCount),t.indices)throw new Error("Model.props.indices removed. Use props.indexBuffer");t.indexBuffer&&this.setIndexBuffer(t.indexBuffer),t.attributes&&this.setAttributes(t.attributes),t.constantAttributes&&this.setConstantAttributes(t.constantAttributes),t.bindings&&this.setBindings(t.bindings),t.uniforms&&this.setUniforms(t.uniforms),t.moduleSettings&&this.updateModuleSettings(t.moduleSettings),this.setUniforms(this._getModuleUniforms()),Object.seal(this)}destroy(){this.pipelineFactory.release(this.pipeline)}draw(e){this.pipeline=this._updatePipeline(),this.pipeline.setBindings(this.bindings),this.pipeline.setUniforms(this.uniforms),this.pipeline.draw({renderPass:e,vertexArray:this.vertexArray,vertexCount:this.vertexCount,instanceCount:this.instanceCount})}setGeometry(e){const t=e&&h(this.device,e);return this.setTopology(t.topology||"triangle-list"),this.bufferLayout=g(this.bufferLayout,t.bufferLayout),this.vertexArray&&this._setGeometryAttributes(t),t}_setGeometryAttributes(e){this.vertexCount=e.vertexCount,this.setAttributes(e.attributes),this.setIndexBuffer(e.indices)}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(e){this.bufferLayout=this._gpuGeometry?g(e,this._gpuGeometry.bufferLayout):e,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({renderPipeline:this.pipeline}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(e){o(e,this.parameters,2)||(this.parameters=e,this._setPipelineNeedsUpdate("parameters"))}setVertexCount(e){this.vertexCount=e}setInstanceCount(e){this.instanceCount=e}setShaderModuleProps(e){const t=this._getModuleUniforms(e);Object.assign(this.uniforms,t)}updateModuleSettings(e){this.setShaderModuleProps(e)}setBindings(e){Object.assign(this.bindings,e)}setUniforms(e){this.pipeline.setUniforms(e),Object.assign(this.uniforms,e)}setIndexBuffer(e){this.vertexArray.setIndexBuffer(e)}setAttributes(e){e.indices&&n.c.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`);for(const[i,r]of Object.entries(e)){var t;const e=this.bufferLayout.find((e=>e.name===i));if(!e)continue;const o=e.attributes?null===(t=e.attributes)||void 0===t?void 0:t.map((e=>e.attribute)):[e.name];let s=!1;for(const t of o){const e=this._attributeInfos[t];e&&(this.vertexArray.setBuffer(e.location,r),s=!0)}s||n.c.warn(`Model(${this.id}): Ignoring buffer "${r.id}" for unknown attribute "${i}"`)()}}setConstantAttributes(e){for(const[t,i]of Object.entries(e)){const e=this._attributeInfos[t];e?this.vertexArray.setConstant(e.location,i):n.c.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${t}"`)()}}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate=this._pipelineNeedsUpdate||e}_updatePipeline(){return this._pipelineNeedsUpdate&&(this.pipeline&&n.c.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),this._pipelineNeedsUpdate=!1,this.pipeline=this.device.createRenderPipeline({...this.props,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,vs:this.device.createShader({id:"{$this.id}-vertex",stage:"vertex",source:this.vs}),fs:this.fs?this.device.createShader({id:"{$this.id}-fragment",stage:"fragment",source:this.fs}):null}),this._attributeInfos=(0,a.G5)(this.pipeline.shaderLayout,this.bufferLayout)),this.pipeline}}function g(e,t){const i=[...e];for(const r of t){const e=i.findIndex((e=>e.name===r.name));e<0?i.push(r):i[e]=r}return i}f.defaultProps={...s.h.defaultProps,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],moduleSettings:{},geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},pipelineFactory:void 0,shaderAssembler:l.q.getDefaultShaderAssembler()}},7206:(e,t,i)=>{i.d(t,{q:()=>n});var r=i(27872);const o={pickingActive:!1,pickingAttribute:!1,pickingSelectedColor:null,pickingHighlightColor:new Uint8Array([0,255,255,255]),pickingColorRange:255};const n={name:"picking",vs:r.H`\
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
`,fs:r.H`\
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

`,getUniforms:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;const t={};if(void 0!==e.pickingActive&&(t.picking_uActive=Boolean(e.pickingActive),t.picking_uAttribute=Boolean(e.pickingAttribute)),void 0!==e.pickingSelectedColor)if(e.pickingSelectedColor){const i=e.pickingSelectedColor.slice(0,3);t.picking_uSelectedColorValid=1,t.picking_uSelectedColor=i}else t.picking_uSelectedColorValid=0;if(e.pickingHighlightColor){const i=Array.from(e.pickingHighlightColor,(e=>e/255));Number.isFinite(i[3])||(i[3]=1),t.picking_uHighlightColor=i}return e.pickingColorRange&&(t.picking_uColorScale=1/e.pickingColorRange),t}}}}]);