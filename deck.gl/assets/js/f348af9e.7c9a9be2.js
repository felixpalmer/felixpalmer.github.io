"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8001],{42747:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api-reference/test-utils/overview","title":"@deck.gl/test-utils","description":"A set of utilities to facilitate testing deck.gl layers. Tests can be run:","source":"@site/../docs/api-reference/test-utils/overview.md","sourceDirName":"api-reference/test-utils","slug":"/api-reference/test-utils/overview","permalink":"/deck.gl/docs/api-reference/test-utils/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/test-utils/overview.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"DeckGL (React Component)","permalink":"/deck.gl/docs/api-reference/react/deckgl"},"next":{"title":"generateLayerTests","permalink":"/deck.gl/docs/api-reference/test-utils/generate-layer-tests"}}');var r=s(74848),i=s(28453);const a={},l="@deck.gl/test-utils",o={},c=[{value:"Installation",id:"installation",level:2},{value:"Layer Conformance Tests",id:"layer-conformance-tests",level:2},{value:"Rendering Tests",id:"rendering-tests",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"deckgltest-utils",children:"@deck.gl/test-utils"})}),"\n",(0,r.jsx)(t.p,{children:"A set of utilities to facilitate testing deck.gl layers. Tests can be run:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Completely in Node.js (lifecycle tests only)."}),"\n",(0,r.jsx)(t.li,{children:"Completely in the Browser (lifecycle and rendering tests)."}),"\n",(0,r.jsxs)(t.li,{children:["From Node in a controlled Browser instance (with ",(0,r.jsx)(t.a,{href:"https://uber-web.github.io/probe.gl",children:"probe.gl"}),"'s ",(0,r.jsx)(t.code,{children:"BrowserTestDriver"}),")."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:'The deck.gl test utilities are published as a separate npm module that is only intended to be used during development. Install it as as a "dev dependency" as follows:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev @deck.gl/test-utils\n# or\nyarn add -D @deck.gl/test-utils\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You typically want the major and minor version of ",(0,r.jsx)(t.code,{children:" @deck.gl/test-utils"})," to match the version of ",(0,r.jsx)(t.code,{children:"@deck.gl/core"})," that you are using. i.e. you want to use ",(0,r.jsx)(t.code,{children:"9.0.x"})," and ",(0,r.jsx)(t.code,{children:"9.0.y"})," together. Check and if necessary edit your ",(0,r.jsx)(t.code,{children:"package.json"})," to make sure things align."]}),"\n",(0,r.jsx)(t.h2,{id:"layer-conformance-tests",children:"Layer Conformance Tests"}),"\n",(0,r.jsx)(t.p,{children:"Layer conformance tests are designed to verify deck.gl that layers update their internal state correctly in response to various props and prop changes. The layer update test support includes test drivers to initialize a layer and then run a sequence of successive updates, with facilities for validating the layer after each change, and also provides functions to initialize, update and render layers in a test environment."}),"\n",(0,r.jsxs)(t.p,{children:['Note that internally in deck.gl, updates are handled by the deck.gl layer "lifecycle" and these tests are therefore also called "lifecycle tests". Lifecycle tests are less demanding of the WebGL2/WebGPU environment than rendering tests described below and are thus easily integrated in traditional Node.js unit test suites (e.g. based on ',(0,r.jsx)(t.code,{children:"tape"}),", ",(0,r.jsx)(t.code,{children:"jest"})," or similar unit test frameworks)."]}),"\n",(0,r.jsx)(t.h2,{id:"rendering-tests",children:"Rendering Tests"}),"\n",(0,r.jsxs)(t.p,{children:["Rendering tests involve creating a ",(0,r.jsx)(t.code,{children:"Deck"}),' instance with known props, capturing the pixel output of the canvas, and then comparing the result against a "golden image". Tools such as ',(0,r.jsx)(t.a,{href:"https://pptr.dev/",children:"puppeteer"})," and ",(0,r.jsx)(t.a,{href:"https://www.selenium.dev/",children:"Selenium"})," have extensive capabilities that allow programatical control of such a process."]}),"\n",(0,r.jsxs)(t.p,{children:["One of the core features of this module is to validate layers through rendering tests. This is supported through ",(0,r.jsx)(t.a,{href:"/deck.gl/docs/api-reference/test-utils/snapshot-test-runner",children:"SnapshotTestRunner"}),", which works with probe.gl's ",(0,r.jsx)(t.a,{href:"https://uber-web.github.io/probe.gl/docs/modules/test-utils/browser-test-driver",children:"BrowserTestDriver"})," (which uses Puppeteer) out of the box but can also work with a custom testing stack with some plumbing."]}),"\n",(0,r.jsx)(t.p,{children:"The current test utilities are focused on the testing of layers. To test the render output of an application that uses deck.gl, a common technique is to run a rendering test of the whole application using mock input."}),"\n",(0,r.jsx)(t.p,{children:"Future work might include running rendering tests directly in Node.js using a Node implementation of WebGPU."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);