(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4960],{37982:function(e,t){!function(e){"use strict";var t={Promise:"undefined"!=typeof window?window.Promise:void 0},r="4.21",n="next";function o(e){if(e.toLowerCase()===n)return n;var t=e&&e.match(/^(\d)\.(\d+)/);return t&&{major:parseInt(t[1],10),minor:parseInt(t[2],10)}}function i(e){return void 0===e&&(e=r),"https://js.arcgis.com/"+e+"/"}function s(e){void 0===e&&(e=r);var t=i(e),s=o(e);return s!==n&&3===s.major?t+(s.minor<=10?"js/":"")+"esri/css/esri.css":t+"esri/themes/light/main.css"}function a(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}function u(e,t){if(t){var r=document.querySelector(t);r.parentNode.insertBefore(e,r)}else document.head.appendChild(e)}function l(e){return document.querySelector('link[href*="'+e+'"]')}function c(e){return!e||o(e)?s(e):e}function d(e,t){var r=c(e),n=l(r);return n||u(n=a(r),t),n}var f={};function _(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.setAttribute("data-esri-loader","loading"),t}function p(e,t,r){var n;r&&(n=E(e,r));var o=function(){t(e),e.removeEventListener("load",o,!1),n&&e.removeEventListener("error",n,!1)};e.addEventListener("load",o,!1)}function E(e,t){var r=function(n){t(n.error||new Error("There was an error attempting to load "+e.src)),e.removeEventListener("error",r,!1)};return e.addEventListener("error",r,!1),r}function h(e){void 0===e&&(e={}),f=e}function S(){return document.querySelector("script[data-esri-loader]")}function m(){var e=window.require;return e&&e.on}function R(e){void 0===e&&(e={});var r={};[f,e].forEach((function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}));var n=r.version,o=r.url||i(n);return new t.Promise((function(e,t){var i=S();if(i){var s=i.getAttribute("src");s!==o?t(new Error("The ArcGIS API for JavaScript is already loaded ("+s+").")):m()?e(i):p(i,e,t)}else if(m())t(new Error("The ArcGIS API for JavaScript is already loaded."));else{var a=r.css;a&&d(!0===a?n:a,r.insertCssBefore),p(i=_(o),(function(){i.setAttribute("data-esri-loader","loaded"),e(i)}),t),document.body.appendChild(i)}}))}function T(e){return new t.Promise((function(t,r){var n=window.require.on("error",r);window.require(e,(function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n.remove(),t(e)}))}))}function A(e,t){if(void 0===t&&(t={}),m())return T(e);var r=S(),n=r&&r.getAttribute("src");return!t.url&&n&&(t.url=n),R(t).then((function(){return T(e)}))}e.utils=t,e.loadModules=A,e.getScript=S,e.isLoaded=m,e.loadScript=R,e.setDefaultOptions=h,e.loadCss=d,Object.defineProperty(e,"__esModule",{value:!0})}(t)},3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(r),_=o,p=d["".concat(u,".").concat(_)]||d[_]||f[_]||i;return r?n.createElement(p,s(s({ref:t},c),{},{components:r})):n.createElement(p,s({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=_;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},6089:(e,t,r)=>{"use strict";r.d(t,{N:()=>se});var n=r(86986),o=r(39470),i=r(51394),s=r(84900),a=r(99313),u=r(34707),l=r(28083),c=r(17935),d=r(85835),f=r(90152),_=r(56709),p=r(77979),E=r(60908);const h={MAGIC_NUMBER:542327876,HEADER_LENGTH:31,MAGIC_NUMBER_INDEX:0,HEADER_SIZE_INDEX:1,HEADER_FLAGS_INDEX:2,HEADER_HEIGHT_INDEX:3,HEADER_WIDTH_INDEX:4,MIPMAPCOUNT_INDEX:7,HEADER_PF_FLAGS_INDEX:20,HEADER_PF_FOURCC_INDEX:21,DDSD_MIPMAPCOUNT:131072,DDPF_FOURCC:4},S={DXT1:p.p.COMPRESSED_RGB_S3TC_DXT1_EXT,DXT3:p.p.COMPRESSED_RGBA_S3TC_DXT3_EXT,DXT5:p.p.COMPRESSED_RGBA_S3TC_DXT5_EXT,"ATC ":p.p.COMPRESSED_RGB_ATC_WEBGL,ATCA:p.p.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL,ATCI:p.p.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL},m={DXT1:T,DXT3:A,DXT5:A,"ATC ":T,ATCA:A,ATCI:A};function R(e){const t=new Int32Array(e,0,h.HEADER_LENGTH),r=t[h.HEADER_PF_FOURCC_INDEX];(0,_.h)(Boolean(t[h.HEADER_PF_FLAGS_INDEX]&h.DDPF_FOURCC),"DDS: Unsupported format, must contain a FourCC code");const n=(o=r,String.fromCharCode(255&o,o>>8&255,o>>16&255,o>>24&255));var o;const i=S[n],s=m[n];(0,_.h)(i&&s,`DDS: Unknown pixel format ${r}`);let a=1;t[h.HEADER_FLAGS_INDEX]&h.DDSD_MIPMAPCOUNT&&(a=Math.max(1,t[h.MIPMAPCOUNT_INDEX]));const u=t[h.HEADER_WIDTH_INDEX],l=t[h.HEADER_HEIGHT_INDEX],c=t[h.HEADER_SIZE_INDEX]+4,d=new Uint8Array(e,c);return(0,E.J)(d,{mipMapLevels:a,width:u,height:l,sizeFunction:s,internalFormat:i})}function T(e,t){return(e+3>>2)*(t+3>>2)*8}function A(e,t){return(e+3>>2)*(t+3>>2)*16}const C={MAGIC_NUMBER:55727696,MAGIC_NUMBER_EXTRA:1347834371,HEADER_LENGTH:13,HEADER_SIZE:52,MAGIC_NUMBER_INDEX:0,PIXEL_FORMAT_INDEX:2,COLOUR_SPACE_INDEX:4,HEIGHT_INDEX:6,WIDTH_INDEX:7,MIPMAPCOUNT_INDEX:11,METADATA_SIZE_INDEX:12},D={0:[p.p.COMPRESSED_RGB_PVRTC_2BPPV1_IMG],1:[p.p.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG],2:[p.p.COMPRESSED_RGB_PVRTC_4BPPV1_IMG],3:[p.p.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG],6:[p.p.COMPRESSED_RGB_ETC1_WEBGL],7:[p.p.COMPRESSED_RGB_S3TC_DXT1_EXT],9:[p.p.COMPRESSED_RGBA_S3TC_DXT3_EXT],11:[p.p.COMPRESSED_RGBA_S3TC_DXT5_EXT],22:[p.p.COMPRESSED_RGB8_ETC2],23:[p.p.COMPRESSED_RGBA8_ETC2_EAC],24:[p.p.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2],25:[p.p.COMPRESSED_R11_EAC],26:[p.p.COMPRESSED_RG11_EAC],27:[p.p.COMPRESSED_RGBA_ASTC_4X4_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_4X4_KHR],28:[p.p.COMPRESSED_RGBA_ASTC_5X4_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_5X4_KHR],29:[p.p.COMPRESSED_RGBA_ASTC_5X5_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_5X5_KHR],30:[p.p.COMPRESSED_RGBA_ASTC_6X5_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_6X5_KHR],31:[p.p.COMPRESSED_RGBA_ASTC_6X6_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_6X6_KHR],32:[p.p.COMPRESSED_RGBA_ASTC_8X5_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_8X5_KHR],33:[p.p.COMPRESSED_RGBA_ASTC_8X6_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_8X6_KHR],34:[p.p.COMPRESSED_RGBA_ASTC_8X8_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_8X8_KHR],35:[p.p.COMPRESSED_RGBA_ASTC_10X5_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_10X5_KHR],36:[p.p.COMPRESSED_RGBA_ASTC_10X6_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_10X6_KHR],37:[p.p.COMPRESSED_RGBA_ASTC_10X8_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_10X8_KHR],38:[p.p.COMPRESSED_RGBA_ASTC_10X10_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_10X10_KHR],39:[p.p.COMPRESSED_RGBA_ASTC_12X10_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_12X10_KHR],40:[p.p.COMPRESSED_RGBA_ASTC_12X12_KHR,p.p.COMPRESSED_SRGB8_ALPHA8_ASTC_12X12_KHR]},M={0:P,1:P,2:g,3:g,6:v,7:v,9:y,11:y,22:v,23:y,24:v,25:v,26:y,27:y,28:function(e,t){return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16},29:function(e,t){return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16},30:function(e,t){return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16},31:function(e,t){return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16},32:function(e,t){return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16},33:function(e,t){return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16},34:function(e,t){return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16},35:function(e,t){return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16},36:function(e,t){return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16},37:function(e,t){return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16},38:function(e,t){return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16},39:function(e,t){return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16},40:function(e,t){return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16}};function P(e,t){return(e=Math.max(e,16))*(t=Math.max(t,8))/4}function g(e,t){return(e=Math.max(e,8))*(t=Math.max(t,8))/2}function v(e,t){return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8}function y(e,t){return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16}function b(e){if((0,f.j)(e))return(0,f.P)(e);if(function(e){return new Uint32Array(e,0,h.HEADER_LENGTH)[h.MAGIC_NUMBER_INDEX]===h.MAGIC_NUMBER}(e))return R(e);if(function(e){const t=new Uint32Array(e,0,C.HEADER_LENGTH)[C.MAGIC_NUMBER_INDEX];return t===C.MAGIC_NUMBER||t===C.MAGIC_NUMBER_EXTRA}(e))return function(e){const t=new Uint32Array(e,0,C.HEADER_LENGTH),r=t[C.PIXEL_FORMAT_INDEX],n=t[C.COLOUR_SPACE_INDEX],o=D[r]||[],i=o.length>1&&n?o[1]:o[0],s=M[r],a=t[C.MIPMAPCOUNT_INDEX],u=t[C.WIDTH_INDEX],l=t[C.HEIGHT_INDEX],c=C.HEADER_SIZE+t[C.METADATA_SIZE_INDEX],d=new Uint8Array(e,c);return(0,E.J)(d,{mipMapLevels:a,width:u,height:l,sizeFunction:s,internalFormat:i})}(e);throw new Error("Texture container format not recognized")}var x=r(94396);const O={...{name:"Texture Containers",id:"compressed-texture",module:"textures",version:d.q,worker:!0,extensions:["ktx","ktx2","dds","pvr"],mimeTypes:["image/ktx2","image/ktx","image/vnd-ms.dds","image/x-dds","application/octet-stream"],binary:!0,options:{"compressed-texture":{libraryPath:"libs/",useBasis:!1}}},parse:async(e,t)=>{var r;if(null!=t&&null!==(r=t["compressed-texture"])&&void 0!==r&&r.useBasis){t.basis={format:{alpha:"BC3",noAlpha:"BC1"},...t.basis,containerFormat:"ktx2",module:"encoder"};return(await(0,x.Z)(e,t))[0]}return b(e)}};var I=r(22406);let G=function(e){return e.vertexCount="vertexCount",e.featureCount="featureCount",e}({});function w(e){let t;try{const r=new URL(e);t=`${r.origin}${r.pathname}`}catch(r){}return t||e}function N(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?`${e}?token=${t}`:e}var H=r(2634);function L(e){switch(e){case"UInt8":return Uint8Array;case"UInt16":return Uint16Array;case"UInt32":return Uint32Array;case"Float32":return Float32Array;case"UInt64":return Float64Array;default:throw new Error(`parse i3s tile content: unknown type of data: ${e}`)}}const X={UInt8:H.GL.UNSIGNED_BYTE,UInt16:H.GL.UNSIGNED_SHORT,Float32:H.GL.FLOAT,UInt32:H.GL.UNSIGNED_INT,UInt64:H.GL.DOUBLE};function B(e){switch(e){case"UInt8":return 1;case"UInt16":case"Int16":return 2;case"UInt32":case"Int32":case"Float32":return 4;case"UInt64":case"Int64":case"Float64":return 8;default:throw new Error(`parse i3s tile content: unknown size of data: ${e}`)}}let F=function(e){return e[e.DEFAULT=-1]="DEFAULT",e[e.LNGLAT=1]="LNGLAT",e[e.METER_OFFSETS=2]="METER_OFFSETS",e[e.LNGLAT_OFFSETS=3]="LNGLAT_OFFSETS",e[e.CARTESIAN=0]="CARTESIAN",e}({});const U=new i.P([0,0,0]);const k="i3s-attribute-type";async function j(e,t,r,d,f){const _={attributes:{},indices:null,featureIds:[],vertexCount:0,modelMatrix:new s.y,coordinateSystem:0,byteLength:0,texture:null};if(t.textureUrl){var p;const e=N(t.textureUrl,null==d||null===(p=d.i3s)||void 0===p?void 0:p.token),r=function(e){switch(e){case"ktx-etc2":case"dds":return O;case"ktx2":return I.G;default:return l.S}}(t.textureFormat),i=(null==f?void 0:f.fetch)||fetch,s=await i(e),a=await s.arrayBuffer();if(null!=d&&d.i3s.decodeTextures){if(r===l.S){const e={...t.textureLoaderOptions,image:{type:"data"}};try{const t=await(0,u.cr)(a,[],e,f);_.texture=t}catch(E){const t=await(0,n.Q)(a,r,e,f);_.texture=t}}else if(r===O||r===I.G){let e=await(0,o.z)(a,r,t.textureLoaderOptions);r===I.G&&(e=e[0]),_.texture={compressed:!0,mipmaps:!1,width:e[0].width,height:e[0].height,data:e}}}else _.texture=a}return _.material=function(e,t){let r;e?r={...e,pbrMetallicRoughness:e.pbrMetallicRoughness?{...e.pbrMetallicRoughness}:{baseColorFactor:[255,255,255,255]}}:(r={pbrMetallicRoughness:{}},t?r.pbrMetallicRoughness.baseColorTexture={texCoord:0}:r.pbrMetallicRoughness.baseColorFactor=[255,255,255,255]);r.alphaCutoff=r.alphaCutoff||.25,r.alphaMode&&(r.alphaMode=r.alphaMode.toUpperCase());r.emissiveFactor&&(r.emissiveFactor=z(r.emissiveFactor));r.pbrMetallicRoughness&&r.pbrMetallicRoughness.baseColorFactor&&(r.pbrMetallicRoughness.baseColorFactor=z(r.pbrMetallicRoughness.baseColorFactor));t&&function(e,t){const r={source:{image:t}};e.pbrMetallicRoughness&&e.pbrMetallicRoughness.baseColorTexture?e.pbrMetallicRoughness.baseColorTexture={...e.pbrMetallicRoughness.baseColorTexture,texture:r}:e.emissiveTexture?e.emissiveTexture={...e.emissiveTexture,texture:r}:e.pbrMetallicRoughness&&e.pbrMetallicRoughness.metallicRoughnessTexture?e.pbrMetallicRoughness.metallicRoughnessTexture={...e.pbrMetallicRoughness.metallicRoughnessTexture,texture:r}:e.normalTexture?e.normalTexture={...e.normalTexture,texture:r}:e.occlusionTexture&&(e.occlusionTexture={...e.occlusionTexture,texture:r})}(r,t);return r}(t.materialDefinition,_.texture),_.material&&(_.texture=null),await async function(e,t,r,o,u){var l;const d=e.byteLength;let f,_,p,E=0,h=0;if(r.isDracoGeometry){var S;const t=await(0,n.Q)(e,c.VJ,{draco:{attributeNameEntry:k}});_=t.header.vertexCount,p=null===(S=t.indices)||void 0===S?void 0:S.value;const{POSITION:r,NORMAL:o,COLOR_0:i,TEXCOORD_0:s,"feature-index":a,"uv-region":u}=t.attributes;f={position:r,normal:o,color:i,uv0:s,uvRegion:u,id:a},function(e,t){for(const r in t.loaderData.attributes){const n=t.loaderData.attributes[r];switch(n.name){case"POSITION":e.position.metadata=n.metadata;break;case"feature-index":e.id.metadata=n.metadata}}}(f,t);const l=function(e){var t,r;return null==e||null===(t=e.metadata)||void 0===t||null===(r=t["i3s-feature-ids"])||void 0===r?void 0:r.intArray}(a);l&&function(e,t){const r=e.id.value,n=new Float32Array(r.length);for(let o=0;o<r.length;o++)n[o]=t[r[o]];e.id.value=n}(f,l)}else{const{vertexAttributes:t,ordering:r,featureAttributes:n,featureAttributeOrder:i}=o.store.defaultGeometrySchema,s=function(e,t){let r=0,n=0,o=0;for(const{property:i,type:s}of t.store.defaultGeometrySchema.header){const t=L(s);switch(i){case G.vertexCount:n=new t(e,0,4)[0],r+=B(s);break;case G.featureCount:o=new t(e,4,4)[0],r+=B(s)}}return{vertexCount:n,featureCount:o,byteOffset:r}}(e,o);E=s.byteOffset,_=s.vertexCount,h=s.featureCount;const{attributes:a,byteOffset:u}=$(e,E,t,_,r),{attributes:l}=$(e,u,n,h,i);!function(e){const{id:t,faceRange:r}=e;if(!t||!r)return;const n=t.value,o=r.value,i=o[o.length-1]+1,s=new Uint32Array(3*i);let a=0,u=0;for(let l=1;l<o.length;l+=2){const e=Number(n[a]),t=u+3*(o[l]-o[l-1]+1);s.fill(e,u,t),a++,u=t}e.id.value=s}(l),f=function(e,t){return{...e,...t}}(a,l)}if(null!=u&&null!==(l=u.i3s)&&void 0!==l&&l.coordinateSystem&&u.i3s.coordinateSystem!==F.METER_OFFSETS)t.modelMatrix=function(e){var t,r;const n=e.metadata,o=(null==n||null===(t=n["i3s-scale_x"])||void 0===t?void 0:t.double)||1,i=(null==n||null===(r=n["i3s-scale_y"])||void 0===r?void 0:r.double)||1,a=new s.y;return a[0]=o,a[5]=i,a}(f.position),t.coordinateSystem=F.LNGLAT_OFFSETS;else{const e=function(e,t){const r=t.mbs,n=e.value,o=e.metadata,u=new s.y,l=new i.P(r[0],r[1],r[2]),c=new i.P;return a.H.WGS84.cartographicToCartesian(l,c),a.H.WGS84.eastNorthUpToFixedFrame(c,u),e.value=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;const n=new Float64Array(e.length),o=t["i3s-scale_x"]&&t["i3s-scale_x"].double||1,i=t["i3s-scale_y"]&&t["i3s-scale_y"].double||1;for(let s=0;s<n.length;s+=3)n[s]=e[s]*o+r.x,n[s+1]=e[s+1]*i+r.y,n[s+2]=e[s+2]+r.z;for(let s=0;s<n.length;s+=3)a.H.WGS84.cartographicToCartesian(n.subarray(s,s+3),U),n[s]=U.x,n[s+1]=U.y,n[s+2]=U.z;return n}(n,o,l),u}(f.position,r);t.modelMatrix=e.invert(),t.coordinateSystem=F.METER_OFFSETS}t.attributes={positions:f.position,normals:f.normal,colors:K(f.color),texCoords:f.uv0,uvRegions:K(f.uvRegion||f.region)},t.indices=p||null,f.id&&f.id.value&&(t.featureIds=f.id.value);for(const n in t.attributes)t.attributes[n]||delete t.attributes[n];return t.vertexCount=_,t.byteLength=d,t}(e,_,t,r,d)}function K(e){return e?(e.normalized=!0,e):e}function $(e,t,r,n,o){const i={};for(const s of o)if(r[s]){const{valueType:o,valuesPerElement:a}=r[s];if(t+n*a*B(o)<=e.byteLength){const r=e.slice(t);let u;if("UInt64"===o)u=V(r,n*a,B(o));else{u=new(L(o))(r,0,n*a)}if(i[s]={value:u,type:X[o],size:a},"color"===s)i.color.normalized=!0;t+=n*a*B(o)}else if("uv0"!==s)break}return{attributes:i,byteOffset:t}}function V(e,t,r){const n=[],o=new DataView(e);let i=0;for(let s=0;s<t;s++){const e=o.getUint32(i,!0)+2**32*o.getUint32(i+4,!0);n.push(e),i+=r}return new Uint32Array(n)}function z(e){const t=[...e];for(let r=0;r<e.length;r++)t[r]=e[r]/255;return t}const W={name:"I3S Content (Indexed Scene Layers)",id:"i3s-content",module:"i3s",worker:!0,version:"undefined"!=typeof __VERSION__?__VERSION__:"beta",mimeTypes:["application/octet-stream"],parse:async function(e,t,r){const{tile:n,_tileOptions:o,tileset:i,_tilesetOptions:s}=(null==t?void 0:t.i3s)||{},a=o||n,u=s||i;if(!a||!u)return null;return await j(e,a,u,t,r)},extensions:["bin"],options:{"i3s-content":{}}};var q=r(5044),J=r(61439),Z=r(63663);const Q={name:"I3S Node Page",id:"i3s-node-page",module:"i3s",version:"undefined"!=typeof __VERSION__?__VERSION__:"latest",mimeTypes:["application/json"],parse:async function(e,t){return JSON.parse((new TextDecoder).decode(e))},extensions:["json"],options:{i3s:{}}};class Y{constructor(e){var t,r;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0;this.tileset=void 0,this.nodePages=[],this.pendingNodePages=[],this.nodesPerPage=void 0,this.options=void 0,this.lodSelectionMetricType=void 0,this.textureDefinitionsSelectedFormats=[],this.nodesInNodePages=void 0,this.url=void 0,this.textureLoaderOptions={},this.tileset={...e},this.url=n,this.nodesPerPage=(null===(t=e.nodePages)||void 0===t?void 0:t.nodesPerPage)||64,this.lodSelectionMetricType=null===(r=e.nodePages)||void 0===r?void 0:r.lodSelectionMetricType,this.options=o,this.nodesInNodePages=0,this.initSelectedFormatsForTextureDefinitions(e)}async getNodeById(e){const t=Math.floor(e/this.nodesPerPage);if(!this.nodePages[t]&&!this.pendingNodePages[t]){var r;const e=N(`${this.url}/nodepages/${t}`,null===(r=this.options.i3s)||void 0===r?void 0:r.token);this.pendingNodePages[t]={status:"Pending",promise:(0,o.z)(e,Q,this.options)},this.nodePages[t]=await this.pendingNodePages[t].promise,this.nodesInNodePages+=this.nodePages[t].nodes.length,this.pendingNodePages[t].status="Done"}"Pending"===this.pendingNodePages[t].status&&(this.nodePages[t]=await this.pendingNodePages[t].promise);const n=e%this.nodesPerPage;return this.nodePages[t].nodes[n]}async formTileFromNodePages(e){const t=await this.getNodeById(e),r=[],n=[];for(const f of t.children||[])n.push(this.getNodeById(f));const o=await Promise.all(n);for(const f of o)r.push({id:f.index.toString(),obb:f.obb});let i,s,a,u="jpg",l=[],c=!1;if(t&&t.mesh){const{url:e,isDracoGeometry:r}=t.mesh.geometry&&this.getContentUrl(t.mesh.geometry)||{isDracoGeometry:!1};i=e,c=r;const{textureData:n,materialDefinition:o}=this.getInformationFromMaterial(t.mesh.material);a=o,u=n.format||u,n.name&&(s=`${this.url}/nodes/${t.mesh.material.resource}/textures/${n.name}`),this.tileset.attributeStorageInfo&&(l=function(e,t,r){const n=[],{attributeStorageInfo:o=[]}=e;for(let i=0;i<o.length;i++){const e=o[i].key;n.push(`${t}/nodes/${r}/attributes/${e}/0`)}return n}(this.tileset,this.url,t.mesh.attribute.resource))}const d=this.getLodSelection(t);return ee({id:e.toString(),lodSelection:d,obb:t.obb,contentUrl:i,textureUrl:s,attributeUrls:l,materialDefinition:a,textureFormat:u,textureLoaderOptions:this.textureLoaderOptions,children:r,isDracoGeometry:c})}getContentUrl(e){let t=null;const r=this.tileset.geometryDefinitions[e.definition];let n=-1;if(this.options.i3s&&this.options.i3s.useDracoGeometry&&(n=r.geometryBuffers.findIndex((e=>e.compressedAttributes&&"draco"===e.compressedAttributes.encoding))),-1===n&&(n=r.geometryBuffers.findIndex((e=>!e.compressedAttributes))),-1!==n){const o=Boolean(r.geometryBuffers[n].compressedAttributes);t={url:`${this.url}/nodes/${e.resource}/geometries/${n}`,isDracoGeometry:o}}return t}getLodSelection(e){const t=[];return"maxScreenThresholdSQ"===this.lodSelectionMetricType&&t.push({metricType:"maxScreenThreshold",maxError:Math.sqrt(e.lodThreshold/(.25*Math.PI))}),t.push({metricType:this.lodSelectionMetricType,maxError:e.lodThreshold}),t}getInformationFromMaterial(e){const t={textureData:{name:null}};if(e){var r;const i=null===(r=this.tileset.materialDefinitions)||void 0===r?void 0:r[e.definition];if(i){var n,o;t.materialDefinition=i;const e=null==i||null===(n=i.pbrMetallicRoughness)||void 0===n||null===(o=n.baseColorTexture)||void 0===o?void 0:o.textureSetDefinitionId;"number"==typeof e&&(t.textureData=this.textureDefinitionsSelectedFormats[e]||t.textureData)}}return t}initSelectedFormatsForTextureDefinitions(e){this.textureDefinitionsSelectedFormats=[];const t=this.getSupportedTextureFormats(),r=e.textureSetDefinitions||[];for(const n of r){const e=n&&n.formats||[];let r=null;for(const n of t){const t=e.find((e=>e.format===n));if(t){r=t;break}}r&&"ktx2"===r.format&&(this.textureLoaderOptions.basis={format:(0,x.h)(),containerFormat:"ktx2",module:"encoder"}),this.textureDefinitionsSelectedFormats.push(r)}}getSupportedTextureFormats(){const e=[];if(!this.options.i3s||this.options.i3s.useCompressedTextures){const t=(0,Z.U)();t.has("etc2")&&e.push("ktx-etc2"),t.has("dxt")&&e.push("dds"),e.push("ktx2")}return e.push("jpg"),e.push("png"),e}}function ee(e){var t,r;const n={};let o=[0,0,0,1];if(e.mbs)o=e.mbs,n.sphere=[...a.H.WGS84.cartographicToCartesian(e.mbs.slice(0,3)),e.mbs[3]];else if(e.obb){n.box=[...a.H.WGS84.cartographicToCartesian(e.obb.center),...e.obb.halfSize,...e.obb.quaternion];const t=(new q.F7).fromCenterHalfSizeQuaternion(n.box.slice(0,3),e.obb.halfSize,e.obb.quaternion).getBoundingSphere();n.sphere=[...t.center,t.radius],o=[...e.obb.center,t.radius]}const i=null===(t=e.lodSelection)||void 0===t?void 0:t[0].metricType,s=null===(r=e.lodSelection)||void 0===r?void 0:r[0].maxError,u=J.R7.MESH,l=J.F$.REPLACE;return{...e,mbs:o,boundingVolume:n,lodMetricType:i,lodMetricValue:s,type:u,refine:l}}const te="undefined"!=typeof __VERSION__?__VERSION__:"latest",re=/layers\/[0-9]+$/,ne=/nodes\/([0-9-]+|root)$/,oe="504b0304",ie="PointCloud",se={name:"I3S (Indexed Scene Layers)",id:"i3s",module:"i3s",version:te,mimeTypes:["application/octet-stream"],parse:async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;const i=r.url;t.i3s=t.i3s||{};if(function(e){if(e instanceof ArrayBuffer)return[...new Uint8Array(e,0,4)].map((e=>e.toString(16).padStart(2,"0"))).join("");return null}(e)===oe)throw new Error("Files with .slpk extention currently are not supported by I3SLoader");const s=w(i);let a,u;a="auto"===t.i3s.isTileset?re.test(s):t.i3s.isTileset;u="auto"===t.isTileHeader?ne.test(s):t.i3s.isTileHeader;e=a?await async function(e,t,r){const n=JSON.parse((new TextDecoder).decode(e));if((null==n?void 0:n.layerType)===ie)throw new Error("Point Cloud layers currently are not supported by I3SLoader");const i=await async function(e,t,r){const n=w(r.url||"");let i,s;if(e.nodePages)i=new Y(e,n,t),s=await i.formTileFromNodePages(0);else{const e=N(`${n}/nodes/root`,t.i3s.token);s=await(0,o.z)(e,se,{...t,i3s:{...t.i3s,loadContent:!1,isTileHeader:!0,isTileset:!1}})}return{...e,loader:se,url:n,basePath:n,type:J.i3.I3S,nodePagesTile:i,root:s,lodMetricType:s.lodMetricType,lodMetricValue:s.lodMetricValue}}(n,t,r);return i}(e,t,r):u?await async function(e,t){return e=JSON.parse((new TextDecoder).decode(e)),function(e,t){const r=t.url||"";let n,o,i;e.geometryData&&(n=`${r}/${e.geometryData[0].href}`),e.textureData&&(o=`${r}/${e.textureData[0].href}`),e.attributeData&&(i=function(e,t){const{attributeData:r=[]}=t,n=[];for(let o=0;o<r.length;o++){const t=r[o].href.replace("./","");n.push(`${e}/${t}`)}return n}(r,e));const s=e.children||[];return ee({...e,children:s,url:r,contentUrl:n,textureUrl:o,textureFormat:"jpg",attributeUrls:i,isDracoGeometry:!1})}(e,t)}(e,r):await async function(e,t){return await(0,n.Q)(e,W,t)}(e,t);return e},extensions:["bin"],options:{i3s:{token:null,isTileset:"auto",isTileHeader:"auto",tile:null,tileset:null,_tileOptions:null,_tilesetOptions:null,useDracoGeometry:!0,useCompressedTextures:!0,decodeTextures:!0,coordinateSystem:F.METER_OFFSETS}}}}}]);