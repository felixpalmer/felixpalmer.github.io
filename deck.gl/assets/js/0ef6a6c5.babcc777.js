"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9807],{16485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"api-reference/carto/cluster-tile-layer","title":"ClusterTileLayer (Experimental)","description":"ClusterTileLayer is a layer for visualizing point data aggregated using the Quadbin Spatial Index using clusters.","source":"@site/../docs/api-reference/carto/cluster-tile-layer.md","sourceDirName":"api-reference/carto","slug":"/api-reference/carto/cluster-tile-layer","permalink":"/deck.gl/docs/api-reference/carto/cluster-tile-layer","draft":false,"unlisted":false,"editUrl":"https://github.com/visgl/deck.gl/tree/master/website/../docs/api-reference/carto/cluster-tile-layer.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Data Sources","permalink":"/deck.gl/docs/api-reference/carto/data-sources"},"next":{"title":"H3TileLayer","permalink":"/deck.gl/docs/api-reference/carto/h3-tile-layer"}}');var r=t(74848),i=t(28453);const l={},a="ClusterTileLayer (Experimental)",c={},o=[{value:"Usage",id:"usage",level:2},{value:"Installation",id:"installation",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>data</code> (TilejsonResult)",id:"data",level:4},{value:"Clustering Options",id:"clustering-options",level:3},{value:"<code>clusterLevel</code> (number, optional)",id:"clusterlevel",level:4},{value:"<code>getPosition</code> (Accessor&lt;Position&gt;, optional)",id:"getposition",level:4},{value:"<code>getWeight</code> (Accessor&lt;number&gt;)",id:"getweight",level:4},{value:"Aggregated data",id:"aggregated-data",level:2},{value:"Valid aggregation types",id:"valid-aggregation-types",level:3},{value:"Global aggregation",id:"global-aggregation",level:3},{value:"Example",id:"example",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"clustertilelayer-experimental",children:"ClusterTileLayer (Experimental)"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ClusterTileLayer"})," is a layer for visualizing point data aggregated using the ",(0,r.jsx)(n.a,{href:"https://docs.carto.com/data-and-analysis/analytics-toolbox-for-bigquery/key-concepts/spatial-indexes#quadbin",children:"Quadbin Spatial Index"})," using clusters."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import DeckGL from '@deck.gl/react';\nimport {ClusterTileLayer, quadbinTableSource} from '@deck.gl/carto';\n\nfunction App({viewState}) {\n  const data = quadbinTableSource({\n    accessToken: 'XXX',\n    connectionName: 'carto_dw',\n    tableName: 'carto-demo-data.demo_tables.quadbin'\n  });\n\n  const layer = new ClusterTileLayer({\n    data,\n\n    // Clustering props\n    getWeight: d => d.properties.longitude_count,\n    getPosition: d => [d.properties.longitude_average, d.properties.latitude_average];\n\n    // Styling (supports all GeoJsonLayer props)\n    pointType: 'circle+text',\n    getPointRadius: d => d.properties.longitude_count / d.properties.stats.longitude_count,\n    pointRadiusUnits: 'pixels',\n    pointRadiusScale: 50,\n    getText: d => d.properties.longitude_count,\n    textSizeScale: 20\n  });\n\n  return <DeckGL viewState={viewState} layers={[layer]} />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"To install the dependencies from NPM:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install deck.gl\n# or\nnpm install @deck.gl/core @deck.gl/layers @deck.gl/carto\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import {ClusterTileLayer} from '@deck.gl/carto';\nnew ClusterTileLayer({});\n"})}),"\n",(0,r.jsx)(n.p,{children:"To use pre-bundled scripts:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script src="https://unpkg.com/deck.gl@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/carto@^9.0.0/dist.min.js"><\/script>\n\n\x3c!-- or --\x3e\n<script src="https://unpkg.com/@deck.gl/core@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/layers@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/geo-layers@^9.0.0/dist.min.js"><\/script>\n<script src="https://unpkg.com/@deck.gl/carto@^9.0.0/dist.min.js"><\/script>\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"new deck.carto.ClusterTileLayer({});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(n.p,{children:["Inherits all properties from ",(0,r.jsx)(n.a,{href:"/deck.gl/docs/api-reference/geo-layers/tile-layer",children:(0,r.jsx)(n.code,{children:"TileLayer"})})," and ",(0,r.jsx)(n.a,{href:"/deck.gl/docs/api-reference/layers/geojson-layer",children:(0,r.jsx)(n.code,{children:"GeoJsonLayer"})}),", with exceptions indicated below."]}),"\n",(0,r.jsxs)(n.h4,{id:"data",children:[(0,r.jsx)(n.code,{children:"data"})," (TilejsonResult)"]}),"\n",(0,r.jsxs)(n.p,{children:["Required. A valid ",(0,r.jsx)(n.code,{children:"TilejsonResult"})," object."]}),"\n",(0,r.jsxs)(n.p,{children:["Use one of the following ",(0,r.jsx)(n.a,{href:"/deck.gl/docs/api-reference/carto/data-sources",children:"Data Sources"})," to fetch this from the CARTO API:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./data-sources#quadbintablesource",children:"quadbinTableSource"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./data-sources#quadbinquerysource",children:"quadbinQuerySource"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./data-sources#quadbintilesetsource",children:"quadbinTilesetSource"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"clustering-options",children:"Clustering Options"}),"\n",(0,r.jsxs)(n.p,{children:["The following props control how the data is grouped into clusters. The accessor methods will be called on each quadbin cell in the data to retrieve the position and weight of the cell. All of the properties are then aggregated and made available to the ",(0,r.jsx)(n.code,{children:"GeoJsonLayer"})," accessors for styling."]}),"\n",(0,r.jsxs)(n.h4,{id:"clusterlevel",children:[(0,r.jsx)(n.code,{children:"clusterLevel"})," (number, optional)"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"5"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The number of aggregation levels to cluster cells by. Larger values increase the clustering radius, with an increment of ",(0,r.jsx)(n.code,{children:"clusterLevel"})," doubling the radius."]}),"\n",(0,r.jsxs)(n.h4,{id:"getposition",children:[(0,r.jsx)(n.code,{children:"getPosition"})," (",(0,r.jsx)(n.a,{href:"/deck.gl/docs/developer-guide/using-layers#accessors",children:"Accessor<Position>"}),", optional)"]}),"\n",(0,r.jsx)(n.p,{children:"The (average) position of points in a cell used for clustering. If not supplied the center of the quadbin cell is used."}),"\n",(0,r.jsxs)(n.h4,{id:"getweight",children:[(0,r.jsx)(n.code,{children:"getWeight"})," (",(0,r.jsx)(n.a,{href:"/deck.gl/docs/developer-guide/using-layers#accessors",children:"Accessor<number>"}),")"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Default: ",(0,r.jsx)(n.code,{children:"1"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The weight of each cell used for clustering."}),"\n",(0,r.jsx)(n.h2,{id:"aggregated-data",children:"Aggregated data"}),"\n",(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"GeoJsonLayer"})," accessors to style the clusters, aggregated values will be passed to the styling accessor functions."]}),"\n",(0,r.jsxs)(n.p,{children:["The type aggregation is infered based on the property name, for example ",(0,r.jsx)(n.code,{children:"population_average"})," will be aggregated using a (mean) average operation across all the quadbin cells that are present in the cluster, while ",(0,r.jsx)(n.code,{children:"age_min"})," will give the minimum value present in the cluster."]}),"\n",(0,r.jsx)(n.h3,{id:"valid-aggregation-types",children:"Valid aggregation types"}),"\n",(0,r.jsxs)(n.p,{children:["Supported aggregation types are: ",(0,r.jsx)(n.code,{children:"any"}),", ",(0,r.jsx)(n.code,{children:"average"}),", ",(0,r.jsx)(n.code,{children:"count"}),", ",(0,r.jsx)(n.code,{children:"min"}),", ",(0,r.jsx)(n.code,{children:"max"}),", ",(0,r.jsx)(n.code,{children:"sum"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"global-aggregation",children:"Global aggregation"}),"\n",(0,r.jsxs)(n.p,{children:["In addition to the aggregated values across the cluster, the features passed to the styling accessors contain a ",(0,r.jsx)(n.code,{children:"stats"})," object which contains the same properties, but aggregated across all the data being displayed. This is useful for normalizing the values, such that the largest cluster has a constant value."]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["Display clusters using an ",(0,r.jsx)(n.code,{children:"'cluster'"})," icon scaled between 20 and 80, switching to an icon defined by the ",(0,r.jsx)(n.code,{children:"icon_any"})," property once the cluster only contains a single point."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Data present in quadbin cell\ntype PropertiesType = {\n  longitude_count: number; // count of points in cell\n  longitude_average: number;\n  latitude_average: number;\n  icon_any: string;\n};\n\nconst layer = new ClusterTileLayer<PropertiesType>({\n  data, // Defined using `quadbinTableSource` or similar\n\n  // Clustering props\n  getWeight: d => d.properties.longitude_count,\n  getPosition: d => [d.properties.longitude_average, d.properties.latitude_average];\n  \n  // Style\n  pointType: 'icon',\n  iconAtlas,\n  iconMapping,\n  getIcon: d => d.longitude_count > 1 : 'cluster' : d.icon_any,\n  getIconSize: d => 20 + 80 * d.properties.longitude_count / d.properties.stats.longitude_count\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);