"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2292],{76230:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"api-reference/carto/styles","title":"Styles","description":"Helper functions to create data-driven map visualizations.","source":"@site/../docs/api-reference/carto/styles.md","sourceDirName":"api-reference/carto","slug":"/api-reference/carto/styles","permalink":"/deck.gl/docs/api-reference/carto/styles","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/carto/styles.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"VectorTileLayer","permalink":"/deck.gl/docs/api-reference/carto/vector-tile-layer"},"next":{"title":"@deck.gl/google-maps","permalink":"/deck.gl/docs/api-reference/google-maps/overview"}}');var l=o(74848),s=o(28453);const i={},t="Styles",c={},a=[{value:"colorBins",id:"colorbins",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>attr</code> (string)",id:"attr",level:4},{value:"<code>domain</code> (number[])",id:"domain",level:4},{value:"<code>colors</code> (string | Color[], optional)",id:"colors",level:4},{value:"<code>nullColor</code> (number[3], optional)",id:"nullcolor",level:4},{value:"colorCategories",id:"colorcategories",level:2},{value:"Arguments",id:"arguments-1",level:3},{value:"<code>attr</code> (string)",id:"attr",level:4},{value:"<code>domain</code> (string[])",id:"domain",level:4},{value:"<code>colors</code> (string | Color[], optional)",id:"colors",level:4},{value:"<code>nullColor</code> (number[3], optional)",id:"nullcolor",level:4},{value:"<code>othersColor</code> (number[3], optional)",id:"otherscolor",level:4},{value:"Color Continuous",id:"color-continuous",level:2},{value:"Arguments",id:"arguments-2",level:3},{value:"<code>attr</code> (string)",id:"attr",level:4},{value:"<code>domain</code> (number[])",id:"domain",level:4},{value:"<code>colors</code> (string | Color[], optional)",id:"colors",level:4},{value:"<code>nullColor</code> (number[3], optional)",id:"nullcolor",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"styles",children:"Styles"})}),"\n",(0,l.jsx)(n.p,{children:"Helper functions to create data-driven map visualizations."}),"\n",(0,l.jsxs)(n.p,{children:["These helpers take advantage of ",(0,l.jsx)(n.a,{href:"https://carto.com/carto-colors/",children:"CARTOColors"}),", custom color schemes built on top of well-known standards for color use on maps, with next generation enhancements for the web and CARTO basemaps."]}),"\n",(0,l.jsx)(n.h2,{id:"colorbins",children:"colorBins"}),"\n",(0,l.jsxs)(n.p,{children:["Helper function for quickly creating a color bins style based on ",(0,l.jsx)(n.a,{href:"https://github.com/d3/d3-scale/blob/main/README.md#scaleThreshold",children:"d3 scaleThreshold"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Data values of each attribute are rounded down to the nearest value in the domain and are then styled with the corresponding color."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"new CartoLayer({\n  type: MAP_TYPES.QUERY,\n  data: 'SELECT the_geom_webmercator, gn_pop FROM populated_places',\n  getFillColor: colorBins({\n    attr: 'gn_pop',\n    domain: [1e5, 2e5, 3e5],\n    colors: 'Teal'\n  })\n});\n"})}),"\n",(0,l.jsxs)(n.p,{children:["In this example, using ",(0,l.jsx)(n.code,{children:"Teal"})," of length ",(0,l.jsx)(n.code,{children:"domain.length + 1"}),", the range/color equivalence is:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"[, 1e5)     -> Teal[0]\n[1e5, 2e5)  -> Teal[1]\n[2e5, 3e5)  -> Teal[2]\n[3e5,]      -> Teal[3]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsxs)(n.h4,{id:"attr",children:[(0,l.jsx)(n.code,{children:"attr"})," (string)"]}),"\n",(0,l.jsx)(n.p,{children:"Attribute or column to symbolize by."}),"\n",(0,l.jsxs)(n.h4,{id:"domain",children:[(0,l.jsx)(n.code,{children:"domain"})," (number[])"]}),"\n",(0,l.jsx)(n.p,{children:"Assign manual class break values."}),"\n",(0,l.jsxs)(n.h4,{id:"colors",children:[(0,l.jsx)(n.code,{children:"colors"})," (string | Color[], optional)"]}),"\n",(0,l.jsx)(n.p,{children:"Color assigned to each domain value."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["String: A valid named ",(0,l.jsx)(n.a,{href:"https://carto.com/carto-colors/",children:"CARTOColors"})," palette."]}),"\n",(0,l.jsxs)(n.li,{children:["Array: Array of colors in RGBA ",(0,l.jsx)(n.code,{children:"[ [r, g, b, [a]] ]"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Default: ",(0,l.jsx)(n.code,{children:"PurpOr"})]}),"\n",(0,l.jsxs)(n.h4,{id:"nullcolor",children:[(0,l.jsx)(n.code,{children:"nullColor"})," (number[3], optional)"]}),"\n",(0,l.jsx)(n.p,{children:"Color for null values."}),"\n",(0,l.jsxs)(n.p,{children:["Default: ",(0,l.jsx)(n.code,{children:"[204, 204, 204]"})]}),"\n",(0,l.jsx)(n.h2,{id:"colorcategories",children:"colorCategories"}),"\n",(0,l.jsx)(n.p,{children:"Helper function for quickly creating a color category style."}),"\n",(0,l.jsx)(n.p,{children:"Data values of each attribute listed in the domain are mapped one to one with corresponding colors in the range."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"new CartoLayer({\n  type: MAP_TYPES.QUERY,\n  data: 'SELECT the_geom_webmercator, type FROM ne_10m_airports',\n  getFillColor: colorCategories({\n    attr: 'type',\n    domain: ['mid', 'major', 'military mid', 'mid and military', 'major and military'],\n    colors: 'Bold'\n  })\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"arguments-1",children:"Arguments"}),"\n",(0,l.jsxs)(n.h4,{id:"attr",children:[(0,l.jsx)(n.code,{children:"attr"})," (string)"]}),"\n",(0,l.jsx)(n.p,{children:"Attribute or column to symbolize by."}),"\n",(0,l.jsxs)(n.h4,{id:"domain",children:[(0,l.jsx)(n.code,{children:"domain"})," (string[])"]}),"\n",(0,l.jsx)(n.p,{children:"Category list. Must be a valid list of categories."}),"\n",(0,l.jsxs)(n.h4,{id:"colors",children:[(0,l.jsx)(n.code,{children:"colors"})," (string | Color[], optional)"]}),"\n",(0,l.jsx)(n.p,{children:"Color assigned to each domain value."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["String: A valid named ",(0,l.jsx)(n.a,{href:"https://carto.com/carto-colors/",children:"CARTOColors"})," palette."]}),"\n",(0,l.jsxs)(n.li,{children:["Array: Array of colors in RGBA ",(0,l.jsx)(n.code,{children:"[ [r, g, b, [a]] ]"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Default: ",(0,l.jsx)(n.code,{children:"PurpOr"})]}),"\n",(0,l.jsxs)(n.h4,{id:"nullcolor",children:[(0,l.jsx)(n.code,{children:"nullColor"})," (number[3], optional)"]}),"\n",(0,l.jsx)(n.p,{children:"Color for null values."}),"\n",(0,l.jsxs)(n.p,{children:["Default: ",(0,l.jsx)(n.code,{children:"[204, 204, 204]"})]}),"\n",(0,l.jsxs)(n.h4,{id:"otherscolor",children:[(0,l.jsx)(n.code,{children:"othersColor"})," (number[3], optional)"]}),"\n",(0,l.jsx)(n.p,{children:"Fallback color for a category not correctly assigned."}),"\n",(0,l.jsxs)(n.p,{children:["Default: ",(0,l.jsx)(n.code,{children:"[119, 119, 119]"})]}),"\n",(0,l.jsx)(n.h2,{id:"color-continuous",children:"Color Continuous"}),"\n",(0,l.jsx)(n.p,{children:"Helper function for quickly creating a color continuous style."}),"\n",(0,l.jsx)(n.p,{children:"Data values of each field are interpolated linearly across values in the domain and are then styled with a blend of the corresponding color in the range."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"new CartoLayer({\n  type: MAP_TYPES.QUERY,\n  data: 'SELECT the_geom_webmercator, gn_pop FROM populated_places',\n  getFillColor: colorContinuous({\n    attr: 'gn_pop',\n    domain: [0, 1e5],\n    colors: 'BluYl'\n  })\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"arguments-2",children:"Arguments"}),"\n",(0,l.jsxs)(n.h4,{id:"attr",children:[(0,l.jsx)(n.code,{children:"attr"})," (string)"]}),"\n",(0,l.jsx)(n.p,{children:"Attribute or column to symbolize by."}),"\n",(0,l.jsxs)(n.h4,{id:"domain",children:[(0,l.jsx)(n.code,{children:"domain"})," (number[])"]}),"\n",(0,l.jsx)(n.p,{children:"Attribute domain to define the data range."}),"\n",(0,l.jsxs)(n.h4,{id:"colors",children:[(0,l.jsx)(n.code,{children:"colors"})," (string | Color[], optional)"]}),"\n",(0,l.jsx)(n.p,{children:"Color assigned to each domain value."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["String: A valid named ",(0,l.jsx)(n.a,{href:"https://carto.com/carto-colors/",children:"CARTOColors"})," palette."]}),"\n",(0,l.jsxs)(n.li,{children:["Array: Array of colors in RGBA ",(0,l.jsx)(n.code,{children:"[ [r, g, b, [a]] ]"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Default: ",(0,l.jsx)(n.code,{children:"PurpOr"})]}),"\n",(0,l.jsxs)(n.h4,{id:"nullcolor",children:[(0,l.jsx)(n.code,{children:"nullColor"})," (number[3], optional)"]}),"\n",(0,l.jsx)(n.p,{children:"Color for null values."}),"\n",(0,l.jsxs)(n.p,{children:["Default: ",(0,l.jsx)(n.code,{children:"[204, 204, 204]"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>t});var r=o(96540);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);