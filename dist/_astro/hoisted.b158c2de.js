import{i as Y}from"./index.5ab1dcfa.js";console.log("hi");CSS.supports("animation-timeline","auto")?console.log("syes"):(console.log("yes"),new IntersectionObserver(e=>{e.forEach(t=>{})}));function O(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".menu-icon"),r=document.querySelector("#menu-items");e?.addEventListener("click",()=>{const n=e.getAttribute("aria-expanded")==="true";t?.classList.toggle("is-active"),e.setAttribute("aria-expanded",n?"false":"true"),e.setAttribute("aria-label",n?"Open Menu":"Close Menu"),r?.classList.toggle("display-none")})}O();document.addEventListener("astro:after-swap",O);const B="astro:before-preparation",U="astro:after-preparation",W="astro:before-swap",V="astro:after-swap",K=e=>document.dispatchEvent(new Event(e));class M extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,r,n,i,c,l,h,d,s){super(t,r),this.from=n,this.to=i,this.direction=c,this.navigationType=l,this.sourceElement=h,this.info=d,this.newDocument=s,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class j extends M{formData;loader;constructor(t,r,n,i,c,l,h,d,s){super(B,{cancelable:!0},t,r,n,i,c,l,h),this.formData=d,this.loader=s.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class G extends M{direction;viewTransition;swap;constructor(t,r,n){super(W,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=r,this.swap=n.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function z(e,t,r,n,i,c,l,h){const d=new j(e,t,r,n,i,c,window.document,l,h);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(K(U),d.navigationType!=="traverse"&&S({scrollX,scrollY}))),d}async function J(e,t,r){const n=new G(e,t,r);return document.dispatchEvent(n),n.swap(),n}const S=e=>{history.state&&(history.scrollRestoration="manual",history.replaceState({...history.state,...e},""))},D=!!document.startViewTransition,x=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),v=(e,t)=>e.origin===t.origin&&e.pathname===t.pathname&&e.search===t.search;let E,p,g=!1,q;const H=e=>document.dispatchEvent(new Event(e)),N=()=>H("astro:page-load"),Q=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},y="data-astro-transition-persist",F="data-astro-transition",_="data-astro-transition-fallback";let L,T=0;history.state?(T=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):x()&&(history.replaceState({index:T,scrollX,scrollY},""),history.scrollRestoration="manual");const Z=(e,t)=>{let r=!1,n=!1;return(...i)=>{if(r){n=!0;return}e(...i),r=!0,setTimeout(()=>{n&&(n=!1,e(...i)),r=!1},t)}};async function ee(e,t){try{const r=await fetch(e,t),n=r.headers.get("content-type")?.replace(/;.*$/,"");return n!=="text/html"&&n!=="application/xhtml+xml"?null:{html:await r.text(),redirected:r.redirected?r.url:void 0,mediaType:n}}catch{return null}}function $(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function te(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const r=document.createElement("script");r.innerHTML=t.innerHTML;for(const n of t.attributes){if(n.name==="src"){const i=new Promise(c=>{r.onload=c});e=e.then(()=>i)}r.setAttribute(n.name,n.value)}r.dataset.astroExec="",t.replaceWith(r)}return e}const C=(e,t,r,n)=>{const i=v(t,e);let c=!1;if(e.href!==location.href&&!n){if(r.history==="replace"){const l=history.state;history.replaceState({...r.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else history.pushState({...r.state,index:++T,scrollX:0,scrollY:0},"",e.href);history.scrollRestoration="manual"}E=e,i||(scrollTo({left:0,top:0,behavior:"instant"}),c=!0),n?scrollTo(n.scrollX,n.scrollY):e.hash?location.href=e.href:c||scrollTo({left:0,top:0,behavior:"instant"})};function ne(e){const t=[];for(const r of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${y}="${r.getAttribute(y)}"], link[rel=stylesheet][href="${r.getAttribute("href")}"]`)){const n=document.createElement("link");n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",r.getAttribute("href")),t.push(new Promise(i=>{["load","error"].forEach(c=>n.addEventListener(c,i)),document.head.append(n)}))}return t}async function R(e,t,r,n){const i=(o,m)=>{const f=o.getAttribute(y),w=f&&m.head.querySelector(`[${y}="${f}"]`);if(w)return w;if(o.matches("link[rel=stylesheet]")){const b=o.getAttribute("href");return m.head.querySelector(`link[rel=stylesheet][href="${b}"]`)}return null},c=()=>{const o=document.activeElement;if(o?.closest(`[${y}]`)){if(o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement){const m=o.selectionStart,f=o.selectionEnd;return{activeElement:o,start:m,end:f}}return{activeElement:o}}else return{activeElement:null}},l=({activeElement:o,start:m,end:f})=>{o&&(o.focus(),(o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement)&&(o.selectionStart=m,o.selectionEnd=f))},h=o=>{const m=document.documentElement,f=[...m.attributes].filter(({name:a})=>(m.removeAttribute(a),a.startsWith("data-astro-")));[...o.newDocument.documentElement.attributes,...f].forEach(({name:a,value:u})=>m.setAttribute(a,u));for(const a of document.scripts)for(const u of o.newDocument.scripts)if(!a.src&&a.textContent===u.textContent||a.src&&a.type===u.type&&a.src===u.src){u.dataset.astroExec="";break}for(const a of Array.from(document.head.children)){const u=i(a,o.newDocument);u?u.remove():a.remove()}document.head.append(...o.newDocument.head.children);const w=document.body,b=c();document.body.replaceWith(o.newDocument.body);for(const a of w.querySelectorAll(`[${y}]`)){const u=a.getAttribute(y),A=document.querySelector(`[${y}="${u}"]`);A&&A.replaceWith(a)}l(b)};async function d(o){function m(a){const u=a.effect;return!u||!(u instanceof KeyframeEffect)||!u.target?!1:window.getComputedStyle(u.target,u.pseudoElement).animationIterationCount==="infinite"}const f=document.getAnimations();document.documentElement.setAttribute(_,o);const b=document.getAnimations().filter(a=>!f.includes(a)&&!m(a));return Promise.all(b.map(a=>a.finished))}if(!g)document.documentElement.setAttribute(F,e.direction),n==="animate"&&await d("old");else throw new DOMException("Transition was skipped");const s=await J(e,p,h);C(s.to,s.from,t,r),H(V),n==="animate"&&!g&&d("new").then(()=>q())}async function X(e,t,r,n,i){const c=i?"traverse":n.history==="replace"?"replace":"push";if(v(t,r)&&!n.formData){c!=="traverse"&&S({scrollX,scrollY}),C(r,t,n,i);return}const l=await z(t,r,e,c,n.sourceElement,n.info,n.formData,d);if(l.defaultPrevented){location.href=r.href;return}function h(s){return s.to.hash===""||!v(s.from,s.to)||s.sourceElement instanceof HTMLFormElement}async function d(s){if(h(s)){const o=s.to.href,m={};s.formData&&(m.method="POST",m.body=s.formData);const f=await ee(o,m);if(f===null){s.preventDefault();return}if(f.redirected&&(s.to=new URL(f.redirected)),L??=new DOMParser,s.newDocument=L.parseFromString(f.html,f.mediaType),s.newDocument.querySelectorAll("noscript").forEach(b=>b.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const w=ne(s.newDocument);w.length&&await Promise.all(w)}else{s.newDocument=document;return}}if(g=!1,D)p=document.startViewTransition(async()=>await R(l,n,i));else{const s=(async()=>{await new Promise(o=>setTimeout(o)),await R(l,n,i,$())})();p={updateCallbackDone:s,ready:s,finished:new Promise(o=>q=o),skipTransition:()=>{g=!0}}}p.ready.then(async()=>{await te(),N(),Q()}),p.finished.then(()=>{document.documentElement.removeAttribute(F),document.documentElement.removeAttribute(_)}),await p.ready}async function P(e,t){if(!x()){location.href=e;return}await X("forward",E,new URL(e,location.href),t??{})}function re(e){if(!x()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,r=t.index,n=r>T?"forward":"back";T=r,X(n,E,new URL(location.href),{},t)}const k=()=>{S({scrollX,scrollY})};{(D||$()!=="none")&&(E=new URL(location.href),addEventListener("popstate",re),addEventListener("load",N),"onscrollend"in window?addEventListener("scrollend",k):addEventListener("scroll",Z(k,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}function oe(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function I(e){return e.dataset.astroReload!==void 0}(D||oe()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const r=t instanceof HTMLElement?t.target:t.target.baseVal,n=t instanceof HTMLElement?t.href:t.href.baseVal,i=new URL(n,location.href).origin;I(t)||t.hasAttribute("download")||!t.href||r&&r!=="_self"||i!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),P(n,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.querySelector('[name="astro-view-transitions-forms"]')&&document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||I(t))return;const r=t,n=e.submitter,i=new FormData(r);let c=n?.getAttribute("formaction")??r.action??location.pathname;const l=n?.getAttribute("formmethod")??r.method,h={sourceElement:n??r};if(l==="get"){const d=new URLSearchParams(i),s=new URL(c);s.search=d.toString(),c=s.toString()}else h.formData=i;e.preventDefault(),P(c,h)}),Y({prefetchAll:!0}));
