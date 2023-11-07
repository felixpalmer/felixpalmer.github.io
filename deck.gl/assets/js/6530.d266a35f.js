"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6530,8552,2601,7142,1559,8446],{3905:(t,e,i)=>{i.d(e,{Zo:()=>u,kt:()=>d});var r=i(67294);function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e){if(null==t)return{};var i,r,s=function(t,e){if(null==t)return{};var i,r,s={},n=Object.keys(t);for(r=0;r<n.length;r++)i=n[r],e.indexOf(i)>=0||(s[i]=t[i]);return s}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)i=n[r],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(s[i]=t[i])}return s}var c=r.createContext({}),l=function(t){var e=r.useContext(c),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},h="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var i=t.components,s=t.mdxType,n=t.originalType,c=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),h=l(i),f=s,d=h["".concat(c,".").concat(f)]||h[f]||p[f]||n;return i?r.createElement(d,o(o({ref:e},u),{},{components:i})):r.createElement(d,o({ref:e},u))}));function d(t,e){var i=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var n=i.length,o=new Array(n);o[0]=f;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a[h]="string"==typeof t?t:s,o[1]=a;for(var l=2;l<n;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},66871:(t,e,i)=>{i.d(e,{Z:()=>h,Q:()=>u});var r=i(67614),s=i(51212),n=i(48348),o=i(46196),a=i(33085);var c=i(42957);function l(t,e,i,s){var n,l=(0,r.ly)(t,e,i);switch((s=(0,o.Z)(null==s?",f":s)).type){case"s":var u=Math.max(Math.abs(t),Math.abs(e));return null!=s.precision||isNaN(n=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,a.Z)(e)/3)))-(0,a.Z)(Math.abs(t)))}(l,u))||(s.precision=n),(0,c.jH)(s,u);case"":case"e":case"g":case"p":case"r":null!=s.precision||isNaN(n=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,(0,a.Z)(e)-(0,a.Z)(t))+1}(l,Math.max(Math.abs(t),Math.abs(e))))||(s.precision=n-("e"===s.type));break;case"f":case"%":null!=s.precision||isNaN(n=function(t){return Math.max(0,-(0,a.Z)(Math.abs(t)))}(l))||(s.precision=n-2*("%"===s.type))}return(0,c.WU)(s)}function u(t){var e=t.domain;return t.ticks=function(t){var i=e();return(0,r.ZP)(i[0],i[i.length-1],null==t?10:t)},t.tickFormat=function(t,i){var r=e();return l(r[0],r[r.length-1],null==t?10:t,i)},t.nice=function(i){null==i&&(i=10);var s,n,o=e(),a=0,c=o.length-1,l=o[a],u=o[c],h=10;for(u<l&&(n=l,l=u,u=n,n=a,a=c,c=n);h-- >0;){if((n=(0,r.G9)(l,u,i))===s)return o[a]=l,o[c]=u,e(o);if(n>0)l=Math.floor(l/n)*n,u=Math.ceil(u/n)*n;else{if(!(n<0))break;l=Math.ceil(l*n)/n,u=Math.floor(u*n)/n}s=n}return t},t}function h(){var t=(0,s.ZP)();return t.copy=function(){return(0,s.JG)(t,h())},n.o.apply(t,arguments),u(t)}},20745:(t,e,i)=>{var r=i(73935);e.s=r.createRoot,r.hydrateRoot},41708:(t,e,i)=>{i.d(e,{Z:()=>n});var r=i(41199),s=i(53563);class n{constructor(t){this.id=void 0,this.topology=void 0,this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.userData={};const{attributes:e={},indices:i=null,vertexCount:n=null}=t;this.id=t.id||(0,r.hQ)("geometry"),this.topology=t.topology,i&&(this.indices=ArrayBuffer.isView(i)?{value:i,size:1}:i),this.attributes={};for(const[r,o]of Object.entries(e)){const t=ArrayBuffer.isView(o)?{value:o}:o;(0,s.h)(ArrayBuffer.isView(t.value),`${this._print(r)}: must be typed array or object with value as typed array`),"POSITION"!==r&&"positions"!==r||t.size||(t.size=3),"indices"===r?((0,s.h)(!this.indices),this.indices=t):this.attributes[r]=t}this.indices&&void 0!==this.indices.isIndexed&&(this.indices=Object.assign({},this.indices),delete this.indices.isIndexed),this.vertexCount=n||this._calculateVertexCount(this.attributes,this.indices)}getVertexCount(){return this.vertexCount}getAttributes(){return this.indices?{indices:this.indices,...this.attributes}:this.attributes}_print(t){return`Geometry ${this.id} attribute ${t}`}_setAttributes(t,e){return this}_calculateVertexCount(t,e){if(e)return e.value.length;let i=1/0;for(const r of Object.values(t)){const{value:t,size:e,constant:s}=r;!s&&t&&e>=1&&(i=Math.min(i,t.length/e))}return(0,s.h)(Number.isFinite(i)),i}}},70138:(t,e,i)=>{i.d(e,{H:()=>d});var r=i(41199);function s(t,e,i){if(t===e)return!0;if(!i||!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!s(t[r],e[r],i-1))return!1;return!0}if(Array.isArray(e))return!1;if("object"==typeof t&&"object"==typeof e){const r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(const o of r){if(!e.hasOwnProperty(o))return!1;if(!s(t[o],e[o],i-1))return!1}return!0}return!1}var n=i(47407),o=i(34210),a=i(55866),c=i(65352),l=i(53563),u=i(63847);class h{constructor(t){this.id=void 0,this.userData={},this.topology=void 0,this.bufferLayout=[],this.vertexCount=void 0,this.indices=void 0,this.attributes=void 0,this.id=t.id||(0,r.hQ)("geometry"),this.topology=t.topology,this.indices=t.indices||null,this.attributes=t.attributes,this.vertexCount=t.vertexCount,this.bufferLayout=t.bufferLayout||[],this.indices&&(0,l.h)(this.indices.usage===u.l.INDEX)}destroy(){var t;this.indices.destroy(),this.attributes.positions.destroy(),this.attributes.normals.destroy(),this.attributes.texCoords.destroy(),null===(t=this.attributes.colors)||void 0===t||t.destroy()}getVertexCount(){return this.vertexCount}getAttributes(){return this.attributes}getIndexes(){return this.indices}_calculateVertexCount(t){return t.byteLength/12}}function p(t,e){if(e instanceof h)return e;const i=function(t,e){if(!e.indices)return;const i=e.indices.value;return t.createBuffer({usage:u.l.INDEX,data:i})}(t,e),{attributes:r,bufferLayout:s}=function(t,e){const i=[],r={};for(const[n,o]of Object.entries(e.attributes)){let e=n;switch(n){case"POSITION":e="positions";break;case"NORMAL":e="normals";break;case"TEXCOORD_0":e="texCoords"}r[e]=t.createBuffer({data:o.value,id:`${n}-buffer`}),i.push({name:e,format:`float32x${o.size}`})}const s=e._calculateVertexCount(e.attributes,e.indices);return{attributes:r,bufferLayout:i,vertexCount:s}}(t,e);return new h({topology:e.topology||"triangle-list",bufferLayout:s,vertexCount:e.vertexCount,indices:i,attributes:r})}var f=i(38908);class d{constructor(t,e){this.device=void 0,this.id=void 0,this.vs=void 0,this.fs=void 0,this.pipelineFactory=void 0,this.userData={},this.parameters=void 0,this.topology=void 0,this.bufferLayout=void 0,this.vertexCount=void 0,this.instanceCount=0,this.indexBuffer=null,this.bufferAttributes={},this.constantAttributes={},this.bindings={},this.uniforms={},this.pipeline=void 0,this.vertexArray=void 0,this._pipelineNeedsUpdate="newly created",this._attributeInfos={},this._gpuGeometry=null,this._getModuleUniforms=void 0,this.props=void 0,this.props={...d.defaultProps,...e},e=this.props,this.id=e.id||(0,r.hQ)("model"),this.device=t,Object.assign(this.userData,e.userData);const i={type:t.info.type,shaderLanguage:t.info.shadingLanguages[0],gpu:t.info.gpu,features:t.features},{vs:s,fs:n,getUniforms:o}=this.props.shaderAssembler.assembleShaders(i,this.props);if(this.vs=s,this.fs=n,this._getModuleUniforms=o,this.vertexCount=this.props.vertexCount,this.instanceCount=this.props.instanceCount,this.topology=this.props.topology,this.bufferLayout=this.props.bufferLayout,this.parameters=this.props.parameters,e.geometry&&(this._gpuGeometry=this.setGeometry(e.geometry)),this.pipelineFactory=e.pipelineFactory||f.g.getDefaultPipelineFactory(this.device),this.pipeline=this._updatePipeline(),this.vertexArray=t.createVertexArray({renderPipeline:this.pipeline}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry),e.vertexCount&&this.setVertexCount(e.vertexCount),e.instanceCount&&this.setInstanceCount(e.instanceCount),e.indices)throw new Error("Model.props.indices removed. Use props.indexBuffer");e.indexBuffer&&this.setIndexBuffer(e.indexBuffer),e.attributes&&this.setAttributes(e.attributes),e.constantAttributes&&this.setConstantAttributes(e.constantAttributes),e.bindings&&this.setBindings(e.bindings),e.uniforms&&this.setUniforms(e.uniforms),e.moduleSettings&&this.updateModuleSettings(e.moduleSettings),this.setUniforms(this._getModuleUniforms()),Object.seal(this)}destroy(){this.pipelineFactory.release(this.pipeline)}draw(t){this.pipeline=this._updatePipeline(),this.pipeline.setBindings(this.bindings),this.pipeline.setUniforms(this.uniforms),this.pipeline.draw({renderPass:t,vertexArray:this.vertexArray,vertexCount:this.vertexCount,instanceCount:this.instanceCount})}setGeometry(t){const e=t&&p(this.device,t);return this.setTopology(e.topology||"triangle-list"),this.bufferLayout=g(this.bufferLayout,e.bufferLayout),this.vertexArray&&this._setGeometryAttributes(e),e}_setGeometryAttributes(t){this.vertexCount=t.vertexCount,this.setAttributes(t.attributes),this.setIndexBuffer(t.indices)}setTopology(t){t!==this.topology&&(this.topology=t,this._setPipelineNeedsUpdate("topology"))}setBufferLayout(t){this.bufferLayout=this._gpuGeometry?g(t,this._gpuGeometry.bufferLayout):t,this._setPipelineNeedsUpdate("bufferLayout"),this.pipeline=this._updatePipeline(),this.vertexArray=this.device.createVertexArray({renderPipeline:this.pipeline}),this._gpuGeometry&&this._setGeometryAttributes(this._gpuGeometry)}setParameters(t){s(t,this.parameters,2)||(this.parameters=t,this._setPipelineNeedsUpdate("parameters"))}setVertexCount(t){this.vertexCount=t}setInstanceCount(t){this.instanceCount=t}setShaderModuleProps(t){const e=this._getModuleUniforms(t),i=Object.keys(e).filter((t=>{const i=e[t];return!Array.isArray(i)&&"number"!=typeof i&&"boolean"!=typeof i})),r={};for(const s of i)r[s]=e[s],delete e[s];Object.assign(this.uniforms,e),Object.assign(this.bindings,r)}updateModuleSettings(t){this.setShaderModuleProps(t)}setBindings(t){Object.assign(this.bindings,t)}setUniforms(t){this.pipeline.setUniforms(t),Object.assign(this.uniforms,t)}setIndexBuffer(t){this.vertexArray.setIndexBuffer(t)}setAttributes(t){t.indices&&n.c.warn(`Model:${this.id} setAttributes() - indexBuffer should be set using setIndexBuffer()`);for(const[i,r]of Object.entries(t)){var e;const t=this.bufferLayout.find((t=>t.name===i));if(!t)continue;const s=t.attributes?null===(e=t.attributes)||void 0===e?void 0:e.map((t=>t.attribute)):[t.name];let o=!1;for(const e of s){const t=this._attributeInfos[e];t&&(this.vertexArray.setBuffer(t.location,r),o=!0)}o||n.c.warn(`Model(${this.id}): Ignoring buffer "${r.id}" for unknown attribute "${i}"`)()}}setConstantAttributes(t){for(const[e,i]of Object.entries(t)){const t=this._attributeInfos[e];t?this.vertexArray.setConstant(t.location,i):n.c.warn(`Model "${this.id}: Ignoring constant supplied for unknown attribute "${e}"`)()}}_setPipelineNeedsUpdate(t){this._pipelineNeedsUpdate=this._pipelineNeedsUpdate||t}_updatePipeline(){return this._pipelineNeedsUpdate&&(this.pipeline&&n.c.log(1,`Model ${this.id}: Recreating pipeline because "${this._pipelineNeedsUpdate}".`)(),this._pipelineNeedsUpdate=!1,this.pipeline=this.device.createRenderPipeline({...this.props,bufferLayout:this.bufferLayout,topology:this.topology,parameters:this.parameters,vs:this.device.createShader({id:"{$this.id}-vertex",stage:"vertex",source:this.vs}),fs:this.fs?this.device.createShader({id:"{$this.id}-fragment",stage:"fragment",source:this.fs}):null}),this._attributeInfos=(0,a.G5)(this.pipeline.shaderLayout,this.bufferLayout)),this.pipeline}}function g(t,e){const i=[...t];for(const r of e){const t=i.findIndex((t=>t.name===r.name));t<0?i.push(r):i[t]=r}return i}d.defaultProps={...o.h.defaultProps,vs:null,fs:null,id:"unnamed",handle:void 0,userData:{},defines:{},modules:[],moduleSettings:{},geometry:null,indexBuffer:null,attributes:{},constantAttributes:{},pipelineFactory:void 0,shaderAssembler:c.q.getDefaultShaderAssembler()}},7206:(t,e,i)=>{i.d(e,{q:()=>n});var r=i(27872);const s={pickingActive:!1,pickingAttribute:!1,pickingSelectedColor:null,pickingHighlightColor:new Uint8Array([0,255,255,255]),pickingColorRange:255};const n={name:"picking",vs:r.H`\
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

`,getUniforms:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;const e={};if(void 0!==t.pickingActive&&(e.picking_uActive=Boolean(t.pickingActive),e.picking_uAttribute=Boolean(t.pickingAttribute)),void 0!==t.pickingSelectedColor)if(t.pickingSelectedColor){const i=t.pickingSelectedColor.slice(0,3);e.picking_uSelectedColorValid=1,e.picking_uSelectedColor=i}else e.picking_uSelectedColorValid=0;if(t.pickingHighlightColor){const i=Array.from(t.pickingHighlightColor,(t=>t/255));Number.isFinite(i[3])||(i[3]=1),e.picking_uHighlightColor=i}return t.pickingColorRange&&(e.picking_uColorScale=1/t.pickingColorRange),e}}},39875:(t,e,i)=>{i.d(e,{Z:()=>s});const r=1e20;class s{constructor({fontSize:t=24,buffer:e=3,radius:i=8,cutoff:r=.25,fontFamily:s="sans-serif",fontWeight:n="normal",fontStyle:o="normal"}={}){this.buffer=e,this.cutoff=r,this.radius=i;const a=this.size=t+4*e,c=this._createCanvas(a),l=this.ctx=c.getContext("2d",{willReadFrequently:!0});l.font=`${o} ${n} ${t}px ${s}`,l.textBaseline="alphabetic",l.textAlign="left",l.fillStyle="black",this.gridOuter=new Float64Array(a*a),this.gridInner=new Float64Array(a*a),this.f=new Float64Array(a),this.z=new Float64Array(a+1),this.v=new Uint16Array(a)}_createCanvas(t){const e=document.createElement("canvas");return e.width=e.height=t,e}draw(t){const{width:e,actualBoundingBoxAscent:i,actualBoundingBoxDescent:s,actualBoundingBoxLeft:o,actualBoundingBoxRight:a}=this.ctx.measureText(t),c=Math.ceil(i),l=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(a-o))),u=Math.min(this.size-this.buffer,c+Math.ceil(s)),h=l+2*this.buffer,p=u+2*this.buffer,f=Math.max(h*p,0),d=new Uint8ClampedArray(f),g={data:d,width:h,height:p,glyphWidth:l,glyphHeight:u,glyphTop:c,glyphLeft:0,glyphAdvance:e};if(0===l||0===u)return g;const{ctx:v,buffer:b,gridInner:y,gridOuter:m}=this;v.clearRect(b,b,l,u),v.fillText(t,b,b+c);const _=v.getImageData(b,b,l,u);m.fill(r,0,f),y.fill(0,0,f);for(let n=0;n<u;n++)for(let t=0;t<l;t++){const e=_.data[4*(n*l+t)+3]/255;if(0===e)continue;const i=(n+b)*h+t+b;if(1===e)m[i]=0,y[i]=r;else{const t=.5-e;m[i]=t>0?t*t:0,y[i]=t<0?t*t:0}}n(m,0,0,h,p,h,this.f,this.v,this.z),n(y,b,b,l,u,h,this.f,this.v,this.z);for(let r=0;r<f;r++){const t=Math.sqrt(m[r])-Math.sqrt(y[r]);d[r]=Math.round(255-255*(t/this.radius+this.cutoff))}return g}}function n(t,e,i,r,s,n,a,c,l){for(let u=e;u<e+r;u++)o(t,i*n+u,n,s,a,c,l);for(let u=i;u<i+s;u++)o(t,u*n+e,1,r,a,c,l)}function o(t,e,i,s,n,o,a){o[0]=0,a[0]=-r,a[1]=r,n[0]=t[e];for(let c=1,l=0,u=0;c<s;c++){n[c]=t[e+c*i];const s=c*c;do{const t=o[l];u=(n[c]-n[t]+s-t*t)/(c-t)/2}while(u<=a[l]&&--l>-1);l++,o[l]=c,a[l]=u,a[l+1]=r}for(let r=0,c=0;r<s;r++){for(;a[c+1]<r;)c++;const s=o[c],l=r-s;t[e+r*i]=n[s]+l*l}}}}]);