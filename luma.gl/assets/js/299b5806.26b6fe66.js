/*! For license information please see 299b5806.26b6fe66.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[2992],{4627:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=n(4848),t=n(8453);const r={},l="Bundling",o={id:"developer-guide/bundling",title:"Bundling",description:"Optimizing for Bundle Size",source:"@site/../docs/developer-guide/bundling.md",sourceDirName:"developer-guide",slug:"/developer-guide/bundling",permalink:"/luma.gl/docs/developer-guide/bundling",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/developer-guide/bundling.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Profiling",permalink:"/luma.gl/docs/developer-guide/profiling"},next:{title:"Contributing",permalink:"/luma.gl/docs/developer-guide/contributing"}},d={},a=[{value:"Optimizing for Bundle Size",id:"optimizing-for-bundle-size",level:2},{value:"Choosing a dist folder",id:"choosing-a-dist-folder",level:3},{value:"About Tree-Shaking",id:"about-tree-shaking",level:3},{value:"Pay for What you Use",id:"pay-for-what-you-use",level:3},{value:"Bundle Size Numbers",id:"bundle-size-numbers",level:3},{value:"Future Work",id:"future-work",level:3},{value:"Remarks",id:"remarks",level:2}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"bundling",children:"Bundling"}),"\n",(0,s.jsx)(i.h2,{id:"optimizing-for-bundle-size",children:"Optimizing for Bundle Size"}),"\n",(0,s.jsx)(i.p,{children:"luma.gl and luma.gl provide a lot of functionality and the amount of code these libraries contain will of course impact the size of your application bundle and your startup load time."}),"\n",(0,s.jsx)(i.h3,{id:"choosing-a-dist-folder",children:"Choosing a dist folder"}),"\n",(0,s.jsxs)(i.p,{children:["When installed from npm, luma.gl and related libraries come with three separate ",(0,s.jsx)(i.code,{children:"dist"})," sub folders."]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Folder"}),(0,s.jsx)(i.th,{children:(0,s.jsx)(i.code,{children:"mainField"})}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"browsers (e.g. not IE11 or older mobile devices)."}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"dist/esm"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"module"})}),(0,s.jsxs)(i.td,{children:["Same as ",(0,s.jsx)(i.code,{children:"dist/es5"}),", except ",(0,s.jsx)(i.code,{children:"export"})," and ",(0,s.jsx)(i.code,{children:"import"})," statements are left untranspiled to enable tree shaking. The main reason to use this distribution is if your are targeting older browsers (e.g. IE11 or older mobile devices)."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"dist/es5"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"main"})}),(0,s.jsxs)(i.td,{children:["All code is transpiled into ES5 and exports/imports are transpiled into ",(0,s.jsx)(i.code,{children:"commonjs"})," requires. The main reason to use this distribution is if your bundler does not support tree-shaking using ",(0,s.jsx)(i.code,{children:"import"}),"/",(0,s.jsx)(i.code,{children:"export"})," syntax."]})]})]})]}),"\n",(0,s.jsx)(i.p,{children:"You will have to check the documentation of your particular bundler to see what configuration options are available:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Webpack 2 and later will pick the ",(0,s.jsx)(i.code,{children:"esm"})," distribution by default (the ",(0,s.jsx)(i.code,{children:"module"})," main field)"]}),"\n",(0,s.jsxs)(i.li,{children:["Webpack 4 allows you to choose the ",(0,s.jsx)(i.code,{children:"esnext"})," distribution by specifying a new ",(0,s.jsx)(i.code,{children:"resolve.mainFields"})," array in your application's webpack config."]}),"\n",(0,s.jsxs)(i.li,{children:["For other bundlers, please refer to the respective documentation to see if you can control which distribution to use. If not, expect the ",(0,s.jsx)(i.code,{children:"es5"})," distribution to be used."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"about-tree-shaking",children:"About Tree-Shaking"}),"\n",(0,s.jsx)(i.p,{children:"luma.gl is designed to fully leverage tree-shaking. Tree-shaking should be possible with any supporting browser but development has currentle focusing on enabling the webpack 4 + babel 7 combination which provides excellent results."}),"\n",(0,s.jsx)(i.p,{children:"Some things to be aware of when working with tree-shaking:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"At least in Webpack, tree shaking is done by the uglifier, which is typically only run as the very last step on production builds. This means that it is typically not possible to assess the benefits of tree shaking during development."}),"\n",(0,s.jsx)(i.li,{children:"The lack of tree-shaking during development makes it hard to make statements about bundle size impact of a library just from looking at bundle sizes of development builds or the size of the library's npm module. Our recommendation is to always measure impact on your actual production builds."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"pay-for-what-you-use",children:"Pay for What you Use"}),"\n",(0,s.jsx)(i.p,{children:"Naturally, an application that uses all the functionality offered by a framework will benefit little from tree shaking, whereas a small app that only uses a few selected components should expect big savings."}),"\n",(0,s.jsx)(i.p,{children:"When we modularize luma.gl, we are less focused on the size of the entire library, and more on making sure that applications only pay for the features they actually use. Also we try to make the core set of functionality small."}),"\n",(0,s.jsx)(i.h3,{id:"bundle-size-numbers",children:"Bundle Size Numbers"}),"\n",(0,s.jsxs)(i.p,{children:["So, what kind of impact on bundle sizes should you expect when using luma.gl? When do you know if you have set up your bundler optimally. To help answer these questions, we provide some numbers you can compare against. luma.gl has scripts that measure the size of a minified bundle after each build, which allows us to provide comparison numbers between releases. This bundle imports the ",(0,s.jsx)(i.code,{children:"Module"})," and ",(0,s.jsx)(i.code,{children:"AnimationLoop"})," classes, which are the basic building blocks of most apps."]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"es6-production"}),(0,s.jsx)(i.th,{children:"6.1 Bundle/Zip"}),(0,s.jsx)(i.th,{children:"6.0 Bundle/Zip"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"es6-production"}),(0,s.jsx)(i.td,{children:"144KB / 42KB"}),(0,s.jsx)(i.td,{children:"181KB / 51KB"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"esm-production"}),(0,s.jsx)(i.td,{children:"209KB / 49KB"}),(0,s.jsx)(i.td,{children:"281KB / 66KB"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"es5-production"}),(0,s.jsx)(i.td,{children:"408KB / 88KB"}),(0,s.jsx)(i.td,{children:"422KB / 93KB"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"es6-development"}),(0,s.jsx)(i.td,{children:"787KB / 123KB"}),(0,s.jsx)(i.td,{children:"926KB / 165KB"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"esm-development"}),(0,s.jsx)(i.td,{children:"1048KB / 150KB"}),(0,s.jsx)(i.td,{children:"1167KB / 192KB"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"es5-development"}),(0,s.jsx)(i.td,{children:"961KB / 142KB"}),(0,s.jsx)(i.td,{children:"1052KB / 182KB"})]})]})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Numbers represent the minified bundle size of a minimal application, bundled with Webpack 4, which means that the ",(0,s.jsx)(i.code,{children:"ES6"})," and ESM numbers benefit from tree shaking."]}),"\n",(0,s.jsx)(i.li,{children:"The number in parenthesis are the compressed bundle sizes. This is an indication of the how much extra size will be added to your compressed app bundle if you import luma.gl."}),"\n",(0,s.jsx)(i.li,{children:"For the ES6 and ESM dists, apps that use more luma.gl classes and features will see an increase in bundle size."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"future-work",children:"Future Work"}),"\n",(0,s.jsx)(i.p,{children:'This is not the final word on luma.gl bundle size. More work is being done to reduce the size of luma.gl and we are confident that even as fture releases will have more functionality, we will be able to keep the library code from growing and, more importantly, make luma.gl even more "tree shakeable", with the intention that apps should only "pay for what they use".'}),"\n",(0,s.jsx)(i.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Optimizing for minified code"})," - Due to inclusion of sourcemaps etc, the bundle size impact of luma.gl tends to look more significant in development builds than in the final production builds. While reducing the size of the development libraries is also desirable, the current goal is to ensure the impact of adding luma.gl on the final, minified/uglified application bundle is as small as possible."]}),"\n",(0,s.jsxs)(i.li,{children:["Compressed bundle sizes are calculated using ",(0,s.jsx)(i.code,{children:"gzip -9"}),". Consider using slower ",(0,s.jsx)(i.code,{children:"brotli"})," compression for static assests, it typically provides an additional 20% reduction."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1020:(e,i,n)=>{var s=n(6540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,i,n){var s,r={},a=null,c=null;for(s in void 0!==n&&(a=""+n),void 0!==i.key&&(a=""+i.key),void 0!==i.ref&&(c=i.ref),i)l.call(i,s)&&!d.hasOwnProperty(s)&&(r[s]=i[s]);if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===r[s]&&(r[s]=i[s]);return{$$typeof:t,type:e,key:a,ref:c,props:r,_owner:o.current}}i.Fragment=r,i.jsx=a,i.jsxs=a},4848:(e,i,n)=>{e.exports=n(1020)},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var s=n(6540);const t={},r=s.createContext(t);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);