if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-86d6cfa2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/audio/voice.mp3",revision:"29d4c1e8f86bfcefa2661be4a7a3ebcc"},{url:"assets/css/styles.css",revision:"a0fd16b261a7ccde9cd5e781acd47dbe"},{url:"assets/img/Chewbacca_avatar.png",revision:"c8262f69f0a40ff89422b31e3483413e"},{url:"assets/img/ChewieConceptArt.jpg",revision:"b310d2f853e4ec9919bdaa0bc3a8c9ff"},{url:"favicon.ico",revision:"1228788b3126e531368ad2a057c69984"},{url:"index.html",revision:"edb10677e1d33066af17ef4e77475153"}],{})}));
//# sourceMappingURL=sw.js.map
