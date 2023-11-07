"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5482],{41708:(t,e,i)=>{i.d(e,{Z:()=>o});var s=i(41199),r=i(53563);class o{constructor(t){this.id=void 0,this.topology=void 0,this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.userData={};const{attributes:e={},indices:i=null,vertexCount:o=null}=t;this.id=t.id||(0,s.hQ)("geometry"),this.topology=t.topology,i&&(this.indices=ArrayBuffer.isView(i)?{value:i,size:1}:i),this.attributes={};for(const[s,n]of Object.entries(e)){const t=ArrayBuffer.isView(n)?{value:n}:n;(0,r.h)(ArrayBuffer.isView(t.value),`${this._print(s)}: must be typed array or object with value as typed array`),"POSITION"!==s&&"positions"!==s||t.size||(t.size=3),"indices"===s?((0,r.h)(!this.indices),this.indices=t):this.attributes[s]=t}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=o||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(t){return`Geometry ${this.id} attribute ${t}`}_setAttributes(t,e){return this}_calculateVertexCount(t,e){if(e)return e.value.length;let i=1/0;for(const s of Object.values(t)){const{value:t,size:e,constant:r}=s;!r&&t&&e>=1&&(i=Math.min(i,t.length/e))}return(0,r.h)(Number.isFinite(i)),i}}},70138:(t,e,i)=>{i.d(e,{H:()=>g});var s=i(41199);function r(t,e,i){if(t===e)return!0;if(!i||!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let s=0;s<t.length;s++)if(!r(t[s],e[s],i-1))return!1;return!0}if(Array.isArray(e))return!1;if("object"==typeof t&&"object"==typeof e){const s=Object.keys(t),o=Object.keys(e);if(s.length!==o.length)return!1;for(const n of s){if(!e.hasOwnProperty(n))return!1;if(!r(t[n],e[n],i-1))return!1}return!0}return!1}var o=i(47407),n=i(34210),u=i(55866),l=i(65352),a=i(53563),c=i(63847);class h{constructor(t){this.id=void 0,this.userData={},this.topology=void 0,this.bufferLayout=[],this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.id=t.id||(0,s.hQ)("geometry"),this.topology=t.topology,this.indices=t.indices||null,this.attributes=t.attributes,this.vertexCount=t.vertexCount,this.bufferLayout=t.bufferLayout||[],this.indices&&(0,a.h)(this.indices.usage===c.l.INDEX)}destroy(){var t;this.indices.destroy(),this.attributes.positions.destroy(),this.attributes.normals.destroy(),this.attributes.texCoords.destroy(),null===(t=this.attributes.colors)||void 0===t||t.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices}_calculateVertexCount(t){return t.byteLength/12}}function d(t,e){if(e instanceof h)return e;const i=function(t,e){if(!e.indices)return;const i=e.indices.value;return t.createBuffer({usage:c.l.INDEX,data:i})}(t,e),{attributes:s,bufferLayout:r}=function(t,e){const i=[],s={};for(const[o,n]of Object.entries(e.attributes)){let e=o;switch(o){case"POSITION":e="positions";break;case"NORMAL":e="normals";break;case"TEXCOORD_0":e="texCoords"}s[e]=t.createBuffer({data:n.value,id:`${o}-buffer`}),i.push({name:e,format:`float32x${n.size}`})}const r=e._calculateVertexCount(e.attributes,e.indices);return{attributes:s,bufferLayout:i,vertexCount:r}}(t,e);return new h({topology:e.topology||"triangle-list",bufferLayout:r,vertexCount:e.vertexCount,indices:i,attributes:s})}var p=i(38908);class g{constructor(t,e){this.device=void 0,this.id=void 0,this.vs=void 0,this.fs=void 0,this.pipelineFactory=void 0,this.userData={},this.parameters=void 0,this.topology=void 0,this.bufferLayout=void 0,this.vertexCount=void 0,this.instanceCount=0,this.indexBuffer=null,this.bufferAttributes={},this.constantAttributes={},this.bindings={},this.uniforms={},this.pipeline=void 0,this.vertexArray=void 0,this._pipelineNeedsUpdate="newly created",this._attributeInfos={},this._gpuGeometry=null,this._getModuleUniforms=void 0,this.props=void 0,this.props={...g.defaultProps,...e},e=this.props,this.id=e.id||(0,s.hQ)("model"),this.device=t,Object.assign(this.userData,e.userData);const i={type:t.info.type,shaderLanguage:t.info.shadingLanguages[0],gpu:t.info.gpu,features:t.features},{vs:r,fs:o,getUniforms:n}=this.props.shaderAssembler.assembleShaders(i,this.props);if(this.vs=r,this.fs=o,this._getModuleUniforms=n,this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,e.geometry&&(this._gpuGeometry=this.setGeometry(e.geometry)),this.pipelineFactory=e.pipelineFactory||p.g.getDefaultPipelineFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=t.createVertexArray({renderPipeline:this.pipeline}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),e.vertexCount&&this.setVertexCount(e.vertexCount),e.instanceCount&&this.setInstanceCount(e.instanceCount),e.indices)throw new Error("Model.props.indices removed. Use props.indexBuffer");e.indexBuffer&&this.setIndexBuffer(e.indexBuffer),e.attributes&&this.setAttributes(e.attributes),e.constantAttributes&&this.setConstantAttributes(e.constantAttributes),e.bindings&&this.setBindings(e.bindings),e.uniforms&&this.setUniforms(e.uniforms),e.moduleSettings&&this.updateModuleSettings(e.moduleSettings),this.setUniforms(this._getModuleUniforms()),Object.seal(this)}destroy(){this.pipelineFactory.release(this.pipeline)}draw(t){this.pipeline=this._updatePipeline(),this.pipeline.setBindings(this.bindings),this.pipeline.setUniforms(this.uniforms),this.pipeline.draw({renderPass:t,vertexArray:this.vertexArray,vertexCount:this.vertexCount,instanceCount:this.instanceCount})}setGeometry(t){const e=t&&d(this.device,t);return this.setTopology(e.topology||"triangle-list"),this.bufferLayout=f(this.bufferLayout,e.bufferLayout),this.vertexArray&&this._setGeometryAttributes(e),e}_setGeometryAttributes(t){this.vertexCount=t.vertexCount,this.setAttributes(t.attributes),this.setIndexBuffer(t.indices)}setTopology(t){t!==this.topology&&(this.topology=t,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(t){this.bufferLayout=this._gpuGeometry?f(t,this._gpuGeometry.bufferLayout):t,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({renderPipeline:this.pipeline}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(t){r(t,this.parameters,2)||(this.parameters=t,this._setPipelineNeedsUpdate("parameters"))}setVertexCount(t){this.vertexCount=t}setInstanceCount(t){this.instanceCount=t}setShaderModuleProps(t){const e=this._getModuleUniforms(t),i=Object.keys(e).filter((t=>e[t].constructor.name.includes("WEBGL"))),s={};for(const r of i)s[r]=e[r],delete e[r];Object.assign(this.uniforms,e),Object.assign(this.bindings,s)}updateModuleSettings(t){this.setShaderModuleProps(t)}setBindings(t){Object.assign(this.bindings,t)}setUniforms(t){this.pipeline.setUniforms(t),Object.assign(this.uniforms,t)}setIndexBuffer(t){this.vertexArray.setIndexBuffer(t)}setAttributes(t){t.indices&&o.c.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`);for(const[i,s]of Object.entries(t)){var e;const t=this.bufferLayout.find((t=>t.name===i));if(!t)continue;const r=t.attributes?null===(e=t.attributes)||void 0===e?void 0:e.map((t=>t.attribute)):[t.name];let n=!1;for(const e of r){const t=this._attributeInfos[e];t&&(this.vertexArray.setBuffer(t.location,s),n=!0)}n||o.c.warn(`Model(${this.id}): Ignoring buffer "${s.id}" for unknown attribute "${i}"`)()}}setConstantAttributes(t){for(const[e,i]of Object.entries(t)){const t=this._attributeInfos[e];t?this.vertexArray.setConstant(t.location,i):o.c.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${e}"`)()}}_setPipelineNeedsUpdate(t){this._pipelineNeedsUpdate=this._pipelineNeedsUpdate||t}_updatePipeline(){return this._pipelineNeedsUpdate&&(this.pipeline&&o.c.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),this._pipelineNeedsUpdate=!1,this.pipeline=this.device.createRenderPipeline({...this.props,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,vs:this.device.createShader({id:"{$this.id}-vertex",stage:"vertex",source:this.vs}),fs:this.fs?this.device.createShader({id:"{$this.id}-fragment",stage:"fragment",source:this.fs}):null}),this._attributeInfos=(0,u.G5)(this.pipeline.shaderLayout,this.bufferLayout)),this.pipeline}}function f(t,e){const i=[...t];for(const s of e){const t=i.findIndex((t=>t.name===s.name));t<0?i.push(s):i[t]=s}return i}g.defaultProps={...n.h.defaultProps,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],moduleSettings:{},geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},pipelineFactory:void 0,shaderAssembler:l.q.getDefaultShaderAssembler()}},7206:(t,e,i)=>{i.d(e,{q:()=>o});var s=i(27872);const r={pickingActive:!1,pickingAttribute:!1,pickingSelectedColor:null,pickingHighlightColor:new Uint8Array([0,255,255,255]),pickingColorRange:255};const o={name:"picking",vs:s.H`\
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
`,fs:s.H`\
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

`,getUniforms:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;const e={};if(void 0!==t.pickingActive&&(e.picking_uActive=Boolean(t.pickingActive),e.picking_uAttribute=Boolean(t.pickingAttribute)),void 0!==t.pickingSelectedColor)if(t.pickingSelectedColor){const i=t.pickingSelectedColor.slice(0,3);e.picking_uSelectedColorValid=1,e.picking_uSelectedColor=i}else e.picking_uSelectedColorValid=0;if(t.pickingHighlightColor){const i=Array.from(t.pickingHighlightColor,(t=>t/255));Number.isFinite(i[3])||(i[3]=1),e.picking_uHighlightColor=i}return t.pickingColorRange&&(e.picking_uColorScale=1/t.pickingColorRange),e}}},44625:(t,e,i)=>{i.d(e,{Z:()=>c});var s=i(53563),r=i(69268),o=i(95342);const n=256,u=1024,l=16384,a="clear: bad arguments";function c(t,e){const i=r.j.attach(t),{framebuffer:c=null,color:h=null,depth:d=null,stencil:p=null}=e||{},g={};c&&(g.framebuffer=c);let f=0;h&&(f|=l,!0!==h&&(g.clearColor=h)),d&&(f|=n,!0!==d&&(g.clearDepth=d)),p&&(f|=u,!0!==d&&(g.clearStencil=d)),(0,s.h)(0!==f,a),(0,o.a)(i.gl,g,(()=>{i.gl.clear(f)}))}},4942:(t,e,i)=>{function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,{Z:()=>s})}}]);