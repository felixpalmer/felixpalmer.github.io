"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8064],{78064:(t,e,n)=>{n.d(e,{wG:()=>r,WZ:()=>A,GU:()=>Q,dj:()=>N,ct:()=>J,OT:()=>x,ap:()=>s,Ny:()=>o});const r={CLOCKWISE:1,COUNTER_CLOCKWISE:-1};function o(t,e,n={}){const r=function(t,e={}){return Math.sign(s(t,e))}(t,n);return r!==e&&(function(t,e){const{start:n=0,end:r=t.length,size:o=2}=e,i=(r-n)/o,s=Math.floor(i/2);for(let l=0;l<s;++l){const e=n+l*o,r=n+(i-1-l)*o;for(let n=0;n<o;++n){const o=t[e+n];t[e+n]=t[r+n],t[r+n]=o}}}(t,n),!0)}const i={x:0,y:1,z:2};function s(t,e={}){const{start:n=0,end:r=t.length,plane:o="xy"}=e,s=e.size||2;let l=0;const x=i[o[0]],u=i[o[1]];for(let i=n,f=r-s;i<r;i+=s)l+=(t[i+x]-t[f+x])*(t[i+u]+t[f+u]),f=i;return l/2}var l=n(4942);function x(t,e,n=2,r,o="xy"){const i=e&&e.length,s=i?e[0]*n:t.length;let l=u(t,0,s,n,!0,r&&r[0],o);const x=[];if(!l||l.next===l.prev)return x;let f,p,h,y,v,d,Z;if(i&&(l=function(t,e,n,r,o,i){const s=[];let l,x,f,c,p;for(l=0,x=e.length;l<x;l++)f=e[l]*r,c=l<x-1?e[l+1]*r:t.length,p=u(t,f,c,r,!1,o&&o[l+1],i),p===p.next&&(p.steiner=!0),s.push(z(p));for(s.sort(g),l=0;l<s.length;l++)n=a(s[l],n);return n}(t,e,l,n,r,o)),t.length>80*n){y=p=t[0],v=h=t[1];for(let e=n;e<s;e+=n)d=t[e],Z=t[e+1],d<y&&(y=d),Z<v&&(v=Z),d>p&&(p=d),Z>h&&(h=Z);f=Math.max(p-y,h-v),f=0!==f?32767/f:0}return c(l,x,n,y,v,f,0),x}function u(t,e,n,r,o,l,x){let u,f;void 0===l&&(l=s(t,{start:e,end:n,size:r,plane:x}));let c=i[x[0]],p=i[x[1]];if(o===l<0)for(u=e;u<n;u+=r)f=R(u,t[u+c],t[u+p],f);else for(u=n-r;u>=e;u-=r)f=R(u,t[u+c],t[u+p],f);return f&&k(f,f.next)&&(j(f),f=f.next),f}function f(t,e){if(!t)return t;e||(e=t);let n,r=t;do{if(n=!1,r.steiner||!k(r,r.next)&&0!==b(r.prev,r,r.next))r=r.next;else{if(j(r),r=e=r.prev,r===r.next)break;n=!0}}while(n||r!==e);return e}function c(t,e,n,r,o,i,s){if(!t)return;!s&&i&&function(t,e,n,r){let o=t;do{0===o.z&&(o.z=Z(o.x,o.y,e,n,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next}while(o!==t);o.prevZ.nextZ=null,o.prevZ=null,function(t){let e,n,r,o,i,s,l,x,u=1;do{for(o=t,t=null,x=null,r=0;o;){for(r++,s=o,i=0,n=0;n<u&&(i++,s=s.nextZ,s);n++);for(l=u;i>0||l>0&&s;)0!==i&&(0===l||!s||o.z<=s.z)?(e=o,o=o.nextZ,i--):(e=s,s=s.nextZ,l--),x?x.nextZ=e:t=e,e.prevZ=x,x=e;o=s}x.nextZ=null,u*=2}while(r>1)}(o)}(t,r,o,i);let l,x,u=t;for(;t.prev!==t.next;)if(l=t.prev,x=t.next,i?h(t,r,o,i):p(t))e.push(l.i/n|0),e.push(t.i/n|0),e.push(x.i/n|0),j(t),t=x.next,u=x.next;else if((t=x)===u){s?1===s?c(t=y(f(t),e,n),e,n,r,o,i,2):2===s&&v(t,e,n,r,o,i):c(f(t),e,n,r,o,i,1);break}}function p(t){const e=t.prev,n=t,r=t.next;if(b(e,n,r)>=0)return!1;const o=e.x,i=n.x,s=r.x,l=e.y,x=n.y,u=r.y,f=o<i?o<s?o:s:i<s?i:s,c=l<x?l<u?l:u:x<u?x:u,p=o>i?o>s?o:s:i>s?i:s,h=l>x?l>u?l:u:x>u?x:u;let y=r.next;for(;y!==e;){if(y.x>=f&&y.x<=p&&y.y>=c&&y.y<=h&&w(o,l,i,x,s,u,y.x,y.y)&&b(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function h(t,e,n,r){const o=t.prev,i=t,s=t.next;if(b(o,i,s)>=0)return!1;const l=o.x,x=i.x,u=s.x,f=o.y,c=i.y,p=s.y,h=l<x?l<u?l:u:x<u?x:u,y=f<c?f<p?f:p:c<p?c:p,v=l>x?l>u?l:u:x>u?x:u,g=f>c?f>p?f:p:c>p?c:p,a=Z(h,y,e,n,r),d=Z(v,g,e,n,r);let z=t.prevZ,M=t.nextZ;for(;z&&z.z>=a&&M&&M.z<=d;){if(z.x>=h&&z.x<=v&&z.y>=y&&z.y<=g&&z!==o&&z!==s&&w(l,f,x,c,u,p,z.x,z.y)&&b(z.prev,z,z.next)>=0)return!1;if(z=z.prevZ,M.x>=h&&M.x<=v&&M.y>=y&&M.y<=g&&M!==o&&M!==s&&w(l,f,x,c,u,p,M.x,M.y)&&b(M.prev,M,M.next)>=0)return!1;M=M.nextZ}for(;z&&z.z>=a;){if(z.x>=h&&z.x<=v&&z.y>=y&&z.y<=g&&z!==o&&z!==s&&w(l,f,x,c,u,p,z.x,z.y)&&b(z.prev,z,z.next)>=0)return!1;z=z.prevZ}for(;M&&M.z<=d;){if(M.x>=h&&M.x<=v&&M.y>=y&&M.y<=g&&M!==o&&M!==s&&w(l,f,x,c,u,p,M.x,M.y)&&b(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function y(t,e,n){let r=t;do{const o=r.prev,i=r.next.next;!k(o,i)&&m(o,r,r.next,i)&&I(o,i)&&I(i,o)&&(e.push(o.i/n|0),e.push(r.i/n|0),e.push(i.i/n|0),j(r),j(r.next),r=t=i),r=r.next}while(r!==t);return f(r)}function v(t,e,n,r,o,i){let s=t;do{let t=s.next.next;for(;t!==s.prev;){if(s.i!==t.i&&M(s,t)){let l=T(s,t);return s=f(s,s.next),l=f(l,l.next),c(s,e,n,r,o,i,0),void c(l,e,n,r,o,i,0)}t=t.next}s=s.next}while(s!==t)}function g(t,e){return t.x-e.x}function a(t,e){const n=function(t,e){let n=e;const r=t.x,o=t.y;let i,s=-1/0;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const t=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(t<=r&&t>s&&(s=t,i=n.x<n.next.x?n:n.next,t===r))return i}n=n.next}while(n!==e);if(!i)return null;const l=i,x=i.x,u=i.y;let f,c=1/0;n=i;do{r>=n.x&&n.x>=x&&r!==n.x&&w(o<u?r:s,o,x,u,o<u?s:r,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(r-n.x),I(n,t)&&(f<c||f===c&&(n.x>i.x||n.x===i.x&&d(i,n)))&&(i=n,c=f)),n=n.next}while(n!==l);return i}(t,e);if(!n)return e;const r=T(n,t);return f(r,r.next),f(n,n.next)}function d(t,e){return b(t.prev,t,e.prev)<0&&b(e.next,t,t.next)<0}function Z(t,e,n,r,o){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*o|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-r)*o|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function z(t){let e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function w(t,e,n,r,o,i,s,l){return(o-s)*(e-l)>=(t-s)*(i-l)&&(t-s)*(r-l)>=(n-s)*(e-l)&&(n-s)*(i-l)>=(o-s)*(r-l)}function M(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&m(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(I(t,e)&&I(e,t)&&function(t,e){let n=t,r=!1;const o=(t.x+e.x)/2,i=(t.y+e.y)/2;do{n.y>i!=n.next.y>i&&n.next.y!==n.y&&o<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)&&(b(t.prev,t,e.prev)||b(t,e.prev,e))||k(t,e)&&b(t.prev,t,t.next)>0&&b(e.prev,e,e.next)>0)}function b(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function k(t,e){return t.x===e.x&&t.y===e.y}function m(t,e,n,r){const o=C(b(t,e,n)),i=C(b(t,e,r)),s=C(b(n,r,t)),l=C(b(n,r,e));return o!==i&&s!==l||(!(0!==o||!O(t,n,e))||(!(0!==i||!O(t,r,e))||(!(0!==s||!O(n,t,r))||!(0!==l||!O(n,e,r)))))}function O(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function C(t){return t>0?1:t<0?-1:0}function I(t,e){return b(t.prev,t,t.next)<0?b(t,e,t.next)>=0&&b(t,t.prev,e)>=0:b(t,e,t.prev)<0||b(t,t.next,e)<0}function T(t,e){const n=new E(t.i,t.x,t.y),r=new E(e.i,e.x,e.y),o=t.next,i=e.prev;return t.next=e,e.prev=t,n.next=o,o.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function R(t,e,n,r){const o=new E(t,e,n);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function j(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}class E{constructor(t,e,n){(0,l.Z)(this,"i",void 0),(0,l.Z)(this,"x",void 0),(0,l.Z)(this,"y",void 0),(0,l.Z)(this,"prev",null),(0,l.Z)(this,"next",null),(0,l.Z)(this,"z",0),(0,l.Z)(this,"prevZ",null),(0,l.Z)(this,"nextZ",null),(0,l.Z)(this,"steiner",!1),this.i=t,this.x=e,this.y=n}}function L(t,e,n,r,o=[]){let i,s;if(8&n)i=(r[3]-t[1])/(e[1]-t[1]),s=3;else if(4&n)i=(r[1]-t[1])/(e[1]-t[1]),s=1;else if(2&n)i=(r[2]-t[0])/(e[0]-t[0]),s=2;else{if(!(1&n))return null;i=(r[0]-t[0])/(e[0]-t[0]),s=0}for(let l=0;l<t.length;l++)o[l]=(1&s)===l?r[s]:i*(e[l]-t[l])+t[l];return o}function W(t,e){let n=0;return t[0]<e[0]?n|=1:t[0]>e[2]&&(n|=2),t[1]<e[1]?n|=4:t[1]>e[3]&&(n|=8),n}function _(t,e){const n=e.length,r=t.length;if(r>0){let o=!0;for(let i=0;i<n;i++)if(t[r-n+i]!==e[i]){o=!1;break}if(o)return!1}for(let o=0;o<n;o++)t[r+o]=e[o];return!0}function G(t,e){const n=e.length;for(let r=0;r<n;r++)t[r]=e[r]}function K(t,e,n,r,o=[]){const i=r+e*n;for(let s=0;s<n;s++)o[s]=t[i+s];return o}function N(t,e){const{size:n=2,broken:r=!1,gridResolution:o=10,gridOffset:i=[0,0],startIndex:s=0,endIndex:l=t.length}=e||{},x=(l-s)/n;let u=[];const f=[u],c=K(t,0,n,s);let p,h;const y=q(c,o,i,[]),v=[];_(u,c);for(let g=1;g<x;g++){for(p=K(t,g,n,s,p),h=W(p,y);h;){L(c,p,h,y,v);const t=W(v,y);t&&(L(c,v,t,y,v),h=t),_(u,v),G(c,v),B(y,o,h),r&&u.length>n&&(u=[],f.push(u),_(u,c)),h=W(p,y)}_(u,p),G(c,p)}return r?f:f[0]}const S=0,U=1;function A(t,e=null,n){if(!t.length)return[];const{size:r=2,gridResolution:o=10,gridOffset:i=[0,0],edgeTypes:s=!1}=n||{},l=[],x=[{pos:t,types:s?new Array(t.length/r).fill(U):null,holes:e||[]}],u=[[],[]];let f=[];for(;x.length;){const{pos:t,types:e,holes:n}=x.shift();D(t,r,n[0]||t.length,u),f=q(u[0],o,i,f);const c=W(u[1],f);if(c){let o=P(t,e,r,0,n[0]||t.length,f,c);const i={pos:o[0].pos,types:o[0].types,holes:[]},l={pos:o[1].pos,types:o[1].types,holes:[]};x.push(i,l);for(let x=0;x<n.length;x++)o=P(t,e,r,n[x],n[x+1]||t.length,f,c),o[0]&&(i.holes.push(i.pos.length),i.pos=F(i.pos,o[0].pos),s&&(i.types=F(i.types,o[0].types))),o[1]&&(l.holes.push(l.pos.length),l.pos=F(l.pos,o[1].pos),s&&(l.types=F(l.types,o[1].types)))}else{const r={positions:t};s&&(r.edgeTypes=e),n.length&&(r.holeIndices=n),l.push(r)}}return l}function P(t,e,n,r,o,i,s){const l=(o-r)/n,x=[],u=[],f=[],c=[],p=[];let h,y,v;const g=K(t,l-1,n,r);let a=Math.sign(8&s?g[1]-i[3]:g[0]-i[2]),d=e&&e[l-1],Z=0,z=0;for(let w=0;w<l;w++)h=K(t,w,n,r,h),y=Math.sign(8&s?h[1]-i[3]:h[0]-i[2]),v=e&&e[r/n+w],y&&a&&a!==y&&(L(g,h,s,i,p),_(x,p)&&f.push(d),_(u,p)&&c.push(d)),y<=0?(_(x,h)&&f.push(v),Z-=y):f.length&&(f[f.length-1]=S),y>=0?(_(u,h)&&c.push(v),z+=y):c.length&&(c[c.length-1]=S),G(g,h),a=y,d=v;return[Z?{pos:x,types:e&&f}:null,z?{pos:u,types:e&&c}:null]}function q(t,e,n,r){const o=Math.floor((t[0]-n[0])/e)*e+n[0],i=Math.floor((t[1]-n[1])/e)*e+n[1];return r[0]=o,r[1]=i,r[2]=o+e,r[3]=i+e,r}function B(t,e,n){8&n?(t[1]+=e,t[3]+=e):4&n?(t[1]-=e,t[3]-=e):2&n?(t[0]+=e,t[2]+=e):1&n&&(t[0]-=e,t[2]-=e)}function D(t,e,n,r){let o=1/0,i=-1/0,s=1/0,l=-1/0;for(let x=0;x<n;x+=e){const e=t[x],n=t[x+1];o=e<o?e:o,i=e>i?e:i,s=n<s?n:s,l=n>l?n:l}return r[0][0]=o,r[0][1]=s,r[1][0]=i,r[1][1]=l,r}function F(t,e){for(let n=0;n<e.length;n++)t.push(e[n]);return t}const H=85.051129;function J(t,e){const{size:n=2,startIndex:r=0,endIndex:o=t.length,normalize:i=!0}=e||{},s=t.slice(r,o);Y(s,n,0,o-r);const l=N(s,{size:n,broken:!0,gridResolution:360,gridOffset:[-180,-180]});if(i)for(const x of l)$(x,n);return l}function Q(t,e=null,n){const{size:r=2,normalize:o=!0,edgeTypes:i=!1}=n||{};e=e||[];const s=[],l=[];let x=0,u=0;for(let c=0;c<=e.length;c++){const o=e[c]||t.length,i=u,f=V(t,r,x,o);for(let e=f;e<o;e++)s[u++]=t[e];for(let e=x;e<f;e++)s[u++]=t[e];Y(s,r,i,u),X(s,r,i,u,null==n?void 0:n.maxLatitude),x=o,l[c]=u}l.pop();const f=A(s,l,{size:r,gridResolution:360,gridOffset:[-180,-180],edgeTypes:i});if(o)for(const c of f)$(c.positions,r);return f}function V(t,e,n,r){let o=-1,i=-1;for(let s=n+1;s<r;s+=e){const e=Math.abs(t[s]);e>o&&(o=e,i=s-1)}return i}function X(t,e,n,r,o=H){const i=t[n],s=t[r-e];if(Math.abs(i-s)>180){const r=K(t,0,e,n);r[0]+=360*Math.round((s-i)/360),_(t,r),r[1]=Math.sign(r[1])*o,_(t,r),r[0]=i,_(t,r)}}function Y(t,e,n,r){let o,i=t[0];for(let s=n;s<r;s+=e){o=t[s];const e=o-i;(e>180||e<-180)&&(o-=360*Math.round(e/360)),t[s]=i=o}}function $(t,e){let n;const r=t.length/e;for(let i=0;i<r&&(n=t[i*e],(n+180)%360==0);i++);const o=360*-Math.round(n/360);if(0!==o)for(let i=0;i<r;i++)t[i*e]+=o}},4942:(t,e,n)=>{function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:()=>r})}}]);