import{S as Pe,i as Ue,s as Oe,e as z,b as $,g as te,t as A,d as le,f as C,h as _,k as S,q as P,a as B,l as N,m as j,r as U,c as R,n as h,W as w,X as O,u as Y,at as Re,Y as fe,$ as K,w as I,x as q,y as L,z as J,p as ge,Z as se,o as Ie,an as oe,am as qe}from"../../../chunks/singletons-5d99e05e.js";import{O as M,u as Le,l as Je}from"../../../chunks/icons-df033d70.js";import{u as ke,f as ve,t as ie,a as ye}from"../../../chunks/SvelteToast.svelte_svelte_type_style_lang-f07b6fd6.js";import{p as Ve}from"../../../chunks/stores-7597e416.js";function we(s,e,t){const l=s.slice();return l[10]=e[t],l[12]=t,l}function ze(s){let e,t=s[6][0]+"",l,a,i,n,r,o=s[6][1]+"",c,f,p,m,g,T=s[5],v=[];for(let u=0;u<T.length;u+=1)v[u]=Se(we(s,T,u));const Z=u=>A(v[u],1,1,()=>{v[u]=null});let E=!s[3]&&Ne();return{c(){e=S("span"),l=P(t),a=B(),i=S("ul");for(let u=0;u<v.length;u+=1)v[u].c();n=B(),r=S("span"),c=P(o),E&&E.c(),f=z(),this.h()},l(u){e=N(u,"SPAN",{class:!0,role:!0,tabindex:!0});var b=j(e);l=U(b,t),b.forEach(_),a=R(u),i=N(u,"UL",{class:!0});var k=j(i);for(let F=0;F<v.length;F+=1)v[F].l(k);k.forEach(_),n=R(u),r=N(u,"SPAN",{class:!0,role:!0,tabindex:!0});var D=j(r);c=U(D,o),D.forEach(_),E&&E.l(u),f=z(),this.h()},h(){h(e,"class","_jsonBkt svelte-d5rr90"),h(e,"role","button"),h(e,"tabindex","0"),h(i,"class","_jsonList svelte-d5rr90"),h(r,"class","_jsonBkt svelte-d5rr90"),h(r,"role","button"),h(r,"tabindex","0")},m(u,b){$(u,e,b),w(e,l),$(u,a,b),$(u,i,b);for(let k=0;k<v.length;k+=1)v[k].m(i,null);$(u,n,b),$(u,r,b),w(r,c),E&&E.m(u,b),$(u,f,b),p=!0,m||(g=[O(e,"click",s[8]),O(e,"keydown",s[9]),O(r,"click",s[8]),O(r,"keydown",s[9])],m=!0)},p(u,b){if((!p||b&64)&&t!==(t=u[6][0]+"")&&Y(l,t),b&55){T=u[5];let k;for(k=0;k<T.length;k+=1){const D=we(u,T,k);v[k]?(v[k].p(D,b),C(v[k],1)):(v[k]=Se(D),v[k].c(),C(v[k],1),v[k].m(i,null))}for(te(),k=T.length;k<v.length;k+=1)Z(k);le()}(!p||b&64)&&o!==(o=u[6][1]+"")&&Y(c,o),u[3]?E&&(E.d(1),E=null):E||(E=Ne(),E.c(),E.m(f.parentNode,f))},i(u){if(!p){for(let b=0;b<T.length;b+=1)C(v[b]);p=!0}},o(u){v=v.filter(Boolean);for(let b=0;b<v.length;b+=1)A(v[b]);p=!1},d(u){u&&_(e),u&&_(a),u&&_(i),Re(v,u),u&&_(n),u&&_(r),E&&E.d(u),u&&_(f),m=!1,fe(g)}}}function Ke(s){let e,t=s[6][0]+"",l,a,i=s[6][1]+"",n,r,o,c,f=!s[3]&&s[7]&&je();return{c(){e=S("span"),l=P(t),a=P("..."),n=P(i),f&&f.c(),r=z(),this.h()},l(p){e=N(p,"SPAN",{class:!0,role:!0,tabindex:!0});var m=j(e);l=U(m,t),a=U(m,"..."),n=U(m,i),m.forEach(_),f&&f.l(p),r=z(),this.h()},h(){h(e,"class","_jsonBkt svelte-d5rr90"),h(e,"role","button"),h(e,"tabindex","0")},m(p,m){$(p,e,m),w(e,l),w(e,a),w(e,n),f&&f.m(p,m),$(p,r,m),o||(c=[O(e,"click",s[8]),O(e,"keydown",s[9])],o=!0)},p(p,m){m&64&&t!==(t=p[6][0]+"")&&Y(l,t),m&64&&i!==(i=p[6][1]+"")&&Y(n,i),!p[3]&&p[7]?f||(f=je(),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i:K,o:K,d(p){p&&_(e),f&&f.d(p),p&&_(r),o=!1,fe(c)}}}function Me(s){let e,t=s[6][0]+"",l,a=s[6][1]+"",i,n,r=!s[3]&&Te();return{c(){e=S("span"),l=P(t),i=P(a),r&&r.c(),n=z(),this.h()},l(o){e=N(o,"SPAN",{class:!0});var c=j(e);l=U(c,t),i=U(c,a),c.forEach(_),r&&r.l(o),n=z(),this.h()},h(){h(e,"class","_jsonBkt empty svelte-d5rr90")},m(o,c){$(o,e,c),w(e,l),w(e,i),r&&r.m(o,c),$(o,n,c)},p(o,c){c&64&&t!==(t=o[6][0]+"")&&Y(l,t),c&64&&a!==(a=o[6][1]+"")&&Y(i,a),o[3]?r&&(r.d(1),r=null):r||(r=Te(),r.c(),r.m(n.parentNode,n))},i:K,o:K,d(o){o&&_(e),r&&r.d(o),o&&_(n)}}}function $e(s){let e,t,l=s[10]+"",a,i,n,r;return{c(){e=S("span"),t=P('"'),a=P(l),i=P('"'),n=S("span"),r=P(":"),this.h()},l(o){e=N(o,"SPAN",{class:!0});var c=j(e);t=U(c,'"'),a=U(c,l),i=U(c,'"'),c.forEach(_),n=N(o,"SPAN",{class:!0});var f=j(n);r=U(f,":"),f.forEach(_),this.h()},h(){h(e,"class","_jsonKey svelte-d5rr90"),h(n,"class","_jsonSep svelte-d5rr90")},m(o,c){$(o,e,c),w(e,t),w(e,a),w(e,i),$(o,n,c),w(n,r)},p(o,c){c&32&&l!==(l=o[10]+"")&&Y(a,l)},d(o){o&&_(e),o&&_(n)}}}function Fe(s){let e,t=Ce(s[0][s[10]])+"",l,a,i,n=s[12]<s[5].length-1&&Ee();return{c(){e=S("span"),l=P(t),n&&n.c(),i=z(),this.h()},l(r){e=N(r,"SPAN",{class:!0});var o=j(e);l=U(o,t),o.forEach(_),n&&n.l(r),i=z(),this.h()},h(){h(e,"class",a="_jsonVal "+ne(s[0][s[10]])+" svelte-d5rr90")},m(r,o){$(r,e,o),w(e,l),n&&n.m(r,o),$(r,i,o)},p(r,o){o&33&&t!==(t=Ce(r[0][r[10]])+"")&&Y(l,t),o&33&&a!==(a="_jsonVal "+ne(r[0][r[10]])+" svelte-d5rr90")&&h(e,"class",a),r[12]<r[5].length-1?n||(n=Ee(),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null)},i:K,o:K,d(r){r&&_(e),n&&n.d(r),r&&_(i)}}}function Xe(s){let e,t;return e=new Be({props:{json:s[0][s[10]],depth:s[1],_cur:s[2]+1,_last:s[12]===s[5].length-1}}),{c(){I(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,a){L(e,l,a),t=!0},p(l,a){const i={};a&33&&(i.json=l[0][l[10]]),a&2&&(i.depth=l[1]),a&4&&(i._cur=l[2]+1),a&32&&(i._last=l[12]===l[5].length-1),e.$set(i)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){A(e.$$.fragment,l),t=!1},d(l){J(e,l)}}}function Ee(s){let e,t;return{c(){e=S("span"),t=P(","),this.h()},l(l){e=N(l,"SPAN",{class:!0});var a=j(e);t=U(a,","),a.forEach(_),this.h()},h(){h(e,"class","_jsonSep svelte-d5rr90")},m(l,a){$(l,e,a),w(e,t)},d(l){l&&_(e)}}}function Se(s){let e,t,l,a,i,n,r,o=!s[4]&&$e(s);const c=[Xe,Fe],f=[];function p(m,g){return g&33&&(l=null),l==null&&(l=ne(m[0][m[10]])==="object"),l?0:1}return a=p(s,-1),i=f[a]=c[a](s),{c(){e=S("li"),o&&o.c(),t=B(),i.c(),n=B()},l(m){e=N(m,"LI",{});var g=j(e);o&&o.l(g),t=R(g),i.l(g),n=R(g),g.forEach(_)},m(m,g){$(m,e,g),o&&o.m(e,null),w(e,t),f[a].m(e,null),w(e,n),r=!0},p(m,g){m[4]?o&&(o.d(1),o=null):o?o.p(m,g):(o=$e(m),o.c(),o.m(e,t));let T=a;a=p(m,g),a===T?f[a].p(m,g):(te(),A(f[T],1,1,()=>{f[T]=null}),le(),i=f[a],i?i.p(m,g):(i=f[a]=c[a](m),i.c()),C(i,1),i.m(e,n))},i(m){r||(C(i),r=!0)},o(m){A(i),r=!1},d(m){m&&_(e),o&&o.d(),f[a].d()}}}function Ne(s){let e,t;return{c(){e=S("span"),t=P(","),this.h()},l(l){e=N(l,"SPAN",{class:!0});var a=j(e);t=U(a,","),a.forEach(_),this.h()},h(){h(e,"class","_jsonSep svelte-d5rr90")},m(l,a){$(l,e,a),w(e,t)},d(l){l&&_(e)}}}function je(s){let e,t;return{c(){e=S("span"),t=P(","),this.h()},l(l){e=N(l,"SPAN",{class:!0});var a=j(e);t=U(a,","),a.forEach(_),this.h()},h(){h(e,"class","_jsonSep svelte-d5rr90")},m(l,a){$(l,e,a),w(e,t)},d(l){l&&_(e)}}}function Te(s){let e,t;return{c(){e=S("span"),t=P(","),this.h()},l(l){e=N(l,"SPAN",{class:!0});var a=j(e);t=U(a,","),a.forEach(_),this.h()},h(){h(e,"class","_jsonSep svelte-d5rr90")},m(l,a){$(l,e,a),w(e,t)},d(l){l&&_(e)}}}function He(s){let e,t,l,a;const i=[Me,Ke,ze],n=[];function r(o,c){return o[5].length?o[7]?1:2:0}return e=r(s),t=n[e]=i[e](s),{c(){t.c(),l=z()},l(o){t.l(o),l=z()},m(o,c){n[e].m(o,c),$(o,l,c),a=!0},p(o,[c]){let f=e;e=r(o),e===f?n[e].p(o,c):(te(),A(n[f],1,1,()=>{n[f]=null}),le(),t=n[e],t?t.p(o,c):(t=n[e]=i[e](o),t.c()),C(t,1),t.m(l.parentNode,l))},i(o){a||(C(t),a=!0)},o(o){A(t),a=!1},d(o){n[e].d(o),o&&_(l)}}}function ne(s){return s===null?"null":typeof s}function Ce(s){const e=ne(s);return e==="string"?`"${s}"`:e==="function"?"f () {...}":e==="symbol"?s.toString():s}function We(s,e,t){let{json:l}=e,{depth:a=1/0}=e,{_cur:i=0}=e,{_last:n=!0}=e,r,o=!1,c=["",""],f=!1;function p(){t(7,f=!f)}function m(g){g instanceof KeyboardEvent&&["Enter"," "].includes(g.key)&&p()}return s.$$set=g=>{"json"in g&&t(0,l=g.json),"depth"in g&&t(1,a=g.depth),"_cur"in g&&t(2,i=g._cur),"_last"in g&&t(3,n=g._last)},s.$$.update=()=>{s.$$.dirty&17&&(t(5,r=ne(l)==="object"?Object.keys(l):[]),t(4,o=Array.isArray(l)),t(6,c=o?["[","]"]:["{","}"])),s.$$.dirty&6&&t(7,f=a<i)},[l,a,i,n,o,r,c,f,p,m]}class Be extends Pe{constructor(e){super(),Ue(this,e,We,He,Oe,{json:0,depth:1,_cur:2,_last:3})}}var Ye=function(){var s=document.getSelection();if(!s.rangeCount)return function(){};for(var e=document.activeElement,t=[],l=0;l<s.rangeCount;l++)t.push(s.getRangeAt(l));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return s.removeAllRanges(),function(){s.type==="Caret"&&s.removeAllRanges(),s.rangeCount||t.forEach(function(a){s.addRange(a)}),e&&e.focus()}},Ze=Ye,Ae={"text/plain":"Text","text/html":"Url",default:"Text"},Ge="Copy to clipboard: #{key}, Enter";function Qe(s){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return s.replace(/#{\s*key\s*}/g,e)}function xe(s,e){var t,l,a,i,n,r,o=!1;e||(e={}),t=e.debug||!1;try{a=Ze(),i=document.createRange(),n=document.getSelection(),r=document.createElement("span"),r.textContent=s,r.ariaHidden="true",r.style.all="unset",r.style.position="fixed",r.style.top=0,r.style.clip="rect(0, 0, 0, 0)",r.style.whiteSpace="pre",r.style.webkitUserSelect="text",r.style.MozUserSelect="text",r.style.msUserSelect="text",r.style.userSelect="text",r.addEventListener("copy",function(f){if(f.stopPropagation(),e.format)if(f.preventDefault(),typeof f.clipboardData>"u"){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var p=Ae[e.format]||Ae.default;window.clipboardData.setData(p,s)}else f.clipboardData.clearData(),f.clipboardData.setData(e.format,s);e.onCopy&&(f.preventDefault(),e.onCopy(f.clipboardData))}),document.body.appendChild(r),i.selectNodeContents(r),n.addRange(i);var c=document.execCommand("copy");if(!c)throw new Error("copy command was unsuccessful");o=!0}catch(f){t&&console.error("unable to copy using execCommand: ",f),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",s),e.onCopy&&e.onCopy(window.clipboardData),o=!0}catch(p){t&&console.error("unable to copy using clipboardData: ",p),t&&console.error("falling back to prompt"),l=Qe("message"in e?e.message:Ge),window.prompt(l,s)}}finally{n&&(typeof n.removeRange=="function"?n.removeRange(i):n.removeAllRanges()),r&&document.body.removeChild(r),a()}return o}var De=xe;function et(s){let e,t,l,a,i;return t=new M({props:{icon:"expand",class:"w-8 h-8"}}),{c(){e=S("button"),I(t.$$.fragment),this.h()},l(n){e=N(n,"BUTTON",{class:!0,title:!0});var r=j(e);q(t.$$.fragment,r),r.forEach(_),this.h()},h(){h(e,"class","btn btn-square ml-1"),h(e,"title","Expand all")},m(n,r){$(n,e,r),L(t,e,null),l=!0,a||(i=O(e,"click",s[11]),a=!0)},p:K,i(n){l||(C(t.$$.fragment,n),l=!0)},o(n){A(t.$$.fragment,n),l=!1},d(n){n&&_(e),J(t),a=!1,i()}}}function tt(s){let e,t,l,a,i;return t=new M({props:{icon:"collapse",class:"w-8 h-8"}}),{c(){e=S("button"),I(t.$$.fragment),this.h()},l(n){e=N(n,"BUTTON",{class:!0,title:!0});var r=j(e);q(t.$$.fragment,r),r.forEach(_),this.h()},h(){h(e,"class","btn btn-square ml-1"),h(e,"title","Collapse all")},m(n,r){$(n,e,r),L(t,e,null),l=!0,a||(i=O(e,"click",s[10]),a=!0)},p:K,i(n){l||(C(t.$$.fragment,n),l=!0)},o(n){A(t.$$.fragment,n),l=!1},d(n){n&&_(e),J(t),a=!1,i()}}}function lt(s){let e,t,l,a,i;return t=new M({props:{icon:"light_on",class:"w-8 h-8"}}),{c(){e=S("button"),I(t.$$.fragment),this.h()},l(n){e=N(n,"BUTTON",{class:!0,title:!0});var r=j(e);q(t.$$.fragment,r),r.forEach(_),this.h()},h(){h(e,"class","btn btn-square ml-1"),h(e,"title","Turn lights off")},m(n,r){$(n,e,r),L(t,e,null),l=!0,a||(i=O(e,"click",s[7]),a=!0)},p:K,i(n){l||(C(t.$$.fragment,n),l=!0)},o(n){A(t.$$.fragment,n),l=!1},d(n){n&&_(e),J(t),a=!1,i()}}}function nt(s){let e,t,l,a,i;return t=new M({props:{icon:"light_off",class:"w-8 h-8"}}),{c(){e=S("button"),I(t.$$.fragment),this.h()},l(n){e=N(n,"BUTTON",{class:!0,title:!0});var r=j(e);q(t.$$.fragment,r),r.forEach(_),this.h()},h(){h(e,"class","btn btn-square ml-1"),h(e,"title","Turn lights on")},m(n,r){$(n,e,r),L(t,e,null),l=!0,a||(i=O(e,"click",s[7]),a=!0)},p:K,i(n){l||(C(t.$$.fragment,n),l=!0)},o(n){A(t.$$.fragment,n),l=!1},d(n){n&&_(e),J(t),a=!1,i()}}}function rt(s){let e,t,l,a,i,n,r,o,c,f,p,m,g,T,v,Z,E,u,b,k,D,F,V,X,re,G,ae,ce;l=new M({props:{icon:"close",class:"w-8 h-8"}});const ue=[tt,et],H=[];function _e(d,y){return d[0]?0:1}i=_e(s),n=H[i]=ue[i](s),c=new M({props:{icon:"indent",class:"w-8 h-8"}}),m=new M({props:{icon:"size",class:"w-8 h-8"}}),v=new M({props:{icon:"copy",class:"w-8 h-8"}}),u=new M({props:{icon:"share",class:"w-8 h-8"}});const pe=[nt,lt],W=[];function me(d,y){return d[4]==="dark"?0:1}return k=me(s),D=W[k]=pe[k](s),X=new Be({props:{json:s[3],depth:s[0]}}),{c(){e=S("div"),t=S("a"),I(l.$$.fragment),a=B(),n.c(),r=B(),o=S("button"),I(c.$$.fragment),f=B(),p=S("button"),I(m.$$.fragment),g=B(),T=S("button"),I(v.$$.fragment),Z=B(),E=S("button"),I(u.$$.fragment),b=B(),D.c(),F=B(),V=S("div"),I(X.$$.fragment),this.h()},l(d){e=N(d,"DIV",{class:!0});var y=j(e);t=N(y,"A",{class:!0,title:!0,href:!0});var Q=j(t);q(l.$$.fragment,Q),Q.forEach(_),a=R(y),n.l(y),r=R(y),o=N(y,"BUTTON",{class:!0,title:!0});var x=j(o);q(c.$$.fragment,x),x.forEach(_),f=R(y),p=N(y,"BUTTON",{class:!0,title:!0});var ee=j(p);q(m.$$.fragment,ee),ee.forEach(_),g=R(y),T=N(y,"BUTTON",{class:!0,title:!0});var de=j(T);q(v.$$.fragment,de),de.forEach(_),Z=R(y),E=N(y,"BUTTON",{class:!0,title:!0});var he=j(E);q(u.$$.fragment,he),he.forEach(_),b=R(y),D.l(y),y.forEach(_),F=R(d),V=N(d,"DIV",{class:!0,style:!0});var be=j(V);q(X.$$.fragment,be),be.forEach(_),this.h()},h(){h(t,"class","btn btn-square ml-1"),h(t,"title","Close"),h(t,"href",qe+"/"),h(o,"class","btn btn-square ml-1"),h(o,"title","Indent"),h(p,"class","btn btn-square ml-1"),h(p,"title","Font size"),h(T,"class","btn btn-square ml-1"),h(T,"title","Copy to clipboard"),h(E,"class","btn btn-square ml-1"),h(E,"title","Share URL"),h(e,"class","w-full h-14 sticky top-0 flex items-center bg-base-200 shadow"),h(V,"class",re="top-12 right-0 bottom-0 left-0 font-mono tracking-tight overflow-y-auto "+s[6][s[2]]+" break-words px-2 pt-4 pb-12"),ge(V,"--jsonPaddingLeft",s[5][s[1]]+"rem")},m(d,y){$(d,e,y),w(e,t),L(l,t,null),w(e,a),H[i].m(e,null),w(e,r),w(e,o),L(c,o,null),w(e,f),w(e,p),L(m,p,null),w(e,g),w(e,T),L(v,T,null),w(e,Z),w(e,E),L(u,E,null),w(e,b),W[k].m(e,null),$(d,F,y),$(d,V,y),L(X,V,null),G=!0,ae||(ce=[O(o,"click",s[12]),O(p,"click",s[13]),O(T,"click",s[8]),O(E,"click",s[9])],ae=!0)},p(d,[y]){let Q=i;i=_e(d),i===Q?H[i].p(d,y):(te(),A(H[Q],1,1,()=>{H[Q]=null}),le(),n=H[i],n?n.p(d,y):(n=H[i]=ue[i](d),n.c()),C(n,1),n.m(e,r));let x=k;k=me(d),k===x?W[k].p(d,y):(te(),A(W[x],1,1,()=>{W[x]=null}),le(),D=W[k],D?D.p(d,y):(D=W[k]=pe[k](d),D.c()),C(D,1),D.m(e,null));const ee={};y&8&&(ee.json=d[3]),y&1&&(ee.depth=d[0]),X.$set(ee),(!G||y&4&&re!==(re="top-12 right-0 bottom-0 left-0 font-mono tracking-tight overflow-y-auto "+d[6][d[2]]+" break-words px-2 pt-4 pb-12"))&&h(V,"class",re),(!G||y&2)&&ge(V,"--jsonPaddingLeft",d[5][d[1]]+"rem")},i(d){G||(C(l.$$.fragment,d),C(n),C(c.$$.fragment,d),C(m.$$.fragment,d),C(v.$$.fragment,d),C(u.$$.fragment,d),C(D),C(X.$$.fragment,d),G=!0)},o(d){A(l.$$.fragment,d),A(n),A(c.$$.fragment,d),A(m.$$.fragment,d),A(v.$$.fragment,d),A(u.$$.fragment,d),A(D),A(X.$$.fragment,d),G=!1},d(d){d&&_(e),J(l),H[i].d(),J(c),J(m),J(v),J(u),W[k].d(),d&&_(F),d&&_(V),J(X),ae=!1,fe(ce)}}}function st(s,e,t){let l,a,i,n;se(s,ke,b=>t(14,l=b)),se(s,ve,b=>t(3,a=b)),se(s,Ve,b=>t(15,i=b)),se(s,ye,b=>t(4,n=b));const r=["0.5","1","1.5","2"],o=["text-xs","text-sm","text-base","text-lg"];let c=1/0,f=1,p=1;function m(){oe(ye,n=n==="dark"?"light":"dark",n)}function g(){De(JSON.stringify(a,null,2)),ie.push("JSON copied to clipboard")}function T(){navigator.share?navigator.share({title:"JSON Pretty Print Online",text:"Share this JSON view",url:i.url.href}):(De(i.url.href),ie.push("URL copied to clipboard"))}return Ie(()=>{if(!a)try{oe(ke,l=Le(i.params.data),l),oe(ve,a=Je.parse(l),a)}catch(b){console.error(b),ie.push("Data URL malformed")}}),[c,f,p,a,n,r,o,m,g,T,()=>t(0,c=0),()=>t(0,c=1/0),()=>{t(1,f=f===3?0:f+1)},()=>{t(2,p=p===3?0:p+1)}]}class ct extends Pe{constructor(e){super(),Ue(this,e,st,rt,Oe,{})}}export{ct as default};
