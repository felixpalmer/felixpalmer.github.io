/*! For license information please see ee085593.7e975d77.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[4339],{8599:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>n,toc:()=>a});var c=s(4848),d=s(8453);const t={},i="GPU Resources",n={id:"api-guide/gpu/gpu-resources",title:"GPU Resources",description:"A key role of the Device class is to let the application create GPU resources.",source:"@site/../docs/api-guide/gpu/gpu-resources.md",sourceDirName:"api-guide/gpu",slug:"/api-guide/gpu/gpu-resources",permalink:"/luma.gl/docs/api-guide/gpu/gpu-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-guide/gpu/gpu-resources.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"GPU Initialization",permalink:"/luma.gl/docs/api-guide/gpu/gpu-initialization"},next:{title:"GPU Memory",permalink:"/luma.gl/docs/api-guide/gpu/gpu-memory"}},o={},a=[{value:"Types of GPU Resources",id:"types-of-gpu-resources",level:2},{value:"Creating GPU Resources",id:"creating-gpu-resources",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.h1,{id:"gpu-resources",children:"GPU Resources"}),"\n",(0,c.jsxs)(r.p,{children:["A key role of the ",(0,c.jsx)(r.code,{children:"Device"})," class is to let the application create GPU resources.\nThe main GPU resources that luma.gl applications will typically be creating directly are\n",(0,c.jsx)(r.code,{children:"Buffer"})," and ",(0,c.jsx)(r.code,{children:"Texture"})," objects."]}),"\n",(0,c.jsxs)(r.p,{children:["However there is a number of other GPU resource objects. These are usually created\nautomatically behind the scenes, e.g. by the ",(0,c.jsx)(r.code,{children:"Model"})," and ",(0,c.jsx)(r.code,{children:"Transform"})," classes, but can\nbe created directly if needed."]}),"\n",(0,c.jsx)(r.h2,{id:"types-of-gpu-resources",children:"Types of GPU Resources"}),"\n",(0,c.jsx)(r.p,{children:"GPU resources correspond to data on the GPU and/or a state object in the GPU driver."}),"\n",(0,c.jsxs)(r.ul,{children:["\n",(0,c.jsxs)(r.li,{children:["Resources that represent actual memory uploaded to the GPU are ",(0,c.jsx)(r.code,{children:"Buffer"})," and ",(0,c.jsx)(r.code,{children:"Texture"}),"."]}),"\n",(0,c.jsxs)(r.li,{children:["Resources that hold executable GPU code, such as ",(0,c.jsx)(r.code,{children:"Shader"}),", ",(0,c.jsx)(r.code,{children:"Renderpipeline"})," and ",(0,c.jsx)(r.code,{children:"ComputePipeline"}),"."]}),"\n",(0,c.jsx)(r.li,{children:"Other GPU resources tend to hold validated settings or state (usually these are GPU driver objects rather)"}),"\n"]}),"\n",(0,c.jsx)(r.h2,{id:"creating-gpu-resources",children:"Creating GPU Resources"}),"\n",(0,c.jsxs)(r.p,{children:["The ",(0,c.jsx)(r.a,{href:"/docs/api-reference/core/device",children:(0,c.jsx)(r.code,{children:"Device"})})," class provides methods for creating GPU resources"]}),"\n",(0,c.jsx)(r.p,{children:"luma.gl provides a consistent API"}),"\n",(0,c.jsxs)(r.table,{children:[(0,c.jsx)(r.thead,{children:(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.th,{children:"Resource creation method"}),(0,c.jsx)(r.th,{children:"Description"})]})}),(0,c.jsxs)(r.tbody,{children:[(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:[(0,c.jsx)(r.code,{children:"device.createBuffer(props: BufferProps)"}),(0,c.jsx)("br",{}),(0,c.jsx)(r.code,{children:"device.createBuffer(props: ArrayBuffer)"}),(0,c.jsx)("br",{}),(0,c.jsx)(r.code,{children:"device.createBuffer(props:  ArrayBufferView)"})]}),(0,c.jsxs)(r.td,{children:["Create a ",(0,c.jsx)(r.a,{href:"/docs/api-reference/core/resources/buffer",children:(0,c.jsx)(r.code,{children:"Buffer"})}),"."]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsxs)(r.td,{children:[(0,c.jsx)(r.code,{children:"device.createTexture(props: TextureProps)"}),(0,c.jsx)("br",{})," ",(0,c.jsx)(r.code,{children:"device.createTexture(Promise<TextureData>)"})]}),(0,c.jsxs)(r.td,{children:["Create a ",(0,c.jsx)(r.a,{href:"/docs/api-reference/core/resources/texture",children:(0,c.jsx)(r.code,{children:"Texture"})}),"."]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"device.createSampler(props: SamplerProps)"})}),(0,c.jsxs)(r.td,{children:["Create a ",(0,c.jsx)(r.a,{href:"/docs/api-reference/core/resources/sampler",children:(0,c.jsx)(r.code,{children:"Sampler"})}),"."]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"device.createFramebuffer(props: FramebufferProps)"})}),(0,c.jsxs)(r.td,{children:["Create a ",(0,c.jsx)(r.a,{href:"/docs/api-reference/core/resources/framebuffer",children:(0,c.jsx)(r.code,{children:"Framebuffer"})}),"."]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"device.createShader(props: ShaderProps)"})}),(0,c.jsxs)(r.td,{children:["Create a ",(0,c.jsx)(r.a,{href:"/docs/api-reference/core/resources/shader",children:(0,c.jsx)(r.code,{children:"Shader"})}),"."]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"device.createRenderPipeline(props: RenderPipelineProps)"})}),(0,c.jsxs)(r.td,{children:["Create a ",(0,c.jsx)(r.a,{href:"/docs/api-reference/core/resources/render-pipeline",children:(0,c.jsx)(r.code,{children:"RenderPipeline"})})," (aka program)"]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"device.createComputePipeline(props: ComputePipelineProps)"})}),(0,c.jsxs)(r.td,{children:["Create a ",(0,c.jsx)(r.a,{href:"/docs/api-reference/core/resources/compute-pipeline",children:(0,c.jsx)(r.code,{children:"ComputePipeline"})})," (aka program)"]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"beginRenderPass(props: RenderPassProps)"})}),(0,c.jsxs)(r.td,{children:["Create a ",(0,c.jsx)(r.a,{href:"/docs/api-reference/core/resources/render-pass",children:(0,c.jsx)(r.code,{children:"RenderPass"})}),"."]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"beginComputePass(props?: ComputePassProps)"})}),(0,c.jsxs)(r.td,{children:["Create a ",(0,c.jsx)(r.a,{href:"/docs/api-reference/core/resources/compute-pass",children:(0,c.jsx)(r.code,{children:"ComputePass"})})," which can be used to bind data and run compute operations using compute pipelines."]})]}),(0,c.jsxs)(r.tr,{children:[(0,c.jsx)(r.td,{children:(0,c.jsx)(r.code,{children:"getDefaultRenderPass()"})}),(0,c.jsxs)(r.td,{children:["A default ",(0,c.jsx)(r.code,{children:"RenderPass"})," is provided for applications that don't need to create multiple or specially configured render passes."]})]})]})]})]})}function u(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},1020:(e,r,s)=>{var c=s(6540),d=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,n=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,s){var c,t={},a=null,l=null;for(c in void 0!==s&&(a=""+s),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,c)&&!o.hasOwnProperty(c)&&(t[c]=r[c]);if(e&&e.defaultProps)for(c in r=e.defaultProps)void 0===t[c]&&(t[c]=r[c]);return{$$typeof:d,type:e,key:a,ref:l,props:t,_owner:n.current}}r.Fragment=t,r.jsx=a,r.jsxs=a},4848:(e,r,s)=>{e.exports=s(1020)},8453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>n});var c=s(6540);const d={},t=c.createContext(d);function i(e){const r=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),c.createElement(t.Provider,{value:r},e.children)}}}]);