"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[579],{44885:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>p,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"api-reference/core/project64","title":"project64 (Shader Module)","description":"The project64 shader module is an extension of the project shader module that does projection using 64 bit floating point. It provides an increase in precision, at the cost of performance. Note that starting with deck.gl v6.1, the improved default 32 bit projection mode provides sufficient precision for most use cases.","source":"@site/../docs/api-reference/core/project64.md","sourceDirName":"api-reference/core","slug":"/api-reference/core/project64","permalink":"/deck.gl/docs/api-reference/core/project64","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/project64.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"project32 (Shader Module)","permalink":"/deck.gl/docs/api-reference/core/project32"},"next":{"title":"Viewport","permalink":"/deck.gl/docs/api-reference/core/viewport"}}');var t=i(74848),n=i(28453);const r={},s="project64 (Shader Module)",p={},d=[{value:"getUniforms",id:"getuniforms",level:2},{value:"GLSL Uniforms",id:"glsl-uniforms",level:2},{value:"GLSL Functions",id:"glsl-functions",level:2},{value:"project_position_to_clipspace",id:"project_position_to_clipspace",level:3},{value:"project_position_fp64",id:"project_position_fp64",level:3},{value:"project_common_position_to_clipspace_fp64",id:"project_common_position_to_clipspace_fp64",level:3},{value:"Remarks",id:"remarks",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"project64-shader-module",children:"project64 (Shader Module)"})}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"project64"})," shader module is an extension of the ",(0,t.jsx)(o.a,{href:"/deck.gl/docs/api-reference/core/project",children:"project"})," shader module that does projection using 64 bit floating point. It provides an increase in precision, at the cost of performance. Note that starting with deck.gl v6.1, the improved default 32 bit projection mode provides sufficient precision for most use cases."]}),"\n",(0,t.jsx)(o.h2,{id:"getuniforms",children:"getUniforms"}),"\n",(0,t.jsxs)(o.p,{children:["The uniforms needed by ",(0,t.jsx)(o.code,{children:"project64"})," are extracted from the ",(0,t.jsx)(o.code,{children:"project"})," module uniforms ",(0,t.jsx)(o.code,{children:"project.viewProjectionMatrix"})," and ",(0,t.jsx)(o.code,{children:"project.scale"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"glsl-uniforms",children:"GLSL Uniforms"}),"\n",(0,t.jsx)(o.p,{children:"Uniforms are considered private to each shader module. They may change in between patch releases. Always use documented functions instead of accessing module uniforms directly."}),"\n",(0,t.jsxs)(o.p,{children:["The uniforms of the ",(0,t.jsx)(o.code,{children:"project64"})," shader module are prefixed with ",(0,t.jsx)(o.code,{children:"project64_"})," in their names."]}),"\n",(0,t.jsx)(o.h2,{id:"glsl-functions",children:"GLSL Functions"}),"\n",(0,t.jsx)(o.h3,{id:"project_position_to_clipspace",children:"project_position_to_clipspace"}),"\n",(0,t.jsxs)(o.p,{children:["64 bit implementation of the ",(0,t.jsx)(o.code,{children:"project_position_to_clipspace"})," interface."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-glsl",children:"vec4 project_position_to_clipspace(vec3 position, vec3 position64Low, vec3 offset)\nvec4 project_position_to_clipspace(vec3 position, vec3 position64Low, vec3 offset, out vec4 commonPosition)\n"})}),"\n",(0,t.jsx)(o.p,{children:"Parameters:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"position"})," - vertex position in the layer's coordinate system."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"position64Low"})," - low part of the vertex position, calculated as ",(0,t.jsx)(o.code,{children:"aLow = a - Math.fround(a)"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"offset"})," - offset from the coordinate, in common space"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"commonPosition"})," - projected position in the common space"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Returns:\nProjected position in the clipspace."}),"\n",(0,t.jsx)(o.h3,{id:"project_position_fp64",children:"project_position_fp64"}),"\n",(0,t.jsxs)(o.p,{children:["64 bit counterpart of the ",(0,t.jsx)(o.code,{children:"project"})," modules ",(0,t.jsx)(o.code,{children:"project_position"})]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-glsl",children:"void project_position_fp64(vec4 position_fp64, out vec2 out_val[2])\nvoid project_position_fp64(vec2 position, vec2 position64Low, out vec2 out_val[2])\n"})}),"\n",(0,t.jsx)(o.h3,{id:"project_common_position_to_clipspace_fp64",children:"project_common_position_to_clipspace_fp64"}),"\n",(0,t.jsxs)(o.p,{children:["64 bit counterpart of the ",(0,t.jsx)(o.code,{children:"project"})," modules ",(0,t.jsx)(o.code,{children:"project_common_position_to_clipspace"})]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-glsl",children:"vec4 project_to_clipspace_fp64(vec2 vertex_pos_modelspace[4])\n"})}),"\n",(0,t.jsx)(o.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"project64"})," depends on luma.gl's ",(0,t.jsx)(o.code,{children:"fp64"})," module which is a big and complex shader module, which means that ",(0,t.jsx)(o.code,{children:"project64"})," is a big dependency for your shader."]}),"\n"]})]})}function a(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,o,i)=>{i.d(o,{R:()=>r,x:()=>s});var c=i(96540);const t={},n=c.createContext(t);function r(e){const o=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),c.createElement(n.Provider,{value:o},e.children)}}}]);