/*! For license information please see 1b252c8c.23bc9190.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[7359],{4602:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var s=r(4848),l=r(8453);const d={},i="What's New",t={id:"whats-new",title:"What's New",description:"This page contains news for recent luma.gl releases. For older releases (through v8.5) refer to the  Legacy What's New page.",source:"@site/../docs/whats-new.md",sourceDirName:".",slug:"/whats-new",permalink:"/luma.gl/docs/whats-new",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/whats-new.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/luma.gl/docs/"},next:{title:"Upgrade Guide",permalink:"/luma.gl/docs/upgrade-guide"}},c={},o=[{value:"Version 9.1 (In Development)",id:"version-91-in-development",level:2},{value:"Version 9.0",id:"version-90",level:2},{value:"WebGPU Support",id:"webgpu-support",level:3},{value:"New module structure",id:"new-module-structure",level:3},{value:"General improvements",id:"general-improvements",level:3},{value:"New features",id:"new-features",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"whats-new",children:"What's New"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["This page contains news for recent luma.gl releases. For older releases (through v8.5) refer to the  ",(0,s.jsx)(n.a,{href:"/docs/legacy/legacy-upgrade-guide",children:"Legacy What's New"})," page."]})}),"\n",(0,s.jsx)(n.h2,{id:"version-91-in-development",children:"Version 9.1 (In Development)"}),"\n",(0,s.jsx)(n.p,{children:"Target Date: Q2 2024"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Production quality (non-experimental) WebGPU backend."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"version-90",children:"Version 9.0"}),"\n",(0,s.jsx)(n.p,{children:"Target Date: Feb 2024"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["luma.gl v9 contains significant API changes and requires existing luma.gl v8 applications to be ",(0,s.jsx)(n.a,{href:"/docs/upgrade-guide",children:"upgraded"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"luma.gl v9 is a major release that adds experimental WebGPU support to the luma.gl API."}),"\n",(0,s.jsx)(n.h3,{id:"webgpu-support",children:"WebGPU Support"}),"\n",(0,s.jsx)(n.p,{children:"The biggest change is that the core API is now portable (no longer WebGL-specific), and plug-in backends are provided for WebGL 2 and WebGPU:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Portable GPU API"}),": ",(0,s.jsx)(n.code,{children:"@luma.gl/core"})," now provides a portable GPU resource management API."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WebGL bindings"}),": ",(0,s.jsx)(n.code,{children:"@luma.gl/webgl"})," now provides a WebGL backend for the core API."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WebGPU bindings"}),": ",(0,s.jsx)(n.code,{children:"@luma.gl/webgpu"})," provides a new experimental WebGPU backend for the core API."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To accelerate WebGPU development, luma.gl v9 drops support for legacy functionality:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WebGL1"})," WebGL 1 support is dropped."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GLSL 1.00"})," is  no longer supported. GLSL shaders need to be ported to ",(0,s.jsx)(n.strong,{children:"GLSL 3.00"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"headless-gl"})," The Node.js WebGL 1 integration is no longer supported"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"new-module-structure",children:"New module structure"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Module"}),(0,s.jsx)(n.th,{children:"Impact"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@luma.gl/core"})})}),(0,s.jsx)(n.td,{children:"New API"}),(0,s.jsx)(n.td,{children:"The new portable luma.gl GPU API. Applications can run on both WebGPU and WebGL2 devices."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@luma.gl/engine"})})}),(0,s.jsx)(n.td,{children:"Light API updates"}),(0,s.jsxs)(n.td,{children:["Classic luma.gl engine classes ()",(0,s.jsx)(n.code,{children:"Model"}),", ",(0,s.jsx)(n.code,{children:"AnimationLoop"})," etc), which work portably on both WebGPU and WebGL 2."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@luma.gl/gltf"})})}),(0,s.jsx)(n.td,{children:"Renamed module"}),(0,s.jsxs)(n.td,{children:["New module that exports the glTF classes (moved from ",(0,s.jsx)(n.code,{children:"@luma.gl/experimental"}),")."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@luma.gl/shadertools"})})}),(0,s.jsx)(n.td,{children:"Light API updates"}),(0,s.jsx)(n.td,{children:"The shader assembler API and the shader module library."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@luma.gl/webgl"})})}),(0,s.jsx)(n.td,{children:"WebGL backend"}),(0,s.jsxs)(n.td,{children:['Optional "GPU backend module". Importing this module enables the application to create WebGL 2 ',(0,s.jsx)(n.code,{children:"Device"}),"s."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@luma.gl/webgpu"})})}),(0,s.jsx)(n.td,{children:"WebGPU backend"}),(0,s.jsxs)(n.td,{children:['Experimental "GPU backend module". Importing this module enables the application to create WebGPU ',(0,s.jsx)(n.code,{children:"Device"}),"s."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"general-improvements",children:"General improvements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TypeScript"}),": All APIs now rigorously typed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ES modules"})," - Modern ES module and CommonJS entry points for maximum interoperability."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Website"})," - New Docusaurus website with more embedded live examples and improved documentation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Debugging"})," - SpectorJS integration. Shader debugger UI."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"new-features",children:"New features"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@luma.gl/core"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Exports the new ",(0,s.jsx)(n.code,{children:"Device"})," class is the entry point to the luma.gl API, used to create other GPU resources."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@luma.gl/engine"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["NEW: Scenegraph classes: ",(0,s.jsx)(n.code,{children:"ModelNode"}),", ",(0,s.jsx)(n.code,{children:"GroupNode"}),", ",(0,s.jsx)(n.code,{children:"ScenegraphNode"}),". (Moved from ",(0,s.jsx)(n.code,{children:"@luma.gl/experimental"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["NEW: ",(0,s.jsx)(n.code,{children:"ShaderInputs"})," - Class that manages uniform buffers for a ",(0,s.jsx)(n.code,{children:"Model"})]}),"\n",(0,s.jsxs)(n.li,{children:["NEW: ",(0,s.jsx)(n.code,{children:"ShaderFactory"})," - Creates and caches reusable ",(0,s.jsx)(n.code,{children:"Shader"})," resources"]}),"\n",(0,s.jsxs)(n.li,{children:["NEW: ",(0,s.jsx)(n.code,{children:"AnimationLoopTemplate"})," - Small helper class that can help write cleaner demos and applications in TypeScript."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@luma.gl/gltf"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["New module that exports the glTF classes (moved from ",(0,s.jsx)(n.code,{children:"@luma.gl/experimental"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@luma.gl/shadertools"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All shader modules now use uniform buffers."}),"\n",(0,s.jsxs)(n.li,{children:["NEW: ",(0,s.jsx)(n.code,{children:"ShaderAssembler"})," class that provides a clean entry point to the shader module system."]}),"\n",(0,s.jsxs)(n.li,{children:["New ",(0,s.jsx)(n.code,{children:"CompilerMessage"})," type and ",(0,s.jsx)(n.code,{children:"formatCompilerLog"})," function for portable shader log handling."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"@luma.gl/webgl"})})}),"\n",(0,s.jsxs)(n.p,{children:["WebGL is not dead yet! Browsers (Chrome in particular) are still adding extensions to WebGL 2, and luma.gl\nis adding support for many of the new features through the ",(0,s.jsx)(n.a,{href:"/docs/api-reference/core/device-features",children:(0,s.jsx)(n.code,{children:"DeviceFeatures"})})," API."]}),"\n",(0,s.jsxs)(n.p,{children:["New ",(0,s.jsx)(n.code,{children:"Device.features"})," that improve WebGL application performance:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"compilation-status-async-webgl"}),": Asynchronous shader compilation and linking is used automatically when available and speeds up applications that create many ",(0,s.jsx)(n.code,{children:"RenderPipelines"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["New ",(0,s.jsx)(n.code,{children:"Device.features"})," that expose new WebGL GPU parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"depth-clip-control"}),": ",(0,s.jsx)(n.code,{children:"parameters.unclippedDepth"})," - depth clipping can now be disabled if the  feature is available."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"provoking-vertex-webgl"}),": ",(0,s.jsx)(n.code,{children:"parameters.provokingVertex"})," - controls which primitive vertex is used for flat shading."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"polygon-mode-webgl"}),": ",(0,s.jsx)(n.code,{children:"parameters.polygonMode"})," - enables wire frame rendering of polygons. Check the  feature."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"polygon-mode-webgl"}),": ",(0,s.jsx)(n.code,{children:"parameters.polygonOffsetLine"})," - enables depth bias (polygon offset) for lines."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shader-clip-cull-distance-webgl"}),": ",(0,s.jsx)(n.code,{children:"parameters.clipCullDistance0-7"})," - enables ",(0,s.jsx)(n.code,{children:"gl_ClipDistance[] / gl_CullDistance[]"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["New ",(0,s.jsx)(n.code,{children:"Device.features"})," that enable new GLSL syntax"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shader-noperspective-interpolation-webgl"}),": GLSL vertex outputs and fragment inputs may be declared with a ",(0,s.jsx)(n.code,{children:"noperspective"})," interpolation qualifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"shader-conservative-depth-webgl"}),": GLSL ",(0,s.jsx)(n.code,{children:"gl_FragDepth"})," qualifiers ",(0,s.jsx)(n.code,{children:"depth_any"})," ",(0,s.jsx)(n.code,{children:"depth_greater"})," ",(0,s.jsx)(n.code,{children:"depth_less"})," ",(0,s.jsx)(n.code,{children:"depth_unchanged"})," can enable early depth test optimizations."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["New ",(0,s.jsx)(n.code,{children:"Device.features"})," that enable additional WebGL color format support:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rgb9e5ufloat-renderable-webgl"}),": ",(0,s.jsx)(n.code,{children:"rgb9e5ufloat"})," are renderable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"snorm8-renderable-webgl"}),": ",(0,s.jsx)(n.code,{children:"r,rg,rgba8snorm"})," are renderable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"norm16-renderable-webgl"}),": ",(0,s.jsx)(n.code,{children:"r,rg,rgba16norm"})," are renderable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"snorm16-renderable-webgl"}),": ",(0,s.jsx)(n.code,{children:"r,rg,rgba16snorm"})," are renderable."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1020:(e,n,r)=>{var s=r(6540),l=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,t=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var s,d={},o=null,a=null;for(s in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,s)&&!c.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:l,type:e,key:o,ref:a,props:d,_owner:t.current}}n.Fragment=d,n.jsx=o,n.jsxs=o},4848:(e,n,r)=>{e.exports=r(1020)},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>t});var s=r(6540);const l={},d=s.createContext(l);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);