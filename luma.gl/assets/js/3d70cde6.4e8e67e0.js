/*! For license information please see 3d70cde6.4e8e67e0.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[5529],{4416:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(5893),t=n(1151);const a={},o="FAQ",c={id:"faq",title:"FAQ",description:"How do I draw to the screen in luma.gl?",source:"@site/../docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/luma.gl/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/faq.md",tags:[],version:"current",frontMatter:{}},d={},l=[{value:"How do I draw to the screen in luma.gl?",id:"how-do-i-draw-to-the-screen-in-lumagl",level:2},{value:"How do I clear the screen in luma.gl?",id:"how-do-i-clear-the-screen-in-lumagl",level:2}];function i(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(r.h2,{id:"how-do-i-draw-to-the-screen-in-lumagl",children:"How do I draw to the screen in luma.gl?"}),"\n",(0,s.jsxs)(r.p,{children:["Simply create a ",(0,s.jsx)(r.code,{children:"RenderPass"})," and start rendering."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"  // A renderpass without parameters uses the default framebuffer of the device's default CanvasContext \n  const renderPass = device.beginRenderPass();\n  model.draw(renderPass);\n  renderPass.end();\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"device.canvasContext.getDefaultFramebuffer()"})," returns a special framebuffer that lets you render to screen (into the swap chain). This framebuffer is used by default when a ",(0,s.jsx)(r.code,{children:"device.beginRenderPass()"})," is called without providing a ",(0,s.jsx)(r.code,{children:"framebuffer"}),", equivalent to:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"  const renderPass = device.beginRenderPass({framebuffer: device.canvasContext.getDefaultFramebuffer()});\n  ...\n"})}),"\n",(0,s.jsx)(r.h2,{id:"how-do-i-clear-the-screen-in-lumagl",children:"How do I clear the screen in luma.gl?"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Framebuffer"})," attachments are cleared by default when a RenderPass starts. More control is provided via the ",(0,s.jsx)(r.code,{children:"clearColor"})," parameter, setting this will clear the attachments to the corresponding color. The default clear color is fully transparent ",(0,s.jsx)(r.code,{children:"[0, 0, 0, 0]"}),". Clearing can also be disabled by setting ",(0,s.jsx)(r.code,{children:"loadOp='load'"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"  const renderPass = device.beginRenderPass({clearColor: [0, 0, 0, 1]});\n  model.draw(renderPass);\n  renderPass.end();\n"})}),"\n",(0,s.jsx)(r.p,{children:"Depth and stencil buffers are also cleared to default values:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"  const renderPass = device.beginRenderPass({\n    clearColor: [0, 0, 0, 1],\n    depthClearValue: 1,\n    stencilClearValue: 0\n  });\n  renderPass.end();\n  device.submit();\n"})})]})}function u(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},5251:(e,r,n)=>{var s=n(7294),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var s,a={},l=null,i=null;for(s in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)o.call(r,s)&&!d.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===a[s]&&(a[s]=r[s]);return{$$typeof:t,type:e,key:l,ref:i,props:a,_owner:c.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},5893:(e,r,n)=>{e.exports=n(5251)},1151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>o});var s=n(7294);const t={},a=s.createContext(t);function o(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);