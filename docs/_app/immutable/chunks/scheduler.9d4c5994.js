function y(){}function x(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function D(){return Object.create(null)}function E(t){t.forEach(w)}function j(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function M(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const o of n)o(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t,n,e){t.$$.on_destroy.push(v(n,e))}function A(t,n,e,o){if(t){const c=m(t,n,e,o);return t[0](c)}}function m(t,n,e,o){return t[1]&&o?x(e.ctx.slice(),t[1](o(n))):e.ctx}function B(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],d=Math.max(n.dirty.length,c.length);for(let u=0;u<d;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function G(t,n,e,o,c,l){if(c){const d=m(n,e,o,l);t.p(d,c)}}function P(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function U(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function H(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function I(t){const n={};for(const e in t)n[e]=!0;return n}function J(t){return t&&j(t.destroy)?t.destroy:y}let i;function _(t){i=t}function f(){if(!i)throw new Error("Function called outside component initialization");return i}function K(t){f().$$.on_mount.push(t)}function L(t){f().$$.after_update.push(t)}function N(t){f().$$.on_destroy.push(t)}function Q(t){return f().$$.context.get(t)}function R(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const a=[],g=[];let s=[];const p=[],k=Promise.resolve();let b=!1;function O(){b||(b=!0,k.then(z))}function T(){return O(),k}function q(t){s.push(t)}function V(t){p.push(t)}const h=new Set;let r=0;function z(){if(r!==0)return;const t=i;do{try{for(;r<a.length;){const n=a[r];r++,_(n),C(n.$$)}}catch(n){throw a.length=0,r=0,n}for(_(null),a.length=0,r=0;g.length;)g.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(a.length);for(;p.length;)p.pop()();b=!1,h.clear(),_(t)}function C(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function W(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{q as A,W as B,i as C,_ as D,w as E,a as F,O as G,L as a,g as b,A as c,B as d,S as e,x as f,P as g,V as h,H as i,U as j,I as k,R as l,Q as m,y as n,K as o,f as p,J as q,j as r,F as s,T as t,G as u,E as v,N as w,D as x,z as y,M as z};
