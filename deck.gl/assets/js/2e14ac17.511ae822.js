"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5163],{34473:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"api-reference/core/orthographic-view","title":"OrthographicView","description":"The OrthographicView class is a subclass of View that creates a top-down view of the XY plane. It is usually used for rendering 2D charts in non-geospatial use cases.","source":"@site/../docs/api-reference/core/orthographic-view.md","sourceDirName":"api-reference/core","slug":"/api-reference/core/orthographic-view","permalink":"/deck.gl/docs/api-reference/core/orthographic-view","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/core/orthographic-view.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"FirstPersonView","permalink":"/deck.gl/docs/api-reference/core/first-person-view"},"next":{"title":"OrbitView","permalink":"/deck.gl/docs/api-reference/core/orbit-view"}}');var n=o(74848),t=o(28453);const c={},s="OrthographicView",l={},a=[{value:"Constructor",id:"constructor",level:2},{value:"<code>flipY</code> (boolean)",id:"flipy",level:4},{value:"<code>near</code> (number, optional)",id:"near",level:4},{value:"<code>far</code> (number, optional)",id:"far",level:4},{value:"View State",id:"view-state",level:2},{value:"Controller",id:"controller",level:2},{value:"Source",id:"source",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"orthographicview",children:"OrthographicView"})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"OrthographicView"})," class is a subclass of ",(0,n.jsx)(r.a,{href:"/deck.gl/docs/api-reference/core/view",children:"View"})," that creates a top-down view of the XY plane. It is usually used for rendering 2D charts in non-geospatial use cases."]}),"\n",(0,n.jsxs)(r.p,{children:["It's recommended that you read the ",(0,n.jsx)(r.a,{href:"/deck.gl/docs/developer-guide/views",children:"Views and Projections guide"})," before using this class."]}),"\n",(0,n.jsx)("div",{style:{position:"relative",height:450}}),"\n",(0,n.jsx)("div",{style:{position:"absolute",transform:"translateY(-450px)",paddingLeft:"inherit",paddingRight:"inherit",left:0,right:0},children:(0,n.jsx)("iframe",{height:"450",style:{width:"100%"},scrolling:"no",title:"deck.gl OrthographicView",src:"https://codepen.io/vis-gl/embed/YzpXqzv?height=450&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true",children:(0,n.jsxs)(r.p,{children:["See the Pen ",(0,n.jsx)("a",{href:"https://codepen.io/vis-gl/pen/YzpXqzv",children:"deck.gl OrthographicView"})," by vis.gl\n(",(0,n.jsx)("a",{href:"https://codepen.io/vis-gl",children:"@vis-gl"}),") on ",(0,n.jsx)("a",{href:"https://codepen.io",children:"CodePen"}),"."]})})}),"\n",(0,n.jsx)(r.h2,{id:"constructor",children:"Constructor"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"import {OrthographicView} from '@deck.gl/core';\nconst view = new OrthographicView({id, ...});\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"OrthographicView"})," takes the same parameters as the ",(0,n.jsx)(r.a,{href:"/deck.gl/docs/api-reference/core/view",children:"View"})," superclass constructor, plus the following:"]}),"\n",(0,n.jsxs)(r.h4,{id:"flipy",children:[(0,n.jsx)(r.code,{children:"flipY"})," (boolean)"]}),"\n",(0,n.jsxs)(r.p,{children:["Whether to use top-left coordinates (",(0,n.jsx)(r.code,{children:"true"}),") or bottom-left coordinates (",(0,n.jsx)(r.code,{children:"false"}),"). Default ",(0,n.jsx)(r.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(r.h4,{id:"near",children:[(0,n.jsx)(r.code,{children:"near"})," (number, optional)"]}),"\n",(0,n.jsxs)(r.p,{children:["Distance of near clipping plane. Default ",(0,n.jsx)(r.code,{children:"0.1"}),"."]}),"\n",(0,n.jsxs)(r.h4,{id:"far",children:[(0,n.jsx)(r.code,{children:"far"})," (number, optional)"]}),"\n",(0,n.jsxs)(r.p,{children:["Distance of far clipping plane. Default ",(0,n.jsx)(r.code,{children:"1000"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"view-state",children:"View State"}),"\n",(0,n.jsxs)(r.p,{children:["To render, ",(0,n.jsx)(r.code,{children:"OrthographicView"})," needs to be used together with a ",(0,n.jsx)(r.code,{children:"viewState"})," with the following parameters:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"target"})," (number[3], optional) - The world position at the center of the viewport. Default ",(0,n.jsx)(r.code,{children:"[0, 0, 0]"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"zoom"})," (number | number[2], optional) - The zoom level of the viewport. ",(0,n.jsx)(r.code,{children:"zoom: 0"})," maps one unit distance to one pixel on screen, and increasing ",(0,n.jsx)(r.code,{children:"zoom"})," by ",(0,n.jsx)(r.code,{children:"1"})," scales the same object to twice as large. For example ",(0,n.jsx)(r.code,{children:"zoom: 1"})," is 2x the original size, ",(0,n.jsx)(r.code,{children:"zoom: 2"})," is 4x, ",(0,n.jsx)(r.code,{children:"zoom: 3"})," is 8x etc.. To apply independent zoom levels to the X and Y axes, supply an array ",(0,n.jsx)(r.code,{children:"[zoomX, zoomY]"}),". Default ",(0,n.jsx)(r.code,{children:"0"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"minZoom"})," (number, optional) - The min zoom level of the viewport. Default ",(0,n.jsx)(r.code,{children:"-Infinity"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"maxZoom"})," (number, optional) - The max zoom level of the viewport. Default ",(0,n.jsx)(r.code,{children:"Infinity"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"controller",children:"Controller"}),"\n",(0,n.jsxs)(r.p,{children:["By default, ",(0,n.jsx)(r.code,{children:"OrthographicView"})," uses the ",(0,n.jsx)(r.code,{children:"OrthographicController"})," to handle interactivity. To enable the controller, use:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const view = new OrthographicView({id: '2d-scene', controller: true});\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Visit the ",(0,n.jsx)(r.a,{href:"/deck.gl/docs/api-reference/core/orthographic-controller",children:"OrthographicController"})," documentation for a full list of supported options."]}),"\n",(0,n.jsx)(r.h2,{id:"source",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/visgl/deck.gl/blob/master/modules/core/src/views/orthographic-view.ts",children:"modules/core/src/views/orthographic-view.ts"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>c,x:()=>s});var i=o(96540);const n={},t=i.createContext(n);function c(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);