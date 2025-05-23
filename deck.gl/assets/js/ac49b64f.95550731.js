"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3080],{67487:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"api-reference/extensions/fill-style-extension","title":"FillStyleExtension","description":"The FillStyleExtension adds selected features to layers that render a \\"fill\\", such as the PolygonLayer and ScatterplotLayer.","source":"@site/../docs/api-reference/extensions/fill-style-extension.md","sourceDirName":"api-reference/extensions","slug":"/api-reference/extensions/fill-style-extension","permalink":"/deck.gl/docs/api-reference/extensions/fill-style-extension","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/extensions/fill-style-extension.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"DataFilterExtension","permalink":"/deck.gl/docs/api-reference/extensions/data-filter-extension"},"next":{"title":"Fp64Extension","permalink":"/deck.gl/docs/api-reference/extensions/fp64-extension"}}');var s=t(74848),i=t(28453);const r={},a="FillStyleExtension",o={},c=[{value:"Installation",id:"installation",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Layer Properties",id:"layer-properties",level:2},{value:"Fill Pattern",id:"fill-pattern",level:3},{value:"<code>fillPatternAtlas</code> (Texture2D | String)",id:"fillpatternatlas",level:4},{value:"<code>fillPatternEnabled</code> (boolean)",id:"fillpatternenabled",level:4},{value:"<code>fillPatternMapping</code> (object | String)",id:"fillpatternmapping",level:4},{value:"<code>fillPatternMask</code> (boolean)",id:"fillpatternmask",level:4},{value:"<code>getFillPattern</code> (Accessor&lt;string&gt;)",id:"getfillpattern",level:4},{value:"<code>getFillPatternScale</code> (Accessor&lt;number&gt;)",id:"getfillpatternscale",level:4},{value:"<code>getFillPatternOffset</code> (Accessor&lt;number[2]&gt;)",id:"getfillpatternoffset",level:4},{value:"Source",id:"source",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"fillstyleextension",children:"FillStyleExtension"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"FillStyleExtension"}),' adds selected features to layers that render a "fill", such as the ',(0,s.jsx)(n.code,{children:"PolygonLayer"})," and ",(0,s.jsx)(n.code,{children:"ScatterplotLayer"}),"."]}),"\n",(0,s.jsx)("div",{style:{position:"relative",height:450}}),"\n",(0,s.jsx)("div",{style:{position:"absolute",transform:"translateY(-450px)",paddingLeft:"inherit",paddingRight:"inherit",left:0,right:0},children:(0,s.jsx)("iframe",{height:"450",style:{width:"100%"},scrolling:"no",title:"deck.gl FillStyleExtension",src:"https://codepen.io/vis-gl/embed/eYBJWKz?height=450&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true",children:(0,s.jsxs)(n.p,{children:["See the Pen ",(0,s.jsx)("a",{href:"https://codepen.io/vis-gl/pen/eYBJWKz",children:"deck.gl FillStyleExtension"})," by vis.gl\n(",(0,s.jsx)("a",{href:"https://codepen.io/vis-gl",children:"@vis-gl"}),") on ",(0,s.jsx)("a",{href:"https://codepen.io",children:"CodePen"}),"."]})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import {GeoJsonLayer} from '@deck.gl/layers';\nimport {FillStyleExtension} from '@deck.gl/extensions';\n\nconst layer = new GeoJsonLayer({\n  id: 'geojson-layer',\n  data: GEOJSON,\n\n  // props from GeoJsonLayer\n  getFillColor: [255, 0, 0],\n  getLineColor: [0, 0, 0],\n  getLineWidth: 10,\n\n  // props added by FillStyleExtension\n  fillPatternAtlas: './pattern.png',\n  fillPatternMapping: './pattern.json',\n  getFillPattern: f => 'hatch',\n  getFillPatternScale: 1,\n  getFillPatternOffset: [0, 0],\n\n  // Define extensions\n  extensions: [new FillStyleExtension({pattern: true})]\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"To install the dependencies from NPM:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install deck.gl\n# or\nnpm install @deck.gl/core @deck.gl/layers @deck.gl/extensions\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import {FillStyleExtension} from '@deck.gl/extensions';\nnew FillStyleExtension({});\n"})}),"\n",(0,s.jsx)(n.p,{children:"To use pre-bundled scripts:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script src="https://unpkg.com/deck.gl@^9.0.0/dist.min.js"><\/script>\n\x3c!-- or --\x3e\n<script src="https://unpkg.com/@deck.gl/core@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/layers@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/extensions@^9.0.0/dist.min.js"><\/script>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new deck.FillStyleExtension({});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new FillStyleExtension({pattern});\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pattern"})," (boolean) - if ",(0,s.jsx)(n.code,{children:"true"}),", adds the ability to tile the filled area with a pattern."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"layer-properties",children:"Layer Properties"}),"\n",(0,s.jsxs)(n.p,{children:["When added to a layer via the ",(0,s.jsx)(n.code,{children:"extensions"})," prop, the ",(0,s.jsx)(n.code,{children:"FillStyleExtension"})," adds the following properties to the layer:"]}),"\n",(0,s.jsx)(n.h3,{id:"fill-pattern",children:"Fill Pattern"}),"\n",(0,s.jsxs)(n.p,{children:["The following properties are available if the ",(0,s.jsx)(n.code,{children:"pattern"})," option is enabled."]}),"\n",(0,s.jsxs)(n.h4,{id:"fillpatternatlas",children:[(0,s.jsx)(n.code,{children:"fillPatternAtlas"})," (Texture2D | String)"]}),"\n",(0,s.jsxs)(n.p,{children:["Sprite image url or texture that packs all your patterns into one layout.\nYou can create sprite images with tools such as ",(0,s.jsx)(n.a,{href:"https://www.codeandweb.com/texturepacker",children:"TexturePacker"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"fillpatternenabled",children:[(0,s.jsx)(n.code,{children:"fillPatternEnabled"})," (boolean)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Whether to use pattern fill. If ",(0,s.jsx)(n.code,{children:"false"}),", then the extension has no effect."]}),"\n",(0,s.jsxs)(n.h4,{id:"fillpatternmapping",children:[(0,s.jsx)(n.code,{children:"fillPatternMapping"})," (object | String)"]}),"\n",(0,s.jsx)(n.p,{children:"Pattern names mapped to pattern definitions. Each pattern is defined with the following values:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x"})," (number, required): x position of pattern on the atlas image"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"y"})," (number, required): y position of pattern on the atlas image"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"width"})," (number, required): width of pattern on the atlas image"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"height"})," (number, required): height of pattern on the atlas image"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"fillpatternmask",children:[(0,s.jsx)(n.code,{children:"fillPatternMask"})," (boolean)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Whether to treat the patterns as transparency masks."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"true"}),", user defined color (e.g. from ",(0,s.jsx)(n.code,{children:"getFillColor"}),") is applied."]}),"\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.code,{children:"false"}),", pixel color from the image is applied."]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"getfillpattern",children:[(0,s.jsx)(n.code,{children:"getFillPattern"})," (",(0,s.jsx)(n.a,{href:"/deck.gl/docs/developer-guide/using-layers#accessors",children:"Accessor<string>"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["Called to retrieve the name of the pattern. Returns a string key from the ",(0,s.jsx)(n.code,{children:"fillPatternMapping"})," object."]}),"\n",(0,s.jsxs)(n.h4,{id:"getfillpatternscale",children:[(0,s.jsx)(n.code,{children:"getFillPatternScale"})," (",(0,s.jsx)(n.a,{href:"/deck.gl/docs/developer-guide/using-layers#accessors",children:"Accessor<number>"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"1"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The scale of the pattern, relative to the original size. If the pattern is 24 x 24 pixels, scale ",(0,s.jsx)(n.code,{children:"1"})," roughly yields 24 meters."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If a number is provided, it is used as the pattern scale for all objects."}),"\n",(0,s.jsx)(n.li,{children:"If a function is provided, it is called on each object to retrieve its pattern scale."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"getfillpatternoffset",children:[(0,s.jsx)(n.code,{children:"getFillPatternOffset"})," (",(0,s.jsx)(n.a,{href:"/deck.gl/docs/developer-guide/using-layers#accessors",children:"Accessor<number[2]>"}),")"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"[0, 0]"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The offset of the pattern, relative to the original size. Offset ",(0,s.jsx)(n.code,{children:"[0.5, 0.5]"})," shifts the pattern alignment by half."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If an array is provided, it is used as the pattern offset for all objects."}),"\n",(0,s.jsx)(n.li,{children:"If a function is provided, it is called on each object to retrieve its pattern offset."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"source",children:"Source"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/visgl/deck.gl/tree/master/modules/extensions/src/fill-style",children:"modules/extensions/src/fill-style"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var l=t(96540);const s={},i=l.createContext(s);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);