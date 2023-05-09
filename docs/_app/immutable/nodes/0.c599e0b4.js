import{C as Q,D as G,E as lt,F as P,G as ct,H as ut,S as B,i as N,s as W,k as w,a as q,l as $,m as E,h as g,c as I,n as b,I as D,b as v,J as S,K as O,v as X,d as L,f as Z,g as M,L as it,M as A,o as ft,N as pt,O as K,P as _t,e as C,Q as dt,x as Y,y as V,z as x,A as z,R as mt,T as ht,B as H,U as gt,V as tt,W as yt,X as bt,Y as vt,Z as kt,_ as wt,$ as $t,a0 as Et,a1 as jt,a2 as St,a3 as Ct,a4 as Lt,a5 as Mt,a6 as qt,q as It,r as Tt,a7 as Dt}from"../chunks/index.442d1546.js";import{t as U,a as Ot}from"../chunks/stores.92c5f799.js";import{w as At}from"../chunks/singletons.29410035.js";import{p as Kt}from"../chunks/stores.3486c2f1.js";const Vt=!1,zt="always",ie=Object.freeze(Object.defineProperty({__proto__:null,ssr:Vt,trailingSlash:zt},Symbol.toStringTag,{value:"Module"}));function at(s){const t=s-1;return t*t*t+1}function Ht(s,{delay:t=0,duration:e=400,easing:o=G}={}){const n=+getComputedStyle(s).opacity;return{delay:t,duration:e,easing:o,css:i=>`opacity: ${i*n}`}}function Rt(s,{delay:t=0,duration:e=400,easing:o=at,x:n=0,y:i=0,opacity:c=0}={}){const r=getComputedStyle(s),a=+r.opacity,u=r.transform==="none"?"":r.transform,m=a*(1-c),[d,_]=Q(n),[p,l]=Q(i);return{delay:t,duration:e,easing:o,css:(f,h)=>`
			transform: ${u} translate(${(1-f)*d}${_}, ${(1-f)*p}${l});
			opacity: ${a-m*h}`}}function Pt(s,{from:t,to:e},o={}){const n=getComputedStyle(s),i=n.transform==="none"?"":n.transform,[c,r]=n.transformOrigin.split(" ").map(parseFloat),a=t.left+t.width*c/e.width-(e.left+c),u=t.top+t.height*r/e.height-(e.top+r),{delay:m=0,duration:d=p=>Math.sqrt(p)*120,easing:_=at}=o;return{delay:m,duration:lt(d)?d(Math.sqrt(a*a+u*u)):d,easing:_,css:(p,l)=>{const f=l*a,h=l*u,k=p+l*t.width/e.width,y=p+l*t.height/e.height;return`transform: ${i} translate(${f}px, ${h}px) scale(${k}, ${y});`}}}function et(s){return Object.prototype.toString.call(s)==="[object Date]"}function F(s,t){if(s===t||s!==s)return()=>s;const e=typeof s;if(e!==typeof t||Array.isArray(s)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(s)){const o=t.map((n,i)=>F(s[i],n));return n=>o.map(i=>i(n))}if(e==="object"){if(!s||!t)throw new Error("Object cannot be null");if(et(s)&&et(t)){s=s.getTime(),t=t.getTime();const i=t-s;return c=>new Date(s+c*i)}const o=Object.keys(t),n={};return o.forEach(i=>{n[i]=F(s[i],t[i])}),i=>{const c={};return o.forEach(r=>{c[r]=n[r](i)}),c}}if(e==="number"){const o=t-s;return n=>s+n*o}throw new Error(`Cannot interpolate ${e} values`)}function Ut(s,t={}){const e=At(s);let o,n=s;function i(c,r){if(s==null)return e.set(s=c),Promise.resolve();n=c;let a=o,u=!1,{delay:m=0,duration:d=400,easing:_=G,interpolate:p=F}=P(P({},t),r);if(d===0)return a&&(a.abort(),a=null),e.set(s=n),Promise.resolve();const l=ct()+m;let f;return o=ut(h=>{if(h<l)return!0;u||(f=p(s,c),typeof d=="function"&&(d=d(s,c)),u=!0),a&&(a.abort(),a=null);const k=h-l;return k>d?(e.set(s=c),!1):(e.set(s=f(_(k/d))),!0)}),o.promise}return{set:i,update:(c,r)=>i(c(n,s),r),subscribe:e.subscribe}}function Ft(s){let t,e=s[0].msg+"",o;return{c(){t=new _t(!1),o=C(),this.h()},l(n){t=dt(n,!1),o=C(),this.h()},h(){t.a=o},m(n,i){t.m(e,n,i),v(n,o,i)},p(n,i){i&1&&e!==(e=n[0].msg+"")&&t.p(e)},i:K,o:K,d(n){n&&g(o),n&&t.d()}}}function Gt(s){let t,e,o;const n=[s[2]];var i=s[0].component.src;function c(r){let a={};for(let u=0;u<n.length;u+=1)a=P(a,n[u]);return{props:a}}return i&&(t=Y(i,c())),{c(){t&&V(t.$$.fragment),e=C()},l(r){t&&x(t.$$.fragment,r),e=C()},m(r,a){t&&z(t,r,a),v(r,e,a),o=!0},p(r,a){const u=a&4?mt(n,[ht(r[2])]):{};if(a&1&&i!==(i=r[0].component.src)){if(t){X();const m=t;L(m.$$.fragment,1,0,()=>{H(m,1)}),Z()}i?(t=Y(i,c()),V(t.$$.fragment),M(t.$$.fragment,1),z(t,e.parentNode,e)):t=null}else i&&t.$set(u)},i(r){o||(t&&M(t.$$.fragment,r),o=!0)},o(r){t&&L(t.$$.fragment,r),o=!1},d(r){r&&g(e),t&&H(t,r)}}}function nt(s){let t,e,o;return{c(){t=w("div"),this.h()},l(n){t=$(n,"DIV",{class:!0,role:!0,tabindex:!0}),E(t).forEach(g),this.h()},h(){b(t,"class","_toastBtn pe svelte-95rq8t"),b(t,"role","button"),b(t,"tabindex","0")},m(n,i){v(n,t,i),e||(o=[O(t,"click",s[4]),O(t,"keydown",s[8])],e=!0)},p:K,d(n){n&&g(t),e=!1,it(o)}}}function Bt(s){let t,e,o,n,i,c,r,a,u,m;const d=[Gt,Ft],_=[];function p(f,h){return f[0].component?0:1}o=p(s),n=_[o]=d[o](s);let l=s[0].dismissable&&nt(s);return{c(){t=w("div"),e=w("div"),n.c(),i=q(),l&&l.c(),c=q(),r=w("progress"),this.h()},l(f){t=$(f,"DIV",{class:!0});var h=E(t);e=$(h,"DIV",{role:!0,class:!0});var k=E(e);n.l(k),k.forEach(g),i=I(h),l&&l.l(h),c=I(h),r=$(h,"PROGRESS",{class:!0}),E(r).forEach(g),h.forEach(g),this.h()},h(){b(e,"role","status"),b(e,"class","_toastMsg svelte-95rq8t"),D(e,"pe",s[0].component),b(r,"class","_toastBar svelte-95rq8t"),r.value=s[1],b(t,"class","_toastItem svelte-95rq8t"),D(t,"pe",s[0].pausable)},m(f,h){v(f,t,h),S(t,e),_[o].m(e,null),S(t,i),l&&l.m(t,null),S(t,c),S(t,r),a=!0,u||(m=[O(t,"mouseenter",s[9]),O(t,"mouseleave",s[6])],u=!0)},p(f,[h]){let k=o;o=p(f),o===k?_[o].p(f,h):(X(),L(_[k],1,1,()=>{_[k]=null}),Z(),n=_[o],n?n.p(f,h):(n=_[o]=d[o](f),n.c()),M(n,1),n.m(e,null)),(!a||h&1)&&D(e,"pe",f[0].component),f[0].dismissable?l?l.p(f,h):(l=nt(f),l.c(),l.m(t,c)):l&&(l.d(1),l=null),(!a||h&2)&&(r.value=f[1]),(!a||h&1)&&D(t,"pe",f[0].pausable)},i(f){a||(M(n),a=!0)},o(f){L(n),a=!1},d(f){f&&g(t),_[o].d(),l&&l.d(),u=!1,it(m)}}}function R(s,t="undefined"){return typeof s===t}function Nt(s,t,e){let o,{item:n}=t,i=n.initial,c=i,r=!1,a={},u;const m=Ut(n.initial,{duration:n.duration,easing:G});A(s,m,y=>e(1,o=y));function d(){U.pop(n.id)}function _(){(o===1||o===0)&&d()}function p(){!r&&o!==i&&(m.set(o,{duration:0}),r=!0)}function l(){if(r){const y=n.duration,j=y-y*((o-c)/(i-c));m.set(i,{duration:j}).then(_),r=!1}}function f(y=document){if(R(y.hidden))return;const j=()=>y.hidden?p():l(),J="visibilitychange";y.addEventListener(J,j),u=()=>y.removeEventListener(J,j),j()}ft(f),pt(()=>{R(n.onpop,"function")&&n.onpop(n.id),u&&u()});const h=y=>{y instanceof KeyboardEvent&&["Enter"," "].includes(y.key)&&d()},k=()=>{n.pausable&&p()};return s.$$set=y=>{"item"in y&&e(0,n=y.item)},s.$$.update=()=>{if(s.$$.dirty&1&&(R(n.progress)||e(0,n.next=n.progress,n)),s.$$.dirty&131&&i!==n.next&&(e(7,i=n.next),c=o,r=!1,m.set(i).then(_)),s.$$.dirty&1&&n.component){const{props:y={},sendIdTo:j}=n.component;e(2,a={...y,...j&&{[j]:n.id}})}},[n,o,a,m,d,p,l,i,h,k]}class Wt extends B{constructor(t){super(),N(this,t,Nt,Bt,W,{item:0})}}function st(s,t,e){const o=s.slice();return o[4]=t[e],o}function rt(s,t){let e,o,n,i,c,r,a,u,m=K,d;return o=new Wt({props:{item:t[4]}}),{key:s,first:null,c(){e=w("li"),V(o.$$.fragment),n=q(),this.h()},l(_){e=$(_,"LI",{class:!0,style:!0});var p=E(e);x(o.$$.fragment,p),n=I(p),p.forEach(g),this.h()},h(){var _;b(e,"class",i=tt((_=t[4].classes)==null?void 0:_.join(" "))+" svelte-1u812xz"),b(e,"style",c=ot(t[4].theme)),this.first=e},m(_,p){v(_,e,p),z(o,e,null),S(e,n),d=!0},p(_,p){var f;t=_;const l={};p&1&&(l.item=t[4]),o.$set(l),(!d||p&1&&i!==(i=tt((f=t[4].classes)==null?void 0:f.join(" "))+" svelte-1u812xz"))&&b(e,"class",i),(!d||p&1&&c!==(c=ot(t[4].theme)))&&b(e,"style",c)},r(){u=e.getBoundingClientRect()},f(){yt(e),m(),bt(e,u)},a(){m(),m=vt(e,u,Pt,{duration:200})},i(_){d||(M(o.$$.fragment,_),kt(()=>{d&&(a&&a.end(1),r=wt(e,Rt,t[4].intro),r.start())}),d=!0)},o(_){L(o.$$.fragment,_),r&&r.invalidate(),a=$t(e,Ht,{}),d=!1},d(_){_&&g(e),H(o),_&&a&&a.end()}}}function Xt(s){let t,e=[],o=new Map,n,i=s[0];const c=r=>r[4].id;for(let r=0;r<i.length;r+=1){let a=st(s,i,r),u=c(a);o.set(u,e[r]=rt(u,a))}return{c(){t=w("ul");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=$(r,"UL",{class:!0});var a=E(t);for(let u=0;u<e.length;u+=1)e[u].l(a);a.forEach(g),this.h()},h(){b(t,"class","_toastContainer svelte-1u812xz")},m(r,a){v(r,t,a);for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(t,null);n=!0},p(r,[a]){if(a&1){i=r[0],X();for(let u=0;u<e.length;u+=1)e[u].r();e=gt(e,a,c,1,r,i,o,t,Et,rt,null,st);for(let u=0;u<e.length;u+=1)e[u].a();Z()}},i(r){if(!n){for(let a=0;a<i.length;a+=1)M(e[a]);n=!0}},o(r){for(let a=0;a<e.length;a+=1)L(e[a]);n=!1},d(r){r&&g(t);for(let a=0;a<e.length;a+=1)e[a].d()}}}function ot(s){return s?Object.keys(s).reduce((t,e)=>`${t}${e}:${s[e]};`,""):void 0}function Zt(s,t,e){let o;A(s,U,r=>e(3,o=r));let{options:n={}}=t,{target:i="default"}=t,c=[];return s.$$set=r=>{"options"in r&&e(1,n=r.options),"target"in r&&e(2,i=r.target)},s.$$.update=()=>{s.$$.dirty&6&&U._init(i,n),s.$$.dirty&12&&e(0,c=o.filter(r=>r.target===i))},[c,n,i,o]}class xt extends B{constructor(t){super(),N(this,t,Zt,Xt,W,{options:1,target:2})}}const{document:T}=qt;function Jt(s){let t;return{c(){t=w("meta"),this.h()},l(e){t=$(e,"META",{name:!0,content:!0}),this.h()},h(){b(t,"name","robots"),b(t,"content","noindex")},m(e,o){v(e,t,o)},d(e){e&&g(t)}}}function Qt(s){let t;return{c(){t=w("link"),this.h()},l(e){t=$(e,"LINK",{rel:!0,href:!0}),this.h()},h(){b(t,"rel","canonical"),b(t,"href","https://zerodevx.github.io/json-pretty-print/")},m(e,o){v(e,t,o)},d(e){e&&g(t)}}}function Yt(s){let t,e,o,n,i;return{c(){t=w("script"),o=q(),n=w("script"),i=It(`window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    // For privacy, we do not track data URLs.
    gtag('config', 'G-MK7ZXHKMWC', {
      page_title: document.head.querySelector('link[rel=canonical]') ? 'Home' : 'View',
      page_location: 'https://zerodevx.github.io/json-pretty-print/',
      page_path: '/json-pretty-print/'
    })`),this.h()},l(c){t=$(c,"SCRIPT",{src:!0});var r=E(t);r.forEach(g),o=I(c),n=$(c,"SCRIPT",{});var a=E(n);i=Tt(a,`window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    // For privacy, we do not track data URLs.
    gtag('config', 'G-MK7ZXHKMWC', {
      page_title: document.head.querySelector('link[rel=canonical]') ? 'Home' : 'View',
      page_location: 'https://zerodevx.github.io/json-pretty-print/',
      page_path: '/json-pretty-print/'
    })`),a.forEach(g),this.h()},h(){t.async=!0,Dt(t.src,e="https://www.googletagmanager.com/gtag/js?id=G-MK7ZXHKMWC")||b(t,"src",e)},m(c,r){v(c,t,r),v(c,o,r),v(c,n,r),S(n,i)},d(c){c&&g(t),c&&g(o),c&&g(n)}}}function te(s){let t,e,o,n,i,c,r;function a(l,f){var h;return((h=l[0].route)==null?void 0:h.id)==="/"?Qt:Jt}let u=a(s),m=u(s),d=Yt();const _=s[3].default,p=jt(_,s,s[2],null);return c=new xt({props:{options:{reversed:!0,intro:{y:192}}}}),{c(){m.c(),t=C(),d&&d.c(),e=C(),o=q(),p&&p.c(),n=q(),i=w("div"),V(c.$$.fragment),this.h()},l(l){const f=St("svelte-1s193md",T.head);m.l(f),t=C(),d&&d.l(f),e=C(),f.forEach(g),o=I(l),p&&p.l(l),n=I(l),i=$(l,"DIV",{class:!0});var h=E(i);x(c.$$.fragment,h),h.forEach(g),this.h()},h(){b(i,"class","wrap svelte-p1qjs0")},m(l,f){m.m(T.head,null),S(T.head,t),d&&d.m(T.head,null),S(T.head,e),v(l,o,f),p&&p.m(l,f),v(l,n,f),v(l,i,f),z(c,i,null),r=!0},p(l,[f]){u!==(u=a(l))&&(m.d(1),m=u(l),m&&(m.c(),m.m(t.parentNode,t))),p&&p.p&&(!r||f&4)&&Ct(p,_,l,l[2],r?Mt(_,l[2],f,null):Lt(l[2]),null)},i(l){r||(M(p,l),M(c.$$.fragment,l),r=!0)},o(l){L(p,l),L(c.$$.fragment,l),r=!1},d(l){m.d(l),g(t),d&&d.d(l),g(e),l&&g(o),p&&p.d(l),l&&g(n),l&&g(i),H(c)}}}function ee(s,t,e){let o,n;A(s,Ot,r=>e(1,o=r)),A(s,Kt,r=>e(0,n=r));let{$$slots:i={},$$scope:c}=t;return s.$$set=r=>{"$$scope"in r&&e(2,c=r.$$scope)},s.$$.update=()=>{s.$$.dirty&2&&o&&document.documentElement.setAttribute("data-theme",o)},[n,o,c,i]}class ae extends B{constructor(t){super(),N(this,t,ee,te,W,{})}}export{ae as component,ie as universal};
