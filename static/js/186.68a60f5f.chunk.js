/*! For license information please see 186.68a60f5f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdgs_website=self.webpackChunkdgs_website||[]).push([[186],{743:(e,t,o)=>{o.d(t,{a:()=>d,c:()=>u,g:()=>l,s:()=>c});var n=o(811);const i="ion-content",r=".ion-content-scroll-host",s="".concat(i,", ").concat(r),a=e=>"ION-CONTENT"===e.tagName,l=async e=>a(e)?(await new Promise((t=>(0,n.c)(e,t))),e.getScrollElement()):e,d=e=>e.closest(s),c=(e,t)=>{if(a(e)){return e.scrollToTop(t)}return Promise.resolve(e.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"}))},u=(e,t,o,n)=>{if(a(e)){return e.scrollByPoint(t,o,n)}return Promise.resolve(e.scrollBy({top:o,left:t,behavior:n>0?"smooth":"auto"}))}},186:(e,t,o)=>{o.r(t),o.d(t,{startInputShims:()=>b});var n=o(743),i=o(811),r=o(184),s=o(136);const a=new WeakMap,l=function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];a.has(e)!==o&&(o?d(e,t,n,i):c(e,t))},d=function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,n&&(r.disabled=!0),i.appendChild(r),a.set(e,r);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(s,"px,").concat(o,"px,0) scale(0)")},c=(e,t)=>{const o=a.get(e);o&&(a.delete(e),o.remove()),e.style.pointerEvents="",t.style.transform=""},u="input, textarea, [no-blur], [contenteditable]",v=(e,t,o,n)=>{const i=e.top,r=e.bottom,s=t.top,a=s+15,l=Math.min(t.bottom,n-o)-50-r,d=a-i,c=Math.round(l<0?-l:d>0?-d:0),u=Math.min(c,i-s),v=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,v)),scrollPadding:o,inputSafeY:4-(i-a)}},m="$ionPaddingTimer",w=(e,t,o)=>{const n=e[m];n&&clearTimeout(n),t>0?e.style.setProperty("--keyboard-offset","".concat(t,"px")):e[m]=setTimeout((()=>{e.style.setProperty("--keyboard-offset","0px"),o&&o()}),120)},f=(e,t,o)=>{e.addEventListener("focusout",(()=>{t&&w(t,0,o)}),{once:!0})};let h=0;const p="data-ionic-skip-scroll-assist",g=e=>{document.activeElement!==e&&(e.setAttribute(p,"true"),e.focus())},y=async function(e,t,o,r,s,a){let d=arguments.length>6&&void 0!==arguments[6]&&arguments[6],c=!(arguments.length>8&&void 0!==arguments[8])||arguments[8];if(!o&&!r)return;const u=((e,t,o,n)=>{var i;const r=null!==(i=e.closest("ion-item,[ion-item]"))&&void 0!==i?i:e;return v(r.getBoundingClientRect(),t.getBoundingClientRect(),o,n)})(e,o||r,s,arguments.length>7&&void 0!==arguments[7]?arguments[7]:0);if(o&&Math.abs(u.scrollAmount)<4)return g(t),void(a&&null!==o&&(w(o,h),f(t,o,(()=>h=0))));if(l(e,t,!0,u.inputSafeY,d),g(t),(0,i.r)((()=>e.click())),a&&o&&(h=u.scrollPadding,w(o,h)),"undefined"!==typeof window){let i;const r=async()=>{void 0!==i&&clearTimeout(i),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",r),o&&await(0,n.c)(o,0,u.scrollAmount,u.scrollDuration),l(e,t,!1,u.inputSafeY),g(t),a&&f(t,o,(()=>h=0))},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",r)};if(o){const e=await(0,n.g)(o),a=e.scrollHeight-e.clientHeight;if(c&&u.scrollAmount>a-e.scrollTop)return"password"===t.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",r),void(i=setTimeout(r,1e3))}r()}},b=async(e,t)=>{const o=document,a="ios"===t,d="android"===t,c=e.getNumber("keyboardHeight",290),v=e.getBoolean("scrollAssist",!0),m=e.getBoolean("hideCaretOnScroll",a),w=e.getBoolean("inputBlurring",a),f=e.getBoolean("scrollPadding",!0),h=Array.from(o.querySelectorAll("ion-input, ion-textarea")),g=new WeakMap,b=new WeakMap,E=await r.K.getResizeMode(),S=async e=>{await new Promise((t=>(0,i.c)(e,t)));const t=e.shadowRoot||e,o=t.querySelector("input")||t.querySelector("textarea"),a=(0,n.a)(e),u=a?null:e.closest("ion-footer");if(!o)return;if(a&&m&&!g.has(e)){const t=((e,t,o)=>{if(!o||!t)return()=>{};const n=o=>{var n;(n=t)===n.getRootNode().activeElement&&l(e,t,o)},r=()=>l(e,t,!1),s=()=>n(!0),a=()=>n(!1);return(0,i.a)(o,"ionScrollStart",s),(0,i.a)(o,"ionScrollEnd",a),t.addEventListener("blur",r),()=>{(0,i.b)(o,"ionScrollStart",s),(0,i.b)(o,"ionScrollEnd",a),t.removeEventListener("blur",r)}})(e,o,a);g.set(e,t)}if(!("date"===o.type||"datetime-local"===o.type)&&(a||u)&&v&&!b.has(e)){const t=function(e,t,o,n,i,a,l){let d=arguments.length>7&&void 0!==arguments[7]&&arguments[7];const c=a&&(void 0===l||l.mode===r.a.None);let u=!1;const v=void 0!==s.w?s.w.innerHeight:0,m=i=>{!1!==u?y(e,t,o,n,i.detail.keyboardHeight,c,d,v,!1):u=!0},w=()=>{u=!1,null===s.w||void 0===s.w||s.w.removeEventListener("ionKeyboardDidShow",m),e.removeEventListener("focusout",w,!0)},f=async()=>{t.hasAttribute(p)?t.removeAttribute(p):(y(e,t,o,n,i,c,d,v),null===s.w||void 0===s.w||s.w.addEventListener("ionKeyboardDidShow",m),e.addEventListener("focusout",w,!0))};return e.addEventListener("focusin",f,!0),()=>{e.removeEventListener("focusin",f,!0),null===s.w||void 0===s.w||s.w.removeEventListener("ionKeyboardDidShow",m),e.removeEventListener("focusout",w,!0)}}(e,o,a,u,c,f,E,d);b.set(e,t)}};w&&(()=>{let e=!0,t=!1;const o=document,n=()=>{t=!0},r=()=>{e=!0},s=n=>{if(t)return void(t=!1);const i=o.activeElement;if(!i)return;if(i.matches(u))return;const r=n.target;r!==i&&(r.matches(u)||r.closest(u)||(e=!1,setTimeout((()=>{e||i.blur()}),50)))};(0,i.a)(o,"ionScrollStart",n),o.addEventListener("focusin",r,!0),o.addEventListener("touchend",s,!1)})();for(const n of h)S(n);o.addEventListener("ionInputDidLoad",(e=>{S(e.detail)})),o.addEventListener("ionInputDidUnload",(e=>{(e=>{if(m){const t=g.get(e);t&&t(),g.delete(e)}if(v){const t=b.get(e);t&&t(),b.delete(e)}})(e.detail)}))}}}]);
//# sourceMappingURL=186.68a60f5f.chunk.js.map