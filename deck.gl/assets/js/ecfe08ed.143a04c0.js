"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1987],{4e4:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"contributing","title":"Contributing to deck.gl","description":"Thanks for taking the time to contribute!","source":"@site/../docs/contributing.md","sourceDirName":".","slug":"/contributing","permalink":"/deck.gl/docs/contributing","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/contributing.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Upgrade Guide","permalink":"/deck.gl/docs/upgrade-guide"},"next":{"title":"Frequently Asked Questions","permalink":"/deck.gl/docs/faq"}}');var t=i(74848),r=i(28453);const l={},o="Contributing to deck.gl",c={},d=[{value:"Setting Up Dev Environment",id:"setting-up-dev-environment",level:2},{value:"Testing examples with modified deck.gl source",id:"testing-examples-with-modified-deckgl-source",level:2},{value:"Working with other vis.gl dependencies",id:"working-with-other-visgl-dependencies",level:3},{value:"Community Governance",id:"community-governance",level:2},{value:"Technical Steering Committee",id:"technical-steering-committee",level:3},{value:"Maintainers",id:"maintainers",level:3},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Develop on Linux",id:"develop-on-linux",level:3},{value:"Develop on Windows",id:"develop-on-windows",level:3},{value:"Develop on MacOs on Apple Silicon (M1 chip)",id:"develop-on-macos-on-apple-silicon-m1-chip",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"contributing-to-deckgl",children:"Contributing to deck.gl"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Thanks for taking the time to contribute!"})}),"\n",(0,t.jsx)(n.p,{children:"PRs and bug reports are welcome, and we are actively looking for new maintainers."}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-dev-environment",children:"Setting Up Dev Environment"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"master"})," branch is the active development branch."]}),"\n",(0,t.jsxs)(n.p,{children:["Building deck.gl locally from the source requires node.js ",(0,t.jsx)(n.code,{children:">=14"}),". Further limitations on the Node version may be imposed by ",(0,t.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer#usage",children:"puppeteer"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/stackgl/headless-gl#supported-platforms-and-nodejs-versions",children:"headless-gl"}),".\nWe use ",(0,t.jsx)(n.a,{href:"https://yarnpkg.com/en/docs/install",children:"yarn"})," to manage the dependencies of deck.gl."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git checkout master\nyarn bootstrap\nyarn test\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"#troubleshooting",children:"additional instructions"})," for Windows, Linux and Apple M1."]}),"\n",(0,t.jsx)(n.p,{children:"Run the layer browser application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd examples/layer-browser\nyarn\nyarn start-local\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you consider opening a PR, here is some documentation to get you started:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["vis.gl ",(0,t.jsx)(n.a,{href:"https://www.github.com/visgl/tsc/tree/master/developer-process",children:"developer process"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/visgl/deck.gl/tree/master/dev-docs/deckgl-api-guidelines.md",children:"deck.gl API design guidelines"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"testing-examples-with-modified-deckgl-source",children:"Testing examples with modified deck.gl source"}),"\n",(0,t.jsx)(n.p,{children:"Each example can be run so that it is built against the deck.gl source code in this repo instead of building against the installed version of deck.gl. This enables using the examples to debug the main deck.gl library source."}),"\n",(0,t.jsxs)(n.p,{children:["To do so use the ",(0,t.jsx)(n.code,{children:"yarn start-local"})," command present in each example's directory. See ",(0,t.jsx)(n.a,{href:"https://github.com/visgl/deck.gl/blob/master/examples/vite.config.local.mjs",children:"vite.config.local.mjs"})," for details."]}),"\n",(0,t.jsx)(n.h3,{id:"working-with-other-visgl-dependencies",children:"Working with other vis.gl dependencies"}),"\n",(0,t.jsx)(n.p,{children:"Deck.gl has a number of dependencies that fall under vis.gl, and there may be times when it is necessary to make a change in one of these.\nThus for development it is necessary to checkout a copy of such a dependency and make local changes."}),"\n",(0,t.jsxs)(n.p,{children:["When running an example using ",(0,t.jsx)(n.code,{children:"yarn start-local"})," you can use local version of ",(0,t.jsx)(n.a,{href:"https://github.com/visgl/luma.gl/",children:"luma.gl"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/uber-web/math.gl",children:"math.gl"})," by appending the ",(0,t.jsx)(n.code,{children:"--env.local-luma"})," or ",(0,t.jsx)(n.code,{children:"--env.local-math"})," option."]}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to test against the local source of other dependency libraries by modifying ",(0,t.jsx)(n.a,{href:"https://github.com/visgl/deck.gl/blob/master/examples/vite.config.local.mjs",children:"examples/vite.config.local.mjs"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"community-governance",children:"Community Governance"}),"\n",(0,t.jsxs)(n.p,{children:["vis.gl is part of the ",(0,t.jsx)(n.a,{href:"https://openjsf.org/",children:"OpenJS Foundation"}),". See the organization's ",(0,t.jsx)(n.a,{href:"https://github.com/visgl/tsc/blob/master/Technical%20Charter.md",children:"Technical Charter"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"technical-steering-committee",children:"Technical Steering Committee"}),"\n",(0,t.jsx)(n.p,{children:"deck.gl development is governed by the vis.gl Technical Steering Committee (TSC). Current members:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/ibgreen",children:"Ib Green"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Pessimistress",children:"Xiaoji Chen"})," - chairperson"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/alasarr",children:"Alberto Asuero"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"maintainers",children:"Maintainers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/ajduberstein",children:"Andrew Duberstein"})," - pydeck, json"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/xintongxia",children:"Xintong Xia"})," - layers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/georgios-uber",children:"Georgios Karnas"})," - glTF"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/kylebarron",children:"Kyle Barron"})," - tiles"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/chrisgervang",children:"Chris Gervang"})," - terrain"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/damix911",children:"Dario D'Amico"})," - ArcGIS"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/padawannn",children:"Javier Arag\xf3n"})," - MVT, CARTO"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/VictorVelarde",children:"V\xedctor Velarde"})," - MVT, CARTO"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/felixpalmer",children:"Felix Palmer"})," - MVT, GoogleMaps, CARTO"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/ilan-gold",children:"Ilan Gold"})," - tiles"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Maintainers of deck.gl have commit access to this GitHub repository, and take part in the decision making process."}),"\n",(0,t.jsxs)(n.p,{children:["If you are interested in becoming a maintainer, read the ",(0,t.jsx)(n.a,{href:"https://github.com/visgl/tsc/blob/master/governance.md",children:"governance guidelines"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The vis.gl TSC meets monthly and publishes meeting notes via a ",(0,t.jsx)(n.a,{href:"https://lists.uc.foundation/g/visgl",children:"mailing list"}),".\nThis mailing list can also be utilized to reach out to the TSC."]}),"\n",(0,t.jsx)(n.h2,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,t.jsxs)(n.p,{children:["Please be mindful of and adhere to the Linux Foundation's ",(0,t.jsx)(n.a,{href:"https://lfprojects.org/policies/code-of-conduct/",children:"Code of Conduct"})," when contributing to deck.gl."]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.h3,{id:"develop-on-linux",children:"Develop on Linux"}),"\n",(0,t.jsx)(n.p,{children:"To run the test suite, you may need to install additional dependencies (verified on Ubuntu LTS):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/stackgl/headless-gl#system-dependencies",children:"headless-gl dependencies"})," for the Node tests"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-unix",children:"puppeteer dependencies"})," for the integration tests"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Verify that everything works by running ",(0,t.jsx)(n.code,{children:"yarn test"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"develop-on-windows",children:"Develop on Windows"}),"\n",(0,t.jsxs)(n.p,{children:["It's possible to set up the dev environment in ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10",children:"Windows Subsystem for Linux"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To run the Node tests, you need to set up OpenGL support via X11 forwarding:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.a,{href:"https://sourceforge.net/projects/vcxsrv/",children:"VcXsrv"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"xlaunch.exe"}),", choose multiple windows, display 0, start no client, disable native opengl, disable access control. ",(0,t.jsx)(n.a,{href:"https://github.com/Microsoft/WSL/issues/2855#issuecomment-358861903",children:"reference"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If working with WSL2, allow WSL to access your X server with ",(0,t.jsx)(n.a,{href:"https://github.com/cascadium/wsl-windows-toolbar-launcher#firewall-rules",children:"firewall rules"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"DISPLAY"})," environment variable:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# WSL 1\nexport DISPLAY=localhost:0\n# WSL 2\nexport DISPLAY=$(grep -m 1 nameserver /etc/resolv.conf | awk '{print $2}'):0.0\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can test that it is set up successfully with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install mesa-utils\nglxgears\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see a window open with gears turning at this point."}),"\n",(0,t.jsxs)(n.p,{children:["Follow instructions for ",(0,t.jsx)(n.a,{href:"#develop-on-linux",children:"developing on linux"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"develop-on-macos-on-apple-silicon-m1-chip",children:"Develop on MacOs on Apple Silicon (M1 chip)"}),"\n",(0,t.jsx)(n.p,{children:"To install dependencies specify that you explicitly need the arm64 version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"arch -arm64 brew install pkg-config cairo pango libpng jpeg giflib librsvg\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You also need a system-wide Python available (",(0,t.jsx)(n.code,{children:"python"}),"). For example, it can be installed using Homebrew and then symlinked:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"brew install python\nsudo ln -s /opt/homebrew/bin/python3 /opt/homebrew/bin/python\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After this ",(0,t.jsx)(n.code,{children:"yarn bootstrap"})," can be run with"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"CPLUS_INCLUDE_PATH=/opt/homebrew/include yarn bootstrap\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(96540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);