"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(k,l(l({ref:t},s),{},{components:r})):a.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(83117),n=(r(67294),r(3905));const o={},l="GoogleMapsOverlay",p={unversionedId:"api-reference/google-maps/google-maps-overlay",id:"api-reference/google-maps/google-maps-overlay",title:"GoogleMapsOverlay",description:"This class implements the OverlayView/WebGLOverlayView (depending on map rendering type) interface and can be used as any other Google Maps overlay.",source:"@site/../docs/api-reference/google-maps/google-maps-overlay.md",sourceDirName:"api-reference/google-maps",slug:"/api-reference/google-maps/google-maps-overlay",permalink:"/deck.gl/docs/api-reference/google-maps/google-maps-overlay",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/google-maps/google-maps-overlay.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@deck.gl/google-maps",permalink:"/deck.gl/docs/api-reference/google-maps/overview"},next:{title:"@deck.gl/extensions",permalink:"/deck.gl/docs/api-reference/extensions/overview"}},i={},c=[{value:"Vector/Raster maps",id:"vectorraster-maps",level:2},{value:"Usage",id:"usage",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>setMap</code>",id:"setmap",level:5},{value:"<code>setProps</code>",id:"setprops",level:5},{value:"<code>pickObject</code>",id:"pickobject",level:5},{value:"<code>pickObjects</code>",id:"pickobjects",level:5},{value:"<code>pickMultipleObjects</code>",id:"pickmultipleobjects",level:5},{value:"<code>finalize</code>",id:"finalize",level:5}],s={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"googlemapsoverlay"},"GoogleMapsOverlay"),(0,n.kt)("p",null,"This class implements the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/reference/overlay-view#OverlayView"},"OverlayView"),"/",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/maps/documentation/javascript/reference/webgl#WebGLOverlayView"},"WebGLOverlayView")," (depending on map rendering type) interface and can be used as any other Google Maps overlay."),(0,n.kt)("h2",{id:"vectorraster-maps"},"Vector/Raster maps"),(0,n.kt)("p",null,"As detailed in the ",(0,n.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/google-maps/overview"},"overview"),", the overlay supports both Vector and Raster Google map rendering. Depending on the Google Map configuration, the correct deck.gl overlay rendering method will be chosen at runtime."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"  import {GoogleMapsOverlay as DeckOverlay} from '@deck.gl/google-maps';\n  import {GeoJsonLayer} from '@deck.gl/layers';\n\n  // Create map\n  const map = new google.maps.Map(document.getElementById('map'), {\n    center: { lat: 40, lng: -100 },\n    zoom: 5,\n    mapId: GOOGLE_MAP_ID // Only required for Vector maps\n  });\n\n  // Create overlay instance\n  const overlay = new DeckOverlay({\n    layers: [\n      new GeoJsonLayer({\n        ...\n      })\n    ]\n  });\n  // Add overlay to map\n  overlay.setMap(map);\n")),(0,n.kt)("h2",{id:"constructor"},"Constructor"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const overlay = new GoogleMapsOverlay(props)\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"props")," are forwarded to a ",(0,n.kt)("inlineCode",{parentName:"p"},"Deck")," instance. The following ",(0,n.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/deck"},"Deck")," props are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"style")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"layers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"effects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"parameters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pickingRadius")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"useDevicePixels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onWebGLInitialized")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onBeforeRender")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onAfterRender")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"onLoad"))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h5",{id:"setmap"},(0,n.kt)("inlineCode",{parentName:"h5"},"setMap")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"overlay.setMap(map);\n")),(0,n.kt)("p",null,"Add/remove the overlay from a map. An overlay can be temporarily hidden from a map by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"setMap(null)"),". Removing an overlay does not destroy the WebGL context; use ",(0,n.kt)("inlineCode",{parentName:"p"},"finalize()")," if the overlay should be permanently removed."),(0,n.kt)("h5",{id:"setprops"},(0,n.kt)("inlineCode",{parentName:"h5"},"setProps")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"overlay.setProps(props);\n")),(0,n.kt)("p",null,"Update (partial) props."),(0,n.kt)("h5",{id:"pickobject"},(0,n.kt)("inlineCode",{parentName:"h5"},"pickObject")),(0,n.kt)("p",null,"Equivalent of ",(0,n.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/deck"},"deck.pickObject"),"."),(0,n.kt)("h5",{id:"pickobjects"},(0,n.kt)("inlineCode",{parentName:"h5"},"pickObjects")),(0,n.kt)("p",null,"Equivalent of ",(0,n.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/deck"},"deck.pickObjects"),"."),(0,n.kt)("h5",{id:"pickmultipleobjects"},(0,n.kt)("inlineCode",{parentName:"h5"},"pickMultipleObjects")),(0,n.kt)("p",null,"Equivalent of ",(0,n.kt)("a",{parentName:"p",href:"/deck.gl/docs/api-reference/core/deck"},"deck.pickMultipleObjects"),"."),(0,n.kt)("h5",{id:"finalize"},(0,n.kt)("inlineCode",{parentName:"h5"},"finalize")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"overlay.finalize();\n")),(0,n.kt)("p",null,"Remove the overlay and release all underlying resources."))}m.isMDXComponent=!0}}]);