"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8552,2601,7142,1559,8446],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>f});var r=i(67294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,s=function(e,t){if(null==e)return{};var i,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var u=r.createContext({}),c=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,s=e.mdxType,n=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),h=c(i),d=s,f=h["".concat(u,".").concat(d)]||h[d]||p[d]||n;return i?r.createElement(f,o(o({ref:t},l),{},{components:i})):r.createElement(f,o({ref:t},l))}));function f(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=i.length,o=new Array(n);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[h]="string"==typeof e?e:s,o[1]=a;for(var c=2;c<n;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},66871:(e,t,i)=>{i.d(t,{Z:()=>h,Q:()=>l});var r=i(67614),s=i(51212),n=i(48348),o=i(46196),a=i(33085);var u=i(42957);function c(e,t,i,s){var n,c=(0,r.ly)(e,t,i);switch((s=(0,o.Z)(null==s?",f":s)).type){case"s":var l=Math.max(Math.abs(e),Math.abs(t));return null!=s.precision||isNaN(n=function(e,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,a.Z)(t)/3)))-(0,a.Z)(Math.abs(e)))}(c,l))||(s.precision=n),(0,u.jH)(s,l);case"":case"e":case"g":case"p":case"r":null!=s.precision||isNaN(n=function(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,(0,a.Z)(t)-(0,a.Z)(e))+1}(c,Math.max(Math.abs(e),Math.abs(t))))||(s.precision=n-("e"===s.type));break;case"f":case"%":null!=s.precision||isNaN(n=function(e){return Math.max(0,-(0,a.Z)(Math.abs(e)))}(c))||(s.precision=n-2*("%"===s.type))}return(0,u.WU)(s)}function l(e){var t=e.domain;return e.ticks=function(e){var i=t();return(0,r.ZP)(i[0],i[i.length-1],null==e?10:e)},e.tickFormat=function(e,i){var r=t();return c(r[0],r[r.length-1],null==e?10:e,i)},e.nice=function(i){null==i&&(i=10);var s,n,o=t(),a=0,u=o.length-1,c=o[a],l=o[u],h=10;for(l<c&&(n=c,c=l,l=n,n=a,a=u,u=n);h-- >0;){if((n=(0,r.G9)(c,l,i))===s)return o[a]=c,o[u]=l,t(o);if(n>0)c=Math.floor(c/n)*n,l=Math.ceil(l/n)*n;else{if(!(n<0))break;c=Math.ceil(c*n)/n,l=Math.floor(l*n)/n}s=n}return e},e}function h(){var e=(0,s.ZP)();return e.copy=function(){return(0,s.JG)(e,h())},n.o.apply(e,arguments),l(e)}},20745:(e,t,i)=>{var r=i(73935);t.s=r.createRoot,r.hydrateRoot},41708:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(41199),s=i(53563);class n{constructor(e){this.id=void 0,this.topology=void 0,this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.userData={};const{attributes:t={},indices:i=null,vertexCount:n=null}=e;this.id=e.id||(0,r.hQ)("geometry"),this.topology=e.topology,i&&(this.indices=ArrayBuffer.isView(i)?{value:i,size:1}:i),this.attributes={};for(const[r,o]of Object.entries(t)){const e=ArrayBuffer.isView(o)?{value:o}:o;(0,s.h)(ArrayBuffer.isView(e.value),`${this._print(r)}: must be typed array or object with value as typed array`),"POSITION"!==r&&"positions"!==r||e.size||(e.size=3),"indices"===r?((0,s.h)(!this.indices),this.indices=e):this.attributes[r]=e}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=n||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(e){return`Geometry ${this.id} attribute ${e}`}_setAttributes(e,t){return this}_calculateVertexCount(e,t){if(t)return t.value.length;let i=1/0;for(const r of Object.values(e)){const{value:e,size:t,constant:s}=r;!s&&e&&t>=1&&(i=Math.min(i,e.length/t))}return(0,s.h)(Number.isFinite(i)),i}}},70138:(e,t,i)=>{i.d(t,{H:()=>f});var r=i(41199);function s(e,t,i){if(e===t)return!0;if(!i||!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!s(e[r],t[r],i-1))return!1;return!0}if(Array.isArray(t))return!1;if("object"==typeof e&&"object"==typeof t){const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const o of r){if(!t.hasOwnProperty(o))return!1;if(!s(e[o],t[o],i-1))return!1}return!0}return!1}var n=i(47407),o=i(34210),a=i(55866),u=i(65352),c=i(53563),l=i(63847);class h{constructor(e){this.id=void 0,this.userData={},this.topology=void 0,this.bufferLayout=[],this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.id=e.id||(0,r.hQ)("geometry"),this.topology=e.topology,this.indices=e.indices||null,this.attributes=e.attributes,this.vertexCount=e.vertexCount,this.bufferLayout=e.bufferLayout||[],this.indices&&(0,c.h)(this.indices.usage===l.l.INDEX)}destroy(){var e;this.indices.destroy(),this.attributes.positions.destroy(),this.attributes.normals.destroy(),this.attributes.texCoords.destroy(),null===(e=this.attributes.colors)||void 0===e||e.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices}_calculateVertexCount(e){return e.byteLength/12}}function p(e,t){if(t instanceof h)return t;const i=function(e,t){if(!t.indices)return;const i=t.indices.value;return e.createBuffer({usage:l.l.INDEX,data:i})}(e,t),{attributes:r,bufferLayout:s}=function(e,t){const i=[],r={};for(const[n,o]of Object.entries(t.attributes)){let t=n;switch(n){case"POSITION":t="positions";break;case"NORMAL":t="normals";break;case"TEXCOORD_0":t="texCoords"}r[t]=e.createBuffer({data:o.value,id:`${n}-buffer`}),i.push({name:t,format:`float32x${o.size}`})}const s=t._calculateVertexCount(t.attributes,t.indices);return{attributes:r,bufferLayout:i,vertexCount:s}}(e,t);return new h({topology:t.topology||"triangle-list",bufferLayout:s,vertexCount:t.vertexCount,indices:i,attributes:r})}var d=i(38908);class f{constructor(e,t){this.device=void 0,this.id=void 0,this.vs=void 0,this.fs=void 0,this.pipelineFactory=void 0,this.userData={},this.parameters=void 0,this.topology=void 0,this.bufferLayout=void 0,this.vertexCount=void 0,this.instanceCount=0,this.indexBuffer=null,this.bufferAttributes={},this.constantAttributes={},this.bindings={},this.uniforms={},this.pipeline=void 0,this.vertexArray=void 0,this._pipelineNeedsUpdate="newly created",this._attributeInfos={},this._gpuGeometry=null,this._getModuleUniforms=void 0,this.props=void 0,this.props={...f.defaultProps,...t},t=this.props,this.id=t.id||(0,r.hQ)("model"),this.device=e,Object.assign(this.userData,t.userData);const i={type:e.info.type,shaderLanguage:e.info.shadingLanguages[0],gpu:e.info.gpu,features:e.features},{vs:s,fs:n,getUniforms:o}=this.props.shaderAssembler.assembleShaders(i,this.props);if(this.vs=s,this.fs=n,this._getModuleUniforms=o,this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,t.geometry&&(this._gpuGeometry=this.setGeometry(t.geometry)),this.pipelineFactory=t.pipelineFactory||d.g.getDefaultPipelineFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=e.createVertexArray({renderPipeline:this.pipeline}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),t.vertexCount&&this.setVertexCount(t.vertexCount),t.instanceCount&&this.setInstanceCount(t.instanceCount),t.indices)throw new Error("Model.props.indices removed. Use props.indexBuffer");t.indexBuffer&&this.setIndexBuffer(t.indexBuffer),t.attributes&&this.setAttributes(t.attributes),t.constantAttributes&&this.setConstantAttributes(t.constantAttributes),t.bindings&&this.setBindings(t.bindings),t.uniforms&&this.setUniforms(t.uniforms),t.moduleSettings&&this.updateModuleSettings(t.moduleSettings),this.setUniforms(this._getModuleUniforms()),Object.seal(this)}destroy(){this.pipelineFactory.release(this.pipeline)}draw(e){this.pipeline=this._updatePipeline(),this.pipeline.setBindings(this.bindings),this.pipeline.setUniforms(this.uniforms),this.pipeline.draw({renderPass:e,vertexArray:this.vertexArray,vertexCount:this.vertexCount,instanceCount:this.instanceCount})}setGeometry(e){const t=e&&p(this.device,e);return this.setTopology(t.topology||"triangle-list"),this.bufferLayout=g(this.bufferLayout,t.bufferLayout),this.vertexArray&&this._setGeometryAttributes(t),t}_setGeometryAttributes(e){this.vertexCount=e.vertexCount,this.setAttributes(e.attributes),this.setIndexBuffer(e.indices)}setTopology(e){e!==this.topology&&(this.topology=e,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(e){this.bufferLayout=this._gpuGeometry?g(e,this._gpuGeometry.bufferLayout):e,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({renderPipeline:this.pipeline}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(e){s(e,this.parameters,2)||(this.parameters=e,this._setPipelineNeedsUpdate("parameters"))}setVertexCount(e){this.vertexCount=e}setInstanceCount(e){this.instanceCount=e}setShaderModuleProps(e){const t=this._getModuleUniforms(e),i=Object.keys(t).filter((e=>{const i=t[e];return!Array.isArray(i)&&"number"!=typeof i&&"boolean"!=typeof i})),r={};for(const s of i)r[s]=t[s],delete t[s];Object.assign(this.uniforms,t),Object.assign(this.bindings,r)}updateModuleSettings(e){this.setShaderModuleProps(e)}setBindings(e){Object.assign(this.bindings,e)}setUniforms(e){this.pipeline.setUniforms(e),Object.assign(this.uniforms,e)}setIndexBuffer(e){this.vertexArray.setIndexBuffer(e)}setAttributes(e){e.indices&&n.c.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`);for(const[i,r]of Object.entries(e)){var t;const e=this.bufferLayout.find((e=>e.name===i));if(!e)continue;const s=e.attributes?null===(t=e.attributes)||void 0===t?void 0:t.map((e=>e.attribute)):[e.name];let o=!1;for(const t of s){const e=this._attributeInfos[t];e&&(this.vertexArray.setBuffer(e.location,r),o=!0)}o||n.c.warn(`Model(${this.id}): Ignoring buffer "${r.id}" for unknown attribute "${i}"`)()}}setConstantAttributes(e){for(const[t,i]of Object.entries(e)){const e=this._attributeInfos[t];e?this.vertexArray.setConstant(e.location,i):n.c.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${t}"`)()}}_setPipelineNeedsUpdate(e){this._pipelineNeedsUpdate=this._pipelineNeedsUpdate||e}_updatePipeline(){return this._pipelineNeedsUpdate&&(this.pipeline&&n.c.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),this._pipelineNeedsUpdate=!1,this.pipeline=this.device.createRenderPipeline({...this.props,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,vs:this.device.createShader({id:"{$this.id}-vertex",stage:"vertex",source:this.vs}),fs:this.fs?this.device.createShader({id:"{$this.id}-fragment",stage:"fragment",source:this.fs}):null}),this._attributeInfos=(0,a.G5)(this.pipeline.shaderLayout,this.bufferLayout)),this.pipeline}}function g(e,t){const i=[...e];for(const r of t){const e=i.findIndex((e=>e.name===r.name));e<0?i.push(r):i[e]=r}return i}f.defaultProps={...o.h.defaultProps,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],moduleSettings:{},geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},pipelineFactory:void 0,shaderAssembler:u.q.getDefaultShaderAssembler()}},7206:(e,t,i)=>{i.d(t,{q:()=>n});var r=i(27872);const s={pickingActive:!1,pickingAttribute:!1,pickingSelectedColor:null,pickingHighlightColor:new Uint8Array([0,255,255,255]),pickingColorRange:255};const n={name:"picking",vs:r.H`\
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

`,getUniforms:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;const t={};if(void 0!==e.pickingActive&&(t.picking_uActive=Boolean(e.pickingActive),t.picking_uAttribute=Boolean(e.pickingAttribute)),void 0!==e.pickingSelectedColor)if(e.pickingSelectedColor){const i=e.pickingSelectedColor.slice(0,3);t.picking_uSelectedColorValid=1,t.picking_uSelectedColor=i}else t.picking_uSelectedColorValid=0;if(e.pickingHighlightColor){const i=Array.from(e.pickingHighlightColor,(e=>e/255));Number.isFinite(i[3])||(i[3]=1),t.picking_uHighlightColor=i}return e.pickingColorRange&&(t.picking_uColorScale=1/e.pickingColorRange),t}}}}]);