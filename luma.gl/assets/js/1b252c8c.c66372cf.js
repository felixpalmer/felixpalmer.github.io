/*! For license information please see 1b252c8c.c66372cf.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[7359],{4602:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=s(4848),l=s(8453);const i={},o="What's New",d={id:"whats-new",title:"What's New",description:"This page contains upgrade guides for older luma.gl releases (up through v8.5). For upgrading to luma.gl v9, refer to the  Legacy What's New page.",source:"@site/../docs/whats-new.md",sourceDirName:".",slug:"/whats-new",permalink:"/luma.gl/docs/whats-new",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/whats-new.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/luma.gl/docs/"},next:{title:"Upgrade Guide",permalink:"/luma.gl/docs/upgrade-guide"}},t={},c=[{value:"Version 9.0 (In Development)",id:"version-90-in-development",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"whats-new",children:"What's New"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This page contains upgrade guides for older luma.gl releases (up through v8.5). For upgrading to luma.gl v9, refer to the  ",(0,r.jsx)(n.a,{href:"/docs/legacy/legacy-upgrade-guide",children:"Legacy What's New"})," page."]})}),"\n",(0,r.jsx)(n.h2,{id:"version-90-in-development",children:"Version 9.0 (In Development)"}),"\n",(0,r.jsx)(n.p,{children:"Target Date: Jan 2023"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["luma.gl v9 contains significant API changes and requires existing luma.gl v8 applications to be ",(0,r.jsx)(n.a,{href:"/docs/upgrade-guide",children:"upgraded"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"luma.gl v9 API is a major release that adds WebGPU support to the luma.gl API."}),"\n",(0,r.jsx)(n.p,{children:"The key v9 feature is the new WebGL-independent core API with plug-in WebGPU and WebGL backends"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Portable GPU API"}),": ",(0,r.jsx)(n.code,{children:"@luma.gl/core"})," provides a portable GPU resource management API."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"WebGPU bindings"}),": ",(0,r.jsx)(n.code,{children:"@luma.gl/webgpu"})," provides a new WebGPU backend for the core API."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"WebGL bindings"}),": ",(0,r.jsx)(n.code,{children:"@luma.gl/webgl"})," provides a WebGL backend for the core API."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Non-API changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TypeScript"}),": All APIs now rigorously typed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ES modules"})," - Modern ES module and CommonJS entry points for maximum interoperability."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Website"})," - New Docusaurus website with more embedded live examples and improved documentation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Debugging"})," - SpectorJS integration. Shader debugger UI."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Legacy Functionality"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"WebGL1"})," WebGL 1 support is dropped."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"GLSL 1.00"})," is  no longer supported. GLSL shaders need to be ported to ",(0,r.jsx)(n.strong,{children:"GLSL 3.00"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"headless-gl"})," Node.js integration is no longer supported"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"New features"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@luma.gl/core"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Exports the new ",(0,r.jsx)(n.code,{children:"Device"})," class is the entry point to the luma.gl API, used to create other GPU resources."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@luma.gl/engine"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["NEW: Scenegraph classes: ",(0,r.jsx)(n.code,{children:"ModelNode"}),", ",(0,r.jsx)(n.code,{children:"GroupNode"}),", ",(0,r.jsx)(n.code,{children:"ScenegraphNode"}),". (Moved from ",(0,r.jsx)(n.code,{children:"@luma.gl/experimental"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["NEW: ",(0,r.jsx)(n.code,{children:"ShaderInputs"})," - A class that manages uniform buffers for a ",(0,r.jsx)(n.code,{children:"Model"})]}),"\n",(0,r.jsxs)(n.li,{children:["NEW: ",(0,r.jsx)(n.code,{children:"AnimationLoopTemplate"})," - a small helper class that can help write cleaner demos and applications in TypeScript."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@luma.gl/gltf"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New module that exports the glTF classes (moved from ",(0,r.jsx)(n.code,{children:"@luma.gl/experimental"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@luma.gl/shadertools"})})," (lightly updated API)"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"All shader modules now use uniform buffers."}),"\n",(0,r.jsxs)(n.li,{children:["NEW: ",(0,r.jsx)(n.code,{children:"ShaderAssember"})," class that provides a clean entry point to the shader module system."]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"CompilerMessage"})," type and ",(0,r.jsx)(n.code,{children:"formatCompilerLog"})," function for portable shader log handling."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Module changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@luma.gl/core"})})," (new API)"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The new portable luma.gl GPU API. Applications written against ",(0,r.jsx)(n.code,{children:"@luma.gl/core"})," v9 are portable and can run on both WebGPU and WebGL2 devices."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@luma.gl/engine"})})," (lightly updated API)"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Exports classic luma.gl engine classes such as ",(0,r.jsx)(n.code,{children:"Model"}),", ",(0,r.jsx)(n.code,{children:"AnimationLoop"})," etc, which now work portably on both WebGPU and WebGL."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@luma.gl/gltf"})}),' ("renamed" module)']}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New module that exports the glTF classes (moved from ",(0,r.jsx)(n.code,{children:"@luma.gl/experimental"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@luma.gl/shadertools"})})," (lightly updated API)"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Exports the shader assembler API and the shader module library."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@luma.gl/webgl"})})," (rewritten, no longer exports an API)"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'This is now an optional "GPU backend module", that provides a WebGL 2 implementation of the luma.gl core API.'}),"\n",(0,r.jsxs)(n.li,{children:["Importing this module enables the application to create ",(0,r.jsx)(n.code,{children:"Device"}),"s of ",(0,r.jsx)(n.code,{children:"type; 'webgl'"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Note: Requires a browser / environment that supports the WebGL API."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@luma.gl/webgpu"})})," (new module, does not export an API)"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'A new optional "GPU backend module", that provides a WebGPU implementation of the luma.gl core API.'}),"\n",(0,r.jsxs)(n.li,{children:["Importing this module enables the application to create ",(0,r.jsx)(n.code,{children:"Device"}),"s of ",(0,r.jsx)(n.code,{children:"type: 'webgpu'"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Note: Requires a browser / environment that supports the WebGPU API."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1020:(e,n,s)=>{var r=s(6540),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,i={},c=null,a=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,r)&&!t.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:l,type:e,key:c,ref:a,props:i,_owner:d.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},4848:(e,n,s)=>{e.exports=s(1020)},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var r=s(6540);const l={},i=r.createContext(l);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);