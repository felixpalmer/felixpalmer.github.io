/*! For license information please see 27fb424e.7931ed6a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[9763],{6849:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var n=t(5893),c=t(1151);const s={},l="@luma.gl/webgl",a={id:"api-reference/webgl/README",title:"@luma.gl/webgl",description:"WebGL Device Adapter",source:"@site/../docs/api-reference/webgl/README.md",sourceDirName:"api-reference/webgl",slug:"/api-reference/webgl/",permalink:"/luma.gl/docs/api-reference/webgl/",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/webgl/README.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"SnapshotTestRunner",permalink:"/luma.gl/docs/api-reference/test-utils/snapshot-test-runner"},next:{title:"Overview",permalink:"/luma.gl/docs/api-reference/webgpu/"}},i={},o=[{value:"WebGL Device Adapter",id:"webgl-device-adapter",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"lumaglwebgl",children:"@luma.gl/webgl"}),"\n",(0,n.jsx)(r.h2,{id:"webgl-device-adapter",children:"WebGL Device Adapter"}),"\n",(0,n.jsxs)(r.p,{children:['This module contains the WebGL adapter for the "abstract" luma.gl API (',(0,n.jsx)(r.code,{children:"@luma.gl/core"}),")."]}),"\n",(0,n.jsxs)(r.p,{children:["Simply importing ",(0,n.jsx)(r.code,{children:"@luma.gl/webgl"})," installs the adapter and enables WebGL devices to\nbe created using ",(0,n.jsx)(r.code,{children:"luma.createDevice(...)"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import {luma} from '@luma.gl/core';\nimport '@luma.gl/webgl'; // Installs the WebGLDevice adapter\n\nconst device = await luma.createDevice({type: 'webgl', canvas: ...});\n\n// Resources can now be created\nconst buffer = device.createBuffer(...);\n"})}),"\n",(0,n.jsxs)(r.p,{children:["To use a luma.gl WebGL ",(0,n.jsx)(r.code,{children:"Device"})," with raw WebGL calls, the application needs to access\nthe ",(0,n.jsx)(r.code,{children:"WebGLRenderingContext"}),". The context is available on the ",(0,n.jsx)(r.code,{children:"WebGLDevice"})," subclass:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"// @ts-expect-error\nconst gl = device.gl;\n"})}),"\n",(0,n.jsxs)(r.p,{children:["With a bit more work, typescript users can retrieve the ",(0,n.jsx)(r.code,{children:"WebGLRenderingContext"}),"\nwithout ignoring type errors:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import {cast} from '@luma.gl/core';\nimport {WebGLDevice} from '@luma.gl/webgl'; // Installs the WebGLDevice adapter\n\nconst webglDevice = cast<WebGPUDevice>(device);\nconst gl = webglDevice.gl;\n"})})]})}function p(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5251:(e,r,t)=>{var n=t(7294),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var n,s={},o=null,d=null;for(n in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)l.call(r,n)&&!i.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:c,type:e,key:o,ref:d,props:s,_owner:a.current}}r.Fragment=s,r.jsx=o,r.jsxs=o},5893:(e,r,t)=>{e.exports=t(5251)},1151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>l});var n=t(7294);const c={},s=n.createContext(c);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);