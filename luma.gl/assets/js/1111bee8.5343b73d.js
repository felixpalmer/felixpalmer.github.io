/*! For license information please see 1111bee8.5343b73d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[4107],{9917:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var d=s(4848),n=s(8453);const c={},t="RenderPass",i={id:"api-reference/core/resources/render-pass",title:"RenderPass",description:"Usage",source:"@site/../docs/api-reference/core/resources/render-pass.md",sourceDirName:"api-reference/core/resources",slug:"/api-reference/core/resources/render-pass",permalink:"/luma.gl/docs/api-reference/core/resources/render-pass",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/core/resources/render-pass.md",tags:[],version:"current",frontMatter:{}},l={},a=[{value:"Usage",id:"usage",level:2},{value:"Clearing the screen",id:"clearing-the-screen",level:2},{value:"Types",id:"types",level:2},{value:"<code>RenderPassProps</code>",id:"renderpassprops",level:3},{value:"Members",id:"members",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>constructor()</code>",id:"constructor",level:3},{value:"<code>endPass(): void</code>",id:"endpass-void",level:3},{value:"<code>pushDebugGroup(groupLabel: string): void</code>",id:"pushdebuggroupgrouplabel-string-void",level:3},{value:"<code>popDebugGroup(): void</code>",id:"popdebuggroup-void",level:3},{value:"<code>insertDebugMarker(markerLabel: string): void</code>",id:"insertdebugmarkermarkerlabel-string-void",level:3}];function o(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h1,{id:"renderpass",children:"RenderPass"}),"\n",(0,d.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,d.jsxs)(r.p,{children:["To draw to the screen in luma.gl, simply create a ",(0,d.jsx)(r.code,{children:"RenderPass"})," by calling\n",(0,d.jsx)(r.code,{children:"device.beginRenderPass()"})," and start rendering. When done rendering, call\n",(0,d.jsx)(r.code,{children:"renderPass.end()"})]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-typescript",children:"  // A renderpass without parameters uses the default framebuffer of the device's default CanvasContext \n  const renderPass = device.beginRenderPass();\n  model.draw();\n  renderPass.end();\n  device.submit();\n"})}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"device.canvasContext.getDefaultFramebuffer()"})," returns a special framebuffer that lets you render to screen (into the swap chain). This framebuffer is used by default when a ",(0,d.jsx)(r.code,{children:"device.beginRenderPass()"})," is called without providing a ",(0,d.jsx)(r.code,{children:"framebuffer"}),", equivalent to:"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-typescript",children:"  const renderPass = device.beginRenderPass({framebuffer: device.canvasContext.getDefaultFramebuffer()});\n  ...\n"})}),"\n",(0,d.jsx)(r.h2,{id:"clearing-the-screen",children:"Clearing the screen"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"Framebuffer"})," attachments are cleared by default when a RenderPass starts. More control is provided via the ",(0,d.jsx)(r.code,{children:"clearColor"})," parameter, setting this will clear the attachments to the corresponding color. The default clear color is fully transparent ",(0,d.jsx)(r.code,{children:"[0, 0, 0, 0]"}),". Clearing can also be disabled by setting ",(0,d.jsx)(r.code,{children:"loadOp='load'"}),"."]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-typescript",children:"  const renderPass = device.beginRenderPass({clearColor: [0, 0, 0, 1]});\n  model.draw();\n  renderPass.end();\n  device.submit();\n"})}),"\n",(0,d.jsx)(r.p,{children:"Depth and stencil buffers are also cleared to default values:"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-typescript",children:"  const renderPass = device.beginRenderPass({\n    clearColor: [0, 0, 0, 1],\n    depthClearValue: 1,\n    stencilClearValue: 0\n  });\n  renderPass.end();\n  device.submit();\n"})}),"\n",(0,d.jsx)(r.h2,{id:"types",children:"Types"}),"\n",(0,d.jsx)(r.h3,{id:"renderpassprops",children:(0,d.jsx)(r.code,{children:"RenderPassProps"})}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Property"}),(0,d.jsx)(r.th,{children:"Type"}),(0,d.jsx)(r.th,{children:"Default"}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"framebuffer?"})}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"Framebuffer"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"Provides render target textures and depth/stencil texture"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"parameters?"})}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"Parameters"})}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"GPU pipeline parameters"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"clearColor?"})}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.code,{children:"number[]"}),", ",(0,d.jsx)(r.code,{children:"'load'"})]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"[0, 0, 0, 0]"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"clearDepth?"})}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.code,{children:"number"}),", ",(0,d.jsx)(r.code,{children:"'load'"})]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"1"})}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"clearStencil?"})}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.code,{children:"number"}),", ",(0,d.jsx)(r.code,{children:"'load'"})]}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"0"})}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h2,{id:"members",children:"Members"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"device"}),": ",(0,d.jsx)(r.code,{children:"Device"})," - holds a reference to the ",(0,d.jsx)(r.code,{children:"Device"})," that created this ",(0,d.jsx)(r.code,{children:"RenderPass"}),"."]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"handle"}),": ",(0,d.jsx)(r.code,{children:"unknown"})," - holds the underlying WebGL or WebGPU shader object"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"props"}),": ",(0,d.jsx)(r.code,{children:"RenderPassProps"})," - holds a copy of the ",(0,d.jsx)(r.code,{children:"RenderPassProps"})," used to create this ",(0,d.jsx)(r.code,{children:"RenderPass"}),"."]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(r.h3,{id:"constructor",children:(0,d.jsx)(r.code,{children:"constructor()"})}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.code,{children:"RenderPass"})," is an abstract class and cannot be instantiated directly. Create with ",(0,d.jsx)(r.code,{children:"device.beginRenderPass(...)"}),"."]}),"\n",(0,d.jsx)(r.h3,{id:"endpass-void",children:(0,d.jsx)(r.code,{children:"endPass(): void"})}),"\n",(0,d.jsx)(r.p,{children:"Must be called after all draw calls have been completed to guarantee rendering. Frees up any GPU resources associated with this render pass."}),"\n",(0,d.jsx)(r.h3,{id:"pushdebuggroupgrouplabel-string-void",children:(0,d.jsx)(r.code,{children:"pushDebugGroup(groupLabel: string): void"})}),"\n",(0,d.jsx)(r.p,{children:"Adds a debug group (implementation dependent)."}),"\n",(0,d.jsx)(r.h3,{id:"popdebuggroup-void",children:(0,d.jsx)(r.code,{children:"popDebugGroup(): void"})}),"\n",(0,d.jsx)(r.p,{children:"Removes a debug group (implementation dependent)."}),"\n",(0,d.jsx)(r.h3,{id:"insertdebugmarkermarkerlabel-string-void",children:(0,d.jsx)(r.code,{children:"insertDebugMarker(markerLabel: string): void"})}),"\n",(0,d.jsx)(r.p,{children:"Adds a debug marker (implementation dependent)."})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},1020:(e,r,s)=>{var d=s(6540),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,i=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,s){var d,c={},a=null,o=null;for(d in void 0!==s&&(a=""+s),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(o=r.ref),r)t.call(r,d)&&!l.hasOwnProperty(d)&&(c[d]=r[d]);if(e&&e.defaultProps)for(d in r=e.defaultProps)void 0===c[d]&&(c[d]=r[d]);return{$$typeof:n,type:e,key:a,ref:o,props:c,_owner:i.current}}r.Fragment=c,r.jsx=a,r.jsxs=a},4848:(e,r,s)=>{e.exports=s(1020)},8453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>i});var d=s(6540);const n={},c=d.createContext(n);function t(e){const r=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),d.createElement(c.Provider,{value:r},e.children)}}}]);