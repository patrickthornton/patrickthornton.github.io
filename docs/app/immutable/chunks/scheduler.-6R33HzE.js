function x(){}function k(t,n){for(const e in n)t[e]=n[e];return t}function M(t,n,e,o,r){t.__svelte_meta={loc:{file:n,line:e,column:o,char:r}}}function w(t){return t()}function C(){return Object.create(null)}function j(t){t.forEach(w)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function S(t){return Object.keys(t).length===0}function U(t,n){if(t!=null&&typeof t.subscribe!="function")throw new Error(`'${n}' is not a store with a 'subscribe' method`)}function v(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function A(t,n,e){t.$$.on_destroy.push(v(n,e))}function B(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function D(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|r[u];return a}return n.dirty|r}return n.dirty}function G(t,n,e,o,r,a){if(r){const f=m(n,e,o,a);t.p(f,r)}}function H(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let l;function _(t){l=t}function p(){if(!l)throw new Error("Function called outside component initialization");return l}function I(t){p().$$.on_mount.push(t)}function J(t){p().$$.after_update.push(t)}function K(t,n){return p().$$.context.set(t,n),n}const i=[],b=[];let s=[];const g=[],y=Promise.resolve();let h=!1;function E(){h||(h=!0,y.then(q))}function L(){return E(),y}function O(t){s.push(t)}const d=new Set;let c=0;function q(){if(c!==0)return;const t=l;do{try{for(;c<i.length;){const n=i[c];c++,_(n),z(n.$$)}}catch(n){throw i.length=0,c=0,n}for(_(null),i.length=0,c=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];d.has(e)||(d.add(e),e())}s.length=0}while(i.length);for(;g.length;)g.pop()();h=!1,d.clear(),_(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function N(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{D as a,M as b,B as c,A as d,J as e,K as f,H as g,b as h,C as i,q as j,O as k,l,_ as m,x as n,I as o,F as p,S as q,j as r,P as s,L as t,G as u,U as v,w,N as x,i as y,E as z};
