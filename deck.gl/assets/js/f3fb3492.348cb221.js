"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},63451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(83117),i=(n(67294),n(3905));const o={},a="BrushingExtension",s={unversionedId:"api-reference/extensions/brushing-extension",id:"api-reference/extensions/brushing-extension",title:"BrushingExtension",description:"The BrushingExtension adds GPU-based data brushing functionalities to layers. It allows the layer to show/hide objects based on the current pointer position.",source:"@site/../docs/api-reference/extensions/brushing-extension.md",sourceDirName:"api-reference/extensions",slug:"/api-reference/extensions/brushing-extension",permalink:"/deck.gl/docs/api-reference/extensions/brushing-extension",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/extensions/brushing-extension.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@deck.gl/extensions",permalink:"/deck.gl/docs/api-reference/extensions/overview"},next:{title:"ClipExtension",permalink:"/deck.gl/docs/api-reference/extensions/clip-extension"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Layer Properties",id:"layer-properties",level:2},{value:"<code>brushingRadius</code> (Number)",id:"brushingradius",level:5},{value:"<code>brushingEnabled</code> (Boolean, optional)",id:"brushingenabled",level:5},{value:"<code>brushingTarget</code> (Enum, optional)",id:"brushingtarget",level:5},{value:"<code>getBrushingTarget</code> (Function, optional)",id:"getbrushingtarget",level:5},{value:"Source",id:"source",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"brushingextension"},"BrushingExtension"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"BrushingExtension")," adds GPU-based data brushing functionalities to layers. It allows the layer to show/hide objects based on the current pointer position."),(0,i.kt)("div",{style:{position:"relative",height:450}}),(0,i.kt)("div",{style:{position:"absolute",transform:"translateY(-450px)",paddingLeft:"inherit",paddingRight:"inherit",left:0,right:0}},(0,i.kt)("iframe",{height:"450",style:{width:"100%"},scrolling:"no",title:"deck.gl BrushingExtension",src:"https://codepen.io/vis-gl/embed/NWbxdKP?height=450&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,i.kt)("a",{href:"https://codepen.io/vis-gl/pen/NWbxdKP"},"deck.gl BrushingExtension")," by vis.gl (",(0,i.kt)("a",{href:"https://codepen.io/vis-gl"},"@vis-gl"),") on ",(0,i.kt)("a",{href:"https://codepen.io"},"CodePen"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {ScatterplotLayer} from '@deck.gl/layers';\nimport {BrushingExtension} from '@deck.gl/extensions';\n\nconst layer = new ScatterplotLayer({\n  id: 'points',\n  data: POINTS,\n\n  // props from ScatterplotLayer\n  getPosition: d => d.position,\n  getRadius: d => d.radius,\n\n  // props added by BrushingExtension\n  brushingEnabled: true,\n  brushingRadius: 100000,\n\n  // Define extensions\n  extensions: [new BrushingExtension()]\n});\n")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To install the dependencies from NPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install deck.gl\n# or\nnpm install @deck.gl/core @deck.gl/layers @deck.gl/extensions\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {BrushingExtension} from '@deck.gl/extensions';\nnew BrushingExtension();\n")),(0,i.kt)("p",null,"To use pre-bundled scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/deck.gl@^7.0.0/dist.min.js"><\/script>\n\x3c!-- or --\x3e\n<script src="https://unpkg.com/@deck.gl/core@^7.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/layers@^7.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/extensions@^7.0.0/dist.min.js"><\/script>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"new deck.BrushingExtension();\n")),(0,i.kt)("h2",{id:"constructor"},"Constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"new BrushingExtension();\n")),(0,i.kt)("h2",{id:"layer-properties"},"Layer Properties"),(0,i.kt)("p",null,"When added to a layer via the ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," prop, the ",(0,i.kt)("inlineCode",{parentName:"p"},"BrushingExtension")," adds the following properties to the layer:"),(0,i.kt)("h5",{id:"brushingradius"},(0,i.kt)("inlineCode",{parentName:"h5"},"brushingRadius")," (Number)"),(0,i.kt)("p",null,"The brushing radius centered at the pointer, in meters. If a data object is within this circle, it is rendered; otherwise it is hidden."),(0,i.kt)("h5",{id:"brushingenabled"},(0,i.kt)("inlineCode",{parentName:"h5"},"brushingEnabled")," (Boolean, optional)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"))),(0,i.kt)("p",null,"Enable/disable brushing. If brushing is disabled, all objects are rendered."),(0,i.kt)("p",null,"Brushing is always disabled when the pointer leaves the current viewport."),(0,i.kt)("h5",{id:"brushingtarget"},(0,i.kt)("inlineCode",{parentName:"h5"},"brushingTarget")," (Enum, optional)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"source"))),(0,i.kt)("p",null,"The position used to filter each object by. One of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'source'"),": Use the primary position for each object. This can mean different things depending on the layer. It usually refers to the coordinates returned by ",(0,i.kt)("inlineCode",{parentName:"li"},"getPosition")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"getSourcePosition")," accessors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'target'"),": Use the secondary position for each object. This may not be available in some layers. It usually refers to the coordinates returned by ",(0,i.kt)("inlineCode",{parentName:"li"},"getTargetPosition")," accessors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'source_target'"),": Use both the primary position and secondary position for each object. Show objet if either is in brushing range."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'custom'"),": Some layers may not describe their data objects with one or two coordinates, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"PathLayer")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PolygonLayer"),". Use this option with the ",(0,i.kt)("inlineCode",{parentName:"li"},"getBrushingTarget")," prop to provide a custom position that each object should be filtered by.")),(0,i.kt)("h5",{id:"getbrushingtarget"},(0,i.kt)("inlineCode",{parentName:"h5"},"getBrushingTarget")," (",(0,i.kt)("a",{parentName:"h5",href:"/deck.gl/docs/developer-guide/using-layers#accessors"},"Function"),", optional)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"null"))),(0,i.kt)("p",null,"Called to retrieve an arbitrary position for each object that it will be filtered by. Returns an array ",(0,i.kt)("inlineCode",{parentName:"p"},"[x, y]"),". Only effective if ",(0,i.kt)("inlineCode",{parentName:"p"},"brushingTarget")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"custom"),"."),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/visgl/deck.gl/tree/master/modules/extensions/src/brushing"},"modules/extensions/src/brushing")))}d.isMDXComponent=!0}}]);