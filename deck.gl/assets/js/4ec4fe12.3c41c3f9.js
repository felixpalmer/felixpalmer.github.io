"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(n),s=o,f=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=s;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:o,a[1]=r;for(var d=2;d<l;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=n(83117),o=(n(67294),n(3905));const l={},a="ZoomWidget",r={unversionedId:"api-reference/widgets/zoom-widget",id:"api-reference/widgets/zoom-widget",title:"ZoomWidget",description:"This widget controls the zoom level of a deck.gl view. Click '+' to zoom in by 1, click '-' to zoom out by 1. Supports controlling Map and Globe views.",source:"@site/../docs/api-reference/widgets/zoom-widget.md",sourceDirName:"api-reference/widgets",slug:"/api-reference/widgets/zoom-widget",permalink:"/deck.gl/docs/api-reference/widgets/zoom-widget",draft:!1,editUrl:"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/widgets/zoom-widget.md",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"Props",id:"props",level:2},{value:"<code>id</code> (String)",id:"id",level:3},{value:"<code>viewId</code> (String, optional)",id:"viewid",level:3},{value:"<code>placement</code> (String, optional)",id:"placement",level:3},{value:"<code>orientation</code> (String, optional)",id:"orientation",level:3},{value:"<code>container</code> (HTMLElement, optional)",id:"container",level:3},{value:"<code>zoomInLabel</code> (String, optional)",id:"zoominlabel",level:3},{value:"<code>zoomOutLabel</code> (String, optional)",id:"zoomoutlabel",level:3},{value:"<code>transitionDuration</code> (Number, optional)",id:"transitionduration",level:3},{value:"<code>style</code> (Object, optional)",id:"style",level:3},{value:"<code>className</code> (String, optional)",id:"classname",level:3}],c={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zoomwidget"},"ZoomWidget"),(0,o.kt)("p",null,"This widget controls the zoom level of a deck.gl view. Click '+' to zoom in by 1, click '-' to zoom out by 1. Supports controlling Map and Globe views."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h3"},"id")," (String)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'zoom'")),(0,o.kt)("p",null,"Unique identifier of the widget."),(0,o.kt)("h3",{id:"viewid"},(0,o.kt)("inlineCode",{parentName:"h3"},"viewId")," (String, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null")),(0,o.kt)("p",null,"The widget is attached to the view identified by this ",(0,o.kt)("inlineCode",{parentName:"p"},"viewId"),". When assigned, the widget is placed within the specified view, and  exclusively interacts with it. Required when using ",(0,o.kt)("a",{parentName:"p",href:"/deck.gl/docs/developer-guide/views#using-multiple-views"},"multiple views"),"."),(0,o.kt)("h3",{id:"placement"},(0,o.kt)("inlineCode",{parentName:"h3"},"placement")," (String, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'top-left'")),(0,o.kt)("p",null,"Widget position within the view relative to the map container. Valid options are ",(0,o.kt)("inlineCode",{parentName:"p"},"top-left"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"top-right"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom-left"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom-right"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"fill"),"."),(0,o.kt)("h3",{id:"orientation"},(0,o.kt)("inlineCode",{parentName:"h3"},"orientation")," (String, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'vertical'")),(0,o.kt)("p",null,"Widget button orientation. Valid options are ",(0,o.kt)("inlineCode",{parentName:"p"},"vertical")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"horizontal"),"."),(0,o.kt)("h3",{id:"container"},(0,o.kt)("inlineCode",{parentName:"h3"},"container")," (HTMLElement, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen#Compatible_elements"},"compatible DOM element")," which should be made full screen. By default, the map container element will be made full screen."),(0,o.kt)("h3",{id:"zoominlabel"},(0,o.kt)("inlineCode",{parentName:"h3"},"zoomInLabel")," (String, optional)"),(0,o.kt)("p",null,"Tooltip message displayed while hovering a mouse over the zoom in button."),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'Zoom In'")),(0,o.kt)("h3",{id:"zoomoutlabel"},(0,o.kt)("inlineCode",{parentName:"h3"},"zoomOutLabel")," (String, optional)"),(0,o.kt)("p",null,"Tooltip message displayed while hovering a mouse over the zoom out button."),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'Zoom Out'")),(0,o.kt)("h3",{id:"transitionduration"},(0,o.kt)("inlineCode",{parentName:"h3"},"transitionDuration")," (Number, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"200")),(0,o.kt)("p",null,"Zoom transition duration in milliseconds."),(0,o.kt)("h3",{id:"style"},(0,o.kt)("inlineCode",{parentName:"h3"},"style")," (Object, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")),(0,o.kt)("p",null,"Additional CSS styles for the canvas."),(0,o.kt)("h3",{id:"classname"},(0,o.kt)("inlineCode",{parentName:"h3"},"className")," (String, optional)"),(0,o.kt)("p",null,"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("p",null,"Class name to attach to the widget element. The element has the default class name of ",(0,o.kt)("inlineCode",{parentName:"p"},"deck-widget deck-fullscreen-widget"),"."))}m.isMDXComponent=!0}}]);