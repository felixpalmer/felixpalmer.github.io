"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9021],{59021:(t,e,n)=>{n.d(e,{wG:()=>r,WZ:()=>U,GU:()=>J,dj:()=>G,ct:()=>H,OT:()=>i,ap:()=>x,Ny:()=>o});const r={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function o(t,e,n={}){const r=function(t,e={}){return Math.sign(x(t,e))}(t,n);return r!==e&&(function(t,e){const{start:n=0,end:r=t.length,size:o=2}=e,x=(r-n)/o,i=Math.floor(x/2);for(let s=0;s<i;++s){const e=n+s*o,r=n+(x-1-s)*o;for(let n=0;n<o;++n){const o=t[e+n];t[e+n]=t[r+n],t[r+n]=o}}}(t,n),!0)}function x(t,e={}){const{start:n=0,end:r=t.length}=e,o=e.size||2;let x=0;for(let i=n,s=r-o;i<r;i+=o)x+=(t[i]-t[s])*(t[i+1]+t[s+1]),s=i;return x/2}function i(t,e,n=2,r){const o=e&&e.length,x=o?e[0]*n:t.length;let i=s(t,0,x,n,!0,r&&r[0]);const f=[];if(!i||i.next===i.prev)return f;let p,c,y,g,d,Z,z;if(o&&(i=function(t,e,n,r,o){const x=[];let i,u,f,p,c;for(i=0,u=e.length;i<u;i++)f=e[i]*r,p=i<u-1?e[i+1]*r:t.length,c=s(t,f,p,r,!1,o&&o[i+1]),c===c.next&&(c.steiner=!0),x.push(a(c));for(x.sort(h),i=0;i<x.length;i++)v(x[i],n),n=l(n,n.next);return n}(t,e,i,n,r)),t.length>80*n){g=c=t[0],d=y=t[1];for(let e=n;e<x;e+=n)Z=t[e],z=t[e+1],Z<g&&(g=Z),z<d&&(d=z),Z>c&&(c=Z),z>y&&(y=z);p=Math.max(c-g,y-d),p=0!==p?1/p:0}return u(i,f,n,g,d,p),f}function s(t,e,n,r,o,i){let s,l;if(void 0===i&&(i=x(t,{start:e,end:n,size:r})),o===i<0)for(s=e;s<n;s+=r)l=I(s,t[s],t[s+1],l);else for(s=n-r;s>=e;s-=r)l=I(s,t[s],t[s+1],l);return l&&M(l,l.next)&&(T(l),l=l.next),l}function l(t,e){if(!t)return t;e||(e=t);let n,r=t;do{if(n=!1,r.steiner||!M(r,r.next)&&0!==w(r.prev,r,r.next))r=r.next;else{if(T(r),r=e=r.prev,r===r.next)break;n=!0}}while(n||r!==e);return e}function u(t,e,n,r,o,x,i){if(!t)return;!i&&x&&function(t,e,n,r){let o=t;do{null===o.z&&(o.z=d(o.x,o.y,e,n,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next}while(o!==t);o.prevZ.nextZ=null,o.prevZ=null,function(t){let e,n,r,o,x,i,s,l,u=1;do{for(o=t,t=null,l=null,r=0;o;){for(r++,i=o,x=0,n=0;n<u&&(x++,i=i.nextZ,i);n++);for(s=u;x>0||s>0&&i;)0!==x&&(0===s||!i||o.z<=i.z)?(e=o,o=o.nextZ,x--):(e=i,i=i.nextZ,s--),l?l.nextZ=e:t=e,e.prevZ=l,l=e;o=i}l.nextZ=null,u*=2}while(r>1)}(o)}(t,r,o,x);let s,h,v=t;for(;t.prev!==t.next;)if(s=t.prev,h=t.next,x?p(t,r,o,x):f(t))e.push(s.i/n),e.push(t.i/n),e.push(h.i/n),T(t),t=h.next,v=h.next;else if((t=h)===v){i?1===i?u(t=c(l(t),e,n),e,n,r,o,x,2):2===i&&y(t,e,n,r,o,x):u(l(t),e,n,r,o,x,1);break}}function f(t){const e=t.prev,n=t,r=t.next;if(w(e,n,r)>=0)return!1;let o=t.next.next;for(;o!==t.prev;){if(Z(e.x,e.y,n.x,n.y,r.x,r.y,o.x,o.y)&&w(o.prev,o,o.next)>=0)return!1;o=o.next}return!0}function p(t,e,n,r){const o=t.prev,x=t,i=t.next;if(w(o,x,i)>=0)return!1;const s=o.x<x.x?o.x<i.x?o.x:i.x:x.x<i.x?x.x:i.x,l=o.y<x.y?o.y<i.y?o.y:i.y:x.y<i.y?x.y:i.y,u=o.x>x.x?o.x>i.x?o.x:i.x:x.x>i.x?x.x:i.x,f=o.y>x.y?o.y>i.y?o.y:i.y:x.y>i.y?x.y:i.y,p=d(s,l,e,n,r),c=d(u,f,e,n,r);let y=t.prevZ,h=t.nextZ;for(;y&&y.z>=p&&h&&h.z<=c;){if(y!==t.prev&&y!==t.next&&Z(o.x,o.y,x.x,x.y,i.x,i.y,y.x,y.y)&&w(y.prev,y,y.next)>=0)return!1;if(y=y.prevZ,h!==t.prev&&h!==t.next&&Z(o.x,o.y,x.x,x.y,i.x,i.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;y&&y.z>=p;){if(y!==t.prev&&y!==t.next&&Z(o.x,o.y,x.x,x.y,i.x,i.y,y.x,y.y)&&w(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;h&&h.z<=c;){if(h!==t.prev&&h!==t.next&&Z(o.x,o.y,x.x,x.y,i.x,i.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function c(t,e,n){let r=t;do{const o=r.prev,x=r.next.next;!M(o,x)&&b(o,r,r.next,x)&&O(o,x)&&O(x,o)&&(e.push(o.i/n),e.push(r.i/n),e.push(x.i/n),T(r),T(r.next),r=t=x),r=r.next}while(r!==t);return l(r)}function y(t,e,n,r,o,x){let i=t;do{let t=i.next.next;for(;t!==i.prev;){if(i.i!==t.i&&z(i,t)){let s=C(i,t);return i=l(i,i.next),s=l(s,s.next),u(i,e,n,r,o,x),void u(s,e,n,r,o,x)}t=t.next}i=i.next}while(i!==t)}function h(t,e){return t.x-e.x}function v(t,e){if(e=function(t,e){let n=e;const r=t.x,o=t.y;let x,i=-1/0;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const t=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(t<=r&&t>i){if(i=t,t===r){if(o===n.y)return n;if(o===n.next.y)return n.next}x=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!x)return null;if(r===i)return x;const s=x,l=x.x,u=x.y;let f,p=1/0;n=x;do{r>=n.x&&n.x>=l&&r!==n.x&&Z(o<u?r:i,o,l,u,o<u?i:r,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(r-n.x),O(n,t)&&(f<p||f===p&&(n.x>x.x||n.x===x.x&&g(x,n)))&&(x=n,p=f)),n=n.next}while(n!==s);return x}(t,e),e){const n=C(e,t);l(e,e.next),l(n,n.next)}}function g(t,e){return w(t.prev,t,e.prev)<0&&w(e.next,t,t.next)<0}function d(t,e,n,r,o){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*o)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*o)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function a(t){let e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function Z(t,e,n,r,o,x,i,s){return(o-i)*(e-s)-(t-i)*(x-s)>=0&&(t-i)*(r-s)-(n-i)*(e-s)>=0&&(n-i)*(x-s)-(o-i)*(r-s)>=0}function z(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&b(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(O(t,e)&&O(e,t)&&function(t,e){let n=t,r=!1;const o=(t.x+e.x)/2,x=(t.y+e.y)/2;do{n.y>x!=n.next.y>x&&n.next.y!==n.y&&o<(n.next.x-n.x)*(x-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)&&(w(t.prev,t,e.prev)||w(t,e.prev,e))||M(t,e)&&w(t.prev,t,t.next)>0&&w(e.prev,e,e.next)>0)}function w(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function M(t,e){return t.x===e.x&&t.y===e.y}function b(t,e,n,r){const o=m(w(t,e,n)),x=m(w(t,e,r)),i=m(w(n,r,t)),s=m(w(n,r,e));return o!==x&&i!==s||(!(0!==o||!k(t,n,e))||(!(0!==x||!k(t,r,e))||(!(0!==i||!k(n,t,r))||!(0!==s||!k(n,e,r)))))}function k(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function m(t){return t>0?1:t<0?-1:0}function O(t,e){return w(t.prev,t,t.next)<0?w(t,e,t.next)>=0&&w(t,t.prev,e)>=0:w(t,e,t.prev)<0||w(t,t.next,e)<0}function C(t,e){const n=new R(t.i,t.x,t.y),r=new R(e.i,e.x,e.y),o=t.next,x=e.prev;return t.next=e,e.prev=t,n.next=o,o.prev=n,r.next=n,n.prev=r,x.next=r,r.prev=x,r}function I(t,e,n,r){const o=new R(t,e,n);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function T(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function R(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function j(t,e,n,r,o=[]){let x,i;if(8&n)x=(r[3]-t[1])/(e[1]-t[1]),i=3;else if(4&n)x=(r[1]-t[1])/(e[1]-t[1]),i=1;else if(2&n)x=(r[2]-t[0])/(e[0]-t[0]),i=2;else{if(!(1&n))return null;x=(r[0]-t[0])/(e[0]-t[0]),i=0}for(let s=0;s<t.length;s++)o[s]=(1&i)===s?r[i]:x*(e[s]-t[s])+t[s];return o}function E(t,e){let n=0;return t[0]<e[0]?n|=1:t[0]>e[2]&&(n|=2),t[1]<e[1]?n|=4:t[1]>e[3]&&(n|=8),n}function L(t,e){const n=e.length,r=t.length;if(r>0){let o=!0;for(let x=0;x<n;x++)if(t[r-n+x]!==e[x]){o=!1;break}if(o)return!1}for(let o=0;o<n;o++)t[r+o]=e[o];return!0}function W(t,e){const n=e.length;for(let r=0;r<n;r++)t[r]=e[r]}function _(t,e,n,r,o=[]){const x=r+e*n;for(let i=0;i<n;i++)o[i]=t[x+i];return o}function G(t,e){const{size:n=2,broken:r=!1,gridResolution:o=10,gridOffset:x=[0,0],startIndex:i=0,endIndex:s=t.length}=e||{},l=(s-i)/n;let u=[];const f=[u],p=_(t,0,n,i);let c,y;const h=q(p,o,x,[]),v=[];L(u,p);for(let g=1;g<l;g++){for(c=_(t,g,n,i,c),y=E(c,h);y;){j(p,c,y,h,v);const t=E(v,h);t&&(j(p,v,t,h,v),y=t),L(u,v),W(p,v),B(h,o,y),r&&u.length>n&&(u=[],f.push(u),L(u,p)),y=E(c,h)}L(u,c),W(p,c)}return r?f:f[0]}const K=0,N=1;function S(t,e){for(let n=0;n<e.length;n++)t.push(e[n]);return t}function U(t,e=null,n){if(!t.length)return[];const{size:r=2,gridResolution:o=10,gridOffset:x=[0,0],edgeTypes:i=!1}=n||{},s=[],l=[{pos:t,types:i?new Array(t.length/r).fill(N):null,holes:e||[]}],u=[[],[]];let f=[];for(;l.length;){const{pos:t,types:e,holes:n}=l.shift();D(t,r,n[0]||t.length,u),f=q(u[0],o,x,f);const p=E(u[1],f);if(p){let o=A(t,e,r,0,n[0]||t.length,f,p);const x={pos:o[0].pos,types:o[0].types,holes:[]},s={pos:o[1].pos,types:o[1].types,holes:[]};l.push(x,s);for(let l=0;l<n.length;l++)o=A(t,e,r,n[l],n[l+1]||t.length,f,p),o[0]&&(x.holes.push(x.pos.length),x.pos=S(x.pos,o[0].pos),i&&(x.types=S(x.types,o[0].types))),o[1]&&(s.holes.push(s.pos.length),s.pos=S(s.pos,o[1].pos),i&&(s.types=S(s.types,o[1].types)))}else{const r={positions:t};i&&(r.edgeTypes=e),n.length&&(r.holeIndices=n),s.push(r)}}return s}function A(t,e,n,r,o,x,i){const s=(o-r)/n,l=[],u=[],f=[],p=[],c=[];let y,h,v;const g=_(t,s-1,n,r);let d=Math.sign(8&i?g[1]-x[3]:g[0]-x[2]),a=e&&e[s-1],Z=0,z=0;for(let w=0;w<s;w++)y=_(t,w,n,r,y),h=Math.sign(8&i?y[1]-x[3]:y[0]-x[2]),v=e&&e[r/n+w],h&&d&&d!==h&&(j(g,y,i,x,c),L(l,c)&&f.push(a),L(u,c)&&p.push(a)),h<=0?(L(l,y)&&f.push(v),Z-=h):f.length&&(f[f.length-1]=K),h>=0?(L(u,y)&&p.push(v),z+=h):p.length&&(p[p.length-1]=K),W(g,y),d=h,a=v;return[Z?{pos:l,types:e&&f}:null,z?{pos:u,types:e&&p}:null]}function q(t,e,n,r){const o=Math.floor((t[0]-n[0])/e)*e+n[0],x=Math.floor((t[1]-n[1])/e)*e+n[1];return r[0]=o,r[1]=x,r[2]=o+e,r[3]=x+e,r}function B(t,e,n){8&n?(t[1]+=e,t[3]+=e):4&n?(t[1]-=e,t[3]-=e):2&n?(t[0]+=e,t[2]+=e):1&n&&(t[0]-=e,t[2]-=e)}function D(t,e,n,r){let o=1/0,x=-1/0,i=1/0,s=-1/0;for(let l=0;l<n;l+=e){const e=t[l],n=t[l+1];o=e<o?e:o,x=e>x?e:x,i=n<i?n:i,s=n>s?n:s}return r[0][0]=o,r[0][1]=i,r[1][0]=x,r[1][1]=s,r}const F=85.051129;function H(t,e){const{size:n=2,startIndex:r=0,endIndex:o=t.length,normalize:x=!0}=e||{},i=t.slice(r,o);V(i,n,0,o-r);const s=G(i,{size:n,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(x)for(const l of s)X(l,n);return s}function J(t,e=null,n){const{size:r=2,normalize:o=!0,edgeTypes:x=!1}=n||{};e=e||[];const i=[],s=[];let l=0,u=0;for(let p=0;p<=e.length;p++){const o=e[p]||t.length,x=u,f=P(t,r,l,o);for(let e=f;e<o;e++)i[u++]=t[e];for(let e=l;e<f;e++)i[u++]=t[e];V(i,r,x,u),Q(i,r,x,u,null==n?void 0:n.maxLatitude),l=o,s[p]=u}s.pop();const f=U(i,s,{size:r,gridResolution:360,gridOffset:[-180,-180],edgeTypes:x});if(o)for(const p of f)X(p.positions,r);return f}function P(t,e,n,r){let o=-1,x=-1;for(let i=n+1;i<r;i+=e){const e=Math.abs(t[i]);e>o&&(o=e,x=i-1)}return x}function Q(t,e,n,r,o=F){const x=t[n],i=t[r-e];if(Math.abs(x-i)>180){const r=_(t,0,e,n);r[0]+=360*Math.round((i-x)/360),L(t,r),r[1]=Math.sign(r[1])*o,L(t,r),r[0]=x,L(t,r)}}function V(t,e,n,r){let o,x=t[0];for(let i=n;i<r;i+=e){o=t[i];const e=o-x;(e>180||e<-180)&&(o-=360*Math.round(e/360)),t[i]=x=o}}function X(t,e){let n;const r=t.length/e;for(let x=0;x<r&&(n=t[x*e],(n+180)%360==0);x++);const o=360*-Math.round(n/360);if(0!==o)for(let x=0;x<r;x++)t[x*e]+=o}}}]);