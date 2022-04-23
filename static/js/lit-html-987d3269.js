/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const m=globalThis.trustedTypes,P=m?m.createPolicy("lit-html",{createHTML:s=>s}):void 0,p=`lit$${(Math.random()+"").slice(9)}$`,V="?"+p,q=`<${V}>`,y=document,x=(s="")=>y.createComment(s),N=s=>s===null||typeof s!="object"&&typeof s!="function",W=Array.isArray,F=s=>{var t;return W(s)||typeof((t=s)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,L=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,D=/"/g,Y=/^(?:script|style|textarea|title)$/i,G=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),dt=G(1),A=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),z=new WeakMap,at=(s,t,e)=>{var i,n;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const u=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=r=new E(t.insertBefore(x(),u),u,void 0,e!=null?e:{})}return r._$AI(s),r},g=y.createTreeWalker(y,129,null,!1),J=(s,t)=>{const e=s.length-1,i=[];let n,o=t===2?"<svg>":"",r=b;for(let l=0;l<e;l++){const h=s[l];let _,d,a=-1,$=0;for(;$<h.length&&(r.lastIndex=$,d=r.exec(h),d!==null);)$=r.lastIndex,r===b?d[1]==="!--"?r=O:d[1]!==void 0?r=L:d[2]!==void 0?(Y.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=f):d[3]!==void 0&&(r=f):r===f?d[0]===">"?(r=n!=null?n:b,a=-1):d[1]===void 0?a=-2:(a=r.lastIndex-d[2].length,_=d[1],r=d[3]===void 0?f:d[3]==='"'?D:k):r===D||r===k?r=f:r===O||r===L?r=b:(r=f,n=void 0);const M=r===f&&s[l+1].startsWith("/>")?" ":"";o+=r===b?h+q:a>=0?(i.push(_),h.slice(0,a)+"$lit$"+h.slice(a)+p+M):h+p+(a===-2?(i.push(void 0),l):M)}const u=o+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[P!==void 0?P.createHTML(u):u,i]};class C{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const u=t.length-1,l=this.parts,[h,_]=J(t,e);if(this.el=C.createElement(h,i),g.currentNode=this.el.content,e===2){const d=this.el.content,a=d.firstChild;a.remove(),d.append(...a.childNodes)}for(;(n=g.nextNode())!==null&&l.length<u;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const a of n.getAttributeNames())if(a.endsWith("$lit$")||a.startsWith(p)){const $=_[r++];if(d.push(a),$!==void 0){const M=n.getAttribute($.toLowerCase()+"$lit$").split(p),w=/([.?@])?(.*)/.exec($);l.push({type:1,index:o,name:w[2],strings:M,ctor:w[1]==="."?X:w[1]==="?"?et:w[1]==="@"?it:S})}else l.push({type:6,index:o})}for(const a of d)n.removeAttribute(a)}if(Y.test(n.tagName)){const d=n.textContent.split(p),a=d.length-1;if(a>0){n.textContent=m?m.emptyScript:"";for(let $=0;$<a;$++)n.append(d[$],x()),g.nextNode(),l.push({type:2,index:++o});n.append(d[a],x())}}}else if(n.nodeType===8)if(n.data===V)l.push({type:2,index:o});else{let d=-1;for(;(d=n.data.indexOf(p,d+1))!==-1;)l.push({type:7,index:o}),d+=p.length-1}o++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function T(s,t,e=s,i){var n,o,r,u;if(t===A)return t;let l=i!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[i]:e._$Cu;const h=N(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(s),l._$AT(s,e,i)),i!==void 0?((r=(u=e)._$Cl)!==null&&r!==void 0?r:u._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=T(s,l._$AS(s,t.values),l,i)),t}class K{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(i,!0);g.currentNode=o;let r=g.nextNode(),u=0,l=0,h=n[0];for(;h!==void 0;){if(u===h.index){let _;h.type===2?_=new E(r,r.nextSibling,this,t):h.type===1?_=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(_=new st(r,this,t)),this.v.push(_),h=n[++l]}u!==(h==null?void 0:h.index)&&(r=g.nextNode(),u++)}return o}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class E{constructor(t,e,i,n){var o;this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),N(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==A&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):F(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==c&&N(this._$AH)?this._$AA.nextSibling.data=t:this.k(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=C.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(i);else{const r=new K(o,this),u=r.p(this.options);r.m(i),this.k(u),this._$AH=r}}_$AC(t){let e=z.get(t.strings);return e===void 0&&z.set(t.strings,e=new C(t)),e}S(t){W(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new E(this.M(x()),this.M(x()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class S{constructor(t,e,i,n,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=c}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(o===void 0)t=T(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==A,r&&(this._$AH=t);else{const u=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=T(this,u[i+l],e,l),h===A&&(h=this._$AH[l]),r||(r=!N(h)||h!==this._$AH[l]),h===c?t=c:t!==c&&(t+=(h!=null?h:"")+o[l+1]),this._$AH[l]=h}r&&!n&&this.C(t)}C(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class X extends S{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===c?void 0:t}}const tt=m?m.emptyScript:"";class et extends S{constructor(){super(...arguments),this.type=4}C(t){t&&t!==c?this.element.setAttribute(this.name,tt):this.element.removeAttribute(this.name)}}class it extends S{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=T(this,t,e,0))!==null&&i!==void 0?i:c)===A)return;const n=this._$AH,o=t===c&&n!==c||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==c&&(n===c||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const j=window.litHtmlPolyfillSupport;j==null||j(C,E),((R=globalThis.litHtmlVersions)!==null&&R!==void 0?R:globalThis.litHtmlVersions=[]).push("2.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},U=s=>(...t)=>({_$litDirective$:s,values:t});class B{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=U(class extends B{constructor(s){var t;if(super(s),s.type!==v.ATTRIBUTE||s.name!=="class"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){var e,i;if(this.et===void 0){this.et=new Set,s.strings!==void 0&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((e=this.st)===null||e===void 0)&&e.has(o))&&this.et.add(o);return this.render(t)}const n=s.element.classList;this.et.forEach(o=>{o in t||(n.remove(o),this.et.delete(o))});for(const o in t){const r=!!t[o];r===this.et.has(o)||((i=this.st)===null||i===void 0?void 0:i.has(o))||(r?(n.add(o),this.et.add(o)):(n.remove(o),this.et.delete(o)))}return A}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=U(class extends B{constructor(s){var t;if(super(s),s.type!==v.ATTRIBUTE||s.name!=="style"||((t=s.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const i=s[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(s,[t]){const{style:e}=s.element;if(this.ct===void 0){this.ct=new Set;for(const i in t)this.ct.add(i);return this.render(t)}this.ct.forEach(i=>{t[i]==null&&(this.ct.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const n=t[i];n!=null&&(this.ct.add(i),i.includes("-")?e.setProperty(i,n):e[i]=n)}return A}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=s=>s!=null?s:c;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=s=>s.strings===void 0,nt={},ot=(s,t=nt)=>s._$AH=t;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=U(class extends B{constructor(s){if(super(s),s.type!==v.PROPERTY&&s.type!==v.ATTRIBUTE&&s.type!==v.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Z(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===A||t===c)return t;const e=s.element,i=s.name;if(s.type===v.PROPERTY){if(t===e[i])return A}else if(s.type===v.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(i))return A}else if(s.type===v.ATTRIBUTE&&e.getAttribute(i)===t+"")return A;return ot(s),t}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=(s,t)=>{var e,i;const n=s._$AN;if(n===void 0)return!1;for(const o of n)(i=(e=o)._$AO)===null||i===void 0||i.call(e,t,!1),H(o,t);return!0},I=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while((e==null?void 0:e.size)===0)},Q=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),ht(t)}};function rt(s){this._$AN!==void 0?(I(this),this._$AM=s,Q(this)):this._$AM=s}function lt(s,t=!1,e=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(i))for(let o=e;o<i.length;o++)H(i[o],!1),I(i[o]);else i!=null&&(H(i,!1),I(i));else H(this,s)}const ht=s=>{var t,e,i,n;s.type==v.CHILD&&((t=(i=s)._$AP)!==null&&t!==void 0||(i._$AP=lt),(e=(n=s)._$AQ)!==null&&e!==void 0||(n._$AQ=rt))};class _t extends B{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Q(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)===null||i===void 0||i.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),e&&(H(this,t),I(this))}setValue(t){if(Z(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}export{dt as $,B as a,At as b,A as c,_t as d,U as e,ut as i,$t as l,ct as o,v as t,c as w,at as x};
