"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7401],{63562:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"developer-guide/custom-layers/subclassed-layers","title":"Subclassed Layers","description":"deck.gl layers are designed to be easy to extend in order to add features.","source":"@site/../docs/developer-guide/custom-layers/subclassed-layers.md","sourceDirName":"developer-guide/custom-layers","slug":"/developer-guide/custom-layers/subclassed-layers","permalink":"/deck.gl/docs/developer-guide/custom-layers/subclassed-layers","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/developer-guide/custom-layers/subclassed-layers.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Composite Layers","permalink":"/deck.gl/docs/developer-guide/custom-layers/composite-layers"},"next":{"title":"Creating Layer Extensions","permalink":"/deck.gl/docs/developer-guide/custom-layers/layer-extensions"}}');var s=r(74848),i=r(28453);const o={},a="Subclassed Layers",l={},d=[{value:"Overriding Attribute Calculation",id:"overriding-attribute-calculation",level:2},{value:"Overriding Shaders",id:"overriding-shaders",level:2},{value:"Defining Additional Uniforms",id:"defining-additional-uniforms",level:2},{value:"Defining Additional Attributes",id:"defining-additional-attributes",level:2},{value:"Layer Extensions",id:"layer-extensions",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"subclassed-layers",children:"Subclassed Layers"})}),"\n",(0,s.jsx)(n.p,{children:"deck.gl layers are designed to be easy to extend in order to add features.\nSubclassing allows redefining both layer life cycle methods as well as\nthe vertex and/or fragment shaders."}),"\n",(0,s.jsx)(n.p,{children:"If a small feature is missing from a layer, subclassing can often be a\ngood technique to add it."}),"\n",(0,s.jsx)(n.h2,{id:"overriding-attribute-calculation",children:"Overriding Attribute Calculation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// Example to add per-segment color to PathLayer\nimport {PathLayer} from '@deck.gl/layers';\n\n// Allow accessor: `getColor` (Function, optional)\n// Returns an color (array of numbers, RGBA) or array of colors (array of arrays).\nexport default class MultiColorPathLayer extends PathLayer {\n  initializeState() {\n    super.initializeState();\n    this.getAttributeManager().addInstanced({\n      instanceColors: {\n        size: 4,\n        type: \"unorm8\",\n        normalized: true,\n        update: this.calculateColors\n      }\n    })\n  }\n\n  calculateColors(attribute) {\n    const {data, getPath, getColor} = this.props;\n    const {value} = attribute;\n\n    let i = 0;\n\n    for (const object of data) {\n      const path = getPath(object);\n      const color = getColor(object);\n      if (Array.isArray(color[0])) {\n        if (color.length !== path.length) {\n          throw new Error(`PathLayer getColor() returned a color array, but the number of\n           colors returned doesn't match the number of segments in the path`);\n        }\n        color.forEach((segmentColor) => {\n          value[i++] = segmentColor[0];\n          value[i++] = segmentColor[1];\n          value[i++] = segmentColor[2];\n          value[i++] = isNaN(segmentColor[3]) ? 255 : segmentColor[3];\n        });\n      } else {\n        for (let ptIndex = 1; ptIndex < path.length; ptIndex++) {\n          value[i++] = color[0];\n          value[i++] = color[1];\n          value[i++] = color[2];\n          value[i++] = isNaN(color[3]) ? 255 : color[3];\n        }\n      }\n    }\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.a,{href:"https://github.com/visgl/deck.gl/pull/336",children:"Courtesy"})," of ",(0,s.jsx)(n.a,{href:"https://github.com/dcposch",children:"@dcposch"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"overriding-shaders",children:"Overriding Shaders"}),"\n",(0,s.jsxs)(n.p,{children:["You can replace the shaders used in a layer by overriding the ",(0,s.jsx)(n.code,{children:"getShaders()"}),"\nmethod. Every core layer calls this method during initialization. It\nreturns the shaders and modules used by the layer in an object:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vs"}),": string, GLSL source of the vertex shader"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fs"}),": string, GLSL source of the fragment shader"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"modules"}),": Array, list of shader modules to be used"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inject"}),": Object, map from injection points to custom GLSL code to be injected"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Read about ",(0,s.jsx)(n.a,{href:"/deck.gl/docs/developer-guide/custom-layers/writing-shaders",children:"writing your own shaders"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When you are implementing your own custom layers, and want to change the shaders\nit is encouraged that you also define a ",(0,s.jsx)(n.code,{children:"getShaders()"})," function and selectively\noverwrite required shader(s) with custom shaders.\nThis makes it much easier for others to subclass your layer and make small\nchanges to the shaders."]}),"\n",(0,s.jsxs)(n.p,{children:["Note: When overwriting ",(0,s.jsx)(n.code,{children:"getShaders()"})," you should pass down any unmodified shader(s)\nand ",(0,s.jsx)(n.code,{children:"modules"})," as is. See code example below."]}),"\n",(0,s.jsx)(n.h2,{id:"defining-additional-uniforms",children:"Defining Additional Uniforms"}),"\n",(0,s.jsxs)(n.p,{children:["The best way to pass additional uniforms to your custom shader is to override\nthe ",(0,s.jsx)(n.code,{children:"draw()"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/// rounded-rectangle-layer.js\n// Example to draw rounded rectangles instead of circles in ScatterplotLayer\nimport {ScatterplotLayer} from '@deck.gl/layers';\nimport customFragmentShader from './rounded-rectangle-layer-fragment';\n\nexport default RoundedRectangleLayer extends ScatterplotLayer {\n\n  draw({uniforms}) {\n    super.draw({\n      uniforms:\n        {\n        ...uniforms,\n        cornerRadius: this.props.cornerRadius\n        }\n    })\n  }\n\n  getShaders() {\n    // use object.assign to make sure we don't overwrite existing fields like `vs`, `modules`...\n    return Object.assign({}, super.getShaders(), {\n      fs: customFragmentShader\n    });\n  }\n}\n\nRoundedRectangleLayer.defaultProps = {\n  // cornerRadius: the amount of rounding at the rectangle corners\n  // 0 - rectangle. 1 - circle.\n  cornerRadius: 0.1\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Modified fragment shader that uses this uniform (learn more in ",(0,s.jsx)(n.a,{href:"/deck.gl/docs/developer-guide/custom-layers/writing-shaders",children:"writing your own shaders"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/// rounded-rectangle-layer-fragment.js\n// This is copied and adapted from scatterplot-layer-fragment.glsl.js\n// Modifications are annotated\nexport default `\\\n#define SHADER_NAME rounded-rectangle-layer-fragment-shader\n\nprecision highp float;\n\nuniform float cornerRadius;\n\nvarying vec4 vFillColor;\nvarying vec2 unitPosition;\n\nvoid main(void) {\n\n  float distToCenter = length(unitPosition);\n\n  /* Calculate the cutoff radius for the rounded corners */\n  float threshold = sqrt(2.0) * (1.0 - cornerRadius) + 1.0 * cornerRadius;\n  if (distToCenter <= threshold) {\n    gl_FragColor = vFillColor;\n  } else {\n    discard;\n  }\n\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n`;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"defining-additional-attributes",children:"Defining Additional Attributes"}),"\n",(0,s.jsxs)(n.p,{children:["During initialization, you may define additional attributes by accessing the\nlayer's ",(0,s.jsx)(n.a,{href:"/deck.gl/docs/developer-guide/custom-layers/attribute-management",children:"attribute manager"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// my-point-cloud-layer.js\n// Example to add per-point size to point cloud layer\nimport {PointCloudLayer} from 'deck.gl';\nimport vertexShader from 'my-point-cloud-layer-vertex';\n\nexport default MyPointCloudLayer extends PointCloudLayer {\n\n  initializeState() {\n    super.initializeState();\n\n    this.state.attributeManager.addInstanced({\n      instanceRadiusPixels: {size: 1, accessor: 'getRadius'}\n    });\n  }\n\n  getShaders() {\n    return Object.assign({}, super.getShaders(), {\n      vs: vertexShader,\n    });\n  }\n}\n\nMyPointCloudLayer.defaultProps = {\n  // returns point radius in pixels\n  getRadius: {type: 'accessor', value: 1}\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Modified vertex shader that uses this attribute (learn more in ",(0,s.jsx)(n.a,{href:"/deck.gl/docs/developer-guide/custom-layers/writing-shaders",children:"writing your own shaders"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// my-point-cloud-layer-vertex.js\n// This is copied and adapted from point-cloud-layer-vertext.glsl.js\n// Modifications are annotated\nexport default `\\\n#define SHADER_NAME point-cloud-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec3 instanceNormals;\nattribute vec4 instanceColors;\nattribute vec3 instancePositions;\nattribute vec3 instancePositions64Low;\nattribute vec3 instancePickingColors;\n\n/* New attribute */\nattribute flat instanceRadiusPixels;\n\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying vec2 unitPosition;\n\nvoid main(void) {\n  unitPosition = positions.xy;\n\n  vec4 position_commonspace;\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64Low, vec3(0.), position_commonspace);\n  /* replaced uniform 'radiusPixels' with 'instanceRadiusPixels' */\n  gl_Position.xy += project_pixel_size_to_clipspace(positions.xy * instanceRadiusPixels);\n\n  vec3 lightColor = lighting_getLightColor(instanceColors.rgb, project.cameraPosition, position_commonspace.xyz, project_normal(instanceNormals));\n\n  vColor = vec4(lightColor, instanceColors.a * opacity) / 255.0;\n\n  picking_setPickingColor(instancePickingColors);\n}\n`;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"layer-extensions",children:"Layer Extensions"}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes we need to subclass multiple layers to add similar functionalities.\n",(0,s.jsx)(n.a,{href:"/deck.gl/docs/api-reference/extensions/overview",children:"Layer extension"})," is a way to generalize, reuse, and share subclassed layer code. ",(0,s.jsx)(n.a,{href:"/deck.gl/docs/developer-guide/custom-layers/layer-extensions",children:"Read on"})," about how to package up a subclassed layer code into a layer extension."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);