"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7587],{40206:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"developer-guide/base-maps/using-with-google-maps","title":"Using with Google Maps Platform","description":"| Pure JS | React | Overlaid | Interleaved |","source":"@site/../docs/developer-guide/base-maps/using-with-google-maps.md","sourceDirName":"developer-guide/base-maps","slug":"/developer-guide/base-maps/using-with-google-maps","permalink":"/deck.gl/docs/developer-guide/base-maps/using-with-google-maps","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/base-maps/using-with-google-maps.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Using with ArcGIS","permalink":"/deck.gl/docs/developer-guide/base-maps/using-with-arcgis"},"next":{"title":"Using with Mapbox","permalink":"/deck.gl/docs/developer-guide/base-maps/using-with-mapbox"}}');var o=t(74848),n=t(28453),l=t(11470),s=t(19365);const i={},c="Using with Google Maps Platform",d={},p=[{value:"Integration Modes",id:"integration-modes",level:2},{value:"Interleaved",id:"interleaved",level:3},{value:"Overlaid",id:"overlaid",level:3},{value:"Reverse Controlled",id:"reverse-controlled",level:3},{value:"Examples",id:"examples",level:2},{value:"Example: interleaved or overlaid",id:"example-interleaved-or-overlaid",level:3},{value:"Example: reverse controlled",id:"example-reverse-controlled",level:3},{value:"Additional Information",id:"additional-information",level:2},{value:"react-google-maps",id:"react-google-maps",level:3},{value:"Google Maps Platform API key",id:"google-maps-platform-api-key",level:3}];function u(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"using-with-google-maps-platform",children:"Using with Google Maps Platform"})}),"\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Pure JS"}),(0,o.jsx)(a.th,{children:"React"}),(0,o.jsx)(a.th,{children:"Overlaid"}),(0,o.jsx)(a.th,{children:"Interleaved"})]})}),(0,o.jsx)(a.tbody,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"\u2713"}),(0,o.jsx)(a.td,{children:"\u2713"}),(0,o.jsx)(a.td,{children:(0,o.jsx)(a.a,{href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/pure-js/google-maps",children:"example"})}),(0,o.jsx)(a.td,{children:(0,o.jsx)(a.a,{href:"https://developers.google.com/maps/documentation/javascript/examples/deckgl-tripslayer",children:"example"})})]})})]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{src:"https://raw.github.com/visgl/deck.gl-data/master/images/whats-new/google-maps.jpg",alt:"deck.gl as a Google Maps overlay"})}),"\n",(0,o.jsx)(a.h2,{id:"integration-modes",children:"Integration Modes"}),"\n",(0,o.jsx)(a.p,{children:"When using deck.gl and Google Maps JavaScript API, there are three options you can choose from: interleaved, overlaid, and reverse-controlled."}),"\n",(0,o.jsx)(a.h3,{id:"interleaved",children:"Interleaved"}),"\n",(0,o.jsxs)(a.p,{children:["The ",(0,o.jsx)(a.a,{href:"/deck.gl/docs/get-started/using-with-map#interleaved",children:"interleaved"})," mode renders deck.gl layers into the WebGL2 context created by Google's vector map, using the Maps JavaScript API ",(0,o.jsx)(a.a,{href:"https://developers.google.com/maps/documentation/javascript/webgl/webgl-overlay-view",children:"WebGLOverlayView class"}),". If you need to mix deck.gl layers with Maps layers, e.g. having deck.gl objects and Maps 3D buildings occluding each other correctly, then you have to use this option."]}),"\n",(0,o.jsxs)(a.p,{children:["Interleaving is supported by using ",(0,o.jsx)(a.a,{href:"/deck.gl/docs/api-reference/google-maps/google-maps-overlay",children:"GoogleMapsOverlay"})," with an instance of Google's ",(0,o.jsx)(a.a,{href:"https://developers.google.com/maps/documentation/javascript/vector-map",children:"vector map"}),". Some ",(0,o.jsx)(a.a,{href:"/deck.gl/docs/api-reference/google-maps/overview#supported-features-and-limitations",children:"limitations"})," apply when using this option."]}),"\n",(0,o.jsx)(a.h3,{id:"overlaid",children:"Overlaid"}),"\n",(0,o.jsxs)(a.p,{children:["The ",(0,o.jsx)(a.a,{href:"/deck.gl/docs/get-started/using-with-map#overlaid",children:"overlaid"})," mode renders deck.gl in a separate canvas inside the Maps' controls container, using the Maps JavaScript API ",(0,o.jsx)(a.a,{href:"https://developers.google.com/maps/documentation/javascript/reference/#OverlayView",children:"OverlayView class"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["This is supported by using ",(0,o.jsx)(a.a,{href:"/deck.gl/docs/api-reference/google-maps/google-maps-overlay",children:"GoogleMapsOverlay"})," with Google's ",(0,o.jsx)(a.a,{href:"https://developers.google.com/maps/documentation/javascript/vector-map",children:"raster map"}),". When a deck.gl overlay instance is added to the map, if a vector map is not detected or the user's device does not support WebGL2, it will automatically fallback to overlaid mode. You can also explicitly use this mode by setting the option ",(0,o.jsx)(a.code,{children:"interleaved"})," to false when creating the GoogleMapsOverlay. In this mode, 3D features like tilt, rotation, and fractional zoom are not supported."]}),"\n",(0,o.jsx)(a.h3,{id:"reverse-controlled",children:"Reverse Controlled"}),"\n",(0,o.jsxs)(a.p,{children:["The reverse-controlled mode renders deck.gl above the Maps container and blocks any interaction to the base map. If your use case does not require interleaving, but you need to implement your own ",(0,o.jsx)(a.a,{href:"/deck.gl/docs/api-reference/core/controller",children:"pointer input handling"}),", have multiple maps or a map that does not fill the whole canvas (with Deck's ",(0,o.jsx)(a.a,{href:"/deck.gl/docs/developer-guide/views#using-multiple-views",children:"multi-view feature"}),"), you need this to allow deck.gl manage the map's size and camera."]}),"\n",(0,o.jsxs)(a.p,{children:["You cannot use Maps' own UI controls such as the zoom buttons or layer selector with this option. Instead, use the components from ",(0,o.jsx)(a.code,{children:"@deck.gl/widgets"}),"."]}),"\n",(0,o.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(a.h3,{id:"example-interleaved-or-overlaid",children:"Example: interleaved or overlaid"}),"\n",(0,o.jsxs)(a.p,{children:["Both the interleaved and the overlaid options are supported in by the ",(0,o.jsx)(a.a,{href:"/deck.gl/docs/api-reference/google-maps/overview",children:"@deck.gl/google-maps"})," module. This is recommended approach for developers coming from the Google Maps JavaScript API ecosystem, as it handles fallbacks gracefully, as well as being compatible with other Maps controls and plugins."]}),"\n","\n",(0,o.jsxs)(l.A,{groupId:"language",children:[(0,o.jsx)(s.A,{value:"ts",label:"TypeScript",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-ts",children:"import {Loader} from '@googlemaps/js-api-loader';\nimport {GoogleMapsOverlay} from '@deck.gl/google-maps';\nimport {ScatterplotLayer} from '@deck.gl/layers';\n\nconst loader = new Loader({apiKey: '<google_maps_api_key>'});\nconst googlemaps = await loader.importLibrary('maps');\n\nconst map = new googlemaps.Map(document.getElementById('map'), {\n  center: {lat: 51.47, lng: 0.45},\n  zoom: 11,\n  mapId: '<google_map_id>'\n});\n\nconst overlay = new GoogleMapsOverlay({\n  layers: [\n    new ScatterplotLayer({\n      id: 'deckgl-circle',\n      data: [\n        {position: [0.45, 51.47]}\n      ],\n      getPosition: d => d.position,\n      getFillColor: [255, 0, 0, 100],\n      getRadius: 1000\n    })\n  ]\n});\n\noverlay.setMap(map);\n"})})}),(0,o.jsx)(s.A,{value:"react",label:"React",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:"import React, {useMemo, useEffect} from 'react';\nimport {APIProvider, Map, useMap} from '@vis.gl/react-google-maps';\nimport {DeckProps} from '@deck.gl/core';\nimport {ScatterplotLayer} from '@deck.gl/layers';\nimport {GoogleMapsOverlay} from '@deck.gl/google-maps';\n\nfunction DeckGLOverlay(props: DeckProps) {\n  const map = useMap();\n  const overlay = useMemo(() => new GoogleMapsOverlay(props), []);\n\n  useEffect(() => {\n    overlay.setMap(map);\n    return () => overlay.setMap(null);\n  }, [map])\n\n  overlay.setProps(props);\n  return null;\n}\n\nfunction App() {\n  const layers = [\n    new ScatterplotLayer({\n      id: 'deckgl-circle',\n      data: [\n        {position: [0.45, 51.47]}\n      ],\n      getPosition: d => d.position,\n      getFillColor: [255, 0, 0, 100],\n      getRadius: 1000\n    })\n  ];\n\n  return <APIProvider apiKey=\"<google_maps_api_key>\">\n    <Map\n      defaultCenter={{lat: 51.47, lng: 0.45}}\n      defaultZoom={11}\n      mapId=\"<google_maps_id>\" >\n      <DeckGLOverlay layers={layers} />\n    </Map>\n  </APIProvider>;\n}\n"})})})]}),"\n",(0,o.jsxs)(a.p,{children:["You can find full project setups in the ",(0,o.jsx)(a.a,{href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/react/google-maps/",children:"react get-started example"})," and ",(0,o.jsx)(a.a,{href:"https://github.com/visgl/deck.gl/tree/master/examples/get-started/pure-js/google-maps/",children:"pure js get-started example"}),"."]}),"\n",(0,o.jsx)(a.h3,{id:"example-reverse-controlled",children:"Example: reverse controlled"}),"\n",(0,o.jsxs)(a.p,{children:["The reverse-controlled option is currently only supported in React when used with the ",(0,o.jsx)(a.code,{children:"@visgl/react-google-maps"})," library."]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-tsx",children:"import React from 'react';\nimport {APIProvider, Map} from '@vis.gl/react-google-maps';\nimport DeckGL from '@deck.gl/react';\nimport {ScatterplotLayer} from '@deck.gl/layers';\n\nfunction App() {\n  const layers = [\n    new ScatterplotLayer({\n      id: 'deckgl-circle',\n      data: [\n        {position: [0.45, 51.47]}\n      ],\n      getPosition: d => d.position,\n      getFillColor: [255, 0, 0, 100],\n      getRadius: 1000\n    })\n  ];\n\n  return <APIProvider apiKey=\"<google_maps_api_key>\">\n    <DeckGL\n      initialViewState={{\n        longitude: 0.45,\n        latitude: 51.47,\n        zoom: 11\n      }}\n      controller\n      layers={layers}\n    >\n      <Map mapId=\"<google_maps_id>\" />\n    </DeckGL>\n  </APIProvider>;\n}\n"})}),"\n",(0,o.jsx)(a.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,o.jsx)(a.h3,{id:"react-google-maps",children:"react-google-maps"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"https://visgl.github.io/react-google-maps/",children:"@visgl/react-google-maps"})," is a React wrapper around Google Maps JavaScript API maintained by the vis.gl community. If you'd like to use deck.gl together with Google Maps and React, this library is the recommended companion."]}),"\n",(0,o.jsxs)(a.p,{children:["When you choose the interleaved or overlaid option, the ",(0,o.jsx)(a.code,{children:"@visgl/react-google-maps"})," ",(0,o.jsx)(a.a,{href:"https://visgl.github.io/react-google-maps/docs/api-reference/components/map",children:"Map"})," React component acts as the root component, and ",(0,o.jsx)(a.a,{href:"/deck.gl/docs/api-reference/google-maps/google-maps-overlay",children:"GoogleMapsOverlay"})," is used with a ",(0,o.jsx)(a.code,{children:"useMemo"})," hook."]}),"\n",(0,o.jsxs)(a.p,{children:["When you choose the reverse-controlled option, the ",(0,o.jsx)(a.code,{children:"DeckGL"})," React component acts as the root component, and the ",(0,o.jsx)(a.code,{children:"@visgl/react-google-maps"})," ",(0,o.jsx)(a.a,{href:"https://visgl.github.io/react-google-maps/docs/api-reference/components/map",children:"Map"})," is a child. In this case, ",(0,o.jsx)(a.code,{children:"Map"})," will automatically interpret the deck.gl view state (i.e. latitude, longitude, zoom etc), so that deck.gl layers will render as a synchronized geospatial overlay over the underlying map."]}),"\n",(0,o.jsx)(a.h3,{id:"google-maps-platform-api-key",children:"Google Maps Platform API key"}),"\n",(0,o.jsxs)(a.p,{children:["Note that to use deck.gl with the Google's basemap, you must load the Maps JavaScript API using a valid API key. For more information on getting an API key, see the ",(0,o.jsx)(a.a,{href:"https://developers.google.com/maps/documentation/javascript/get-api-key",children:"Google Maps Platform API key documentation"})," for the Maps JavaScript API."]}),"\n",(0,o.jsxs)(a.p,{children:["If you are using ",(0,o.jsx)(a.code,{children:"@visgl/react-google-maps"}),", supply the API key to the ",(0,o.jsx)(a.code,{children:"APIProvider"})," and wrap it around all components that should have access to the Google Maps API."]})]})}function g(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},19365:(e,a,t)=>{t.d(a,{A:()=>l});t(96540);var r=t(34164);const o={tabItem:"tabItem_Ymn6"};var n=t(74848);function l(e){let{children:a,hidden:t,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:t,children:a})}},11470:(e,a,t)=>{t.d(a,{A:()=>k});var r=t(96540),o=t(34164),n=t(23104),l=t(56347),s=t(205),i=t(57485),c=t(31682),d=t(70679);function p(e){var a,t;return null!=(a=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}function u(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=a?a:function(e){return p(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:o}}=e;return{value:a,label:t,attributes:r,default:o}}))}(t);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function g(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const o=(0,l.W6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:t});return[(0,i.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(o.location.search);a.set(n,e),o.replace(Object.assign({},o.location,{search:a.toString()}))}),[n,o])]}function m(e){const{defaultValue:a,queryString:t=!1,groupId:o}=e,n=u(e),[l,i]=(0,r.useState)((()=>function(e){var a;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(a=r.find((e=>e.default)))?a:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:a,tabValues:n}))),[c,p]=h({queryString:t,groupId:o}),[m,v]=function(e){let{groupId:a}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(a),[o,n]=(0,d.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:o}),f=(()=>{const e=null!=c?c:m;return g({value:e,tabValues:n})?e:null})();(0,s.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:n}))throw new Error("Can't select invalid tab value="+e);i(e),p(e),v(e)}),[p,v,n]),tabValues:n}}var v=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function y(e){let{className:a,block:t,selectedValue:r,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),d=e=>{const a=e.currentTarget,t=i.indexOf(a),o=s[t].value;o!==r&&(c(a),l(o))},p=e=>{var a;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const a=i.indexOf(e.currentTarget)+1;t=null!=(r=i[a])?r:i[0];break}case"ArrowLeft":{var o;const a=i.indexOf(e.currentTarget)-1;t=null!=(o=i[a])?o:i[i.length-1];break}}null==(a=t)||a.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},a),children:s.map((e=>{let{value:a,label:t,attributes:n}=e;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>i.push(e),onKeyDown:p,onClick:d},n,{className:(0,o.A)("tabs__item",f.tabItem,null==n?void 0:n.className,{"tabs__item--active":r===a}),children:null!=t?t:a}),a)}))})}function b(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function j(e){const a=m(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,x.jsx)(y,Object.assign({},a,e)),(0,x.jsx)(b,Object.assign({},a,e))]})}function k(e){const a=(0,v.A)();return(0,x.jsx)(j,Object.assign({},e,{children:p(e.children)}),String(a))}},28453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>s});var r=t(96540);const o={},n=r.createContext(o);function l(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);