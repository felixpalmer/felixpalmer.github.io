"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7195,1657,9683,8072,832,5876],{3905:(t,e,i)=>{i.d(e,{Zo:()=>c,kt:()=>d});var r=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e){if(null==t)return{};var i,r,n=function(t,e){if(null==t)return{};var i,r,n={},s=Object.keys(t);for(r=0;r<s.length;r++)i=s[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var u=r.createContext({}),l=function(t){var e=r.useContext(u),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},c=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},h="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var i=t.components,n=t.mdxType,s=t.originalType,u=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),h=l(i),p=n,d=h["".concat(u,".").concat(p)]||h[p]||f[p]||s;return i?r.createElement(d,o(o({ref:e},c),{},{components:i})):r.createElement(d,o({ref:e},c))}));function d(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=i.length,o=new Array(s);o[0]=p;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a[h]="string"==typeof t?t:n,o[1]=a;for(var l=2;l<s;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},66871:(t,e,i)=>{i.d(e,{Z:()=>h,Q:()=>c});var r=i(67614),n=i(51212),s=i(48348),o=i(46196),a=i(33085);var u=i(42957);function l(t,e,i,n){var s,l=(0,r.ly)(t,e,i);switch((n=(0,o.Z)(null==n?",f":n)).type){case"s":var c=Math.max(Math.abs(t),Math.abs(e));return null!=n.precision||isNaN(s=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,a.Z)(e)/3)))-(0,a.Z)(Math.abs(t)))}(l,c))||(n.precision=s),(0,u.jH)(n,c);case"":case"e":case"g":case"p":case"r":null!=n.precision||isNaN(s=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,(0,a.Z)(e)-(0,a.Z)(t))+1}(l,Math.max(Math.abs(t),Math.abs(e))))||(n.precision=s-("e"===n.type));break;case"f":case"%":null!=n.precision||isNaN(s=function(t){return Math.max(0,-(0,a.Z)(Math.abs(t)))}(l))||(n.precision=s-2*("%"===n.type))}return(0,u.WU)(n)}function c(t){var e=t.domain;return t.ticks=function(t){var i=e();return(0,r.ZP)(i[0],i[i.length-1],null==t?10:t)},t.tickFormat=function(t,i){var r=e();return l(r[0],r[r.length-1],null==t?10:t,i)},t.nice=function(i){null==i&&(i=10);var n,s,o=e(),a=0,u=o.length-1,l=o[a],c=o[u],h=10;for(c<l&&(s=l,l=c,c=s,s=a,a=u,u=s);h-- >0;){if((s=(0,r.G9)(l,c,i))===n)return o[a]=l,o[u]=c,e(o);if(s>0)l=Math.floor(l/s)*s,c=Math.ceil(c/s)*s;else{if(!(s<0))break;l=Math.ceil(l*s)/s,c=Math.floor(c*s)/s}n=s}return t},t}function h(){var t=(0,n.ZP)();return t.copy=function(){return(0,n.JG)(t,h())},s.o.apply(t,arguments),c(t)}},20745:(t,e,i)=>{var r=i(73935);e.s=r.createRoot,r.hydrateRoot},41708:(t,e,i)=>{i.d(e,{Z:()=>s});var r=i(41199),n=i(53563);class s{constructor(t){this.id=void 0,this.topology=void 0,this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.userData={};const{attributes:e={},indices:i=null,vertexCount:s=null}=t;this.id=t.id||(0,r.hQ)("geometry"),this.topology=t.topology,i&&(this.indices=ArrayBuffer.isView(i)?{value:i,size:1}:i),this.attributes={};for(const[r,o]of Object.entries(e)){const t=ArrayBuffer.isView(o)?{value:o}:o;(0,n.h)(ArrayBuffer.isView(t.value),`${this._print(r)}: must be typed array or object with value as typed array`),"POSITION"!==r&&"positions"!==r||t.size||(t.size=3),"indices"===r?((0,n.h)(!this.indices),this.indices=t):this.attributes[r]=t}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=s||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(t){return`Geometry ${this.id} attribute ${t}`}_setAttributes(t,e){return this}_calculateVertexCount(t,e){if(e)return e.value.length;let i=1/0;for(const r of Object.values(t)){const{value:t,size:e,constant:n}=r;!n&&t&&e>=1&&(i=Math.min(i,t.length/e))}return(0,n.h)(Number.isFinite(i)),i}}},59332:(t,e,i)=>{i.d(e,{H:()=>g});var r=i(41199);function n(t,e,i){if(t===e)return!0;if(!i||!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!n(t[r],e[r],i-1))return!1;return!0}if(Array.isArray(e))return!1;if("object"==typeof t&&"object"==typeof e){const r=Object.keys(t),s=Object.keys(e);if(r.length!==s.length)return!1;for(const o of r){if(!e.hasOwnProperty(o))return!1;if(!n(t[o],e[o],i-1))return!1}return!0}return!1}function s(t){return Array.isArray(t)?0===t.length||"number"==typeof t[0]?t:null:function(t){return!ArrayBuffer.isView(t)||t instanceof DataView?null:t}(t)}var o=i(47407),a=i(34210),u=i(55866),l=i(65352),c=i(53563),h=i(63847);class f{constructor(t){this.id=void 0,this.userData={},this.topology=void 0,this.bufferLayout=[],this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.id=t.id||(0,r.hQ)("geometry"),this.topology=t.topology,this.indices=t.indices||null,this.attributes=t.attributes,this.vertexCount=t.vertexCount,this.bufferLayout=t.bufferLayout||[],this.indices&&(0,c.h)(this.indices.usage===h.l.INDEX)}destroy(){var t;this.indices.destroy(),this.attributes.positions.destroy(),this.attributes.normals.destroy(),this.attributes.texCoords.destroy(),null===(t=this.attributes.colors)||void 0===t||t.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices}_calculateVertexCount(t){return t.byteLength/12}}function p(t,e){if(e instanceof f)return e;const i=function(t,e){if(!e.indices)return;const i=e.indices.value;return t.createBuffer({usage:h.l.INDEX,data:i})}(t,e),{attributes:r,bufferLayout:n}=function(t,e){const i=[],r={};for(const[s,o]of Object.entries(e.attributes)){let e=s;switch(s){case"POSITION":e="positions";break;case"NORMAL":e="normals";break;case"TEXCOORD_0":e="texCoords"}r[e]=t.createBuffer({data:o.value,id:`${s}-buffer`}),i.push({name:e,format:`float32x${o.size}`})}const n=e._calculateVertexCount(e.attributes,e.indices);return{attributes:r,bufferLayout:i,vertexCount:n}}(t,e);return new f({topology:e.topology||"triangle-list",bufferLayout:n,vertexCount:e.vertexCount,indices:i,attributes:r})}var d=i(38908);class g{constructor(t,e){this.device=void 0,this.id=void 0,this.vs=void 0,this.fs=void 0,this.pipelineFactory=void 0,this.userData={},this.parameters=void 0,this.topology=void 0,this.bufferLayout=void 0,this.vertexCount=void 0,this.instanceCount=0,this.indexBuffer=null,this.bufferAttributes={},this.constantAttributes={},this.bindings={},this.uniforms={},this.pipeline=void 0,this.vertexArray=void 0,this._pipelineNeedsUpdate="newly created",this._attributeInfos={},this._gpuGeometry=null,this._getModuleUniforms=void 0,this.props=void 0,this.props={...g.defaultProps,...e},e=this.props,this.id=e.id||(0,r.hQ)("model"),this.device=t,Object.assign(this.userData,e.userData);const i={type:t.info.type,shaderLanguage:t.info.shadingLanguages[0],gpu:t.info.gpu,features:t.features},{vs:n,fs:s,getUniforms:o}=this.props.shaderAssembler.assembleShaders(i,this.props);if(this.vs=n,this.fs=s,this._getModuleUniforms=o,this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,e.geometry&&(this._gpuGeometry=this.setGeometry(e.geometry)),this.pipelineFactory=e.pipelineFactory||d.g.getDefaultPipelineFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=t.createVertexArray({renderPipeline:this.pipeline}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),e.vertexCount&&this.setVertexCount(e.vertexCount),e.instanceCount&&this.setInstanceCount(e.instanceCount),e.indices)throw new Error("Model.props.indices removed. Use props.indexBuffer");e.indexBuffer&&this.setIndexBuffer(e.indexBuffer),e.attributes&&this.setAttributes(e.attributes),e.constantAttributes&&this.setConstantAttributes(e.constantAttributes),e.bindings&&this.setBindings(e.bindings),e.uniforms&&this.setUniforms(e.uniforms),e.moduleSettings&&this.updateModuleSettings(e.moduleSettings),this.setUniforms(this._getModuleUniforms()),Object.seal(this)}destroy(){this.pipelineFactory.release(this.pipeline)}draw(t){this.pipeline=this._updatePipeline(),this.pipeline.setBindings(this.bindings),this.pipeline.setUniforms(this.uniforms),this.pipeline.draw({renderPass:t,vertexArray:this.vertexArray,vertexCount:this.vertexCount,instanceCount:this.instanceCount})}setGeometry(t){const e=t&&p(this.device,t);return this.setTopology(e.topology||"triangle-list"),this.bufferLayout=v(this.bufferLayout,e.bufferLayout),this.vertexArray&&this._setGeometryAttributes(e),e}_setGeometryAttributes(t){this.vertexCount=t.vertexCount,this.setAttributes(t.attributes),this.setIndexBuffer(t.indices)}setTopology(t){t!==this.topology&&(this.topology=t,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(t){this.bufferLayout=this._gpuGeometry?v(t,this._gpuGeometry.bufferLayout):t,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({renderPipeline:this.pipeline}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(t){n(t,this.parameters,2)||(this.parameters=t,this._setPipelineNeedsUpdate("parameters"))}setVertexCount(t){this.vertexCount=t}setInstanceCount(t){this.instanceCount=t}setShaderModuleProps(t){const e=this._getModuleUniforms(t),i=Object.keys(e).filter((t=>{const i=e[t];return!s(i)&&"number"!=typeof i&&"boolean"!=typeof i})),r={};for(const n of i)r[n]=e[n],delete e[n];Object.assign(this.uniforms,e),Object.assign(this.bindings,r)}updateModuleSettings(t){this.setShaderModuleProps(t)}setBindings(t){Object.assign(this.bindings,t)}setUniforms(t){this.pipeline.setUniforms(t),Object.assign(this.uniforms,t)}setIndexBuffer(t){this.vertexArray.setIndexBuffer(t)}setAttributes(t){t.indices&&o.c.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`);for(const[i,r]of Object.entries(t)){var e;const t=this.bufferLayout.find((t=>t.name===i));if(!t)continue;const n=t.attributes?null===(e=t.attributes)||void 0===e?void 0:e.map((t=>t.attribute)):[t.name];let s=!1;for(const e of n){const t=this._attributeInfos[e];t&&(this.vertexArray.setBuffer(t.location,r),s=!0)}s||o.c.warn(`Model(${this.id}): Ignoring buffer "${r.id}" for unknown attribute "${i}"`)()}}setConstantAttributes(t){for(const[e,i]of Object.entries(t)){const t=this._attributeInfos[e];t?this.vertexArray.setConstant(t.location,i):o.c.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${e}"`)()}}_setPipelineNeedsUpdate(t){this._pipelineNeedsUpdate=this._pipelineNeedsUpdate||t}_updatePipeline(){return this._pipelineNeedsUpdate&&(this.pipeline&&o.c.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),this._pipelineNeedsUpdate=!1,this.pipeline=this.device.createRenderPipeline({...this.props,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,vs:this.device.createShader({id:"{$this.id}-vertex",stage:"vertex",source:this.vs}),fs:this.fs?this.device.createShader({id:"{$this.id}-fragment",stage:"fragment",source:this.fs}):null}),this._attributeInfos=(0,u.G5)(this.pipeline.shaderLayout,this.bufferLayout)),this.pipeline}}function v(t,e){const i=[...t];for(const r of e){const t=i.findIndex((t=>t.name===r.name));t<0?i.push(r):i[t]=r}return i}g.defaultProps={...a.h.defaultProps,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],moduleSettings:{},geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},pipelineFactory:void 0,shaderAssembler:l.q.getDefaultShaderAssembler()}},7206:(t,e,i)=>{i.d(e,{q:()=>s});var r=i(27872);const n={pickingActive:!1,pickingAttribute:!1,pickingSelectedColor:null,pickingHighlightColor:new Uint8Array([0,255,255,255]),pickingColorRange:255};const s={name:"picking",vs:r.H`\
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

`,getUniforms:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;const e={};if(void 0!==t.pickingActive&&(e.picking_uActive=Boolean(t.pickingActive),e.picking_uAttribute=Boolean(t.pickingAttribute)),void 0!==t.pickingSelectedColor)if(t.pickingSelectedColor){const i=t.pickingSelectedColor.slice(0,3);e.picking_uSelectedColorValid=1,e.picking_uSelectedColor=i}else e.picking_uSelectedColorValid=0;if(t.pickingHighlightColor){const i=Array.from(t.pickingHighlightColor,(t=>t/255));Number.isFinite(i[3])||(i[3]=1),e.picking_uHighlightColor=i}return t.pickingColorRange&&(e.picking_uColorScale=1/t.pickingColorRange),e}}},39875:(t,e,i)=>{i.d(e,{Z:()=>n});const r=1e20;class n{constructor({fontSize:t=24,buffer:e=3,radius:i=8,cutoff:r=.25,fontFamily:n="sans-serif",fontWeight:s="normal",fontStyle:o="normal"}={}){this.buffer=e,this.cutoff=r,this.radius=i;const a=this.size=t+4*e,u=this._createCanvas(a),l=this.ctx=u.getContext("2d",{willReadFrequently:!0});l.font=`${o} ${s} ${t}px ${n}`,l.textBaseline="alphabetic",l.textAlign="left",l.fillStyle="black",this.gridOuter=new Float64Array(a*a),this.gridInner=new Float64Array(a*a),this.f=new Float64Array(a),this.z=new Float64Array(a+1),this.v=new Uint16Array(a)}_createCanvas(t){const e=document.createElement("canvas");return e.width=e.height=t,e}draw(t){const{width:e,actualBoundingBoxAscent:i,actualBoundingBoxDescent:n,actualBoundingBoxLeft:o,actualBoundingBoxRight:a}=this.ctx.measureText(t),u=Math.ceil(i),l=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(a-o))),c=Math.min(this.size-this.buffer,u+Math.ceil(n)),h=l+2*this.buffer,f=c+2*this.buffer,p=Math.max(h*f,0),d=new Uint8ClampedArray(p),g={data:d,width:h,height:f,glyphWidth:l,glyphHeight:c,glyphTop:u,glyphLeft:0,glyphAdvance:e};if(0===l||0===c)return g;const{ctx:v,buffer:b,gridInner:y,gridOuter:m}=this;v.clearRect(b,b,l,c),v.fillText(t,b,b+u);const _=v.getImageData(b,b,l,c);m.fill(r,0,p),y.fill(0,0,p);for(let s=0;s<c;s++)for(let t=0;t<l;t++){const e=_.data[4*(s*l+t)+3]/255;if(0===e)continue;const i=(s+b)*h+t+b;if(1===e)m[i]=0,y[i]=r;else{const t=.5-e;m[i]=t>0?t*t:0,y[i]=t<0?t*t:0}}s(m,0,0,h,f,h,this.f,this.v,this.z),s(y,b,b,l,c,h,this.f,this.v,this.z);for(let r=0;r<p;r++){const t=Math.sqrt(m[r])-Math.sqrt(y[r]);d[r]=Math.round(255-255*(t/this.radius+this.cutoff))}return g}}function s(t,e,i,r,n,s,a,u,l){for(let c=e;c<e+r;c++)o(t,i*s+c,s,n,a,u,l);for(let c=i;c<i+n;c++)o(t,c*s+e,1,r,a,u,l)}function o(t,e,i,n,s,o,a){o[0]=0,a[0]=-r,a[1]=r,s[0]=t[e];for(let u=1,l=0,c=0;u<n;u++){s[u]=t[e+u*i];const n=u*u;do{const t=o[l];c=(s[u]-s[t]+n-t*t)/(u-t)/2}while(c<=a[l]&&--l>-1);l++,o[l]=u,a[l]=c,a[l+1]=r}for(let r=0,u=0;r<n;r++){for(;a[u+1]<r;)u++;const n=o[u],l=r-n;t[e+r*i]=s[n]+l*l}}}}]);