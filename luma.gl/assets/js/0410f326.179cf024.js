/*! For license information please see 0410f326.179cf024.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[397],{1916:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(4848),r=s(8453);const i={},o="SnapshotTestRunner",c={id:"api-reference/test-utils/snapshot-test-runner",title:"SnapshotTestRunner",description:"Client-side utility for browser-based WebGL render tests.",source:"@site/../docs/api-reference/test-utils/snapshot-test-runner.md",sourceDirName:"api-reference/test-utils",slug:"/api-reference/test-utils/snapshot-test-runner",permalink:"/luma.gl/docs/api-reference/test-utils/snapshot-test-runner",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/test-utils/snapshot-test-runner.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/luma.gl/docs/api-reference/test-utils/"},next:{title:"@luma.gl/webgl",permalink:"/luma.gl/docs/api-reference/webgl/"}},l={},a=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"constructor(props: Object)",id:"constructorprops-object",level:3},{value:"add(testCase: Array|Object)",id:"addtestcase-arrayobject",level:3},{value:"run(options: Object)",id:"runoptions-object",level:3},{value:"Members",id:"members",level:2},{value:"isHeadless",id:"isheadless",level:3},{value:"Image Diff Options",id:"image-diff-options",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"snapshottestrunner",children:"SnapshotTestRunner"}),"\n",(0,t.jsx)(n.p,{children:"Client-side utility for browser-based WebGL render tests."}),"\n",(0,t.jsxs)(n.p,{children:["This class is intended to be used with ",(0,t.jsx)(n.code,{children:"BrowserTestDriver"})," from ",(0,t.jsx)(n.code,{children:"@probe.gl/test-utils"}),". Together they support the following workflow:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Launch a Puppeteer instance (headless or non-headless) to run a test application"}),"\n",(0,t.jsxs)(n.li,{children:["In the test application, create a canvas and ",(0,t.jsx)(n.code,{children:"WebGLContext"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For each test case, render something to the ",(0,t.jsx)(n.code,{children:"WebGLContext"}),', take a screenshot, and perform pixel-diffing with a pre-defined "golden image". Report the matching result.']}),"\n",(0,t.jsx)(n.li,{children:"Proceed to the next test case until done."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"In your node.js start script:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// This is the script that runs in Node.js and starts the browser\nconst {BrowserTestDriver} = require('@probe.gl/test-utils');\nnew BrowserTestDriver().run({\n  server: {\n    // Bundles and serves the browser script\n    command: 'webpack-dev-server',\n    arguments: ['--env.render-test']\n  },\n  headless: true\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"In your script that is run on the browser:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const {SnapshotTestRunner} = require('@luma.gl/test-utils');\nconst {Cube} = require('@luma.gl/engine');\n\nconst TEST_CASES = [\n  {\n    name: 'Render A Cube',\n    // `onRender` receives animation props from the AnimationLoop\n    onRender: ({gl, done}) => {\n      const model = new Cube(gl);\n      model.draw(...);\n      // ready for capture and diffing\n      done();\n    },\n    goldenImage: './test/render/golden-images/cube.png'\n  }\n];\n\nnew TestRender({width: 800, height: 600})\n  .add(TEST_CASES)\n  .run({\n    onTestFail: window.browserTestDriver_fail\n  })\n  .then(window.browserTestDriver_finish);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"constructorprops-object",children:"constructor(props: Object)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"new SnapshotTestRunner(props)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Create a SnapshotTestRunner instance. The ",(0,t.jsx)(n.code,{children:"props"})," argument is forwarded to the ",(0,t.jsx)(n.a,{href:"/docs/api-reference/engine/animation-loop",children:"AnimationLoop"})," constructor."]}),"\n",(0,t.jsx)(n.h3,{id:"addtestcase-arrayobject",children:"add(testCase: Array|Object)"}),"\n",(0,t.jsx)(n.p,{children:"Add one or a list of test cases. Each test case may contain the following fields:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"})," (String) - name of the test case."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"goldenImage"})," (String) - path to the golden image, relative to the root where the node script is executed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"timeout"})," (Number) - time to wait for this test case to resolve (by calling the ",(0,t.jsx)(n.code,{children:"done"})," callback) before aborting, in milliseconds. If not provided, fallback to the shared option that is passed to ",(0,t.jsx)(n.code,{children:"SnapshotTestRunner.run"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"imageDiffOptions"}),' (Object) - image diffing options for this test case. See "Image Diff Options" section below.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onInitialize"})," (Function) - called once when the test case starts. Receives a single object that is the ",(0,t.jsx)(n.a,{href:"/docs/api-reference/engine/animation-loop#callback-parameters",children:"AnimationLoop callback parameters"}),". If this callback returns an object or a promise, the content that it resolves to will be passed to ",(0,t.jsx)(n.code,{children:"onRender"})," and ",(0,t.jsx)(n.code,{children:"onFinalize"})," later."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onRender"})," (Function) - called every animation frame when the test case is running. Receives a single object that is the ",(0,t.jsx)(n.a,{href:"/docs/api-reference/engine/animation-loop#callback-parameters",children:"AnimationLoop callback parameters"}),", plus the following:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"done"})," (Function) - must be called when the test case is done rendering and ready for screen capture and comparison."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onFinalize"})," (Function) - called once when the test case is done to finalize all resources. Receives a single object that is the ",(0,t.jsx)(n.a,{href:"/docs/api-reference/engine/animation-loop#callback-parameters",children:"AnimationLoop callback parameters"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"runoptions-object",children:"run(options: Object)"}),"\n",(0,t.jsx)(n.p,{children:"Run all test cases."}),"\n",(0,t.jsx)(n.p,{children:"Options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"timeout"})," (Number) - time to wait for each test case to resolve (by calling the ",(0,t.jsx)(n.code,{children:"done"})," callback) before aborting, in milliseconds. Default ",(0,t.jsx)(n.code,{children:"2000"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"imageDiffOptions"})," (Object) - image diffing options for all test cases. This will be overridden if a test case defines its own ",(0,t.jsx)(n.code,{children:"imageDiffOptions"}),'. See "Image Diff Options" section below.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onTestStart"})," (Function) - callback when a test starts. Receives the current test case. Default logs the test name to console."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onTestPass"})," (Function) - callback when a test passes. Receives the current test case and the diffing result. Default logs the pixel matching percentage to console."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onTestFail"})," (Function) - callback when a test fails, either because the matching rate is below threshold or a critical error. Receives the current test case. Default logs the error message or the pixel matching percentage to console."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Returns: a ",(0,t.jsx)(n.code,{children:"Promise"})," that resolves when all test cases are done."]}),"\n",(0,t.jsx)(n.h2,{id:"members",children:"Members"}),"\n",(0,t.jsx)(n.h3,{id:"isheadless",children:"isHeadless"}),"\n",(0,t.jsx)(n.p,{children:"Whether the test is being run in headless mode. In headless mode, Chromium uses software render which behaves slightly differently from non-headless. Image diffing tolerance may need to be adjusted accordingly."}),"\n",(0,t.jsx)(n.h2,{id:"image-diff-options",children:"Image Diff Options"}),"\n",(0,t.jsxs)(n.p,{children:["The test renderer and each test case may choose to override the default image diffing options. The following options from ",(0,t.jsx)(n.a,{href:"https://github.com/uber-web/probe.gl/blob/master/docs/api-reference/test-utils/browser-test-driver#browsertestdriver_captureanddiffscreenoptions--object",children:"captureAndDiffScreen"})," are supported:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"tolerance"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"threshold"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"includeAA"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"createDiffImage"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"saveOnFail"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"saveAs"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1020:(e,n,s)=>{var t=s(6540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var t,i={},a=null,d=null;for(t in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!l.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:r,type:e,key:a,ref:d,props:i,_owner:c.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},4848:(e,n,s)=>{e.exports=s(1020)},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(6540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);