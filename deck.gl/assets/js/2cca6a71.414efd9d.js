"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9453],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),o=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=o(a),g=n,c=d["".concat(i,".").concat(g)]||d[g]||u[g]||l;return a?r.createElement(c,p(p({ref:t},m),{},{components:a})):r.createElement(c,p({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,p[1]=s;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},45532:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=a(83117),n=(a(67294),a(3905));const l={},p="Base Maps",s={unversionedId:"get-started/using-with-map",id:"get-started/using-with-map",title:"Base Maps",description:"While deck.gl works independently without any map component, when visualizing geospatial datasets, a base map can offer invaluable context for understanding the overlay layers.",source:"@site/../docs/get-started/using-with-map.md",sourceDirName:"get-started",slug:"/get-started/using-with-map",permalink:"/deck.gl/docs/get-started/using-with-map",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/get-started/using-with-map.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using deck.gl without React",permalink:"/deck.gl/docs/get-started/using-standalone"},next:{title:"Using deck.gl with React",permalink:"/deck.gl/docs/get-started/using-with-react"}},i={},o=[{value:"Base Maps Renderers",id:"base-maps-renderers",level:2}],m={toc:o},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"base-maps"},"Base Maps"),(0,n.kt)("p",null,"While deck.gl works independently without any map component, when visualizing geospatial datasets, a base map can offer invaluable context for understanding the overlay layers."),(0,n.kt)("h2",{id:"base-maps-renderers"},"Base Maps Renderers"),(0,n.kt)("p",null,"deck.gl has been designed to work in tandem with popular JavaScript base map providers. Depending on your tech stack, deck.gl's support for a particular base map solution may come with different level of compatibility and limitations."),(0,n.kt)("p",null,"There are two types of integration between deck.gl and a base map renderer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Overlaid"),": the Deck canvas is rendered over the base map as a separate DOM element. Deck's camera and the camera of the base map are synchronized so they pan/zoom together. This is the more robust option since the two libraries manage their renderings independently from each other. It is usually sufficient if the base map is 2D.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1600/0*K3DVssEhnv5VaDCp",alt:"Deck as overlay on top of the base map"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Interleaved"),": Deck renders into the WebGL context of the base map. This allows for occlusion between deck.gl layers and the base map's labels and/or 3D features. The availability of this option depends on whether the base map solution exposes certain developer APIs, and may subject the user to bugs/limitations associated with such APIs.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1600/0*faYL1UbVD4af5qzy",alt:"Deck interleaved with base map layers"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Library"),(0,n.kt)("th",{parentName:"tr",align:null},"Pure JS"),(0,n.kt)("th",{parentName:"tr",align:null},"React"),(0,n.kt)("th",{parentName:"tr",align:null},"Overlaid"),(0,n.kt)("th",{parentName:"tr",align:null},"Interleaved"),(0,n.kt)("th",{parentName:"tr",align:null},"Docs"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://developers.arcgis.com/javascript/latest/"},"ArcGIS API for JavaScript")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/pure-js/arcgis"},"example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/deck.gl/docs/developer-guide/base-maps/using-with-arcgis"},"link"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://developers.google.com/maps/documentation/javascript/deckgl-overlay-view"},"Google Maps JavaScript API")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/pure-js/google-maps"},"example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://developers.google.com/maps/documentation/javascript/examples/deckgl-tripslayer"},"example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/deck.gl/docs/developer-guide/base-maps/using-with-google-maps"},"link"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.harp.gl/"},"harp.gl")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/pure-js/harp.gl"},"example")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://leafletjs.com/"},"Leaflet")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/pure-js/leaflet"},"example")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.mapbox.com/mapbox-gl-js/api/"},"Mapbox GL JS")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/pure-js/mapbox"},"example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://deck.gl/gallery/mapbox-layer"},"example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/deck.gl/docs/developer-guide/base-maps/using-with-mapbox"},"link"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://maplibre.org/maplibre-gl-js-docs/api/"},"MapLibre GL JS")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/pure-js/mapbox"},"example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://deck.gl/gallery/mapbox-layer"},"example")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/deck.gl/docs/developer-guide/base-maps/using-with-mapbox#compatibility-with-mapbox-gl-js-forks"},"link"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://openlayers.org/"},"OpenLayers")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/pure-js/openlayers"},"example")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"It is also important to understand the difference between the JS library that renders the map and the map data provider. For example, you can use Mapbox GL JS with the Mapbox service, but also with any other service that hosts Mapbox Vector Tiles. When using a base map, be sure to follow the terms and conditions, as well as the attribution requirements of both the JS library and the data provider."))}u.isMDXComponent=!0}}]);