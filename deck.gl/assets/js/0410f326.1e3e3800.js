"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[397],{78521:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"api-reference/test-utils/snapshot-test-runner","title":"SnapshotTestRunner","description":"Client-side utility for browser-based deck.gl render tests.","source":"@site/../docs/api-reference/test-utils/snapshot-test-runner.md","sourceDirName":"api-reference/test-utils","slug":"/api-reference/test-utils/snapshot-test-runner","permalink":"/deck.gl/docs/api-reference/test-utils/snapshot-test-runner","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/test-utils/snapshot-test-runner.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"testLayer","permalink":"/deck.gl/docs/api-reference/test-utils/test-layer"},"next":{"title":"@deck.gl/widgets","permalink":"/deck.gl/docs/api-reference/widgets/overview"}}');var r=s(74848),i=s(28453);const o={},c="SnapshotTestRunner",l={},d=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"constructor(props: Object)",id:"constructorprops-object",level:3},{value:"add(testCase: Array|object)",id:"addtestcase-arrayobject",level:3},{value:"run(options: Object)",id:"runoptions-object",level:3},{value:"Members",id:"members",level:2},{value:"isHeadless",id:"isheadless",level:3},{value:"Image Diff Options",id:"image-diff-options",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"snapshottestrunner",children:"SnapshotTestRunner"})}),"\n",(0,r.jsx)(n.p,{children:"Client-side utility for browser-based deck.gl render tests."}),"\n",(0,r.jsxs)(n.p,{children:["This class is intended to be used with ",(0,r.jsx)(n.code,{children:"BrowserTestDriver"})," from ",(0,r.jsx)(n.code,{children:"@probe.gl/test-utils"}),". Together they support the following workflow:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Launch a Puppeteer instance (headless or non-headless) to run a test application"}),"\n",(0,r.jsx)(n.li,{children:"In the test application, create a deck.gl canvas."}),"\n",(0,r.jsx)(n.li,{children:'For each test case, render a set of deck props including views and layers, take a screenshot, and perform pixel-diffing with a pre-defined "golden image". Report the matching result.'}),"\n",(0,r.jsx)(n.li,{children:"Proceed to the next test case until done."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"In your node.js start script:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// This is the script that runs in Node.js and starts the browser\nconst {BrowserTestDriver} = require('@probe.gl/test-utils');\nnew BrowserTestDriver().run({\n  server: {\n    // Bundles and serves the browser script\n    command: 'webpack-dev-server',\n    arguments: ['--env.render-test']\n  },\n  headless: true\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"In your script that is run on the browser:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const {SnapshotTestRunner} = require('@deck.gl/test-utils');\nconst {ScatterplotLayer} = require('@deck.gl/layers');\n\nconst TEST_CASES = [\n  {\n    name: 'ScatterplotLayer',\n    // `Deck` props\n    viewState: {\n      longitude: -122.4,\n      latitude: 37.8,\n      zoom: 12,\n      pitch: 20\n    },\n    layers: [\n      new ScatterplotLayer({\n        id: 'circles',\n        data: './data/scatterplot.json',\n        getPosition: d => d.position,\n        getRadius: d => d.size,\n        getFillColor: [255, 0, 0]\n      })\n    ],\n    // `done` must be called when ready for screenshot and compare\n    onAfterRender: ({layers, done}) => {\n      if (layers[0].props.data.length) {\n        // data is loaded\n        done();\n      }\n    },\n    // Target rendering result\n    goldenImage: './test/render/golden-images/scatterplot.png'\n  }\n];\n\nnew TestRender({width: 800, height: 600})\n  .add(TEST_CASES)\n  .run({\n    onTestFail: window.browserTestDriver_fail\n  })\n  .then(window.browserTestDriver_finish);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"constructorprops-object",children:"constructor(props: Object)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"new SnapshotTestRunner(deckProps)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create a SnapshotTestRunner instance. The ",(0,r.jsx)(n.code,{children:"deckProps"})," argument is passed to the ",(0,r.jsx)(n.a,{href:"/deck.gl/docs/api-reference/core/deck",children:"Deck"})," constructor."]}),"\n",(0,r.jsx)(n.h3,{id:"addtestcase-arrayobject",children:"add(testCase: Array|object)"}),"\n",(0,r.jsx)(n.p,{children:"Add one or a list of test cases. Each test case may contain the following fields:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"})," (string) - name of the test case."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"goldenImage"})," (string) - path to the golden image, relative to the root where the node script is executed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"timeout"})," (number) - time to wait for this test case to resolve (by calling the ",(0,r.jsx)(n.code,{children:"done"})," callback) before aborting, in milliseconds. If not provided, fallback to the shared option that is passed to ",(0,r.jsx)(n.code,{children:"SnapshotTestRunner.run"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"imageDiffOptions"}),' (object, optional) - image diffing options for this test case. See "Image Diff Options" section below.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onBeforeRender"})," (Function, optional) - callback before each time deck rerenders. Receives the following arguments:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"deck"})," (Deck) - the ",(0,r.jsx)(n.code,{children:"Deck"})," instance."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"layers"})," (Layer[]) - the list of layers that were rendered."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onAfterRender"})," (Function, optional) - callback after each time deck rerenders. Receives the following arguments:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"deck"})," (Deck) - the ",(0,r.jsx)(n.code,{children:"Deck"})," instance."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"layers"})," (Layer[]) - the list of layers that were rendered."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"done"})," (Function) - must be called when the test case is done rendering and ready for screen capture and comparison."]}),"\n"]}),"\n","The default ",(0,r.jsx)(n.code,{children:"onAfterRender"})," calls ",(0,r.jsx)(n.code,{children:"done"})," immediately, i.e. takes screenshot as soon as the canvas is rendered for the first time. If some resources are loaded asynchronously, you may need to provide an implementation of this callback to check whether all layers are fully loaded."]}),"\n",(0,r.jsxs)(n.li,{children:["Any other props that ",(0,r.jsx)(n.a,{href:"/deck.gl/docs/api-reference/core/deck",children:"Deck.setProps"})," accepts."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"runoptions-object",children:"run(options: Object)"}),"\n",(0,r.jsx)(n.p,{children:"Run all test cases."}),"\n",(0,r.jsx)(n.p,{children:"Options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"timeout"})," (number) - time to wait for each test case to resolve (by calling the ",(0,r.jsx)(n.code,{children:"done"})," callback) before aborting, in milliseconds. Default ",(0,r.jsx)(n.code,{children:"2000"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"imageDiffOptions"})," (object) - image diffing options for all test cases. This will be overridden if a test case defines its own ",(0,r.jsx)(n.code,{children:"imageDiffOptions"}),'. See "Image Diff Options" section below.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onTestStart"})," (Function) - callback when a test starts. Receives the current test case. Default logs the test name to console."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onTestPass"})," (Function) - callback when a test passes. Receives the current test case and the diffing result. Default logs the pixel matching percentage to console."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onTestFail"})," (Function) - callback when a test fails, either because the matching rate is below threshold or a critical error. Receives the current test case. Default logs the error message or the pixel matching percentage to console."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Returns: a ",(0,r.jsx)(n.code,{children:"Promise"})," that resolves when all test cases are done."]}),"\n",(0,r.jsx)(n.h2,{id:"members",children:"Members"}),"\n",(0,r.jsx)(n.h3,{id:"isheadless",children:"isHeadless"}),"\n",(0,r.jsx)(n.p,{children:"Whether the test is being run in headless mode. In headless mode, Chromium uses software render which behaves slightly differently from non-headless. Image diffing tolerance may need to be adjusted accordingly."}),"\n",(0,r.jsx)(n.h2,{id:"image-diff-options",children:"Image Diff Options"}),"\n",(0,r.jsxs)(n.p,{children:["The test renderer and each test case may choose to override the default image diffing options. The following options from ",(0,r.jsx)(n.a,{href:"https://github.com/uber-web/probe.gl/blob/master/docs/modules/test-utils/browser-test-driver.md#browsertestdriver_captureanddiffscreenoptions--object",children:"captureAndDiffScreen"})," are supported:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"tolerance"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"threshold"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"includeAA"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"includeEmpty"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"createDiffImage"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"saveOnFail"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"saveAs"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);