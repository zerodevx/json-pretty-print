import{S as q,i as x,s as k,k as R,q as h,a as C,l as S,m as $,r as m,h as f,c as D,n as H,b as I,W as r,u as y,$ as W,Z as P}from"../../chunks/singletons-5d99e05e.js";import{p as V}from"../../chunks/stores-7597e416.js";function Z(p){var b;let e,t,l,o=p[0].status+"",u,v,n,E,c=((b=p[0].error)==null?void 0:b.message)+"",_,g;return{c(){e=R("div"),t=R("h1"),l=h("ERR "),u=h(o),v=C(),n=R("p"),E=h('Whoops! Server says: "'),_=h(c),g=h('"'),this.h()},l(a){e=S(a,"DIV",{class:!0});var s=$(e);t=S(s,"H1",{});var i=$(t);l=m(i,"ERR "),u=m(i,o),i.forEach(f),v=D(s),n=S(s,"P",{});var d=$(n);E=m(d,'Whoops! Server says: "'),_=m(d,c),g=m(d,'"'),d.forEach(f),s.forEach(f),this.h()},h(){H(e,"class","prose")},m(a,s){I(a,e,s),r(e,t),r(t,l),r(t,u),r(e,v),r(e,n),r(n,E),r(n,_),r(n,g)},p(a,[s]){var i;s&1&&o!==(o=a[0].status+"")&&y(u,o),s&1&&c!==(c=((i=a[0].error)==null?void 0:i.message)+"")&&y(_,c)},i:W,o:W,d(a){a&&f(e)}}}function j(p,e,t){let l;return P(p,V,o=>t(0,l=o)),[l]}class A extends q{constructor(e){super(),x(this,e,j,Z,k,{})}}export{A as default};