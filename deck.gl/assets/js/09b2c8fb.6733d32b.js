"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7937],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=c(a),g=n,u=m["".concat(o,".").concat(g)]||m[g]||d[g]||l;return a?r.createElement(u,s(s({ref:t},i),{},{components:a})):r.createElement(u,s({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:n,s[1]=p;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},29860:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(83117),n=(a(67294),a(3905));const l={},s="BASEMAP",p={unversionedId:"api-reference/carto/basemap",id:"api-reference/carto/basemap",title:"BASEMAP",description:"CARTO basemaps are available and they can be used without a token.",source:"@site/../docs/api-reference/carto/basemap.md",sourceDirName:"api-reference/carto",slug:"/api-reference/carto/basemap",permalink:"/deck.gl/docs/api-reference/carto/basemap",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/carto/basemap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@deck.gl/carto",permalink:"/deck.gl/docs/api-reference/carto/overview"},next:{title:"fetchMap",permalink:"/deck.gl/docs/api-reference/carto/fetch-map"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"React",id:"react",level:3},{value:"Standalone",id:"standalone",level:3},{value:"Supported basemaps",id:"supported-basemaps",level:2}],i={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"basemap"},"BASEMAP"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://carto.com/basemaps/"},"CARTO basemaps")," are available and they can be used without a token."),(0,n.kt)("p",null,"Ensure you follow the ",(0,n.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1P7bhSE-N9iegI398QYDjKeVhnbS7-Ilk/view"},"Terms and Conditions")," when using them."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important Note:")," Mapbox-GL-JS v2.0 changed to a license that requires an API key for loading the library, which will prevent you from using ",(0,n.kt)("inlineCode",{parentName:"p"},"react-map-gl")," ( a higher level library). They have an in-depth guide about it ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/visgl/react-map-gl/blob/v6.0.0/docs/get-started/mapbox-tokens.md"},"here"),"."),(0,n.kt)("p",null,"In short, if you want to use the library without a Mapbox token, then you have two options: use a ",(0,n.kt)("inlineCode",{parentName:"p"},"react-map-gl")," version less than 6.0 (",(0,n.kt)("inlineCode",{parentName:"p"},"npm i react-map-gl@5"),"), or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/visgl/react-map-gl/blob/v6.0.0/docs/get-started/get-started.md#using-with-a-mapbox-gl-fork"},"substitute ",(0,n.kt)("inlineCode",{parentName:"a"},"mapbox-gl")," with a fork"),"."),(0,n.kt)("p",null,"To install the dependencies from NPM:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install deck.gl\n# or\nnpm install @deck.gl/core @deck.gl/layers @deck.gl/carto\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {DeckGL} from '@deck.gl/react';\nimport {StaticMap} from 'react-map-gl';\nimport {BASEMAP} from '@deck.gl/carto';\n<DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={layers}>\n  <StaticMap mapStyle={BASEMAP.POSITRON} />\n</DeckGL>;\n")),(0,n.kt)("h3",{id:"standalone"},"Standalone"),(0,n.kt)("p",null,"To use pre-bundled scripts:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/deck.gl@^8.7.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/carto@^8.7.0/dist.min.js"><\/script>\n\n\x3c!-- or --\x3e\n<script src="https://unpkg.com/@deck.gl/core@^8.7.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/layers@^8.7.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/geo-layers@^8.7.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/carto@^8.7.0/dist.min.js"><\/script>\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const deckgl = new deck.DeckGL({\n  container: 'map',\n  mapStyle: deck.carto.BASEMAP.POSITRON,\n  initialViewState: {\n    latitude: 0,\n    longitude: 0,\n    zoom: 1\n  },\n  controller: true\n});\n")),(0,n.kt)("h2",{id:"supported-basemaps"},"Supported basemaps"),(0,n.kt)("p",null,"There are several basemaps available today:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"POSITRON"),(0,n.kt)("li",{parentName:"ul"},"DARK_MATTER"),(0,n.kt)("li",{parentName:"ul"},"VOYAGER"),(0,n.kt)("li",{parentName:"ul"},"POSITRON_NOLABELS"),(0,n.kt)("li",{parentName:"ul"},"DARK_MATTER_NOLABELS"),(0,n.kt)("li",{parentName:"ul"},"VOYAGER_NOLABELS")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"NAME"),(0,n.kt)("th",{parentName:"tr",align:null},"PREVIEW"),(0,n.kt)("th",{parentName:"tr",align:null},"STYLE URL"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"POSITRON"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://carto.com/help/images/building-maps/basemaps/positron_labels.png"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"},"https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DARK_MATTER"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://carto.com/help/images/building-maps/basemaps/dark_labels.png"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"},"https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VOYAGER"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://carto.com/help/images/building-maps/basemaps/voyager_labels.png"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"},"https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"POSITRON_NOLABELS"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://carto.com/help/images/building-maps/basemaps/positron_no_labels.png"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json"},"https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DARK_MATTER_NOLABELS"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://carto.com/help/images/building-maps/basemaps/dark_no_labels.png"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json"},"https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VOYAGER_NOLABELS"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://carto.com/help/images/building-maps/basemaps/voyager_no_labels.png"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://basemaps.cartocdn.com/gl/voyager-nolabels-gl-style/style.json"},"https://basemaps.cartocdn.com/gl/voyager-nolabels-gl-style/style.json"))))))}d.isMDXComponent=!0}}]);