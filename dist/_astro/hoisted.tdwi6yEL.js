import{i as W}from"./index.hLBgGYxu.js";function R(){const e=new IntersectionObserver(o=>{o.forEach(n=>{n.target.classList.toggle("show",n.isIntersecting),n.isIntersecting&&e.unobserve(n.target)})},{threshold:.5});document.querySelectorAll(".scroll-animation").forEach(o=>e.observe(o))}CSS.supports("animation-timeline","auto")||(document.addEventListener("astro:page-load",R),document.addEventListener("astro:after-swap",R));function H(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".menu-icon"),o=document.querySelector("#menu-items");e?.addEventListener("click",()=>{const n=e.getAttribute("aria-expanded")==="true";t?.classList.toggle("is-active"),e.setAttribute("aria-expanded",n?"false":"true"),e.setAttribute("aria-label",n?"Open Menu":"Close Menu"),o?.classList.toggle("display-none")})}H();document.addEventListener("astro:after-swap",H);const V="astro:before-preparation",K="astro:after-preparation",j="astro:before-swap",G="astro:after-swap",z=e=>document.dispatchEvent(new Event(e));class q extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,o,n,s,c,l,d,r,f){super(t,o),this.from=n,this.to=s,this.direction=c,this.navigationType=l,this.sourceElement=d,this.info=r,this.newDocument=f,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class J extends q{formData;loader;constructor(t,o,n,s,c,l,d,r,f){super(V,{cancelable:!0},t,o,n,s,c,l,d),this.formData=r,this.loader=f.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class Q extends q{direction;viewTransition;swap;constructor(t,o,n){super(j,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=o,this.swap=n.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function Z(e,t,o,n,s,c,l,d){const r=new J(e,t,o,n,s,c,window.document,l,d);return document.dispatchEvent(r)&&(await r.loader(),r.defaultPrevented||(z(K),r.navigationType!=="traverse"&&S({scrollX,scrollY}))),r}async function ee(e,t,o){const n=new Q(e,t,o);return document.dispatchEvent(n),n.swap(),n}const te=history.pushState.bind(history),E=history.replaceState.bind(history),S=e=>{history.state&&(history.scrollRestoration="manual",E({...history.state,...e},""))},x=!!document.startViewTransition,D=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),N=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let v,b,A=!1,F;const _=e=>document.dispatchEvent(new Event(e)),$=()=>_("astro:page-load"),ne=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},w="data-astro-transition-persist",C="data-astro-transition",U="data-astro-transition-fallback";let P,g=0;history.state?(g=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):D()&&(E({index:g,scrollX,scrollY},""),history.scrollRestoration="manual");const oe=(e,t)=>{let o=!1,n=!1;return(...s)=>{if(o){n=!0;return}e(...s),o=!0,setTimeout(()=>{n&&(n=!1,e(...s)),o=!1},t)}};async function re(e,t){try{const o=await fetch(e,t),s=(o.headers.get("content-type")??"").split(";",1)[0].trim();return s!=="text/html"&&s!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:s}}catch{return null}}function X(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function se(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const o=t.getAttribute("type");if(o&&o!=="module"&&o!=="text/javascript")continue;const n=document.createElement("script");n.innerHTML=t.innerHTML;for(const s of t.attributes){if(s.name==="src"){const c=new Promise(l=>{n.onload=n.onerror=l});e=e.then(()=>c)}n.setAttribute(s.name,s.value)}n.dataset.astroExec="",t.replaceWith(n)}return e}const Y=(e,t,o,n,s)=>{const c=N(t,e),l=document.title;document.title=n;let d=!1;if(e.href!==location.href&&!s)if(o.history==="replace"){const r=history.state;E({...o.state,index:r.index,scrollX:r.scrollX,scrollY:r.scrollY},"",e.href)}else te({...o.state,index:++g,scrollX:0,scrollY:0},"",e.href);if(v=e,c||(scrollTo({left:0,top:0,behavior:"instant"}),d=!0),s)scrollTo(s.scrollX,s.scrollY);else{if(e.hash){history.scrollRestoration="auto";const r=history.state;location.href=e.href,history.state||E(r,"")}else d||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=l};function ie(e){const t=[];for(const o of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${w}="${o.getAttribute(w)}"], link[rel=stylesheet][href="${o.getAttribute("href")}"]`)){const n=document.createElement("link");n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",o.getAttribute("href")),t.push(new Promise(s=>{["load","error"].forEach(c=>n.addEventListener(c,s)),document.head.append(n)}))}return t}async function I(e,t,o,n){const s=(i,m)=>{const h=i.getAttribute(w),p=h&&m.head.querySelector(`[${w}="${h}"]`);if(p)return p;if(i.matches("link[rel=stylesheet]")){const T=i.getAttribute("href");return m.head.querySelector(`link[rel=stylesheet][href="${T}"]`)}return null},c=()=>{const i=document.activeElement;if(i?.closest(`[${w}]`)){if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement){const m=i.selectionStart,h=i.selectionEnd;return{activeElement:i,start:m,end:h}}return{activeElement:i}}else return{activeElement:null}},l=({activeElement:i,start:m,end:h})=>{i&&(i.focus(),(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)&&(i.selectionStart=m,i.selectionEnd=h))},d=i=>{const m=document.documentElement,h=[...m.attributes].filter(({name:a})=>(m.removeAttribute(a),a.startsWith("data-astro-")));[...i.newDocument.documentElement.attributes,...h].forEach(({name:a,value:u})=>m.setAttribute(a,u));for(const a of document.scripts)for(const u of i.newDocument.scripts)if(!a.src&&a.textContent===u.textContent||a.src&&a.type===u.type&&a.src===u.src){u.dataset.astroExec="";break}for(const a of Array.from(document.head.children)){const u=s(a,i.newDocument);u?u.remove():a.remove()}document.head.append(...i.newDocument.head.children);const p=document.body,T=c();document.body.replaceWith(i.newDocument.body);for(const a of p.querySelectorAll(`[${w}]`)){const u=a.getAttribute(w),L=document.querySelector(`[${w}="${u}"]`);L&&L.replaceWith(a)}l(T)};async function r(i){function m(a){const u=a.effect;return!u||!(u instanceof KeyframeEffect)||!u.target?!1:window.getComputedStyle(u.target,u.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(U,i);const T=document.getAnimations().filter(a=>!h.includes(a)&&!m(a));return Promise.all(T.map(a=>a.finished))}if(!A)document.documentElement.setAttribute(C,e.direction),n==="animate"&&await r("old");else throw new DOMException("Transition was skipped");const f=document.title,y=await ee(e,b,d);Y(y.to,y.from,t,f,o),_(G),n==="animate"&&!A&&r("new").then(()=>F())}async function B(e,t,o,n,s){if(!D()||location.origin!==o.origin){location.href=o.href;return}const c=s?"traverse":n.history==="replace"?"replace":"push";if(c!=="traverse"&&S({scrollX,scrollY}),N(t,o)&&o.hash){Y(o,t,n,document.title,s);return}const l=await Z(t,o,e,c,n.sourceElement,n.info,n.formData,d);if(l.defaultPrevented){location.href=o.href;return}async function d(r){const f=r.to.href,y={};if(r.formData){y.method="POST";const h=r.sourceElement instanceof HTMLFormElement?r.sourceElement:r.sourceElement instanceof HTMLElement&&"form"in r.sourceElement?r.sourceElement.form:r.sourceElement?.closest("form");y.body=h?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(r.formData):r.formData}const i=await re(f,y);if(i===null){r.preventDefault();return}if(i.redirected&&(r.to=new URL(i.redirected)),P??=new DOMParser,r.newDocument=P.parseFromString(i.html,i.mediaType),r.newDocument.querySelectorAll("noscript").forEach(h=>h.remove()),!r.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!r.formData){r.preventDefault();return}const m=ie(r.newDocument);m.length&&await Promise.all(m)}if(A=!1,x)b=document.startViewTransition(async()=>await I(l,n,s));else{const r=(async()=>{await new Promise(f=>setTimeout(f)),await I(l,n,s,X())})();b={updateCallbackDone:r,ready:r,finished:new Promise(f=>F=f),skipTransition:()=>{A=!0}}}b.ready.then(async()=>{await se(),$(),ne()}),b.finished.then(()=>{document.documentElement.removeAttribute(C),document.documentElement.removeAttribute(U)}),await b.ready}async function k(e,t){await B("forward",v,new URL(e,location.href),t??{})}function ae(e){if(!D()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,o=t.index,n=o>g?"forward":"back";g=o,B(n,v,new URL(location.href),{},t)}const O=()=>{S({scrollX,scrollY})};{(x||X()!=="none")&&(v=new URL(location.href),addEventListener("popstate",ae),addEventListener("load",$),"onscrollend"in window?addEventListener("scrollend",O):addEventListener("scroll",oe(O,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}function ce(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function M(e){return e.dataset.astroReload!==void 0}(x||ce()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const o=t instanceof HTMLElement?t.target:t.target.baseVal,n=t instanceof HTMLElement?t.href:t.href.baseVal,s=new URL(n,location.href).origin;M(t)||t.hasAttribute("download")||!t.href||o&&o!=="_self"||s!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),k(n,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||M(t))return;const o=t,n=e.submitter,s=new FormData(o,n);let c=n?.getAttribute("formaction")??o.action??location.pathname;const l=n?.getAttribute("formmethod")??o.method;if(l==="dialog"||location.origin!==new URL(c,location.href).origin)return;const d={sourceElement:n??o};if(l==="get"){const r=new URLSearchParams(s),f=new URL(c);f.search=r.toString(),c=f.toString()}else d.formData=s;e.preventDefault(),k(c,d)}),W({prefetchAll:!0}));
