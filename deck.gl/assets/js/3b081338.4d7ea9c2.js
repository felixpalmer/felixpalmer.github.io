"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2904],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=l,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85907:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(83117),l=(a(67294),a(3905));const r={},i="Property Types",o={unversionedId:"developer-guide/custom-layers/prop-types",id:"developer-guide/custom-layers/prop-types",title:"Property Types",description:"This article documents the system that deck.gl offers to provide extra type annotations for layer properties.",source:"@site/../docs/developer-guide/custom-layers/prop-types.md",sourceDirName:"developer-guide/custom-layers",slug:"/developer-guide/custom-layers/prop-types",permalink:"/deck.gl/docs/developer-guide/custom-layers/prop-types",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/custom-layers/prop-types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Primitive Layers",permalink:"/deck.gl/docs/developer-guide/custom-layers/primitive-layers"},next:{title:"Attribute Management",permalink:"/deck.gl/docs/developer-guide/custom-layers/attribute-management"}},p={},s=[{value:"Declaring Layer Properties",id:"declaring-layer-properties",level:2},{value:"Property Types",id:"property-types-1",level:2},{value:"Built-in Types",id:"built-in-types",level:3},{value:"<code>boolean</code>",id:"boolean",level:5},{value:"<code>number</code>",id:"number",level:5},{value:"<code>color</code>",id:"color",level:5},{value:"<code>image</code>",id:"image",level:5},{value:"<code>array</code>",id:"array",level:5},{value:"<code>object</code>",id:"object",level:5},{value:"<code>accessor</code>",id:"accessor",level:5},{value:"<code>function</code>",id:"function",level:5},{value:"Prop Types and Performance",id:"prop-types-and-performance",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"property-types"},"Property Types"),(0,l.kt)("p",null,"This article documents the system that deck.gl offers to provide extra type annotations for layer properties."),(0,l.kt)("p",null,"A number of deck.gl features are enabled by rich descriptions of the types of the properties in a layer:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Asynchronous props (e.g. loading layer data from an URL)"),(0,l.kt)("li",{parentName:"ul"},"Type checking (during development)"),(0,l.kt)("li",{parentName:"ul"},'Improve render performance, see "Prop Types and Performance" section below'),(0,l.kt)("li",{parentName:"ul"},"Transitions and Animation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Reflection_%28computer_programming%29"},"Reflection")," (e.g. dynamically creating UI controls for layer props)")),(0,l.kt)("h2",{id:"declaring-layer-properties"},"Declaring Layer Properties"),(0,l.kt)("p",null,"A layer class may supply a static member ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultProps")," that defines its default property types and values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {Layer} from 'deck.gl';\n\nclass MyLayer extends Layer {\n  // implementation\n}\n\nMyLayer.defaultProps = {\n  texture: {type: 'object', value: null, async: true},\n  strokeOpacity: {type: 'number', value: 1, min: 0, max: 1},\n  strokeColor: {type: 'color', value: [255, 0, 0]},\n  getRadius: {type: 'accessor', value: d => d.radius}\n};\n")),(0,l.kt)("p",null,"When the user construct this layer, the props are resolved as such:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const layer = new MyLayer({id: 'my-layer', strokeOpacity: 0.5})\n/**\n  layer.props:\n  {\n    texture: null,\n    strokeOpacity: 0.5,\n    strokeColor: [255, 0, 0],\n    getRadius: d => d.radius,\n    // other default base Layer props\n  }\n */\n")),(0,l.kt)("h2",{id:"property-types-1"},"Property Types"),(0,l.kt)("p",null,"The property types system enables layers to opt-in to specifying types, and also allows a certain amount of type auto-deduction to happen based on existing default values for layers that do not opt in."),(0,l.kt)("p",null,"Each prop in ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultProps")," may be an object in the following shape:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," (string, required)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," (any, required) - the default value if this prop is not supplied"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"async")," (boolean, optional) - if ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", the prop can either be a ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise")," that resolves to its actual value, or an url string (loaded using the base Layer's ",(0,l.kt)("a",{parentName:"li",href:"/deck.gl/docs/api-reference/core/layer"},"fetch")," prop)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"transform")," (function, optional) - transforms an asynchronously loaded value and returns a new form. Receives the following arguments:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," - the new value of this prop"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"propType")," - this prop type definition"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"layer")," - the owner of this prop"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"release")," (function, optional) - release a transformed value when it's no longer in use. Receives the following arguments:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," - the old value of this prop"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"propType")," - this prop type definition"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"layer")," - the owner of this prop"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"validate")," (function, optional) - returns ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," if the value is valid. Validation of layer props is only invoked in debug mode. This function is automatically populated if the prop has a built-in type. Receives the following arguments:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," - the value to be validated"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"propType")," - this prop type definition"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"equal")," (function, optional) - returns ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," if the two prop values should be considered equal. Comparison of layer props is invoked during layer update and the result is passed to ",(0,l.kt)("inlineCode",{parentName:"li"},"changeFlags.propsChanged"),". This function is automatically populated if the prop has a built-in type. Receives the following arguments:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," - the new value of this prop"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"oldValue")," - the previous value of this prop"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"propType")," - this prop type definition"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deprecatedFor")," (string|array, optional) - mark this prop as deprecated. The value is the new prop name(s) that this prop has been deprecated for. If the old prop is supplied instead of the new one, its value will be transferred to the new prop. The user will get a warning about the deprecation."),(0,l.kt)("li",{parentName:"ul"},"Any additional options, see individual types below.")),(0,l.kt)("h3",{id:"built-in-types"},"Built-in Types"),(0,l.kt)("h5",{id:"boolean"},(0,l.kt)("inlineCode",{parentName:"h5"},"boolean")),(0,l.kt)("p",null,"Any value."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"validate"),": always pass"),(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"equal"),": compared by truthiness")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"MyLayerClass.defaultProps = {\n  // explicit\n  fill: {type: 'boolean', value: false}\n  // inferred\n  fill: false\n}\n")),(0,l.kt)("h5",{id:"number"},(0,l.kt)("inlineCode",{parentName:"h5"},"number")),(0,l.kt)("p",null,"A numeric value."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Options:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"min")," (number, optional) - the minimum allowed value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max")," (number, optional) - the maximum allowed value"))),(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"validate"),": value is finite and within bounds (if specified)"),(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"equal"),": strict equal")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"MyLayerClass.defaultProps = {\n  // explicit, with bounds\n  radiusScale: {type: 'number', value: 1, min: 0}\n  // inferred, no bounds\n  radiusScale: 1\n}\n")),(0,l.kt)("h5",{id:"color"},(0,l.kt)("inlineCode",{parentName:"h5"},"color")),(0,l.kt)("p",null,"A RGBA color."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"validate"),": value is an array of 3 or 4 numbers"),(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"equal"),": deep equal")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"MyLayerClass.defaultProps = {\n  // must be explicit\n  fillColor: {type: 'color', value: [255, 204, 0]}\n}\n")),(0,l.kt)("h5",{id:"image"},(0,l.kt)("inlineCode",{parentName:"h5"},"image")),(0,l.kt)("p",null,"One of: URL string, luma.gl ",(0,l.kt)("a",{parentName:"p",href:"https://luma.gl/docs/api-reference/core/resources/texture"},"Texture")," object, ",(0,l.kt)("inlineCode",{parentName:"p"},"Image"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"HTMLCanvasElement"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"HTMLVideoElement"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ImageBitmap")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"ImageData"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Options:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"parameters")," (object, optional) - custom ",(0,l.kt)("a",{parentName:"li",href:"https://luma.gl/docs/api-reference/core/resources/sampler#samplerprops"},"texture parameters")," of the texture. If not specified, the following defaults are used:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  minFilter: 'linear',\n  magFilter: 'linear',\n  mipmapFilter: 'linear',\n  addressModeU: 'clamp-to-edge',\n  addressModeV: 'clamp-to-edge'\n}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Default ",(0,l.kt)("inlineCode",{parentName:"p"},"transform"),": converts to a ",(0,l.kt)("inlineCode",{parentName:"p"},"Texture2D")," object"))),(0,l.kt)("h5",{id:"array"},(0,l.kt)("inlineCode",{parentName:"h5"},"array")),(0,l.kt)("p",null,"An array of objects."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Options:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"optional")," (boolean, optional) - accept ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),". Default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ignore")," (boolean, optional) - if ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", prop comparison is disabled. Default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"compare")," (boolean|number, optional) - compare deeply during prop comparison. Default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". If a number is supplied, indicates the maximum depth to deep-compare, where 0 is shallow comparison and -1 is infinite depth. ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."))),(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"validate"),": value is an array"),(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"equal"),": shallow equal if ",(0,l.kt)("inlineCode",{parentName:"li"},"compare: false"),", otherwise deep equal")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"MyLayerClass.defaultProps = {\n  // explicit\n  coordinateOrigin: {type: 'array', value: [0, 0, 0], compare: true}\n  // inferred\n  coordinateOrigin: [0, 0, 0]\n}\n")),(0,l.kt)("h5",{id:"object"},(0,l.kt)("inlineCode",{parentName:"h5"},"object")),(0,l.kt)("p",null,"An arbitrary object."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Options:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"optional")," (boolean, optional) - accept ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),". Default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ignore")," (boolean, optional) - if ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", prop comparison is disabled. Default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"compare")," (boolean|number, optional) - compare deeply during prop comparison. Default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". If a number is supplied, indicates the maximum depth to deep-compare, where 0 is shallow comparison and -1 is infinite depth. ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."))),(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"equal"),": shallow equal if ",(0,l.kt)("inlineCode",{parentName:"li"},"compare: false"),", otherwise deep equal")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"MyLayerClass.defaultProps = {\n  // explicit\n  parameters: {type: 'object', value: {}, compare: 2}\n  // inferred\n  loadOptions: {}\n}\n")),(0,l.kt)("h5",{id:"accessor"},(0,l.kt)("inlineCode",{parentName:"h5"},"accessor")),(0,l.kt)("p",null,"An accessor used to update shader attributes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"validate"),": value is either a function or the same type as the default value"),(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"equal"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," if function, otherwise deep equal")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"MyLayerClass.defaultProps = {\n  // must be explicit\n  getColor: {type: 'accessor', value: [255, 255, 255]}\n}\n")),(0,l.kt)("h5",{id:"function"},(0,l.kt)("inlineCode",{parentName:"h5"},"function")),(0,l.kt)("p",null,"A function."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Options:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"optional")," (boolean, optional) - accept ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),". Default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ignore")," (boolean, optional) - if ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", prop comparison is disabled. Default ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"validate"),": value is a function"),(0,l.kt)("li",{parentName:"ul"},"Default ",(0,l.kt)("inlineCode",{parentName:"li"},"equal"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," if ",(0,l.kt)("inlineCode",{parentName:"li"},"ignore: true"),", otherwise strict equal")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"MyLayerClass.defaultProps = {\n  // explicit\n  sizeScale: {type: 'function', value: x => Math.sqrt(x), ignore: false}\n  // inferred\n  sizeScale: x => Math.sqrt(x)\n}\n")),(0,l.kt)("h2",{id:"prop-types-and-performance"},"Prop Types and Performance"),(0,l.kt)("p",null,"The performance of a deck.gl application can be greatly improved by limiting the frequency of layer updates. Consider the following app:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nfunction App() {\n  const layers = [\n    new GeoJsonLayer({\n      id: 'geojson',\n      data: DATA_URL,\n      extruded: true,\n      wireframe: true,\n      getElevation: f => ELEVATION_SCALE(f.properties.population),\n      getFillColor: f => COLOR_SCALE(f.properties.income),\n      getLineColor: [255, 255, 255]\n    })\n  ];\n\n  return (\n    <DeckGL\n      layers={layers}\n      initialViewState={{\n        latitude: 49.254,\n        longitude: -123.13,\n        zoom: 11\n      }}\n      controller={true}\n    />\n  );\n}\n")),(0,l.kt)("p",null,"Each time the user interacts with the viewport, the app state is updated, and ",(0,l.kt)("inlineCode",{parentName:"p"},"render()")," is called. Because ",(0,l.kt)("inlineCode",{parentName:"p"},"getElevation"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"getFillColor")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"getLineColor")," are functions and arrays defined inline, they have changed from the previous render."),(0,l.kt)("p",null,"Usually, any prop change results in updating a layer, that is, recomputing its internal states. Updating a layer could be expensive. In GeoJsonLayer's case, it creates ScatterplotLayer, PolygonLayer and PathLayer, and those layers also need to be updated recursively."),(0,l.kt)("p",null,"In reality, we do not want to update GeoJsonLayer, because no layer props changed from the user's perspective. In GeoJsonLayer, these props are declared as such:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const defaultProps = {\n    ...\n    getElevation: {type: 'accessor', value: 1000},\n    getFillColor: {type: 'accessor', value: [0, 0, 0, 255]},\n    getLineColor: {type: 'accessor', value: [0, 0, 0, 255]}\n}\n")),(0,l.kt)("p",null,"The default comparator of the ",(0,l.kt)("inlineCode",{parentName:"p"},"access")," prop type ignores shallow changes in functions. As a result, deck.gl decides that no props have changed between the two renders, and the GeoJsonLayer does not need to be updated."))}m.isMDXComponent=!0}}]);