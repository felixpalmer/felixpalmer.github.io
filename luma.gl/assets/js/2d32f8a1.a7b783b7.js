/*! For license information please see 2d32f8a1.a7b783b7.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[490],{715:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var n=o(4848),c=o(8453);const d={},s="CommandEncoder",t={id:"api-reference/core/resources/command-encoder",title:"CommandEncoder",description:"A command encoder offering GPU memory copying operations.",source:"@site/../docs/api-reference/core/resources/command-encoder.md",sourceDirName:"api-reference/core/resources",slug:"/api-reference/core/resources/command-encoder",permalink:"/luma.gl/docs/api-reference/core/resources/command-encoder",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/core/resources/command-encoder.md",tags:[],version:"current",frontMatter:{}},i={},l=[{value:"Types",id:"types",level:2},{value:"<code>CommandEncoderProps</code>",id:"commandencoderprops",level:3},{value:"Members",id:"members",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>constructor(props: CommandEncoderProps)</code>",id:"constructorprops-commandencoderprops",level:3}];function a(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"commandencoder",children:"CommandEncoder"}),"\n",(0,n.jsx)(r.p,{children:"A command encoder offering GPU memory copying operations."}),"\n",(0,n.jsx)(r.h2,{id:"types",children:"Types"}),"\n",(0,n.jsx)(r.h3,{id:"commandencoderprops",children:(0,n.jsx)(r.code,{children:"CommandEncoderProps"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"N/A"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"members",children:"Members"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"device"}),": ",(0,n.jsx)(r.code,{children:"Device"})," - holds a reference to the ",(0,n.jsx)(r.code,{children:"Device"})," that created this ",(0,n.jsx)(r.code,{children:"CommandEncoder"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"handle"}),": ",(0,n.jsx)(r.code,{children:"unknown"})," - holds the underlying WebGL or WebGPU shader object"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"props"}),": ",(0,n.jsx)(r.code,{children:"CommandEncoderProps"})," - holds a copy of the ",(0,n.jsx)(r.code,{children:"CommandEncoderProps"})," used to create this ",(0,n.jsx)(r.code,{children:"CommandEncoder"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.h3,{id:"constructorprops-commandencoderprops",children:(0,n.jsx)(r.code,{children:"constructor(props: CommandEncoderProps)"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"CommandEncoder"})," is an abstract class and cannot be instantiated directly. Create with ",(0,n.jsx)(r.code,{children:"device.beginCommandEncoder(...)"}),"."]})]})}function m(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1020:(e,r,o)=>{var n=o(6540),c=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,t=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,o){var n,d={},l=null,a=null;for(n in void 0!==o&&(l=""+o),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)s.call(r,n)&&!i.hasOwnProperty(n)&&(d[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===d[n]&&(d[n]=r[n]);return{$$typeof:c,type:e,key:l,ref:a,props:d,_owner:t.current}}r.Fragment=d,r.jsx=l,r.jsxs=l},4848:(e,r,o)=>{e.exports=o(1020)},8453:(e,r,o)=>{o.d(r,{R:()=>s,x:()=>t});var n=o(6540);const c={},d=n.createContext(c);function s(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);