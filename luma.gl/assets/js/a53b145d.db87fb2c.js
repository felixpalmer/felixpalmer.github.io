/*! For license information please see a53b145d.db87fb2c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[4574],{494:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(4848),t=n(8453);const i={},a="pbrMaterial",o={id:"api-reference/shadertools/shader-modules/pbr-material",title:"pbrMaterial",description:"Implements Physically Based Shading of a microfacet surface defined by a glTF material.",source:"@site/../docs/api-reference/shadertools/shader-modules/pbr-material.md",sourceDirName:"api-reference/shadertools/shader-modules",slug:"/api-reference/shadertools/shader-modules/pbr-material",permalink:"/luma.gl/docs/api-reference/shadertools/shader-modules/pbr-material",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/shadertools/shader-modules/pbr-material.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"fp64 (64-bit Floating Point)",permalink:"/luma.gl/docs/api-reference/shadertools/shader-modules/fp64"},next:{title:"phongMaterial",permalink:"/luma.gl/docs/api-reference/shadertools/shader-modules/phong-material"}},l={},d=[{value:"References",id:"references",level:2},{value:"Attribution",id:"attribution",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"pbrmaterial",children:"pbrMaterial"}),"\n",(0,s.jsx)(r.p,{children:"Implements Physically Based Shading of a microfacet surface defined by a glTF material."}),"\n",(0,s.jsxs)(r.p,{children:["Lighting is expected to be defined by the ",(0,s.jsx)(r.code,{children:"lights"})," module."]}),"\n",(0,s.jsx)(r.h2,{id:"references",children:"References"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf",children:"Real Shading in Unreal Engine 4"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"http://blog.selfshadow.com/publications/s2012-shading-course/burley/s2012_pbs_disney_brdf_notes_v3.pdf",children:"Physically Based Shading at Disney"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/KhronosGroup/glTF-WebGL-PBR/#environment-maps",children:"README.md - Environment Maps"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.cs.virginia.edu/~jdl/bib/appearance/analytic%20models/schlick94b.pdf",children:'"An Inexpensive BRDF Model for Physically based Rendering" by Christophe Schlick'})}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"attribution",children:"Attribution"}),"\n",(0,s.jsxs)(r.p,{children:["This implementation of PBR (Physically-Based Rendering) is a fork of the ",(0,s.jsx)(r.a,{href:"https://github.com/KhronosGroup/glTF-WebGL-PBR",children:"Khronos Reference Implementation"})," under the Apache 2.0 license."]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1020:(e,r,n)=>{var s=n(6540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var s,i={},d=null,c=null;for(s in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,s)&&!l.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:d,ref:c,props:i,_owner:o.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},4848:(e,r,n)=>{e.exports=n(1020)},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var s=n(6540);const t={},i=s.createContext(t);function a(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);