/*! For license information please see 02b7486d.b89e0040.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite_docusaurus=self.webpackChunkwebsite_docusaurus||[]).push([[994],{7643:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=i(4848),t=i(8453);const l={},s="PipelineFactory",a={id:"api-reference/engine/pipeline-factory",title:"PipelineFactory",description:"The PipelineFactory class provides a createRenderPipeline() method that caches and reuses render pipelines.",source:"@site/../docs/api-reference/engine/pipeline-factory.md",sourceDirName:"api-reference/engine",slug:"/api-reference/engine/pipeline-factory",permalink:"/luma.gl/docs/api-reference/engine/pipeline-factory",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/luma.gl/tree/main/docs/../docs/api-reference/engine/pipeline-factory.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Model",permalink:"/luma.gl/docs/api-reference/engine/model"},next:{title:"Transform",permalink:"/luma.gl/docs/api-reference/engine/transform"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"shadertools Integration",id:"shadertools-integration",level:2},{value:"Static Methods",id:"static-methods",level:2},{value:"PipelineFactory.getDefaultFactory()",id:"pipelinefactorygetdefaultfactory",level:3},{value:"Methods",id:"methods",level:2},{value:"createRenderPipeline()",id:"createrenderpipeline",level:3},{value:"release()",id:"release",level:3},{value:"getUniforms(program: Program): Object",id:"getuniformsprogram-program-object",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pipelinefactory",children:"PipelineFactory"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"PipelineFactory"})," class provides a ",(0,r.jsx)(n.code,{children:"createRenderPipeline()"})," method that caches and reuses render pipelines."]}),"\n",(0,r.jsx)(n.p,{children:"The purpose of the pipeline factory is to speed up applications that tend to create multiple render pipelines with the same shaders and other properties. By returning the same cached pipeline, the pipeline factory minimizes the amount of time spent in shader compilation and linking."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Pipeline creation involves compiling and linking shaders. The linking stage in particular is highly dependent on graphics drivers, and the time spent accumulates when creating many pipelines during application startup or during dynamic renderings. Also, on some graphics drivers, pipeline linking can grow non-linearly into the multi-second range for big shaders."})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"PipelineFactory"})," will return the requested pipeline, creating it the first time, and then re-using a cached version if it is requested more than once. An application that tends to create multiple identical ",(0,r.jsx)(n.code,{children:"RenderPipeline"})," instances\nshould consider replacing normal pipeline creation."]}),"\n",(0,r.jsx)(n.p,{children:"It is possible to create multiple pipeline factories, but normally applications rely on the default pipeline factory that is be created for each device."}),"\n",(0,r.jsx)(n.p,{children:"Limitations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ComputePipeline"})," caching is not currently supported."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["An application that tends to create multiple identical ",(0,r.jsx)(n.code,{children:"RenderPipeline"})," instances\nshould consider replacing normal pipeline creation."]}),"\n",(0,r.jsxs)(n.p,{children:["To deduplicate ",(0,r.jsx)(n.code,{children:"RenderPipeline"})," instances, simply replace normal pipeline creation"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const pipeline = device.createRenderPipeline({vs, fs, ...}));\n"})}),"\n",(0,r.jsx)(n.p,{children:"with similar calls to the default pipeline factory"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import {PipelineFactory} from '@luma.gl/engine';\nconst pipeline = PipelineFactory.getDefaultFactory(device).createRenderPipeline({vs, fs, ...}));\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To prevent the cache from growing too big, an optional ",(0,r.jsx)(n.code,{children:"release()"})," method is also available."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"pipelineFactory.release(pipeline);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"shadertools-integration",children:"shadertools Integration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import {PipelineFactory} from '@luma.gl/engine';\nconst pf = new PipelineFactory(gl);\n\nconst vs = `\nattribute vec4 position;\n\nvoid main() {\n#ifdef MY_DEFINE\n  gl_Position = position;\n#else\n  gl_Position = position.wzyx;\n#endif\n}\n`;\n\nconst fs = `\nvoid main() {\n  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n  MY_SHADER_HOOK(gl_FragColor);\n}\n`;\n\npipelineFactory.addShaderHook('fs:MY_SHADER_HOOK(inout vec4 color)');\n\npipelineFactory.addDefaultModule(dirlight); // Will be included in all following programs\n\nconst pipeline1 = pipelineFactory.createRenderPipeline({vs, fs}); // Basic, no defines, only default module\nconst program2 = pipelineFactory.createRenderPipeline({vs, fs}); // Cached, same as pipeline 1, use count 2\nconst program3 = pipelineFactory.createRenderPipeline({\n  // New pipeline, with different source based on define\n  vs,\n  fs,\n  defines: {\n    MY_DEFINE: true\n  }\n});\n\nconst program4 = pipelineFactory.createRenderPipeline({\n  // New pipeline, with different source based on module and its injection\n  vs,\n  fs,\n  defines: {\n    MY_DEFINE: true\n  },\n  modules: [picking]\n});\n\nconst program5 = pipelineFactory.createRenderPipeline({\n  // Cached, same as pipeline 4, use count 2\n  vs,\n  fs,\n  defines: {\n    MY_DEFINE: true\n  },\n  modules: [picking]\n});\n\npipelineFactory.release(program1); // Cached pipeline still available, use count 1\npipelineFactory.release(program2); // Cached pipeline deleted\npipelineFactory.release(program3); // Cached pipeline deleted\npipelineFactory.release(program4); // Cached pipeline still available, use count 1\npipelineFactory.release(program5); // Cached pipeline deleted\n"})}),"\n",(0,r.jsx)(n.h2,{id:"static-methods",children:"Static Methods"}),"\n",(0,r.jsx)(n.h3,{id:"pipelinefactorygetdefaultfactory",children:"PipelineFactory.getDefaultFactory()"}),"\n",(0,r.jsx)(n.p,{children:"Returns the default pipeline factory for a device."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"PipelineFactory.getDefaultFactory(device: Device): PipelineFactory\n"})}),"\n",(0,r.jsx)(n.p,{children:"While it is possible to create multiple factories, most applications will use the default factory."}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"createrenderpipeline",children:"createRenderPipeline()"}),"\n",(0,r.jsx)(n.p,{children:"Get a program that fits the parameters provided."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"createRenderPipeline(props: RenderPipelineProps): RenderPipeline\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If one is already cached, return it, otherwise create and cache a new one.\n",(0,r.jsx)(n.code,{children:"opts"})," can include the following (see ",(0,r.jsx)(n.code,{children:"assembleShaders"})," for details):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"vs"}),": Base vertex shader source."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fs"}),": Base fragment shader source."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"defines"}),": Object indicating ",(0,r.jsx)(n.code,{children:"#define"})," constants to include in the shaders."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modules"}),": Array of module objects to include in the shaders."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"inject"}),": Object of hook injections to include in the shaders."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"release",children:"release()"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"release(pipeline: RenderPipeline): void\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Indicates that a pipeline is no longer in use. Each call to ",(0,r.jsx)(n.code,{children:"createRenderPipeline()"})," increments a reference count, and only when all references to a pipeline are released, the pipeline is destroyed and deleted from the cache."]}),"\n",(0,r.jsx)(n.h3,{id:"getuniformsprogram-program-object",children:"getUniforms(program: Program): Object"}),"\n",(0,r.jsxs)(n.p,{children:["Returns an object containing all the uniforms defined for the program. Returns ",(0,r.jsx)(n.code,{children:"null"})," if ",(0,r.jsx)(n.code,{children:"program"})," isn't managed by the ",(0,r.jsx)(n.code,{children:"PipelineFactory"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1020:(e,n,i)=>{var r=i(6540),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var r,l={},c=null,d=null;for(r in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!o.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:d,props:l,_owner:a.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},4848:(e,n,i)=>{e.exports=i(1020)},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var r=i(6540);const t={},l=r.createContext(t);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);