/*! For license information please see 7561e671.3f45681b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[9193],{6984:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(5893),t=n(1151);const o={},i="Shader Parsing",a={id:"api-reference/shadertools/shader-info",title:"Shader Parsing",description:"It is sometimes useful to be able to inspect shader source code",source:"@site/../docs/api-reference/shadertools/shader-info.md",sourceDirName:"api-reference/shadertools",slug:"/api-reference/shadertools/shader-info",permalink:"/luma.gl/docs/api-reference/shadertools/shader-info",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/shadertools/shader-info.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"ShaderAssembler",permalink:"/luma.gl/docs/api-reference/shadertools/shader-assembler"},next:{title:"Overview",permalink:"/luma.gl/docs/api-reference/test-utils/"}},c={},l=[{value:"Functions",id:"functions",level:2},{value:"getShaderInfo",id:"getshaderinfo",level:3}];function d(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"shader-parsing",children:"Shader Parsing"}),"\n",(0,s.jsx)(r.p,{children:"It is sometimes useful to be able to inspect shader source code"}),"\n",(0,s.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(r.h3,{id:"getshaderinfo",children:"getShaderInfo"}),"\n",(0,s.jsx)(r.p,{children:"Returns information extracted from shader source code"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"function getShaderInfo(shaderSource: string): {\n  name: string;\n  language: 'glsl' | 'wgsl';\n  version: number;\n}\n"})}),"\n",(0,s.jsx)(r.p,{children:"Returns:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.code,{children:"name"})}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"language"}),": ",(0,s.jsx)(r.code,{children:"'glsl'"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"version"}),": GLSL version e.g. 130 or 300"]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5251:(e,r,n)=>{var s=n(7294),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var s,o={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,s)&&!c.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:t,type:e,key:l,ref:d,props:o,_owner:a.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},5893:(e,r,n)=>{e.exports=n(5251)},1151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>i});var s=n(7294);const t={},o=s.createContext(t);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);