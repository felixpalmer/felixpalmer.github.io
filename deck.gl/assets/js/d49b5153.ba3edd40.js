"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8184],{211:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"developer-guide/custom-layers/layer-attributes","title":"Layer Attributes","description":"This section explains how the data in deck.gl layers are mapped to and accessed by the GPU during rendering.","source":"@site/../docs/developer-guide/custom-layers/layer-attributes.md","sourceDirName":"developer-guide/custom-layers","slug":"/developer-guide/custom-layers/layer-attributes","permalink":"/deck.gl/docs/developer-guide/custom-layers/layer-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/custom-layers/layer-attributes.md","tags":[],"version":"current","frontMatter":{}}');var s=i(74848),a=i(28453);const n={},l="Layer Attributes",c={},d=[{value:"Overview",id:"overview",level:2},{value:"Fixed vs Variable Primitive Layers",id:"fixed-vs-variable-primitive-layers",level:3},{value:"Geometric vs Descriptive Attributes",id:"geometric-vs-descriptive-attributes",level:2},{value:"Geometric Attributes",id:"geometric-attributes",level:3},{value:"Descriptive Attributes",id:"descriptive-attributes",level:3}];function o(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"layer-attributes",children:"Layer Attributes"})}),"\n",(0,s.jsx)(t.p,{children:"This section explains how the data in deck.gl layers are mapped to and accessed by the GPU during rendering."}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["A central concept of deck.gl is that every ",(0,s.jsx)(t.code,{children:"Layer"}),' accepts a "table of data" (through the ',(0,s.jsx)(t.code,{children:"data"})," prop) and maps into visual elements that are then rendered efficiently on the GPU."]}),"\n",(0,s.jsx)(t.p,{children:"For purposes of GPU computation, there are two separate types of layers and two types of attributes. We'll use the following terminology:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Geometric Attribute per row"}),(0,s.jsx)(t.th,{children:"Descriptive Attribute per row"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Shared-Primitive Layer"}),(0,s.jsx)(t.td,{children:"N/A (Use shared primitive)"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"1"})," value (instance) per row"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Variable-Primitive Layer"}),(0,s.jsxs)(t.td,{children:["Variable # of vertices (",(0,s.jsx)(t.code,{children:"Ni"}),")"]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"Ni"})," duplicate values per row"]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"fixed-vs-variable-primitive-layers",children:"Fixed vs Variable Primitive Layers"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Fixed Primitive Layer"})," - (Sometimes called ",(0,s.jsx)(t.em,{children:"instanced layers"}),"). These layers map each data row to a fixed primitive (set of vertices). Because of this simple mapping, these layers can naturally use instanced rendering, in the sense that the unique attributes for each row (instance) can be described by a single value in an instanced attribute array."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Variable Primitive Layer"})," - (Sometimes called ",(0,s.jsx)(t.em,{children:"tesselated layers"}),"). These layers require custom primitive for each row in the data table. The process of generating a custom primitive is referred to as tesselation, and requires extra work during generation. In this case it is not possible to use instancing to represent the unique attributes"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Examples of ",(0,s.jsx)(t.em,{children:"fixed primitive layers"})," are ",(0,s.jsx)(t.code,{children:"CircleLayer"}),", ",(0,s.jsx)(t.code,{children:"PointCloudLayer"}),", ",(0,s.jsx)(t.code,{children:"LineLayer"})," etc."]}),"\n",(0,s.jsxs)(t.p,{children:["Examples of ",(0,s.jsx)(t.em,{children:"variable primitive layers"})," are ",(0,s.jsx)(t.code,{children:"PathLayer"}),", ",(0,s.jsx)(t.code,{children:"PolygonLayer"})," etc."]}),"\n",(0,s.jsx)(t.p,{children:"Remarks:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The primitive in a ",(0,s.jsx)(t.em,{children:"fixed primitive layer"})," can be arbitrarily complex (from a single triangle, through more complex primitives like an extruded hexagon, to an entire mesh or scenegraph loaded from e.g. a glTF file). As the glTF example hints at, there can even be multiple primitives per table row (in multi-model layers). The defining characteristic is just that the primitive(s) are identical for each row."]}),"\n",(0,s.jsxs)(t.li,{children:["As mentioned, ",(0,s.jsx)(t.em,{children:"Fixed primitive layers"})," are sometimes called ",(0,s.jsx)(t.em,{children:"instanced layers"}),", however the term is not precise as it is possible for a tesselated/variable primitive layer to use instanced rendering (e.g. the ",(0,s.jsx)(t.code,{children:"PathLayer"})," currently does this as a performance micro-optimization to reduce the amount of custom geometry generated during tesselation). This use of instancing is not related to efficiently storing the unique values for each table row."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"geometric-vs-descriptive-attributes",children:"Geometric vs Descriptive Attributes"}),"\n",(0,s.jsx)(t.h3,{id:"geometric-attributes",children:"Geometric Attributes"}),"\n",(0,s.jsx)(t.p,{children:"Positions, Normals, Tangents, Co-Tangents etc."}),"\n",(0,s.jsx)(t.p,{children:"For fixed primitive layers, these attributes are all pre-defined as part of the Layer's reference primitive."}),"\n",(0,s.jsxs)(t.p,{children:["For ",(0,s.jsx)(t.em,{children:"variable primitive layers"}),", these attributes are normally all generated as a result of the tesselation process, and it is normal to have a unique value for each of these attributes in each vertex."]}),"\n",(0,s.jsx)(t.h3,{id:"descriptive-attributes",children:"Descriptive Attributes"}),"\n",(0,s.jsx)(t.p,{children:"Descriptive Attributes are used to share (non-geometrical) attributes (colors, ...) related to the data in each table row."}),"\n",(0,s.jsx)(t.p,{children:"The big difference between the two layer types is how descriptive attributes are handled."}),"\n",(0,s.jsxs)(t.p,{children:["For ",(0,s.jsx)(t.em,{children:"fixed primitive layers"})," the standard setup is very simple: each descriptive attribute is an instanced attribute, with one value for each table row."]}),"\n",(0,s.jsxs)(t.p,{children:["For ",(0,s.jsx)(t.em,{children:"variable primitive layers"})," there are two options:"]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Copy each descriptive attribute ",(0,s.jsx)(t.code,{children:"N"})," times (",(0,s.jsx)(t.code,{children:"N"})," being the number of vertices generated for that row during tesselation). This is the method that is used in deck.gl today."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Add a single ",(0,s.jsx)(t.code,{children:"rowIndex"})," attribute and copy the same index ",(0,s.jsx)(t.code,{children:"N"})," times as above. In this approach, descriptive values could then be read from textures where they are stored a single time. This provides flexibility at the price of performance (texture access latency) and complexity (working with data in textures)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Remarks:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["In tesselated layers it is of course possible to use the fact that each vertex has a unique value for each descriptive attribute value to achieve certain effects. One could for instance make a custom ",(0,s.jsx)(t.code,{children:"PathLayer"})," that defines a gradient of colors along the path. This technique tends to get harder to use for layers that tesselate triangles in 2D or 3D as the order of vertices is less predictable. Also, if indices are generated in this phase, in which case extra care must be taken since some vertices can be repeated in the geometry. Because of these complications, this is not a promoted customization technique for layers."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>l});var r=i(96540);const s={},a=r.createContext(s);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);