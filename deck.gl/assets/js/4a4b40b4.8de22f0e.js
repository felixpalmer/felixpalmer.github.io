"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8282],{97218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>r});const l=JSON.parse('{"id":"api-reference/widgets/fullscreen-widget","title":"FullscreenWidget","description":"This widget enlarges deck.gl to fill the full screen. Click the widget to enter or exit full screen.","source":"@site/../docs/api-reference/widgets/fullscreen-widget.md","sourceDirName":"api-reference/widgets","slug":"/api-reference/widgets/fullscreen-widget","permalink":"/deck.gl/docs/api-reference/widgets/fullscreen-widget","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/widgets/fullscreen-widget.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"CompassWidget","permalink":"/deck.gl/docs/api-reference/widgets/compass-widget"}}');var i=n(74848),s=n(28453);const d={},c="FullscreenWidget",o={},r=[{value:"Props",id:"props",level:2},{value:"<code>id</code> (string, optional)",id:"id",level:4},{value:"<code>placement</code> (string, optional)",id:"placement",level:4},{value:"<code>container</code> (HTMLElement, optional)",id:"container",level:4},{value:"<code>enterLabel</code> (string, optional)",id:"enterlabel",level:4},{value:"<code>exitLabel</code> (string, optional)",id:"exitlabel",level:4},{value:"<code>style</code> (object, optional)",id:"style",level:4},{value:"<code>className</code> (string, optional)",id:"classname",level:4}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"fullscreenwidget",children:"FullscreenWidget"})}),"\n",(0,i.jsx)(t.p,{children:"This widget enlarges deck.gl to fill the full screen. Click the widget to enter or exit full screen."}),"\n",(0,i.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(t.h4,{id:"id",children:[(0,i.jsx)(t.code,{children:"id"})," (string, optional)"]}),"\n",(0,i.jsxs)(t.p,{children:["Default: ",(0,i.jsx)(t.code,{children:"'fullscreen'"})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"id"})," must be unique among all your widgets at a given time. It's recommended to set ",(0,i.jsx)(t.code,{children:"id"})," explicitly. The ",(0,i.jsx)(t.code,{children:"id"})," is used to match widgets between updates, ensuring deck.gl can distinguish between them. A default ",(0,i.jsx)(t.code,{children:"id"})," is assigned based on widget type, so if you have multiple widgets of the same type (e.g., two ",(0,i.jsx)(t.code,{children:"compass"})," widgets), you need to provide a custom ",(0,i.jsx)(t.code,{children:"id"})," for at least one."]}),"\n",(0,i.jsxs)(t.h4,{id:"placement",children:[(0,i.jsx)(t.code,{children:"placement"})," (string, optional)"]}),"\n",(0,i.jsxs)(t.p,{children:["Default: ",(0,i.jsx)(t.code,{children:"'top-left'"})]}),"\n",(0,i.jsxs)(t.p,{children:["Widget position within the view relative to the map container. Valid options are ",(0,i.jsx)(t.code,{children:"top-left"}),", ",(0,i.jsx)(t.code,{children:"top-right"}),", ",(0,i.jsx)(t.code,{children:"bottom-left"}),", ",(0,i.jsx)(t.code,{children:"bottom-right"}),", or ",(0,i.jsx)(t.code,{children:"fill"}),"."]}),"\n",(0,i.jsxs)(t.h4,{id:"container",children:[(0,i.jsx)(t.code,{children:"container"})," (HTMLElement, optional)"]}),"\n",(0,i.jsxs)(t.p,{children:["Default: ",(0,i.jsx)(t.code,{children:"undefined"})]}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen#Compatible_elements",children:"compatible DOM element"})," which should be made full screen. By default, the map container element will be made full screen."]}),"\n",(0,i.jsxs)(t.h4,{id:"enterlabel",children:[(0,i.jsx)(t.code,{children:"enterLabel"})," (string, optional)"]}),"\n",(0,i.jsx)(t.p,{children:"Tooltip message displayed while hovering a mouse over the widget when out of fullscreen."}),"\n",(0,i.jsxs)(t.p,{children:["Default: ",(0,i.jsx)(t.code,{children:"'Enter Fullscreen'"})]}),"\n",(0,i.jsxs)(t.h4,{id:"exitlabel",children:[(0,i.jsx)(t.code,{children:"exitLabel"})," (string, optional)"]}),"\n",(0,i.jsx)(t.p,{children:"Tooltip message displayed while hovering a mouse over the widget when fullscreen."}),"\n",(0,i.jsxs)(t.p,{children:["Default: ",(0,i.jsx)(t.code,{children:"'Exit Fullscreen'"})]}),"\n",(0,i.jsxs)(t.h4,{id:"style",children:[(0,i.jsx)(t.code,{children:"style"})," (object, optional)"]}),"\n",(0,i.jsxs)(t.p,{children:["Default: ",(0,i.jsx)(t.code,{children:"{}"})]}),"\n",(0,i.jsx)(t.p,{children:"Additional CSS styles for the canvas."}),"\n",(0,i.jsxs)(t.h4,{id:"classname",children:[(0,i.jsx)(t.code,{children:"className"})," (string, optional)"]}),"\n",(0,i.jsxs)(t.p,{children:["Default: ",(0,i.jsx)(t.code,{children:"undefined"})]}),"\n",(0,i.jsxs)(t.p,{children:["Class name to attach to the widget element. The element has the default class name of ",(0,i.jsx)(t.code,{children:"deck-widget deck-fullscreen-widget"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var l=n(96540);const i={},s=l.createContext(i);function d(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);