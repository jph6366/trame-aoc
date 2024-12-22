/*!
* Vuetify v3.7.1
* Forged by John Leider
* Released under the MIT License.
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Vuetify={},e.Vue)}(this,(function(e,t){"use strict"
const a="undefined"!=typeof window,l=a&&"IntersectionObserver"in window,o=a&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),n=a&&"EyeDropper"in window
function r(e,t,a){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,a)}function i(e,t){return e.get(s(e,t))}function s(e,t,a){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:a
throw new TypeError("Private element is not present on this object")}function u(e,t,a){const l=t.length-1
if(l<0)return void 0===e?a:e
for(let o=0;o<l;o++){if(null==e)return a
e=e[t[o]]}return null==e||void 0===e[t[l]]?a:e[t[l]]}function c(e,t){if(e===t)return!0
if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1
if(e!==Object(e)||t!==Object(t))return!1
const a=Object.keys(e)
return a.length===Object.keys(t).length&&a.every((a=>c(e[a],t[a])))}function d(e,t,a){return null!=e&&t&&"string"==typeof t?void 0!==e[t]?e[t]:u(e,(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a):a}function v(e,t,a){if(!0===t)return void 0===e?a:e
if(null==t||"boolean"==typeof t)return a
if(e!==Object(e)){if("function"!=typeof t)return a
const l=t(e,a)
return void 0===l?a:l}if("string"==typeof t)return d(e,t,a)
if(Array.isArray(t))return u(e,t,a)
if("function"!=typeof t)return a
const l=t(e,a)
return void 0===l?a:l}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return Array.from({length:e},((e,a)=>t+a))}function f(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px"
return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function m(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)}function g(e){let t
return null!==e&&"object"==typeof e&&((t=Object.getPrototypeOf(e))===Object.prototype||null===t)}function h(e){if(e&&"$el"in e){const t=e.$el
return t?.nodeType===Node.TEXT_NODE?t.nextElementSibling:t}return e}const y=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),b=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"})
function V(e){return Object.keys(e)}function w(e,t){return t.every((t=>e.hasOwnProperty(t)))}function S(e,t){const a={},l=new Set(Object.keys(e))
for(const o of t)l.has(o)&&(a[o]=e[o])
return a}function k(e,t,a){const l=Object.create(null),o=Object.create(null)
for(const n in e)t.some((e=>e instanceof RegExp?e.test(n):e===n))&&!a?.some((e=>e===n))?l[n]=e[n]:o[n]=e[n]
return[l,o]}function x(e,t){const a={...e}
return t.forEach((e=>delete a[e])),a}function N(e,t){const a={}
return t.forEach((t=>a[t]=e[t])),a}const C=/^on[^a-z]/,_=e=>C.test(e),I=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],B=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "]
function P(e){const[t,a]=k(e,[C]),l=x(t,I),[o,n]=k(a,["class","style","id",/^data-/])
return Object.assign(o,t),Object.assign(n,l),[o,n]}function A(e){return null==e?[]:Array.isArray(e)?e:[e]}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1
return Math.max(t,Math.min(a,e))}function T(e){const t=e.toString().trim()
return t.includes(".")?t.length-t.indexOf(".")-1:0}function D(e,t){return e+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0").repeat(Math.max(0,t-e.length))}function E(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0").repeat(Math.max(0,t-e.length))+e}function F(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3
if(e<t)return`${e} B`
const a=1024===t?["Ki","Mi","Gi"]:["k","M","G"]
let l=-1
for(;Math.abs(e)>=t&&l<a.length-1;)e/=t,++l
return`${e.toFixed(1)} ${a[l]}B`}function $(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0
const l={}
for(const t in e)l[t]=e[t]
for(const o in t){const n=e[o],r=t[o]
g(n)&&g(r)?l[o]=$(n,r,a):a&&Array.isArray(n)&&Array.isArray(r)?l[o]=a(n,r):l[o]=r}return l}function M(e){return e.map((e=>e.type===t.Fragment?M(e.children):e)).flat()}function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
if(O.cache.has(e))return O.cache.get(e)
const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()
return O.cache.set(e,t),t}function L(e,t){if(!t||"object"!=typeof t)return[]
if(Array.isArray(t))return t.map((t=>L(e,t))).flat(1)
if(t.suspense)return L(e,t.ssContent)
if(Array.isArray(t.children))return t.children.map((t=>L(e,t))).flat(1)
if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component]
if(t.component.subTree)return L(e,t.component.subTree).flat(1)}return[]}O.cache=new Map
var z=new WeakMap,j=new WeakMap
class H{constructor(e){r(this,z,[]),r(this,j,0),this.size=e}push(e){var t,a,l
i(z,this)[i(j,this)]=e,t=j,a=this,l=(i(j,this)+1)%this.size,t.set(s(t,a),l)}values(){return i(z,this).slice(i(j,this)).concat(i(z,this).slice(0,i(j,this)))}}function W(e){const a=t.reactive({}),l=t.computed(e)
return t.watchEffect((()=>{for(const e in l.value)a[e]=l.value[e]}),{flush:"sync"}),t.toRefs(a)}function U(e,t){return e.includes(t)}function Y(e){return e[2].toLowerCase()+e.slice(3)}const G=()=>[Function,Array]
function q(e,a){return!!(e[a="on"+t.capitalize(a)]||e[`${a}Once`]||e[`${a}Capture`]||e[`${a}OnceCapture`]||e[`${a}CaptureOnce`])}function K(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),l=1;l<t;l++)a[l-1]=arguments[l]
if(Array.isArray(e))for(const t of e)t(...a)
else"function"==typeof e&&e(...a)}function X(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const a=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map((e=>`${e}${t?':not([tabindex="-1"])':""}:not([disabled])`)).join(", ")
return[...e.querySelectorAll(a)]}function Z(e,t,a){let l,o=e.indexOf(document.activeElement)
const n="next"===t?1:-1
do{o+=n,l=e[o]}while((!l||null==l.offsetParent||!(a?.(l)??1))&&o<e.length&&o>=0)
return l}function Q(e,t){const a=X(e)
if(t)if("first"===t)a[0]?.focus()
else if("last"===t)a.at(-1)?.focus()
else if("number"==typeof t)a[t]?.focus()
else{const l=Z(a,t)
l?l.focus():Q(e,"next"===t?"first":"last")}else e!==document.activeElement&&e.contains(document.activeElement)||a[0]?.focus()}function J(e){return null==e||"string"==typeof e&&""===e.trim()}function ee(){}function te(e,t){if(!(a&&"undefined"!=typeof CSS&&void 0!==CSS.supports&&CSS.supports(`selector(${t})`)))return null
try{return!!e&&e.matches(t)}catch(e){return null}}function ae(e){return e.some((e=>!t.isVNode(e)||e.type!==t.Comment&&(e.type!==t.Fragment||ae(e.children))))?e:null}function le(){const e=t.shallowRef(),a=t=>{e.value=t}
return Object.defineProperty(a,"value",{enumerable:!0,get:()=>e.value,set:t=>e.value=t}),Object.defineProperty(a,"el",{enumerable:!0,get:()=>h(e.value)}),a}function oe(e){const t=1===e.key.length,a=!e.ctrlKey&&!e.metaKey&&!e.altKey
return t&&a}const ne=["top","bottom"],re=["start","end","left","right"]
function ie(e,t){let[a,l]=e.split(" ")
return l||(l=U(ne,a)?"start":U(re,a)?"top":"center"),{side:se(a,t),align:se(l,t)}}function se(e,t){return"start"===e?t?"right":"left":"end"===e?t?"left":"right":e}function ue(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function ce(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function de(e){return{side:e.align,align:e.side}}function ve(e){return U(ne,e.side)?"y":"x"}class pe{constructor(e){let{x:t,y:a,width:l,height:o}=e
this.x=t,this.y=a,this.width=l,this.height=o}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function fe(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function me(e){return Array.isArray(e)?new pe({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function ge(e){const t=e.getBoundingClientRect(),a=getComputedStyle(e),l=a.transform
if(l){let o,n,r,i,s
if(l.startsWith("matrix3d("))o=l.slice(9,-1).split(/, /),n=+o[0],r=+o[5],i=+o[12],s=+o[13]
else{if(!l.startsWith("matrix("))return new pe(t)
o=l.slice(7,-1).split(/, /),n=+o[0],r=+o[3],i=+o[4],s=+o[5]}const u=a.transformOrigin,c=t.x-i-(1-n)*parseFloat(u),d=t.y-s-(1-r)*parseFloat(u.slice(u.indexOf(" ")+1)),v=n?t.width/n:e.offsetWidth+1,p=r?t.height/r:e.offsetHeight+1
return new pe({x:c,y:d,width:v,height:p})}return new pe(t)}function he(e,t,a){if(void 0===e.animate)return{finished:Promise.resolve()}
let l
try{l=e.animate(t,a)}catch(e){return{finished:Promise.resolve()}}return void 0===l.finished&&(l.finished=new Promise((e=>{l.onfinish=()=>{e(l)}}))),l}const ye=new WeakMap
const be=2.4,Ve=.2126729,we=.7151522,Se=.072175,ke=.55,xe=.58,Ne=.57,Ce=.62,_e=.03,Ie=1.45,Be=5e-4,Pe=1.25,Ae=1.25,Re=.078,Te=12.82051282051282,De=.06,Ee=.001
function Fe(e,t){const a=(e.r/255)**be,l=(e.g/255)**be,o=(e.b/255)**be,n=(t.r/255)**be,r=(t.g/255)**be,i=(t.b/255)**be
let s,u=a*Ve+l*we+o*Se,c=n*Ve+r*we+i*Se
if(u<=_e&&(u+=(_e-u)**Ie),c<=_e&&(c+=(_e-c)**Ie),Math.abs(c-u)<Be)return 0
if(c>u){const e=(c**ke-u**xe)*Pe
s=e<Ee?0:e<Re?e-e*Te*De:e-De}else{const e=(c**Ce-u**Ne)*Ae
s=e>-Ee?0:e>-Re?e-e*Te*De:e+De}return 100*s}function $e(e){t.warn(`Vuetify: ${e}`)}function Me(e){t.warn(`Vuetify error: ${e}`)}const Oe=.20689655172413793,Le=e=>e>Oe**3?Math.cbrt(e):e/(3*Oe**2)+4/29,ze=e=>e>Oe?e**3:3*Oe**2*(e-4/29)
function je(e){const t=Le,a=t(e[1])
return[116*a-16,500*(t(e[0]/.95047)-a),200*(a-t(e[2]/1.08883))]}function He(e){const t=ze,a=(e[0]+16)/116
return[.95047*t(a+e[1]/500),t(a),1.08883*t(a-e[2]/200)]}const We=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Ue=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,Ye=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Ge=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4
function qe(e){const t=Array(3),a=Ue,l=We
for(let o=0;o<3;++o)t[o]=Math.round(255*R(a(l[o][0]*e[0]+l[o][1]*e[1]+l[o][2]*e[2])))
return{r:t[0],g:t[1],b:t[2]}}function Ke(e){let{r:t,g:a,b:l}=e
const o=[0,0,0],n=Ge,r=Ye
t=n(t/255),a=n(a/255),l=n(l/255)
for(let e=0;e<3;++e)o[e]=r[e][0]*t+r[e][1]*a+r[e][2]*l
return o}function Xe(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}const Ze=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Qe={rgb:(e,t,a,l)=>({r:e,g:t,b:a,a:l}),rgba:(e,t,a,l)=>({r:e,g:t,b:a,a:l}),hsl:(e,t,a,l)=>tt({h:e,s:t,l:a,a:l}),hsla:(e,t,a,l)=>tt({h:e,s:t,l:a,a:l}),hsv:(e,t,a,l)=>et({h:e,s:t,v:a,a:l}),hsva:(e,t,a,l)=>et({h:e,s:t,v:a,a:l})}
function Je(e){if("number"==typeof e)return(isNaN(e)||e<0||e>16777215)&&$e(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e}
if("string"==typeof e&&Ze.test(e)){const{groups:t}=e.match(Ze),{fn:a,values:l}=t,o=l.split(/,\s*/).map((e=>e.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(a)?parseFloat(e)/100:parseFloat(e)))
return Qe[a](...o)}if("string"==typeof e){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map((e=>e+e)).join(""):[6,8].includes(t.length)||$e(`'${e}' is not a valid hex(a) color`)
const a=parseInt(t,16)
return(isNaN(a)||a<0||a>4294967295)&&$e(`'${e}' is not a valid hex(a) color`),ut(t)}if("object"==typeof e){if(w(e,["r","g","b"]))return e
if(w(e,["h","s","l"]))return et(ot(e))
if(w(e,["h","s","v"]))return et(e)}throw new TypeError(`Invalid color: ${null==e?e:String(e)||e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function et(e){const{h:t,s:a,v:l,a:o}=e,n=e=>{const o=(e+t/60)%6
return l-l*a*Math.max(Math.min(o,4-o,1),0)},r=[n(5),n(3),n(1)].map((e=>Math.round(255*e)))
return{r:r[0],g:r[1],b:r[2],a:o}}function tt(e){return et(ot(e))}function at(e){if(!e)return{h:0,s:1,v:1,a:1}
const t=e.r/255,a=e.g/255,l=e.b/255,o=Math.max(t,a,l),n=Math.min(t,a,l)
let r=0
o!==n&&(o===t?r=60*(0+(a-l)/(o-n)):o===a?r=60*(2+(l-t)/(o-n)):o===l&&(r=60*(4+(t-a)/(o-n)))),r<0&&(r+=360)
const i=[r,0===o?0:(o-n)/o,o]
return{h:i[0],s:i[1],v:i[2],a:e.a}}function lt(e){const{h:t,s:a,v:l,a:o}=e,n=l-l*a/2
return{h:t,s:1===n||0===n?0:(l-n)/Math.min(n,1-n),l:n,a:o}}function ot(e){const{h:t,s:a,l,a:o}=e,n=l+a*Math.min(l,1-l)
return{h:t,s:0===n?0:2-2*l/n,v:n,a:o}}function nt(e){let{r:t,g:a,b:l,a:o}=e
return void 0===o?`rgb(${t}, ${a}, ${l})`:`rgba(${t}, ${a}, ${l}, ${o})`}function rt(e){return nt(et(e))}function it(e){const t=Math.round(e).toString(16)
return("00".substr(0,2-t.length)+t).toUpperCase()}function st(e){let{r:t,g:a,b:l,a:o}=e
return`#${[it(t),it(a),it(l),void 0!==o?it(Math.round(255*o)):""].join("")}`}function ut(e){e=function(e){e.startsWith("#")&&(e=e.slice(1))
e=e.replace(/([^0-9a-f])/gi,"F"),(3===e.length||4===e.length)&&(e=e.split("").map((e=>e+e)).join(""))
6!==e.length&&(e=D(D(e,6),8,"F"))
return e}(e)
let[t,a,l,o]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1
const a=[]
let l=0
for(;l<e.length;)a.push(e.substr(l,t)),l+=t
return a}(e,2).map((e=>parseInt(e,16)))
return o=void 0===o?o:o/255,{r:t,g:a,b:l,a:o}}function ct(e){return at(ut(e))}function dt(e){return st(et(e))}function vt(e,t){const a=je(Ke(e))
return a[0]=a[0]+10*t,qe(He(a))}function pt(e,t){const a=je(Ke(e))
return a[0]=a[0]-10*t,qe(He(a))}function ft(e){return Ke(Je(e))[1]}function mt(e,t){const a=ft(e),l=ft(t)
return(Math.max(a,l)+.05)/(Math.min(a,l)+.05)}function gt(e){const t=Math.abs(Fe(Je(0),Je(e)))
return Math.abs(Fe(Je(16777215),Je(e)))>Math.min(t,50)?"#fff":"#000"}function ht(e,t){return a=>Object.keys(e).reduce(((l,o)=>{const n="object"==typeof e[o]&&null!=e[o]&&!Array.isArray(e[o])?e[o]:{type:e[o]}
return l[o]=a&&o in a?{...n,default:a[o]}:n,t&&!l[o].source&&(l[o].source=t),l}),{})}const yt=ht({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component")
function bt(e,a){const l=t.getCurrentInstance()
if(!l)throw new Error(`[Vuetify] ${e} ${a||"must be called from inside a setup function"}`)
return l}function Vt(){const e=bt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables").type
return O(e?.aliasName||e?.name)}let wt=0,St=new WeakMap
function kt(){const e=bt("getUid")
if(St.has(e))return St.get(e)
{const t=wt++
return St.set(e,t),t}}kt.reset=()=>{wt=0,St=new WeakMap}
const xt=Symbol.for("vuetify:defaults")
function Nt(){const e=t.inject(xt)
if(!e)throw new Error("[Vuetify] Could not find defaults instance")
return e}function Ct(e,a){const l=Nt(),o=t.ref(e),n=t.computed((()=>{if(t.unref(a?.disabled))return l.value
const e=t.unref(a?.scoped),n=t.unref(a?.reset),r=t.unref(a?.root)
if(null==o.value&&!(e||n||r))return l.value
let i=$(o.value,{prev:l.value})
if(e)return i
if(n||r){const e=Number(n||1/0)
for(let t=0;t<=e&&(i&&"prev"in i);t++)i=i.prev
return i&&"string"==typeof r&&r in i&&(i=$($(i,{prev:i}),i[r])),i}return i.prev?$(i.prev,i):i}))
return t.provide(xt,n),n}function _t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Nt()
const o=bt("useDefaults")
if(a=a??o.type.name??o.type.__name,!a)throw new Error("[Vuetify] Could not determine component name")
const n=t.computed((()=>l.value?.[e._as??a])),r=new Proxy(e,{get(e,t){const a=Reflect.get(e,t)
return"class"===t||"style"===t?[n.value?.[t],a].filter((e=>null!=e)):"string"!=typeof t||function(e,t){return void 0!==e.props?.[t]||void 0!==e.props?.[O(t)]}(o.vnode,t)?a:void 0!==n.value?.[t]?n.value?.[t]:void 0!==l.value?.global?.[t]?l.value?.global?.[t]:a}}),i=t.shallowRef()
return t.watchEffect((()=>{if(n.value){const e=Object.entries(n.value).filter((e=>{let[t]=e
return t.startsWith(t[0].toUpperCase())}))
i.value=e.length?Object.fromEntries(e):void 0}else i.value=void 0})),{props:r,provideSubDefaults:function(){const e=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:bt("injectSelf")
const{provides:a}=t
if(a&&e in a)return a[e]}(xt,o)
t.provide(xt,t.computed((()=>i.value?$(e?.value??{},i.value):e?.value)))}}}function It(e){if(e._setup=e._setup??e.setup,!e.name)return $e("The component is missing an explicit name, unable to generate default prop value"),e
if(e._setup){e.props=ht(e.props??{},e.name)()
const t=Object.keys(e.props).filter((e=>"class"!==e&&"style"!==e))
e.filterProps=function(e){return S(e,t)},e.props._as=String,e.setup=function(t,a){const l=Nt()
if(!l.value)return e._setup(t,a)
const{props:o,provideSubDefaults:n}=_t(t,t._as??e.name,l),r=e._setup(o,a)
return n(),r}}return e}function Bt(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
return a=>(e?It:t.defineComponent)(a)}function Pt(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",l=arguments.length>2?arguments[2]:void 0
return Bt()({name:l??t.capitalize(t.camelize(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...yt()},setup(a,l){let{slots:o}=l
return()=>t.h(a.tag,{class:[e,a.class],style:a.style},o.default?.())}})}function At(e){if("function"!=typeof e.getRootNode){for(;e.parentNode;)e=e.parentNode
return e!==document?null:document}const t=e.getRootNode()
return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const Rt="cubic-bezier(0.4, 0, 0.2, 1)"
function Tt(e,t,a){return Object.keys(e).filter((e=>_(e)&&e.endsWith(t))).reduce(((l,o)=>(l[o.slice(0,-t.length)]=t=>e[o](t,a(t)),l)),{})}function Dt(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
for(;e;){if(t?$t(e):Ft(e))return e
e=e.parentElement}return document.scrollingElement}function Et(e,t){const a=[]
if(t&&e&&!t.contains(e))return a
for(;e&&(Ft(e)&&a.push(e),e!==t);)e=e.parentElement
return a}function Ft(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1
const t=window.getComputedStyle(e)
return"scroll"===t.overflowY||"auto"===t.overflowY&&e.scrollHeight>e.clientHeight}function $t(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1
const t=window.getComputedStyle(e)
return["scroll","auto"].includes(t.overflowY)}function Mt(e){bt("useRender").render=e}const Ot=[String,Function,Object,Array],Lt=Symbol.for("vuetify:icons"),zt=ht({icon:{type:Ot},tag:{type:String,required:!0}},"icon"),jt=Bt()({name:"VComponentIcon",props:zt(),setup(e,a){let{slots:l}=a
return()=>{const a=e.icon
return t.createVNode(e.tag,null,{default:()=>[e.icon?t.createVNode(a,null,null):l.default?.()]})}}}),Ht=It({name:"VSvgIcon",inheritAttrs:!1,props:zt(),setup(e,a){let{attrs:l}=a
return()=>t.createVNode(e.tag,t.mergeProps(l,{style:null}),{default:()=>[t.createVNode("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map((e=>Array.isArray(e)?t.createVNode("path",{d:e[0],"fill-opacity":e[1]},null):t.createVNode("path",{d:e},null))):t.createVNode("path",{d:e.icon},null)])]})}}),Wt=It({name:"VLigatureIcon",props:zt(),setup:e=>()=>t.createVNode(e.tag,null,{default:()=>[e.icon]})}),Ut=It({name:"VClassIcon",props:zt(),setup:e=>()=>t.createVNode(e.tag,{class:e.icon},null)})
function Yt(e){const t={svg:{component:Ht},class:{component:Ut}},a=e?.defaultSet??"mdi"
return"mdi"!==a||t.mdi||(t.mdi=qt),$({defaultSet:a,sets:t,aliases:{...Gt,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},e)}const Gt={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},qt={component:e=>t.h(Ut,{...e,class:"mdi"})},Kt={defaults:{global:{rounded:"sm"},VAvatar:{rounded:"circle"},VAutocomplete:{variant:"underlined"},VBanner:{color:"primary"},VBtn:{color:"primary",rounded:0},VCheckbox:{color:"secondary"},VCombobox:{variant:"underlined"},VSelect:{variant:"underlined"},VSlider:{color:"primary"},VTabs:{color:"primary"},VTextarea:{variant:"underlined"},VTextField:{variant:"underlined"},VToolbar:{VBtn:{color:null}}},icons:{defaultSet:"mdi",sets:{mdi:qt}},theme:{themes:{light:{colors:{primary:"#3F51B5","primary-darken-1":"#303F9F","primary-lighten-1":"#C5CAE9",secondary:"#FF4081","secondary-darken-1":"#F50057","secondary-lighten-1":"#FF80AB",accent:"#009688"}}}}},Xt={defaults:{global:{rounded:"md"},VAvatar:{rounded:"circle"},VAutocomplete:{variant:"filled"},VBanner:{color:"primary"},VBtn:{color:"primary"},VCheckbox:{color:"secondary"},VCombobox:{variant:"filled"},VSelect:{variant:"filled"},VSlider:{color:"primary"},VTabs:{color:"primary"},VTextarea:{variant:"filled"},VTextField:{variant:"filled"},VToolbar:{VBtn:{color:null}}},icons:{defaultSet:"mdi",sets:{mdi:qt}},theme:{themes:{light:{colors:{primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020"}}}}},Zt={defaults:{VAppBar:{flat:!0},VAutocomplete:{variant:"filled"},VBanner:{color:"primary"},VBottomSheet:{contentClass:"rounded-t-xl overflow-hidden"},VBtn:{color:"primary",rounded:"xl"},VBtnGroup:{rounded:"xl",VBtn:{rounded:null}},VCard:{rounded:"lg"},VCheckbox:{color:"secondary",inset:!0},VChip:{rounded:"sm"},VCombobox:{variant:"filled"},VNavigationDrawer:{},VSelect:{variant:"filled"},VSlider:{color:"primary"},VTabs:{color:"primary"},VTextarea:{variant:"filled"},VTextField:{variant:"filled"},VToolbar:{VBtn:{color:null}}},icons:{defaultSet:"mdi",sets:{mdi:qt}},theme:{themes:{light:{colors:{primary:"#6750a4",secondary:"#b4b0bb",tertiary:"#7d5260",error:"#b3261e",surface:"#fffbfe"}}}}}
var Qt=Object.freeze({__proto__:null,md1:Kt,md2:Xt,md3:Zt})
function Jt(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"content"
const o=le(),n=t.ref()
if(a){const a=new ResizeObserver((t=>{e?.(t,a),t.length&&(n.value="content"===l?t[0].contentRect:t[0].target.getBoundingClientRect())}))
t.onBeforeUnmount((()=>{a.disconnect()})),t.watch((()=>o.el),((e,t)=>{t&&(a.unobserve(t),n.value=void 0),e&&a.observe(e)}),{flush:"post"})}return{resizeRef:o,contentRect:t.readonly(n)}}const ea=Symbol.for("vuetify:layout"),ta=Symbol.for("vuetify:layout-item"),aa=ht({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),la=ht({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item")
function oa(){const e=t.inject(ea)
if(!e)throw new Error("[Vuetify] Could not find injected layout")
return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function na(e){const a=t.inject(ea)
if(!a)throw new Error("[Vuetify] Could not find injected layout")
const l=e.id??`layout-item-${kt()}`,o=bt("useLayoutItem")
t.provide(ta,{id:l})
const n=t.shallowRef(!1)
t.onDeactivated((()=>n.value=!0)),t.onActivated((()=>n.value=!1))
const{layoutItemStyles:r,layoutItemScrimStyles:i}=a.register(o,{...e,active:t.computed((()=>!n.value&&e.active.value)),id:l})
return t.onBeforeUnmount((()=>a.unregister(l))),{layoutItemStyles:r,layoutRect:a.layoutRect,layoutItemScrimStyles:i}}function ra(e){const a=t.inject(ea,null),l=t.computed((()=>a?a.rootZIndex.value-100:1e3)),o=t.ref([]),n=t.reactive(new Map),r=t.reactive(new Map),i=t.reactive(new Map),s=t.reactive(new Map),u=t.reactive(new Map),{resizeRef:c,contentRect:d}=Jt(),v=t.computed((()=>{const t=new Map,a=e.overlaps??[]
for(const e of a.filter((e=>e.includes(":")))){const[a,l]=e.split(":")
if(!o.value.includes(a)||!o.value.includes(l))continue
const i=n.get(a),s=n.get(l),u=r.get(a),c=r.get(l)
i&&s&&u&&c&&(t.set(l,{position:i.value,amount:parseInt(u.value,10)}),t.set(a,{position:s.value,amount:-parseInt(c.value,10)}))}return t})),p=t.computed((()=>{const e=[...new Set([...i.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[]
for(const a of e){const e=o.value.filter((e=>i.get(e)?.value===a))
t.push(...e)}return((e,t,a,l)=>{let o={top:0,left:0,right:0,bottom:0}
const n=[{id:"",layer:{...o}}]
for(const r of e){const e=t.get(r),i=a.get(r),s=l.get(r)
if(!e||!i||!s)continue
const u={...o,[e.value]:parseInt(o[e.value],10)+(s.value?parseInt(i.value,10):0)}
n.push({id:r,layer:u}),o=u}return n})(t,n,r,s)})),m=t.computed((()=>!Array.from(u.values()).some((e=>e.value)))),g=t.computed((()=>p.value[p.value.length-1].layer)),h=t.computed((()=>({"--v-layout-left":f(g.value.left),"--v-layout-right":f(g.value.right),"--v-layout-top":f(g.value.top),"--v-layout-bottom":f(g.value.bottom),...m.value?void 0:{transition:"none"}}))),y=t.computed((()=>p.value.slice(1).map(((e,t)=>{let{id:a}=e
const{layer:l}=p.value[t],o=r.get(a),i=n.get(a)
return{id:a,...l,size:Number(o.value),position:i.value}})))),b=e=>y.value.find((t=>t.id===e)),V=bt("createLayout"),w=t.shallowRef(!1)
t.onMounted((()=>{w.value=!0})),t.provide(ea,{register:(e,a)=>{let{id:c,order:d,position:f,layoutSize:g,elementSize:h,active:b,disableTransitions:S,absolute:k}=a
i.set(c,d),n.set(c,f),r.set(c,g),s.set(c,b),S&&u.set(c,S)
const x=L(ta,V?.vnode).indexOf(e)
x>-1?o.value.splice(x,0,c):o.value.push(c)
const N=t.computed((()=>y.value.findIndex((e=>e.id===c)))),C=t.computed((()=>l.value+2*p.value.length-2*N.value))
return{layoutItemStyles:t.computed((()=>{const e="left"===f.value||"right"===f.value,t="right"===f.value,a="bottom"===f.value,o=h.value??g.value,n=0===o?"%":"px",r={[f.value]:0,zIndex:C.value,transform:`translate${e?"X":"Y"}(${(b.value?0:-(0===o?100:o))*(t||a?-1:1)}${n})`,position:k.value||1e3!==l.value?"absolute":"fixed",...m.value?void 0:{transition:"none"}}
if(!w.value)return r
const i=y.value[N.value]
if(!i)throw new Error(`[Vuetify] Could not find layout item "${c}"`)
const s=v.value.get(c)
return s&&(i[s.position]+=s.amount),{...r,height:e?`calc(100% - ${i.top}px - ${i.bottom}px)`:h.value?`${h.value}px`:void 0,left:t?void 0:`${i.left}px`,right:t?`${i.right}px`:void 0,top:"bottom"!==f.value?`${i.top}px`:void 0,bottom:"top"!==f.value?`${i.bottom}px`:void 0,width:e?h.value?`${h.value}px`:void 0:`calc(100% - ${i.left}px - ${i.right}px)`}})),layoutItemScrimStyles:t.computed((()=>({zIndex:C.value-1}))),zIndex:C}},unregister:e=>{i.delete(e),n.delete(e),r.delete(e),s.delete(e),u.delete(e),o.value=o.value.filter((t=>t!==e))},mainRect:g,mainStyles:h,getLayoutItem:b,items:y,layoutRect:d,rootZIndex:l})
return{layoutClasses:t.computed((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),layoutStyles:t.computed((()=>({zIndex:a?l.value:void 0,position:a?"relative":void 0,overflow:a?"hidden":void 0}))),getLayoutItem:b,items:y,layoutRect:d,layoutRef:c}}function ia(e,a){let l
function o(){l=t.effectScope(),l.run((()=>a.length?a((()=>{l?.stop(),o()})):a()))}t.watch(e,(e=>{e&&!l?o():e||(l?.stop(),l=void 0)}),{immediate:!0}),t.onScopeDispose((()=>{l?.stop()}))}function sa(e,a,l){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e=>e
const r=bt("useProxiedModel"),i=t.ref(void 0!==e[a]?e[a]:l),s=O(a),u=s!==a?t.computed((()=>(e[a],!(!r.vnode.props?.hasOwnProperty(a)&&!r.vnode.props?.hasOwnProperty(s)||!r.vnode.props?.hasOwnProperty(`onUpdate:${a}`)&&!r.vnode.props?.hasOwnProperty(`onUpdate:${s}`))))):t.computed((()=>(e[a],!(!r.vnode.props?.hasOwnProperty(a)||!r.vnode.props?.hasOwnProperty(`onUpdate:${a}`)))))
ia((()=>!u.value),(()=>{t.watch((()=>e[a]),(e=>{i.value=e}))}))
const c=t.computed({get(){const t=e[a]
return o(u.value?t:i.value)},set(l){const s=n(l),c=t.toRaw(u.value?e[a]:i.value)
c!==s&&o(c)!==l&&(i.value=s,r?.emit(`update:${a}`,s))}})
return Object.defineProperty(c,"externalValue",{get:()=>u.value?e[a]:i.value}),c}var ua={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}}
const ca="$vuetify.",da=(e,t)=>e.replace(/\{(\d+)\}/g,((e,a)=>String(t[+a]))),va=(e,t,a)=>function(l){for(var o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r]
if(!l.startsWith(ca))return da(l,n)
const i=l.replace(ca,""),s=e.value&&a.value[e.value],u=t.value&&a.value[t.value]
let c=d(s,i,null)
return c||($e(`Translation key "${l}" not found in "${e.value}", trying fallback locale`),c=d(u,i,null)),c||(Me(`Translation key "${l}" not found in fallback`),c=l),"string"!=typeof c&&(Me(`Translation key "${l}" has a non-string value`),c=l),da(c,n)}
function pa(e,t){return(a,l)=>new Intl.NumberFormat([e.value,t.value],l).format(a)}function fa(e,a,l){const o=sa(e,a,e[a]??l.value)
return o.value=e[a]??l.value,t.watch(l,(t=>{null==e[a]&&(o.value=l.value)})),o}function ma(e){return t=>{const a=fa(t,"locale",e.current),l=fa(t,"fallback",e.fallback),o=fa(t,"messages",e.messages)
return{name:"vuetify",current:a,fallback:l,messages:o,t:va(a,l,o),n:pa(a,l),provide:ma({current:a,fallback:l,messages:o})}}}const ga=Symbol.for("vuetify:locale")
function ha(e){const a=e?.adapter&&(l=e?.adapter,null!=l.name)?e?.adapter:function(e){const a=t.shallowRef(e?.locale??"en"),l=t.shallowRef(e?.fallback??"en"),o=t.ref({en:ua,...e?.messages})
return{name:"vuetify",current:a,fallback:l,messages:o,t:va(a,l,o),n:pa(a,l),provide:ma({current:a,fallback:l,messages:o})}}(e)
var l
const o=function(e,a){const l=t.ref(a?.rtl??{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}),o=t.computed((()=>l.value[e.current.value]??!1))
return{isRtl:o,rtl:l,rtlClasses:t.computed((()=>"v-locale--is-"+(o.value?"rtl":"ltr")))}}(a,e)
return{...a,...o}}function ya(){const e=t.inject(ga)
if(!e)throw new Error("[Vuetify] Could not find injected locale instance")
return e}function ba(e){const a=t.inject(ga)
if(!a)throw new Error("[Vuetify] Could not find injected locale instance")
const l=a.provide(e),o=function(e,a,l){const o=t.computed((()=>l.rtl??a.value[e.current.value]??!1))
return{isRtl:o,rtl:a,rtlClasses:t.computed((()=>"v-locale--is-"+(o.value?"rtl":"ltr")))}}(l,a.rtl,e),n={...l,...o}
return t.provide(ga,n),n}function Va(){const e=t.inject(ga)
if(!e)throw new Error("[Vuetify] Could not find injected rtl instance")
return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const wa=Symbol.for("vuetify:theme"),Sa=ht({theme:String},"theme")
function ka(e){const l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}
const t={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}
if(!e)return{...t,isDisabled:!0}
const a={}
for(const[l,o]of Object.entries(e.themes??{})){const e=o.dark||"dark"===l?t.themes?.dark:t.themes?.light
a[l]=$(e,o)}return $(t,{...e,themes:a})}(e),o=t.ref(l.defaultTheme),n=t.ref(l.themes),r=t.computed((()=>{const e={}
for(const[t,a]of Object.entries(n.value)){const o=e[t]={...a,colors:{...a.colors}}
if(l.variations)for(const e of l.variations.colors){const t=o.colors[e]
if(t)for(const a of["lighten","darken"]){const n="lighten"===a?vt:pt
for(const r of p(l.variations[a],1))o.colors[`${e}-${a}-${r}`]=st(n(Je(t),r))}}for(const e of Object.keys(o.colors)){if(/^on-[a-z]/.test(e)||o.colors[`on-${e}`])continue
const t=`on-${e}`,a=Je(o.colors[e])
o.colors[t]=gt(a)}}return e})),i=t.computed((()=>r.value[o.value])),s=t.computed((()=>{const e=[]
i.value?.dark&&Ca(e,":root",["color-scheme: dark"]),Ca(e,":root",_a(i.value))
for(const[t,a]of Object.entries(r.value))Ca(e,`.v-theme--${t}`,["color-scheme: "+(a.dark?"dark":"normal"),..._a(a)])
const t=[],a=[],l=new Set(Object.values(r.value).flatMap((e=>Object.keys(e.colors))))
for(const e of l)/^on-[a-z]/.test(e)?Ca(a,`.${e}`,[`color: rgb(var(--v-theme-${e})) !important`]):(Ca(t,`.bg-${e}`,[`--v-theme-overlay-multiplier: var(--v-theme-${e}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${e})) !important`,`color: rgb(var(--v-theme-on-${e})) !important`]),Ca(a,`.text-${e}`,[`color: rgb(var(--v-theme-${e})) !important`]),Ca(a,`.border-${e}`,[`--v-border-color: var(--v-theme-${e})`]))
return e.push(...t,...a),e.map(((e,t)=>0===t?e:`    ${e}`)).join("")}))
function u(){return{style:[{children:s.value,id:"vuetify-theme-stylesheet",nonce:l.cspNonce||!1}]}}const c=t.computed((()=>l.isDisabled?void 0:`v-theme--${o.value}`))
return{install:function(e){if(l.isDisabled)return
const o=e._context.provides.usehead
if(o)if(o.push){const n=o.push(u)
a&&t.watch(s,(()=>{n.patch(u)}))}else a?(o.addHeadObjs(t.computed(u)),t.watchEffect((()=>o.updateDOM()))):o.addHeadObjs(u())
else{let r=a?document.getElementById("vuetify-theme-stylesheet"):null
function i(){if("undefined"!=typeof document&&!r){const e=document.createElement("style")
e.type="text/css",e.id="vuetify-theme-stylesheet",l.cspNonce&&e.setAttribute("nonce",l.cspNonce),r=e,document.head.appendChild(r)}r&&(r.innerHTML=s.value)}a?t.watch(s,i,{immediate:!0}):i()}},isDisabled:l.isDisabled,name:o,themes:n,current:i,computedThemes:r,themeClasses:c,styles:s,global:{name:o,current:i}}}function xa(e){bt("provideTheme")
const a=t.inject(wa,null)
if(!a)throw new Error("Could not find Vuetify theme injection")
const l=t.computed((()=>e.theme??a.name.value)),o=t.computed((()=>a.themes.value[l.value])),n=t.computed((()=>a.isDisabled?void 0:`v-theme--${l.value}`)),r={...a,name:l,current:o,themeClasses:n}
return t.provide(wa,r),r}function Na(){bt("useTheme")
const e=t.inject(wa,null)
if(!e)throw new Error("Could not find Vuetify theme injection")
return e}function Ca(e,t,a){e.push(`${t} {\n`,...a.map((e=>`  ${e};\n`)),"}\n")}function _a(e){const t=e.dark?2:1,a=e.dark?1:2,l=[]
for(const[o,n]of Object.entries(e.colors)){const e=Je(n)
l.push(`--v-theme-${o}: ${e.r},${e.g},${e.b}`),o.startsWith("on-")||l.push(`--v-theme-${o}-overlay-multiplier: ${ft(n)>.18?t:a}`)}for(const[t,a]of Object.entries(e.variables)){const e="string"==typeof a&&a.startsWith("#")?Je(a):void 0,o=e?`${e.r}, ${e.g}, ${e.b}`:void 0
l.push(`--v-${t}: ${o??a}`)}return l}const Ia=ht({...yt(),...aa({fullHeight:!0}),...Sa()},"VApp"),Ba=Bt()({name:"VApp",props:Ia(),setup(e,a){let{slots:l}=a
const o=xa(e),{layoutClasses:n,getLayoutItem:r,items:i,layoutRef:s}=ra(e),{rtlClasses:u}=Va()
return Mt((()=>t.createVNode("div",{ref:s,class:["v-application",o.themeClasses.value,n.value,u.value,e.class],style:[e.style]},[t.createVNode("div",{class:"v-application__wrap"},[l.default?.()])]))),{getLayoutItem:r,items:i,theme:o}}}),Pa=ht({tag:{type:String,default:"div"}},"tag"),Aa=ht({text:String,...yt(),...Pa()},"VToolbarTitle"),Ra=Bt()({name:"VToolbarTitle",props:Aa(),setup(e,a){let{slots:l}=a
return Mt((()=>{const a=!!(l.default||l.text||e.text)
return t.createVNode(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>[a&&t.createVNode("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,l.default?.()])]})})),{}}}),Ta=ht({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition")
function Da(e,a,l){return Bt()({name:e,props:Ta({mode:l,origin:a}),setup(a,l){let{slots:o}=l
const n={onBeforeEnter(e){a.origin&&(e.style.transformOrigin=a.origin)},onLeave(e){if(a.leaveAbsolute){const{offsetTop:t,offsetLeft:a,offsetWidth:l,offsetHeight:o}=e
e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${a}px`,e.style.width=`${l}px`,e.style.height=`${o}px`}a.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(a.leaveAbsolute&&e?._transitionInitialStyles){const{position:t,top:a,left:l,width:o,height:n}=e._transitionInitialStyles
delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=a||"",e.style.left=l||"",e.style.width=o||"",e.style.height=n||""}}}
return()=>{const l=a.group?t.TransitionGroup:t.Transition
return t.h(l,{name:a.disabled?"":e,css:!a.disabled,...a.group?void 0:{mode:a.mode},...a.disabled?{}:n},o.default)}}})}function Ea(e,a){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out"
return Bt()({name:e,props:{mode:{type:String,default:l},disabled:Boolean,group:Boolean},setup(l,o){let{slots:n}=o
const r=l.group?t.TransitionGroup:t.Transition
return()=>t.h(r,{name:l.disabled?"":e,css:!l.disabled,...l.disabled?{}:a},n.default)}})}function Fa(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
const a=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"width":"height",l=t.camelize(`offset-${a}`)
return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[a]:e.style[a]}},onEnter(t){const o=t._initialStyle
t.style.setProperty("transition","none","important"),t.style.overflow="hidden"
const n=`${t[l]}px`
t.style[a]="0",t.offsetHeight,t.style.transition=o.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[a]=n}))},onAfterEnter:n,onEnterCancelled:n,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[a]:e.style[a]},e.style.overflow="hidden",e.style[a]=`${e[l]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[a]="0"))},onAfterLeave:o,onLeaveCancelled:o}
function o(t){e&&t._parent&&t._parent.classList.remove(e),n(t)}function n(e){const t=e._initialStyle[a]
e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[a]=t),delete e._initialStyle}}const $a=ht({target:[Object,Array]},"v-dialog-transition"),Ma=Bt()({name:"VDialogTransition",props:$a(),setup(e,a){let{slots:l}=a
const o={onBeforeEnter(e){e.style.pointerEvents="none",e.style.visibility="hidden"},async onEnter(t,a){await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),t.style.visibility=""
const{x:l,y:o,sx:n,sy:r,speed:i}=La(e.target,t),s=he(t,[{transform:`translate(${l}px, ${o}px) scale(${n}, ${r})`,opacity:0},{}],{duration:225*i,easing:"cubic-bezier(0.0, 0, 0.2, 1)"})
Oa(t)?.forEach((e=>{he(e,[{opacity:0},{opacity:0,offset:.33},{}],{duration:450*i,easing:Rt})})),s.finished.then((()=>a()))},onAfterEnter(e){e.style.removeProperty("pointer-events")},onBeforeLeave(e){e.style.pointerEvents="none"},async onLeave(t,a){await new Promise((e=>requestAnimationFrame(e)))
const{x:l,y:o,sx:n,sy:r,speed:i}=La(e.target,t)
he(t,[{},{transform:`translate(${l}px, ${o}px) scale(${n}, ${r})`,opacity:0}],{duration:125*i,easing:"cubic-bezier(0.4, 0, 1, 1)"}).finished.then((()=>a())),Oa(t)?.forEach((e=>{he(e,[{},{opacity:0,offset:.2},{opacity:0}],{duration:250*i,easing:Rt})}))},onAfterLeave(e){e.style.removeProperty("pointer-events")}}
return()=>e.target?t.createVNode(t.Transition,t.mergeProps({name:"dialog-transition"},o,{css:!1}),l):t.createVNode(t.Transition,{name:"dialog-transition"},l)}})
function Oa(e){const t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children
return t&&[...t]}function La(e,t){const a=me(e),l=ge(t),[o,n]=getComputedStyle(t).transformOrigin.split(" ").map((e=>parseFloat(e))),[r,i]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ")
let s=a.left+a.width/2
"left"===r||"left"===i?s-=a.width/2:"right"!==r&&"right"!==i||(s+=a.width/2)
let u=a.top+a.height/2
"top"===r||"top"===i?u-=a.height/2:"bottom"!==r&&"bottom"!==i||(u+=a.height/2)
const c=a.width/l.width,d=a.height/l.height,v=Math.max(1,c,d),p=c/v||0,f=d/v||0,m=l.width*l.height/(window.innerWidth*window.innerHeight),g=m>.12?Math.min(1.5,10*(m-.12)+1):1
return{x:s-(o+l.left),y:u-(n+l.top),sx:p,sy:f,speed:g}}const za=Da("fab-transition","center center","out-in"),ja=Da("dialog-bottom-transition"),Ha=Da("dialog-top-transition"),Wa=Da("fade-transition"),Ua=Da("scale-transition"),Ya=Da("scroll-x-transition"),Ga=Da("scroll-x-reverse-transition"),qa=Da("scroll-y-transition"),Ka=Da("scroll-y-reverse-transition"),Xa=Da("slide-x-transition"),Za=Da("slide-x-reverse-transition"),Qa=Da("slide-y-transition"),Ja=Da("slide-y-reverse-transition"),el=Ea("expand-transition",Fa()),tl=Ea("expand-x-transition",Fa("",!0)),al=ht({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ll=Bt(!1)({name:"VDefaultsProvider",props:al(),setup(e,a){let{slots:l}=a
const{defaults:o,disabled:n,reset:r,root:i,scoped:s}=t.toRefs(e)
return Ct(o,{reset:r,root:i,scoped:s,disabled:n}),()=>l.default?.()}}),ol=ht({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension")
function nl(e){return{dimensionStyles:t.computed((()=>{const t={},a=f(e.height),l=f(e.maxHeight),o=f(e.maxWidth),n=f(e.minHeight),r=f(e.minWidth),i=f(e.width)
return null!=a&&(t.height=a),null!=l&&(t.maxHeight=l),null!=o&&(t.maxWidth=o),null!=n&&(t.minHeight=n),null!=r&&(t.minWidth=r),null!=i&&(t.width=i),t}))}}const rl=ht({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...yt(),...ol()},"VResponsive"),il=Bt()({name:"VResponsive",props:rl(),setup(e,a){let{slots:l}=a
const{aspectStyles:o}=function(e){return{aspectStyles:t.computed((()=>{const t=Number(e.aspectRatio)
return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}(e),{dimensionStyles:n}=nl(e)
return Mt((()=>t.createVNode("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[n.value,e.style]},[t.createVNode("div",{class:"v-responsive__sizer",style:o.value},null),l.additional?.(),l.default&&t.createVNode("div",{class:["v-responsive__content",e.contentClass]},[l.default()])]))),{}}})
function sl(e){return W((()=>{const t=[],a={}
if(e.value.background)if(Xe(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&(Xe(l=e.value.background)&&!/^((rgb|hsl)a?\()?var\(--/.test(l))){const t=Je(e.value.background)
if(null==t.a||1===t.a){const e=gt(t)
a.color=e,a.caretColor=e}}}else t.push(`bg-${e.value.background}`)
var l
return e.value.text&&(Xe(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}}))}function ul(e,a){const l=t.computed((()=>({text:t.isRef(e)?e.value:a?e[a]:null}))),{colorClasses:o,colorStyles:n}=sl(l)
return{textColorClasses:o,textColorStyles:n}}function cl(e,a){const l=t.computed((()=>({background:t.isRef(e)?e.value:a?e[a]:null}))),{colorClasses:o,colorStyles:n}=sl(l)
return{backgroundColorClasses:o,backgroundColorStyles:n}}const dl=ht({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded")
function vl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Vt()
return{roundedClasses:t.computed((()=>{const l=t.isRef(e)?e.value:e.rounded,o=t.isRef(e)?e.value:e.tile,n=[]
if(!0===l||""===l)n.push(`${a}--rounded`)
else if("string"==typeof l||0===l)for(const e of String(l).split(" "))n.push(`rounded-${e}`)
else(o||!1===l)&&n.push("rounded-0")
return n}))}}const pl=ht({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>!0!==e}},"transition"),fl=(e,a)=>{let{slots:l}=a
const{transition:o,disabled:n,group:r,...i}=e,{component:s=(r?t.TransitionGroup:t.Transition),...u}="object"==typeof o?o:{}
return t.h(s,t.mergeProps("string"==typeof o?{name:n?"":o}:u,"string"==typeof o?{}:Object.fromEntries(Object.entries({disabled:n,group:r}).filter((e=>{let[t,a]=e
return void 0!==a}))),i),l)}
function ml(e,t){const a=e._observe?.[t.instance.$.uid]
a&&(a.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const gl={mounted:function(e,t){if(!l)return
const a=t.modifiers||{},o=t.value,{handler:n,options:r}="object"==typeof o?o:{handler:o,options:{}},i=new IntersectionObserver((function(){let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0
const r=e._observe?.[t.instance.$.uid]
if(!r)return
const i=l.some((e=>e.isIntersecting))
!n||a.quiet&&!r.init||a.once&&!i&&!r.init||n(i,l,o),i&&a.once?ml(e,t):r.init=!0}),r)
e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)},unmounted:ml},hl=ht({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...rl(),...yt(),...dl(),...pl()},"VImg"),yl=Bt()({name:"VImg",directives:{intersect:gl},props:hl(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:o,slots:n}=a
const{backgroundColorClasses:r,backgroundColorStyles:i}=cl(t.toRef(e,"color")),{roundedClasses:s}=vl(e),u=bt("VImg"),c=t.shallowRef(""),d=t.ref(),v=t.shallowRef(e.eager?"loading":"idle"),p=t.shallowRef(),m=t.shallowRef(),g=t.computed((()=>e.src&&"object"==typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),h=t.computed((()=>g.value.aspect||p.value/m.value||0))
function y(a){if((!e.eager||!a)&&(!l||a||e.eager)){if(v.value="loading",g.value.lazySrc){const e=new Image
e.src=g.value.lazySrc,k(e,null)}g.value.src&&t.nextTick((()=>{o("loadstart",d.value?.currentSrc||g.value.src),setTimeout((()=>{if(!u.isUnmounted)if(d.value?.complete){if(d.value.naturalWidth||V(),"error"===v.value)return
h.value||k(d.value,null),"loading"===v.value&&b()}else h.value||k(d.value),w()}))}))}}function b(){u.isUnmounted||(w(),k(d.value),v.value="loaded",o("load",d.value?.currentSrc||g.value.src))}function V(){u.isUnmounted||(v.value="error",o("error",d.value?.currentSrc||g.value.src))}function w(){const e=d.value
e&&(c.value=e.currentSrc||e.src)}t.watch((()=>e.src),(()=>{y("idle"!==v.value)})),t.watch(h,((e,t)=>{!e&&t&&d.value&&k(d.value)})),t.onBeforeMount((()=>y()))
let S=-1
function k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100
const a=()=>{if(clearTimeout(S),u.isUnmounted)return
const{naturalHeight:l,naturalWidth:o}=e
l||o?(p.value=o,m.value=l):e.complete||"loading"!==v.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(p.value=1,m.value=1):S=window.setTimeout(a,t)}
a()}t.onBeforeUnmount((()=>{clearTimeout(S)}))
const x=t.computed((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),N=()=>{if(!g.value.src||"idle"===v.value)return null
const a=t.createVNode("img",{class:["v-img__img",x.value],style:{objectPosition:e.position},src:g.value.src,srcset:g.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:d,onLoad:b,onError:V},null),l=n.sources?.()
return t.createVNode(fl,{transition:e.transition,appear:!0},{default:()=>[t.withDirectives(l?t.createVNode("picture",{class:"v-img__picture"},[l,a]):a,[[t.vShow,"loaded"===v.value]])]})},C=()=>t.createVNode(fl,{transition:e.transition},{default:()=>[g.value.lazySrc&&"loaded"!==v.value&&t.createVNode("img",{class:["v-img__img","v-img__img--preload",x.value],style:{objectPosition:e.position},src:g.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),_=()=>n.placeholder?t.createVNode(fl,{transition:e.transition,appear:!0},{default:()=>[("loading"===v.value||"error"===v.value&&!n.error)&&t.createVNode("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,I=()=>n.error?t.createVNode(fl,{transition:e.transition,appear:!0},{default:()=>["error"===v.value&&t.createVNode("div",{class:"v-img__error"},[n.error()])]}):null,B=()=>e.gradient?t.createVNode("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,P=t.shallowRef(!1)
{const e=t.watch(h,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{P.value=!0}))})),e())}))}return Mt((()=>{const a=il.filterProps(e)
return t.withDirectives(t.createVNode(il,t.mergeProps({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!P.value},r.value,s.value,e.class],style:[{width:f("auto"===e.width?p.value:e.width)},i.value,e.style]},a,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>t.createVNode(t.Fragment,null,[t.createVNode(N,null,null),t.createVNode(C,null,null),t.createVNode(B,null,null),t.createVNode(_,null,null),t.createVNode(I,null,null)]),default:n.default}),[[t.resolveDirective("intersect"),{handler:y,options:e.options},null,{once:!0}]])})),{currentSrc:c,image:d,state:v,naturalWidth:p,naturalHeight:m}}}),bl=ht({border:[Boolean,Number,String]},"border")
function Vl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Vt()
return{borderClasses:t.computed((()=>{const l=t.isRef(e)?e.value:e.border,o=[]
if(!0===l||""===l)o.push(`${a}--border`)
else if("string"==typeof l||0===l)for(const e of String(l).split(" "))o.push(`border-${e}`)
return o}))}}const wl=ht({elevation:{type:[Number,String],validator(e){const t=parseInt(e)
return!isNaN(t)&&t>=0&&t<=24}}},"elevation")
function Sl(e){return{elevationClasses:t.computed((()=>{const a=t.isRef(e)?e.value:e.elevation,l=[]
return null==a||l.push(`elevation-${a}`),l}))}}const kl=[null,"prominent","default","comfortable","compact"],xl=ht({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>kl.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...bl(),...yt(),...wl(),...dl(),...Pa({tag:"header"}),...Sa()},"VToolbar"),Nl=Bt()({name:"VToolbar",props:xl(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=cl(t.toRef(e,"color")),{borderClasses:r}=Vl(e),{elevationClasses:i}=Sl(e),{roundedClasses:s}=vl(e),{themeClasses:u}=xa(e),{rtlClasses:c}=Va(),d=t.shallowRef(!(!e.extended&&!l.extension?.())),v=t.computed((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),p=t.computed((()=>d.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0))
return Ct({VBtn:{variant:"text"}}),Mt((()=>{const a=!(!e.title&&!l.title),m=!(!l.image&&!e.image),g=l.extension?.()
return d.value=!(!e.extended&&!g),t.createVNode(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,r.value,i.value,s.value,u.value,c.value,e.class],style:[n.value,e.style]},{default:()=>[m&&t.createVNode("div",{key:"image",class:"v-toolbar__image"},[l.image?t.createVNode(ll,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):t.createVNode(yl,{key:"image-img",cover:!0,src:e.image},null)]),t.createVNode(ll,{defaults:{VTabs:{height:f(v.value)}}},{default:()=>[t.createVNode("div",{class:"v-toolbar__content",style:{height:f(v.value)}},[l.prepend&&t.createVNode("div",{class:"v-toolbar__prepend"},[l.prepend?.()]),a&&t.createVNode(Ra,{key:"title",text:e.title},{text:l.title}),l.default?.(),l.append&&t.createVNode("div",{class:"v-toolbar__append"},[l.append?.()])])]}),t.createVNode(ll,{defaults:{VTabs:{height:f(p.value)}}},{default:()=>[t.createVNode(el,null,{default:()=>[d.value&&t.createVNode("div",{class:"v-toolbar__extension",style:{height:f(p.value)}},[g])]})]})]})})),{contentHeight:v,extensionHeight:p}}}),Cl=ht({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll")
function _l(){const e=t.shallowRef(!1)
t.onMounted((()=>{window.requestAnimationFrame((()=>{e.value=!0}))}))
return{ssrBootStyles:t.computed((()=>e.value?void 0:{transition:"none !important"})),isBooted:t.readonly(e)}}const Il=ht({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...xl(),...la(),...Cl(),height:{type:[Number,String],default:64}},"VAppBar"),Bl=Bt()({name:"VAppBar",props:Il(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=t.ref(),n=sa(e,"modelValue"),r=t.computed((()=>{const t=new Set(e.scrollBehavior?.split(" ")??[])
return{hide:t.has("hide"),fullyHide:t.has("fully-hide"),inverted:t.has("inverted"),collapse:t.has("collapse"),elevate:t.has("elevate"),fadeImage:t.has("fade-image")}})),i=t.computed((()=>{const e=r.value
return e.hide||e.fullyHide||e.inverted||e.collapse||e.elevate||e.fadeImage||!n.value})),{currentScroll:s,scrollThreshold:u,isScrollingUp:c,scrollRatio:d}=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{canScroll:l}=a
let o=0,n=0
const r=t.ref(null),i=t.shallowRef(0),s=t.shallowRef(0),u=t.shallowRef(0),c=t.shallowRef(!1),d=t.shallowRef(!1),v=t.computed((()=>Number(e.scrollThreshold))),p=t.computed((()=>R((v.value-i.value)/v.value||0))),f=()=>{const e=r.value
if(!e||l&&!l.value)return
o=i.value,i.value="window"in e?e.pageYOffset:e.scrollTop
const t=e instanceof Window?document.documentElement.scrollHeight:e.scrollHeight
n===t?(d.value=i.value<o,u.value=Math.abs(i.value-v.value)):n=t}
return t.watch(d,(()=>{s.value=s.value||i.value})),t.watch(c,(()=>{s.value=0})),t.onMounted((()=>{t.watch((()=>e.scrollTarget),(e=>{const t=e?document.querySelector(e):window
t?t!==r.value&&(r.value?.removeEventListener("scroll",f),r.value=t,r.value.addEventListener("scroll",f,{passive:!0})):$e(`Unable to locate element with identifier ${e}`)}),{immediate:!0})})),t.onBeforeUnmount((()=>{r.value?.removeEventListener("scroll",f)})),l&&t.watch(l,f,{immediate:!0}),{scrollThreshold:v,currentScroll:i,currentThreshold:u,isScrollActive:c,scrollRatio:p,isScrollingUp:d,savedScroll:s}}(e,{canScroll:i}),v=t.computed((()=>r.value.hide||r.value.fullyHide)),p=t.computed((()=>e.collapse||r.value.collapse&&(r.value.inverted?d.value>0:0===d.value))),f=t.computed((()=>e.flat||r.value.fullyHide&&!n.value||r.value.elevate&&(r.value.inverted?s.value>0:0===s.value))),m=t.computed((()=>r.value.fadeImage?r.value.inverted?1-d.value:d.value:void 0)),g=t.computed((()=>{if(r.value.hide&&r.value.inverted)return 0
const e=o.value?.contentHeight??0,t=o.value?.extensionHeight??0
return v.value?s.value<u.value||r.value.fullyHide?e+t:e:e+t}))
ia(t.computed((()=>!!e.scrollBehavior)),(()=>{t.watchEffect((()=>{v.value?r.value.inverted?n.value=s.value>u.value:n.value=c.value||s.value<u.value:n.value=!0}))}))
const{ssrBootStyles:h}=_l(),{layoutItemStyles:y}=na({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.toRef(e,"location"),layoutSize:g,elementSize:t.shallowRef(void 0),active:n,absolute:t.toRef(e,"absolute")})
return Mt((()=>{const a=Nl.filterProps(e)
return t.createVNode(Nl,t.mergeProps({ref:o,class:["v-app-bar",{"v-app-bar--bottom":"bottom"===e.location},e.class],style:[{...y.value,"--v-toolbar-image-opacity":m.value,height:void 0,...h.value},e.style]},a,{collapse:p.value,flat:f.value}),l)})),{}}}),Pl=[null,"default","comfortable","compact"],Al=ht({density:{type:String,default:"default",validator:e=>Pl.includes(e)}},"density")
function Rl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Vt()
return{densityClasses:t.computed((()=>`${a}--density-${e.density}`))}}const Tl=["elevated","flat","tonal","outlined","text","plain"]
function Dl(e,a){return t.createVNode(t.Fragment,null,[e&&t.createVNode("span",{key:"overlay",class:`${a}__overlay`},null),t.createVNode("span",{key:"underlay",class:`${a}__underlay`},null)])}const El=ht({color:String,variant:{type:String,default:"elevated",validator:e=>Tl.includes(e)}},"variant")
function Fl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Vt()
const l=t.computed((()=>{const{variant:l}=t.unref(e)
return`${a}--variant-${l}`})),{colorClasses:o,colorStyles:n}=sl(t.computed((()=>{const{variant:a,color:l}=t.unref(e)
return{[["elevated","flat"].includes(a)?"background":"text"]:l}})))
return{colorClasses:o,colorStyles:n,variantClasses:l}}const $l=ht({baseColor:String,divided:Boolean,...bl(),...yt(),...Al(),...wl(),...dl(),...Pa(),...Sa(),...El()},"VBtnGroup"),Ml=Bt()({name:"VBtnGroup",props:$l(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=xa(e),{densityClasses:n}=Rl(e),{borderClasses:r}=Vl(e),{elevationClasses:i}=Sl(e),{roundedClasses:s}=vl(e)
Ct({VBtn:{height:"auto",baseColor:t.toRef(e,"baseColor"),color:t.toRef(e,"color"),density:t.toRef(e,"density"),flat:!0,variant:t.toRef(e,"variant")}}),Mt((()=>t.createVNode(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},o.value,r.value,n.value,i.value,s.value,e.class],style:e.style},l)))}}),Ol=ht({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Ll=ht({value:null,disabled:Boolean,selectedClass:String},"group-item")
function zl(e,a){let l=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
const o=bt("useGroupItem")
if(!o)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function")
const n=kt()
t.provide(Symbol.for(`${a.description}:id`),n)
const r=t.inject(a,null)
if(!r){if(!l)return r
throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const i=t.toRef(e,"value"),s=t.computed((()=>!(!r.disabled.value&&!e.disabled)))
r.register({id:n,value:i,disabled:s},o),t.onBeforeUnmount((()=>{r.unregister(n)}))
const u=t.computed((()=>r.isSelected(n))),c=t.computed((()=>r.items.value[0].id===n)),d=t.computed((()=>r.items.value[r.items.value.length-1].id===n)),v=t.computed((()=>u.value&&[r.selectedClass.value,e.selectedClass]))
return t.watch(u,(e=>{o.emit("group:selected",{value:e})}),{flush:"sync"}),{id:n,isSelected:u,isFirst:c,isLast:d,toggle:()=>r.select(n,!u.value),select:e=>r.select(n,e),selectedClass:v,value:i,disabled:s,group:r}}function jl(e,a){let l=!1
const o=t.reactive([]),n=sa(e,"modelValue",[],(e=>null==e?[]:Hl(o,A(e))),(t=>{const a=function(e,t){const a=[]
return t.forEach((t=>{const l=e.findIndex((e=>e.id===t))
if(~l){const t=e[l]
a.push(null!=t.value?t.value:l)}})),a}(o,t)
return e.multiple?a:a[0]})),r=bt("useGroup")
function i(){const t=o.find((e=>!e.disabled))
t&&"force"===e.mandatory&&!n.value.length&&(n.value=[t.id])}function s(t){if(e.multiple&&$e('This method is not supported when using "multiple" prop'),n.value.length){const e=n.value[0],a=o.findIndex((t=>t.id===e))
let l=(a+t)%o.length,r=o[l]
for(;r.disabled&&l!==a;)l=(l+t)%o.length,r=o[l]
if(r.disabled)return
n.value=[o[l].id]}else{const e=o.find((e=>!e.disabled))
e&&(n.value=[e.id])}}t.onMounted((()=>{i()})),t.onBeforeUnmount((()=>{l=!0})),t.onUpdated((()=>{for(let e=0;e<o.length;e++)o[e].useIndexAsValue&&(o[e].value=e)}))
const u={register:function(e,l){const n=e,i=L(Symbol.for(`${a.description}:id`),r?.vnode).indexOf(l)
null==t.unref(n.value)&&(n.value=i,n.useIndexAsValue=!0),i>-1?o.splice(i,0,n):o.push(n)},unregister:function(e){if(l)return
i()
const t=o.findIndex((t=>t.id===e))
o.splice(t,1)},selected:n,select:function(t,a){const l=o.find((e=>e.id===t))
if(!a||!l?.disabled)if(e.multiple){const l=n.value.slice(),o=l.findIndex((e=>e===t)),r=~o
if(a=a??!r,r&&e.mandatory&&l.length<=1)return
if(!r&&null!=e.max&&l.length+1>e.max)return
o<0&&a?l.push(t):o>=0&&!a&&l.splice(o,1),n.value=l}else{const l=n.value.includes(t)
if(e.mandatory&&l)return
n.value=a??!l?[t]:[]}},disabled:t.toRef(e,"disabled"),prev:()=>s(o.length-1),next:()=>s(1),isSelected:e=>n.value.includes(e),selectedClass:t.computed((()=>e.selectedClass)),items:t.computed((()=>o)),getItemIndex:e=>function(e,t){const a=Hl(e,[t])
return a.length?e.findIndex((e=>e.id===a[0])):-1}(o,e)}
return t.provide(a,u),u}function Hl(e,t){const a=[]
return t.forEach((t=>{const l=e.find((e=>c(t,e.value))),o=e[t]
null!=l?.value?a.push(l.id):null!=o&&a.push(o.id)})),a}const Wl=Symbol.for("vuetify:v-btn-toggle"),Ul=ht({...$l(),...Ol()},"VBtnToggle"),Yl=Bt()({name:"VBtnToggle",props:Ul(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{isSelected:o,next:n,prev:r,select:i,selected:s}=jl(e,Wl)
return Mt((()=>{const a=Ml.filterProps(e)
return t.createVNode(Ml,t.mergeProps({class:["v-btn-toggle",e.class]},a,{style:e.style}),{default:()=>[l.default?.({isSelected:o,next:n,prev:r,select:i,selected:s})]})})),{next:n,prev:r,select:i}}}),Gl=["x-small","small","default","large","x-large"],ql=ht({size:{type:[String,Number],default:"default"}},"size")
function Kl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Vt()
return W((()=>{let a,l
return U(Gl,e.size)?a=`${t}--size-${e.size}`:e.size&&(l={width:f(e.size),height:f(e.size)}),{sizeClasses:a,sizeStyles:l}}))}const Xl=ht({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Ot,...yt(),...ql(),...Pa({tag:"i"}),...Sa()},"VIcon"),Zl=Bt()({name:"VIcon",props:Xl(),setup(e,a){let{attrs:l,slots:o}=a
const n=t.ref(),{themeClasses:r}=xa(e),{iconData:i}=(e=>{const a=t.inject(Lt)
if(!a)throw new Error("Missing Vuetify Icons provide!")
return{iconData:t.computed((()=>{const l=t.unref(e)
if(!l)return{component:jt}
let o=l
if("string"==typeof o&&(o=o.trim(),o.startsWith("$")&&(o=a.aliases?.[o.slice(1)])),o||$e(`Could not find aliased icon "${l}"`),Array.isArray(o))return{component:Ht,icon:o}
if("string"!=typeof o)return{component:jt,icon:o}
const n=Object.keys(a.sets).find((e=>"string"==typeof o&&o.startsWith(`${e}:`))),r=n?o.slice(n.length+1):o
return{component:a.sets[n??a.defaultSet].component,icon:r}}))}})(t.computed((()=>n.value||e.icon))),{sizeClasses:s}=Kl(e),{textColorClasses:u,textColorStyles:c}=ul(t.toRef(e,"color"))
return Mt((()=>{const a=o.default?.()
a&&(n.value=M(a).filter((e=>e.type===t.Text&&e.children&&"string"==typeof e.children))[0]?.children)
const d=!(!l.onClick&&!l.onClickOnce)
return t.createVNode(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",r.value,s.value,u.value,{"v-icon--clickable":d,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[s.value?void 0:{fontSize:f(e.size),height:f(e.size),width:f(e.size)},c.value,e.style],role:d?"button":void 0,"aria-hidden":!d,tabindex:d?e.disabled?-1:0:void 0},{default:()=>[a]})})),{}}})
function Ql(e,a){const o=t.ref(),n=t.shallowRef(!1)
if(l){const l=new IntersectionObserver((t=>{e?.(t,l),n.value=!!t.find((e=>e.isIntersecting))}),a)
t.onBeforeUnmount((()=>{l.disconnect()})),t.watch(o,((e,t)=>{t&&(l.unobserve(t),n.value=!1),e&&l.observe(e)}),{flush:"post"})}return{intersectionRef:o,isIntersecting:n}}const Jl=ht({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...yt(),...ql(),...Pa({tag:"div"}),...Sa()},"VProgressCircular"),eo=Bt()({name:"VProgressCircular",props:Jl(),setup(e,a){let{slots:l}=a
const o=2*Math.PI*20,n=t.ref(),{themeClasses:r}=xa(e),{sizeClasses:i,sizeStyles:s}=Kl(e),{textColorClasses:u,textColorStyles:c}=ul(t.toRef(e,"color")),{textColorClasses:d,textColorStyles:v}=ul(t.toRef(e,"bgColor")),{intersectionRef:p,isIntersecting:m}=Ql(),{resizeRef:g,contentRect:h}=Jt(),y=t.computed((()=>Math.max(0,Math.min(100,parseFloat(e.modelValue))))),b=t.computed((()=>Number(e.width))),V=t.computed((()=>s.value?Number(e.size):h.value?h.value.width:Math.max(b.value,32))),w=t.computed((()=>20/(1-b.value/V.value)*2)),S=t.computed((()=>b.value/V.value*w.value)),k=t.computed((()=>f((100-y.value)/100*o)))
return t.watchEffect((()=>{p.value=n.value,g.value=n.value})),Mt((()=>t.createVNode(e.tag,{ref:n,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":m.value,"v-progress-circular--disable-shrink":"disable-shrink"===e.indeterminate},r.value,i.value,u.value,e.class],style:[s.value,c.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:y.value},{default:()=>[t.createVNode("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w.value} ${w.value}`},[t.createVNode("circle",{class:["v-progress-circular__underlay",d.value],style:v.value,fill:"transparent",cx:"50%",cy:"50%",r:20,"stroke-width":S.value,"stroke-dasharray":o,"stroke-dashoffset":0},null),t.createVNode("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:20,"stroke-width":S.value,"stroke-dasharray":o,"stroke-dashoffset":k.value},null)]),l.default&&t.createVNode("div",{class:"v-progress-circular__content"},[l.default({value:y.value})])]}))),{}}}),to={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},ao=ht({location:String},"location")
function lo(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=arguments.length>2?arguments[2]:void 0
const{isRtl:o}=Va(),n=t.computed((()=>{if(!e.location)return{}
const{side:t,align:n}=ie(e.location.split(" ").length>1?e.location:`${e.location} center`,o.value)
function r(e){return l?l(e):0}const i={}
return"center"!==t&&(a?i[to[t]]=`calc(100% - ${r(t)}px)`:i[t]=0),"center"!==n?a?i[to[n]]=`calc(100% - ${r(n)}px)`:i[n]=0:("center"===t?i.top=i.left="50%":i[{top:"left",bottom:"left",left:"top",right:"top"}[t]]="50%",i.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[t]),i}))
return{locationStyles:n}}const oo=ht({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...yt(),...ao({location:"top"}),...dl(),...Pa(),...Sa()},"VProgressLinear"),no=Bt()({name:"VProgressLinear",props:oo(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:o}=l
const n=sa(e,"modelValue"),{isRtl:r,rtlClasses:i}=Va(),{themeClasses:s}=xa(e),{locationStyles:u}=lo(e),{textColorClasses:c,textColorStyles:d}=ul(e,"color"),{backgroundColorClasses:v,backgroundColorStyles:p}=cl(t.computed((()=>e.bgColor||e.color))),{backgroundColorClasses:m,backgroundColorStyles:g}=cl(t.computed((()=>e.bufferColor||e.bgColor||e.color))),{backgroundColorClasses:h,backgroundColorStyles:y}=cl(e,"color"),{roundedClasses:b}=vl(e),{intersectionRef:V,isIntersecting:w}=Ql(),S=t.computed((()=>parseFloat(e.max))),k=t.computed((()=>parseFloat(e.height))),x=t.computed((()=>R(parseFloat(e.bufferValue)/S.value*100,0,100))),N=t.computed((()=>R(parseFloat(n.value)/S.value*100,0,100))),C=t.computed((()=>r.value!==e.reverse)),_=t.computed((()=>e.indeterminate?"fade-transition":"slide-x-transition")),I=a&&window.matchMedia?.("(forced-colors: active)").matches
function B(e){if(!V.value)return
const{left:t,right:a,width:l}=V.value.getBoundingClientRect(),o=C.value?l-e.clientX+(a-l):e.clientX-t
n.value=Math.round(o/l*S.value)}return Mt((()=>t.createVNode(e.tag,{ref:V,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&w.value,"v-progress-linear--reverse":C.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},b.value,s.value,i.value,e.class],style:[{bottom:"bottom"===e.location?0:void 0,top:"top"===e.location?0:void 0,height:e.active?f(k.value):0,"--v-progress-linear-height":f(k.value),...e.absolute?u.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:N.value,onClick:e.clickable&&B},{default:()=>[e.stream&&t.createVNode("div",{key:"stream",class:["v-progress-linear__stream",c.value],style:{...d.value,[C.value?"left":"right"]:f(-k.value),borderTop:`${f(k.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${f(k.value/4)})`,width:f(100-x.value,"%"),"--v-progress-linear-stream-to":f(k.value*(C.value?1:-1))}},null),t.createVNode("div",{class:["v-progress-linear__background",I?void 0:v.value],style:[p.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),t.createVNode("div",{class:["v-progress-linear__buffer",I?void 0:m.value],style:[g.value,{opacity:parseFloat(e.bufferOpacity),width:f(x.value,"%")}]},null),t.createVNode(t.Transition,{name:_.value},{default:()=>[e.indeterminate?t.createVNode("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map((e=>t.createVNode("div",{key:e,class:["v-progress-linear__indeterminate",e,I?void 0:h.value],style:y.value},null)))]):t.createVNode("div",{class:["v-progress-linear__determinate",I?void 0:h.value],style:[y.value,{width:f(N.value,"%")}]},null)]}),o.default&&t.createVNode("div",{class:"v-progress-linear__content"},[o.default({value:N.value,buffer:x.value})])]}))),{}}}),ro=ht({loading:[Boolean,String]},"loader")
function io(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Vt()
return{loaderClasses:t.computed((()=>({[`${a}--loading`]:e.loading})))}}function so(e,a){let{slots:l}=a
return t.createVNode("div",{class:`${e.name}__loader`},[l.default?.({color:e.color,isActive:e.active})||t.createVNode(no,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const uo=["static","relative","fixed","absolute","sticky"],co=ht({position:{type:String,validator:e=>uo.includes(e)}},"position")
function vo(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Vt()
return{positionClasses:t.computed((()=>e.position?`${a}--${e.position}`:void 0))}}function po(){return bt("useRouter")?.proxy?.$router}function fo(e,a){const l=t.resolveDynamicComponent("RouterLink"),o=t.computed((()=>!(!e.href&&!e.to))),n=t.computed((()=>o?.value||q(a,"click")||q(e,"click")))
if("string"==typeof l||!("useLink"in l))return{isLink:o,isClickable:n,href:t.toRef(e,"href")}
const r=t.computed((()=>({...e,to:t.toRef((()=>e.to||""))}))),i=l.useLink(r.value),s=t.computed((()=>e.to?i:void 0)),u=function(){const e=bt("useRoute")
return t.computed((()=>e?.proxy?.$route))}()
return{isLink:o,isClickable:n,route:s.value?.route,navigate:s.value?.navigate,isActive:t.computed((()=>!!s.value&&(e.exact?u.value?s.value.isExactActive?.value&&c(s.value.route.value.query,u.value.query):s.value.isExactActive?.value??!1:s.value.isActive?.value??!1))),href:t.computed((()=>e.to?s.value?.route.value.href:e.href))}}const mo=ht({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router")
let go=!1
const ho=Symbol("rippleStop"),yo=80
function bo(e,t){e.style.transform=t,e.style.webkitTransform=t}function Vo(e){return"TouchEvent"===e.constructor.name}function wo(e){return"KeyboardEvent"===e.constructor.name}const So={show(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t?._ripple?.enabled)return
const l=document.createElement("span"),o=document.createElement("span")
l.appendChild(o),l.className="v-ripple__container",a.class&&(l.className+=` ${a.class}`)
const{radius:n,scale:r,x:i,y:s,centerX:u,centerY:c}=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=0,o=0
if(!wo(e)){const a=t.getBoundingClientRect(),n=Vo(e)?e.touches[e.touches.length-1]:e
l=n.clientX-a.left,o=n.clientY-a.top}let n=0,r=.3
t._ripple?.circle?(r=.15,n=t.clientWidth/2,n=a.center?n:n+Math.sqrt((l-n)**2+(o-n)**2)/4):n=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2
const i=(t.clientWidth-2*n)/2+"px",s=(t.clientHeight-2*n)/2+"px"
return{radius:n,scale:r,x:a.center?i:l-n+"px",y:a.center?s:o-n+"px",centerX:i,centerY:s}}(e,t,a),d=2*n+"px"
o.className="v-ripple__animation",o.style.width=d,o.style.height=d,t.appendChild(l)
const v=window.getComputedStyle(t)
v&&"static"===v.position&&(t.style.position="relative",t.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),bo(o,`translate(${i}, ${s}) scale3d(${r},${r},${r})`),o.dataset.activated=String(performance.now()),setTimeout((()=>{o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),bo(o,`translate(${u}, ${c}) scale3d(1,1,1)`)}),0)},hide(e){if(!e?._ripple?.enabled)return
const t=e.getElementsByClassName("v-ripple__animation")
if(0===t.length)return
const a=t[t.length-1]
if(a.dataset.isHiding)return
a.dataset.isHiding="true"
const l=performance.now()-Number(a.dataset.activated),o=Math.max(250-l,0)
setTimeout((()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout((()=>{1===e.getElementsByClassName("v-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),a.parentNode?.parentNode===e&&e.removeChild(a.parentNode)}),300)}),o)}}
function ko(e){return void 0===e||!!e}function xo(e){const t={},a=e.currentTarget
if(a?._ripple&&!a._ripple.touched&&!e[ho]){if(e[ho]=!0,Vo(e))a._ripple.touched=!0,a._ripple.isTouch=!0
else if(a._ripple.isTouch)return
if(t.center=a._ripple.centered||wo(e),a._ripple.class&&(t.class=a._ripple.class),Vo(e)){if(a._ripple.showTimerCommit)return
a._ripple.showTimerCommit=()=>{So.show(e,a,t)},a._ripple.showTimer=window.setTimeout((()=>{a?._ripple?.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)}),yo)}else So.show(e,a,t)}}function No(e){e[ho]=!0}function Co(e){const t=e.currentTarget
if(t?._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=window.setTimeout((()=>{Co(e)})))
window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),So.hide(t)}}function _o(e){const t=e.currentTarget
t?._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let Io=!1
function Bo(e){Io||e.keyCode!==y.enter&&e.keyCode!==y.space||(Io=!0,xo(e))}function Po(e){Io=!1,Co(e)}function Ao(e){Io&&(Io=!1,Co(e))}function Ro(e,t,a){const{value:l,modifiers:o}=t,n=ko(l)
if(n||So.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=n,e._ripple.centered=o.center,e._ripple.circle=o.circle,m(l)&&l.class&&(e._ripple.class=l.class),n&&!a){if(o.stop)return e.addEventListener("touchstart",No,{passive:!0}),void e.addEventListener("mousedown",No)
e.addEventListener("touchstart",xo,{passive:!0}),e.addEventListener("touchend",Co,{passive:!0}),e.addEventListener("touchmove",_o,{passive:!0}),e.addEventListener("touchcancel",Co),e.addEventListener("mousedown",xo),e.addEventListener("mouseup",Co),e.addEventListener("mouseleave",Co),e.addEventListener("keydown",Bo),e.addEventListener("keyup",Po),e.addEventListener("blur",Ao),e.addEventListener("dragstart",Co,{passive:!0})}else!n&&a&&To(e)}function To(e){e.removeEventListener("mousedown",xo),e.removeEventListener("touchstart",xo),e.removeEventListener("touchend",Co),e.removeEventListener("touchmove",_o),e.removeEventListener("touchcancel",Co),e.removeEventListener("mouseup",Co),e.removeEventListener("mouseleave",Co),e.removeEventListener("keydown",Bo),e.removeEventListener("keyup",Po),e.removeEventListener("dragstart",Co),e.removeEventListener("blur",Ao)}const Do={mounted:function(e,t){Ro(e,t,!1)},unmounted:function(e){delete e._ripple,To(e)},updated:function(e,t){if(t.value===t.oldValue)return
Ro(e,t,ko(t.oldValue))}},Eo=ht({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:Wl},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Ot,appendIcon:Ot,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...bl(),...yt(),...Al(),...ol(),...wl(),...Ll(),...ro(),...ao(),...co(),...dl(),...mo(),...ql(),...Pa({tag:"button"}),...Sa(),...El({variant:"elevated"})},"VBtn"),Fo=Bt()({name:"VBtn",props:Eo(),emits:{"group:selected":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{themeClasses:n}=xa(e),{borderClasses:r}=Vl(e),{densityClasses:i}=Rl(e),{dimensionStyles:s}=nl(e),{elevationClasses:u}=Sl(e),{loaderClasses:c}=io(e),{locationStyles:d}=lo(e),{positionClasses:v}=vo(e),{roundedClasses:p}=vl(e),{sizeClasses:f,sizeStyles:m}=Kl(e),g=zl(e,e.symbol,!1),h=fo(e,l),y=t.computed((()=>void 0!==e.active?e.active:h.isLink.value?h.isActive?.value:g?.isSelected.value)),b=t.computed((()=>y.value?e.activeColor??e.color:e.color)),V=t.computed((()=>({color:g?.isSelected.value&&(!h.isLink.value||h.isActive?.value)||!g||h.isActive?.value?b.value??e.baseColor:e.baseColor,variant:e.variant}))),{colorClasses:w,colorStyles:S,variantClasses:k}=Fl(V),x=t.computed((()=>g?.disabled.value||e.disabled)),N=t.computed((()=>"elevated"===e.variant&&!(e.disabled||e.flat||e.border))),C=t.computed((()=>{if(void 0!==e.value&&"symbol"!=typeof e.value)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value}))
function _(e){x.value||h.isLink.value&&(e.metaKey||e.ctrlKey||e.shiftKey||0!==e.button||"_blank"===l.target)||(h.navigate?.(e),g?.toggle())}return function(e,a){t.watch((()=>e.isActive?.value),(l=>{e.isLink.value&&l&&a&&t.nextTick((()=>{a(!0)}))}),{immediate:!0})}(h,g?.select),Mt((()=>{const a=h.isLink.value?"a":e.tag,l=!(!e.prependIcon&&!o.prepend),b=!(!e.appendIcon&&!o.append),V=!(!e.icon||!0===e.icon)
return t.withDirectives(t.createVNode(a,{type:"a"===a?void 0:"button",class:["v-btn",g?.selectedClass.value,{"v-btn--active":y.value,"v-btn--block":e.block,"v-btn--disabled":x.value,"v-btn--elevated":N.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},n.value,r.value,w.value,i.value,u.value,c.value,v.value,p.value,f.value,k.value,e.class],style:[S.value,s.value,d.value,m.value,e.style],"aria-busy":!!e.loading||void 0,disabled:x.value||void 0,href:h.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:_,value:C.value},{default:()=>[Dl(!0,"v-btn"),!e.icon&&l&&t.createVNode("span",{key:"prepend",class:"v-btn__prepend"},[o.prepend?t.createVNode(ll,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},o.prepend):t.createVNode(Zl,{key:"prepend-icon",icon:e.prependIcon},null)]),t.createVNode("span",{class:"v-btn__content","data-no-activator":""},[!o.default&&V?t.createVNode(Zl,{key:"content-icon",icon:e.icon},null):t.createVNode(ll,{key:"content-defaults",disabled:!V,defaults:{VIcon:{icon:e.icon}}},{default:()=>[o.default?.()??e.text]})]),!e.icon&&b&&t.createVNode("span",{key:"append",class:"v-btn__append"},[o.append?t.createVNode(ll,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},o.append):t.createVNode(Zl,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&t.createVNode("span",{key:"loader",class:"v-btn__loader"},[o.loader?.()??t.createVNode(eo,{color:"boolean"==typeof e.loading?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}),[[Do,!x.value&&e.ripple,"",{center:!!e.icon}]])})),{group:g}}}),$o=ht({...Eo({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Mo=Bt()({name:"VAppBarNavIcon",props:$o(),setup(e,a){let{slots:l}=a
return Mt((()=>t.createVNode(Fo,t.mergeProps(e,{class:["v-app-bar-nav-icon"]}),l))),{}}}),Oo=Bt()({name:"VAppBarTitle",props:Aa(),setup(e,a){let{slots:l}=a
return Mt((()=>t.createVNode(Ra,t.mergeProps(e,{class:"v-app-bar-title"}),l))),{}}}),Lo=Pt("v-alert-title"),zo=["success","info","warning","error"],jo=ht({border:{type:[Boolean,String],validator:e=>"boolean"==typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Ot,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>zo.includes(e)},...yt(),...Al(),...ol(),...wl(),...ao(),...co(),...dl(),...Pa(),...Sa(),...El({variant:"flat"})},"VAlert"),Ho=Bt()({name:"VAlert",props:jo(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=sa(e,"modelValue"),r=t.computed((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),i=t.computed((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:s}=xa(e),{colorClasses:u,colorStyles:c,variantClasses:d}=Fl(i),{densityClasses:v}=Rl(e),{dimensionStyles:p}=nl(e),{elevationClasses:f}=Sl(e),{locationStyles:m}=lo(e),{positionClasses:g}=vo(e),{roundedClasses:h}=vl(e),{textColorClasses:y,textColorStyles:b}=ul(t.toRef(e,"borderColor")),{t:V}=ya(),w=t.computed((()=>({"aria-label":V(e.closeLabel),onClick(e){n.value=!1,l("click:close",e)}})))
return()=>{const a=!(!o.prepend&&!r.value),l=!(!o.title&&!e.title),i=!(!o.close&&!e.closable)
return n.value&&t.createVNode(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},s.value,u.value,v.value,f.value,g.value,h.value,d.value,e.class],style:[c.value,p.value,m.value,e.style],role:"alert"},{default:()=>[Dl(!1,"v-alert"),e.border&&t.createVNode("div",{key:"border",class:["v-alert__border",y.value],style:b.value},null),a&&t.createVNode("div",{key:"prepend",class:"v-alert__prepend"},[o.prepend?t.createVNode(ll,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:e.density,icon:r.value,size:e.prominent?44:28}}},o.prepend):t.createVNode(Zl,{key:"prepend-icon",density:e.density,icon:r.value,size:e.prominent?44:28},null)]),t.createVNode("div",{class:"v-alert__content"},[l&&t.createVNode(Lo,{key:"title"},{default:()=>[o.title?.()??e.title]}),o.text?.()??e.text,o.default?.()]),o.append&&t.createVNode("div",{key:"append",class:"v-alert__append"},[o.append()]),i&&t.createVNode("div",{key:"close",class:"v-alert__close"},[o.close?t.createVNode(ll,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[o.close?.({props:w.value})]}):t.createVNode(Fo,t.mergeProps({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},w.value),null)])]})}}}),Wo=ht({start:Boolean,end:Boolean,icon:Ot,image:String,text:String,...bl(),...yt(),...Al(),...dl(),...ql(),...Pa(),...Sa(),...El({variant:"flat"})},"VAvatar"),Uo=Bt()({name:"VAvatar",props:Wo(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=xa(e),{borderClasses:n}=Vl(e),{colorClasses:r,colorStyles:i,variantClasses:s}=Fl(e),{densityClasses:u}=Rl(e),{roundedClasses:c}=vl(e),{sizeClasses:d,sizeStyles:v}=Kl(e)
return Mt((()=>t.createVNode(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},o.value,n.value,r.value,u.value,c.value,d.value,s.value,e.class],style:[i.value,v.value,e.style]},{default:()=>[l.default?t.createVNode(ll,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[l.default()]}):e.image?t.createVNode(yl,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?t.createVNode(Zl,{key:"icon",icon:e.icon},null):e.text,Dl(!1,"v-avatar")]}))),{}}}),Yo=ht({text:String,onClick:G(),...yt(),...Sa()},"VLabel"),Go=Bt()({name:"VLabel",props:Yo(),setup(e,a){let{slots:l}=a
return Mt((()=>t.createVNode("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,l.default?.()]))),{}}}),qo=Symbol.for("vuetify:selection-control-group"),Ko=ht({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:Ot,trueIcon:Ot,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:c},...yt(),...Al(),...Sa()},"SelectionControlGroup"),Xo=ht({...Ko({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Zo=Bt()({name:"VSelectionControlGroup",props:Xo(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=sa(e,"modelValue"),n=kt(),r=t.computed((()=>e.id||`v-selection-control-group-${n}`)),i=t.computed((()=>e.name||r.value)),s=new Set
return t.provide(qo,{modelValue:o,forceUpdate:()=>{s.forEach((e=>e()))},onForceUpdate:e=>{s.add(e),t.onScopeDispose((()=>{s.delete(e)}))}}),Ct({[e.defaultsTarget]:{color:t.toRef(e,"color"),disabled:t.toRef(e,"disabled"),density:t.toRef(e,"density"),error:t.toRef(e,"error"),inline:t.toRef(e,"inline"),modelValue:o,multiple:t.computed((()=>!!e.multiple||null==e.multiple&&Array.isArray(o.value))),name:i,falseIcon:t.toRef(e,"falseIcon"),trueIcon:t.toRef(e,"trueIcon"),readonly:t.toRef(e,"readonly"),ripple:t.toRef(e,"ripple"),type:t.toRef(e,"type"),valueComparator:t.toRef(e,"valueComparator")}}),Mt((()=>t.createVNode("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:"radio"===e.type?"radiogroup":void 0},[l.default?.()]))),{}}}),Qo=ht({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...yt(),...Ko()},"VSelectionControl")
const Jo=Bt()({name:"VSelectionControl",directives:{Ripple:Do},inheritAttrs:!1,props:Qo(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{group:n,densityClasses:r,icon:i,model:s,textColorClasses:u,textColorStyles:c,backgroundColorClasses:d,backgroundColorStyles:v,trueValue:p}=function(e){const a=t.inject(qo,void 0),{densityClasses:l}=Rl(e),o=sa(e,"modelValue"),n=t.computed((()=>void 0!==e.trueValue?e.trueValue:void 0===e.value||e.value)),r=t.computed((()=>void 0!==e.falseValue&&e.falseValue)),i=t.computed((()=>!!e.multiple||null==e.multiple&&Array.isArray(o.value))),s=t.computed({get(){const t=a?a.modelValue.value:o.value
return i.value?A(t).some((t=>e.valueComparator(t,n.value))):e.valueComparator(t,n.value)},set(t){if(e.readonly)return
const l=t?n.value:r.value
let s=l
i.value&&(s=t?[...A(o.value),l]:A(o.value).filter((t=>!e.valueComparator(t,n.value)))),a?a.modelValue.value=s:o.value=s}}),{textColorClasses:u,textColorStyles:c}=ul(t.computed((()=>{if(!e.error&&!e.disabled)return s.value?e.color:e.baseColor}))),{backgroundColorClasses:d,backgroundColorStyles:v}=cl(t.computed((()=>!s.value||e.error||e.disabled?e.baseColor:e.color))),p=t.computed((()=>s.value?e.trueIcon:e.falseIcon))
return{group:a,densityClasses:l,trueValue:n,falseValue:r,model:s,textColorClasses:u,textColorStyles:c,backgroundColorClasses:d,backgroundColorStyles:v,icon:p}}(e),f=kt(),m=t.shallowRef(!1),g=t.shallowRef(!1),h=t.ref(),y=t.computed((()=>e.id||`input-${f}`)),b=t.computed((()=>!e.disabled&&!e.readonly))
function V(e){b.value&&(m.value=!0,!1!==te(e.target,":focus-visible")&&(g.value=!0))}function w(){m.value=!1,g.value=!1}function S(e){e.stopPropagation()}function k(a){b.value?(e.readonly&&n&&t.nextTick((()=>n.forceUpdate())),s.value=a.target.checked):h.value&&(h.value.checked=s.value)}return n?.onForceUpdate((()=>{h.value&&(h.value.checked=s.value)})),Mt((()=>{const a=o.label?o.label({label:e.label,props:{for:y.value}}):e.label,[n,f]=P(l),b=t.createVNode("input",t.mergeProps({ref:h,checked:s.value,disabled:!!e.disabled,id:y.value,onBlur:w,onFocus:V,onInput:k,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:p.value,name:e.name,"aria-checked":"checkbox"===e.type?s.value:void 0},f),null)
return t.createVNode("div",t.mergeProps({class:["v-selection-control",{"v-selection-control--dirty":s.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":m.value,"v-selection-control--focus-visible":g.value,"v-selection-control--inline":e.inline},r.value,e.class]},n,{style:e.style}),[t.createVNode("div",{class:["v-selection-control__wrapper",u.value],style:c.value},[o.default?.({backgroundColorClasses:d,backgroundColorStyles:v}),t.withDirectives(t.createVNode("div",{class:["v-selection-control__input"]},[o.input?.({model:s,textColorClasses:u,textColorStyles:c,backgroundColorClasses:d,backgroundColorStyles:v,inputNode:b,icon:i.value,props:{onFocus:V,onBlur:w,id:y.value}})??t.createVNode(t.Fragment,null,[i.value&&t.createVNode(Zl,{key:"icon",icon:i.value},null),b])]),[[t.resolveDirective("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),a&&t.createVNode(Go,{for:y.value,onClick:S},{default:()=>[a]})])})),{isFocused:m,input:h}}}),en=ht({indeterminate:Boolean,indeterminateIcon:{type:Ot,default:"$checkboxIndeterminate"},...Qo({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),tn=Bt()({name:"VCheckboxBtn",props:en(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{slots:l}=a
const o=sa(e,"indeterminate"),n=sa(e,"modelValue")
function r(e){o.value&&(o.value=!1)}const i=t.computed((()=>o.value?e.indeterminateIcon:e.falseIcon)),s=t.computed((()=>o.value?e.indeterminateIcon:e.trueIcon))
return Mt((()=>{const a=x(Jo.filterProps(e),["modelValue"])
return t.createVNode(Jo,t.mergeProps(a,{modelValue:n.value,"onUpdate:modelValue":[e=>n.value=e,r],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:s.value,"aria-checked":o.value?"mixed":void 0}),l)})),{}}})
function an(e){const{t:a}=ya()
return{InputIcon:function(l){let{name:o}=l
const n={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],r=e[`onClick:${o}`],i=r&&n?a(`$vuetify.input.${n}`,e.label??""):void 0
return t.createVNode(Zl,{icon:e[`${o}Icon`],"aria-label":i,onClick:r},null)}}}const ln=ht({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...yt(),...pl({transition:{component:Qa,leaveAbsolute:!0,group:!0}})},"VMessages"),on=Bt()({name:"VMessages",props:ln(),setup(e,a){let{slots:l}=a
const o=t.computed((()=>A(e.messages))),{textColorClasses:n,textColorStyles:r}=ul(t.computed((()=>e.color)))
return Mt((()=>t.createVNode(fl,{transition:e.transition,tag:"div",class:["v-messages",n.value,e.class],style:[r.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&o.value.map(((e,a)=>t.createVNode("div",{class:"v-messages__message",key:`${a}-${o.value}`},[l.message?l.message({message:e}):e])))]}))),{}}}),nn=ht({focused:Boolean,"onUpdate:focused":G()},"focus")
function rn(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Vt()
const l=sa(e,"focused")
return{focusClasses:t.computed((()=>({[`${a}--focused`]:l.value}))),isFocused:l,focus:function(){l.value=!0},blur:function(){l.value=!1}}}const sn=Symbol.for("vuetify:form"),un=ht({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form")
function cn(){return t.inject(sn,null)}const dn=ht({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...nn()},"validation")
function vn(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Vt(),l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:kt()
const o=sa(e,"modelValue"),n=t.computed((()=>void 0===e.validationValue?o.value:e.validationValue)),r=cn(),i=t.ref([]),s=t.shallowRef(!0),u=t.computed((()=>!(!A(""===o.value?null:o.value).length&&!A(""===n.value?null:n.value).length))),c=t.computed((()=>!!(e.disabled??r?.isDisabled.value))),d=t.computed((()=>!!(e.readonly??r?.isReadonly.value))),v=t.computed((()=>e.errorMessages?.length?A(e.errorMessages).concat(i.value).slice(0,Math.max(0,+e.maxErrors)):i.value)),p=t.computed((()=>{let t=(e.validateOn??r?.validateOn.value)||"input"
"lazy"===t&&(t="input lazy"),"eager"===t&&(t="input eager")
const a=new Set(t?.split(" ")??[])
return{input:a.has("input"),blur:a.has("blur")||a.has("input")||a.has("invalid-input"),invalidInput:a.has("invalid-input"),lazy:a.has("lazy"),eager:a.has("eager")}})),f=t.computed((()=>!e.error&&!e.errorMessages?.length&&(!e.rules.length||(s.value?!i.value.length&&!p.value.lazy||null:!i.value.length)))),m=t.shallowRef(!1),g=t.computed((()=>({[`${a}--error`]:!1===f.value,[`${a}--dirty`]:u.value,[`${a}--disabled`]:c.value,[`${a}--readonly`]:d.value}))),h=bt("validation"),y=t.computed((()=>e.name??t.unref(l)))
async function b(){o.value=null,await t.nextTick(),await V()}async function V(){s.value=!0,p.value.lazy?i.value=[]:await w(!p.value.eager)}async function w(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const a=[]
m.value=!0
for(const t of e.rules){if(a.length>=+(e.maxErrors??1))break
const l="function"==typeof t?t:()=>t,o=await l(n.value)
!0!==o&&(!1===o||"string"==typeof o?a.push(o||""):console.warn(`${o} is not a valid value. Rule functions must return boolean true or a string.`))}return i.value=a,m.value=!1,s.value=t,i.value}return t.onBeforeMount((()=>{r?.register({id:y.value,vm:h,validate:w,reset:b,resetValidation:V})})),t.onBeforeUnmount((()=>{r?.unregister(y.value)})),t.onMounted((async()=>{p.value.lazy||await w(!p.value.eager),r?.update(y.value,f.value,v.value)})),ia((()=>p.value.input||p.value.invalidInput&&!1===f.value),(()=>{t.watch(n,(()=>{if(null!=n.value)w()
else if(e.focused){const a=t.watch((()=>e.focused),(e=>{e||w(),a()}))}}))})),ia((()=>p.value.blur),(()=>{t.watch((()=>e.focused),(e=>{e||w()}))})),t.watch([f,v],(()=>{r?.update(y.value,f.value,v.value)})),{errorMessages:v,isDirty:u,isDisabled:c,isReadonly:d,isPristine:s,isValid:f,isValidating:m,reset:b,resetValidation:V,validate:w,validationClasses:g}}const pn=ht({id:String,appendIcon:Ot,centerAffix:{type:Boolean,default:!0},prependIcon:Ot,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":G(),"onClick:append":G(),...yt(),...Al(),...N(ol(),["maxWidth","minWidth","width"]),...Sa(),...dn()},"VInput"),fn=Bt()({name:"VInput",props:{...pn()},emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o,emit:n}=a
const{densityClasses:r}=Rl(e),{dimensionStyles:i}=nl(e),{themeClasses:s}=xa(e),{rtlClasses:u}=Va(),{InputIcon:c}=an(e),d=kt(),v=t.computed((()=>e.id||`input-${d}`)),p=t.computed((()=>`${v.value}-messages`)),{errorMessages:f,isDirty:m,isDisabled:g,isReadonly:h,isPristine:y,isValid:b,isValidating:V,reset:w,resetValidation:S,validate:k,validationClasses:x}=vn(e,"v-input",v),N=t.computed((()=>({id:v,messagesId:p,isDirty:m,isDisabled:g,isReadonly:h,isPristine:y,isValid:b,isValidating:V,reset:w,resetValidation:S,validate:k}))),C=t.computed((()=>e.errorMessages?.length||!y.value&&f.value.length?f.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages))
return Mt((()=>{const a=!(!o.prepend&&!e.prependIcon),l=!(!o.append&&!e.appendIcon),n=C.value.length>0,d=!e.hideDetails||"auto"===e.hideDetails&&(n||!!o.details)
return t.createVNode("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},r.value,s.value,u.value,x.value,e.class],style:[i.value,e.style]},[a&&t.createVNode("div",{key:"prepend",class:"v-input__prepend"},[o.prepend?.(N.value),e.prependIcon&&t.createVNode(c,{key:"prepend-icon",name:"prepend"},null)]),o.default&&t.createVNode("div",{class:"v-input__control"},[o.default?.(N.value)]),l&&t.createVNode("div",{key:"append",class:"v-input__append"},[e.appendIcon&&t.createVNode(c,{key:"append-icon",name:"append"},null),o.append?.(N.value)]),d&&t.createVNode("div",{class:"v-input__details"},[t.createVNode(on,{id:p.value,active:n,messages:C.value},{message:o.message}),o.details?.(N.value)])])})),{reset:w,resetValidation:S,validate:k,isValid:b,errorMessages:f}}}),mn=ht({...pn(),...x(en(),["inline"])},"VCheckbox"),gn=Bt()({name:"VCheckbox",inheritAttrs:!1,props:mn(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const n=sa(e,"modelValue"),{isFocused:r,focus:i,blur:s}=rn(e),u=kt(),c=t.computed((()=>e.id||`checkbox-${u}`))
return Mt((()=>{const[a,u]=P(l),d=fn.filterProps(e),v=tn.filterProps(e)
return t.createVNode(fn,t.mergeProps({class:["v-checkbox",e.class]},a,d,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,id:c.value,focused:r.value,style:e.style}),{...o,default:e=>{let{id:a,messagesId:l,isDisabled:r,isReadonly:c,isValid:d}=e
return t.createVNode(tn,t.mergeProps(v,{id:a.value,"aria-describedby":l.value,disabled:r.value,readonly:c.value},u,{error:!1===d.value,modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,onFocus:i,onBlur:s}),o)}})})),{}}}),hn=["sm","md","lg","xl","xxl"],yn=Symbol.for("vuetify:display"),bn={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Vn=function(){return $(bn,arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn)}
function wn(e){return a&&!e?window.innerWidth:"object"==typeof e&&e.clientWidth||0}function Sn(e){return a&&!e?window.innerHeight:"object"==typeof e&&e.clientHeight||0}function kn(e){const t=a&&!e?window.navigator.userAgent:"ssr"
function l(e){return Boolean(t.match(e))}return{android:l(/android/i),ios:l(/iphone|ipad|ipod/i),cordova:l(/cordova/i),electron:l(/electron/i),chrome:l(/chrome/i),edge:l(/edge/i),firefox:l(/firefox/i),opera:l(/opera/i),win:l(/win/i),mac:l(/mac/i),linux:l(/linux/i),touch:o,ssr:"ssr"===t}}const xn=ht({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display")
function Nn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Vt()
const l=t.inject(yn)
if(!l)throw new Error("Could not find Vuetify display injection")
const o=t.computed((()=>{if(null!=e.mobile)return e.mobile
if(!e.mobileBreakpoint)return l.mobile.value
const t="number"==typeof e.mobileBreakpoint?e.mobileBreakpoint:l.thresholds.value[e.mobileBreakpoint]
return l.width.value<t})),n=t.computed((()=>a?{[`${a}--mobile`]:o.value}:{}))
return{...l,displayClasses:n,mobile:o}}const Cn=Symbol.for("vuetify:goto")
function _n(e){return"string"==typeof e?document.querySelector(e):h(e)}function In(e,t,a){if("number"==typeof e)return t&&a?-e:e
let l=_n(e),o=0
for(;l;)o+=t?l.offsetLeft:l.offsetTop,l=l.offsetParent
return o}async function Bn(e,t,a,l){const o=a?"scrollLeft":"scrollTop",n=$(l?.options??{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:(4-2*e)*e-1,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}},t),r=l?.rtl.value,i=("number"==typeof e?e:_n(e))??0,s="parent"===n.container&&i instanceof HTMLElement?i.parentElement:_n(n.container)??(document.scrollingElement||document.body)
const u="function"==typeof n.easing?n.easing:n.patterns[n.easing]
if(!u)throw new TypeError(`Easing function "${n.easing}" not found.`)
let c
if("number"==typeof i)c=In(i,a,r)
else if(c=In(i,a,r)-In(s,a,r),n.layout){const e=window.getComputedStyle(i).getPropertyValue("--v-layout-top")
e&&(c-=parseInt(e,10))}c+=n.offset,c=function(e,t,a,l){const{scrollWidth:o,scrollHeight:n}=e,[r,i]=e===document.scrollingElement?[window.innerWidth,window.innerHeight]:[e.offsetWidth,e.offsetHeight]
let s,u
l?a?(s=-(o-r),u=0):(s=0,u=o-r):(s=0,u=n+-i)
return Math.max(Math.min(t,u),s)}(s,c,!!r,!!a)
const d=s[o]??0
if(c===d)return Promise.resolve(c)
const v=performance.now()
return new Promise((e=>requestAnimationFrame((function t(a){const l=(a-v)/n.duration,r=Math.floor(d+(c-d)*u(R(l,0,1)))
return s[o]=r,l>=1&&Math.abs(r-s[o])<10?e(c):l>2?($e("Scroll target is not reachable"),e(s[o])):void requestAnimationFrame(t)}))))}function Pn(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const a=t.inject(Cn),{isRtl:l}=Va()
if(!a)throw new Error("[Vuetify] Could not find injected goto instance")
const o={...a,rtl:t.computed((()=>a.rtl.value||l.value))}
async function n(t,a){return Bn(t,$(e,a),!1,o)}return n.horizontal=async(t,a)=>Bn(t,$(e,a),!0,o),n}function An(e,t){const a=e?"scrollWidth":"scrollHeight"
return t?.[a]||0}function Rn(e,t,a){if(!a)return 0
const{scrollLeft:l,offsetWidth:o,scrollWidth:n}=a
return e?t?n-o+l:l:a.scrollTop}function Tn(e,t){const a=e?"offsetWidth":"offsetHeight"
return t?.[a]||0}function Dn(e,t){const a=e?"offsetLeft":"offsetTop"
return t?.[a]||0}const En=Symbol.for("vuetify:v-slide-group"),Fn=ht({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:En},nextIcon:{type:Ot,default:"$next"},prevIcon:{type:Ot,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>"boolean"==typeof e||["always","desktop","mobile"].includes(e)},...yt(),...xn({mobile:null}),...Pa(),...Ol({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),$n=Bt()({name:"VSlideGroup",props:Fn(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:o}=l
const{isRtl:n}=Va(),{displayClasses:r,mobile:i}=Nn(e),s=jl(e,e.symbol),u=t.shallowRef(!1),c=t.shallowRef(0),d=t.shallowRef(0),v=t.shallowRef(0),p=t.computed((()=>"horizontal"===e.direction)),{resizeRef:f,contentRect:m}=Jt(),{resizeRef:g,contentRect:h}=Jt(),y=Pn(),b=t.computed((()=>({container:f.el,duration:200,easing:"easeOutQuart"}))),V=t.computed((()=>s.selected.value.length?s.items.value.findIndex((e=>e.id===s.selected.value[0])):-1)),w=t.computed((()=>s.selected.value.length?s.items.value.findIndex((e=>e.id===s.selected.value[s.selected.value.length-1])):-1))
if(a){let a=-1
t.watch((()=>[s.selected.value,m.value,h.value,p.value]),(()=>{cancelAnimationFrame(a),a=requestAnimationFrame((()=>{if(m.value&&h.value){const e=p.value?"width":"height"
d.value=m.value[e],v.value=h.value[e],u.value=d.value+1<v.value}if(V.value>=0&&g.el){k(g.el.children[w.value],e.centerActive)}}))}))}const S=t.shallowRef(!1)
function k(e,t){let a=0
a=t?function(e){let{selectedElement:t,containerElement:a,isHorizontal:l}=e
const o=Tn(l,a)
return Dn(l,t)-o/2+Tn(l,t)/2}({containerElement:f.el,isHorizontal:p.value,selectedElement:e}):function(e){let{selectedElement:t,containerElement:a,isRtl:l,isHorizontal:o}=e
const n=Tn(o,a),r=Rn(o,l,a),i=Tn(o,t),s=Dn(o,t),u=.4*i
return r>s?s-u:r+n<s+i?s-n+i+u:r}({containerElement:f.el,isHorizontal:p.value,isRtl:n.value,selectedElement:e}),x(a)}function x(e){if(!a||!f.el)return
const t=Tn(p.value,f.el),l=Rn(p.value,n.value,f.el)
if(!(An(p.value,f.el)<=t||Math.abs(e-l)<16)){if(p.value&&n.value&&f.el){const{scrollWidth:t,offsetWidth:a}=f.el
e=t-a-e}p.value?y.horizontal(e,b.value):y(e,b.value)}}function N(e){const{scrollTop:t,scrollLeft:a}=e.target
c.value=p.value?a:t}function C(e){if(S.value=!0,u.value&&g.el)for(const t of e.composedPath())for(const e of g.el.children)if(e===t)return void k(e)}function _(e){S.value=!1}let I=!1
function B(e){I||S.value||e.relatedTarget&&g.el?.contains(e.relatedTarget)||R(),I=!1}function P(){I=!0}function A(e){function t(t){e.preventDefault(),R(t)}g.el&&(p.value?"ArrowRight"===e.key?t(n.value?"prev":"next"):"ArrowLeft"===e.key&&t(n.value?"next":"prev"):"ArrowDown"===e.key?t("next"):"ArrowUp"===e.key&&t("prev"),"Home"===e.key?t("first"):"End"===e.key&&t("last"))}function R(e){if(!g.el)return
let t
if(e)if("next"===e){if(t=g.el.querySelector(":focus")?.nextElementSibling,!t)return R("first")}else if("prev"===e){if(t=g.el.querySelector(":focus")?.previousElementSibling,!t)return R("last")}else"first"===e?t=g.el.firstElementChild:"last"===e&&(t=g.el.lastElementChild)
else{t=X(g.el)[0]}t&&t.focus({preventScroll:!0})}function T(e){const t=p.value&&n.value?-1:1,a=("prev"===e?-t:t)*d.value
let l=c.value+a
if(p.value&&n.value&&f.el){const{scrollWidth:e,offsetWidth:t}=f.el
l+=e-t}x(l)}const D=t.computed((()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected}))),E=t.computed((()=>{switch(e.showArrows){case"always":return!0
case"desktop":return!i.value
case!0:return u.value||Math.abs(c.value)>0
case"mobile":return i.value||u.value||Math.abs(c.value)>0
default:return!i.value&&(u.value||Math.abs(c.value)>0)}})),F=t.computed((()=>Math.abs(c.value)>1)),$=t.computed((()=>{if(!f.value)return!1
const e=An(p.value,f.el),t=function(e,t){const a=e?"clientWidth":"clientHeight"
return t?.[a]||0}(p.value,f.el)
return e-t-Math.abs(c.value)>1}))
return Mt((()=>t.createVNode(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!p.value,"v-slide-group--has-affixes":E.value,"v-slide-group--is-overflowing":u.value},r.value,e.class],style:e.style,tabindex:S.value||s.selected.value.length?-1:0,onFocus:B},{default:()=>[E.value&&t.createVNode("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!F.value}],onMousedown:P,onClick:()=>F.value&&T("prev")},[o.prev?.(D.value)??t.createVNode(Wa,null,{default:()=>[t.createVNode(Zl,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),t.createVNode("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:N},[t.createVNode("div",{ref:g,class:"v-slide-group__content",onFocusin:C,onFocusout:_,onKeydown:A},[o.default?.(D.value)])]),E.value&&t.createVNode("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!$.value}],onMousedown:P,onClick:()=>$.value&&T("next")},[o.next?.(D.value)??t.createVNode(Wa,null,{default:()=>[t.createVNode(Zl,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}))),{selected:s.selected,scrollTo:T,scrollOffset:c,focus:R,hasPrev:F,hasNext:$}}}),Mn=Symbol.for("vuetify:v-chip-group"),On=ht({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:c},...Fn(),...yt(),...Ol({selectedClass:"v-chip--selected"}),...Pa(),...Sa(),...El({variant:"tonal"})},"VChipGroup"),Ln=Bt()({name:"VChipGroup",props:On(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=xa(e),{isSelected:n,select:r,next:i,prev:s,selected:u}=jl(e,Mn)
return Ct({VChip:{color:t.toRef(e,"color"),disabled:t.toRef(e,"disabled"),filter:t.toRef(e,"filter"),variant:t.toRef(e,"variant")}}),Mt((()=>{const a=$n.filterProps(e)
return t.createVNode($n,t.mergeProps(a,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style}),{default:()=>[l.default?.({isSelected:n,select:r,next:i,prev:s,selected:u.value})]})})),{}}}),zn=ht({activeClass:String,appendAvatar:String,appendIcon:Ot,closable:Boolean,closeIcon:{type:Ot,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:Ot,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:G(),onClickOnce:G(),...bl(),...yt(),...Al(),...wl(),...Ll(),...dl(),...mo(),...ql(),...Pa({tag:"span"}),...Sa(),...El({variant:"tonal"})},"VChip"),jn=Bt()({name:"VChip",directives:{Ripple:Do},props:zn(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{t:r}=ya(),{borderClasses:i}=Vl(e),{colorClasses:s,colorStyles:u,variantClasses:c}=Fl(e),{densityClasses:d}=Rl(e),{elevationClasses:v}=Sl(e),{roundedClasses:p}=vl(e),{sizeClasses:f}=Kl(e),{themeClasses:m}=xa(e),g=sa(e,"modelValue"),h=zl(e,Mn,!1),y=fo(e,l),b=t.computed((()=>!1!==e.link&&y.isLink.value)),V=t.computed((()=>!e.disabled&&!1!==e.link&&(!!h||e.link||y.isClickable.value))),w=t.computed((()=>({"aria-label":r(e.closeLabel),onClick(e){e.preventDefault(),e.stopPropagation(),g.value=!1,o("click:close",e)}})))
function S(e){o("click",e),V.value&&(y.navigate?.(e),h?.toggle())}function k(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),S(e))}return()=>{const a=y.isLink.value?"a":e.tag,l=!(!e.appendIcon&&!e.appendAvatar),o=!(!l&&!n.append),r=!(!n.close&&!e.closable),x=!(!n.filter&&!e.filter)&&h,N=!(!e.prependIcon&&!e.prependAvatar),C=!(!N&&!n.prepend),_=!h||h.isSelected.value
return g.value&&t.withDirectives(t.createVNode(a,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":V.value,"v-chip--filter":x,"v-chip--pill":e.pill},m.value,i.value,_?s.value:void 0,d.value,v.value,p.value,f.value,c.value,h?.selectedClass.value,e.class],style:[_?u.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:y.href.value,tabindex:V.value?0:void 0,onClick:S,onKeydown:V.value&&!b.value&&k},{default:()=>[Dl(V.value,"v-chip"),x&&t.createVNode(tl,{key:"filter"},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-chip__filter"},[n.filter?t.createVNode(ll,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},n.filter):t.createVNode(Zl,{key:"filter-icon",icon:e.filterIcon},null)]),[[t.vShow,h.isSelected.value]])]}),C&&t.createVNode("div",{key:"prepend",class:"v-chip__prepend"},[n.prepend?t.createVNode(ll,{key:"prepend-defaults",disabled:!N,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},n.prepend):t.createVNode(t.Fragment,null,[e.prependIcon&&t.createVNode(Zl,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t.createVNode(Uo,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),t.createVNode("div",{class:"v-chip__content","data-no-activator":""},[n.default?.({isSelected:h?.isSelected.value,selectedClass:h?.selectedClass.value,select:h?.select,toggle:h?.toggle,value:h?.value.value,disabled:e.disabled})??e.text]),o&&t.createVNode("div",{key:"append",class:"v-chip__append"},[n.append?t.createVNode(ll,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},n.append):t.createVNode(t.Fragment,null,[e.appendIcon&&t.createVNode(Zl,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t.createVNode(Uo,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),r&&t.createVNode("button",t.mergeProps({key:"close",class:"v-chip__close",type:"button"},w.value),[n.close?t.createVNode(ll,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},n.close):t.createVNode(Zl,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}),[[t.resolveDirective("ripple"),V.value&&e.ripple,null]])}}}),Hn=Symbol.for("vuetify:list")
function Wn(){const e=t.inject(Hn,{hasPrepend:t.shallowRef(!1),updateHasPrepend:()=>null}),a={hasPrepend:t.shallowRef(!1),updateHasPrepend:e=>{e&&(a.hasPrepend.value=e)}}
return t.provide(Hn,a),e}function Un(){return t.inject(Hn,null)}const Yn=e=>{const a={activate:a=>{let{id:l,value:o,activated:n}=a
return l=t.toRaw(l),e&&!o&&1===n.size&&n.has(l)||(o?n.add(l):n.delete(l)),n},in:(e,t,l)=>{let o=new Set
if(null!=e)for(const n of A(e))o=a.activate({id:n,value:!0,activated:new Set(o),children:t,parents:l})
return o},out:e=>Array.from(e)}
return a},Gn=e=>{const a=Yn(e)
return{activate:e=>{let{activated:l,id:o,...n}=e
o=t.toRaw(o)
const r=l.has(o)?new Set([o]):new Set
return a.activate({...n,id:o,activated:r})},in:(e,t,l)=>{let o=new Set
if(null!=e){const n=A(e)
n.length&&(o=a.in(n.slice(0,1),t,l))}return o},out:(e,t,l)=>a.out(e,t,l)}},qn={open:e=>{let{id:t,value:a,opened:l,parents:o}=e
if(a){const e=new Set
e.add(t)
let a=o.get(t)
for(;null!=a;)e.add(a),a=o.get(a)
return e}return l.delete(t),l},select:()=>null},Kn={open:e=>{let{id:a,value:l,opened:o,parents:n}=e
if(l){let e=t.toRaw(n.get(a))
for(o.add(a);null!=e&&e!==a;)o.add(e),e=t.toRaw(n.get(e))
return o}return o.delete(a),o},select:()=>null},Xn={open:Kn.open,select:e=>{let{id:t,value:a,opened:l,parents:o}=e
if(!a)return l
const n=[]
let r=o.get(t)
for(;null!=r;)n.push(r),r=o.get(r)
return new Set(n)}},Zn=e=>{const a={select:a=>{let{id:l,value:o,selected:n}=a
if(l=t.toRaw(l),e&&!o){const e=Array.from(n.entries()).reduce(((e,t)=>{let[a,l]=t
return"on"===l&&e.push(a),e}),[])
if(1===e.length&&e[0]===l)return n}return n.set(l,o?"on":"off"),n},in:(e,t,l)=>{let o=new Map
for(const n of e||[])o=a.select({id:n,value:!0,selected:new Map(o),children:t,parents:l})
return o},out:e=>{const t=[]
for(const[a,l]of e.entries())"on"===l&&t.push(a)
return t}}
return a},Qn=e=>{const a=Zn(e)
return{select:e=>{let{selected:l,id:o,...n}=e
o=t.toRaw(o)
const r=l.has(o)?new Map([[o,l.get(o)]]):new Map
return a.select({...n,id:o,selected:r})},in:(e,t,l)=>{let o=new Map
return e?.length&&(o=a.in(e.slice(0,1),t,l)),o},out:(e,t,l)=>a.out(e,t,l)}},Jn=Symbol.for("vuetify:nested"),er={id:t.shallowRef(),root:{register:()=>null,unregister:()=>null,parents:t.ref(new Map),children:t.ref(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:t.ref(!1),selectable:t.ref(!1),opened:t.ref(new Set),activated:t.ref(new Set),selected:t.ref(new Map),selectedValues:t.ref([])}},tr=ht({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),ar=e=>{let a=!1
const l=t.ref(new Map),o=t.ref(new Map),n=sa(e,"opened",e.opened,(e=>new Set(t.toRaw(e))),(e=>[...e.values()])),r=t.computed((()=>{if("object"==typeof e.activeStrategy)return e.activeStrategy
if("function"==typeof e.activeStrategy)return e.activeStrategy(e.mandatory)
switch(e.activeStrategy){case"leaf":return(e=>{const a=Yn(e)
return{activate:e=>{let{id:l,activated:o,children:n,...r}=e
return l=t.toRaw(l),n.has(l)?o:a.activate({id:l,activated:o,children:n,...r})},in:a.in,out:a.out}})(e.mandatory)
case"single-leaf":return(e=>{const a=Gn(e)
return{activate:e=>{let{id:l,activated:o,children:n,...r}=e
return l=t.toRaw(l),n.has(l)?o:a.activate({id:l,activated:o,children:n,...r})},in:a.in,out:a.out}})(e.mandatory)
case"independent":return Yn(e.mandatory)
default:return Gn(e.mandatory)}})),i=t.computed((()=>{if("object"==typeof e.selectStrategy)return e.selectStrategy
if("function"==typeof e.selectStrategy)return e.selectStrategy(e.mandatory)
switch(e.selectStrategy){case"single-leaf":return(e=>{const a=Qn(e)
return{select:e=>{let{id:l,selected:o,children:n,...r}=e
return l=t.toRaw(l),n.has(l)?o:a.select({id:l,selected:o,children:n,...r})},in:a.in,out:a.out}})(e.mandatory)
case"leaf":return(e=>{const a=Zn(e)
return{select:e=>{let{id:l,selected:o,children:n,...r}=e
return l=t.toRaw(l),n.has(l)?o:a.select({id:l,selected:o,children:n,...r})},in:a.in,out:a.out}})(e.mandatory)
case"independent":return Zn(e.mandatory)
case"single-independent":return Qn(e.mandatory)
default:return(e=>{const a={select:a=>{let{id:l,value:o,selected:n,children:r,parents:i}=a
l=t.toRaw(l)
const s=new Map(n),u=[l]
for(;u.length;){const e=u.shift()
n.set(t.toRaw(e),o?"on":"off"),r.has(e)&&u.push(...r.get(e))}let c=t.toRaw(i.get(l))
for(;c;){const e=r.get(c),a=e.every((e=>"on"===n.get(t.toRaw(e)))),l=e.every((e=>!n.has(t.toRaw(e))||"off"===n.get(t.toRaw(e))))
n.set(c,a?"on":l?"off":"indeterminate"),c=t.toRaw(i.get(c))}if(e&&!o){const e=Array.from(n.entries()).reduce(((e,t)=>{let[a,l]=t
return"on"===l&&e.push(a),e}),[])
if(0===e.length)return s}return n},in:(e,t,l)=>{let o=new Map
for(const n of e||[])o=a.select({id:n,value:!0,selected:new Map(o),children:t,parents:l})
return o},out:(e,t)=>{const a=[]
for(const[l,o]of e.entries())"on"!==o||t.has(l)||a.push(l)
return a}}
return a})(e.mandatory)}})),s=t.computed((()=>{if("object"==typeof e.openStrategy)return e.openStrategy
switch(e.openStrategy){case"list":return Xn
case"single":return qn
default:return Kn}})),u=sa(e,"activated",e.activated,(e=>r.value.in(e,l.value,o.value)),(e=>r.value.out(e,l.value,o.value))),c=sa(e,"selected",e.selected,(e=>i.value.in(e,l.value,o.value)),(e=>i.value.out(e,l.value,o.value)))
function d(e){const t=[]
let a=e
for(;null!=a;)t.unshift(a),a=o.value.get(a)
return t}t.onBeforeUnmount((()=>{a=!0}))
const v=bt("nested"),p={id:t.shallowRef(),root:{opened:n,activatable:t.toRef(e,"activatable"),selectable:t.toRef(e,"selectable"),activated:u,selected:c,selectedValues:t.computed((()=>{const e=[]
for(const[t,a]of c.value.entries())"on"===a&&e.push(t)
return e})),register:(e,t,a)=>{t&&e!==t&&o.value.set(e,t),a&&l.value.set(e,[]),null!=t&&l.value.set(t,[...l.value.get(t)||[],e])},unregister:e=>{if(a)return
l.value.delete(e)
const t=o.value.get(e)
if(t){const a=l.value.get(t)??[]
l.value.set(t,a.filter((t=>t!==e)))}o.value.delete(e)},open:(e,t,a)=>{v.emit("click:open",{id:e,value:t,path:d(e),event:a})
const r=s.value.open({id:e,value:t,opened:new Set(n.value),children:l.value,parents:o.value,event:a})
r&&(n.value=r)},openOnSelect:(e,t,a)=>{const r=s.value.select({id:e,value:t,selected:new Map(c.value),opened:new Set(n.value),children:l.value,parents:o.value,event:a})
r&&(n.value=r)},select:(e,t,a)=>{v.emit("click:select",{id:e,value:t,path:d(e),event:a})
const n=i.value.select({id:e,value:t,selected:new Map(c.value),children:l.value,parents:o.value,event:a})
n&&(c.value=n),p.root.openOnSelect(e,t,a)},activate:(t,a,n)=>{if(!e.activatable)return p.root.select(t,!0,n)
v.emit("click:activate",{id:t,value:a,path:d(t),event:n})
const i=r.value.activate({id:t,value:a,activated:new Set(u.value),children:l.value,parents:o.value,event:n})
i&&(u.value=i)},children:l,parents:o}}
return t.provide(Jn,p),p.root},lr=(e,a)=>{const l=t.inject(Jn,er),o=Symbol(kt()),n=t.computed((()=>void 0!==e.value?e.value:o)),r={...l,id:n,open:(e,a)=>l.root.open(t.toRaw(n.value),e,a),openOnSelect:(e,t)=>l.root.openOnSelect(n.value,e,t),isOpen:t.computed((()=>l.root.opened.value.has(t.toRaw(n.value)))),parent:t.computed((()=>l.root.parents.value.get(n.value))),activate:(e,t)=>l.root.activate(n.value,e,t),isActivated:t.computed((()=>l.root.activated.value.has(t.toRaw(n.value)))),select:(e,t)=>l.root.select(n.value,e,t),isSelected:t.computed((()=>"on"===l.root.selected.value.get(t.toRaw(n.value)))),isIndeterminate:t.computed((()=>"indeterminate"===l.root.selected.value.get(n.value))),isLeaf:t.computed((()=>!l.root.children.value.get(n.value))),isGroupActivator:l.isGroupActivator}
return!l.isGroupActivator&&l.root.register(n.value,l.id.value,a),t.onBeforeUnmount((()=>{!l.isGroupActivator&&l.root.unregister(n.value)})),a&&t.provide(Jn,r),r},or=It({name:"VListGroupActivator",setup(e,a){let{slots:l}=a
return(()=>{const e=t.inject(Jn,er)
t.provide(Jn,{...e,isGroupActivator:!0})})(),()=>l.default?.()}}),nr=ht({activeColor:String,baseColor:String,color:String,collapseIcon:{type:Ot,default:"$collapse"},expandIcon:{type:Ot,default:"$expand"},prependIcon:Ot,appendIcon:Ot,fluid:Boolean,subgroup:Boolean,title:String,value:null,...yt(),...Pa()},"VListGroup"),rr=Bt()({name:"VListGroup",props:nr(),setup(e,a){let{slots:l}=a
const{isOpen:o,open:n,id:r}=lr(t.toRef(e,"value"),!0),i=t.computed((()=>`v-list-group--id-${String(r.value)}`)),s=Un(),{isBooted:u}=_l()
function c(e){e.stopPropagation(),n(!o.value,e)}const d=t.computed((()=>({onClick:c,class:"v-list-group__header",id:i.value}))),v=t.computed((()=>o.value?e.collapseIcon:e.expandIcon)),p=t.computed((()=>({VListItem:{active:o.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&v.value,appendIcon:e.appendIcon||!e.subgroup&&v.value,title:e.title,value:e.value}})))
return Mt((()=>t.createVNode(e.tag,{class:["v-list-group",{"v-list-group--prepend":s?.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":o.value},e.class],style:e.style},{default:()=>[l.activator&&t.createVNode(ll,{defaults:p.value},{default:()=>[t.createVNode(or,null,{default:()=>[l.activator({props:d.value,isOpen:o.value})]})]}),t.createVNode(fl,{transition:{component:el},disabled:!u.value},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[l.default?.()]),[[t.vShow,o.value]])]})]}))),{isOpen:o}}}),ir=ht({opacity:[Number,String],...yt(),...Pa()},"VListItemSubtitle"),sr=Bt()({name:"VListItemSubtitle",props:ir(),setup(e,a){let{slots:l}=a
return Mt((()=>t.createVNode(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},l))),{}}}),ur=Pt("v-list-item-title"),cr=ht({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Ot,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Ot,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:G(),onClickOnce:G(),...bl(),...yt(),...Al(),...ol(),...wl(),...dl(),...mo(),...Pa(),...Sa(),...El({variant:"text"})},"VListItem"),dr=Bt()({name:"VListItem",directives:{Ripple:Do},props:cr(),emits:{click:e=>!0},setup(e,a){let{attrs:l,slots:o,emit:n}=a
const r=fo(e,l),i=t.computed((()=>void 0===e.value?r.href.value:e.value)),{activate:s,isActivated:u,select:c,isOpen:d,isSelected:v,isIndeterminate:p,isGroupActivator:f,root:m,parent:g,openOnSelect:h}=lr(i,!1),y=Un(),b=t.computed((()=>!1!==e.active&&(e.active||r.isActive?.value||(m.activatable.value?u.value:v.value)))),V=t.computed((()=>!1!==e.link&&r.isLink.value)),w=t.computed((()=>!e.disabled&&!1!==e.link&&(e.link||r.isClickable.value||!!y&&(m.selectable.value||m.activatable.value||null!=e.value)))),S=t.computed((()=>e.rounded||e.nav)),k=t.computed((()=>e.color??e.activeColor)),x=t.computed((()=>({color:b.value?k.value??e.baseColor:e.baseColor,variant:e.variant})))
t.watch((()=>r.isActive?.value),(e=>{e&&null!=g.value&&m.open(g.value,!0),e&&h(e)}),{immediate:!0})
const{themeClasses:N}=xa(e),{borderClasses:C}=Vl(e),{colorClasses:_,colorStyles:I,variantClasses:B}=Fl(x),{densityClasses:P}=Rl(e),{dimensionStyles:A}=nl(e),{elevationClasses:R}=Sl(e),{roundedClasses:T}=vl(S),D=t.computed((()=>e.lines?`v-list-item--${e.lines}-line`:void 0)),E=t.computed((()=>({isActive:b.value,select:c,isOpen:d.value,isSelected:v.value,isIndeterminate:p.value})))
function F(t){n("click",t),w.value&&(r.navigate?.(t),f||(m.activatable.value?s(!u.value,t):(m.selectable.value||null!=e.value)&&c(!v.value,t)))}function $(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.target.dispatchEvent(new MouseEvent("click",e)))}return Mt((()=>{const a=V.value?"a":e.tag,l=o.title||null!=e.title,n=o.subtitle||null!=e.subtitle,i=!(!e.appendAvatar&&!e.appendIcon),s=!(!i&&!o.append),u=!(!e.prependAvatar&&!e.prependIcon),c=!(!u&&!o.prepend)
var d,v
return y?.updateHasPrepend(c),e.activeColor&&(d="active-color",v=["color","base-color"],v=Array.isArray(v)?v.slice(0,-1).map((e=>`'${e}'`)).join(", ")+` or '${v.at(-1)}'`:`'${v}'`,t.warn(`[Vuetify UPGRADE] '${d}' is deprecated, use ${v} instead.`)),t.withDirectives(t.createVNode(a,{class:["v-list-item",{"v-list-item--active":b.value,"v-list-item--disabled":e.disabled,"v-list-item--link":w.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!c&&y?.hasPrepend.value,"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&b.value},N.value,C.value,_.value,P.value,R.value,D.value,T.value,B.value,e.class],style:[I.value,A.value,e.style],href:r.href.value,tabindex:w.value?y?-2:0:void 0,onClick:F,onKeydown:w.value&&!V.value&&$},{default:()=>[Dl(w.value||b.value,"v-list-item"),c&&t.createVNode("div",{key:"prepend",class:"v-list-item__prepend"},[o.prepend?t.createVNode(ll,{key:"prepend-defaults",disabled:!u,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[o.prepend?.(E.value)]}):t.createVNode(t.Fragment,null,[e.prependAvatar&&t.createVNode(Uo,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&t.createVNode(Zl,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),t.createVNode("div",{class:"v-list-item__spacer"},null)]),t.createVNode("div",{class:"v-list-item__content","data-no-activator":""},[l&&t.createVNode(ur,{key:"title"},{default:()=>[o.title?.({title:e.title})??e.title]}),n&&t.createVNode(sr,{key:"subtitle"},{default:()=>[o.subtitle?.({subtitle:e.subtitle})??e.subtitle]}),o.default?.(E.value)]),s&&t.createVNode("div",{key:"append",class:"v-list-item__append"},[o.append?t.createVNode(ll,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[o.append?.(E.value)]}):t.createVNode(t.Fragment,null,[e.appendIcon&&t.createVNode(Zl,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&t.createVNode(Uo,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),t.createVNode("div",{class:"v-list-item__spacer"},null)])]}),[[t.resolveDirective("ripple"),w.value&&e.ripple]])})),{activate:s,isActivated:u,isGroupActivator:f,isSelected:v,list:y,select:c}}}),vr=ht({color:String,inset:Boolean,sticky:Boolean,title:String,...yt(),...Pa()},"VListSubheader"),pr=Bt()({name:"VListSubheader",props:vr(),setup(e,a){let{slots:l}=a
const{textColorClasses:o,textColorStyles:n}=ul(t.toRef(e,"color"))
return Mt((()=>{const a=!(!l.default&&!e.title)
return t.createVNode(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},o.value,e.class],style:[{textColorStyles:n},e.style]},{default:()=>[a&&t.createVNode("div",{class:"v-list-subheader__text"},[l.default?.()??e.title])]})})),{}}}),fr=ht({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...yt(),...Sa()},"VDivider"),mr=Bt()({name:"VDivider",props:fr(),setup(e,a){let{attrs:l,slots:o}=a
const{themeClasses:n}=xa(e),{textColorClasses:r,textColorStyles:i}=ul(t.toRef(e,"color")),s=t.computed((()=>{const t={}
return e.length&&(t[e.vertical?"height":"width"]=f(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=f(e.thickness)),t}))
return Mt((()=>{const a=t.createVNode("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,r.value,e.class],style:[s.value,i.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":l.role&&"separator"!==l.role?void 0:e.vertical?"vertical":"horizontal",role:`${l.role||"separator"}`},null)
return o.default?t.createVNode("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[a,t.createVNode("div",{class:"v-divider__content"},[o.default()]),a]):a})),{}}}),gr=ht({items:Array,returnObject:Boolean},"VListChildren"),hr=Bt()({name:"VListChildren",props:gr(),setup(e,a){let{slots:l}=a
return Wn(),()=>l.default?.()??e.items?.map((a=>{let{children:o,props:n,type:r,raw:i}=a
if("divider"===r)return l.divider?.({props:n})??t.createVNode(mr,n,null)
if("subheader"===r)return l.subheader?.({props:n})??t.createVNode(pr,n,null)
const s={subtitle:l.subtitle?e=>l.subtitle?.({...e,item:i}):void 0,prepend:l.prepend?e=>l.prepend?.({...e,item:i}):void 0,append:l.append?e=>l.append?.({...e,item:i}):void 0,title:l.title?e=>l.title?.({...e,item:i}):void 0},u=rr.filterProps(n)
return o?t.createVNode(rr,t.mergeProps({value:n?.value},u),{activator:a=>{let{props:o}=a
const r={...n,...o,value:e.returnObject?i:n.value}
return l.header?l.header({props:r}):t.createVNode(dr,r,s)},default:()=>t.createVNode(hr,{items:o,returnObject:e.returnObject},l)}):l.item?l.item({props:n}):t.createVNode(dr,t.mergeProps(n,{value:e.returnObject?i:n.value}),s)}))}}),yr=ht({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:c}},"list-items")
function br(e,t){const a=v(t,e.itemTitle,t),l=v(t,e.itemValue,a),o=v(t,e.itemChildren),n={title:a,value:l,...!0===e.itemProps?"object"!=typeof t||null==t||Array.isArray(t)?void 0:"children"in t?x(t,["children"]):t:v(t,e.itemProps)}
return{title:String(n.title??""),value:n.value,props:n,children:Array.isArray(o)?Vr(e,o):void 0,raw:t}}function Vr(e,t){const a=[]
for(const l of t)a.push(br(e,l))
return a}function wr(e){const a=t.computed((()=>Vr(e,e.items))),l=t.computed((()=>a.value.some((e=>null===e.value))))
return{items:a,transformIn:function(t){return l.value||(t=t.filter((e=>null!==e))),t.map((t=>e.returnObject&&"string"==typeof t?br(e,t):a.value.find((a=>e.valueComparator(t,a.value)))||br(e,t)))},transformOut:function(t){return e.returnObject?t.map((e=>{let{raw:t}=e
return t})):t.map((e=>{let{value:t}=e
return t}))}}}function Sr(e,t){const a=v(t,e.itemType,"item"),l=function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}(t)?t:v(t,e.itemTitle),o=v(t,e.itemValue,void 0),n=v(t,e.itemChildren),r={title:l,value:o,...!0===e.itemProps?x(t,["children"]):v(t,e.itemProps)}
return{type:a,title:r.title,value:r.value,props:r,children:"item"===a&&n?kr(e,n):void 0,raw:t}}function kr(e,t){const a=[]
for(const l of t)a.push(Sr(e,l))
return a}const xr=ht({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":G(),"onClick:select":G(),"onUpdate:opened":G(),...tr({selectStrategy:"single-leaf",openStrategy:"list"}),...bl(),...yt(),...Al(),...ol(),...wl(),itemType:{type:String,default:"type"},...yr(),...dl(),...Pa(),...Sa(),...El({variant:"text"})},"VList"),Nr=Bt()({name:"VList",props:xr(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,a){let{slots:l}=a
const{items:o}=function(e){return{items:t.computed((()=>kr(e,e.items)))}}(e),{themeClasses:n}=xa(e),{backgroundColorClasses:r,backgroundColorStyles:i}=cl(t.toRef(e,"bgColor")),{borderClasses:s}=Vl(e),{densityClasses:u}=Rl(e),{dimensionStyles:c}=nl(e),{elevationClasses:d}=Sl(e),{roundedClasses:v}=vl(e),{children:p,open:f,parents:m,select:g}=ar(e),h=t.computed((()=>e.lines?`v-list--${e.lines}-line`:void 0)),y=t.toRef(e,"activeColor"),b=t.toRef(e,"baseColor"),V=t.toRef(e,"color")
Wn(),Ct({VListGroup:{activeColor:y,baseColor:b,color:V,expandIcon:t.toRef(e,"expandIcon"),collapseIcon:t.toRef(e,"collapseIcon")},VListItem:{activeClass:t.toRef(e,"activeClass"),activeColor:y,baseColor:b,color:V,density:t.toRef(e,"density"),disabled:t.toRef(e,"disabled"),lines:t.toRef(e,"lines"),nav:t.toRef(e,"nav"),slim:t.toRef(e,"slim"),variant:t.toRef(e,"variant")}})
const w=t.shallowRef(!1),S=t.ref()
function k(e){w.value=!0}function x(e){w.value=!1}function N(e){w.value||e.relatedTarget&&S.value?.contains(e.relatedTarget)||I()}function C(e){const t=e.target
if(S.value&&!["INPUT","TEXTAREA"].includes(t.tagName)){if("ArrowDown"===e.key)I("next")
else if("ArrowUp"===e.key)I("prev")
else if("Home"===e.key)I("first")
else{if("End"!==e.key)return
I("last")}e.preventDefault()}}function _(e){w.value=!0}function I(e){if(S.value)return Q(S.value,e)}return Mt((()=>t.createVNode(e.tag,{ref:S,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},n.value,r.value,s.value,u.value,d.value,h.value,v.value,e.class],style:[i.value,c.value,e.style],tabindex:e.disabled||w.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:k,onFocusout:x,onFocus:N,onKeydown:C,onMousedown:_},{default:()=>[t.createVNode(hr,{items:o.value,returnObject:e.returnObject},l)]}))),{open:f,select:g,focus:I,children:p,parents:m}}}),Cr=Pt("v-list-img"),_r=ht({start:Boolean,end:Boolean,...yt(),...Pa()},"VListItemAction"),Ir=Bt()({name:"VListItemAction",props:_r(),setup(e,a){let{slots:l}=a
return Mt((()=>t.createVNode(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},l))),{}}}),Br=ht({start:Boolean,end:Boolean,...yt(),...Pa()},"VListItemMedia"),Pr=Bt()({name:"VListItemMedia",props:Br(),setup(e,a){let{slots:l}=a
return Mt((()=>t.createVNode(e.tag,{class:["v-list-item-media",{"v-list-item-media--start":e.start,"v-list-item-media--end":e.end},e.class],style:e.style},l))),{}}})
function Ar(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Rr(e,t){if("top"===e.side||"bottom"===e.side){const{side:a,align:l}=e
return Ar({x:"left"===l?0:"center"===l?t.width/2:"right"===l?t.width:l,y:"top"===a?0:"bottom"===a?t.height:a},t)}if("left"===e.side||"right"===e.side){const{side:a,align:l}=e
return Ar({x:"left"===a?0:"right"===a?t.width:a,y:"top"===l?0:"center"===l?t.height/2:"bottom"===l?t.height:l},t)}return Ar({x:t.width/2,y:t.height/2},t)}const Tr={static:function(){},connected:function(e,a,l){(Array.isArray(e.target.value)||function(e){for(;e;){if("fixed"===window.getComputedStyle(e).position)return!0
e=e.offsetParent}return!1}(e.target.value))&&Object.assign(l.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0})
const{preferredAnchor:o,preferredOrigin:n}=W((()=>{const t=ie(a.location,e.isRtl.value),l="overlap"===a.origin?t:"auto"===a.origin?ue(t):ie(a.origin,e.isRtl.value)
return t.side===l.side&&t.align===ce(l).align?{preferredAnchor:de(t),preferredOrigin:de(l)}:{preferredAnchor:t,preferredOrigin:l}})),[r,i,s,u]=["minWidth","minHeight","maxWidth","maxHeight"].map((e=>t.computed((()=>{const t=parseFloat(a[e])
return isNaN(t)?1/0:t})))),c=t.computed((()=>{if(Array.isArray(a.offset))return a.offset
if("string"==typeof a.offset){const e=a.offset.split(" ").map(parseFloat)
return e.length<2&&e.push(0),e}return"number"==typeof a.offset?[a.offset,0]:[0,0]}))
let d=!1
const v=new ResizeObserver((()=>{d&&p()}))
function p(){if(d=!1,requestAnimationFrame((()=>d=!0)),!e.target.value||!e.contentEl.value)return
const t=me(e.target.value),a=function(e,t){const a=ge(e)
t?a.x+=parseFloat(e.style.right||0):a.x-=parseFloat(e.style.left||0)
return a.y-=parseFloat(e.style.top||0),a}(e.contentEl.value,e.isRtl.value),v=Et(e.contentEl.value)
v.length||(v.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(a.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),a.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)))
const p=v.reduce(((e,t)=>{const a=t.getBoundingClientRect(),l=new pe({x:t===document.documentElement?0:a.x,y:t===document.documentElement?0:a.y,width:t.clientWidth,height:t.clientHeight})
return e?new pe({x:Math.max(e.left,l.left),y:Math.max(e.top,l.top),width:Math.min(e.right,l.right)-Math.max(e.left,l.left),height:Math.min(e.bottom,l.bottom)-Math.max(e.top,l.top)}):l}),void 0)
p.x+=12,p.y+=12,p.width-=24,p.height-=24
let m={anchor:o.value,origin:n.value}
function g(e){const l=new pe(a),o=Rr(e.anchor,t),n=Rr(e.origin,l)
let{x:r,y:i}=(v=n,{x:(d=o).x-v.x,y:d.y-v.y})
var d,v
switch(e.anchor.side){case"top":i-=c.value[0]
break
case"bottom":i+=c.value[0]
break
case"left":r-=c.value[0]
break
case"right":r+=c.value[0]}switch(e.anchor.align){case"top":i-=c.value[1]
break
case"bottom":i+=c.value[1]
break
case"left":r-=c.value[1]
break
case"right":r+=c.value[1]}l.x+=r,l.y+=i,l.width=Math.min(l.width,s.value),l.height=Math.min(l.height,u.value)
return{overflows:fe(l,p),x:r,y:i}}let h=0,y=0
const b={x:0,y:0},V={x:!1,y:!1}
let w=-1
for(;;){if(w++>10){Me("Infinite loop detected in connectedLocationStrategy")
break}const{x:e,y:t,overflows:l}=g(m)
h+=e,y+=t,a.x+=e,a.y+=t
{const e=ve(m.anchor),t=l.x.before||l.x.after,a=l.y.before||l.y.after
let o=!1
if(["x","y"].forEach((n=>{if("x"===n&&t&&!V.x||"y"===n&&a&&!V.y){const t={anchor:{...m.anchor},origin:{...m.origin}},a="x"===n?"y"===e?ce:ue:"y"===e?ue:ce
t.anchor=a(t.anchor),t.origin=a(t.origin)
const{overflows:r}=g(t);(r[n].before<=l[n].before&&r[n].after<=l[n].after||r[n].before+r[n].after<(l[n].before+l[n].after)/2)&&(m=t,o=V[n]=!0)}})),o)continue}l.x.before&&(h+=l.x.before,a.x+=l.x.before),l.x.after&&(h-=l.x.after,a.x-=l.x.after),l.y.before&&(y+=l.y.before,a.y+=l.y.before),l.y.after&&(y-=l.y.after,a.y-=l.y.after)
{const e=fe(a,p)
b.x=p.width-e.x.before-e.x.after,b.y=p.height-e.y.before-e.y.after,h+=e.x.before,a.x+=e.x.before,y+=e.y.before,a.y+=e.y.before}break}const S=ve(m.anchor)
return Object.assign(l.value,{"--v-overlay-anchor-origin":`${m.anchor.side} ${m.anchor.align}`,transformOrigin:`${m.origin.side} ${m.origin.align}`,top:f(Er(y)),left:e.isRtl.value?void 0:f(Er(h)),right:e.isRtl.value?f(Er(-h)):void 0,minWidth:f("y"===S?Math.min(r.value,t.width):r.value),maxWidth:f(Fr(R(b.x,r.value===1/0?0:r.value,s.value))),maxHeight:f(Fr(R(b.y,i.value===1/0?0:i.value,u.value)))}),{available:b,contentBox:a}}return t.watch([e.target,e.contentEl],((e,t)=>{let[a,l]=e,[o,n]=t
o&&!Array.isArray(o)&&v.unobserve(o),a&&!Array.isArray(a)&&v.observe(a),n&&v.unobserve(n),l&&v.observe(l)}),{immediate:!0}),t.onScopeDispose((()=>{v.disconnect()})),t.watch((()=>[o.value,n.value,a.offset,a.minWidth,a.minHeight,a.maxWidth,a.maxHeight]),(()=>p())),t.nextTick((()=>{const e=p()
if(!e)return
const{available:t,contentBox:a}=e
a.height>t.y&&requestAnimationFrame((()=>{p(),requestAnimationFrame((()=>{p()}))}))})),{updateLocation:p}}},Dr=ht({locationStrategy:{type:[String,Function],default:"static",validator:e=>"function"==typeof e||e in Tr},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies")
function Er(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Fr(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let $r=!0
const Mr=[]
let Or=-1
function Lr(){cancelAnimationFrame(Or),Or=requestAnimationFrame((()=>{const e=Mr.shift()
e&&e(),Mr.length?Lr():$r=!0}))}const zr={none:null,close:function(e){Hr(e.targetEl.value??e.contentEl.value,(function(t){e.isActive.value=!1}))},block:function(e,a){const l=e.root.value?.offsetParent,o=[...new Set([...Et(e.targetEl.value,a.contained?l:void 0),...Et(e.contentEl.value,a.contained?l:void 0)])].filter((e=>!e.classList.contains("v-overlay-scroll-blocked"))),n=window.innerWidth-document.documentElement.offsetWidth,r=(i=l||document.documentElement,Ft(i)&&i)
var i
r&&e.root.value.classList.add("v-overlay--scroll-blocked")
o.forEach(((e,t)=>{e.style.setProperty("--v-body-scroll-x",f(-e.scrollLeft)),e.style.setProperty("--v-body-scroll-y",f(-e.scrollTop)),e!==document.documentElement&&e.style.setProperty("--v-scrollbar-offset",f(n)),e.classList.add("v-overlay-scroll-blocked")})),t.onScopeDispose((()=>{o.forEach(((e,t)=>{const a=parseFloat(e.style.getPropertyValue("--v-body-scroll-x")),l=parseFloat(e.style.getPropertyValue("--v-body-scroll-y")),o=e.style.scrollBehavior
e.style.scrollBehavior="auto",e.style.removeProperty("--v-body-scroll-x"),e.style.removeProperty("--v-body-scroll-y"),e.style.removeProperty("--v-scrollbar-offset"),e.classList.remove("v-overlay-scroll-blocked"),e.scrollLeft=-a,e.scrollTop=-l,e.style.scrollBehavior=o})),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")}))},reposition:function(e,a,l){let o=!1,n=-1,r=-1
function i(t){var a
a=()=>{const a=performance.now()
e.updateLocation.value?.(t)
const l=performance.now()-a
o=l/(1e3/60)>2},!$r||Mr.length?(Mr.push(a),Lr()):($r=!1,a(),Lr())}r=("undefined"==typeof requestIdleCallback?e=>e():requestIdleCallback)((()=>{l.run((()=>{Hr(e.targetEl.value??e.contentEl.value,(e=>{o?(cancelAnimationFrame(n),n=requestAnimationFrame((()=>{n=requestAnimationFrame((()=>{i(e)}))}))):i(e)}))}))})),t.onScopeDispose((()=>{"undefined"!=typeof cancelIdleCallback&&cancelIdleCallback(r),cancelAnimationFrame(n)}))}},jr=ht({scrollStrategy:{type:[String,Function],default:"block",validator:e=>"function"==typeof e||e in zr}},"VOverlay-scroll-strategies")
function Hr(e,a){const l=[document,...Et(e)]
l.forEach((e=>{e.addEventListener("scroll",a,{passive:!0})})),t.onScopeDispose((()=>{l.forEach((e=>{e.removeEventListener("scroll",a)}))}))}const Wr=Symbol.for("vuetify:v-menu"),Ur=ht({closeDelay:[Number,String],openDelay:[Number,String]},"delay")
function Yr(e,t){let l=()=>{}
function o(o){l?.()
const n=Number(o?e.openDelay:e.closeDelay)
return new Promise((e=>{l=function(e,t){if(!a||0===e)return t(),()=>{}
const l=window.setTimeout(t,e)
return()=>window.clearTimeout(l)}(n,(()=>{t?.(o),e(o)}))}))}return{clearDelay:l,runOpenDelay:function(){return o(!0)},runCloseDelay:function(){return o(!1)}}}const Gr=ht({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Ur()},"VOverlay-activator")
function qr(e,l){let{isActive:o,isTop:n,contentEl:r}=l
const i=bt("useActivator"),s=t.ref()
let u=!1,c=!1,d=!0
const v=t.computed((()=>e.openOnFocus||null==e.openOnFocus&&e.openOnHover)),p=t.computed((()=>e.openOnClick||null==e.openOnClick&&!e.openOnHover&&!v.value)),{runOpenDelay:f,runCloseDelay:m}=Yr(e,(t=>{t!==(e.openOnHover&&u||v.value&&c)||e.openOnHover&&o.value&&!n.value||(o.value!==t&&(d=!0),o.value=t)})),g=t.ref(),h=e=>{e.stopPropagation(),s.value=e.currentTarget||e.target,o.value||(g.value=[e.clientX,e.clientY]),o.value=!o.value},y=e=>{e.sourceCapabilities?.firesTouchEvents||(u=!0,s.value=e.currentTarget||e.target,f())},b=e=>{u=!1,m()},V=e=>{!1!==te(e.target,":focus-visible")&&(c=!0,e.stopPropagation(),s.value=e.currentTarget||e.target,f())},w=e=>{c=!1,e.stopPropagation(),m()},S=t.computed((()=>{const t={}
return p.value&&(t.onClick=h),e.openOnHover&&(t.onMouseenter=y,t.onMouseleave=b),v.value&&(t.onFocus=V,t.onBlur=w),t})),k=t.computed((()=>{const a={}
if(e.openOnHover&&(a.onMouseenter=()=>{u=!0,f()},a.onMouseleave=()=>{u=!1,m()}),v.value&&(a.onFocusin=()=>{c=!0,f()},a.onFocusout=()=>{c=!1,m()}),e.closeOnContentClick){const e=t.inject(Wr,null)
a.onClick=()=>{o.value=!1,e?.closeParents()}}return a})),x=t.computed((()=>{const t={}
return e.openOnHover&&(t.onMouseenter=()=>{d&&(u=!0,d=!1,f())},t.onMouseleave=()=>{u=!1,m()}),t}))
t.watch(n,(t=>{!t||(!e.openOnHover||u||v.value&&c)&&(!v.value||c||e.openOnHover&&u)||r.value?.contains(document.activeElement)||(o.value=!1)})),t.watch(o,(e=>{e||setTimeout((()=>{g.value=void 0}))}),{flush:"post"})
const N=le()
t.watchEffect((()=>{N.value&&t.nextTick((()=>{s.value=N.el}))}))
const C=le(),I=t.computed((()=>"cursor"===e.target&&g.value?g.value:C.value?C.el:Kr(e.target,i)||s.value)),B=t.computed((()=>Array.isArray(I.value)?void 0:I.value))
let P
return t.watch((()=>!!e.activator),(l=>{l&&a?(P=t.effectScope(),P.run((()=>{!function(e,a,l){let{activatorEl:o,activatorEvents:n}=l
function r(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s(),l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps
a&&function(e,t){Object.keys(t).forEach((a=>{if(_(a)){const l=Y(a),o=ye.get(e)
if(null==t[a])o?.forEach((t=>{const[a,n]=t
a===l&&(e.removeEventListener(l,n),o.delete(t))}))
else if(!o||![...o]?.some((e=>e[0]===l&&e[1]===t[a]))){e.addEventListener(l,t[a])
const n=o||new Set
n.add([l,t[a]]),ye.has(e)||ye.set(e,n)}}else null==t[a]?e.removeAttribute(a):e.setAttribute(a,t[a])}))}(a,t.mergeProps(n.value,l))}function i(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s(),l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps
a&&function(e,t){Object.keys(t).forEach((t=>{if(_(t)){const a=Y(t),l=ye.get(e)
l?.forEach((t=>{const[o,n]=t
o===a&&(e.removeEventListener(a,n),l.delete(t))}))}else e.removeAttribute(t)}))}(a,t.mergeProps(n.value,l))}function s(){const t=Kr(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.activator,a)
return o.value=t?.nodeType===Node.ELEMENT_NODE?t:void 0,o.value}t.watch((()=>e.activator),((e,a)=>{if(a&&e!==a){const e=s(a)
e&&i(e)}e&&t.nextTick((()=>r()))}),{immediate:!0}),t.watch((()=>e.activatorProps),(()=>{r()})),t.onScopeDispose((()=>{i()}))}(e,i,{activatorEl:s,activatorEvents:S})}))):P&&P.stop()}),{flush:"post",immediate:!0}),t.onScopeDispose((()=>{P?.stop()})),{activatorEl:s,activatorRef:N,target:I,targetEl:B,targetRef:C,activatorEvents:S,contentEvents:k,scrimEvents:x}}function Kr(e,t){if(!e)return
let a
if("parent"===e){let e=t?.proxy?.$el?.parentNode
for(;e?.hasAttribute("data-no-activator");)e=e.parentNode
a=e}else a="string"==typeof e?document.querySelector(e):"$el"in e?e.$el:e
return a}function Xr(){if(!a)return t.shallowRef(!1)
const{ssr:e}=Nn()
if(e){const e=t.shallowRef(!1)
return t.onMounted((()=>{e.value=!0})),e}return t.shallowRef(!0)}const Zr=ht({eager:Boolean},"lazy")
function Qr(e,a){const l=t.shallowRef(!1),o=t.computed((()=>l.value||e.eager||a.value))
return t.watch(a,(()=>l.value=!0)),{isBooted:l,hasContent:o,onAfterLeave:function(){e.eager||(l.value=!1)}}}function Jr(){const e=bt("useScopeId").vnode.scopeId
return{scopeId:e?{[e]:""}:void 0}}const ei=Symbol.for("vuetify:stack"),ti=t.reactive([])
function ai(){return!0}function li(e,t,a){if(!e||!1===oi(e,a))return!1
const l=At(t)
if("undefined"!=typeof ShadowRoot&&l instanceof ShadowRoot&&l.host===e.target)return!1
const o=("object"==typeof a.value&&a.value.include||(()=>[]))()
return o.push(t),!o.some((t=>t?.contains(e.target)))}function oi(e,t){return("object"==typeof t.value&&t.value.closeConditional||ai)(e)}function ni(e,t){const a=At(e)
t(document),"undefined"!=typeof ShadowRoot&&a instanceof ShadowRoot&&t(a)}const ri={mounted(e,t){const a=a=>function(e,t,a){const l="function"==typeof a.value?a.value:a.value.handler
e.shadowTarget=e.target,t._clickOutside.lastMousedownWasOutside&&li(e,t,a)&&setTimeout((()=>{oi(e,a)&&l&&l(e)}),0)}(a,e,t),l=a=>{e._clickOutside.lastMousedownWasOutside=li(a,e,t)}
ni(e,(e=>{e.addEventListener("click",a,!0),e.addEventListener("mousedown",l,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:a,onMousedown:l}},beforeUnmount(e,t){e._clickOutside&&(ni(e,(a=>{if(!a||!e._clickOutside?.[t.instance.$.uid])return
const{onClick:l,onMousedown:o}=e._clickOutside[t.instance.$.uid]
a.removeEventListener("click",l,!0),a.removeEventListener("mousedown",o,!0)})),delete e._clickOutside[t.instance.$.uid])}}
function ii(e){const{modelValue:a,color:l,...o}=e
return t.createVNode(t.Transition,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&t.createVNode("div",t.mergeProps({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const si=ht({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Gr(),...yt(),...ol(),...Zr(),...Dr(),...jr(),...Sa(),...pl()},"VOverlay"),ui=Bt()({name:"VOverlay",directives:{ClickOutside:ri},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...si()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,l){let{slots:o,attrs:n,emit:r}=l
const i=bt("VOverlay"),s=t.ref(),u=t.ref(),c=t.ref(),d=sa(e,"modelValue"),v=t.computed({get:()=>d.value,set:t=>{t&&e.disabled||(d.value=t)}}),{themeClasses:p}=xa(e),{rtlClasses:m,isRtl:g}=Va(),{hasContent:h,onAfterLeave:y}=Qr(e,v),b=cl(t.computed((()=>"string"==typeof e.scrim?e.scrim:null))),{globalTop:V,localTop:w,stackStyles:S}=function(e,a,l){const o=bt("useStack"),n=!l,r=t.inject(ei,void 0),i=t.reactive({activeChildren:new Set})
t.provide(ei,i)
const s=t.shallowRef(+a.value)
ia(e,(()=>{const e=ti.at(-1)?.[1]
s.value=e?e+10:+a.value,n&&ti.push([o.uid,s.value]),r?.activeChildren.add(o.uid),t.onScopeDispose((()=>{if(n){const e=t.toRaw(ti).findIndex((e=>e[0]===o.uid))
ti.splice(e,1)}r?.activeChildren.delete(o.uid)}))}))
const u=t.shallowRef(!0)
n&&t.watchEffect((()=>{const e=ti.at(-1)?.[0]===o.uid
setTimeout((()=>u.value=e))}))
const c=t.computed((()=>!i.activeChildren.size))
return{globalTop:t.readonly(u),localTop:c,stackStyles:t.computed((()=>({zIndex:s.value})))}}(v,t.toRef(e,"zIndex"),e._disableGlobalStack),{activatorEl:k,activatorRef:x,target:N,targetEl:C,targetRef:_,activatorEvents:I,contentEvents:B,scrimEvents:P}=qr(e,{isActive:v,isTop:w,contentEl:c}),{teleportTarget:A}=function(e){return{teleportTarget:t.computed((()=>{const l=e()
if(!0===l||!a)return
const o=!1===l?document.body:"string"==typeof l?document.querySelector(l):l
if(null==o)return void t.warn(`Unable to locate target ${l}`)
let n=[...o.children].find((e=>e.matches(".v-overlay-container")))
return n||(n=document.createElement("div"),n.className="v-overlay-container",o.appendChild(n)),n}))}}((()=>{const t=e.attach||e.contained
if(t)return t
const a=k?.value?.getRootNode()||i.proxy?.$el?.getRootNode()
return a instanceof ShadowRoot&&a})),{dimensionStyles:R}=nl(e),T=Xr(),{scopeId:D}=Jr()
t.watch((()=>e.disabled),(e=>{e&&(v.value=!1)}))
const{contentStyles:E,updateLocation:F}=function(e,l){const o=t.ref({}),n=t.ref()
function r(e){n.value?.(e)}return a&&ia((()=>!(!l.isActive.value||!e.locationStrategy)),(a=>{t.watch((()=>e.locationStrategy),a),t.onScopeDispose((()=>{window.removeEventListener("resize",r),n.value=void 0})),window.addEventListener("resize",r,{passive:!0}),"function"==typeof e.locationStrategy?n.value=e.locationStrategy(l,e,o)?.updateLocation:n.value=Tr[e.locationStrategy](l,e,o)?.updateLocation})),{contentStyles:o,updateLocation:n}}(e,{isRtl:g,contentEl:c,target:N,isActive:v})
function $(t){r("click:outside",t),e.persistent?j():v.value=!1}function M(t){return v.value&&V.value&&(!e.scrim||t.target===u.value||t instanceof MouseEvent&&t.shadowTarget===u.value)}function O(t){"Escape"===t.key&&V.value&&(e.persistent?j():(v.value=!1,c.value?.contains(document.activeElement)&&k.value?.focus()))}!function(e,l){if(!a)return
let o
t.watchEffect((async()=>{o?.stop(),l.isActive.value&&e.scrollStrategy&&(o=t.effectScope(),await new Promise((e=>setTimeout(e))),o.active&&o.run((()=>{"function"==typeof e.scrollStrategy?e.scrollStrategy(l,e,o):zr[e.scrollStrategy]?.(l,e,o)})))})),t.onScopeDispose((()=>{o?.stop()}))}(e,{root:s,contentEl:c,targetEl:C,isActive:v,updateLocation:F}),a&&t.watch(v,(e=>{e?window.addEventListener("keydown",O):window.removeEventListener("keydown",O)}),{immediate:!0}),t.onBeforeUnmount((()=>{a&&window.removeEventListener("keydown",O)}))
const L=po()
ia((()=>e.closeOnBack),(()=>{!function(e,l){let o,n,r=!1
function i(e){e.state?.replaced||(r=!0,setTimeout((()=>r=!1)))}a&&(t.nextTick((()=>{window.addEventListener("popstate",i),o=e?.beforeEach(((e,t,a)=>{go?r?l(a):a():setTimeout((()=>r?l(a):a())),go=!0})),n=e?.afterEach((()=>{go=!1}))})),t.onScopeDispose((()=>{window.removeEventListener("popstate",i),o?.(),n?.()})))}(L,(t=>{V.value&&v.value?(t(!1),e.persistent?j():v.value=!1):t()}))}))
const z=t.ref()
function j(){e.noClickAnimation||c.value&&he(c.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Rt})}function H(){r("afterEnter")}function W(){y(),r("afterLeave")}return t.watch((()=>v.value&&(e.absolute||e.contained)&&null==A.value),(e=>{if(e){const e=Dt(s.value)
e&&e!==document.scrollingElement&&(z.value=e.scrollTop)}})),Mt((()=>t.createVNode(t.Fragment,null,[o.activator?.({isActive:v.value,targetRef:_,props:t.mergeProps({ref:x},I.value,e.activatorProps)}),T.value&&h.value&&t.createVNode(t.Teleport,{disabled:!A.value,to:A.value},{default:()=>[t.createVNode("div",t.mergeProps({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":v.value,"v-overlay--contained":e.contained},p.value,m.value,e.class],style:[S.value,{"--v-overlay-opacity":e.opacity,top:f(z.value)},e.style],ref:s},D,n),[t.createVNode(ii,t.mergeProps({color:b,modelValue:v.value&&!!e.scrim,ref:u},P.value),null),t.createVNode(fl,{appear:!0,persisted:!0,transition:e.transition,target:N.value,onAfterEnter:H,onAfterLeave:W},{default:()=>[t.withDirectives(t.createVNode("div",t.mergeProps({ref:c,class:["v-overlay__content",e.contentClass],style:[R.value,E.value]},B.value,e.contentProps),[o.default?.({isActive:v})]),[[t.vShow,v.value],[t.resolveDirective("click-outside"),{handler:$,closeConditional:M,include:()=>[k.value]}]])]})])]})]))),{activatorEl:k,scrimEl:u,target:N,animateClick:j,contentEl:c,globalTop:V,localTop:w,updateLocation:F}}}),ci=Symbol("Forwarded refs")
function di(e,t){let a=e
for(;a;){const e=Reflect.getOwnPropertyDescriptor(a,t)
if(e)return e
a=Object.getPrototypeOf(a)}}function vi(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),l=1;l<t;l++)a[l-1]=arguments[l]
return e[ci]=a,new Proxy(e,{get(e,t){if(Reflect.has(e,t))return Reflect.get(e,t)
if("symbol"!=typeof t&&!t.startsWith("$")&&!t.startsWith("__"))for(const e of a)if(e.value&&Reflect.has(e.value,t)){const a=Reflect.get(e.value,t)
return"function"==typeof a?a.bind(e.value):a}},has(e,t){if(Reflect.has(e,t))return!0
if("symbol"==typeof t||t.startsWith("$")||t.startsWith("__"))return!1
for(const e of a)if(e.value&&Reflect.has(e.value,t))return!0
return!1},set(e,t,l){if(Reflect.has(e,t))return Reflect.set(e,t,l)
if("symbol"==typeof t||t.startsWith("$")||t.startsWith("__"))return!1
for(const e of a)if(e.value&&Reflect.has(e.value,t))return Reflect.set(e.value,t,l)
return!1},getOwnPropertyDescriptor(e,t){const l=Reflect.getOwnPropertyDescriptor(e,t)
if(l)return l
if("symbol"!=typeof t&&!t.startsWith("$")&&!t.startsWith("__")){for(const e of a){if(!e.value)continue
const a=di(e.value,t)??("_"in e.value?di(e.value._?.setupState,t):void 0)
if(a)return a}for(const e of a){const a=e.value&&e.value[ci]
if(!a)continue
const l=a.slice()
for(;l.length;){const e=l.shift(),a=di(e.value,t)
if(a)return a
const o=e.value&&e.value[ci]
o&&l.push(...o)}}}}})}const pi=ht({id:String,submenu:Boolean,...x(si({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Ma}}),["absolute"])},"VMenu"),fi=Bt()({name:"VMenu",props:pi(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=sa(e,"modelValue"),{scopeId:n}=Jr(),{isRtl:r}=Va(),i=kt(),s=t.computed((()=>e.id||`v-menu-${i}`)),u=t.ref(),c=t.inject(Wr,null),d=t.shallowRef(new Set)
async function v(e){const a=e.relatedTarget,l=e.target
if(await t.nextTick(),o.value&&a!==l&&u.value?.contentEl&&u.value?.globalTop&&![document,u.value.contentEl].includes(l)&&!u.value.contentEl.contains(l)){const e=X(u.value.contentEl)
e[0]?.focus()}}function p(e){c?.closeParents(e)}function f(t){if(!e.disabled)if("Tab"===t.key||"Enter"===t.key&&!e.closeOnContentClick){if("Enter"===t.key&&(t.target instanceof HTMLTextAreaElement||t.target instanceof HTMLInputElement&&t.target.closest("form")))return
"Enter"===t.key&&t.preventDefault()
Z(X(u.value?.contentEl,!1),t.shiftKey?"prev":"next",(e=>e.tabIndex>=0))||(o.value=!1,u.value?.activatorEl?.focus())}else e.submenu&&t.key===(r.value?"ArrowRight":"ArrowLeft")&&(o.value=!1,u.value?.activatorEl?.focus())}function m(t){if(e.disabled)return
const a=u.value?.contentEl
a&&o.value?"ArrowDown"===t.key?(t.preventDefault(),t.stopImmediatePropagation(),Q(a,"next")):"ArrowUp"===t.key?(t.preventDefault(),t.stopImmediatePropagation(),Q(a,"prev")):e.submenu&&(t.key===(r.value?"ArrowRight":"ArrowLeft")?o.value=!1:t.key===(r.value?"ArrowLeft":"ArrowRight")&&(t.preventDefault(),Q(a,"first"))):(e.submenu?t.key===(r.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(t.key))&&(o.value=!0,t.preventDefault(),setTimeout((()=>setTimeout((()=>m(t))))))}t.provide(Wr,{register(){d.value.add(i)},unregister(){d.value.delete(i)},closeParents(t){setTimeout((()=>{d.value.size||e.persistent||null!=t&&(!u.value?.contentEl||function(e,t){const a=e.clientX,l=e.clientY,o=t.getBoundingClientRect(),n=o.left,r=o.top,i=o.right,s=o.bottom
return a>=n&&a<=i&&l>=r&&l<=s}(t,u.value.contentEl))||(o.value=!1,c?.closeParents())}),40)}}),t.onBeforeUnmount((()=>c?.unregister())),t.onDeactivated((()=>o.value=!1)),t.watch(o,(e=>{e?(c?.register(),document.addEventListener("focusin",v,{once:!0})):(c?.unregister(),document.removeEventListener("focusin",v))}))
const g=t.computed((()=>t.mergeProps({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":s.value,onKeydown:m},e.activatorProps)))
return Mt((()=>{const a=ui.filterProps(e)
return t.createVNode(ui,t.mergeProps({ref:u,id:s.value,class:["v-menu",e.class],style:e.style},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,absolute:!0,activatorProps:g.value,location:e.location??(e.submenu?"end":"bottom"),"onClick:outside":p,onKeydown:f},n),{activator:l.activator,default:function(){for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o]
return t.createVNode(ll,{root:"VMenu"},{default:()=>[l.default?.(...a)]})}})})),vi({id:s,ΨopenChildren:d},u)}}),mi=ht({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...yt(),...pl({transition:{component:Qa}})},"VCounter"),gi=Bt()({name:"VCounter",functional:!0,props:mi(),setup(e,a){let{slots:l}=a
const o=t.computed((()=>e.max?`${e.value} / ${e.max}`:String(e.value)))
return Mt((()=>t.createVNode(fl,{transition:e.transition},{default:()=>[t.withDirectives(t.createVNode("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[l.default?l.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[t.vShow,e.active]])]}))),{}}}),hi=ht({floating:Boolean,...yt()},"VFieldLabel"),yi=Bt()({name:"VFieldLabel",props:hi(),setup(e,a){let{slots:l}=a
return Mt((()=>t.createVNode(Go,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},l))),{}}}),bi=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Vi=ht({appendInnerIcon:Ot,bgColor:String,clearable:Boolean,clearIcon:{type:Ot,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Ot,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>bi.includes(e)},"onClick:clear":G(),"onClick:appendInner":G(),"onClick:prependInner":G(),...yt(),...ro(),...dl(),...Sa()},"VField"),wi=Bt()({name:"VField",inheritAttrs:!1,props:{id:String,...nn(),...Vi()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{themeClasses:r}=xa(e),{loaderClasses:i}=io(e),{focusClasses:s,isFocused:u,focus:c,blur:d}=rn(e),{InputIcon:v}=an(e),{roundedClasses:p}=vl(e),{rtlClasses:m}=Va(),g=t.computed((()=>e.dirty||e.active)),h=t.computed((()=>!(e.singleLine||!e.label&&!n.label))),y=kt(),b=t.computed((()=>e.id||`input-${y}`)),V=t.computed((()=>`${b.value}-messages`)),w=t.ref(),S=t.ref(),k=t.ref(),x=t.computed((()=>["plain","underlined"].includes(e.variant))),{backgroundColorClasses:N,backgroundColorStyles:C}=cl(t.toRef(e,"bgColor")),{textColorClasses:_,textColorStyles:I}=ul(t.computed((()=>e.error||e.disabled?void 0:g.value&&u.value?e.color:e.baseColor)))
t.watch(g,(e=>{if(h.value){const t=w.value.$el,a=S.value.$el
requestAnimationFrame((()=>{const l=ge(t),o=a.getBoundingClientRect(),n=o.x-l.x,r=o.y-l.y-(l.height/2-o.height/2),i=o.width/.75,s=Math.abs(i-l.width)>1?{maxWidth:f(i)}:void 0,u=getComputedStyle(t),c=getComputedStyle(a),d=1e3*parseFloat(u.transitionDuration)||150,v=parseFloat(c.getPropertyValue("--v-field-label-scale")),p=c.getPropertyValue("color")
t.style.visibility="visible",a.style.visibility="hidden",he(t,{transform:`translate(${n}px, ${r}px) scale(${v})`,color:p,...s},{duration:d,easing:Rt,direction:e?"normal":"reverse"}).finished.then((()=>{t.style.removeProperty("visibility"),a.style.removeProperty("visibility")}))}))}}),{flush:"post"})
const B=t.computed((()=>({isActive:g,isFocused:u,controlRef:k,blur:d,focus:c})))
function P(e){e.target!==document.activeElement&&e.preventDefault()}function A(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),t.stopPropagation(),e["onClick:clear"]?.(new MouseEvent("click")))}return Mt((()=>{const a="outlined"===e.variant,o=!(!n["prepend-inner"]&&!e.prependInnerIcon),u=!(!e.clearable&&!n.clear),f=!!(n["append-inner"]||e.appendInnerIcon||u),y=()=>n.label?n.label({...B.value,label:e.label,props:{for:b.value}}):e.label
return t.createVNode("div",t.mergeProps({class:["v-field",{"v-field--active":g.value,"v-field--appended":f,"v-field--center-affix":e.centerAffix??!x.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":o,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!y(),[`v-field--variant-${e.variant}`]:!0},r.value,N.value,s.value,i.value,p.value,m.value,e.class],style:[C.value,e.style],onClick:P},l),[t.createVNode("div",{class:"v-field__overlay"},null),t.createVNode(so,{name:"v-field",active:!!e.loading,color:e.error?"error":"string"==typeof e.loading?e.loading:e.color},{default:n.loader}),o&&t.createVNode("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&t.createVNode(v,{key:"prepend-icon",name:"prependInner"},null),n["prepend-inner"]?.(B.value)]),t.createVNode("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&h.value&&t.createVNode(yi,{key:"floating-label",ref:S,class:[_.value],floating:!0,for:b.value,style:I.value},{default:()=>[y()]}),t.createVNode(yi,{ref:w,for:b.value},{default:()=>[y()]}),n.default?.({...B.value,props:{id:b.value,class:"v-field__input","aria-describedby":V.value},focus:c,blur:d})]),u&&t.createVNode(tl,{key:"clear"},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-field__clearable",onMousedown:e=>{e.preventDefault(),e.stopPropagation()}},[t.createVNode(ll,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[n.clear?n.clear({...B.value,props:{onKeydown:A,onFocus:c,onBlur:d,onClick:e["onClick:clear"]}}):t.createVNode(v,{name:"clear",onKeydown:A,onFocus:c,onBlur:d},null)]})]),[[t.vShow,e.dirty]])]}),f&&t.createVNode("div",{key:"append",class:"v-field__append-inner"},[n["append-inner"]?.(B.value),e.appendInnerIcon&&t.createVNode(v,{key:"append-icon",name:"appendInner"},null)]),t.createVNode("div",{class:["v-field__outline",_.value],style:I.value},[a&&t.createVNode(t.Fragment,null,[t.createVNode("div",{class:"v-field__outline__start"},null),h.value&&t.createVNode("div",{class:"v-field__outline__notch"},[t.createVNode(yi,{ref:S,floating:!0,for:b.value},{default:()=>[y()]})]),t.createVNode("div",{class:"v-field__outline__end"},null)]),x.value&&h.value&&t.createVNode(yi,{ref:S,floating:!0,for:b.value},{default:()=>[y()]})])])})),{controlRef:k}}})
function Si(e){return S(e,Object.keys(wi.props).filter((e=>!_(e)&&"class"!==e&&"style"!==e)))}const ki=["color","file","time","date","datetime-local","week","month"],xi=ht({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...pn(),...Vi()},"VTextField"),Ni=Bt()({name:"VTextField",directives:{Intersect:gl},inheritAttrs:!1,props:xi(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const r=sa(e,"modelValue"),{isFocused:i,focus:s,blur:u}=rn(e),c=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(r.value):"number"==typeof e.counterValue?e.counterValue:(r.value??"").toString().length)),d=t.computed((()=>l.maxlength?l.maxlength:!e.counter||"number"!=typeof e.counter&&"string"!=typeof e.counter?void 0:e.counter)),v=t.computed((()=>["plain","underlined"].includes(e.variant)))
function p(t,a){e.autofocus&&t&&a[0].target?.focus?.()}const f=t.ref(),m=t.ref(),g=t.ref(),h=t.computed((()=>ki.includes(e.type)||e.persistentPlaceholder||i.value||e.active))
function y(){g.value!==document.activeElement&&g.value?.focus(),i.value||s()}function b(e){o("mousedown:control",e),e.target!==g.value&&(y(),e.preventDefault())}function V(e){y(),o("click:control",e)}function w(a){a.stopPropagation(),y(),t.nextTick((()=>{r.value=null,K(e["onClick:clear"],a)}))}function S(a){const l=a.target
if(r.value=l.value,e.modelModifiers?.trim&&["text","search","password","tel","url"].includes(e.type)){const e=[l.selectionStart,l.selectionEnd]
t.nextTick((()=>{l.selectionStart=e[0],l.selectionEnd=e[1]}))}}return Mt((()=>{const a=!!(n.counter||!1!==e.counter&&null!=e.counter),o=!(!a&&!n.details),[s,k]=P(l),{modelValue:x,...N}=fn.filterProps(e),C=Si(e)
return t.createVNode(fn,t.mergeProps({ref:f,modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":v.value},e.class],style:e.style},s,N,{centerAffix:!v.value,focused:i.value}),{...n,default:a=>{let{id:l,isDisabled:o,isDirty:s,isReadonly:c,isValid:d}=a
return t.createVNode(wi,t.mergeProps({ref:m,onMousedown:b,onClick:V,"onClick:clear":w,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},C,{id:l.value,active:h.value||s.value,dirty:s.value||e.dirty,disabled:o.value,focused:i.value,error:!1===d.value}),{...n,default:a=>{let{props:{class:l,...i}}=a
const s=t.withDirectives(t.createVNode("input",t.mergeProps({ref:g,value:r.value,onInput:S,autofocus:e.autofocus,readonly:c.value,disabled:o.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:y,onBlur:u},i,k),null),[[t.resolveDirective("intersect"),{handler:p},null,{once:!0}]])
return t.createVNode(t.Fragment,null,[e.prefix&&t.createVNode("span",{class:"v-text-field__prefix"},[t.createVNode("span",{class:"v-text-field__prefix__text"},[e.prefix])]),n.default?t.createVNode("div",{class:l,"data-no-activator":""},[n.default(),s]):t.cloneVNode(s,{class:l}),e.suffix&&t.createVNode("span",{class:"v-text-field__suffix"},[t.createVNode("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:o?l=>t.createVNode(t.Fragment,null,[n.details?.(l),a&&t.createVNode(t.Fragment,null,[t.createVNode("span",null,null),t.createVNode(gi,{active:e.persistentCounter||i.value,value:c.value,max:d.value,disabled:e.disabled},n.counter)])]):void 0})})),vi({},f,m,g)}}),Ci=ht({renderless:Boolean,...yt()},"VVirtualScrollItem"),_i=Bt()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Ci(),emits:{"update:height":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{resizeRef:r,contentRect:i}=Jt(void 0,"border")
t.watch((()=>i.value?.height),(e=>{null!=e&&o("update:height",e)})),Mt((()=>e.renderless?t.createVNode(t.Fragment,null,[n.default?.({itemRef:r})]):t.createVNode("div",t.mergeProps({ref:r,class:["v-virtual-scroll__item",e.class],style:e.style},l),[n.default?.()])))}}),Ii=ht({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual")
function Bi(e,l){const o=Nn(),n=t.shallowRef(0)
t.watchEffect((()=>{n.value=parseFloat(e.itemHeight||0)}))
const r=t.shallowRef(0),i=t.shallowRef(Math.ceil((parseInt(e.height)||o.height.value)/(n.value||16))||1),s=t.shallowRef(0),u=t.shallowRef(0),c=t.ref(),d=t.ref()
let v=0
const{resizeRef:p,contentRect:f}=Jt()
t.watchEffect((()=>{p.value=c.value}))
const m=t.computed((()=>c.value===document.documentElement?o.height.value:f.value?.height||parseInt(e.height)||0)),g=t.computed((()=>!!(c.value&&d.value&&m.value&&n.value)))
let h=Array.from({length:l.value.length}),y=Array.from({length:l.value.length})
const b=t.shallowRef(0)
let V=-1
function w(e){return h[e]||n.value}const S=function(e,a){let l=0
const o=function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r]
clearTimeout(l),l=setTimeout((()=>e(...n)),t.unref(a))}
return o.clear=()=>{clearTimeout(l)},o.immediate=e,o}((()=>{const e=performance.now()
y[0]=0
const t=l.value.length
for(let e=1;e<=t-1;e++)y[e]=(y[e-1]||0)+w(e-1)
b.value=Math.max(b.value,performance.now()-e)}),b),k=t.watch(g,(e=>{e&&(k(),v=d.value.offsetTop,S.immediate(),P(),~V&&t.nextTick((()=>{a&&window.requestAnimationFrame((()=>{T(V),V=-1}))})))}))
function x(e){return e=R(e,0,l.value.length-1),y[e]||0}function N(e){return function(e,t){let a=e.length-1,l=0,o=0,n=null,r=-1
if(e[a]<t)return a
for(;l<=a;)if(o=l+a>>1,n=e[o],n>t)a=o-1
else{if(!(n<t))return n===t?o:l
r=o,l=o+1}return r}(y,e)}t.onScopeDispose((()=>{S.clear()}))
let C=0,_=0,I=0
t.watch(m,((e,t)=>{t&&(P(),e<t&&requestAnimationFrame((()=>{_=0,P()})))}))
let B=-1
function P(){cancelAnimationFrame(B),B=requestAnimationFrame(A)}function A(){if(!c.value||!m.value)return
const e=C-v,t=Math.sign(_),a=R(N(Math.max(0,e-100)),0,l.value.length),o=R(N(e+m.value+100)+1,a+1,l.value.length)
if((-1!==t||a<r.value)&&(1!==t||o>i.value)){const e=x(r.value)-x(a),t=x(o)-x(i.value)
Math.max(e,t)>100?(r.value=a,i.value=o):(a<=0&&(r.value=a),o>=l.value.length&&(i.value=o))}s.value=x(r.value),u.value=x(l.value.length)-x(i.value)}function T(e){const t=x(e)
!c.value||e&&!t?V=e:c.value.scrollTop=t}const D=t.computed((()=>l.value.slice(r.value,i.value).map(((e,t)=>({raw:e,index:t+r.value})))))
return t.watch(l,(()=>{h=Array.from({length:l.value.length}),y=Array.from({length:l.value.length}),S.immediate(),P()}),{deep:!0}),{calculateVisibleItems:P,containerRef:c,markerRef:d,computedItems:D,paddingTop:s,paddingBottom:u,scrollToIndex:T,handleScroll:function(){if(!c.value||!d.value)return
const e=c.value.scrollTop,t=performance.now()
t-I>500?(_=Math.sign(e-C),v=d.value.offsetTop):_=e-C,C=e,I=t,P()},handleScrollend:function(){c.value&&d.value&&(_=0,I=0,P())},handleItemResize:function(e,t){const a=h[e],l=n.value
n.value=l?Math.min(n.value,t):t,a===t&&l===n.value||(h[e]=t,S())}}}const Pi=ht({items:{type:Array,default:()=>[]},renderless:Boolean,...Ii(),...yt(),...ol()},"VVirtualScroll"),Ai=Bt()({name:"VVirtualScroll",props:Pi(),setup(e,a){let{slots:l}=a
const o=bt("VVirtualScroll"),{dimensionStyles:n}=nl(e),{calculateVisibleItems:r,containerRef:i,markerRef:s,handleScroll:u,handleScrollend:c,handleItemResize:d,scrollToIndex:v,paddingTop:p,paddingBottom:m,computedItems:g}=Bi(e,t.toRef(e,"items"))
return ia((()=>e.renderless),(()=>{function e(){const e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?"addEventListener":"removeEventListener"
i.value===document.documentElement?(document[e]("scroll",u,{passive:!0}),document[e]("scrollend",c)):(i.value?.[e]("scroll",u,{passive:!0}),i.value?.[e]("scrollend",c))}t.onMounted((()=>{i.value=Dt(o.vnode.el,!0),e(!0)})),t.onScopeDispose(e)})),Mt((()=>{const a=g.value.map((a=>t.createVNode(_i,{key:a.index,renderless:e.renderless,"onUpdate:height":e=>d(a.index,e)},{default:e=>l.default?.({item:a.raw,index:a.index,...e})})))
return e.renderless?t.createVNode(t.Fragment,null,[t.createVNode("div",{ref:s,class:"v-virtual-scroll__spacer",style:{paddingTop:f(p.value)}},null),a,t.createVNode("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:f(m.value)}},null)]):t.createVNode("div",{ref:i,class:["v-virtual-scroll",e.class],onScrollPassive:u,onScrollend:c,style:[n.value,e.style]},[t.createVNode("div",{ref:s,class:"v-virtual-scroll__container",style:{paddingTop:f(p.value),paddingBottom:f(m.value)}},[a])])})),{calculateVisibleItems:r,scrollToIndex:v}}})
function Ri(e,a){const l=t.shallowRef(!1)
let o
return{onScrollPassive:function(e){cancelAnimationFrame(o),l.value=!0,o=requestAnimationFrame((()=>{o=requestAnimationFrame((()=>{l.value=!1}))}))},onKeydown:async function(o){if("Tab"===o.key&&a.value?.focus(),!["PageDown","PageUp","Home","End"].includes(o.key))return
const n=e.value?.$el
if(!n)return
"Home"!==o.key&&"End"!==o.key||n.scrollTo({top:"Home"===o.key?0:n.scrollHeight,behavior:"smooth"}),await async function(){await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>{if(l.value){const a=t.watch(l,(()=>{a(),e()}))}else e()}))}()
const r=n.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)")
if("PageDown"===o.key||"Home"===o.key){const e=n.getBoundingClientRect().top
for(const t of r)if(t.getBoundingClientRect().top>=e){t.focus()
break}}else{const e=n.getBoundingClientRect().bottom
for(const t of[...r].reverse())if(t.getBoundingClientRect().bottom<=e){t.focus()
break}}}}}const Ti=ht({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:Ot,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...yr({itemChildren:!1})},"Select"),Di=ht({...Ti(),...x(xi({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...pl({transition:{component:Ma}})},"VSelect"),Ei=Bt()({name:"VSelect",props:Di(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,l){let{slots:o}=l
const{t:n}=ya(),r=t.ref(),i=t.ref(),s=t.ref(),u=sa(e,"menu"),c=t.computed({get:()=>u.value,set:e=>{u.value&&!e&&i.value?.ΨopenChildren.size||(u.value=e)}}),{items:d,transformIn:v,transformOut:p}=wr(e),f=sa(e,"modelValue",[],(e=>v(null===e?[null]:A(e))),(t=>{const a=p(t)
return e.multiple?a:a[0]??null})),m=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(f.value):"number"==typeof e.counterValue?e.counterValue:f.value.length)),g=cn(),h=t.computed((()=>f.value.map((e=>e.value)))),y=t.shallowRef(!1),b=t.computed((()=>c.value?e.closeText:e.openText))
let V,w=""
const S=t.computed((()=>e.hideSelected?d.value.filter((t=>!f.value.some((a=>e.valueComparator(a,t))))):d.value)),k=t.computed((()=>e.hideNoData&&!S.value.length||e.readonly||g?.isReadonly.value)),x=t.computed((()=>({...e.menuProps,activatorProps:{...e.menuProps?.activatorProps||{},"aria-haspopup":"listbox"}}))),N=t.ref(),C=Ri(N,r)
function _(t){e.openOnClear&&(c.value=!0)}function I(){k.value||(c.value=!c.value)}function B(e){oe(e)&&P(e)}function P(t){if(!t.key||e.readonly||g?.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(c.value=!0),["Escape","Tab"].includes(t.key)&&(c.value=!1),"Home"===t.key?N.value?.focus("first"):"End"===t.key&&N.value?.focus("last")
if(e.multiple||!oe(t))return
const l=performance.now()
l-V>1e3&&(w=""),w+=t.key.toLowerCase(),V=l
const o=d.value.find((e=>e.title.toLowerCase().startsWith(w)))
if(void 0!==o){f.value=[o]
const e=S.value.indexOf(o)
a&&window.requestAnimationFrame((()=>{e>=0&&s.value?.scrollToIndex(e)}))}}function R(a){let l=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(!a.props.disabled)if(e.multiple){const t=f.value.findIndex((t=>e.valueComparator(t.value,a.value))),o=null==l?!~t:l
if(~t){const e=o?[...f.value,a]:[...f.value]
e.splice(t,1),f.value=e}else o&&(f.value=[...f.value,a])}else{const e=!1!==l
f.value=e?[a]:[],t.nextTick((()=>{c.value=!1}))}}function T(e){N.value?.$el.contains(e.relatedTarget)||(c.value=!1)}function D(){e.eager&&s.value?.calculateVisibleItems()}function E(){y.value&&r.value?.focus()}function F(e){y.value=!0}function $(e){if(null==e)f.value=[]
else if(te(r.value,":autofill")||te(r.value,":-webkit-autofill")){const t=d.value.find((t=>t.title===e))
t&&R(t)}else r.value&&(r.value.value="")}return t.watch(c,(()=>{if(!e.hideSelected&&c.value&&f.value.length){const t=S.value.findIndex((t=>f.value.some((a=>e.valueComparator(a.value,t.value)))))
a&&window.requestAnimationFrame((()=>{t>=0&&s.value?.scrollToIndex(t)}))}})),t.watch((()=>e.items),((e,t)=>{c.value||y.value&&!t.length&&e.length&&(c.value=!0)})),Mt((()=>{const a=!(!e.chips&&!o.chip),l=!!(!e.hideNoData||S.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),u=f.value.length>0,d=Ni.filterProps(e),v=u||!y.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder
return t.createVNode(Ni,t.mergeProps({ref:r},d,{modelValue:f.value.map((e=>e.props.value)).join(", "),"onUpdate:modelValue":$,focused:y.value,"onUpdate:focused":e=>y.value=e,validationValue:f.externalValue,counterValue:m.value,dirty:u,class:["v-select",{"v-select--active-menu":c.value,"v-select--chips":!!e.chips,["v-select--"+(e.multiple?"multiple":"single")]:!0,"v-select--selected":f.value.length,"v-select--selection-slot":!!o.selection},e.class],style:e.style,inputmode:"none",placeholder:v,"onClick:clear":_,"onMousedown:control":I,onBlur:T,onKeydown:P,"aria-label":n(b.value),title:n(b.value)}),{...o,default:()=>t.createVNode(t.Fragment,null,[t.createVNode(fi,t.mergeProps({ref:i,modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,activator:"parent",contentClass:"v-select__content",disabled:k.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:D,onAfterLeave:E},x.value),{default:()=>[l&&t.createVNode(Nr,t.mergeProps({ref:N,selected:h.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:B,onFocusin:F,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},C,e.listProps),{default:()=>[o["prepend-item"]?.(),!S.value.length&&!e.hideNoData&&(o["no-data"]?.()??t.createVNode(dr,{title:n(e.noDataText)},null)),t.createVNode(Ai,{ref:s,renderless:!0,items:S.value},{default:a=>{let{item:l,index:n,itemRef:r}=a
const i=t.mergeProps(l.props,{ref:r,key:n,onClick:()=>R(l,null)})
return o.item?.({item:l,index:n,props:i})??t.createVNode(dr,t.mergeProps(i,{role:"option"}),{prepend:a=>{let{isSelected:o}=a
return t.createVNode(t.Fragment,null,[e.multiple&&!e.hideSelected?t.createVNode(tn,{key:l.value,modelValue:o,ripple:!1,tabindex:"-1"},null):void 0,l.props.prependAvatar&&t.createVNode(Uo,{image:l.props.prependAvatar},null),l.props.prependIcon&&t.createVNode(Zl,{icon:l.props.prependIcon},null)])}})}}),o["append-item"]?.()]})]}),f.value.map(((l,n)=>{function r(e){e.stopPropagation(),e.preventDefault(),R(l,!1)}const i={"onClick:close":r,onKeydown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),r(e))},onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},s=a?!!o.chip:!!o.selection,u=s?ae(a?o.chip({item:l,index:n,props:i}):o.selection({item:l,index:n})):void 0
if(!s||u)return t.createVNode("div",{key:l.value,class:"v-select__selection"},[a?o.chip?t.createVNode(ll,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:l.title}}},{default:()=>[u]}):t.createVNode(jn,t.mergeProps({key:"chip",closable:e.closableChips,size:"small",text:l.title,disabled:l.props.disabled},i),null):u??t.createVNode("span",{class:"v-select__selection-text"},[l.title,e.multiple&&n<f.value.length-1&&t.createVNode("span",{class:"v-select__selection-comma"},[t.createTextVNode(",")])])])}))]),"append-inner":function(){for(var a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n]
return t.createVNode(t.Fragment,null,[o["append-inner"]?.(...l),e.menuIcon?t.createVNode(Zl,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})})),vi({isFocused:y,menu:c,select:R},r)}}),Fi=(e,t,a)=>null==e||null==t?-1:e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()),$i=ht({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter")
function Mi(e,a,l,o){const n=t.ref([]),r=t.ref(new Map),i=t.computed((()=>o?.transform?t.unref(a).map((e=>[e,o.transform(e)])):t.unref(a)))
return t.watchEffect((()=>{const s="function"==typeof l?l():t.unref(l),u="string"!=typeof s&&"number"!=typeof s?"":String(s),c=function(e,t,a){const l=[],o=a?.default??Fi,n=!!a?.filterKeys&&A(a.filterKeys),r=Object.keys(a?.customKeyFilter??{}).length
if(!e?.length)return l
e:for(let i=0;i<e.length;i++){const[s,u=s]=A(e[i]),c={},d={}
let p=-1
if((t||r>0)&&!a?.noFilter){if("object"==typeof s){const e=n||Object.keys(u)
for(const l of e){const e=v(u,l),n=a?.customKeyFilter?.[l]
if(p=n?n(e,t,s):o(e,t,s),-1!==p&&!1!==p)n?c[l]=p:d[l]=p
else if("every"===a?.filterMode)continue e}}else p=o(s,t,s),-1!==p&&!1!==p&&(d.title=p)
const e=Object.keys(d).length,l=Object.keys(c).length
if(!e&&!l)continue
if("union"===a?.filterMode&&l!==r&&!e)continue
if("intersection"===a?.filterMode&&(l!==r||!e))continue}l.push({index:i,matches:{...d,...c}})}return l}(i.value,u,{customKeyFilter:{...e.customKeyFilter,...t.unref(o?.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),d=t.unref(a),p=[],f=new Map
c.forEach((e=>{let{index:t,matches:a}=e
const l=d[t]
p.push(l),f.set(l.value,a)})),n.value=p,r.value=f})),{filteredItems:n,filteredMatches:r,getMatches:function(e){return r.value.get(e.value)}}}const Oi=ht({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...$i({filterKeys:["title"]}),...Ti(),...x(xi({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...pl({transition:!1})},"VAutocomplete"),Li=Bt()({name:"VAutocomplete",props:Oi(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,l){let{slots:o}=l
const{t:n}=ya(),r=t.ref(),i=t.shallowRef(!1),s=t.shallowRef(!0),u=t.shallowRef(!1),c=t.ref(),d=t.ref(),v=sa(e,"menu"),p=t.computed({get:()=>v.value,set:e=>{v.value&&!e&&c.value?.ΨopenChildren.size||(v.value=e)}}),f=t.shallowRef(-1),m=t.computed((()=>r.value?.color)),g=t.computed((()=>p.value?e.closeText:e.openText)),{items:h,transformIn:y,transformOut:b}=wr(e),{textColorClasses:V,textColorStyles:w}=ul(m),S=sa(e,"search",""),k=sa(e,"modelValue",[],(e=>y(null===e?[null]:A(e))),(t=>{const a=b(t)
return e.multiple?a:a[0]??null})),x=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(k.value):"number"==typeof e.counterValue?e.counterValue:k.value.length)),N=cn(),{filteredItems:C,getMatches:_}=Mi(e,h,(()=>s.value?"":S.value)),I=t.computed((()=>e.hideSelected?C.value.filter((e=>!k.value.some((t=>t.value===e.value)))):C.value)),B=t.computed((()=>!(!e.chips&&!o.chip))),P=t.computed((()=>B.value||!!o.selection)),R=t.computed((()=>k.value.map((e=>e.props.value)))),T=t.computed((()=>(!0===e.autoSelectFirst||"exact"===e.autoSelectFirst&&S.value===I.value[0]?.title)&&I.value.length>0&&!s.value&&!u.value)),D=t.computed((()=>e.hideNoData&&!I.value.length||e.readonly||N?.isReadonly.value)),E=t.ref(),F=Ri(E,r)
function $(t){e.openOnClear&&(p.value=!0),S.value=""}function M(){D.value||(p.value=!0)}function O(e){D.value||(i.value&&(e.preventDefault(),e.stopPropagation()),p.value=!p.value)}function L(e){oe(e)&&r.value?.focus()}function z(t){if(e.readonly||N?.isReadonly.value)return
const a=r.value.selectionStart,l=k.value.length
if((f.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(p.value=!0),["Escape"].includes(t.key)&&(p.value=!1),T.value&&["Enter","Tab"].includes(t.key)&&!k.value.some((e=>{let{value:t}=e
return t===I.value[0].value}))&&K(I.value[0]),"ArrowDown"===t.key&&T.value&&E.value?.focus("next"),["Backspace","Delete"].includes(t.key)){if(!e.multiple&&P.value&&k.value.length>0&&!S.value)return K(k.value[0],!1)
if(~f.value){const e=f.value
K(k.value[f.value],!1),f.value=e>=l-1?l-2:e}else"Backspace"!==t.key||S.value||(f.value=l-1)}if(e.multiple){if("ArrowLeft"===t.key){if(f.value<0&&a>0)return
const e=f.value>-1?f.value-1:l-1
k.value[e]?f.value=e:(f.value=-1,r.value.setSelectionRange(S.value?.length,S.value?.length))}if("ArrowRight"===t.key){if(f.value<0)return
const e=f.value+1
k.value[e]?f.value=e:(f.value=-1,r.value.setSelectionRange(0,0))}}}function j(e){if(te(r.value,":autofill")||te(r.value,":-webkit-autofill")){const t=h.value.find((t=>t.title===e.target.value))
t&&K(t)}}function H(){e.eager&&d.value?.calculateVisibleItems()}function W(){i.value&&(s.value=!0,r.value?.focus())}function U(e){i.value=!0,setTimeout((()=>{u.value=!0}))}function Y(e){u.value=!1}function G(t){null!=t&&(""!==t||e.multiple||P.value)||(k.value=[])}const q=t.shallowRef(!1)
function K(a){let l=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(a&&!a.props.disabled)if(e.multiple){const t=k.value.findIndex((t=>e.valueComparator(t.value,a.value))),o=null==l?!~t:l
if(~t){const e=o?[...k.value,a]:[...k.value]
e.splice(t,1),k.value=e}else o&&(k.value=[...k.value,a])
e.clearOnSelect&&(S.value="")}else{const e=!1!==l
k.value=e?[a]:[],S.value=e&&!P.value?a.title:"",t.nextTick((()=>{p.value=!1,s.value=!0}))}}return t.watch(i,((a,l)=>{a!==l&&(a?(q.value=!0,S.value=e.multiple||P.value?"":String(k.value.at(-1)?.props.title??""),s.value=!0,t.nextTick((()=>q.value=!1))):(e.multiple||null!=S.value||(k.value=[]),p.value=!1,k.value.some((e=>{let{title:t}=e
return t===S.value}))||(S.value=""),f.value=-1))})),t.watch(S,(e=>{i.value&&!q.value&&(e&&(p.value=!0),s.value=!e)})),t.watch(p,(()=>{if(!e.hideSelected&&p.value&&k.value.length){const e=I.value.findIndex((e=>k.value.some((t=>e.value===t.value))))
a&&window.requestAnimationFrame((()=>{e>=0&&d.value?.scrollToIndex(e)}))}})),t.watch((()=>e.items),((e,t)=>{p.value||i.value&&!t.length&&e.length&&(p.value=!0)})),Mt((()=>{const a=!!(!e.hideNoData||I.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),l=k.value.length>0,u=Ni.filterProps(e)
return t.createVNode(Ni,t.mergeProps({ref:r},u,{modelValue:S.value,"onUpdate:modelValue":[e=>S.value=e,G],focused:i.value,"onUpdate:focused":e=>i.value=e,validationValue:k.externalValue,counterValue:x.value,dirty:l,onChange:j,class:["v-autocomplete","v-autocomplete--"+(e.multiple?"multiple":"single"),{"v-autocomplete--active-menu":p.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!P.value,"v-autocomplete--selecting-index":f.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:l?void 0:e.placeholder,"onClick:clear":$,"onMousedown:control":M,onKeydown:z}),{...o,default:()=>t.createVNode(t.Fragment,null,[t.createVNode(fi,t.mergeProps({ref:c,modelValue:p.value,"onUpdate:modelValue":e=>p.value=e,activator:"parent",contentClass:"v-autocomplete__content",disabled:D.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:H,onAfterLeave:W},e.menuProps),{default:()=>[a&&t.createVNode(Nr,t.mergeProps({ref:E,selected:R.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:L,onFocusin:U,onFocusout:Y,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},F,e.listProps),{default:()=>[o["prepend-item"]?.(),!I.value.length&&!e.hideNoData&&(o["no-data"]?.()??t.createVNode(dr,{title:n(e.noDataText)},null)),t.createVNode(Ai,{ref:d,renderless:!0,items:I.value},{default:a=>{let{item:l,index:n,itemRef:r}=a
const i=t.mergeProps(l.props,{ref:r,key:n,active:!(!T.value||0!==n)||void 0,onClick:()=>K(l,null)})
return o.item?.({item:l,index:n,props:i})??t.createVNode(dr,t.mergeProps(i,{role:"option"}),{prepend:a=>{let{isSelected:o}=a
return t.createVNode(t.Fragment,null,[e.multiple&&!e.hideSelected?t.createVNode(tn,{key:l.value,modelValue:o,ripple:!1,tabindex:"-1"},null):void 0,l.props.prependAvatar&&t.createVNode(Uo,{image:l.props.prependAvatar},null),l.props.prependIcon&&t.createVNode(Zl,{icon:l.props.prependIcon},null)])},title:()=>s.value?l.title:function(e,a,l){if(null==a)return e
if(Array.isArray(a))throw new Error("Multiple matches is not implemented")
return"number"==typeof a&&~a?t.createVNode(t.Fragment,null,[t.createVNode("span",{class:"v-autocomplete__unmask"},[e.substr(0,a)]),t.createVNode("span",{class:"v-autocomplete__mask"},[e.substr(a,l)]),t.createVNode("span",{class:"v-autocomplete__unmask"},[e.substr(a+l)])]):e}(l.title,_(l)?.title,S.value?.length??0)})}}),o["append-item"]?.()]})]}),k.value.map(((a,l)=>{function n(e){e.stopPropagation(),e.preventDefault(),K(a,!1)}const r={"onClick:close":n,onKeydown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),n(e))},onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},i=B.value?!!o.chip:!!o.selection,s=i?ae(B.value?o.chip({item:a,index:l,props:r}):o.selection({item:a,index:l})):void 0
if(!i||s)return t.createVNode("div",{key:a.value,class:["v-autocomplete__selection",l===f.value&&["v-autocomplete__selection--selected",V.value]],style:l===f.value?w.value:{}},[B.value?o.chip?t.createVNode(ll,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:a.title}}},{default:()=>[s]}):t.createVNode(jn,t.mergeProps({key:"chip",closable:e.closableChips,size:"small",text:a.title,disabled:a.props.disabled},r),null):s??t.createVNode("span",{class:"v-autocomplete__selection-text"},[a.title,e.multiple&&l<k.value.length-1&&t.createVNode("span",{class:"v-autocomplete__selection-comma"},[t.createTextVNode(",")])])])}))]),"append-inner":function(){for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r]
return t.createVNode(t.Fragment,null,[o["append-inner"]?.(...l),e.menuIcon?t.createVNode(Zl,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:O,onClick:ee,"aria-label":n(g.value),title:n(g.value),tabindex:"-1"},null):void 0])}})})),vi({isFocused:i,isPristine:s,menu:p,search:S,filteredItems:C,select:K},r)}}),zi=ht({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Ot,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...yt(),...ao({location:"top end"}),...dl(),...Pa(),...Sa(),...pl({transition:"scale-rotate-transition"})},"VBadge"),ji=Bt()({name:"VBadge",inheritAttrs:!1,props:zi(),setup(e,a){const{backgroundColorClasses:l,backgroundColorStyles:o}=cl(t.toRef(e,"color")),{roundedClasses:n}=vl(e),{t:r}=ya(),{textColorClasses:i,textColorStyles:s}=ul(t.toRef(e,"textColor")),{themeClasses:u}=Na(),{locationStyles:c}=lo(e,!0,(t=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(t)?+(e.offsetY??0):["left","right"].includes(t)?+(e.offsetX??0):0)))
return Mt((()=>{const d=Number(e.content),v=!e.max||isNaN(d)?e.content:d<=+e.max?d:`${e.max}+`,[p,f]=k(a.attrs,["aria-atomic","aria-label","aria-live","role","title"])
return t.createVNode(e.tag,t.mergeProps({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},f,{style:e.style}),{default:()=>[t.createVNode("div",{class:"v-badge__wrapper"},[a.slots.default?.(),t.createVNode(fl,{transition:e.transition},{default:()=>[t.withDirectives(t.createVNode("span",t.mergeProps({class:["v-badge__badge",u.value,l.value,n.value,i.value],style:[o.value,s.value,e.inline?{}:c.value],"aria-atomic":"true","aria-label":r(e.label,d),"aria-live":"polite",role:"status"},p),[e.dot?void 0:a.slots.badge?a.slots.badge?.():e.icon?t.createVNode(Zl,{icon:e.icon},null):v]),[[t.vShow,e.modelValue]])]})])]})})),{}}}),Hi=ht({color:String,density:String,...yt()},"VBannerActions"),Wi=Bt()({name:"VBannerActions",props:Hi(),setup(e,a){let{slots:l}=a
return Ct({VBtn:{color:e.color,density:e.density,slim:!0,variant:"text"}}),Mt((()=>t.createVNode("div",{class:["v-banner-actions",e.class],style:e.style},[l.default?.()]))),{}}}),Ui=Pt("v-banner-text"),Yi=ht({avatar:String,bgColor:String,color:String,icon:Ot,lines:String,stacked:Boolean,sticky:Boolean,text:String,...bl(),...yt(),...Al(),...ol(),...xn({mobile:null}),...wl(),...ao(),...co(),...dl(),...Pa(),...Sa()},"VBanner"),Gi=Bt()({name:"VBanner",props:Yi(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=cl(e,"bgColor"),{borderClasses:r}=Vl(e),{densityClasses:i}=Rl(e),{displayClasses:s,mobile:u}=Nn(e),{dimensionStyles:c}=nl(e),{elevationClasses:d}=Sl(e),{locationStyles:v}=lo(e),{positionClasses:p}=vo(e),{roundedClasses:f}=vl(e),{themeClasses:m}=xa(e),g=t.toRef(e,"color"),h=t.toRef(e,"density")
Ct({VBannerActions:{color:g,density:h}}),Mt((()=>{const a=!(!e.text&&!l.text),y=!(!e.avatar&&!e.icon),b=!(!y&&!l.prepend)
return t.createVNode(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||u.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},m.value,o.value,r.value,i.value,s.value,d.value,p.value,f.value,e.class],style:[n.value,c.value,v.value,e.style],role:"banner"},{default:()=>[b&&t.createVNode("div",{key:"prepend",class:"v-banner__prepend"},[l.prepend?t.createVNode(ll,{key:"prepend-defaults",disabled:!y,defaults:{VAvatar:{color:g.value,density:h.value,icon:e.icon,image:e.avatar}}},l.prepend):t.createVNode(Uo,{key:"prepend-avatar",color:g.value,density:h.value,icon:e.icon,image:e.avatar},null)]),t.createVNode("div",{class:"v-banner__content"},[a&&t.createVNode(Ui,{key:"text"},{default:()=>[l.text?.()??e.text]}),l.default?.()]),l.actions&&t.createVNode(Wi,{key:"actions"},l.actions)]})}))}}),qi=ht({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...bl(),...yt(),...Al(),...wl(),...dl(),...la({name:"bottom-navigation"}),...Pa({tag:"header"}),...Ol({selectedClass:"v-btn--selected"}),...Sa()},"VBottomNavigation"),Ki=Bt()({name:"VBottomNavigation",props:qi(),emits:{"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=Na(),{borderClasses:n}=Vl(e),{backgroundColorClasses:r,backgroundColorStyles:i}=cl(t.toRef(e,"bgColor")),{densityClasses:s}=Rl(e),{elevationClasses:u}=Sl(e),{roundedClasses:c}=vl(e),{ssrBootStyles:d}=_l(),v=t.computed((()=>Number(e.height)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0))),p=sa(e,"active",e.active),{layoutItemStyles:m}=na({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.computed((()=>"bottom")),layoutSize:t.computed((()=>p.value?v.value:0)),elementSize:v,active:p,absolute:t.toRef(e,"absolute")})
return jl(e,Wl),Ct({VBtn:{baseColor:t.toRef(e,"baseColor"),color:t.toRef(e,"color"),density:t.toRef(e,"density"),stacked:t.computed((()=>"horizontal"!==e.mode)),variant:"text"}},{scoped:!0}),Mt((()=>t.createVNode(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":p.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":"shift"===e.mode},o.value,r.value,n.value,s.value,u.value,c.value,e.class],style:[i.value,m.value,{height:f(v.value)},d.value,e.style]},{default:()=>[l.default&&t.createVNode("div",{class:"v-bottom-navigation__content"},[l.default()])]}))),{}}}),Xi=ht({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...si({origin:"center center",scrollStrategy:"block",transition:{component:Ma},zIndex:2400})},"VDialog"),Zi=Bt()({name:"VDialog",props:Xi(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,l){let{emit:o,slots:n}=l
const r=sa(e,"modelValue"),{scopeId:i}=Jr(),s=t.ref()
function u(e){const t=e.relatedTarget,a=e.target
if(t!==a&&s.value?.contentEl&&s.value?.globalTop&&![document,s.value.contentEl].includes(a)&&!s.value.contentEl.contains(a)){const e=X(s.value.contentEl)
if(!e.length)return
const a=e[0],l=e[e.length-1]
t===a?l.focus():a.focus()}}function c(){o("afterEnter"),s.value?.contentEl&&!s.value.contentEl.contains(document.activeElement)&&s.value.contentEl.focus({preventScroll:!0})}function d(){o("afterLeave")}return a&&t.watch((()=>r.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)}),{immediate:!0}),t.watch(r,(async e=>{e||(await t.nextTick(),s.value.activatorEl?.focus({preventScroll:!0}))})),Mt((()=>{const a=ui.filterProps(e),l=t.mergeProps({"aria-haspopup":"dialog","aria-expanded":String(r.value)},e.activatorProps),o=t.mergeProps({tabindex:-1},e.contentProps)
return t.createVNode(ui,t.mergeProps({ref:s,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},a,{modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,"aria-modal":"true",activatorProps:l,contentProps:o,role:"dialog",onAfterEnter:c,onAfterLeave:d},i),{activator:n.activator,default:function(){for(var e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l]
return t.createVNode(ll,{root:"VDialog"},{default:()=>[n.default?.(...a)]})}})})),vi({},s)}}),Qi=ht({inset:Boolean,...Xi({transition:"bottom-sheet-transition"})},"VBottomSheet"),Ji=Bt()({name:"VBottomSheet",props:Qi(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=sa(e,"modelValue")
return Mt((()=>{const a=Zi.filterProps(e)
return t.createVNode(Zi,t.mergeProps(a,{contentClass:["v-bottom-sheet__content",e.contentClass],modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-bottom-sheet",{"v-bottom-sheet--inset":e.inset},e.class],style:e.style}),l)})),{}}}),es=ht({divider:[Number,String],...yt()},"VBreadcrumbsDivider"),ts=Bt()({name:"VBreadcrumbsDivider",props:es(),setup(e,a){let{slots:l}=a
return Mt((()=>t.createVNode("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[l?.default?.()??e.divider]))),{}}}),as=ht({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...yt(),...mo(),...Pa({tag:"li"})},"VBreadcrumbsItem"),ls=Bt()({name:"VBreadcrumbsItem",props:as(),setup(e,a){let{slots:l,attrs:o}=a
const n=fo(e,o),r=t.computed((()=>e.active||n.isActive?.value)),i=t.computed((()=>r.value?e.activeColor:e.color)),{textColorClasses:s,textColorStyles:u}=ul(i)
return Mt((()=>t.createVNode(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":r.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:r.value&&e.activeClass},s.value,e.class],style:[u.value,e.style],"aria-current":r.value?"page":void 0},{default:()=>[n.isLink.value?t.createVNode("a",{class:"v-breadcrumbs-item--link",href:n.href.value,"aria-current":r.value?"page":void 0,onClick:n.navigate},[l.default?.()??e.title]):l.default?.()??e.title]}))),{}}}),os=ht({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:Ot,items:{type:Array,default:()=>[]},...yt(),...Al(),...dl(),...Pa({tag:"ul"})},"VBreadcrumbs"),ns=Bt()({name:"VBreadcrumbs",props:os(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=cl(t.toRef(e,"bgColor")),{densityClasses:r}=Rl(e),{roundedClasses:i}=vl(e)
Ct({VBreadcrumbsDivider:{divider:t.toRef(e,"divider")},VBreadcrumbsItem:{activeClass:t.toRef(e,"activeClass"),activeColor:t.toRef(e,"activeColor"),color:t.toRef(e,"color"),disabled:t.toRef(e,"disabled")}})
const s=t.computed((()=>e.items.map((e=>"string"==typeof e?{item:{title:e},raw:e}:{item:e,raw:e}))))
return Mt((()=>{const a=!(!l.prepend&&!e.icon)
return t.createVNode(e.tag,{class:["v-breadcrumbs",o.value,r.value,i.value,e.class],style:[n.value,e.style]},{default:()=>[a&&t.createVNode("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[l.prepend?t.createVNode(ll,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},l.prepend):t.createVNode(Zl,{key:"prepend-icon",start:!0,icon:e.icon},null)]),s.value.map(((e,a,o)=>{let{item:n,raw:r}=e
return t.createVNode(t.Fragment,null,[l.item?.({item:n,index:a})??t.createVNode(ls,t.mergeProps({key:a,disabled:a>=o.length-1},"string"==typeof n?{title:n}:n),{default:l.title?()=>l.title?.({item:n,index:a}):void 0}),a<o.length-1&&t.createVNode(ts,null,{default:l.divider?()=>l.divider?.({item:r,index:a}):void 0})])})),l.default?.()]})})),{}}}),rs=Bt()({name:"VCardActions",props:yt(),setup(e,a){let{slots:l}=a
return Ct({VBtn:{slim:!0,variant:"text"}}),Mt((()=>t.createVNode("div",{class:["v-card-actions",e.class],style:e.style},[l.default?.()]))),{}}}),is=ht({opacity:[Number,String],...yt(),...Pa()},"VCardSubtitle"),ss=Bt()({name:"VCardSubtitle",props:is(),setup(e,a){let{slots:l}=a
return Mt((()=>t.createVNode(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},l))),{}}}),us=Pt("v-card-title"),cs=ht({appendAvatar:String,appendIcon:Ot,prependAvatar:String,prependIcon:Ot,subtitle:[String,Number],title:[String,Number],...yt(),...Al()},"VCardItem"),ds=Bt()({name:"VCardItem",props:cs(),setup(e,a){let{slots:l}=a
return Mt((()=>{const a=!(!e.prependAvatar&&!e.prependIcon),o=!(!a&&!l.prepend),n=!(!e.appendAvatar&&!e.appendIcon),r=!(!n&&!l.append),i=!(null==e.title&&!l.title),s=!(null==e.subtitle&&!l.subtitle)
return t.createVNode("div",{class:["v-card-item",e.class],style:e.style},[o&&t.createVNode("div",{key:"prepend",class:"v-card-item__prepend"},[l.prepend?t.createVNode(ll,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},l.prepend):t.createVNode(t.Fragment,null,[e.prependAvatar&&t.createVNode(Uo,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&t.createVNode(Zl,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),t.createVNode("div",{class:"v-card-item__content"},[i&&t.createVNode(us,{key:"title"},{default:()=>[l.title?.()??e.title]}),s&&t.createVNode(ss,{key:"subtitle"},{default:()=>[l.subtitle?.()??e.subtitle]}),l.default?.()]),r&&t.createVNode("div",{key:"append",class:"v-card-item__append"},[l.append?t.createVNode(ll,{key:"append-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},l.append):t.createVNode(t.Fragment,null,[e.appendIcon&&t.createVNode(Zl,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&t.createVNode(Uo,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])})),{}}}),vs=ht({opacity:[Number,String],...yt(),...Pa()},"VCardText"),ps=Bt()({name:"VCardText",props:vs(),setup(e,a){let{slots:l}=a
return Mt((()=>t.createVNode(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},l))),{}}}),fs=ht({appendAvatar:String,appendIcon:Ot,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:Ot,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...bl(),...yt(),...Al(),...ol(),...wl(),...ro(),...ao(),...co(),...dl(),...mo(),...Pa(),...Sa(),...El({variant:"elevated"})},"VCard"),ms=Bt()({name:"VCard",directives:{Ripple:Do},props:fs(),setup(e,a){let{attrs:l,slots:o}=a
const{themeClasses:n}=xa(e),{borderClasses:r}=Vl(e),{colorClasses:i,colorStyles:s,variantClasses:u}=Fl(e),{densityClasses:c}=Rl(e),{dimensionStyles:d}=nl(e),{elevationClasses:v}=Sl(e),{loaderClasses:p}=io(e),{locationStyles:f}=lo(e),{positionClasses:m}=vo(e),{roundedClasses:g}=vl(e),h=fo(e,l),y=t.computed((()=>!1!==e.link&&h.isLink.value)),b=t.computed((()=>!e.disabled&&!1!==e.link&&(e.link||h.isClickable.value)))
return Mt((()=>{const a=y.value?"a":e.tag,l=!(!o.title&&null==e.title),V=!(!o.subtitle&&null==e.subtitle),w=l||V,S=!!(o.append||e.appendAvatar||e.appendIcon),k=!!(o.prepend||e.prependAvatar||e.prependIcon),x=!(!o.image&&!e.image),N=w||k||S,C=!(!o.text&&null==e.text)
return t.withDirectives(t.createVNode(a,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":b.value},n.value,r.value,i.value,c.value,v.value,p.value,m.value,g.value,u.value,e.class],style:[s.value,d.value,f.value,e.style],href:h.href.value,onClick:b.value&&h.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[x&&t.createVNode("div",{key:"image",class:"v-card__image"},[o.image?t.createVNode(ll,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},o.image):t.createVNode(yl,{key:"image-img",cover:!0,src:e.image},null)]),t.createVNode(so,{name:"v-card",active:!!e.loading,color:"boolean"==typeof e.loading?void 0:e.loading},{default:o.loader}),N&&t.createVNode(ds,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:o.item,prepend:o.prepend,title:o.title,subtitle:o.subtitle,append:o.append}),C&&t.createVNode(ps,{key:"text"},{default:()=>[o.text?.()??e.text]}),o.default?.(),o.actions&&t.createVNode(rs,null,{default:o.actions}),Dl(b.value,"v-card")]}),[[t.resolveDirective("ripple"),b.value&&e.ripple]])})),{}}}),gs=e=>{const{touchstartX:t,touchendX:a,touchstartY:l,touchendY:o}=e
e.offsetX=a-t,e.offsetY=o-l,Math.abs(e.offsetY)<.5*Math.abs(e.offsetX)&&(e.left&&a<t-16&&e.left(e),e.right&&a>t+16&&e.right(e)),Math.abs(e.offsetX)<.5*Math.abs(e.offsetY)&&(e.up&&o<l-16&&e.up(e),e.down&&o>l+16&&e.down(e))}
function hs(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end}
return{touchstart:e=>function(e,t){const a=e.changedTouches[0]
t.touchstartX=a.clientX,t.touchstartY=a.clientY,t.start?.({originalEvent:e,...t})}(e,t),touchend:e=>function(e,t){const a=e.changedTouches[0]
t.touchendX=a.clientX,t.touchendY=a.clientY,t.end?.({originalEvent:e,...t}),gs(t)}(e,t),touchmove:e=>function(e,t){const a=e.changedTouches[0]
t.touchmoveX=a.clientX,t.touchmoveY=a.clientY,t.move?.({originalEvent:e,...t})}(e,t)}}const ys={mounted:function(e,t){const a=t.value,l=a?.parent?e.parentElement:e,o=a?.options??{passive:!0},n=t.instance?.$.uid
if(!l||!n)return
const r=hs(t.value)
l._touchHandlers=l._touchHandlers??Object.create(null),l._touchHandlers[n]=r,V(r).forEach((e=>{l.addEventListener(e,r[e],o)}))},unmounted:function(e,t){const a=t.value?.parent?e.parentElement:e,l=t.instance?.$.uid
if(!a?._touchHandlers||!l)return
const o=a._touchHandlers[l]
V(o).forEach((e=>{a.removeEventListener(e,o[e])})),delete a._touchHandlers[l]}},bs=Symbol.for("vuetify:v-window"),Vs=Symbol.for("vuetify:v-window-group"),ws=ht({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>"boolean"==typeof e||"hover"===e},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...yt(),...Pa(),...Sa()},"VWindow"),Ss=Bt()({name:"VWindow",directives:{Touch:ys},props:ws(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=xa(e),{isRtl:n}=Va(),{t:r}=ya(),i=jl(e,Vs),s=t.ref(),u=t.computed((()=>n.value?!e.reverse:e.reverse)),c=t.shallowRef(!1),d=t.computed((()=>`v-window-${"vertical"===e.direction?"y":"x"}${(u.value?!c.value:c.value)?"-reverse":""}-transition`)),v=t.shallowRef(0),p=t.ref(void 0),f=t.computed((()=>i.items.value.findIndex((e=>i.selected.value.includes(e.id)))))
t.watch(f,((e,t)=>{const a=i.items.value.length,l=a-1
c.value=a<=2?e<t:e===l&&0===t||(0!==e||t!==l)&&e<t})),t.provide(bs,{transition:d,isReversed:c,transitionCount:v,transitionHeight:p,rootRef:s})
const m=t.computed((()=>e.continuous||0!==f.value)),g=t.computed((()=>e.continuous||f.value!==i.items.value.length-1))
function h(){m.value&&i.prev()}function y(){g.value&&i.next()}const b=t.computed((()=>{const a=[],o={icon:n.value?e.nextIcon:e.prevIcon,class:"v-window__"+(u.value?"right":"left"),onClick:i.prev,"aria-label":r("$vuetify.carousel.prev")}
a.push(m.value?l.prev?l.prev({props:o}):t.createVNode(Fo,o,null):t.createVNode("div",null,null))
const s={icon:n.value?e.prevIcon:e.nextIcon,class:"v-window__"+(u.value?"left":"right"),onClick:i.next,"aria-label":r("$vuetify.carousel.next")}
return a.push(g.value?l.next?l.next({props:s}):t.createVNode(Fo,s,null):t.createVNode("div",null,null)),a})),V=t.computed((()=>{if(!1===e.touch)return e.touch
return{...{left:()=>{u.value?h():y()},right:()=>{u.value?y():h()},start:e=>{let{originalEvent:t}=e
t.stopPropagation()}},...!0===e.touch?{}:e.touch}}))
return Mt((()=>t.withDirectives(t.createVNode(e.tag,{ref:s,class:["v-window",{"v-window--show-arrows-on-hover":"hover"===e.showArrows},o.value,e.class],style:e.style},{default:()=>[t.createVNode("div",{class:"v-window__container",style:{height:p.value}},[l.default?.({group:i}),!1!==e.showArrows&&t.createVNode("div",{class:"v-window__controls"},[b.value])]),l.additional?.({group:i})]}),[[t.resolveDirective("touch"),V.value]]))),{group:i}}}),ks=ht({color:String,cycle:Boolean,delimiterIcon:{type:Ot,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...ws({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),xs=Bt()({name:"VCarousel",props:ks(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=sa(e,"modelValue"),{t:n}=ya(),r=t.ref()
let i=-1
function s(){e.cycle&&r.value&&(i=window.setTimeout(r.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(i),window.requestAnimationFrame(s)}return t.watch(o,u),t.watch((()=>e.interval),u),t.watch((()=>e.cycle),(e=>{e?u():window.clearTimeout(i)})),t.onMounted(s),Mt((()=>{const a=Ss.filterProps(e)
return t.createVNode(Ss,t.mergeProps({ref:r},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:f(e.height)},e.style]}),{default:l.default,additional:a=>{let{group:r}=a
return t.createVNode(t.Fragment,null,[!e.hideDelimiters&&t.createVNode("div",{class:"v-carousel__controls",style:{left:"left"===e.verticalDelimiters&&e.verticalDelimiters?0:"auto",right:"right"===e.verticalDelimiters?0:"auto"}},[r.items.value.length>0&&t.createVNode(ll,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[r.items.value.map(((e,a)=>{const o={id:`carousel-item-${e.id}`,"aria-label":n("$vuetify.carousel.ariaLabel.delimiter",a+1,r.items.value.length),class:["v-carousel__controls__item",r.isSelected(e.id)&&"v-btn--active"],onClick:()=>r.select(e.id,!0)}
return l.item?l.item({props:o,item:e}):t.createVNode(Fo,t.mergeProps(e,o),null)}))]})]),e.progress&&t.createVNode(no,{class:"v-carousel__progress",color:"string"==typeof e.progress?e.progress:void 0,modelValue:(r.getItemIndex(o.value)+1)/r.items.value.length*100},null)])},prev:l.prev,next:l.next})})),{}}}),Ns=ht({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...yt(),...Ll(),...Zr()},"VWindowItem"),Cs=Bt()({name:"VWindowItem",directives:{Touch:ys},props:Ns(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:l}=a
const o=t.inject(bs),n=zl(e,Vs),{isBooted:r}=_l()
if(!o||!n)throw new Error("[Vuetify] VWindowItem must be used inside VWindow")
const i=t.shallowRef(!1),s=t.computed((()=>r.value&&(o.isReversed.value?!1!==e.reverseTransition:!1!==e.transition)))
function u(){i.value&&o&&(i.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,0===o.transitionCount.value&&(o.transitionHeight.value=void 0)))}function c(){!i.value&&o&&(i.value=!0,0===o.transitionCount.value&&(o.transitionHeight.value=f(o.rootRef.value?.clientHeight)),o.transitionCount.value+=1)}function d(){u()}function v(e){i.value&&t.nextTick((()=>{s.value&&i.value&&o&&(o.transitionHeight.value=f(e.clientHeight))}))}const p=t.computed((()=>{const t=o.isReversed.value?e.reverseTransition:e.transition
return!!s.value&&{name:"string"!=typeof t?o.transition.value:t,onBeforeEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:c,onAfterLeave:u,onLeaveCancelled:d,onEnter:v}})),{hasContent:m}=Qr(e,n.isSelected)
return Mt((()=>t.createVNode(fl,{transition:p.value,disabled:!r.value},{default:()=>[t.withDirectives(t.createVNode("div",{class:["v-window-item",n.selectedClass.value,e.class],style:e.style},[m.value&&l.default?.()]),[[t.vShow,n.isSelected.value]])]}))),{groupItem:n}}}),_s=ht({...hl(),...Ns()},"VCarouselItem"),Is=Bt()({name:"VCarouselItem",inheritAttrs:!1,props:_s(),setup(e,a){let{slots:l,attrs:o}=a
Mt((()=>{const a=yl.filterProps(e),n=Cs.filterProps(e)
return t.createVNode(Cs,t.mergeProps({class:["v-carousel-item",e.class]},n),{default:()=>[t.createVNode(yl,t.mergeProps(o,a),l)]})}))}}),Bs=Pt("v-code"),Ps=It({name:"VColorPickerCanvas",props:ht({color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...yt()},"VColorPickerCanvas")(),emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,a){let{emit:l}=a
const o=t.shallowRef(!1),n=t.ref(),r=t.shallowRef(parseFloat(e.width)),i=t.shallowRef(parseFloat(e.height)),s=t.ref({x:0,y:0}),u=t.computed({get:()=>s.value,set(t){if(!n.value)return
const{x:a,y:o}=t
s.value=t,l("update:color",{h:e.color?.h??0,s:R(a,0,r.value)/r.value,v:1-R(o,0,i.value)/i.value,a:e.color?.a??1})}}),c=t.computed((()=>{const{x:t,y:a}=u.value,l=parseInt(e.dotSize,10)/2
return{width:f(e.dotSize),height:f(e.dotSize),transform:`translate(${f(t-l)}, ${f(a-l)})`}})),{resizeRef:d}=Jt((e=>{if(!d.el?.offsetParent)return
const{width:t,height:a}=e[0].contentRect
r.value=t,i.value=a}))
function v(t){"mousedown"===t.type&&t.preventDefault(),e.disabled||(p(t),window.addEventListener("mousemove",p),window.addEventListener("mouseup",m),window.addEventListener("touchmove",p),window.addEventListener("touchend",m))}function p(t){if(e.disabled||!n.value)return
o.value=!0
const a=function(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}(t)
!function(e,t,a){const{left:l,top:o,width:n,height:r}=a
u.value={x:R(e-l,0,n),y:R(t-o,0,r)}}(a.clientX,a.clientY,n.value.getBoundingClientRect())}function m(){window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",m),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",m)}function g(){if(!n.value)return
const t=n.value,a=t.getContext("2d")
if(!a)return
const l=a.createLinearGradient(0,0,t.width,0)
l.addColorStop(0,"hsla(0, 0%, 100%, 1)"),l.addColorStop(1,`hsla(${e.color?.h??0}, 100%, 50%, 1)`),a.fillStyle=l,a.fillRect(0,0,t.width,t.height)
const o=a.createLinearGradient(0,0,0,t.height)
o.addColorStop(0,"hsla(0, 0%, 0%, 0)"),o.addColorStop(1,"hsla(0, 0%, 0%, 1)"),a.fillStyle=o,a.fillRect(0,0,t.width,t.height)}return t.watch((()=>e.color?.h),g,{immediate:!0}),t.watch((()=>[r.value,i.value]),((e,t)=>{g(),s.value={x:u.value.x*e[0]/t[0],y:u.value.y*e[1]/t[1]}}),{flush:"post"}),t.watch((()=>e.color),(()=>{o.value?o.value=!1:s.value=e.color?{x:e.color.s*r.value,y:(1-e.color.v)*i.value}:{x:0,y:0}}),{deep:!0,immediate:!0}),t.onMounted((()=>g())),Mt((()=>t.createVNode("div",{ref:d,class:["v-color-picker-canvas",e.class],style:e.style,onMousedown:v,onTouchstartPassive:v},[t.createVNode("canvas",{ref:n,width:r.value,height:i.value},null),e.color&&t.createVNode("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:c.value},null)]))),{}}})
const As={h:0,s:0,v:0,a:1},Rs={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,t)=>({...e,r:Number(t)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,t)=>({...e,g:Number(t)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,t)=>({...e,b:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e
return null!=t?Math.round(100*t)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:et,from:at},Ts={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,t)=>({...e,h:Number(t)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(100*e.s)/100,getColor:(e,t)=>({...e,s:Number(t)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(100*e.l)/100,getColor:(e,t)=>({...e,l:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e
return null!=t?Math.round(100*t)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:lt,from:ot},Ds={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,t)=>t}],to:dt,from:ct},Es={rgb:{...Rs,inputs:Rs.inputs?.slice(0,3)},rgba:Rs,hsl:{...Ts,inputs:Ts.inputs.slice(0,3)},hsla:Ts,hex:{...Ds,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,t)=>t}]},hexa:Ds},Fs=e=>{let{label:a,...l}=e
return t.createVNode("div",{class:"v-color-picker-edit__input"},[t.createVNode("input",l,null),t.createVNode("span",null,[a])])},$s=It({name:"VColorPickerEdit",props:ht({color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(Es).includes(e)},modes:{type:Array,default:()=>Object.keys(Es),validator:e=>Array.isArray(e)&&e.every((e=>Object.keys(Es).includes(e)))},...yt()},"VColorPickerEdit")(),emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,a){let{emit:l}=a
const o=t.computed((()=>e.modes.map((e=>({...Es[e],name:e}))))),n=t.computed((()=>{const t=o.value.find((t=>t.name===e.mode))
if(!t)return[]
const a=e.color?t.to(e.color):null
return t.inputs?.map((o=>{let{getValue:n,getColor:r,...i}=o
return{...t.inputProps,...i,disabled:e.disabled,value:a&&n(a),onChange:e=>{const o=e.target
o&&l("update:color",t.from(r(a??t.to(As),o.value)))}}}))}))
return Mt((()=>t.createVNode("div",{class:["v-color-picker-edit",e.class],style:e.style},[n.value?.map((e=>t.createVNode(Fs,e,null))),o.value.length>1&&t.createVNode(Fo,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const t=o.value.findIndex((t=>t.name===e.mode))
l("update:mode",o.value[(t+1)%o.value.length].name)}},null)]))),{}}}),Ms=Symbol.for("vuetify:v-slider")
function Os(e,t,a){const l="vertical"===a,o=t.getBoundingClientRect(),n="touches"in e?e.touches[0]:e
return l?n.clientY-(o.top+o.height/2):n.clientX-(o.left+o.width/2)}const Ls=ht({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>"boolean"==typeof e||"always"===e},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>"boolean"==typeof e||"always"===e},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...dl(),...wl({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),zs=e=>{const a=t.computed((()=>parseFloat(e.min))),l=t.computed((()=>parseFloat(e.max))),o=t.computed((()=>+e.step>0?parseFloat(e.step):0)),n=t.computed((()=>Math.max(T(o.value),T(a.value))))
return{min:a,max:l,step:o,decimals:n,roundValue:function(e){if(e=parseFloat(e),o.value<=0)return e
const t=R(e,a.value,l.value),r=a.value%o.value,i=Math.round((t-r)/o.value)*o.value+r
return parseFloat(Math.min(i,l.value).toFixed(n.value))}}},js=e=>{let{props:a,steps:l,onSliderStart:o,onSliderMove:n,onSliderEnd:r,getActiveThumb:i}=e
const{isRtl:s}=Va(),u=t.toRef(a,"reverse"),c=t.computed((()=>"vertical"===a.direction)),d=t.computed((()=>c.value!==u.value)),{min:v,max:f,step:m,decimals:g,roundValue:h}=l,y=t.computed((()=>parseInt(a.thumbSize,10))),b=t.computed((()=>parseInt(a.tickSize,10))),V=t.computed((()=>parseInt(a.trackSize,10))),w=t.computed((()=>(f.value-v.value)/m.value)),S=t.toRef(a,"disabled"),k=t.computed((()=>a.error||a.disabled?void 0:a.thumbColor??a.color)),x=t.computed((()=>a.error||a.disabled?void 0:a.trackColor??a.color)),N=t.computed((()=>a.error||a.disabled?void 0:a.trackFillColor??a.color)),C=t.shallowRef(!1),_=t.shallowRef(0),I=t.ref(),B=t.ref()
function P(e){const t="vertical"===a.direction,l=t?"top":"left",o=t?"height":"width",n=t?"clientY":"clientX",{[l]:r,[o]:i}=I.value?.$el.getBoundingClientRect(),u=function(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}(e,n)
let c=Math.min(Math.max((u-r-_.value)/i,0),1)||0
return(t?d.value:d.value!==s.value)&&(c=1-c),h(v.value+c*(f.value-v.value))}const A=e=>{r({value:P(e)}),C.value=!1,_.value=0},T=e=>{B.value=i(e),B.value&&(B.value.focus(),C.value=!0,B.value.contains(e.target)?_.value=Os(e,B.value,a.direction):(_.value=0,n({value:P(e)})),o({value:P(e)}))},D={passive:!0,capture:!0}
function E(e){n({value:P(e)})}function F(e){e.stopPropagation(),e.preventDefault(),A(e),window.removeEventListener("mousemove",E,D),window.removeEventListener("mouseup",F)}function $(e){A(e),window.removeEventListener("touchmove",E,D),e.target?.removeEventListener("touchend",$)}const M=e=>{const t=(e-v.value)/(f.value-v.value)*100
return R(isNaN(t)?0:t,0,100)},O=t.toRef(a,"showTicks"),L=t.computed((()=>O.value?a.ticks?Array.isArray(a.ticks)?a.ticks.map((e=>({value:e,position:M(e),label:e.toString()}))):Object.keys(a.ticks).map((e=>({value:parseFloat(e),position:M(parseFloat(e)),label:a.ticks[e]}))):w.value!==1/0?p(w.value+1).map((e=>{const t=v.value+e*m.value
return{value:t,position:M(t)}})):[]:[])),z=t.computed((()=>L.value.some((e=>{let{label:t}=e
return!!t})))),j={activeThumbRef:B,color:t.toRef(a,"color"),decimals:g,disabled:S,direction:t.toRef(a,"direction"),elevation:t.toRef(a,"elevation"),hasLabels:z,isReversed:u,indexFromEnd:d,min:v,max:f,mousePressed:C,numTicks:w,onSliderMousedown:function(e){e.preventDefault(),T(e),window.addEventListener("mousemove",E,D),window.addEventListener("mouseup",F,{passive:!1})},onSliderTouchstart:function(e){T(e),window.addEventListener("touchmove",E,D),e.target?.addEventListener("touchend",$,{passive:!1})},parsedTicks:L,parseMouseMove:P,position:M,readonly:t.toRef(a,"readonly"),rounded:t.toRef(a,"rounded"),roundValue:h,showTicks:O,startOffset:_,step:m,thumbSize:y,thumbColor:k,thumbLabel:t.toRef(a,"thumbLabel"),ticks:t.toRef(a,"ticks"),tickSize:b,trackColor:x,trackContainerRef:I,trackFillColor:N,trackSize:V,vertical:c}
return t.provide(Ms,j),j},Hs=ht({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},name:String,...yt()},"VSliderThumb"),Ws=Bt()({name:"VSliderThumb",directives:{Ripple:Do},props:Hs(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.inject(Ms),{isRtl:r,rtlClasses:i}=Va()
if(!n)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider")
const{thumbColor:s,step:u,disabled:c,thumbSize:d,thumbLabel:v,direction:p,isReversed:m,vertical:g,readonly:h,elevation:y,mousePressed:V,decimals:w,indexFromEnd:S}=n,k=t.computed((()=>c.value?void 0:y.value)),{elevationClasses:x}=Sl(k),{textColorClasses:N,textColorStyles:C}=ul(s),{pageup:_,pagedown:I,end:B,home:P,left:A,right:R,down:T,up:D}=b,E=[_,I,B,P,A,R,T,D],F=t.computed((()=>u.value?[1,2,3]:[1,5,10]))
function $(t){const a=function(t,a){if(!E.includes(t.key))return
t.preventDefault()
const l=u.value||.1,o=(e.max-e.min)/l
if([A,R,T,D].includes(t.key)){const e=(g.value?[r.value?A:R,m.value?T:D]:S.value!==r.value?[A,D]:[R,D]).includes(t.key)?1:-1,o=t.shiftKey?2:t.ctrlKey?1:0
a+=e*l*F.value[o]}else t.key===P?a=e.min:t.key===B?a=e.max:a-=(t.key===I?1:-1)*l*(o>100?o/10:10)
return Math.max(e.min,Math.min(e.max,a))}(t,e.modelValue)
null!=a&&o("update:modelValue",a)}return Mt((()=>{const a=f(S.value?100-e.position:e.position,"%")
return t.createVNode("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&V.value},e.class,i.value],style:[{"--v-slider-thumb-position":a,"--v-slider-thumb-size":f(d.value)},e.style],role:"slider",tabindex:c.value?-1:0,"aria-label":e.name,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!h.value,"aria-orientation":p.value,onKeydown:h.value?void 0:$},[t.createVNode("div",{class:["v-slider-thumb__surface",N.value,x.value],style:{...C.value}},null),t.withDirectives(t.createVNode("div",{class:["v-slider-thumb__ripple",N.value],style:C.value},null),[[t.resolveDirective("ripple"),e.ripple,null,{circle:!0,center:!0}]]),t.createVNode(Ua,{origin:"bottom center"},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-slider-thumb__label-container"},[t.createVNode("div",{class:["v-slider-thumb__label"]},[t.createVNode("div",null,[l["thumb-label"]?.({modelValue:e.modelValue})??e.modelValue.toFixed(u.value?w.value:1)])])]),[[t.vShow,v.value&&e.focused||"always"===v.value]])]})])})),{}}}),Us=ht({start:{type:Number,required:!0},stop:{type:Number,required:!0},...yt()},"VSliderTrack"),Ys=Bt()({name:"VSliderTrack",props:Us(),emits:{},setup(e,a){let{slots:l}=a
const o=t.inject(Ms)
if(!o)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider")
const{color:n,parsedTicks:r,rounded:i,showTicks:s,tickSize:u,trackColor:c,trackFillColor:d,trackSize:v,vertical:p,min:m,max:g,indexFromEnd:h}=o,{roundedClasses:y}=vl(i),{backgroundColorClasses:b,backgroundColorStyles:V}=cl(d),{backgroundColorClasses:w,backgroundColorStyles:S}=cl(c),k=t.computed((()=>`inset-${p.value?"block":"inline"}-${h.value?"end":"start"}`)),x=t.computed((()=>p.value?"height":"width")),N=t.computed((()=>({[k.value]:"0%",[x.value]:"100%"}))),C=t.computed((()=>e.stop-e.start)),_=t.computed((()=>({[k.value]:f(e.start,"%"),[x.value]:f(C.value,"%")}))),I=t.computed((()=>{if(!s.value)return[]
return(p.value?r.value.slice().reverse():r.value).map(((a,o)=>{const n=a.value!==m.value&&a.value!==g.value?f(a.position,"%"):void 0
return t.createVNode("div",{key:a.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":a.position>=e.start&&a.position<=e.stop,"v-slider-track__tick--first":a.value===m.value,"v-slider-track__tick--last":a.value===g.value}],style:{[k.value]:n}},[(a.label||l["tick-label"])&&t.createVNode("div",{class:"v-slider-track__tick-label"},[l["tick-label"]?.({tick:a,index:o})??a.label])])}))}))
return Mt((()=>t.createVNode("div",{class:["v-slider-track",y.value,e.class],style:[{"--v-slider-track-size":f(v.value),"--v-slider-tick-size":f(u.value)},e.style]},[t.createVNode("div",{class:["v-slider-track__background",w.value,{"v-slider-track__background--opacity":!!n.value||!d.value}],style:{...N.value,...S.value}},null),t.createVNode("div",{class:["v-slider-track__fill",b.value],style:{..._.value,...V.value}},null),s.value&&t.createVNode("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":"always"===s.value}]},[I.value])]))),{}}}),Gs=ht({...nn(),...Ls(),...pn(),modelValue:{type:[Number,String],default:0}},"VSlider"),qs=Bt()({name:"VSlider",props:Gs(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.ref(),{rtlClasses:r}=Va(),i=zs(e),s=sa(e,"modelValue",void 0,(e=>i.roundValue(null==e?i.min.value:e))),{min:u,max:c,mousePressed:d,roundValue:v,onSliderMousedown:p,onSliderTouchstart:f,trackContainerRef:m,position:g,hasLabels:h,readonly:y}=js({props:e,steps:i,onSliderStart:()=>{o("start",s.value)},onSliderEnd:e=>{let{value:t}=e
const a=v(t)
s.value=a,o("end",a)},onSliderMove:e=>{let{value:t}=e
return s.value=v(t)},getActiveThumb:()=>n.value?.$el}),{isFocused:b,focus:V,blur:w}=rn(e),S=t.computed((()=>g(s.value)))
return Mt((()=>{const a=fn.filterProps(e),o=!!(e.label||l.label||l.prepend)
return t.createVNode(fn,t.mergeProps({class:["v-slider",{"v-slider--has-labels":!!l["tick-label"]||h.value,"v-slider--focused":b.value,"v-slider--pressed":d.value,"v-slider--disabled":e.disabled},r.value,e.class],style:e.style},a,{focused:b.value}),{...l,prepend:o?a=>t.createVNode(t.Fragment,null,[l.label?.(a)??(e.label?t.createVNode(Go,{id:a.id.value,class:"v-slider__label",text:e.label},null):void 0),l.prepend?.(a)]):void 0,default:a=>{let{id:o,messagesId:r}=a
return t.createVNode("div",{class:"v-slider__container",onMousedown:y.value?void 0:p,onTouchstartPassive:y.value?void 0:f},[t.createVNode("input",{id:o.value,name:e.name||o.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:s.value},null),t.createVNode(Ys,{ref:m,start:0,stop:S.value},{"tick-label":l["tick-label"]}),t.createVNode(Ws,{ref:n,"aria-describedby":r.value,focused:b.value,min:u.value,max:c.value,modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,position:S.value,elevation:e.elevation,onFocus:V,onBlur:w,ripple:e.ripple,name:e.name},{"thumb-label":l["thumb-label"]})])}})})),{}}}),Ks=It({name:"VColorPickerPreview",props:ht({color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...yt()},"VColorPickerPreview")(),emits:{"update:color":e=>!0},setup(e,a){let{emit:l}=a
const o=new AbortController
async function r(){if(!n)return
const t=new window.EyeDropper
try{const a=ct((await t.open({signal:o.signal})).sRGBHex)
l("update:color",{...e.color??As,...a})}catch(e){}}return t.onUnmounted((()=>o.abort())),Mt((()=>t.createVNode("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[n&&t.createVNode("div",{class:"v-color-picker-preview__eye-dropper",key:"eyeDropper"},[t.createVNode(Fo,{onClick:r,icon:"$eyeDropper",variant:"plain",density:"comfortable"},null)]),t.createVNode("div",{class:"v-color-picker-preview__dot"},[t.createVNode("div",{style:{background:rt(e.color??As)}},null)]),t.createVNode("div",{class:"v-color-picker-preview__sliders"},[t.createVNode(qs,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:e.color?.h,"onUpdate:modelValue":t=>l("update:color",{...e.color??As,h:t}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&t.createVNode(qs,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:e.color?.a??1,"onUpdate:modelValue":t=>l("update:color",{...e.color??As,a:t}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])]))),{}}})
var Xs={red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"#ffffff00"}}
const Zs=ht({swatches:{type:Array,default:()=>function(e){return Object.keys(e).map((t=>{const a=e[t]
return a.base?[a.base,a.darken4,a.darken3,a.darken2,a.darken1,a.lighten1,a.lighten2,a.lighten3,a.lighten4,a.lighten5]:[a.black,a.white,a.transparent]}))}(Xs)},disabled:Boolean,color:Object,maxHeight:[Number,String],...yt()},"VColorPickerSwatches")
const Qs=It({name:"VColorPickerSwatches",props:Zs(),emits:{"update:color":e=>!0},setup(e,a){let{emit:l}=a
return Mt((()=>t.createVNode("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:f(e.maxHeight)},e.style]},[t.createVNode("div",null,[e.swatches.map((a=>t.createVNode("div",{class:"v-color-picker-swatches__swatch"},[a.map((a=>{const o=Je(a),n=at(o),r=nt(o)
return t.createVNode("div",{class:"v-color-picker-swatches__color",onClick:()=>n&&l("update:color",n)},[t.createVNode("div",{style:{background:r}},[e.color&&c(e.color,n)?t.createVNode(Zl,{size:"x-small",icon:"$success",color:mt(a,"#FFFFFF")>2?"white":"black"},null):void 0])])}))])))])]))),{}}}),Js=ht({color:String,...bl(),...yt(),...ol(),...wl(),...ao(),...co(),...dl(),...Pa(),...Sa()},"VSheet"),eu=Bt()({name:"VSheet",props:Js(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=xa(e),{backgroundColorClasses:n,backgroundColorStyles:r}=cl(t.toRef(e,"color")),{borderClasses:i}=Vl(e),{dimensionStyles:s}=nl(e),{elevationClasses:u}=Sl(e),{locationStyles:c}=lo(e),{positionClasses:d}=vo(e),{roundedClasses:v}=vl(e)
return Mt((()=>t.createVNode(e.tag,{class:["v-sheet",o.value,n.value,i.value,u.value,d.value,v.value,e.class],style:[r.value,s.value,c.value,e.style]},l))),{}}}),tu=It({name:"VColorPicker",props:ht({canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(Es).includes(e)},modes:{type:Array,default:()=>Object.keys(Es),validator:e=>Array.isArray(e)&&e.every((e=>Object.keys(Es).includes(e)))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...x(Js({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},"VColorPicker")(),emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const a=sa(e,"mode"),l=t.ref(null),o=sa(e,"modelValue",void 0,(e=>{if(null==e||""===e)return null
let t
try{t=at(Je(e))}catch(e){return $e(e),null}return t}),(t=>t?function(e,t){if(null==t||"string"==typeof t){const t=dt(e)
return 1===e.a?t.slice(0,7):t}if("object"==typeof t){let a
return w(t,["r","g","b"])?a=et(e):w(t,["h","s","l"])?a=lt(e):w(t,["h","s","v"])&&(a=e),function(e,t){if(t){const{a:t,...a}=e
return a}return e}(a,!w(t,["a"])&&1===e.a)}return e}(t,e.modelValue):null)),n=t.computed((()=>o.value?{...o.value,h:l.value??o.value.h}:null)),{rtlClasses:r}=Va()
let i=!0
t.watch(o,(e=>{i?e&&(l.value=e.h):i=!0}),{immediate:!0})
const s=e=>{i=!1,l.value=e.h,o.value=e}
return t.onMounted((()=>{e.modes.includes(a.value)||(a.value=e.modes[0])})),Ct({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),Mt((()=>{const l=eu.filterProps(e)
return t.createVNode(eu,t.mergeProps({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",r.value,e.class],style:[{"--v-color-picker-color-hsv":rt({...n.value??As,a:1})},e.style]},l,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&t.createVNode(Ps,{key:"canvas",color:n.value,"onUpdate:color":s,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&t.createVNode("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&t.createVNode(Ks,{key:"preview",color:n.value,"onUpdate:color":s,hideAlpha:!a.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&t.createVNode($s,{key:"edit",modes:e.modes,mode:a.value,"onUpdate:mode":e=>a.value=e,color:n.value,"onUpdate:color":s,disabled:e.disabled},null)]),e.showSwatches&&t.createVNode(Qs,{key:"swatches",color:n.value,"onUpdate:color":s,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})})),{}}})
const au=ht({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...$i({filterKeys:["title"]}),...Ti({hideNoData:!0,returnObject:!0}),...x(xi({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...pl({transition:!1})},"VCombobox"),lu=Bt()({name:"VCombobox",props:au(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,l){let{emit:o,slots:n}=l
const{t:r}=ya(),i=t.ref(),s=t.shallowRef(!1),u=t.shallowRef(!0),c=t.shallowRef(!1),d=t.ref(),v=t.ref(),p=sa(e,"menu"),f=t.computed({get:()=>p.value,set:e=>{p.value&&!e&&d.value?.ΨopenChildren.size||(p.value=e)}}),m=t.shallowRef(-1)
let g=!1
const h=t.computed((()=>i.value?.color)),y=t.computed((()=>f.value?e.closeText:e.openText)),{items:b,transformIn:V,transformOut:w}=wr(e),{textColorClasses:S,textColorStyles:k}=ul(h),x=sa(e,"modelValue",[],(e=>V(A(e))),(t=>{const a=w(t)
return e.multiple?a:a[0]??null})),N=cn(),C=t.computed((()=>!(!e.chips&&!n.chip))),_=t.computed((()=>C.value||!!n.selection)),I=t.shallowRef(e.multiple||_.value?"":x.value[0]?.title??""),P=t.computed({get:()=>I.value,set:t=>{if(I.value=t??"",e.multiple||_.value||(x.value=[br(e,t)]),t&&e.multiple&&e.delimiters?.length){const a=t.split(new RegExp(`(?:${e.delimiters.join("|")})+`))
a.length>1&&(a.forEach((t=>{(t=t.trim())&&q(br(e,t))})),I.value="")}t||(m.value=-1),u.value=!t}}),R=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(x.value):"number"==typeof e.counterValue?e.counterValue:e.multiple?x.value.length:P.value.length))
t.watch(I,(e=>{g?t.nextTick((()=>g=!1)):s.value&&!f.value&&(f.value=!0),o("update:search",e)})),t.watch(x,(t=>{e.multiple||_.value||(I.value=t[0]?.title??"")}))
const{filteredItems:T,getMatches:D}=Mi(e,b,(()=>u.value?"":P.value)),E=t.computed((()=>e.hideSelected?T.value.filter((e=>!x.value.some((t=>t.value===e.value)))):T.value)),F=t.computed((()=>x.value.map((e=>e.value)))),$=t.computed((()=>(!0===e.autoSelectFirst||"exact"===e.autoSelectFirst&&P.value===E.value[0]?.title)&&E.value.length>0&&!u.value&&!c.value)),M=t.computed((()=>e.hideNoData&&!E.value.length||e.readonly||N?.isReadonly.value)),O=t.ref(),L=Ri(O,i)
function z(t){g=!0,e.openOnClear&&(f.value=!0)}function j(){M.value||(f.value=!0)}function H(e){M.value||(s.value&&(e.preventDefault(),e.stopPropagation()),f.value=!f.value)}function W(e){oe(e)&&i.value?.focus()}function U(t){if(function(e){return e.isComposing&&B.includes(e.key)}(t)||e.readonly||N?.isReadonly.value)return
const a=i.value.selectionStart,l=x.value.length
if((m.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(f.value=!0),["Escape"].includes(t.key)&&(f.value=!1),["Enter","Escape","Tab"].includes(t.key)&&($.value&&["Enter","Tab"].includes(t.key)&&!x.value.some((e=>{let{value:t}=e
return t===E.value[0].value}))&&q(T.value[0]),u.value=!0),"ArrowDown"===t.key&&$.value&&O.value?.focus("next"),"Enter"===t.key&&P.value&&(q(br(e,P.value)),_.value&&(I.value="")),["Backspace","Delete"].includes(t.key)){if(!e.multiple&&_.value&&x.value.length>0&&!P.value)return q(x.value[0],!1)
if(~m.value){const e=m.value
q(x.value[m.value],!1),m.value=e>=l-1?l-2:e}else"Backspace"!==t.key||P.value||(m.value=l-1)}if(e.multiple){if("ArrowLeft"===t.key){if(m.value<0&&a>0)return
const e=m.value>-1?m.value-1:l-1
x.value[e]?m.value=e:(m.value=-1,i.value.setSelectionRange(P.value.length,P.value.length))}if("ArrowRight"===t.key){if(m.value<0)return
const e=m.value+1
x.value[e]?m.value=e:(m.value=-1,i.value.setSelectionRange(0,0))}}}function Y(){e.eager&&v.value?.calculateVisibleItems()}function G(){s.value&&(u.value=!0,i.value?.focus())}function q(a){let l=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(a&&!a.props.disabled)if(e.multiple){const t=x.value.findIndex((t=>e.valueComparator(t.value,a.value))),o=null==l?!~t:l
if(~t){const e=o?[...x.value,a]:[...x.value]
e.splice(t,1),x.value=e}else o&&(x.value=[...x.value,a])
e.clearOnSelect&&(P.value="")}else{const e=!1!==l
x.value=e?[a]:[],I.value=e&&!_.value?a.title:"",t.nextTick((()=>{f.value=!1,u.value=!0}))}}function K(e){s.value=!0,setTimeout((()=>{c.value=!0}))}function X(e){c.value=!1}function Z(t){null!=t&&(""!==t||e.multiple||_.value)||(x.value=[])}return t.watch(s,((t,a)=>{if(!t&&t!==a&&(m.value=-1,f.value=!1,P.value)){if(e.multiple)return void q(br(e,P.value))
if(!_.value)return
x.value.some((e=>{let{title:t}=e
return t===P.value}))?I.value="":q(br(e,P.value))}})),t.watch(f,(()=>{if(!e.hideSelected&&f.value&&x.value.length){const t=E.value.findIndex((t=>x.value.some((a=>e.valueComparator(a.value,t.value)))))
a&&window.requestAnimationFrame((()=>{t>=0&&v.value?.scrollToIndex(t)}))}})),t.watch((()=>e.items),((e,t)=>{f.value||s.value&&!t.length&&e.length&&(f.value=!0)})),Mt((()=>{const a=!!(!e.hideNoData||E.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),l=x.value.length>0,o=Ni.filterProps(e)
return t.createVNode(Ni,t.mergeProps({ref:i},o,{modelValue:P.value,"onUpdate:modelValue":[e=>P.value=e,Z],focused:s.value,"onUpdate:focused":e=>s.value=e,validationValue:x.externalValue,counterValue:R.value,dirty:l,class:["v-combobox",{"v-combobox--active-menu":f.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!_.value,"v-combobox--selecting-index":m.value>-1,["v-combobox--"+(e.multiple?"multiple":"single")]:!0},e.class],style:e.style,readonly:e.readonly,placeholder:l?void 0:e.placeholder,"onClick:clear":z,"onMousedown:control":j,onKeydown:U}),{...n,default:()=>t.createVNode(t.Fragment,null,[t.createVNode(fi,t.mergeProps({ref:d,modelValue:f.value,"onUpdate:modelValue":e=>f.value=e,activator:"parent",contentClass:"v-combobox__content",disabled:M.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:Y,onAfterLeave:G},e.menuProps),{default:()=>[a&&t.createVNode(Nr,t.mergeProps({ref:O,selected:F.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:W,onFocusin:K,onFocusout:X,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},L,e.listProps),{default:()=>[n["prepend-item"]?.(),!E.value.length&&!e.hideNoData&&(n["no-data"]?.()??t.createVNode(dr,{title:r(e.noDataText)},null)),t.createVNode(Ai,{ref:v,renderless:!0,items:E.value},{default:a=>{let{item:l,index:o,itemRef:r}=a
const i=t.mergeProps(l.props,{ref:r,key:o,active:!(!$.value||0!==o)||void 0,onClick:()=>q(l,null)})
return n.item?.({item:l,index:o,props:i})??t.createVNode(dr,t.mergeProps(i,{role:"option"}),{prepend:a=>{let{isSelected:o}=a
return t.createVNode(t.Fragment,null,[e.multiple&&!e.hideSelected?t.createVNode(tn,{key:l.value,modelValue:o,ripple:!1,tabindex:"-1"},null):void 0,l.props.prependAvatar&&t.createVNode(Uo,{image:l.props.prependAvatar},null),l.props.prependIcon&&t.createVNode(Zl,{icon:l.props.prependIcon},null)])},title:()=>u.value?l.title:function(e,a,l){if(null==a)return e
if(Array.isArray(a))throw new Error("Multiple matches is not implemented")
return"number"==typeof a&&~a?t.createVNode(t.Fragment,null,[t.createVNode("span",{class:"v-combobox__unmask"},[e.substr(0,a)]),t.createVNode("span",{class:"v-combobox__mask"},[e.substr(a,l)]),t.createVNode("span",{class:"v-combobox__unmask"},[e.substr(a+l)])]):e}(l.title,D(l)?.title,P.value?.length??0)})}}),n["append-item"]?.()]})]}),x.value.map(((a,l)=>{function o(e){e.stopPropagation(),e.preventDefault(),q(a,!1)}const r={"onClick:close":o,onKeydown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),o(e))},onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},i=C.value?!!n.chip:!!n.selection,s=i?ae(C.value?n.chip({item:a,index:l,props:r}):n.selection({item:a,index:l})):void 0
if(!i||s)return t.createVNode("div",{key:a.value,class:["v-combobox__selection",l===m.value&&["v-combobox__selection--selected",S.value]],style:l===m.value?k.value:{}},[C.value?n.chip?t.createVNode(ll,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:a.title}}},{default:()=>[s]}):t.createVNode(jn,t.mergeProps({key:"chip",closable:e.closableChips,size:"small",text:a.title,disabled:a.props.disabled},r),null):s??t.createVNode("span",{class:"v-combobox__selection-text"},[a.title,e.multiple&&l<x.value.length-1&&t.createVNode("span",{class:"v-combobox__selection-comma"},[t.createTextVNode(",")])])])}))]),"append-inner":function(){for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o]
return t.createVNode(t.Fragment,null,[n["append-inner"]?.(...l),e.hideNoData&&!e.items.length||!e.menuIcon?void 0:t.createVNode(Zl,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:H,onClick:ee,"aria-label":r(y.value),title:r(y.value),tabindex:"-1"},null)])}})})),vi({isFocused:s,isPristine:u,menu:f,search:P,selectionIndex:m,filteredItems:T,select:q},i)}}),ou={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0}
function nu(e){return new Date(e.getFullYear(),e.getMonth(),1)}function ru(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}const iu=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/
function su(e){if(null==e)return new Date
if(e instanceof Date)return e
if("string"==typeof e){let t
if(iu.test(e))return function(e){const t=e.split("-").map(Number)
return new Date(t[0],t[1]-1,t[2])}(e)
if(t=Date.parse(e),!isNaN(t))return new Date(t)}return null}const uu=new Date(2e3,0,2)
function cu(e,t,a,l){const o=su(e)??new Date,n=l?.[t]
if("function"==typeof n)return n(o,t,a)
let r={}
switch(t){case"fullDate":r={year:"numeric",month:"long",day:"numeric"}
break
case"fullDateWithWeekday":r={weekday:"long",year:"numeric",month:"long",day:"numeric"}
break
case"normalDate":return`${o.getDate()} ${new Intl.DateTimeFormat(a,{month:"long"}).format(o)}`
case"normalDateWithWeekday":r={weekday:"short",day:"numeric",month:"short"}
break
case"shortDate":r={month:"short",day:"numeric"}
break
case"year":r={year:"numeric"}
break
case"month":r={month:"long"}
break
case"monthShort":r={month:"short"}
break
case"monthAndYear":r={month:"long",year:"numeric"}
break
case"monthAndDate":r={month:"long",day:"numeric"}
break
case"weekday":r={weekday:"long"}
break
case"weekdayShort":r={weekday:"short"}
break
case"dayOfMonth":return new Intl.NumberFormat(a).format(o.getDate())
case"hours12h":r={hour:"numeric",hour12:!0}
break
case"hours24h":r={hour:"numeric",hour12:!1}
break
case"minutes":r={minute:"numeric"}
break
case"seconds":r={second:"numeric"}
break
case"fullTime":case"fullTime12h":r={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}
break
case"fullTime24h":r={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}
break
case"fullDateTime":case"fullDateTime12h":r={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}
break
case"fullDateTime24h":r={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}
break
case"keyboardDate":r={year:"numeric",month:"2-digit",day:"2-digit"}
break
case"keyboardDateTime":case"keyboardDateTime24h":r={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}
break
case"keyboardDateTime12h":r={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}
break
default:r=n??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(a,r).format(o)}function du(e,t){return e.getTime()>t.getTime()}function vu(e,t){return e.getTime()===t.getTime()}function pu(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0)}class fu{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return su(e)}toJsDate(e){return e}toISO(e){return function(e,t){const a=e.toJsDate(t)
return`${a.getFullYear()}-${E(String(a.getMonth()+1),2,"0")}-${E(String(a.getDate()),2,"0")}`}(this,e)}parseISO(e){return function(e){const[t,a,l]=e.split("-").map(Number)
return new Date(t,a-1,l)}(e)}addMinutes(e,t){return function(e,t){const a=new Date(e)
return a.setMinutes(a.getMinutes()+t),a}(e,t)}addHours(e,t){return function(e,t){const a=new Date(e)
return a.setHours(a.getHours()+t),a}(e,t)}addDays(e,t){return function(e,t){const a=new Date(e)
return a.setDate(a.getDate()+t),a}(e,t)}addWeeks(e,t){return function(e,t){const a=new Date(e)
return a.setDate(a.getDate()+7*t),a}(e,t)}addMonths(e,t){return function(e,t){const a=new Date(e)
return a.setDate(1),a.setMonth(a.getMonth()+t),a}(e,t)}getWeekArray(e,t){return function(e,t,a){const l=[]
let o=[]
const n=nu(e),r=ru(e),i=a??ou[t.slice(-2).toUpperCase()]??0,s=(n.getDay()-i+7)%7,u=(r.getDay()-i+7)%7
for(let e=0;e<s;e++){const t=new Date(n)
t.setDate(t.getDate()-(s-e)),o.push(t)}for(let t=1;t<=r.getDate();t++){const a=new Date(e.getFullYear(),e.getMonth(),t)
o.push(a),7===o.length&&(l.push(o),o=[])}for(let e=1;e<7-u;e++){const t=new Date(r)
t.setDate(t.getDate()+e),o.push(t)}return o.length>0&&l.push(o),l}(e,this.locale,t?Number(t):void 0)}startOfWeek(e,t){return function(e,t,a){const l=a??ou[t.slice(-2).toUpperCase()]??0,o=new Date(e)
for(;o.getDay()!==l;)o.setDate(o.getDate()-1)
return o}(e,this.locale,t?Number(t):void 0)}endOfWeek(e){return function(e,t){const a=new Date(e),l=((ou[t.slice(-2).toUpperCase()]??0)+6)%7
for(;a.getDay()!==l;)a.setDate(a.getDate()+1)
return a}(e,this.locale)}startOfMonth(e){return nu(e)}endOfMonth(e){return ru(e)}format(e,t){return cu(e,t,this.locale,this.formats)}isEqual(e,t){return vu(e,t)}isValid(e){return function(e){const t=new Date(e)
return t instanceof Date&&!isNaN(t.getTime())}(e)}isWithinRange(e,t){return function(e,t){return du(e,t[0])&&function(e,t){return e.getTime()<t.getTime()}(e,t[1])}(e,t)}isAfter(e,t){return du(e,t)}isAfterDay(e,t){return function(e,t){return du(pu(e),pu(t))}(e,t)}isBefore(e,t){return!du(e,t)&&!vu(e,t)}isSameDay(e,t){return function(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}(e,t)}isSameMonth(e,t){return function(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}(e,t)}isSameYear(e,t){return function(e,t){return e.getFullYear()===t.getFullYear()}(e,t)}setMinutes(e,t){return function(e,t){const a=new Date(e)
return a.setMinutes(t),a}(e,t)}setHours(e,t){return function(e,t){const a=new Date(e)
return a.setHours(t),a}(e,t)}setMonth(e,t){return function(e,t){const a=new Date(e)
return a.setMonth(t),a}(e,t)}setDate(e,t){return function(e,t){const a=new Date(e)
return a.setDate(t),a}(e,t)}setYear(e,t){return function(e,t){const a=new Date(e)
return a.setFullYear(t),a}(e,t)}getDiff(e,t,a){return function(e,t,a){const l=new Date(e),o=new Date(t)
switch(a){case"years":return l.getFullYear()-o.getFullYear()
case"quarters":return Math.floor((l.getMonth()-o.getMonth()+12*(l.getFullYear()-o.getFullYear()))/4)
case"months":return l.getMonth()-o.getMonth()+12*(l.getFullYear()-o.getFullYear())
case"weeks":return Math.floor((l.getTime()-o.getTime())/6048e5)
case"days":return Math.floor((l.getTime()-o.getTime())/864e5)
case"hours":return Math.floor((l.getTime()-o.getTime())/36e5)
case"minutes":return Math.floor((l.getTime()-o.getTime())/6e4)
case"seconds":return Math.floor((l.getTime()-o.getTime())/1e3)
default:return l.getTime()-o.getTime()}}(e,t,a)}getWeekdays(e){return function(e,t){const a=t??ou[e.slice(-2).toUpperCase()]??0
return p(7).map((t=>{const l=new Date(uu)
return l.setDate(uu.getDate()+a+t),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(l)}))}(this.locale,e?Number(e):void 0)}getYear(e){return function(e){return e.getFullYear()}(e)}getMonth(e){return function(e){return e.getMonth()}(e)}getDate(e){return function(e){return e.getDate()}(e)}getNextMonth(e){return function(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}(e)}getPreviousMonth(e){return function(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}(e)}getHours(e){return function(e){return e.getHours()}(e)}getMinutes(e){return function(e){return e.getMinutes()}(e)}startOfDay(e){return pu(e)}endOfDay(e){return function(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999)}(e)}startOfYear(e){return function(e){return new Date(e.getFullYear(),0,1)}(e)}endOfYear(e){return function(e){return new Date(e.getFullYear(),11,31)}(e)}}const mu=Symbol.for("vuetify:date-options"),gu=Symbol.for("vuetify:date-adapter")
function hu(e,a){const l=t.reactive("function"==typeof e.adapter?new e.adapter({locale:e.locale[a.current.value]??a.current.value,formats:e.formats}):e.adapter)
return t.watch(a.current,(t=>{l.locale=e.locale[t]??t??l.locale})),l}function yu(){const e=t.inject(mu)
if(!e)throw new Error("[Vuetify] Could not find injected date options")
return hu(e,ya())}const bu=ht({modelValue:null,color:String,cancelText:{type:String,default:"$vuetify.confirmEdit.cancel"},okText:{type:String,default:"$vuetify.confirmEdit.ok"}},"VConfirmEdit"),Vu=Bt()({name:"VConfirmEdit",props:bu(),emits:{cancel:()=>!0,save:e=>!0,"update:modelValue":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=sa(e,"modelValue"),r=t.ref()
t.watchEffect((()=>{r.value=structuredClone(t.toRaw(n.value))}))
const{t:i}=ya(),s=t.computed((()=>c(n.value,r.value)))
function u(){n.value=r.value,l("save",r.value)}function d(){r.value=structuredClone(t.toRaw(n.value)),l("cancel")}let v=!1
return Mt((()=>{const a=t.createVNode(t.Fragment,null,[t.createVNode(Fo,{disabled:s.value,variant:"text",color:e.color,onClick:d,text:i(e.cancelText)},null),t.createVNode(Fo,{disabled:s.value,variant:"text",color:e.color,onClick:u,text:i(e.okText)},null)])
return t.createVNode(t.Fragment,null,[o.default?.({model:r,save:u,cancel:d,isPristine:s.value,get actions(){return v=!0,a}}),!v&&a])})),{save:u,cancel:d,isPristine:s}}}),wu=ht({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Su=Symbol.for("vuetify:datatable:expanded")
function ku(e){const a=t.toRef(e,"expandOnClick"),l=sa(e,"expanded",e.expanded,(e=>new Set(e)),(e=>[...e.values()]))
function o(e,t){const a=new Set(l.value)
t?a.add(e.value):a.delete(e.value),l.value=a}function n(e){return l.value.has(e.value)}const r={expand:o,expanded:l,expandOnClick:a,isExpanded:n,toggleExpand:function(e){o(e,!n(e))}}
return t.provide(Su,r),r}function xu(){const e=t.inject(Su)
if(!e)throw new Error("foo")
return e}const Nu=ht({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Cu=Symbol.for("vuetify:data-table-group")
function _u(e){return{groupBy:sa(e,"groupBy")}}function Iu(e){const{disableSort:a,groupBy:l,sortBy:o}=e,n=t.ref(new Set)
function r(e){return n.value.has(e.id)}const i={sortByWithGroups:t.computed((()=>l.value.map((e=>({...e,order:e.order??!1}))).concat(a?.value?[]:o.value))),toggleGroup:function(e){const t=new Set(n.value)
r(e)?t.delete(e.id):t.add(e.id),n.value=t},opened:n,groupBy:l,extractRows:function(e){return function e(t){const a=[]
for(const l of t.items)"type"in l&&"group"===l.type?a.push(...e(l)):a.push(l)
return a}({type:"group",items:e,id:"dummy",key:"dummy",value:"dummy",depth:0})},isGroupOpen:r}
return t.provide(Cu,i),i}function Bu(){const e=t.inject(Cu)
if(!e)throw new Error("Missing group!")
return e}function Pu(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"root"
if(!t.length)return[]
const o=function(e,t){if(!e.length)return[]
const a=new Map
for(const l of e){const e=d(l.raw,t)
a.has(e)||a.set(e,[]),a.get(e).push(l)}return a}(e,t[0]),n=[],r=t.slice(1)
return o.forEach(((e,o)=>{const i=t[0],s=`${l}_${i}_${o}`
n.push({depth:a,id:s,key:i,value:o,items:r.length?Pu(e,r,a+1,s):e,type:"group"})})),n}function Au(e,t){const a=[]
for(const l of e)"type"in l&&"group"===l.type?(null!=l.value&&a.push(l),(t.has(l.id)||null==l.value)&&a.push(...Au(l.items,t))):a.push(l)
return a}function Ru(e,a,l){return{flatItems:t.computed((()=>{if(!a.value.length)return e.value
return Au(Pu(e.value,a.value.map((e=>e.key))),l.value)}))}}function Tu(e){let{page:a,itemsPerPage:l,sortBy:o,groupBy:n,search:r}=e
const i=bt("VDataTable"),s=t.computed((()=>({page:a.value,itemsPerPage:l.value,sortBy:o.value,groupBy:n.value,search:r.value})))
let u=null
t.watch(s,(()=>{c(u,s.value)||(u&&u.search!==s.value.search&&(a.value=1),i.emit("update:options",s.value),u=s.value)}),{deep:!0,immediate:!0})}const Du=ht({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Eu=Symbol.for("vuetify:data-table-pagination")
function Fu(e){return{page:sa(e,"page",void 0,(e=>+(e??1))),itemsPerPage:sa(e,"itemsPerPage",void 0,(e=>+(e??10)))}}function $u(e){const{page:a,itemsPerPage:l,itemsLength:o}=e,n=t.computed((()=>-1===l.value?0:l.value*(a.value-1))),r=t.computed((()=>-1===l.value?o.value:Math.min(o.value,n.value+l.value))),i=t.computed((()=>-1===l.value||0===o.value?1:Math.ceil(o.value/l.value)))
t.watchEffect((()=>{a.value>i.value&&(a.value=i.value)}))
const s={page:a,itemsPerPage:l,startIndex:n,stopIndex:r,pageCount:i,itemsLength:o,nextPage:function(){a.value=R(a.value+1,1,i.value)},prevPage:function(){a.value=R(a.value-1,1,i.value)},setPage:function(e){a.value=R(e,1,i.value)},setItemsPerPage:function(e){l.value=e,a.value=1}}
return t.provide(Eu,s),s}function Mu(e){const a=bt("usePaginatedItems"),{items:l,startIndex:o,stopIndex:n,itemsPerPage:r}=e,i=t.computed((()=>r.value<=0?l.value:l.value.slice(o.value,n.value)))
return t.watch(i,(e=>{a.emit("update:currentItems",e)})),{paginatedItems:i}}const Ou={showSelectAll:!1,allSelected:()=>[],select:e=>{let{items:t,value:a}=e
return new Set(a?[t[0]?.value]:[])},selectAll:e=>{let{selected:t}=e
return t}},Lu={showSelectAll:!0,allSelected:e=>{let{currentPage:t}=e
return t},select:e=>{let{items:t,value:a,selected:l}=e
for(const e of t)a?l.add(e.value):l.delete(e.value)
return l},selectAll:e=>{let{value:t,currentPage:a,selected:l}=e
return Lu.select({items:a,value:t,selected:l})}},zu={showSelectAll:!0,allSelected:e=>{let{allItems:t}=e
return t},select:e=>{let{items:t,value:a,selected:l}=e
for(const e of t)a?l.add(e.value):l.delete(e.value)
return l},selectAll:e=>{let{value:t,allItems:a,selected:l}=e
return zu.select({items:a,value:t,selected:l})}},ju=ht({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:c}},"DataTable-select"),Hu=Symbol.for("vuetify:data-table-selection")
function Wu(e,a){let{allItems:l,currentPage:o}=a
const n=sa(e,"modelValue",e.modelValue,(t=>new Set(A(t).map((t=>l.value.find((a=>e.valueComparator(t,a.value)))?.value??t)))),(e=>[...e.values()])),r=t.computed((()=>l.value.filter((e=>e.selectable)))),i=t.computed((()=>o.value.filter((e=>e.selectable)))),s=t.computed((()=>{if("object"==typeof e.selectStrategy)return e.selectStrategy
switch(e.selectStrategy){case"single":return Ou
case"all":return zu
default:return Lu}}))
function u(e){return A(e).every((e=>n.value.has(e.value)))}function c(e,t){const a=s.value.select({items:e,value:t,selected:new Set(n.value)})
n.value=a}const d=t.computed((()=>n.value.size>0)),v=t.computed((()=>{const e=s.value.allSelected({allItems:r.value,currentPage:i.value})
return!!e.length&&u(e)})),p={toggleSelect:function(e){c([e],!u([e]))},select:c,selectAll:function(e){const t=s.value.selectAll({value:e,allItems:r.value,currentPage:i.value,selected:new Set(n.value)})
n.value=t},isSelected:u,isSomeSelected:function(e){return A(e).some((e=>n.value.has(e.value)))},someSelected:d,allSelected:v,showSelectAll:t.computed((()=>s.value.showSelectAll))}
return t.provide(Hu,p),p}function Uu(){const e=t.inject(Hu)
if(!e)throw new Error("Missing selection!")
return e}const Yu=ht({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Gu=Symbol.for("vuetify:data-table-sort")
function qu(e){return{sortBy:sa(e,"sortBy"),mustSort:t.toRef(e,"mustSort"),multiSort:t.toRef(e,"multiSort")}}function Ku(e){const{sortBy:a,mustSort:l,multiSort:o,page:n}=e
const r={sortBy:a,toggleSort:e=>{if(null==e.key)return
let t=a.value.map((e=>({...e})))??[]
const r=t.find((t=>t.key===e.key))
r?"desc"===r.order?l.value?r.order="asc":t=t.filter((t=>t.key!==e.key)):r.order="desc":t=o.value?[...t,{key:e.key,order:"asc"}]:[{key:e.key,order:"asc"}],a.value=t,n&&(n.value=1)},isSorted:function(e){return!!a.value.find((t=>t.key===e.key))}}
return t.provide(Gu,r),r}function Xu(){const e=t.inject(Gu)
if(!e)throw new Error("Missing sort!")
return e}function Zu(e,a,l,o){const n=ya(),r=t.computed((()=>l.value.length?function(e,t,a,l){const o=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"}),n=e.map((e=>[e,l?.transform?l.transform(e):e]))
return n.sort(((e,a)=>{for(let n=0;n<t.length;n++){let r=!1
const i=t[n].key,s=t[n].order??"asc"
if(!1===s)continue
let u=d(e[1],i),c=d(a[1],i),v=e[0].raw,p=a[0].raw
if("desc"===s&&([u,c]=[c,u],[v,p]=[p,v]),l?.sortRawFunctions?.[i]){const e=l.sortRawFunctions[i](v,p)
if(null==e)continue
if(r=!0,e)return e}if(l?.sortFunctions?.[i]){const e=l.sortFunctions[i](u,c)
if(null==e)continue
if(r=!0,e)return e}if(!r){if(u instanceof Date&&c instanceof Date)return u.getTime()-c.getTime()
if([u,c]=[u,c].map((e=>null!=e?e.toString().toLocaleLowerCase():e)),u!==c)return J(u)&&J(c)?0:J(u)?-1:J(c)?1:isNaN(u)||isNaN(c)?o.compare(u,c):Number(u)-Number(c)}}return 0})).map((e=>{let[t]=e
return t}))}(a.value,l.value,n.current.value,{transform:o?.transform,sortFunctions:{...e.customKeySort,...o?.sortFunctions?.value},sortRawFunctions:o?.sortRawFunctions?.value}):a.value))
return{sortedItems:r}}const Qu=ht({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataIterator-items")
function Ju(e,t){return{type:"item",value:e.returnObject?t:v(t,e.itemValue),selectable:v(t,e.itemSelectable,!0),raw:t}}function ec(e){const a=t.computed((()=>function(e,t){const a=[]
for(const l of t)a.push(Ju(e,l))
return a}(e,e.items)))
return{items:a}}const tc=ht({search:String,loading:Boolean,...yt(),...Qu(),...ju(),...Yu(),...Du({itemsPerPage:5}),...wu(),...Nu(),...$i(),...Pa(),...pl({transition:{component:Wa,hideOnLeave:!0}})},"VDataIterator"),ac=Bt()({name:"VDataIterator",props:tc(),emits:{"update:modelValue":e=>!0,"update:groupBy":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,a){let{slots:l}=a
const o=sa(e,"groupBy"),n=t.toRef(e,"search"),{items:r}=ec(e),{filteredItems:i}=Mi(e,r,n,{transform:e=>e.raw}),{sortBy:s,multiSort:u,mustSort:c}=qu(e),{page:d,itemsPerPage:v}=Fu(e),{toggleSort:p}=Ku({sortBy:s,multiSort:u,mustSort:c,page:d}),{sortByWithGroups:f,opened:m,extractRows:g,isGroupOpen:h,toggleGroup:y}=Iu({groupBy:o,sortBy:s}),{sortedItems:b}=Zu(e,i,f,{transform:e=>e.raw}),{flatItems:V}=Ru(b,o,m),w=t.computed((()=>V.value.length)),{startIndex:S,stopIndex:k,pageCount:x,prevPage:N,nextPage:C,setItemsPerPage:_,setPage:I}=$u({page:d,itemsPerPage:v,itemsLength:w}),{paginatedItems:B}=Mu({items:V,startIndex:S,stopIndex:k,itemsPerPage:v}),P=t.computed((()=>g(B.value))),{isSelected:A,select:R,selectAll:T,toggleSelect:D}=Wu(e,{allItems:r,currentPage:P}),{isExpanded:E,toggleExpand:F}=ku(e)
Tu({page:d,itemsPerPage:v,sortBy:s,groupBy:o,search:n})
const $=t.computed((()=>({page:d.value,itemsPerPage:v.value,sortBy:s.value,pageCount:x.value,toggleSort:p,prevPage:N,nextPage:C,setPage:I,setItemsPerPage:_,isSelected:A,select:R,selectAll:T,toggleSelect:D,isExpanded:E,toggleExpand:F,isGroupOpen:h,toggleGroup:y,items:P.value,groupedItems:B.value})))
return Mt((()=>t.createVNode(e.tag,{class:["v-data-iterator",{"v-data-iterator--loading":e.loading},e.class],style:e.style},{default:()=>[l.header?.($.value),t.createVNode(fl,{transition:e.transition},{default:()=>[e.loading?t.createVNode(so,{key:"loader",name:"v-data-iterator",active:!0},{default:e=>l.loader?.(e)}):t.createVNode("div",{key:"items"},[B.value.length?l.default?.($.value):l["no-data"]?.()])]}),l.footer?.($.value)]}))),{}}})
const lc=ht({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1==0},totalVisible:[Number,String],firstIcon:{type:Ot,default:"$first"},prevIcon:{type:Ot,default:"$prev"},nextIcon:{type:Ot,default:"$next"},lastIcon:{type:Ot,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...bl(),...yt(),...Al(),...wl(),...dl(),...ql(),...Pa({tag:"nav"}),...Sa(),...El({variant:"text"})},"VPagination"),oc=Bt()({name:"VPagination",props:lc(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=sa(e,"modelValue"),{t:r,n:i}=ya(),{isRtl:s}=Va(),{themeClasses:u}=xa(e),{width:c}=Nn(),d=t.shallowRef(-1)
Ct(void 0,{scoped:!0})
const{resizeRef:v}=Jt((e=>{if(!e.length)return
const{target:t,contentRect:a}=e[0],l=t.querySelector(".v-pagination__list > *")
if(!l)return
const o=a.width,n=l.offsetWidth+2*parseFloat(getComputedStyle(l).marginRight)
d.value=h(o,n)})),f=t.computed((()=>parseInt(e.length,10))),m=t.computed((()=>parseInt(e.start,10))),g=t.computed((()=>null!=e.totalVisible?parseInt(e.totalVisible,10):d.value>=0?d.value:h(c.value,58)))
function h(t,a){const l=e.showFirstLastPage?5:3
return Math.max(0,Math.floor(+((t-a*l)/a).toFixed(2)))}const y=t.computed((()=>{if(f.value<=0||isNaN(f.value)||f.value>Number.MAX_SAFE_INTEGER)return[]
if(g.value<=0)return[]
if(1===g.value)return[n.value]
if(f.value<=g.value)return p(f.value,m.value)
const t=g.value%2==0,a=t?g.value/2:Math.floor(g.value/2),l=t?a:a+1,o=f.value-a
if(l-n.value>=0)return[...p(Math.max(1,g.value-1),m.value),e.ellipsis,f.value]
if(n.value-o>=(t?1:0)){const t=g.value-1,a=f.value-t+m.value
return[m.value,e.ellipsis,...p(t,a)]}{const t=Math.max(1,g.value-3),a=1===t?n.value:n.value-Math.ceil(t/2)+m.value
return[m.value,e.ellipsis,...p(t,a),e.ellipsis,f.value]}}))
function V(e,t,a){e.preventDefault(),n.value=t,a&&o(a,t)}const{refs:w,updateRef:S}=function(){const e=t.ref([])
return t.onBeforeUpdate((()=>e.value=[])),{refs:e,updateRef:function(t,a){e.value[a]=t}}}()
Ct({VPaginationBtn:{color:t.toRef(e,"color"),border:t.toRef(e,"border"),density:t.toRef(e,"density"),size:t.toRef(e,"size"),variant:t.toRef(e,"variant"),rounded:t.toRef(e,"rounded"),elevation:t.toRef(e,"elevation")}})
const k=t.computed((()=>y.value.map(((t,a)=>{const l=e=>S(e,a)
if("string"==typeof t)return{isActive:!1,key:`ellipsis-${a}`,page:t,props:{ref:l,ellipsis:!0,icon:!0,disabled:!0}}
{const a=t===n.value
return{isActive:a,key:t,page:i(t),props:{ref:l,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:a?e.activeColor:e.color,"aria-current":a,"aria-label":r(a?e.currentPageAriaLabel:e.pageAriaLabel,t),onClick:e=>V(e,t)}}}})))),x=t.computed((()=>{const t=!!e.disabled||n.value<=m.value,a=!!e.disabled||n.value>=m.value+f.value-1
return{first:e.showFirstLastPage?{icon:s.value?e.lastIcon:e.firstIcon,onClick:e=>V(e,m.value,"first"),disabled:t,"aria-label":r(e.firstAriaLabel),"aria-disabled":t}:void 0,prev:{icon:s.value?e.nextIcon:e.prevIcon,onClick:e=>V(e,n.value-1,"prev"),disabled:t,"aria-label":r(e.previousAriaLabel),"aria-disabled":t},next:{icon:s.value?e.prevIcon:e.nextIcon,onClick:e=>V(e,n.value+1,"next"),disabled:a,"aria-label":r(e.nextAriaLabel),"aria-disabled":a},last:e.showFirstLastPage?{icon:s.value?e.firstIcon:e.lastIcon,onClick:e=>V(e,m.value+f.value-1,"last"),disabled:a,"aria-label":r(e.lastAriaLabel),"aria-disabled":a}:void 0}}))
function N(){const e=n.value-m.value
w.value[e]?.$el.focus()}function C(a){a.key===b.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,t.nextTick(N)):a.key===b.right&&!e.disabled&&n.value<m.value+f.value-1&&(n.value=n.value+1,t.nextTick(N))}return Mt((()=>t.createVNode(e.tag,{ref:v,class:["v-pagination",u.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:C,"data-test":"v-pagination-root"},{default:()=>[t.createVNode("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&t.createVNode("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[l.first?l.first(x.value.first):t.createVNode(Fo,t.mergeProps({_as:"VPaginationBtn"},x.value.first),null)]),t.createVNode("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[l.prev?l.prev(x.value.prev):t.createVNode(Fo,t.mergeProps({_as:"VPaginationBtn"},x.value.prev),null)]),k.value.map(((e,a)=>t.createVNode("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[l.item?l.item(e):t.createVNode(Fo,t.mergeProps({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})]))),t.createVNode("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[l.next?l.next(x.value.next):t.createVNode(Fo,t.mergeProps({_as:"VPaginationBtn"},x.value.next),null)]),e.showFirstLastPage&&t.createVNode("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[l.last?l.last(x.value.last):t.createVNode(Fo,t.mergeProps({_as:"VPaginationBtn"},x.value.last),null)])])]}))),{}}}),nc=ht({prevIcon:{type:Ot,default:"$prev"},nextIcon:{type:Ot,default:"$next"},firstIcon:{type:Ot,default:"$first"},lastIcon:{type:Ot,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),rc=Bt()({name:"VDataTableFooter",props:nc(),setup(e,a){let{slots:l}=a
const{t:o}=ya(),{page:n,pageCount:r,startIndex:i,stopIndex:s,itemsLength:u,itemsPerPage:c,setItemsPerPage:d}=function(){const e=t.inject(Eu)
if(!e)throw new Error("Missing pagination!")
return e}(),v=t.computed((()=>e.itemsPerPageOptions.map((e=>"number"==typeof e?{value:e,title:-1===e?o("$vuetify.dataFooter.itemsPerPageAll"):String(e)}:{...e,title:isNaN(Number(e.title))?o(e.title):e.title}))))
return Mt((()=>{const a=oc.filterProps(e)
return t.createVNode("div",{class:"v-data-table-footer"},[l.prepend?.(),t.createVNode("div",{class:"v-data-table-footer__items-per-page"},[t.createVNode("span",null,[o(e.itemsPerPageText)]),t.createVNode(Ei,{items:v.value,modelValue:c.value,"onUpdate:modelValue":e=>d(Number(e)),density:"compact",variant:"outlined","hide-details":!0},null)]),t.createVNode("div",{class:"v-data-table-footer__info"},[t.createVNode("div",null,[o(e.pageText,u.value?i.value+1:0,s.value,u.value)])]),t.createVNode("div",{class:"v-data-table-footer__pagination"},[t.createVNode(oc,t.mergeProps({modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},a),null)])])})),{}}}),ic=(sc={align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},uc=(e,a)=>{let{slots:l}=a
const o=e.tag??"td"
return t.createVNode(o,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:f(e.height),width:f(e.width),maxWidth:f(e.maxWidth),left:f(e.fixedOffset||null)}},{default:()=>[l.default?.()]})},uc.props=sc,uc)
var sc,uc
const cc=ht({headers:Array},"DataTable-header"),dc=Symbol.for("vuetify:data-table-headers"),vc={title:"",sortable:!1},pc={...vc,width:48}
function fc(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(e.children)for(const a of e.children)fc(a,t)
else t.push(e)
return t}function mc(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set
for(const a of e)a.key&&t.add(a.key),a.children&&mc(a.children,t)
return t}function gc(e){if(e.key)return"data-table-group"===e.key?vc:["data-table-expand","data-table-select"].includes(e.key)?pc:void 0}function hc(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return e.children?Math.max(t,...e.children.map((e=>hc(e,t+1)))):t}function yc(e,t){const a=[]
let l=0
const o=function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((e=>({element:e,priority:0})))
return{enqueue:(t,a)=>{let l=!1
for(let o=0;o<e.length;o++)if(e[o].priority>a){e.splice(o,0,{element:t,priority:a}),l=!0
break}l||e.push({element:t,priority:a})},size:()=>e.length,count:()=>{let t=0
if(!e.length)return 0
const a=Math.floor(e[0].priority)
for(let l=0;l<e.length;l++)Math.floor(e[l].priority)===a&&(t+=1)
return t},dequeue:()=>e.shift()}}(e)
for(;o.size()>0;){let e=o.count()
const n=[]
let r=1
for(;e>0;){const{element:a,priority:i}=o.dequeue(),s=t-l-hc(a)
if(n.push({...a,rowspan:s??1,colspan:a.children?fc(a).length:1}),a.children)for(const e of a.children){const t=i%1+r/Math.pow(10,l+2)
o.enqueue(e,l+s+t)}r+=1,e-=1}l+=1,a.push(n)}return{columns:e.map((e=>fc(e))).flat(),headers:a}}function bc(e){const t=[]
for(const a of e){const e={...gc(a),...a},l=e.key??("string"==typeof e.value?e.value:null),o=e.value??l??null,n={...e,key:l,value:o,sortable:e.sortable??(null!=e.key||!!e.sort),children:e.children?bc(e.children):void 0}
t.push(n)}return t}function Vc(e,a){const l=t.ref([]),o=t.ref([]),n=t.ref({}),r=t.ref({}),i=t.ref({})
t.watchEffect((()=>{const s=(e.headers||Object.keys(e.items[0]??{}).map((e=>({key:e,title:t.capitalize(e)})))).slice(),u=mc(s)
a?.groupBy?.value.length&&!u.has("data-table-group")&&s.unshift({key:"data-table-group",title:"Group"}),a?.showSelect?.value&&!u.has("data-table-select")&&s.unshift({key:"data-table-select"}),a?.showExpand?.value&&!u.has("data-table-expand")&&s.push({key:"data-table-expand"})
const c=bc(s)
!function(e){let t=!1
function a(e){if(e)if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(e.fixed=!0),e.fixed)if(e.children)for(let t=e.children.length-1;t>=0;t--)a(e.children[t],!0)
else t?isNaN(+e.width)&&Me(`Multiple fixed columns should have a static width (key: ${e.key})`):e.lastFixed=!0,t=!0
else if(e.children)for(let t=e.children.length-1;t>=0;t--)a(e.children[t])
else t=!1}for(let t=e.length-1;t>=0;t--)a(e[t])
function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(!e)return t
if(e.children){e.fixedOffset=t
for(const a of e.children)t=l(a,t)}else e.fixed&&(e.fixedOffset=t,t+=parseFloat(e.width||"0")||0)
return t}let o=0
for(const t of e)o=l(t,o)}(c)
const d=Math.max(...c.map((e=>hc(e))))+1,v=yc(c,d)
l.value=v.headers,o.value=v.columns
const p=v.headers.flat(1)
for(const e of p)e.key&&(e.sortable&&(e.sort&&(n.value[e.key]=e.sort),e.sortRaw&&(r.value[e.key]=e.sortRaw)),e.filter&&(i.value[e.key]=e.filter))}))
const s={headers:l,columns:o,sortFunctions:n,sortRawFunctions:r,filterFunctions:i}
return t.provide(dc,s),s}function wc(){const e=t.inject(dc)
if(!e)throw new Error("Missing headers!")
return e}const Sc=ht({color:String,sticky:Boolean,disableSort:Boolean,multiSort:Boolean,sortAscIcon:{type:Ot,default:"$sortAsc"},sortDescIcon:{type:Ot,default:"$sortDesc"},headerProps:{type:Object},...xn(),...ro()},"VDataTableHeaders"),kc=Bt()({name:"VDataTableHeaders",props:Sc(),setup(e,a){let{slots:l}=a
const{t:o}=ya(),{toggleSort:n,sortBy:r,isSorted:i}=Xu(),{someSelected:s,allSelected:u,selectAll:c,showSelectAll:d}=Uu(),{columns:v,headers:p}=wc(),{loaderClasses:m}=io(e)
function g(t,a){if(e.sticky||t.fixed)return{position:"sticky",left:t.fixed?f(t.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${a})`:void 0}}function h(t){const a=r.value.find((e=>e.key===t.key))
return a?"asc"===a.order?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:y,backgroundColorStyles:b}=cl(e,"color"),{displayClasses:V,mobile:w}=Nn(e),S=t.computed((()=>({headers:p.value,columns:v.value,toggleSort:n,isSorted:i,sortBy:r.value,someSelected:s.value,allSelected:u.value,selectAll:c,getSortIcon:h}))),k=t.computed((()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky},V.value,m.value])),x=a=>{let{column:o,x:v,y:p}=a
const m="data-table-select"===o.key||"data-table-expand"===o.key,V=t.mergeProps(e.headerProps??{},o.headerProps??{})
return t.createVNode(ic,t.mergeProps({tag:"th",align:o.align,class:[{"v-data-table__th--sortable":o.sortable&&!e.disableSort,"v-data-table__th--sorted":i(o),"v-data-table__th--fixed":o.fixed},...k.value],style:{width:f(o.width),minWidth:f(o.minWidth),maxWidth:f(o.maxWidth),...g(o,p)},colspan:o.colspan,rowspan:o.rowspan,onClick:o.sortable?()=>n(o):void 0,fixed:o.fixed,nowrap:o.nowrap,lastFixed:o.lastFixed,noPadding:m},V),{default:()=>{const a=`header.${o.key}`,v={column:o,selectAll:c,isSorted:i,toggleSort:n,sortBy:r.value,someSelected:s.value,allSelected:u.value,getSortIcon:h}
return l[a]?l[a](v):"data-table-select"===o.key?l["header.data-table-select"]?.(v)??(d.value&&t.createVNode(tn,{modelValue:u.value,indeterminate:s.value&&!u.value,"onUpdate:modelValue":c},null)):t.createVNode("div",{class:"v-data-table-header__content"},[t.createVNode("span",null,[o.title]),o.sortable&&!e.disableSort&&t.createVNode(Zl,{key:"icon",class:"v-data-table-header__sort-icon",icon:h(o)},null),e.multiSort&&i(o)&&t.createVNode("div",{key:"badge",class:["v-data-table-header__sort-badge",...y.value],style:b.value},[r.value.findIndex((e=>e.key===o.key))+1])])}})},N=()=>{const a=t.mergeProps(e.headerProps??{}??{}),d=t.computed((()=>v.value.filter((t=>t?.sortable&&!e.disableSort)))),f=t.computed((()=>{if(null!=v.value.find((e=>"data-table-select"===e.key)))return u.value?"$checkboxOn":s.value?"$checkboxIndeterminate":"$checkboxOff"}))
return t.createVNode(ic,t.mergeProps({tag:"th",class:[...k.value],colspan:p.value.length+1},a),{default:()=>[t.createVNode("div",{class:"v-data-table-header__content"},[t.createVNode(Ei,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:d.value,label:o("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:f.value,"onClick:append":()=>c(!u.value)},{...l,chip:e=>t.createVNode(jn,{onClick:e.item.raw?.sortable?()=>n(e.item.raw):void 0,onMousedown:e=>{e.preventDefault(),e.stopPropagation()}},{default:()=>[e.item.title,t.createVNode(Zl,{class:["v-data-table__td-sort-icon",i(e.item.raw)&&"v-data-table__td-sort-icon-active"],icon:h(e.item.raw),size:"small"},null)]})})])]})}
Mt((()=>w.value?t.createVNode("tr",null,[t.createVNode(N,null,null)]):t.createVNode(t.Fragment,null,[l.headers?l.headers(S.value):p.value.map(((e,a)=>t.createVNode("tr",null,[e.map(((e,l)=>t.createVNode(x,{column:e,x:l,y:a},null)))]))),e.loading&&t.createVNode("tr",{class:"v-data-table-progress"},[t.createVNode("th",{colspan:v.value.length},[t.createVNode(so,{name:"v-data-table-progress",absolute:!0,active:!0,color:"boolean"==typeof e.loading?void 0:e.loading,indeterminate:!0},{default:l.loader})])])])))}}),xc=ht({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Nc=Bt()({name:"VDataTableGroupHeaderRow",props:xc(),setup(e,a){let{slots:l}=a
const{isGroupOpen:o,toggleGroup:n,extractRows:r}=Bu(),{isSelected:i,isSomeSelected:s,select:u}=Uu(),{columns:c}=wc(),d=t.computed((()=>r([e.item])))
return()=>t.createVNode("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[c.value.map((a=>{if("data-table-group"===a.key){const a=o(e.item)?"$expand":"$next",r=()=>n(e.item)
return l["data-table-group"]?.({item:e.item,count:d.value.length,props:{icon:a,onClick:r}})??t.createVNode(ic,{class:"v-data-table-group-header-row__column"},{default:()=>[t.createVNode(Fo,{size:"small",variant:"text",icon:a,onClick:r},null),t.createVNode("span",null,[e.item.value]),t.createVNode("span",null,[t.createTextVNode("("),d.value.length,t.createTextVNode(")")])]})}if("data-table-select"===a.key){const e=i(d.value),a=s(d.value)&&!e,o=e=>u(d.value,e)
return l["data-table-select"]?.({props:{modelValue:e,indeterminate:a,"onUpdate:modelValue":o}})??t.createVNode("td",null,[t.createVNode(tn,{modelValue:e,indeterminate:a,"onUpdate:modelValue":o},null)])}return t.createVNode("td",null,null)}))])}}),Cc=ht({index:Number,item:Object,cellProps:[Object,Function],onClick:G(),onContextmenu:G(),onDblclick:G(),...xn()},"VDataTableRow"),_c=Bt()({name:"VDataTableRow",props:Cc(),setup(e,a){let{slots:l}=a
const{displayClasses:o,mobile:n}=Nn(e,"v-data-table__tr"),{isSelected:r,toggleSelect:i,someSelected:s,allSelected:u,selectAll:c}=Uu(),{isExpanded:v,toggleExpand:p}=xu(),{toggleSort:f,sortBy:m,isSorted:g}=Xu(),{columns:h}=wc()
Mt((()=>t.createVNode("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},o.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&h.value.map(((a,o)=>{const h=e.item,y=`item.${a.key}`,b=`header.${a.key}`,V={index:e.index,item:h.raw,internalItem:h,value:d(h.columns,a.key),column:a,isSelected:r,toggleSelect:i,isExpanded:v,toggleExpand:p},w={column:a,selectAll:c,isSorted:g,toggleSort:f,sortBy:m.value,someSelected:s.value,allSelected:u.value,getSortIcon:()=>""},S="function"==typeof e.cellProps?e.cellProps({index:V.index,item:V.item,internalItem:V.internalItem,value:V.value,column:a}):e.cellProps,k="function"==typeof a.cellProps?a.cellProps({index:V.index,item:V.item,internalItem:V.internalItem,value:V.value}):a.cellProps
return t.createVNode(ic,t.mergeProps({align:a.align,class:{"v-data-table__td--expanded-row":"data-table-expand"===a.key,"v-data-table__td--select-row":"data-table-select"===a.key},fixed:a.fixed,fixedOffset:a.fixedOffset,lastFixed:a.lastFixed,maxWidth:n.value?void 0:a.maxWidth,noPadding:"data-table-select"===a.key||"data-table-expand"===a.key,nowrap:a.nowrap,width:n.value?void 0:a.width},S,k),{default:()=>{if(l[y]&&!n.value)return l[y]?.(V)
if("data-table-select"===a.key)return l["item.data-table-select"]?.(V)??t.createVNode(tn,{disabled:!h.selectable,modelValue:r([h]),onClick:t.withModifiers((()=>i(h)),["stop"])},null)
if("data-table-expand"===a.key)return l["item.data-table-expand"]?.(V)??t.createVNode(Fo,{icon:v(h)?"$collapse":"$expand",size:"small",variant:"text",onClick:t.withModifiers((()=>p(h)),["stop"])},null)
const e=t.toDisplayString(V.value)
return n.value?t.createVNode(t.Fragment,null,[t.createVNode("div",{class:"v-data-table__td-title"},[l[b]?.(w)??a.title]),t.createVNode("div",{class:"v-data-table__td-value"},[l[y]?.(V)??e])]):e}})}))])))}}),Ic=ht({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...xn()},"VDataTableRows"),Bc=Bt()({name:"VDataTableRows",inheritAttrs:!1,props:Ic(),setup(e,a){let{attrs:l,slots:o}=a
const{columns:n}=wc(),{expandOnClick:r,toggleExpand:i,isExpanded:s}=xu(),{isSelected:u,toggleSelect:c}=Uu(),{toggleGroup:d,isGroupOpen:v}=Bu(),{t:p}=ya(),{mobile:f}=Nn(e)
return Mt((()=>!e.loading||e.items.length&&!o.loading?e.loading||e.items.length||e.hideNoData?t.createVNode(t.Fragment,null,[e.items.map(((a,p)=>{if("group"===a.type){const e={index:p,item:a,columns:n.value,isExpanded:s,toggleExpand:i,isSelected:u,toggleSelect:c,toggleGroup:d,isGroupOpen:v}
return o["group-header"]?o["group-header"](e):t.createVNode(Nc,t.mergeProps({key:`group-header_${a.id}`,item:a},Tt(l,":group-header",(()=>e))),o)}const m={index:p,item:a.raw,internalItem:a,columns:n.value,isExpanded:s,toggleExpand:i,isSelected:u,toggleSelect:c},g={...m,props:t.mergeProps({key:`item_${a.key??a.index}`,onClick:r.value?()=>{i(a)}:void 0,index:p,item:a,cellProps:e.cellProps,mobile:f.value},Tt(l,":row",(()=>m)),"function"==typeof e.rowProps?e.rowProps({item:m.item,index:m.index,internalItem:m.internalItem}):e.rowProps)}
return t.createVNode(t.Fragment,{key:g.props.key},[o.item?o.item(g):t.createVNode(_c,g.props,o),s(a)&&o["expanded-row"]?.(m)])}))]):t.createVNode("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[t.createVNode("td",{colspan:n.value.length},[o["no-data"]?.()??p(e.noDataText)])]):t.createVNode("tr",{class:"v-data-table-rows-loading",key:"loading"},[t.createVNode("td",{colspan:n.value.length},[o.loading?.()??p(e.loadingText)])]))),{}}}),Pc=ht({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...yt(),...Al(),...Pa(),...Sa()},"VTable"),Ac=Bt()({name:"VTable",props:Pc(),setup(e,a){let{slots:l,emit:o}=a
const{themeClasses:n}=xa(e),{densityClasses:r}=Rl(e)
return Mt((()=>t.createVNode(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!l.top,"v-table--has-bottom":!!l.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>[l.top?.(),l.default?t.createVNode("div",{class:"v-table__wrapper",style:{height:f(e.height)}},[t.createVNode("table",null,[l.default()])]):l.wrapper?.(),l.bottom?.()]}))),{}}}),Rc=ht({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items")
function Tc(e,t,a){return t.map(((t,l)=>function(e,t,a,l){const o=e.returnObject?t:v(t,e.itemValue),n=v(t,e.itemSelectable,!0),r=l.reduce(((e,a)=>(null!=a.key&&(e[a.key]=v(t,a.value)),e)),{})
return{type:"item",key:e.returnObject?v(t,e.itemValue):o,index:a,value:o,selectable:n,columns:r,raw:t}}(e,t,l,a)))}function Dc(e,a){return{items:t.computed((()=>Tc(e,e.items,a.value)))}}const Ec=ht({...Ic(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...wu(),...Nu(),...cc(),...Rc(),...ju(),...Yu(),...Sc(),...Pc()},"DataTable"),Fc=ht({...Du(),...Ec(),...$i(),...nc()},"VDataTable"),$c=Bt()({name:"VDataTable",props:Fc(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{groupBy:n}=_u(e),{sortBy:r,multiSort:i,mustSort:s}=qu(e),{page:u,itemsPerPage:c}=Fu(e),{disableSort:d}=t.toRefs(e),{columns:v,headers:p,sortFunctions:f,sortRawFunctions:m,filterFunctions:g}=Vc(e,{groupBy:n,showSelect:t.toRef(e,"showSelect"),showExpand:t.toRef(e,"showExpand")}),{items:h}=Dc(e,v),y=t.toRef(e,"search"),{filteredItems:b}=Mi(e,h,y,{transform:e=>e.columns,customKeyFilter:g}),{toggleSort:V}=Ku({sortBy:r,multiSort:i,mustSort:s,page:u}),{sortByWithGroups:w,opened:S,extractRows:k,isGroupOpen:x,toggleGroup:N}=Iu({groupBy:n,sortBy:r,disableSort:d}),{sortedItems:C}=Zu(e,b,w,{transform:e=>({...e.raw,...e.columns}),sortFunctions:f,sortRawFunctions:m}),{flatItems:_}=Ru(C,n,S),I=t.computed((()=>_.value.length)),{startIndex:B,stopIndex:P,pageCount:A,setItemsPerPage:R}=$u({page:u,itemsPerPage:c,itemsLength:I}),{paginatedItems:T}=Mu({items:_,startIndex:B,stopIndex:P,itemsPerPage:c}),D=t.computed((()=>k(T.value))),{isSelected:E,select:F,selectAll:$,toggleSelect:M,someSelected:O,allSelected:L}=Wu(e,{allItems:h,currentPage:D}),{isExpanded:z,toggleExpand:j}=ku(e)
Tu({page:u,itemsPerPage:c,sortBy:r,groupBy:n,search:y}),Ct({VDataTableRows:{hideNoData:t.toRef(e,"hideNoData"),noDataText:t.toRef(e,"noDataText"),loading:t.toRef(e,"loading"),loadingText:t.toRef(e,"loadingText")}})
const H=t.computed((()=>({page:u.value,itemsPerPage:c.value,sortBy:r.value,pageCount:A.value,toggleSort:V,setItemsPerPage:R,someSelected:O.value,allSelected:L.value,isSelected:E,select:F,selectAll:$,toggleSelect:M,isExpanded:z,toggleExpand:j,isGroupOpen:x,toggleGroup:N,items:D.value.map((e=>e.raw)),internalItems:D.value,groupedItems:T.value,columns:v.value,headers:p.value})))
return Mt((()=>{const a=rc.filterProps(e),n=kc.filterProps(e),r=Bc.filterProps(e),i=Ac.filterProps(e)
return t.createVNode(Ac,t.mergeProps({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},i),{top:()=>o.top?.(H.value),default:()=>o.default?o.default(H.value):t.createVNode(t.Fragment,null,[o.colgroup?.(H.value),!e.hideDefaultHeader&&t.createVNode("thead",{key:"thead"},[t.createVNode(kc,n,o)]),o.thead?.(H.value),!e.hideDefaultBody&&t.createVNode("tbody",null,[o["body.prepend"]?.(H.value),o.body?o.body(H.value):t.createVNode(Bc,t.mergeProps(l,r,{items:T.value}),o),o["body.append"]?.(H.value)]),o.tbody?.(H.value),o.tfoot?.(H.value)]),bottom:()=>o.bottom?o.bottom(H.value):!e.hideDefaultFooter&&t.createVNode(t.Fragment,null,[t.createVNode(mr,null,null),t.createVNode(rc,a,{prepend:o["footer.prepend"]})])})})),{}}}),Mc=ht({...Ec(),...Nu(),...Ii(),...$i()},"VDataTableVirtual"),Oc=Bt()({name:"VDataTableVirtual",props:Mc(),emits:{"update:modelValue":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{groupBy:n}=_u(e),{sortBy:r,multiSort:i,mustSort:s}=qu(e),{disableSort:u}=t.toRefs(e),{columns:c,headers:d,filterFunctions:v,sortFunctions:p,sortRawFunctions:m}=Vc(e,{groupBy:n,showSelect:t.toRef(e,"showSelect"),showExpand:t.toRef(e,"showExpand")}),{items:g}=Dc(e,c),h=t.toRef(e,"search"),{filteredItems:y}=Mi(e,g,h,{transform:e=>e.columns,customKeyFilter:v}),{toggleSort:b}=Ku({sortBy:r,multiSort:i,mustSort:s}),{sortByWithGroups:V,opened:w,extractRows:S,isGroupOpen:k,toggleGroup:x}=Iu({groupBy:n,sortBy:r,disableSort:u}),{sortedItems:N}=Zu(e,y,V,{transform:e=>({...e.raw,...e.columns}),sortFunctions:p,sortRawFunctions:m}),{flatItems:C}=Ru(N,n,w),_=t.computed((()=>S(C.value))),{isSelected:I,select:B,selectAll:P,toggleSelect:A,someSelected:R,allSelected:T}=Wu(e,{allItems:_,currentPage:_}),{isExpanded:D,toggleExpand:E}=ku(e),{containerRef:F,markerRef:$,paddingTop:M,paddingBottom:O,computedItems:L,handleItemResize:z,handleScroll:j,handleScrollend:H}=Bi(e,C),W=t.computed((()=>L.value.map((e=>e.raw))))
Tu({sortBy:r,page:t.shallowRef(1),itemsPerPage:t.shallowRef(-1),groupBy:n,search:h}),Ct({VDataTableRows:{hideNoData:t.toRef(e,"hideNoData"),noDataText:t.toRef(e,"noDataText"),loading:t.toRef(e,"loading"),loadingText:t.toRef(e,"loadingText")}})
const U=t.computed((()=>({sortBy:r.value,toggleSort:b,someSelected:R.value,allSelected:T.value,isSelected:I,select:B,selectAll:P,toggleSelect:A,isExpanded:D,toggleExpand:E,isGroupOpen:k,toggleGroup:x,items:_.value.map((e=>e.raw)),internalItems:_.value,groupedItems:C.value,columns:c.value,headers:d.value})))
Mt((()=>{const a=kc.filterProps(e),n=Bc.filterProps(e),r=Ac.filterProps(e)
return t.createVNode(Ac,t.mergeProps({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},r),{top:()=>o.top?.(U.value),wrapper:()=>t.createVNode("div",{ref:F,onScrollPassive:j,onScrollend:H,class:"v-table__wrapper",style:{height:f(e.height)}},[t.createVNode("table",null,[o.colgroup?.(U.value),!e.hideDefaultHeader&&t.createVNode("thead",{key:"thead"},[t.createVNode(kc,t.mergeProps(a,{sticky:e.fixedHeader}),o)]),!e.hideDefaultBody&&t.createVNode("tbody",null,[t.createVNode("tr",{ref:$,style:{height:f(M.value),border:0}},[t.createVNode("td",{colspan:c.value.length,style:{height:0,border:0}},null)]),o["body.prepend"]?.(U.value),t.createVNode(Bc,t.mergeProps(l,n,{items:W.value}),{...o,item:e=>t.createVNode(_i,{key:e.internalItem.index,renderless:!0,"onUpdate:height":t=>z(e.internalItem.index,t)},{default:a=>{let{itemRef:l}=a
return o.item?.({...e,itemRef:l})??t.createVNode(_c,t.mergeProps(e.props,{ref:l,key:e.internalItem.index,index:e.internalItem.index}),o)}})}),o["body.append"]?.(U.value),t.createVNode("tr",{style:{height:f(O.value),border:0}},[t.createVNode("td",{colspan:c.value.length,style:{height:0,border:0}},null)])])])]),bottom:()=>o.bottom?.(U.value)})}))}}),Lc=ht({itemsLength:{type:[Number,String],required:!0},...Du(),...Ec(),...nc()},"VDataTableServer"),zc=Bt()({name:"VDataTableServer",props:Lc(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{groupBy:n}=_u(e),{sortBy:r,multiSort:i,mustSort:s}=qu(e),{page:u,itemsPerPage:c}=Fu(e),{disableSort:d}=t.toRefs(e),v=t.computed((()=>parseInt(e.itemsLength,10))),{columns:p,headers:f}=Vc(e,{groupBy:n,showSelect:t.toRef(e,"showSelect"),showExpand:t.toRef(e,"showExpand")}),{items:m}=Dc(e,p),{toggleSort:g}=Ku({sortBy:r,multiSort:i,mustSort:s,page:u}),{opened:h,isGroupOpen:y,toggleGroup:b,extractRows:V}=Iu({groupBy:n,sortBy:r,disableSort:d}),{pageCount:w,setItemsPerPage:S}=$u({page:u,itemsPerPage:c,itemsLength:v}),{flatItems:k}=Ru(m,n,h),{isSelected:x,select:N,selectAll:C,toggleSelect:_,someSelected:I,allSelected:B}=Wu(e,{allItems:m,currentPage:m}),{isExpanded:P,toggleExpand:A}=ku(e),R=t.computed((()=>V(m.value)))
Tu({page:u,itemsPerPage:c,sortBy:r,groupBy:n,search:t.toRef(e,"search")}),t.provide("v-data-table",{toggleSort:g,sortBy:r}),Ct({VDataTableRows:{hideNoData:t.toRef(e,"hideNoData"),noDataText:t.toRef(e,"noDataText"),loading:t.toRef(e,"loading"),loadingText:t.toRef(e,"loadingText")}})
const T=t.computed((()=>({page:u.value,itemsPerPage:c.value,sortBy:r.value,pageCount:w.value,toggleSort:g,setItemsPerPage:S,someSelected:I.value,allSelected:B.value,isSelected:x,select:N,selectAll:C,toggleSelect:_,isExpanded:P,toggleExpand:A,isGroupOpen:y,toggleGroup:b,items:R.value.map((e=>e.raw)),internalItems:R.value,groupedItems:k.value,columns:p.value,headers:f.value})))
Mt((()=>{const a=rc.filterProps(e),n=kc.filterProps(e),r=Bc.filterProps(e),i=Ac.filterProps(e)
return t.createVNode(Ac,t.mergeProps({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},i),{top:()=>o.top?.(T.value),default:()=>o.default?o.default(T.value):t.createVNode(t.Fragment,null,[o.colgroup?.(T.value),!e.hideDefaultHeader&&t.createVNode("thead",{key:"thead",class:"v-data-table__thead",role:"rowgroup"},[t.createVNode(kc,t.mergeProps(n,{sticky:e.fixedHeader}),o)]),o.thead?.(T.value),!e.hideDefaultBody&&t.createVNode("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[o["body.prepend"]?.(T.value),o.body?o.body(T.value):t.createVNode(Bc,t.mergeProps(l,r,{items:k.value}),o),o["body.append"]?.(T.value)]),o.tbody?.(T.value),o.tfoot?.(T.value)]),bottom:()=>o.bottom?o.bottom(T.value):!e.hideDefaultFooter&&t.createVNode(t.Fragment,null,[t.createVNode(mr,null,null),t.createVNode(rc,a,{prepend:o["footer.prepend"]})])})}))}}),jc=ht({fluid:{type:Boolean,default:!1},...yt(),...ol(),...Pa()},"VContainer"),Hc=Bt()({name:"VContainer",props:jc(),setup(e,a){let{slots:l}=a
const{rtlClasses:o}=Va(),{dimensionStyles:n}=nl(e)
return Mt((()=>t.createVNode(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},o.value,e.class],style:[n.value,e.style]},l))),{}}}),Wc=hn.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}),Uc=hn.reduce(((e,a)=>(e["offset"+t.capitalize(a)]={type:[String,Number],default:null},e)),{}),Yc=hn.reduce(((e,a)=>(e["order"+t.capitalize(a)]={type:[String,Number],default:null},e)),{}),Gc={col:Object.keys(Wc),offset:Object.keys(Uc),order:Object.keys(Yc)}
function qc(e,t,a){let l=e
if(null!=a&&!1!==a){if(t){l+=`-${t.replace(e,"")}`}return"col"===e&&(l="v-"+l),"col"!==e||""!==a&&!0!==a?(l+=`-${a}`,l.toLowerCase()):l.toLowerCase()}}const Kc=["auto","start","end","center","baseline","stretch"],Xc=ht({cols:{type:[Boolean,String,Number],default:!1},...Wc,offset:{type:[String,Number],default:null},...Uc,order:{type:[String,Number],default:null},...Yc,alignSelf:{type:String,default:null,validator:e=>Kc.includes(e)},...yt(),...Pa()},"VCol"),Zc=Bt()({name:"VCol",props:Xc(),setup(e,a){let{slots:l}=a
const o=t.computed((()=>{const t=[]
let a
for(a in Gc)Gc[a].forEach((l=>{const o=e[l],n=qc(a,l,o)
n&&t.push(n)}))
const l=t.some((e=>e.startsWith("v-col-")))
return t.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}))
return()=>t.h(e.tag,{class:[o.value,e.class],style:e.style},l.default?.())}}),Qc=["start","end","center"],Jc=["space-between","space-around","space-evenly"]
function ed(e,a){return hn.reduce(((l,o)=>(l[e+t.capitalize(o)]=a(),l)),{})}const td=[...Qc,"baseline","stretch"],ad=e=>td.includes(e),ld=ed("align",(()=>({type:String,default:null,validator:ad}))),od=[...Qc,...Jc],nd=e=>od.includes(e),rd=ed("justify",(()=>({type:String,default:null,validator:nd}))),id=[...Qc,...Jc,"stretch"],sd=e=>id.includes(e),ud=ed("alignContent",(()=>({type:String,default:null,validator:sd}))),cd={align:Object.keys(ld),justify:Object.keys(rd),alignContent:Object.keys(ud)},dd={align:"align",justify:"justify",alignContent:"align-content"}
function vd(e,t,a){let l=dd[e]
if(null!=a){if(t){l+=`-${t.replace(e,"")}`}return l+=`-${a}`,l.toLowerCase()}}const pd=ht({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ad},...ld,justify:{type:String,default:null,validator:nd},...rd,alignContent:{type:String,default:null,validator:sd},...ud,...yt(),...Pa()},"VRow"),fd=Bt()({name:"VRow",props:pd(),setup(e,a){let{slots:l}=a
const o=t.computed((()=>{const t=[]
let a
for(a in cd)cd[a].forEach((l=>{const o=e[l],n=vd(a,l,o)
n&&t.push(n)}))
return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t}))
return()=>t.h(e.tag,{class:["v-row",o.value,e.class],style:e.style},l.default?.())}}),md=Pt("v-spacer","div","VSpacer"),gd=ht({active:{type:[String,Array],default:void 0},disabled:{type:[Boolean,String,Array],default:!1},nextIcon:{type:Ot,default:"$next"},prevIcon:{type:Ot,default:"$prev"},modeIcon:{type:Ot,default:"$subgroup"},text:String,viewMode:{type:String,default:"month"}},"VDatePickerControls"),hd=Bt()({name:"VDatePickerControls",props:gd(),emits:{"click:year":()=>!0,"click:month":()=>!0,"click:prev":()=>!0,"click:next":()=>!0,"click:text":()=>!0},setup(e,a){let{emit:l}=a
const o=t.computed((()=>Array.isArray(e.disabled)?e.disabled.includes("text"):!!e.disabled)),n=t.computed((()=>Array.isArray(e.disabled)?e.disabled.includes("mode"):!!e.disabled)),r=t.computed((()=>Array.isArray(e.disabled)?e.disabled.includes("prev"):!!e.disabled)),i=t.computed((()=>Array.isArray(e.disabled)?e.disabled.includes("next"):!!e.disabled))
function s(){l("click:prev")}function u(){l("click:next")}function c(){l("click:year")}function d(){l("click:month")}return Mt((()=>t.createVNode("div",{class:["v-date-picker-controls"]},[t.createVNode(Fo,{class:"v-date-picker-controls__month-btn",disabled:o.value,text:e.text,variant:"text",rounded:!0,onClick:d},null),t.createVNode(Fo,{key:"mode-btn",class:"v-date-picker-controls__mode-btn",disabled:n.value,density:"comfortable",icon:e.modeIcon,variant:"text",onClick:c},null),t.createVNode(md,{key:"mode-spacer"},null),t.createVNode("div",{key:"month-buttons",class:"v-date-picker-controls__month"},[t.createVNode(Fo,{disabled:r.value,icon:e.prevIcon,variant:"text",onClick:s},null),t.createVNode(Fo,{disabled:i.value,icon:e.nextIcon,variant:"text",onClick:u},null)])]))),{}}}),yd=ht({appendIcon:String,color:String,header:String,transition:String,onClick:G()},"VDatePickerHeader"),bd=Bt()({name:"VDatePickerHeader",props:yd(),emits:{click:()=>!0,"click:append":()=>!0},setup(e,a){let{emit:l,slots:o}=a
const{backgroundColorClasses:n,backgroundColorStyles:r}=cl(e,"color")
function i(){l("click")}function s(){l("click:append")}return Mt((()=>{const a=!(!o.default&&!e.header),l=!(!o.append&&!e.appendIcon)
return t.createVNode("div",{class:["v-date-picker-header",{"v-date-picker-header--clickable":!!e.onClick},n.value],style:r.value,onClick:i},[o.prepend&&t.createVNode("div",{key:"prepend",class:"v-date-picker-header__prepend"},[o.prepend()]),a&&t.createVNode(fl,{key:"content",name:e.transition},{default:()=>[t.createVNode("div",{key:e.header,class:"v-date-picker-header__content"},[o.default?.()??e.header])]}),l&&t.createVNode("div",{class:"v-date-picker-header__append"},[o.append?t.createVNode(ll,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VBtn:{icon:e.appendIcon,variant:"text"}}},{default:()=>[o.append?.()]}):t.createVNode(Fo,{key:"append-btn",icon:e.appendIcon,variant:"text",onClick:s},null)])])})),{}}}),Vd=ht({allowedDates:[Array,Function],disabled:Boolean,displayValue:null,modelValue:Array,month:[Number,String],max:null,min:null,showAdjacentMonths:Boolean,year:[Number,String],weekdays:{type:Array,default:()=>[0,1,2,3,4,5,6]},weeksInMonth:{type:String,default:"dynamic"},firstDayOfWeek:[Number,String]},"calendar")
function wd(e){const a=yu(),l=sa(e,"modelValue",[],(e=>A(e))),o=t.computed((()=>e.displayValue?a.date(e.displayValue):l.value.length>0?a.date(l.value[0]):e.min?a.date(e.min):Array.isArray(e.allowedDates)?a.date(e.allowedDates[0]):a.date())),n=sa(e,"year",void 0,(e=>{const t=null!=e?Number(e):a.getYear(o.value)
return a.startOfYear(a.setYear(a.date(),t))}),(e=>a.getYear(e))),r=sa(e,"month",void 0,(e=>{const t=null!=e?Number(e):a.getMonth(o.value),l=a.setYear(a.startOfMonth(a.date()),a.getYear(n.value))
return a.setMonth(l,t)}),(e=>a.getMonth(e))),i=t.computed((()=>{const t=Number(e.firstDayOfWeek??0)
return e.weekdays.map((e=>(e+t)%7))})),s=t.computed((()=>{const t=a.getWeekArray(r.value,e.firstDayOfWeek),l=t.flat()
if("static"===e.weeksInMonth&&l.length<42){const e=l[l.length-1]
let o=[]
for(let n=1;n<=42-l.length;n++)o.push(a.addDays(e,n)),n%7==0&&(t.push(o),o=[])}return t}))
function u(t,o){return t.filter((e=>i.value.includes(a.toJsDate(e).getDay()))).map(((t,n)=>{const i=a.toISO(t),s=!a.isSameMonth(t,r.value),u=a.isSameDay(t,a.startOfMonth(r.value)),c=a.isSameDay(t,a.endOfMonth(r.value)),d=a.isSameDay(t,r.value)
return{date:t,isoDate:i,formatted:a.format(t,"keyboardDate"),year:a.getYear(t),month:a.getMonth(t),isDisabled:p(t),isWeekStart:n%7==0,isWeekEnd:n%7==6,isToday:a.isSameDay(t,o),isAdjacent:s,isHidden:s&&!e.showAdjacentMonths,isStart:u,isSelected:l.value.some((e=>a.isSameDay(t,e))),isEnd:c,isSame:d,localized:a.format(t,"dayOfMonth")}}))}const c=t.computed((()=>{const t=a.startOfWeek(o.value,e.firstDayOfWeek),l=[]
for(let e=0;e<=6;e++)l.push(a.addDays(t,e))
return u(l,a.date())})),d=t.computed((()=>u(s.value.flat(),a.date()))),v=t.computed((()=>s.value.map((e=>e.length?function(e,t){const a=e.toJsDate(t)
let l=a.getFullYear(),o=new Date(l,0,1)
if(a<o)l-=1,o=new Date(l,0,1)
else{const e=new Date(l+1,0,1)
a>=e&&(l+=1,o=e)}const n=Math.abs(a.getTime()-o.getTime()),r=Math.ceil(n/864e5)
return Math.floor(r/7)+1}(a,e[0]):null))))
function p(t){if(e.disabled)return!0
const l=a.date(t)
return!(!e.min||!a.isAfter(a.date(e.min),l))||(!(!e.max||!a.isAfter(l,a.date(e.max)))||(Array.isArray(e.allowedDates)&&e.allowedDates.length>0?!e.allowedDates.some((e=>a.isSameDay(a.date(e),l))):"function"==typeof e.allowedDates&&!e.allowedDates(l)))}return{displayValue:o,daysInMonth:d,daysInWeek:c,genDays:u,model:l,weeksInMonth:s,weekDays:i,weekNumbers:v}}const Sd=ht({color:String,hideWeekdays:Boolean,multiple:[Boolean,Number,String],showWeek:Boolean,transition:{type:String,default:"picker-transition"},reverseTransition:{type:String,default:"picker-reverse-transition"},...Vd()},"VDatePickerMonth"),kd=Bt()({name:"VDatePickerMonth",props:Sd(),emits:{"update:modelValue":e=>!0,"update:month":e=>!0,"update:year":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=t.ref(),{daysInMonth:r,model:i,weekNumbers:s}=wd(e),u=yu(),c=t.shallowRef(),d=t.shallowRef(),v=t.shallowRef(!1),p=t.computed((()=>v.value?e.reverseTransition:e.transition))
"range"===e.multiple&&i.value.length>0&&(c.value=i.value[0],i.value.length>1&&(d.value=i.value[i.value.length-1]))
const f=t.computed((()=>{const t=["number","string"].includes(typeof e.multiple)?Number(e.multiple):1/0
return i.value.length>=t}))
function m(t){"range"===e.multiple?function(e){const t=u.startOfDay(e)
if(0===i.value.length?c.value=void 0:1===i.value.length&&(c.value=i.value[0],d.value=void 0),c.value)if(d.value)c.value=e,d.value=void 0,i.value=[c.value]
else{if(u.isSameDay(t,c.value))return c.value=void 0,void(i.value=[])
u.isBefore(t,c.value)?(d.value=u.endOfDay(c.value),c.value=t):d.value=u.endOfDay(t)
const e=u.getDiff(d.value,c.value,"days"),a=[c.value]
for(let t=1;t<e;t++){const e=u.addDays(c.value,t)
a.push(e)}a.push(d.value),i.value=a}else c.value=t,i.value=[c.value]}(t):e.multiple?function(e){const t=i.value.findIndex((t=>u.isSameDay(t,e)))
if(-1===t)i.value=[...i.value,e]
else{const e=[...i.value]
e.splice(t,1),i.value=e}}(t):i.value=[t]}return t.watch(r,((e,t)=>{t&&(v.value=u.isBefore(e[0].date,t[0].date))})),()=>t.createVNode("div",{class:"v-date-picker-month"},[e.showWeek&&t.createVNode("div",{key:"weeks",class:"v-date-picker-month__weeks"},[!e.hideWeekdays&&t.createVNode("div",{key:"hide-week-days",class:"v-date-picker-month__day"},[t.createTextVNode(" ")]),s.value.map((e=>t.createVNode("div",{class:["v-date-picker-month__day","v-date-picker-month__day--adjacent"]},[e])))]),t.createVNode(fl,{name:p.value},{default:()=>[t.createVNode("div",{ref:n,key:r.value[0].date?.toString(),class:"v-date-picker-month__days"},[!e.hideWeekdays&&u.getWeekdays(e.firstDayOfWeek).map((e=>t.createVNode("div",{class:["v-date-picker-month__day","v-date-picker-month__weekday"]},[e]))),r.value.map(((a,l)=>{const n={props:{onClick:()=>m(a.date)},item:a,i:l}
return f.value&&!a.isSelected&&(a.isDisabled=!0),t.createVNode("div",{class:["v-date-picker-month__day",{"v-date-picker-month__day--adjacent":a.isAdjacent,"v-date-picker-month__day--hide-adjacent":a.isHidden,"v-date-picker-month__day--selected":a.isSelected,"v-date-picker-month__day--week-end":a.isWeekEnd,"v-date-picker-month__day--week-start":a.isWeekStart}],"data-v-date":a.isDisabled?void 0:a.isoDate},[(e.showAdjacentMonths||!a.isAdjacent)&&t.createVNode(ll,{defaults:{VBtn:{class:"v-date-picker-month__day-btn",color:!a.isSelected&&!a.isToday||a.isDisabled?void 0:e.color,disabled:a.isDisabled,icon:!0,ripple:!1,text:a.localized,variant:a.isDisabled?a.isToday?"outlined":"text":a.isToday&&!a.isSelected?"outlined":"flat",onClick:()=>m(a.date)}}},{default:()=>[o.day?.(n)??t.createVNode(Fo,n.props,null)]})])}))])]})])}}),xd=ht({color:String,height:[String,Number],min:null,max:null,modelValue:Number,year:Number},"VDatePickerMonths"),Nd=Bt()({name:"VDatePickerMonths",props:xd(),emits:{"update:modelValue":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=yu(),r=sa(e,"modelValue"),i=t.computed((()=>{let t=n.startOfYear(n.date())
return e.year&&(t=n.setYear(t,e.year)),p(12).map((a=>{const l=n.format(t,"monthShort"),o=!!(e.min&&n.isAfter(n.startOfMonth(n.date(e.min)),t)||e.max&&n.isAfter(t,n.startOfMonth(n.date(e.max))))
return t=n.getNextMonth(t),{isDisabled:o,text:l,value:a}}))}))
return t.watchEffect((()=>{r.value=r.value??n.getMonth(n.date())})),Mt((()=>t.createVNode("div",{class:"v-date-picker-months",style:{height:f(e.height)}},[t.createVNode("div",{class:"v-date-picker-months__content"},[i.value.map(((a,n)=>{const i={active:r.value===n,color:r.value===n?e.color:void 0,disabled:a.isDisabled,rounded:!0,text:a.text,variant:r.value===a.value?"flat":"text",onClick:()=>function(e){if(r.value===e)return void l("update:modelValue",r.value)
r.value=e}(n)}
return o.month?.({month:a,i:n,props:i})??t.createVNode(Fo,t.mergeProps({key:"month"},i),null)}))])]))),{}}}),Cd=ht({color:String,height:[String,Number],min:null,max:null,modelValue:Number},"VDatePickerYears"),_d=Bt()({name:"VDatePickerYears",props:Cd(),emits:{"update:modelValue":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=yu(),r=sa(e,"modelValue"),i=t.computed((()=>{const t=n.getYear(n.date())
let a=t-100,l=t+52
e.min&&(a=n.getYear(n.date(e.min))),e.max&&(l=n.getYear(n.date(e.max)))
let o=n.startOfYear(n.date())
return o=n.setYear(o,a),p(l-a+1,a).map((e=>{const t=n.format(o,"year")
return o=n.setYear(o,n.getYear(o)+1),{text:t,value:e}}))}))
t.watchEffect((()=>{r.value=r.value??n.getYear(n.date())}))
const s=le()
return t.onMounted((async()=>{await t.nextTick(),s.el?.scrollIntoView({block:"center"})})),Mt((()=>t.createVNode("div",{class:"v-date-picker-years",style:{height:f(e.height)}},[t.createVNode("div",{class:"v-date-picker-years__content"},[i.value.map(((a,n)=>{const i={ref:r.value===a.value?s:void 0,active:r.value===a.value,color:r.value===a.value?e.color:void 0,rounded:!0,text:a.text,variant:r.value===a.value?"flat":"text",onClick:()=>{r.value!==a.value?r.value=a.value:l("update:modelValue",r.value)}}
return o.year?.({year:a,i:n,props:i})??t.createVNode(Fo,t.mergeProps({key:"month"},i),null)}))])]))),{}}}),Id=Pt("v-picker-title"),Bd=ht({bgColor:String,landscape:Boolean,title:String,hideHeader:Boolean,...Js()},"VPicker"),Pd=Bt()({name:"VPicker",props:Bd(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=cl(t.toRef(e,"color"))
return Mt((()=>{const a=eu.filterProps(e),r=!(!e.title&&!l.title)
return t.createVNode(eu,t.mergeProps(a,{color:e.bgColor,class:["v-picker",{"v-picker--landscape":e.landscape,"v-picker--with-actions":!!l.actions},e.class],style:e.style}),{default:()=>[!e.hideHeader&&t.createVNode("div",{key:"header",class:[o.value],style:[n.value]},[r&&t.createVNode(Id,{key:"picker-title"},{default:()=>[l.title?.()??e.title]}),l.header&&t.createVNode("div",{class:"v-picker__header"},[l.header()])]),t.createVNode("div",{class:"v-picker__body"},[l.default?.()]),l.actions&&t.createVNode(ll,{defaults:{VBtn:{slim:!0,variant:"text"}}},{default:()=>[t.createVNode("div",{class:"v-picker__actions"},[l.actions()])]})]})})),{}}}),Ad=ht({header:{type:String,default:"$vuetify.datePicker.header"},...gd(),...Sd({weeksInMonth:"static"}),...x(xd(),["modelValue"]),...x(Cd(),["modelValue"]),...Bd({title:"$vuetify.datePicker.title"}),modelValue:null},"VDatePicker"),Rd=Bt()({name:"VDatePicker",props:Ad(),emits:{"update:modelValue":e=>!0,"update:month":e=>!0,"update:year":e=>!0,"update:viewMode":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=yu(),{t:r}=ya(),i=sa(e,"modelValue",void 0,(e=>A(e)),(t=>e.multiple?t:t[0])),s=sa(e,"viewMode"),u=t.computed((()=>{const e=n.date(i.value?.[0])
return e&&n.isValid(e)?e:n.date()})),c=t.ref(Number(e.month??n.getMonth(n.startOfMonth(u.value)))),d=t.ref(Number(e.year??n.getYear(n.startOfYear(n.setMonth(u.value,c.value))))),v=t.shallowRef(!1),p=t.computed((()=>e.multiple&&i.value.length>1?r("$vuetify.datePicker.itemsSelected",i.value.length):i.value[0]&&n.isValid(i.value[0])?n.format(n.date(i.value[0]),"normalDateWithWeekday"):r(e.header))),f=t.computed((()=>{let e=n.date()
return e=n.setDate(e,1),e=n.setMonth(e,c.value),e=n.setYear(e,d.value),n.format(e,"monthAndYear")})),m=t.computed((()=>`date-picker-header${v.value?"-reverse":""}-transition`)),g=t.computed((()=>{const t=n.date(e.min)
return e.min&&n.isValid(t)?t:null})),h=t.computed((()=>{const t=n.date(e.max)
return e.max&&n.isValid(t)?t:null})),y=t.computed((()=>{if(e.disabled)return!0
const t=[]
if("month"!==s.value)t.push("prev","next")
else{let e=n.date()
if(e=n.setYear(e,d.value),e=n.setMonth(e,c.value),g.value){const a=n.addDays(n.startOfMonth(e),-1)
n.isAfter(g.value,a)&&t.push("prev")}if(h.value){const a=n.addDays(n.endOfMonth(e),1)
n.isAfter(a,h.value)&&t.push("next")}}return t}))
function b(){c.value<11?c.value++:(d.value++,c.value=0,C(d.value)),N(c.value)}function V(){c.value>0?c.value--:(d.value--,c.value=11,C(d.value)),N(c.value)}function w(){s.value="month"}function S(){s.value="months"===s.value?"month":"months"}function k(){s.value="year"===s.value?"month":"year"}function N(e){"months"===s.value&&S(),l("update:month",e)}function C(e){"year"===s.value&&k(),l("update:year",e)}return t.watch(i,((e,t)=>{const a=A(t),l=A(e)
if(!l.length)return
const o=n.date(a[a.length-1]),r=n.date(l[l.length-1]),i=n.getMonth(r),s=n.getYear(r)
i!==c.value&&(c.value=i,N(c.value)),s!==d.value&&(d.value=s,C(d.value)),v.value=n.isBefore(o,r)})),Mt((()=>{const a=Pd.filterProps(e),l=hd.filterProps(e),n=bd.filterProps(e),u=kd.filterProps(e),v=x(Nd.filterProps(e),["modelValue"]),_=x(_d.filterProps(e),["modelValue"]),I={header:p.value,transition:m.value}
return t.createVNode(Pd,t.mergeProps(a,{class:["v-date-picker",`v-date-picker--${s.value}`,{"v-date-picker--show-week":e.showWeek},e.class],style:e.style}),{title:()=>o.title?.()??t.createVNode("div",{class:"v-date-picker__title"},[r(e.title)]),header:()=>o.header?t.createVNode(ll,{defaults:{VDatePickerHeader:{...I}}},{default:()=>[o.header?.(I)]}):t.createVNode(bd,t.mergeProps({key:"header"},n,I,{onClick:"month"!==s.value?w:void 0}),{...o,default:void 0}),default:()=>t.createVNode(t.Fragment,null,[t.createVNode(hd,t.mergeProps(l,{disabled:y.value,text:f.value,"onClick:next":b,"onClick:prev":V,"onClick:month":S,"onClick:year":k}),null),t.createVNode(Wa,{hideOnLeave:!0},{default:()=>["months"===s.value?t.createVNode(Nd,t.mergeProps({key:"date-picker-months"},v,{modelValue:c.value,"onUpdate:modelValue":[e=>c.value=e,N],min:g.value,max:h.value,year:d.value}),null):"year"===s.value?t.createVNode(_d,t.mergeProps({key:"date-picker-years"},_,{modelValue:d.value,"onUpdate:modelValue":[e=>d.value=e,C],min:g.value,max:h.value}),null):t.createVNode(kd,t.mergeProps({key:"date-picker-month"},u,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,month:c.value,"onUpdate:month":[e=>c.value=e,N],year:d.value,"onUpdate:year":[e=>d.value=e,C],min:g.value,max:h.value}),null)]})]),actions:o.actions})})),{}}}),Td=ht({actionText:String,bgColor:String,color:String,icon:Ot,image:String,justify:{type:String,default:"center"},headline:String,title:String,text:String,textWidth:{type:[Number,String],default:500},href:String,to:String,...yt(),...ol(),...ql({size:void 0}),...Sa()},"VEmptyState"),Dd=Bt()({name:"VEmptyState",props:Td(),emits:{"click:action":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const{themeClasses:n}=xa(e),{backgroundColorClasses:r,backgroundColorStyles:i}=cl(t.toRef(e,"bgColor")),{dimensionStyles:s}=nl(e),{displayClasses:u}=Nn()
function c(e){l("click:action",e)}return Mt((()=>{const a=!(!o.actions&&!e.actionText),l=!(!o.headline&&!e.headline),d=!(!o.title&&!e.title),v=!(!o.text&&!e.text),p=!!(o.media||e.image||e.icon),m=e.size||(e.image?200:96)
return t.createVNode("div",{class:["v-empty-state",{[`v-empty-state--${e.justify}`]:!0},n.value,r.value,u.value,e.class],style:[i.value,s.value,e.style]},[p&&t.createVNode("div",{key:"media",class:"v-empty-state__media"},[o.media?t.createVNode(ll,{key:"media-defaults",defaults:{VImg:{src:e.image,height:m},VIcon:{size:m,icon:e.icon}}},{default:()=>[o.media()]}):t.createVNode(t.Fragment,null,[e.image?t.createVNode(yl,{key:"image",src:e.image,height:m},null):e.icon?t.createVNode(Zl,{key:"icon",color:e.color,size:m,icon:e.icon},null):void 0])]),l&&t.createVNode("div",{key:"headline",class:"v-empty-state__headline"},[o.headline?.()??e.headline]),d&&t.createVNode("div",{key:"title",class:"v-empty-state__title"},[o.title?.()??e.title]),v&&t.createVNode("div",{key:"text",class:"v-empty-state__text",style:{maxWidth:f(e.textWidth)}},[o.text?.()??e.text]),o.default&&t.createVNode("div",{key:"content",class:"v-empty-state__content"},[o.default()]),a&&t.createVNode("div",{key:"actions",class:"v-empty-state__actions"},[t.createVNode(ll,{defaults:{VBtn:{class:"v-empty-state__action-btn",color:e.color??"surface-variant",text:e.actionText}}},{default:()=>[o.actions?.({props:{onClick:c}})??t.createVNode(Fo,{onClick:c},null)]})])])})),{}}}),Ed=Symbol.for("vuetify:v-expansion-panel"),Fd=ht({...yt(),...Zr()},"VExpansionPanelText"),$d=Bt()({name:"VExpansionPanelText",props:Fd(),setup(e,a){let{slots:l}=a
const o=t.inject(Ed)
if(!o)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel")
const{hasContent:n,onAfterLeave:r}=Qr(e,o.isSelected)
return Mt((()=>t.createVNode(el,{onAfterLeave:r},{default:()=>[t.withDirectives(t.createVNode("div",{class:["v-expansion-panel-text",e.class],style:e.style},[l.default&&n.value&&t.createVNode("div",{class:"v-expansion-panel-text__wrapper"},[l.default?.()])]),[[t.vShow,o.isSelected.value]])]}))),{}}}),Md=ht({color:String,expandIcon:{type:Ot,default:"$expand"},collapseIcon:{type:Ot,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...yt(),...ol()},"VExpansionPanelTitle"),Od=Bt()({name:"VExpansionPanelTitle",directives:{Ripple:Do},props:Md(),setup(e,a){let{slots:l}=a
const o=t.inject(Ed)
if(!o)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel")
const{backgroundColorClasses:n,backgroundColorStyles:r}=cl(e,"color"),{dimensionStyles:i}=nl(e),s=t.computed((()=>({collapseIcon:e.collapseIcon,disabled:o.disabled.value,expanded:o.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}))),u=t.computed((()=>o.isSelected.value?e.collapseIcon:e.expandIcon))
return Mt((()=>t.withDirectives(t.createVNode("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":o.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},n.value,e.class],style:[r.value,i.value,e.style],type:"button",tabindex:o.disabled.value?-1:void 0,disabled:o.disabled.value,"aria-expanded":o.isSelected.value,onClick:e.readonly?void 0:o.toggle},[t.createVNode("span",{class:"v-expansion-panel-title__overlay"},null),l.default?.(s.value),!e.hideActions&&t.createVNode(ll,{defaults:{VIcon:{icon:u.value}}},{default:()=>[t.createVNode("span",{class:"v-expansion-panel-title__icon"},[l.actions?.(s.value)??t.createVNode(Zl,null,null)])]})]),[[t.resolveDirective("ripple"),e.ripple]]))),{}}}),Ld=ht({title:String,text:String,bgColor:String,...wl(),...Ll(),...dl(),...Pa(),...Md(),...Fd()},"VExpansionPanel"),zd=Bt()({name:"VExpansionPanel",props:Ld(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:l}=a
const o=zl(e,Ed),{backgroundColorClasses:n,backgroundColorStyles:r}=cl(e,"bgColor"),{elevationClasses:i}=Sl(e),{roundedClasses:s}=vl(e),u=t.computed((()=>o?.disabled.value||e.disabled)),c=t.computed((()=>o.group.items.value.reduce(((e,t,a)=>(o.group.selected.value.includes(t.id)&&e.push(a),e)),[]))),d=t.computed((()=>{const e=o.group.items.value.findIndex((e=>e.id===o.id))
return!o.isSelected.value&&c.value.some((t=>t-e==1))})),v=t.computed((()=>{const e=o.group.items.value.findIndex((e=>e.id===o.id))
return!o.isSelected.value&&c.value.some((t=>t-e==-1))}))
return t.provide(Ed,o),Mt((()=>{const a=!(!l.text&&!e.text),c=!(!l.title&&!e.title),p=Od.filterProps(e),f=$d.filterProps(e)
return t.createVNode(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":o.isSelected.value,"v-expansion-panel--before-active":d.value,"v-expansion-panel--after-active":v.value,"v-expansion-panel--disabled":u.value},s.value,n.value,e.class],style:[r.value,e.style]},{default:()=>[t.createVNode("div",{class:["v-expansion-panel__shadow",...i.value]},null),t.createVNode(ll,{defaults:{VExpansionPanelTitle:{...p},VExpansionPanelText:{...f}}},{default:()=>[c&&t.createVNode(Od,{key:"title"},{default:()=>[l.title?l.title():e.title]}),a&&t.createVNode($d,{key:"text"},{default:()=>[l.text?l.text():e.text]}),l.default?.()]})]})})),{groupItem:o}}}),jd=["default","accordion","inset","popout"],Hd=ht({flat:Boolean,...Ol(),...S(Ld(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...Sa(),...yt(),...Pa(),variant:{type:String,default:"default",validator:e=>jd.includes(e)}},"VExpansionPanels"),Wd=Bt()({name:"VExpansionPanels",props:Hd(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{next:o,prev:n}=jl(e,Ed),{themeClasses:r}=xa(e),i=t.computed((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`))
return Ct({VExpansionPanel:{bgColor:t.toRef(e,"bgColor"),collapseIcon:t.toRef(e,"collapseIcon"),color:t.toRef(e,"color"),eager:t.toRef(e,"eager"),elevation:t.toRef(e,"elevation"),expandIcon:t.toRef(e,"expandIcon"),focusable:t.toRef(e,"focusable"),hideActions:t.toRef(e,"hideActions"),readonly:t.toRef(e,"readonly"),ripple:t.toRef(e,"ripple"),rounded:t.toRef(e,"rounded"),static:t.toRef(e,"static")}}),Mt((()=>t.createVNode(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},r.value,i.value,e.class],style:e.style},{default:()=>[l.default?.({prev:n,next:o})]}))),{next:o,prev:n}}}),Ud=ht({app:Boolean,appear:Boolean,extended:Boolean,layout:Boolean,offset:Boolean,modelValue:{type:Boolean,default:!0},...x(Eo({active:!0}),["location"]),...la(),...ao(),...pl({transition:"fab-transition"})},"VFab"),Yd=Bt()({name:"VFab",props:Ud(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=sa(e,"modelValue"),n=t.shallowRef(56),r=t.ref(),{resizeRef:i}=Jt((e=>{e.length&&(n.value=e[0].target.clientHeight)})),s=t.computed((()=>e.app||e.absolute)),u=t.computed((()=>!!s.value&&(e.location?.split(" ").shift()??"bottom"))),c=t.computed((()=>!!s.value&&(e.location?.split(" ")[1]??"end")))
ia((()=>e.app),(()=>{const a=na({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:u,layoutSize:t.computed((()=>e.layout?n.value+24:0)),elementSize:t.computed((()=>n.value+24)),active:t.computed((()=>e.app&&o.value)),absolute:t.toRef(e,"absolute")})
t.watchEffect((()=>{r.value=a.layoutItemStyles.value}))}))
const d=t.ref()
return Mt((()=>{const a=Fo.filterProps(e)
return t.createVNode("div",{ref:d,class:["v-fab",{"v-fab--absolute":e.absolute,"v-fab--app":!!e.app,"v-fab--extended":e.extended,"v-fab--offset":e.offset,[`v-fab--${u.value}`]:s.value,[`v-fab--${c.value}`]:s.value},e.class],style:[e.app?{...r.value}:{height:"inherit",width:void 0},e.style]},[t.createVNode("div",{class:"v-fab__container"},[t.createVNode(fl,{appear:e.appear,transition:e.transition},{default:()=>[t.withDirectives(t.createVNode(Fo,t.mergeProps({ref:i},a,{active:void 0,location:void 0}),l),[[t.vShow,e.active]])]})])])})),{}}}),Gd=ht({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>"boolean"==typeof e||[1e3,1024].includes(Number(e))},...pn({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>A(e).every((e=>null!=e&&"object"==typeof e))},...Vi({clearable:!0})},"VFileInput"),qd=Bt()({name:"VFileInput",inheritAttrs:!1,props:Gd(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{t:r}=ya(),i=sa(e,"modelValue",e.modelValue,(e=>A(e)),(t=>!e.multiple&&Array.isArray(t)?t[0]:t)),{isFocused:s,focus:u,blur:c}=rn(e),d=t.computed((()=>"boolean"!=typeof e.showSize?e.showSize:void 0)),v=t.computed((()=>(i.value??[]).reduce(((e,t)=>{let{size:a=0}=t
return e+a}),0))),p=t.computed((()=>F(v.value,d.value))),f=t.computed((()=>(i.value??[]).map((t=>{const{name:a="",size:l=0}=t
return e.showSize?`${a} (${F(l,d.value)})`:a})))),m=t.computed((()=>{const t=i.value?.length??0
return e.showSize?r(e.counterSizeString,t,p.value):r(e.counterString,t)})),g=t.ref(),h=t.ref(),y=t.ref(),b=t.computed((()=>s.value||e.active)),V=t.computed((()=>["plain","underlined"].includes(e.variant)))
function w(){y.value!==document.activeElement&&y.value?.focus(),s.value||u()}function S(e){y.value?.click()}function k(e){o("mousedown:control",e)}function x(e){y.value?.click(),o("click:control",e)}function N(a){a.stopPropagation(),w(),t.nextTick((()=>{i.value=[],K(e["onClick:clear"],a)}))}return t.watch(i,(e=>{(!Array.isArray(e)||!e.length)&&y.value&&(y.value.value="")})),Mt((()=>{const a=!(!n.counter&&!e.counter),o=!(!a&&!n.details),[r,u]=P(l),{modelValue:d,...C}=fn.filterProps(e),_=Si(e)
return t.createVNode(fn,t.mergeProps({ref:g,modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-file-input--hide":e.hideInput,"v-input--plain-underlined":V.value},e.class],style:e.style,"onClick:prepend":S},r,C,{centerAffix:!V.value,focused:s.value}),{...n,default:a=>{let{id:l,isDisabled:o,isDirty:r,isReadonly:d,isValid:m}=a
return t.createVNode(wi,t.mergeProps({ref:h,"prepend-icon":e.prependIcon,onMousedown:k,onClick:x,"onClick:clear":N,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},_,{id:l.value,active:b.value||r.value,dirty:r.value||e.dirty,disabled:o.value,focused:s.value,error:!1===m.value}),{...n,default:a=>{let{props:{class:l,...r}}=a
return t.createVNode(t.Fragment,null,[t.createVNode("input",t.mergeProps({ref:y,type:"file",readonly:d.value,disabled:o.value,multiple:e.multiple,name:e.name,onClick:e=>{e.stopPropagation(),d.value&&e.preventDefault(),w()},onChange:e=>{if(!e.target)return
const t=e.target
i.value=[...t.files??[]]},onFocus:w,onBlur:c},r,u),null),t.createVNode("div",{class:l},[!!i.value?.length&&!e.hideInput&&(n.selection?n.selection({fileNames:f.value,totalBytes:v.value,totalBytesReadable:p.value}):e.chips?f.value.map((e=>t.createVNode(jn,{key:e,size:"small",text:e},null))):f.value.join(", "))])])}})},details:o?l=>t.createVNode(t.Fragment,null,[n.details?.(l),a&&t.createVNode(t.Fragment,null,[t.createVNode("span",null,null),t.createVNode(gi,{active:!!i.value?.length,value:m.value,disabled:e.disabled},n.counter)])]):void 0})})),vi({},g,h,y)}}),Kd=ht({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...bl(),...yt(),...wl(),...la(),...dl(),...Pa({tag:"footer"}),...Sa()},"VFooter"),Xd=Bt()({name:"VFooter",props:Kd(),setup(e,a){let{slots:l}=a
const o=t.ref(),{themeClasses:n}=xa(e),{backgroundColorClasses:r,backgroundColorStyles:i}=cl(t.toRef(e,"color")),{borderClasses:s}=Vl(e),{elevationClasses:u}=Sl(e),{roundedClasses:c}=vl(e),d=t.shallowRef(32),{resizeRef:v}=Jt((e=>{e.length&&(d.value=e[0].target.clientHeight)})),p=t.computed((()=>"auto"===e.height?d.value:parseInt(e.height,10)))
return ia((()=>e.app),(()=>{const a=na({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.computed((()=>"bottom")),layoutSize:p,elementSize:t.computed((()=>"auto"===e.height?void 0:p.value)),active:t.computed((()=>e.app)),absolute:t.toRef(e,"absolute")})
t.watchEffect((()=>{o.value=a.layoutItemStyles.value}))})),Mt((()=>t.createVNode(e.tag,{ref:v,class:["v-footer",n.value,r.value,s.value,u.value,c.value,e.class],style:[i.value,e.app?o.value:{height:f(e.height)},e.style]},l))),{}}}),Zd=ht({...yt(),...un()},"VForm"),Qd=Bt()({name:"VForm",props:Zd(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=function(e){const a=sa(e,"modelValue"),l=t.computed((()=>e.disabled)),o=t.computed((()=>e.readonly)),n=t.shallowRef(!1),r=t.ref([]),i=t.ref([])
return t.watch(r,(()=>{let e=0,t=0
const l=[]
for(const a of r.value)!1===a.isValid?(t++,l.push({id:a.id,errorMessages:a.errorMessages})):!0===a.isValid&&e++
i.value=l,a.value=!(t>0)&&(e===r.value.length||null)}),{deep:!0,flush:"post"}),t.provide(sn,{register:e=>{let{id:a,vm:l,validate:o,reset:n,resetValidation:i}=e
r.value.some((e=>e.id===a))&&$e(`Duplicate input name "${a}"`),r.value.push({id:a,validate:o,reset:n,resetValidation:i,vm:t.markRaw(l),isValid:null,errorMessages:[]})},unregister:e=>{r.value=r.value.filter((t=>t.id!==e))},update:(e,t,a)=>{const l=r.value.find((t=>t.id===e))
l&&(l.isValid=t,l.errorMessages=a)},isDisabled:l,isReadonly:o,isValidating:n,isValid:a,items:r,validateOn:t.toRef(e,"validateOn")}),{errors:i,isDisabled:l,isReadonly:o,isValidating:n,isValid:a,items:r,validate:async function(){const t=[]
let a=!0
i.value=[],n.value=!0
for(const l of r.value){const o=await l.validate()
if(o.length>0&&(a=!1,t.push({id:l.id,errorMessages:o})),!a&&e.fastFail)break}return i.value=t,n.value=!1,{valid:a,errors:i.value}},reset:function(){r.value.forEach((e=>e.reset()))},resetValidation:function(){r.value.forEach((e=>e.resetValidation()))}}}(e),r=t.ref()
function i(e){e.preventDefault(),n.reset()}function s(e){const t=e,a=n.validate()
t.then=a.then.bind(a),t.catch=a.catch.bind(a),t.finally=a.finally.bind(a),o("submit",t),t.defaultPrevented||a.then((e=>{let{valid:t}=e
t&&r.value?.submit()})),t.preventDefault()}return Mt((()=>t.createVNode("form",{ref:r,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:i,onSubmit:s},[l.default?.(n)]))),vi(n,r)}}),Jd=ht({disabled:Boolean,modelValue:{type:Boolean,default:null},...Ur()},"VHover"),ev=Bt()({name:"VHover",props:Jd(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t
const l=sa(e,"modelValue"),{runOpenDelay:o,runCloseDelay:n}=Yr(e,(t=>!e.disabled&&(l.value=t)))
return()=>a.default?.({isHovering:l.value,props:{onMouseenter:o,onMouseleave:n}})}}),tv=ht({color:String,direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},side:{type:String,default:"end",validator:e=>["start","end","both"].includes(e)},mode:{type:String,default:"intersect",validator:e=>["intersect","manual"].includes(e)},margin:[Number,String],loadMoreText:{type:String,default:"$vuetify.infiniteScroll.loadMore"},emptyText:{type:String,default:"$vuetify.infiniteScroll.empty"},...ol(),...Pa()},"VInfiniteScroll"),av=It({name:"VInfiniteScrollIntersect",props:{side:{type:String,required:!0},rootMargin:String},emits:{intersect:(e,t)=>!0},setup(e,a){let{emit:l}=a
const{intersectionRef:o,isIntersecting:n}=Ql()
return t.watch(n,(async t=>{l("intersect",e.side,t)})),Mt((()=>t.createVNode("div",{class:"v-infinite-scroll-intersect",style:{"--v-infinite-margin-size":e.rootMargin},ref:o},[t.createTextVNode(" ")]))),{}}}),lv=Bt()({name:"VInfiniteScroll",props:tv(),emits:{load:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.ref(),r=t.shallowRef("ok"),i=t.shallowRef("ok"),s=t.computed((()=>f(e.margin))),u=t.shallowRef(!1)
function c(t){if(!n.value)return
const a="vertical"===e.direction?"scrollTop":"scrollLeft"
n.value[a]=t}function d(){if(!n.value)return 0
const t="vertical"===e.direction?"scrollHeight":"scrollWidth"
return n.value[t]}function v(e,t){"start"===e?r.value=t:"end"===e&&(i.value=t)}t.onMounted((()=>{n.value&&("start"===e.side?c(d()):"both"===e.side&&c(d()/2-function(){if(!n.value)return 0
const t="vertical"===e.direction?"clientHeight":"clientWidth"
return n.value[t]}()/2))}))
let p=0
function m(e,t){u.value=t,u.value&&g(e)}function g(a){if("manual"!==e.mode&&!u.value)return
const l=function(e){return"start"===e?r.value:i.value}(a)
n.value&&!["empty","loading"].includes(l)&&(p=d(),v(a,"loading"),o("load",{side:a,done:function(l){v(a,l),t.nextTick((()=>{"empty"!==l&&"error"!==l&&("ok"===l&&"start"===a&&c(d()-p+function(){if(!n.value)return 0
const t="vertical"===e.direction?"scrollTop":"scrollLeft"
return n.value[t]}()),"manual"!==e.mode&&t.nextTick((()=>{window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{g(a)}))}))}))})))}))}}))}const{t:h}=ya()
function y(a,o){if(e.side!==a&&"both"!==e.side)return
const n=()=>g(a),r={side:a,props:{onClick:n,color:e.color}}
return"error"===o?l.error?.(r):"empty"===o?l.empty?.(r)??t.createVNode("div",null,[h(e.emptyText)]):"manual"===e.mode?"loading"===o?l.loading?.(r)??t.createVNode(eo,{indeterminate:!0,color:e.color},null):l["load-more"]?.(r)??t.createVNode(Fo,{variant:"outlined",color:e.color,onClick:n},{default:()=>[h(e.loadMoreText)]}):l.loading?.(r)??t.createVNode(eo,{indeterminate:!0,color:e.color},null)}const{dimensionStyles:b}=nl(e)
Mt((()=>{const a=e.tag,o="start"===e.side||"both"===e.side,u="end"===e.side||"both"===e.side,c="intersect"===e.mode
return t.createVNode(a,{ref:n,class:["v-infinite-scroll",`v-infinite-scroll--${e.direction}`,{"v-infinite-scroll--start":o,"v-infinite-scroll--end":u}],style:b.value},{default:()=>[t.createVNode("div",{class:"v-infinite-scroll__side"},[y("start",r.value)]),o&&c&&t.createVNode(av,{key:"start",side:"start",onIntersect:m,rootMargin:s.value},null),l.default?.(),u&&c&&t.createVNode(av,{key:"end",side:"end",onIntersect:m,rootMargin:s.value},null),t.createVNode("div",{class:"v-infinite-scroll__side"},[y("end",i.value)])]})}))}}),ov=Symbol.for("vuetify:v-item-group"),nv=ht({...yt(),...Ol({selectedClass:"v-item--selected"}),...Pa(),...Sa()},"VItemGroup"),rv=Bt()({name:"VItemGroup",props:nv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=xa(e),{isSelected:n,select:r,next:i,prev:s,selected:u}=jl(e,ov)
return()=>t.createVNode(e.tag,{class:["v-item-group",o.value,e.class],style:e.style},{default:()=>[l.default?.({isSelected:n,select:r,next:i,prev:s,selected:u.value})]})}}),iv=Bt()({name:"VItem",props:Ll(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t
const{isSelected:l,select:o,toggle:n,selectedClass:r,value:i,disabled:s}=zl(e,ov)
return()=>a.default?.({isSelected:l.value,selectedClass:r.value,select:o,toggle:n,value:i.value,disabled:s.value})}}),sv=Pt("v-kbd"),uv=ht({...yt(),...ol(),...aa()},"VLayout"),cv=Bt()({name:"VLayout",props:uv(),setup(e,a){let{slots:l}=a
const{layoutClasses:o,layoutStyles:n,getLayoutItem:r,items:i,layoutRef:s}=ra(e),{dimensionStyles:u}=nl(e)
return Mt((()=>t.createVNode("div",{ref:s,class:[o.value,e.class],style:[u.value,n.value,e.style]},[l.default?.()]))),{getLayoutItem:r,items:i}}}),dv=ht({position:{type:String,required:!0},size:{type:[Number,String],default:300},modelValue:Boolean,...yt(),...la()},"VLayoutItem"),vv=Bt()({name:"VLayoutItem",props:dv(),setup(e,a){let{slots:l}=a
const{layoutItemStyles:o}=na({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.toRef(e,"position"),elementSize:t.toRef(e,"size"),layoutSize:t.toRef(e,"size"),active:t.toRef(e,"modelValue"),absolute:t.toRef(e,"absolute")})
return()=>t.createVNode("div",{class:["v-layout-item",e.class],style:[o.value,e.style]},[l.default?.()])}}),pv=ht({modelValue:Boolean,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},...yt(),...ol(),...Pa(),...pl({transition:"fade-transition"})},"VLazy"),fv=Bt()({name:"VLazy",directives:{intersect:gl},props:pv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{dimensionStyles:o}=nl(e),n=sa(e,"modelValue")
function r(e){n.value||(n.value=e)}return Mt((()=>t.withDirectives(t.createVNode(e.tag,{class:["v-lazy",e.class],style:[o.value,e.style]},{default:()=>[n.value&&t.createVNode(fl,{transition:e.transition,appear:!0},{default:()=>[l.default?.()]})]}),[[t.resolveDirective("intersect"),{handler:r,options:e.options},null]]))),{}}}),mv=ht({locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...yt()},"VLocaleProvider"),gv=Bt()({name:"VLocaleProvider",props:mv(),setup(e,a){let{slots:l}=a
const{rtlClasses:o}=ba(e)
return Mt((()=>t.createVNode("div",{class:["v-locale-provider",o.value,e.class],style:e.style},[l.default?.()]))),{}}}),hv=ht({scrollable:Boolean,...yt(),...ol(),...Pa({tag:"main"})},"VMain"),yv=Bt()({name:"VMain",props:hv(),setup(e,a){let{slots:l}=a
const{dimensionStyles:o}=nl(e),{mainStyles:n}=oa(),{ssrBootStyles:r}=_l()
return Mt((()=>t.createVNode(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,r.value,o.value,e.style]},{default:()=>[e.scrollable?t.createVNode("div",{class:"v-main__scroller"},[l.default?.()]):l.default?.()]}))),{}}})
const bv=100,Vv=20
function wv(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Sv(e){if(e.length<2)return 0
if(2===e.length)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t)
let t=0
for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue
const l=wv(t),o=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t)
t+=(o-l)*Math.abs(o),a===e.length-1&&(t*=.5)}return 1e3*wv(t)}function kv(){const e={}
return{addMovement:function(t){Array.from(t.changedTouches).forEach((a=>{(e[a.identifier]??(e[a.identifier]=new H(Vv))).push([t.timeStamp,a])}))},endTouch:function(t){Array.from(t.changedTouches).forEach((t=>{delete e[t.identifier]}))},getVelocity:function(t){const a=e[t]?.values().reverse()
if(!a)throw new Error(`No samples for touch id ${t}`)
const l=a[0],o=[],n=[]
for(const e of a){if(l[0]-e[0]>bv)break
o.push({t:e[0],d:e[1].clientX}),n.push({t:e[0],d:e[1].clientY})}return{x:Sv(o),y:Sv(n),get direction(){const{x:e,y:t}=this,[a,l]=[Math.abs(e),Math.abs(t)]
return a>l&&e>=0?"right":a>l&&e<=0?"left":l>a&&t>=0?"down":l>a&&t<=0?"up":function(){throw new Error}()}}}}}function xv(){throw new Error}const Nv=["start","end","left","right","top","bottom"],Cv=ht({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Nv.includes(e)},sticky:Boolean,...bl(),...yt(),...Ur(),...xn({mobile:null}),...wl(),...la(),...dl(),...Pa({tag:"nav"}),...Sa()},"VNavigationDrawer"),_v=Bt()({name:"VNavigationDrawer",props:Cv(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{isRtl:r}=Va(),{themeClasses:i}=xa(e),{borderClasses:s}=Vl(e),{backgroundColorClasses:u,backgroundColorStyles:c}=cl(t.toRef(e,"color")),{elevationClasses:d}=Sl(e),{displayClasses:v,mobile:p}=Nn(e),{roundedClasses:m}=vl(e),g=po(),h=sa(e,"modelValue",null,(e=>!!e)),{ssrBootStyles:y}=_l(),{scopeId:b}=Jr(),V=t.ref(),w=t.shallowRef(!1),{runOpenDelay:S,runCloseDelay:k}=Yr(e,(e=>{w.value=e})),x=t.computed((()=>e.rail&&e.expandOnHover&&w.value?Number(e.width):Number(e.rail?e.railWidth:e.width))),N=t.computed((()=>se(e.location,r.value))),C=t.computed((()=>e.persistent)),_=t.computed((()=>!e.permanent&&(p.value||e.temporary))),I=t.computed((()=>e.sticky&&!_.value&&"bottom"!==N.value))
ia((()=>e.expandOnHover&&null!=e.rail),(()=>{t.watch(w,(e=>o("update:rail",!e)))})),ia((()=>!e.disableResizeWatcher),(()=>{t.watch(_,(a=>!e.permanent&&t.nextTick((()=>h.value=!a))))})),ia((()=>!e.disableRouteWatcher&&!!g),(()=>{t.watch(g.currentRoute,(()=>_.value&&(h.value=!1)))})),t.watch((()=>e.permanent),(e=>{e&&(h.value=!0)})),null!=e.modelValue||_.value||(h.value=e.permanent||!p.value)
const{isDragging:B,dragProgress:P}=function(e){let{el:a,isActive:l,isTemporary:o,width:n,touchless:r,position:i}=e
t.onMounted((()=>{window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",V,{passive:!1}),window.addEventListener("touchend",w,{passive:!0})})),t.onBeforeUnmount((()=>{window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",V),window.removeEventListener("touchend",w)}))
const s=t.computed((()=>["left","right"].includes(i.value))),{addMovement:u,endTouch:c,getVelocity:d}=kv()
let v=!1
const p=t.shallowRef(!1),f=t.shallowRef(0),m=t.shallowRef(0)
let g
function h(e,t){return("left"===i.value?e:"right"===i.value?document.documentElement.clientWidth-e:"top"===i.value?e:"bottom"===i.value?document.documentElement.clientHeight-e:xv())-(t?n.value:0)}function y(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const a="left"===i.value?(e-m.value)/n.value:"right"===i.value?(document.documentElement.clientWidth-e-m.value)/n.value:"top"===i.value?(e-m.value)/n.value:"bottom"===i.value?(document.documentElement.clientHeight-e-m.value)/n.value:xv()
return t?Math.max(0,Math.min(1,a)):a}function b(e){if(r.value)return
const t=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY,d="left"===i.value?t<25:"right"===i.value?t>document.documentElement.clientWidth-25:"top"===i.value?a<25:"bottom"===i.value?a>document.documentElement.clientHeight-25:xv(),p=l.value&&("left"===i.value?t<n.value:"right"===i.value?t>document.documentElement.clientWidth-n.value:"top"===i.value?a<n.value:"bottom"===i.value?a>document.documentElement.clientHeight-n.value:xv());(d||p||l.value&&o.value)&&(g=[t,a],m.value=h(s.value?t:a,l.value),f.value=y(s.value?t:a),v=m.value>-20&&m.value<80,c(e),u(e))}function V(e){const t=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY
if(v){if(!e.cancelable)return void(v=!1)
const l=Math.abs(t-g[0]),o=Math.abs(a-g[1]);(s.value?l>o&&l>3:o>l&&o>3)?(p.value=!0,v=!1):(s.value?o:l)>3&&(v=!1)}if(!p.value)return
e.preventDefault(),u(e)
const l=y(s.value?t:a,!1)
f.value=Math.max(0,Math.min(1,l)),l>1?m.value=h(s.value?t:a,!0):l<0&&(m.value=h(s.value?t:a,!1))}function w(e){if(v=!1,!p.value)return
u(e),p.value=!1
const t=d(e.changedTouches[0].identifier),a=Math.abs(t.x),o=Math.abs(t.y),n=s.value?a>o&&a>400:o>a&&o>3
l.value=n?t.direction===({left:"right",right:"left",top:"down",bottom:"up"}[i.value]||xv()):f.value>.5}const S=t.computed((()=>p.value?{transform:"left"===i.value?`translateX(calc(-100% + ${f.value*n.value}px))`:"right"===i.value?`translateX(calc(100% - ${f.value*n.value}px))`:"top"===i.value?`translateY(calc(-100% + ${f.value*n.value}px))`:"bottom"===i.value?`translateY(calc(100% - ${f.value*n.value}px))`:xv(),transition:"none"}:void 0))
return ia(p,(()=>{const e=a.value?.style.transform??null,l=a.value?.style.transition??null
t.watchEffect((()=>{a.value?.style.setProperty("transform",S.value?.transform||"none"),a.value?.style.setProperty("transition",S.value?.transition||null)})),t.onScopeDispose((()=>{a.value?.style.setProperty("transform",e),a.value?.style.setProperty("transition",l)}))})),{isDragging:p,dragProgress:f,dragStyles:S}}({el:V,isActive:h,isTemporary:_,width:x,touchless:t.toRef(e,"touchless"),position:N}),A=t.computed((()=>{const t=_.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):x.value
return B.value?t*P.value:t})),R=t.computed((()=>["top","bottom"].includes(e.location)?0:x.value)),{layoutItemStyles:T,layoutItemScrimStyles:D}=na({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:N,layoutSize:A,elementSize:R,active:t.computed((()=>h.value||B.value)),disableTransitions:t.computed((()=>B.value)),absolute:t.computed((()=>e.absolute||I.value&&"string"!=typeof E.value))}),{isStuck:E,stickyStyles:F}=function(e){let{rootEl:a,isSticky:l,layoutItemStyles:o}=e
const n=t.shallowRef(!1),r=t.shallowRef(0),i=t.computed((()=>{const e="boolean"==typeof n.value?"top":n.value
return[l.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[e]:f(r.value)}:{top:o.value.top}]}))
t.onMounted((()=>{t.watch(l,(e=>{e?window.addEventListener("scroll",u,{passive:!0}):window.removeEventListener("scroll",u)}),{immediate:!0})})),t.onBeforeUnmount((()=>{window.removeEventListener("scroll",u)}))
let s=0
function u(){const e=s>window.scrollY?"up":"down",t=a.value.getBoundingClientRect(),l=parseFloat(o.value.top??0),i=window.scrollY-Math.max(0,r.value-l),u=t.height+Math.max(r.value,l)-window.scrollY-window.innerHeight,c=parseFloat(getComputedStyle(a.value).getPropertyValue("--v-body-scroll-y"))||0
t.height<window.innerHeight-l?(n.value="top",r.value=l):"up"===e&&"bottom"===n.value||"down"===e&&"top"===n.value?(r.value=window.scrollY+t.top-c,n.value=!0):"down"===e&&u<=0?(r.value=0,n.value="bottom"):"up"===e&&i<=0&&(c?"top"!==n.value&&(r.value=-i+c+l,n.value="top"):(r.value=t.top+i,n.value="top")),s=window.scrollY}return{isStuck:n,stickyStyles:i}}({rootEl:V,isSticky:I,layoutItemStyles:T}),$=cl(t.computed((()=>"string"==typeof e.scrim?e.scrim:null))),M=t.computed((()=>({...B.value?{opacity:.2*P.value,transition:"none"}:void 0,...D.value})))
return Ct({VList:{bgColor:"transparent"}}),Mt((()=>{const a=n.image||e.image
return t.createVNode(t.Fragment,null,[t.createVNode(e.tag,t.mergeProps({ref:V,onMouseenter:S,onMouseleave:k,class:["v-navigation-drawer",`v-navigation-drawer--${N.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":w.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":_.value,"v-navigation-drawer--persistent":C.value,"v-navigation-drawer--active":h.value,"v-navigation-drawer--sticky":I.value},i.value,u.value,s.value,v.value,d.value,m.value,e.class],style:[c.value,T.value,y.value,F.value,e.style,["top","bottom"].includes(N.value)?{height:"auto"}:{}]},b,l),{default:()=>[a&&t.createVNode("div",{key:"image",class:"v-navigation-drawer__img"},[n.image?t.createVNode(ll,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},n.image):t.createVNode(yl,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),n.prepend&&t.createVNode("div",{class:"v-navigation-drawer__prepend"},[n.prepend?.()]),t.createVNode("div",{class:"v-navigation-drawer__content"},[n.default?.()]),n.append&&t.createVNode("div",{class:"v-navigation-drawer__append"},[n.append?.()])]}),t.createVNode(t.Transition,{name:"fade-transition"},{default:()=>[_.value&&(B.value||h.value)&&!!e.scrim&&t.createVNode("div",t.mergeProps({class:["v-navigation-drawer__scrim",$.backgroundColorClasses.value],style:[M.value,$.backgroundColorStyles.value],onClick:()=>{C.value||(h.value=!1)}},b),null)]})])})),{isStuck:E}}}),Iv=It({name:"VNoSsr",setup(e,t){let{slots:a}=t
const l=Xr()
return()=>l.value&&a.default?.()}}),Bv=ht({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"number"},...ol(),...nn(),...N(Vi({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),Pv=Bt()({name:"VOtpInput",props:Bv(),emits:{finish:e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{dimensionStyles:r}=nl(e),{isFocused:i,focus:s,blur:u}=rn(e),c=sa(e,"modelValue","",(e=>null==e?[]:String(e).split("")),(e=>e.join(""))),{t:d}=ya(),v=t.computed((()=>Number(e.length))),p=t.computed((()=>Array(v.value).fill(0))),f=t.ref(-1),m=t.ref(),g=t.ref([]),h=t.computed((()=>g.value[f.value]))
function y(){if(w(h.value.value))return void(h.value.value="")
const e=c.value.slice(),t=h.value.value
e[f.value]=t
let a=null
f.value>c.value.length?a=c.value.length+1:f.value+1!==v.value&&(a="next"),c.value=e,a&&Q(m.value,a)}function b(e){const t=c.value.slice(),a=f.value
let l=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(e.key)&&(e.preventDefault(),"ArrowLeft"===e.key?l="prev":"ArrowRight"===e.key?l="next":["Backspace","Delete"].includes(e.key)&&(t[f.value]="",c.value=t,f.value>0&&"Backspace"===e.key?l="prev":requestAnimationFrame((()=>{g.value[a]?.select()}))),requestAnimationFrame((()=>{null!=l&&Q(m.value,l)})))}function V(){u(),f.value=-1}function w(t){return"number"===e.type&&/[^0-9]/g.test(t)}return Ct({VField:{color:t.computed((()=>e.color)),bgColor:t.computed((()=>e.color)),baseColor:t.computed((()=>e.baseColor)),disabled:t.computed((()=>e.disabled)),error:t.computed((()=>e.error)),variant:t.computed((()=>e.variant))}},{scoped:!0}),t.watch(c,(e=>{e.length===v.value&&o("finish",e.join(""))}),{deep:!0}),t.watch(f,(e=>{e<0||t.nextTick((()=>{g.value[e]?.select()}))})),Mt((()=>{const[a,o]=P(l)
return t.createVNode("div",t.mergeProps({class:["v-otp-input",{"v-otp-input--divided":!!e.divider},e.class],style:[e.style]},a),[t.createVNode("div",{ref:m,class:"v-otp-input__content",style:[r.value]},[p.value.map(((a,l)=>t.createVNode(t.Fragment,null,[e.divider&&0!==l&&t.createVNode("span",{class:"v-otp-input__divider"},[e.divider]),t.createVNode(wi,{focused:i.value&&e.focusAll||f.value===l,key:l},{...n,loader:void 0,default:()=>t.createVNode("input",{ref:e=>g.value[l]=e,"aria-label":d(e.label,l+1),autofocus:0===l&&e.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],disabled:e.disabled,inputmode:"number"===e.type?"numeric":"text",min:"number"===e.type?0:void 0,maxlength:"1",placeholder:e.placeholder,type:"number"===e.type?"text":e.type,value:c.value[l],onInput:y,onFocus:e=>function(e,t){s(),f.value=t}(0,l),onBlur:V,onKeydown:b,onPaste:e=>function(e,t){t.preventDefault(),t.stopPropagation()
const a=t?.clipboardData?.getData("Text").slice(0,v.value)??""
w(a)||(c.value=a.split(""),g.value?.[e].blur())}(l,e)},null)})]))),t.createVNode("input",t.mergeProps({class:"v-otp-input-input",type:"hidden"},o,{value:c.value.join("")}),null),t.createVNode(ui,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!e.loading,persistent:!0},{default:()=>[n.loader?.()??t.createVNode(eo,{color:"boolean"==typeof e.loading?void 0:e.loading,indeterminate:!0,size:"24",width:"2"},null)]}),n.default?.()])])})),{blur:()=>{g.value?.some((e=>e.blur()))},focus:()=>{g.value?.[0].focus()},reset:function(){c.value=[]},isFocused:i}}})
const Av=ht({scale:{type:[Number,String],default:.5},...yt()},"VParallax"),Rv=Bt()({name:"VParallax",props:Av(),setup(e,a){let{slots:l}=a
const{intersectionRef:o,isIntersecting:n}=Ql(),{resizeRef:r,contentRect:i}=Jt(),{height:s}=Nn(),u=t.ref()
let c
t.watchEffect((()=>{o.value=r.value=u.value?.$el})),t.watch(n,(e=>{e?(c=Dt(o.value),c=c===document.scrollingElement?document:c,c.addEventListener("scroll",p,{passive:!0}),p()):c.removeEventListener("scroll",p)})),t.onBeforeUnmount((()=>{c?.removeEventListener("scroll",p)})),t.watch(s,p),t.watch((()=>i.value?.height),p)
const d=t.computed((()=>1-R(+e.scale)))
let v=-1
function p(){n.value&&(cancelAnimationFrame(v),v=requestAnimationFrame((()=>{const e=(u.value?.$el).querySelector(".v-img__img")
if(!e)return
const t=c instanceof Document?document.documentElement.clientHeight:c.clientHeight,a=c instanceof Document?window.scrollY:c.scrollTop,l=o.value.getBoundingClientRect().top+a,n=i.value.height,r=(s=(a-(l+(n-t)/2))*d.value,Math.floor(Math.abs(s))*Math.sign(s))
var s
const v=Math.max(1,(d.value*(t-n)+n)/n)
e.style.setProperty("transform",`translateY(${r}px) scale(${v})`)})))}return Mt((()=>t.createVNode(yl,{class:["v-parallax",{"v-parallax--active":n.value},e.class],style:e.style,ref:u,cover:!0,onLoadstart:p,onLoad:p},l))),{}}}),Tv=ht({...Qo({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),Dv=Bt()({name:"VRadio",props:Tv(),setup(e,a){let{slots:l}=a
return Mt((()=>{const a=Jo.filterProps(e)
return t.createVNode(Jo,t.mergeProps(a,{class:["v-radio",e.class],style:e.style,type:"radio"}),l)})),{}}}),Ev=ht({height:{type:[Number,String],default:"auto"},...pn(),...x(Ko(),["multiple"]),trueIcon:{type:Ot,default:"$radioOn"},falseIcon:{type:Ot,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),Fv=Bt()({name:"VRadioGroup",inheritAttrs:!1,props:Ev(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const n=kt(),r=t.computed((()=>e.id||`radio-group-${n}`)),i=sa(e,"modelValue")
return Mt((()=>{const[a,n]=P(l),s=fn.filterProps(e),u=Jo.filterProps(e),c=o.label?o.label({label:e.label,props:{for:r.value}}):e.label
return t.createVNode(fn,t.mergeProps({class:["v-radio-group",e.class],style:e.style},a,s,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,id:r.value}),{...o,default:a=>{let{id:l,messagesId:r,isDisabled:s,isReadonly:d}=a
return t.createVNode(t.Fragment,null,[c&&t.createVNode(Go,{id:l.value},{default:()=>[c]}),t.createVNode(Zo,t.mergeProps(u,{id:l.value,"aria-describedby":r.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:s.value,readonly:d.value,"aria-labelledby":c?l.value:void 0,multiple:!1},n,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e}),o)])}})})),{}}}),$v=ht({...nn(),...pn(),...Ls(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),Mv=Bt()({name:"VRangeSlider",props:$v(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.ref(),r=t.ref(),i=t.ref(),{rtlClasses:s}=Va()
const u=zs(e),c=sa(e,"modelValue",void 0,(e=>e?.length?e.map((e=>u.roundValue(e))):[0,0])),{activeThumbRef:d,hasLabels:v,max:p,min:f,mousePressed:m,onSliderMousedown:g,onSliderTouchstart:h,position:y,trackContainerRef:b,readonly:V}=js({props:e,steps:u,onSliderStart:()=>{o("start",c.value)},onSliderEnd:t=>{let{value:a}=t
const l=d.value===n.value?.$el?[a,c.value[1]]:[c.value[0],a]
!e.strict&&l[0]<l[1]&&(c.value=l),o("end",c.value)},onSliderMove:t=>{let{value:a}=t
const[l,o]=c.value
e.strict||l!==o||l===f.value||(d.value=a>l?r.value?.$el:n.value?.$el,d.value?.focus()),d.value===n.value?.$el?c.value=[Math.min(a,o),o]:c.value=[l,Math.max(l,a)]},getActiveThumb:function(t){if(!n.value||!r.value)return
const a=Os(t,n.value.$el,e.direction),l=Os(t,r.value.$el,e.direction),o=Math.abs(a),i=Math.abs(l)
return o<i||o===i&&a<0?n.value.$el:r.value.$el}}),{isFocused:w,focus:S,blur:k}=rn(e),x=t.computed((()=>y(c.value[0]))),N=t.computed((()=>y(c.value[1])))
return Mt((()=>{const a=fn.filterProps(e),o=!!(e.label||l.label||l.prepend)
return t.createVNode(fn,t.mergeProps({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!l["tick-label"]||v.value,"v-slider--focused":w.value,"v-slider--pressed":m.value,"v-slider--disabled":e.disabled},s.value,e.class],style:e.style,ref:i},a,{focused:w.value}),{...l,prepend:o?a=>t.createVNode(t.Fragment,null,[l.label?.(a)??(e.label?t.createVNode(Go,{class:"v-slider__label",text:e.label},null):void 0),l.prepend?.(a)]):void 0,default:a=>{let{id:o,messagesId:i}=a
return t.createVNode("div",{class:"v-slider__container",onMousedown:V.value?void 0:g,onTouchstartPassive:V.value?void 0:h},[t.createVNode("input",{id:`${o.value}_start`,name:e.name||o.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:c.value[0]},null),t.createVNode("input",{id:`${o.value}_stop`,name:e.name||o.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:c.value[1]},null),t.createVNode(Ys,{ref:b,start:x.value,stop:N.value},{"tick-label":l["tick-label"]}),t.createVNode(Ws,{ref:n,"aria-describedby":i.value,focused:w&&d.value===n.value?.$el,modelValue:c.value[0],"onUpdate:modelValue":e=>c.value=[e,c.value[1]],onFocus:e=>{S(),d.value=n.value?.$el,c.value[0]===c.value[1]&&c.value[1]===f.value&&e.relatedTarget!==r.value?.$el&&(n.value?.$el.blur(),r.value?.$el.focus())},onBlur:()=>{k(),d.value=void 0},min:f.value,max:c.value[1],position:x.value,ripple:e.ripple},{"thumb-label":l["thumb-label"]}),t.createVNode(Ws,{ref:r,"aria-describedby":i.value,focused:w&&d.value===r.value?.$el,modelValue:c.value[1],"onUpdate:modelValue":e=>c.value=[c.value[0],e],onFocus:e=>{S(),d.value=r.value?.$el,c.value[0]===c.value[1]&&c.value[0]===p.value&&e.relatedTarget!==n.value?.$el&&(r.value?.$el.blur(),n.value?.$el.focus())},onBlur:()=>{k(),d.value=void 0},min:c.value[0],max:p.value,position:N.value,ripple:e.ripple},{"thumb-label":l["thumb-label"]})])}})})),{}}}),Ov=ht({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:Ot,default:"$ratingEmpty"},fullIcon:{type:Ot,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...yt(),...Al(),...ql(),...Pa(),...Sa()},"VRating"),Lv=Bt()({name:"VRating",props:Ov(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{t:o}=ya(),{themeClasses:n}=xa(e),r=sa(e,"modelValue"),i=t.computed((()=>R(parseFloat(r.value),0,+e.length))),s=t.computed((()=>p(Number(e.length),1))),u=t.computed((()=>s.value.flatMap((t=>e.halfIncrements?[t-.5,t]:[t])))),c=t.shallowRef(-1),d=t.computed((()=>u.value.map((t=>{const a=e.hover&&c.value>-1,l=i.value>=t,o=c.value>=t,n=(a?o:l)?e.fullIcon:e.emptyIcon,r=e.activeColor??e.color
return{isFilled:l,isHovered:o,icon:n,color:l||o?r:e.color}})))),v=t.computed((()=>[0,...u.value].map((t=>({onMouseenter:e.hover?function(){c.value=t}:void 0,onMouseleave:e.hover?function(){c.value=-1}:void 0,onClick:function(){e.disabled||e.readonly||(r.value=i.value===t&&e.clearable?0:t)}}))))),f=t.computed((()=>e.name??`v-rating-${kt()}`))
function m(a){let{value:n,index:r,showStar:s=!0}=a
const{onMouseenter:u,onMouseleave:c,onClick:p}=v.value[r+1],m=`${f.value}-${String(n).replace(".","-")}`,g={color:d.value[r]?.color,density:e.density,disabled:e.disabled,icon:d.value[r]?.icon,ripple:e.ripple,size:e.size,variant:"plain"}
return t.createVNode(t.Fragment,null,[t.createVNode("label",{for:m,class:{"v-rating__item--half":e.halfIncrements&&n%1>0,"v-rating__item--full":e.halfIncrements&&n%1==0},onMouseenter:u,onMouseleave:c,onClick:p},[t.createVNode("span",{class:"v-rating__hidden"},[o(e.itemAriaLabel,n,e.length)]),s?l.item?l.item({...d.value[r],props:g,value:n,index:r,rating:i.value}):t.createVNode(Fo,t.mergeProps({"aria-label":o(e.itemAriaLabel,n,e.length)},g),null):void 0]),t.createVNode("input",{class:"v-rating__hidden",name:f.value,id:m,type:"radio",value:n,checked:i.value===n,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function g(e){return l["item-label"]?l["item-label"](e):e.label?t.createVNode("span",null,[e.label]):t.createVNode("span",null,[t.createTextVNode(" ")])}return Mt((()=>{const a=!!e.itemLabels?.length||l["item-label"]
return t.createVNode(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},n.value,e.class],style:e.style},{default:()=>[t.createVNode(m,{value:0,index:-1,showStar:!1},null),s.value.map(((l,o)=>t.createVNode("div",{class:"v-rating__wrapper"},[a&&"top"===e.itemLabelPosition?g({value:l,index:o,label:e.itemLabels?.[o]}):void 0,t.createVNode("div",{class:"v-rating__item"},[e.halfIncrements?t.createVNode(t.Fragment,null,[t.createVNode(m,{value:l-.5,index:2*o},null),t.createVNode(m,{value:l,index:2*o+1},null)]):t.createVNode(m,{value:l,index:o},null)]),a&&"bottom"===e.itemLabelPosition?g({value:l,index:o,label:e.itemLabels?.[o]}):void 0])))]})})),{}}}),zv={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"}
function jv(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
return t.createVNode("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[a])}function Hv(e){const[t,a]=e.split("@")
return Array.from({length:a}).map((()=>Wv(t)))}function Wv(e){let t=[]
if(!e)return t
const a=zv[e]
if(e===a);else{if(e.includes(","))return Uv(e)
if(e.includes("@"))return Hv(e)
a.includes(",")?t=Uv(a):a.includes("@")?t=Hv(a):a&&t.push(Wv(a))}return[jv(e,t)]}function Uv(e){return e.replace(/\s/g,"").split(",").map(Wv)}const Yv=ht({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...ol(),...wl(),...Sa()},"VSkeletonLoader"),Gv=Bt()({name:"VSkeletonLoader",props:Yv(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=cl(t.toRef(e,"color")),{dimensionStyles:r}=nl(e),{elevationClasses:i}=Sl(e),{themeClasses:s}=xa(e),{t:u}=ya(),c=t.computed((()=>Wv(A(e.type).join(","))))
return Mt((()=>{const a=!l.default||e.loading,d=e.boilerplate||!a?{}:{ariaLive:"polite",ariaLabel:u(e.loadingText),role:"alert"}
return t.createVNode("div",t.mergeProps({class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},s.value,o.value,i.value],style:[n.value,a?r.value:{}]},d),[a?c.value:l.default?.()])})),{}}}),qv=Bt()({name:"VSlideGroupItem",props:Ll(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t
const l=zl(e,En)
return()=>a.default?.({isSelected:l.isSelected.value,select:l.select,toggle:l.toggle,selectedClass:l.selectedClass.value})}})
const Kv=ht({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...ao({location:"bottom"}),...co(),...dl(),...El(),...Sa(),...x(si({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Xv=Bt()({name:"VSnackbar",props:Kv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=sa(e,"modelValue"),{positionClasses:n}=vo(e),{scopeId:r}=Jr(),{themeClasses:i}=xa(e),{colorClasses:s,colorStyles:u,variantClasses:c}=Fl(e),{roundedClasses:d}=vl(e),v=function(e){const a=t.shallowRef(e())
let l=-1
function o(){clearInterval(l)}return t.onScopeDispose(o),{clear:o,time:a,start:function(t){const n=t?getComputedStyle(t):{transitionDuration:.2},r=1e3*parseFloat(n.transitionDuration)||200
if(o(),a.value<=0)return
const i=performance.now()
l=window.setInterval((()=>{const t=performance.now()-i+r
a.value=Math.max(e()-t,0),a.value<=0&&o()}),r)},reset:function(){o(),t.nextTick((()=>a.value=e()))}}}((()=>Number(e.timeout))),p=t.ref(),f=t.ref(),m=t.shallowRef(!1),g=t.shallowRef(0),y=t.ref(),b=t.inject(ea,void 0)
ia((()=>!!b),(()=>{const e=oa()
t.watchEffect((()=>{y.value=e.mainStyles.value}))})),t.watch(o,w),t.watch((()=>e.timeout),w),t.onMounted((()=>{o.value&&w()}))
let V=-1
function w(){v.reset(),window.clearTimeout(V)
const t=Number(e.timeout)
if(!o.value||-1===t)return
const a=h(f.value)
v.start(a),V=window.setTimeout((()=>{o.value=!1}),t)}function S(){m.value=!0,v.reset(),window.clearTimeout(V)}function k(){m.value=!1,w()}function x(e){g.value=e.touches[0].clientY}function N(e){Math.abs(g.value-e.changedTouches[0].clientY)>50&&(o.value=!1)}function C(){m.value&&k()}const _=t.computed((()=>e.location.split(" ").reduce(((e,t)=>(e[`v-snackbar--${t}`]=!0,e)),{})))
return Mt((()=>{const a=ui.filterProps(e),g=!!(l.default||l.text||e.text)
return t.createVNode(ui,t.mergeProps({ref:p,class:["v-snackbar",{"v-snackbar--active":o.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},_.value,n.value,e.class],style:[y.value,e.style]},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,contentProps:t.mergeProps({class:["v-snackbar__wrapper",i.value,s.value,d.value,c.value],style:[u.value],onPointerenter:S,onPointerleave:k},a.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:x,onTouchend:N,onAfterLeave:C},r),{default:()=>[Dl(!1,"v-snackbar"),e.timer&&!m.value&&t.createVNode("div",{key:"timer",class:"v-snackbar__timer"},[t.createVNode(no,{ref:f,color:"string"==typeof e.timer?e.timer:"info",max:e.timeout,"model-value":v.time.value},null)]),g&&t.createVNode("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[l.text?.()??e.text,l.default?.()]),l.actions&&t.createVNode(ll,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[t.createVNode("div",{class:"v-snackbar__actions"},[l.actions({isActive:o})])]})],activator:l.activator})})),vi({},p)}}),Zv=ht({autoDraw:Boolean,autoDrawDuration:[Number,String],autoDrawEasing:{type:String,default:"ease"},color:String,gradient:{type:Array,default:()=>[]},gradientDirection:{type:String,validator:e=>["top","bottom","left","right"].includes(e),default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:()=>[]},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},id:String,itemValue:{type:String,default:"value"},modelValue:{type:Array,default:()=>[]},min:[String,Number],max:[String,Number],padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:Boolean,width:{type:[Number,String],default:300}},"Line"),Qv=ht({autoLineWidth:Boolean,...Zv()},"VBarline"),Jv=Bt()({name:"VBarline",props:Qv(),setup(e,a){let{slots:l}=a
const o=kt(),n=t.computed((()=>e.id||`barline-${o}`)),r=t.computed((()=>Number(e.autoDrawDuration)||500)),i=t.computed((()=>Boolean(e.showLabels||e.labels.length>0||!!l?.label))),s=t.computed((()=>parseFloat(e.lineWidth)||4)),u=t.computed((()=>Math.max(e.modelValue.length*s.value,Number(e.width)))),c=t.computed((()=>({minX:0,maxX:u.value,minY:0,maxY:parseInt(e.height,10)}))),d=t.computed((()=>e.modelValue.map((t=>v(t,e.itemValue,t)))))
function p(t,a){const{minX:l,maxX:o,minY:n,maxY:r}=a,i=t.length
let s=null!=e.max?Number(e.max):Math.max(...t),u=null!=e.min?Number(e.min):Math.min(...t)
u>0&&null==e.min&&(u=0),s<0&&null==e.max&&(s=0)
const c=o/i,d=(r-n)/(s-u||1),v=r-Math.abs(u*d)
return t.map(((e,t)=>{const a=Math.abs(d*e)
return{x:l+t*c,y:v-a+ +(e<0)*a,height:a,value:e}}))}const f=t.computed((()=>{const t=[],a=p(d.value,c.value),l=a.length
for(let o=0;t.length<l;o++){const l=a[o]
let n=e.labels[o]
n||(n="object"==typeof l?l.value:l),t.push({x:l.x,value:String(n)})}return t})),m=t.computed((()=>p(d.value,c.value))),g=t.computed((()=>(Math.abs(m.value[0].x-m.value[1].x)-s.value)/2))
Mt((()=>{const a=e.gradient.slice().length?e.gradient.slice().reverse():[""]
return t.createVNode("svg",{display:"block"},[t.createVNode("defs",null,[t.createVNode("linearGradient",{id:n.value,gradientUnits:"userSpaceOnUse",x1:"left"===e.gradientDirection?"100%":"0",y1:"top"===e.gradientDirection?"100%":"0",x2:"right"===e.gradientDirection?"100%":"0",y2:"bottom"===e.gradientDirection?"100%":"0"},[a.map(((e,l)=>t.createVNode("stop",{offset:l/Math.max(a.length-1,1),"stop-color":e||"currentColor"},null)))])]),t.createVNode("clipPath",{id:`${n.value}-clip`},[m.value.map((a=>t.createVNode("rect",{x:a.x+g.value,y:a.y,width:s.value,height:a.height,rx:"number"==typeof e.smooth?e.smooth:e.smooth?2:0,ry:"number"==typeof e.smooth?e.smooth:e.smooth?2:0},[e.autoDraw&&t.createVNode(t.Fragment,null,[t.createVNode("animate",{attributeName:"y",from:a.y+a.height,to:a.y,dur:`${r.value}ms`,fill:"freeze"},null),t.createVNode("animate",{attributeName:"height",from:"0",to:a.height,dur:`${r.value}ms`,fill:"freeze"},null)])])))]),i.value&&t.createVNode("g",{key:"labels",style:{textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},[f.value.map(((a,o)=>t.createVNode("text",{x:a.x+g.value+s.value/2,y:parseInt(e.height,10)-2+(parseInt(e.labelSize,10)||5.25),"font-size":Number(e.labelSize)||7},[l.label?.({index:o,value:a.value})??a.value])))]),t.createVNode("g",{"clip-path":`url(#${n.value}-clip)`,fill:`url(#${n.value})`},[t.createVNode("rect",{x:0,y:0,width:Math.max(e.modelValue.length*s.value,Number(e.width)),height:e.height},null)])])}))}})
function ep(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75
if(0===e.length)return""
const o=e.shift(),n=e[e.length-1]
return(a?`M${o.x} ${l-o.x+2} L${o.x} ${o.y}`:`M${o.x} ${o.y}`)+e.map(((a,l)=>{const n=e[l+1],r=e[l-1]||o,i=n&&(u=a,c=r,tp((s=n).x+c.x)===tp(2*u.x)&&tp(s.y+c.y)===tp(2*u.y))
var s,u,c
if(!n||i)return`L${a.x} ${a.y}`
const d=Math.min(ap(r,a),ap(n,a)),v=d/2<t?d/2:t,p=lp(r,a,v),f=lp(n,a,v)
return`L${p.x} ${p.y}S${a.x} ${a.y} ${f.x} ${f.y}`})).join("")+(a?`L${n.x} ${l-o.x+2} Z`:"")}function tp(e){return parseInt(e,10)}function ap(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function lp(e,t,a){const l=e.x-t.x,o=e.y-t.y,n=Math.sqrt(l*l+o*o),r=l/n,i=o/n
return{x:t.x+r*a,y:t.y+i*a}}const op=ht({fill:Boolean,...Zv()},"VTrendline"),np=Bt()({name:"VTrendline",props:op(),setup(e,a){let{slots:l}=a
const o=kt(),n=t.computed((()=>e.id||`trendline-${o}`)),r=t.computed((()=>Number(e.autoDrawDuration)||(e.fill?500:2e3))),i=t.ref(0),s=t.ref(null)
function u(t,a){const{minX:l,maxX:o,minY:n,maxY:r}=a,i=t.length,s=null!=e.max?Number(e.max):Math.max(...t),u=null!=e.min?Number(e.min):Math.min(...t),c=(o-l)/(i-1),d=(r-n)/(s-u||1)
return t.map(((e,t)=>({x:l+t*c,y:r-(e-u)*d,value:e})))}const c=t.computed((()=>Boolean(e.showLabels||e.labels.length>0||!!l?.label))),d=t.computed((()=>parseFloat(e.lineWidth)||4)),p=t.computed((()=>Number(e.width))),f=t.computed((()=>{const t=Number(e.padding)
return{minX:t,maxX:p.value-t,minY:t,maxY:parseInt(e.height,10)-t}})),m=t.computed((()=>e.modelValue.map((t=>v(t,e.itemValue,t))))),g=t.computed((()=>{const t=[],a=u(m.value,f.value),l=a.length
for(let o=0;t.length<l;o++){const l=a[o]
let n=e.labels[o]
n||(n="object"==typeof l?l.value:l),t.push({x:l.x,value:String(n)})}return t}))
function h(t){return ep(u(m.value,f.value),e.smooth?8:Number(e.smooth),t,parseInt(e.height,10))}t.watch((()=>e.modelValue),(async()=>{if(await t.nextTick(),!e.autoDraw||!s.value)return
const a=s.value,l=a.getTotalLength()
e.fill?(a.style.transformOrigin="bottom center",a.style.transition="none",a.style.transform="scaleY(0)",a.getBoundingClientRect(),a.style.transition=`transform ${r.value}ms ${e.autoDrawEasing}`,a.style.transform="scaleY(1)"):(a.style.strokeDasharray=`${l}`,a.style.strokeDashoffset=`${l}`,a.getBoundingClientRect(),a.style.transition=`stroke-dashoffset ${r.value}ms ${e.autoDrawEasing}`,a.style.strokeDashoffset="0"),i.value=l}),{immediate:!0}),Mt((()=>{const a=e.gradient.slice().length?e.gradient.slice().reverse():[""]
return t.createVNode("svg",{display:"block","stroke-width":parseFloat(e.lineWidth)??4},[t.createVNode("defs",null,[t.createVNode("linearGradient",{id:n.value,gradientUnits:"userSpaceOnUse",x1:"left"===e.gradientDirection?"100%":"0",y1:"top"===e.gradientDirection?"100%":"0",x2:"right"===e.gradientDirection?"100%":"0",y2:"bottom"===e.gradientDirection?"100%":"0"},[a.map(((e,l)=>t.createVNode("stop",{offset:l/Math.max(a.length-1,1),"stop-color":e||"currentColor"},null)))])]),c.value&&t.createVNode("g",{key:"labels",style:{textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},[g.value.map(((a,o)=>t.createVNode("text",{x:a.x+d.value/2+d.value/2,y:parseInt(e.height,10)-4+(parseInt(e.labelSize,10)||5.25),"font-size":Number(e.labelSize)||7},[l.label?.({index:o,value:a.value})??a.value])))]),t.createVNode("path",{ref:s,d:h(e.fill),fill:e.fill?`url(#${n.value})`:"none",stroke:e.fill?"none":`url(#${n.value})`},null),e.fill&&t.createVNode("path",{d:h(!1),fill:"none",stroke:e.color??e.gradient?.[0]},null)])}))}}),rp=ht({type:{type:String,default:"trend"},...Qv(),...op()},"VSparkline"),ip=Bt()({name:"VSparkline",props:rp(),setup(e,a){let{slots:l}=a
const{textColorClasses:o,textColorStyles:n}=ul(t.toRef(e,"color")),r=t.computed((()=>Boolean(e.showLabels||e.labels.length>0||!!l?.label))),i=t.computed((()=>{let t=parseInt(e.height,10)
return r.value&&(t+=1.5*parseInt(e.labelSize,10)),t}))
Mt((()=>{const a="trend"===e.type?np:Jv,r="trend"===e.type?np.filterProps(e):Jv.filterProps(e)
return t.createVNode(a,t.mergeProps({key:e.type,class:o.value,style:n.value,viewBox:`0 0 ${e.width} ${parseInt(i.value,10)}`},r),l)}))}}),sp=ht({...yt(),...pi({offset:8,minWidth:0,openDelay:0,closeDelay:100,location:"top center",transition:"scale-transition"})},"VSpeedDial"),up=Bt()({name:"VSpeedDial",props:sp(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=sa(e,"modelValue"),n=t.ref(),r=t.computed((()=>{const[t,a="center"]=e.location?.split(" ")??[]
return`${t} ${a}`})),i=t.computed((()=>({[`v-speed-dial__content--${r.value.replace(" ","-")}`]:!0})))
return Mt((()=>{const a=fi.filterProps(e)
return t.createVNode(fi,t.mergeProps(a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:e.class,style:e.style,contentClass:["v-speed-dial__content",i.value,e.contentClass],location:r.value,ref:n,transition:"fade-transition"}),{...l,default:a=>t.createVNode(ll,{defaults:{VBtn:{size:"small"}}},{default:()=>[t.createVNode(fl,{appear:!0,group:!0,transition:e.transition},{default:()=>[l.default?.(a)]})]})})})),{}}}),cp=Symbol.for("vuetify:v-stepper"),dp=ht({color:String,disabled:{type:[Boolean,String],default:!1},prevText:{type:String,default:"$vuetify.stepper.prev"},nextText:{type:String,default:"$vuetify.stepper.next"}},"VStepperActions"),vp=Bt()({name:"VStepperActions",props:dp(),emits:{"click:prev":()=>!0,"click:next":()=>!0},setup(e,a){let{emit:l,slots:o}=a
const{t:n}=ya()
function r(){l("click:prev")}function i(){l("click:next")}return Mt((()=>{const a={onClick:r},l={onClick:i}
return t.createVNode("div",{class:"v-stepper-actions"},[t.createVNode(ll,{defaults:{VBtn:{disabled:["prev",!0].includes(e.disabled),text:n(e.prevText),variant:"text"}}},{default:()=>[o.prev?.({props:a})??t.createVNode(Fo,a,null)]}),t.createVNode(ll,{defaults:{VBtn:{color:e.color,disabled:["next",!0].includes(e.disabled),text:n(e.nextText),variant:"tonal"}}},{default:()=>[o.next?.({props:l})??t.createVNode(Fo,l,null)]})])})),{}}}),pp=Pt("v-stepper-header"),fp=ht({color:String,title:String,subtitle:String,complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},error:Boolean,errorIcon:{type:String,default:"$error"},icon:String,ripple:{type:[Boolean,Object],default:!0},rules:{type:Array,default:()=>[]}},"StepperItem"),mp=ht({...fp(),...Ll()},"VStepperItem"),gp=Bt()({name:"VStepperItem",directives:{Ripple:Do},props:mp(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:l}=a
const o=zl(e,cp,!0),n=t.computed((()=>o?.value.value??e.value)),r=t.computed((()=>e.rules.every((e=>!0===e())))),i=t.computed((()=>!e.disabled&&e.editable)),s=t.computed((()=>!e.disabled&&e.editable)),u=t.computed((()=>e.error||!r.value)),c=t.computed((()=>e.complete||e.rules.length>0&&r.value)),d=t.computed((()=>u.value?e.errorIcon:c.value?e.completeIcon:o.isSelected.value&&e.editable?e.editIcon:e.icon)),v=t.computed((()=>({canEdit:s.value,hasError:u.value,hasCompleted:c.value,title:e.title,subtitle:e.subtitle,step:n.value,value:e.value})))
return Mt((()=>{const a=(!o||o.isSelected.value||c.value||s.value)&&!u.value&&!e.disabled,r=!(null==e.title&&!l.title),p=!(null==e.subtitle&&!l.subtitle)
return t.withDirectives(t.createVNode("button",{class:["v-stepper-item",{"v-stepper-item--complete":c.value,"v-stepper-item--disabled":e.disabled,"v-stepper-item--error":u.value},o?.selectedClass.value],disabled:!e.editable,onClick:function(){o?.toggle()}},[i.value&&Dl(!0,"v-stepper-item"),t.createVNode(Uo,{key:"stepper-avatar",class:"v-stepper-item__avatar",color:a?e.color:void 0,size:24},{default:()=>[l.icon?.(v.value)??(d.value?t.createVNode(Zl,{icon:d.value},null):n.value)]}),t.createVNode("div",{class:"v-stepper-item__content"},[r&&t.createVNode("div",{key:"title",class:"v-stepper-item__title"},[l.title?.(v.value)??e.title]),p&&t.createVNode("div",{key:"subtitle",class:"v-stepper-item__subtitle"},[l.subtitle?.(v.value)??e.subtitle]),l.default?.(v.value)])]),[[t.resolveDirective("ripple"),e.ripple&&e.editable,null]])})),{}}}),hp=ht({...x(ws(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VStepperWindow"),yp=Bt()({name:"VStepperWindow",props:hp(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=t.inject(cp,null),n=sa(e,"modelValue"),r=t.computed({get:()=>null==n.value&&o?o.items.value.find((e=>o.selected.value.includes(e.id)))?.value:n.value,set(e){n.value=e}})
return Mt((()=>{const a=Ss.filterProps(e)
return t.createVNode(Ss,t.mergeProps({_as:"VStepperWindow"},a,{modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-stepper-window",e.class],style:e.style,mandatory:!1,touch:!1}),l)})),{}}}),bp=ht({...Ns()},"VStepperWindowItem"),Vp=Bt()({name:"VStepperWindowItem",props:bp(),setup(e,a){let{slots:l}=a
return Mt((()=>{const a=Cs.filterProps(e)
return t.createVNode(Cs,t.mergeProps({_as:"VStepperWindowItem"},a,{class:["v-stepper-window-item",e.class],style:e.style}),l)})),{}}}),wp=ht({altLabels:Boolean,bgColor:String,completeIcon:String,editIcon:String,editable:Boolean,errorIcon:String,hideActions:Boolean,items:{type:Array,default:()=>[]},itemTitle:{type:String,default:"title"},itemValue:{type:String,default:"value"},nonLinear:Boolean,flat:Boolean,...xn()},"Stepper"),Sp=ht({...wp(),...Ol({mandatory:"force",selectedClass:"v-stepper-item--selected"}),...Js(),...N(dp(),["prevText","nextText"])},"VStepper"),kp=Bt()({name:"VStepper",props:Sp(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{items:o,next:n,prev:r,selected:i}=jl(e,cp),{displayClasses:s,mobile:u}=Nn(e),{completeIcon:c,editIcon:d,errorIcon:p,color:f,editable:m,prevText:g,nextText:h}=t.toRefs(e),y=t.computed((()=>e.items.map(((t,a)=>({title:v(t,e.itemTitle,t),value:v(t,e.itemValue,a+1),raw:t}))))),b=t.computed((()=>o.value.findIndex((e=>i.value.includes(e.id)))))
return Ct({VStepperItem:{editable:m,errorIcon:p,completeIcon:c,editIcon:d,prevText:g,nextText:h},VStepperActions:{color:f,disabled:t.computed((()=>e.disabled?e.disabled:0===b.value?"prev":b.value===o.value.length-1&&"next")),prevText:g,nextText:h}}),Mt((()=>{const a=eu.filterProps(e),o=!(!l.header&&!e.items.length),i=e.items.length>0,c=!(e.hideActions||!i&&!l.actions)
return t.createVNode(eu,t.mergeProps(a,{color:e.bgColor,class:["v-stepper",{"v-stepper--alt-labels":e.altLabels,"v-stepper--flat":e.flat,"v-stepper--non-linear":e.nonLinear,"v-stepper--mobile":u.value},s.value,e.class],style:e.style}),{default:()=>[o&&t.createVNode(pp,{key:"stepper-header"},{default:()=>[y.value.map(((e,a)=>{let{raw:o,...n}=e
return t.createVNode(t.Fragment,null,[!!a&&t.createVNode(mr,null,null),t.createVNode(gp,n,{default:l[`header-item.${n.value}`]??l.header,icon:l.icon,title:l.title,subtitle:l.subtitle})])}))]}),i&&t.createVNode(yp,{key:"stepper-window"},{default:()=>[y.value.map((e=>t.createVNode(Vp,{value:e.value},{default:()=>l[`item.${e.value}`]?.(e)??l.item?.(e)})))]}),l.default?.({prev:r,next:n}),c&&(l.actions?.({next:n,prev:r})??t.createVNode(vp,{key:"stepper-actions","onClick:prev":r,"onClick:next":n},l))]})})),{prev:r,next:n}}}),xp=ht({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...pn(),...Qo()},"VSwitch"),Np=Bt()({name:"VSwitch",inheritAttrs:!1,props:xp(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,l){let{attrs:o,slots:n}=l
const r=sa(e,"indeterminate"),i=sa(e,"modelValue"),{loaderClasses:s}=io(e),{isFocused:u,focus:c,blur:d}=rn(e),v=t.ref(),p=a&&window.matchMedia("(forced-colors: active)").matches,f=t.computed((()=>"string"==typeof e.loading&&""!==e.loading?e.loading:e.color)),m=kt(),g=t.computed((()=>e.id||`switch-${m}`))
function h(){r.value&&(r.value=!1)}function y(e){e.stopPropagation(),e.preventDefault(),v.value?.input?.click()}return Mt((()=>{const[a,l]=P(o),m=fn.filterProps(e),b=Jo.filterProps(e)
return t.createVNode(fn,t.mergeProps({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":r.value},s.value,e.class]},a,m,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,id:g.value,focused:u.value,style:e.style}),{...n,default:a=>{let{id:o,messagesId:s,isDisabled:u,isReadonly:m,isValid:g}=a
const V={model:i,isValid:g}
return t.createVNode(Jo,t.mergeProps({ref:v},b,{modelValue:i.value,"onUpdate:modelValue":[e=>i.value=e,h],id:o.value,"aria-describedby":s.value,type:"checkbox","aria-checked":r.value?"mixed":void 0,disabled:u.value,readonly:m.value,onFocus:c,onBlur:d},l),{...n,default:e=>{let{backgroundColorClasses:a,backgroundColorStyles:l}=e
return t.createVNode("div",{class:["v-switch__track",p?void 0:a.value],style:l.value,onClick:y},[n["track-true"]&&t.createVNode("div",{key:"prepend",class:"v-switch__track-true"},[n["track-true"](V)]),n["track-false"]&&t.createVNode("div",{key:"append",class:"v-switch__track-false"},[n["track-false"](V)])])},input:a=>{let{inputNode:l,icon:o,backgroundColorClasses:r,backgroundColorStyles:i}=a
return t.createVNode(t.Fragment,null,[l,t.createVNode("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":o||e.loading},e.inset||p?void 0:r.value],style:e.inset?void 0:i.value},[n.thumb?t.createVNode(ll,{defaults:{VIcon:{icon:o,size:"x-small"}}},{default:()=>[n.thumb({...V,icon:o})]}):t.createVNode(Ua,null,{default:()=>[e.loading?t.createVNode(so,{name:"v-switch",active:!0,color:!1===g.value?void 0:f.value},{default:e=>n.loader?n.loader(e):t.createVNode(eo,{active:e.isActive,color:e.color,indeterminate:!0,size:"16",width:"2"},null)}):o&&t.createVNode(Zl,{key:String(o),icon:o,size:"x-small"},null)]})])])}})}})})),{}}}),Cp=ht({color:String,height:[Number,String],window:Boolean,...yt(),...wl(),...la(),...dl(),...Pa(),...Sa()},"VSystemBar"),_p=Bt()({name:"VSystemBar",props:Cp(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=xa(e),{backgroundColorClasses:n,backgroundColorStyles:r}=cl(t.toRef(e,"color")),{elevationClasses:i}=Sl(e),{roundedClasses:s}=vl(e),{ssrBootStyles:u}=_l(),c=t.computed((()=>e.height??(e.window?32:24))),{layoutItemStyles:d}=na({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.shallowRef("top"),layoutSize:c,elementSize:c,active:t.computed((()=>!0)),absolute:t.toRef(e,"absolute")})
return Mt((()=>t.createVNode(e.tag,{class:["v-system-bar",{"v-system-bar--window":e.window},o.value,n.value,i.value,s.value,e.class],style:[r.value,d.value,u.value,e.style]},l))),{}}}),Ip=Symbol.for("vuetify:v-tabs"),Bp=ht({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...x(Eo({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Pp=Bt()({name:"VTab",props:Bp(),setup(e,a){let{slots:l,attrs:o}=a
const{textColorClasses:n,textColorStyles:r}=ul(e,"sliderColor"),i=t.ref(),s=t.ref(),u=t.computed((()=>"horizontal"===e.direction)),c=t.computed((()=>i.value?.group?.isSelected.value??!1))
function d(e){let{value:t}=e
if(t){const e=i.value?.$el.parentElement?.querySelector(".v-tab--selected .v-tab__slider"),t=s.value
if(!e||!t)return
const a=getComputedStyle(e).color,l=e.getBoundingClientRect(),o=t.getBoundingClientRect(),n=u.value?"x":"y",r=u.value?"X":"Y",c=u.value?"right":"bottom",d=u.value?"width":"height",v=l[n]>o[n]?l[c]-o[c]:l[n]-o[n],p=Math.sign(v)>0?u.value?"right":"bottom":Math.sign(v)<0?u.value?"left":"top":"center",f=(Math.abs(v)+(Math.sign(v)<0?l[d]:o[d]))/Math.max(l[d],o[d])||0,m=1.5
he(t,{backgroundColor:[a,"currentcolor"],transform:[`translate${r}(${v}px) scale${r}(${l[d]/o[d]||0})`,`translate${r}(${v/m}px) scale${r}(${(f-1)/m+1})`,"none"],transformOrigin:Array(3).fill(p)},{duration:225,easing:Rt})}}return Mt((()=>{const a=Fo.filterProps(e)
return t.createVNode(Fo,t.mergeProps({symbol:Ip,ref:i,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1},a,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":d}),{...l,default:()=>t.createVNode(t.Fragment,null,[l.default?.()??e.text,!e.hideSlider&&t.createVNode("div",{ref:s,class:["v-tab__slider",n.value],style:r.value},null)])})})),vi({},i)}}),Ap=ht({...x(ws(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Rp=Bt()({name:"VTabsWindow",props:Ap(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=t.inject(Ip,null),n=sa(e,"modelValue"),r=t.computed({get:()=>null==n.value&&o?o.items.value.find((e=>o.selected.value.includes(e.id)))?.value:n.value,set(e){n.value=e}})
return Mt((()=>{const a=Ss.filterProps(e)
return t.createVNode(Ss,t.mergeProps({_as:"VTabsWindow"},a,{modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),l)})),{}}}),Tp=ht({...Ns()},"VTabsWindowItem"),Dp=Bt()({name:"VTabsWindowItem",props:Tp(),setup(e,a){let{slots:l}=a
return Mt((()=>{const a=Cs.filterProps(e)
return t.createVNode(Cs,t.mergeProps({_as:"VTabsWindowItem"},a,{class:["v-tabs-window-item",e.class],style:e.style}),l)})),{}}})
const Ep=ht({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Fn({mandatory:"force",selectedClass:"v-tab-item--selected"}),...Al(),...Pa()},"VTabs"),Fp=Bt()({name:"VTabs",props:Ep(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const n=sa(e,"modelValue"),r=t.computed((()=>function(e){return e?e.map((e=>m(e)?e:{text:e,value:e})):[]}(e.items))),{densityClasses:i}=Rl(e),{backgroundColorClasses:s,backgroundColorStyles:u}=cl(t.toRef(e,"bgColor")),{scopeId:c}=Jr()
return Ct({VTab:{color:t.toRef(e,"color"),direction:t.toRef(e,"direction"),stacked:t.toRef(e,"stacked"),fixed:t.toRef(e,"fixedTabs"),sliderColor:t.toRef(e,"sliderColor"),hideSlider:t.toRef(e,"hideSlider")}}),Mt((()=>{const a=$n.filterProps(e),d=!!(o.window||e.items.length>0)
return t.createVNode(t.Fragment,null,[t.createVNode($n,t.mergeProps(a,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},i.value,s.value,e.class],style:[{"--v-tabs-height":f(e.height)},u.value,e.style],role:"tablist",symbol:Ip},c,l),{default:()=>[o.default?.()??r.value.map((e=>o.tab?.({item:e})??t.createVNode(Pp,t.mergeProps(e,{key:e.text,value:e.value}),{default:o[`tab.${e.value}`]?()=>o[`tab.${e.value}`]?.({item:e}):void 0})))]}),d&&t.createVNode(Rp,t.mergeProps({modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,key:"tabs-window"},c),{default:()=>[r.value.map((e=>o.item?.({item:e})??t.createVNode(Dp,{value:e.value},{default:()=>o[`item.${e.value}`]?.({item:e})}))),o.window?.()]})])})),{}}}),$p=ht({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...pn(),...Vi()},"VTextarea"),Mp=Bt()({name:"VTextarea",directives:{Intersect:gl},inheritAttrs:!1,props:$p(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const r=sa(e,"modelValue"),{isFocused:i,focus:s,blur:u}=rn(e),c=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(r.value):(r.value||"").toString().length)),d=t.computed((()=>l.maxlength?l.maxlength:!e.counter||"number"!=typeof e.counter&&"string"!=typeof e.counter?void 0:e.counter))
function v(t,a){e.autofocus&&t&&a[0].target?.focus?.()}const p=t.ref(),m=t.ref(),g=t.shallowRef(""),h=t.ref(),y=t.computed((()=>e.persistentPlaceholder||i.value||e.active))
function b(){h.value!==document.activeElement&&h.value?.focus(),i.value||s()}function V(e){b(),o("click:control",e)}function w(e){o("mousedown:control",e)}function S(a){a.stopPropagation(),b(),t.nextTick((()=>{r.value="",K(e["onClick:clear"],a)}))}function k(a){const l=a.target
if(r.value=l.value,e.modelModifiers?.trim){const e=[l.selectionStart,l.selectionEnd]
t.nextTick((()=>{l.selectionStart=e[0],l.selectionEnd=e[1]}))}}const x=t.ref(),N=t.ref(+e.rows),C=t.computed((()=>["plain","underlined"].includes(e.variant)))
function _(){e.autoGrow&&t.nextTick((()=>{if(!x.value||!m.value)return
const t=getComputedStyle(x.value),a=getComputedStyle(m.value.$el),l=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),o=x.value.scrollHeight,n=parseFloat(t.lineHeight),r=R(o??0,Math.max(parseFloat(e.rows)*n+l,parseFloat(a.getPropertyValue("--v-input-control-height"))),parseFloat(e.maxRows)*n+l||1/0)
N.value=Math.floor((r-l)/n),g.value=f(r)}))}let I
return t.watchEffect((()=>{e.autoGrow||(N.value=+e.rows)})),t.onMounted(_),t.watch(r,_),t.watch((()=>e.rows),_),t.watch((()=>e.maxRows),_),t.watch((()=>e.density),_),t.watch(x,(e=>{e?(I=new ResizeObserver(_),I.observe(x.value)):I?.disconnect()})),t.onBeforeUnmount((()=>{I?.disconnect()})),Mt((()=>{const a=!!(n.counter||e.counter||e.counterValue),o=!(!a&&!n.details),[s,f]=P(l),{modelValue:_,...I}=fn.filterProps(e),B=Si(e)
return t.createVNode(fn,t.mergeProps({ref:p,modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":C.value},e.class],style:e.style},s,I,{centerAffix:1===N.value&&!C.value,focused:i.value}),{...n,default:a=>{let{id:l,isDisabled:o,isDirty:s,isReadonly:c,isValid:d}=a
return t.createVNode(wi,t.mergeProps({ref:m,style:{"--v-textarea-control-height":g.value},onClick:V,onMousedown:w,"onClick:clear":S,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},B,{id:l.value,active:y.value||s.value,centerAffix:1===N.value&&!C.value,dirty:s.value||e.dirty,disabled:o.value,focused:i.value,error:!1===d.value}),{...n,default:a=>{let{props:{class:l,...n}}=a
return t.createVNode(t.Fragment,null,[e.prefix&&t.createVNode("span",{class:"v-text-field__prefix"},[e.prefix]),t.withDirectives(t.createVNode("textarea",t.mergeProps({ref:h,class:l,value:r.value,onInput:k,autofocus:e.autofocus,readonly:c.value,disabled:o.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:b,onBlur:u},n,f),null),[[t.resolveDirective("intersect"),{handler:v},null,{once:!0}]]),e.autoGrow&&t.withDirectives(t.createVNode("textarea",{class:[l,"v-textarea__sizer"],id:`${n.id}-sizer`,"onUpdate:modelValue":e=>r.value=e,ref:x,readonly:!0,"aria-hidden":"true"},null),[[t.vModelText,r.value]]),e.suffix&&t.createVNode("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:o?l=>t.createVNode(t.Fragment,null,[n.details?.(l),a&&t.createVNode(t.Fragment,null,[t.createVNode("span",null,null),t.createVNode(gi,{active:e.persistentCounter||i.value,value:c.value,max:d.value,disabled:e.disabled},n.counter)])]):void 0})})),vi({},p,m,h)}}),Op=ht({withBackground:Boolean,...yt(),...Sa(),...Pa()},"VThemeProvider"),Lp=Bt()({name:"VThemeProvider",props:Op(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=xa(e)
return()=>e.withBackground?t.createVNode(e.tag,{class:["v-theme-provider",o.value,e.class],style:e.style},{default:()=>[l.default?.()]}):l.default?.()}}),zp=ht({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:Ot,iconColor:String,lineColor:String,...yt(),...dl(),...ql(),...wl()},"VTimelineDivider"),jp=Bt()({name:"VTimelineDivider",props:zp(),setup(e,a){let{slots:l}=a
const{sizeClasses:o,sizeStyles:n}=Kl(e,"v-timeline-divider__dot"),{backgroundColorStyles:r,backgroundColorClasses:i}=cl(t.toRef(e,"dotColor")),{roundedClasses:s}=vl(e,"v-timeline-divider__dot"),{elevationClasses:u}=Sl(e),{backgroundColorClasses:c,backgroundColorStyles:d}=cl(t.toRef(e,"lineColor"))
return Mt((()=>t.createVNode("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t.createVNode("div",{class:["v-timeline-divider__before",c.value],style:d.value},null),!e.hideDot&&t.createVNode("div",{key:"dot",class:["v-timeline-divider__dot",u.value,s.value,o.value],style:n.value},[t.createVNode("div",{class:["v-timeline-divider__inner-dot",i.value,s.value],style:r.value},[l.default?t.createVNode(ll,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},l.default):t.createVNode(Zl,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t.createVNode("div",{class:["v-timeline-divider__after",c.value],style:d.value},null)]))),{}}}),Hp=ht({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:Ot,iconColor:String,lineInset:[Number,String],...yt(),...ol(),...wl(),...dl(),...ql(),...Pa()},"VTimelineItem"),Wp=Bt()({name:"VTimelineItem",props:Hp(),setup(e,a){let{slots:l}=a
const{dimensionStyles:o}=nl(e),n=t.shallowRef(0),r=t.ref()
return t.watch(r,(e=>{e&&(n.value=e.$el.querySelector(".v-timeline-divider__dot")?.getBoundingClientRect().width??0)}),{flush:"post"}),Mt((()=>t.createVNode("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":f(n.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${f(e.lineInset)})`:f(0)},e.style]},[t.createVNode("div",{class:"v-timeline-item__body",style:o.value},[l.default?.()]),t.createVNode(jp,{ref:r,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:l.icon}),"compact"!==e.density&&t.createVNode("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&l.opposite?.()])]))),{}}}),Up=ht({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>null==e||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...N(Hp({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...yt(),...Al(),...Pa(),...Sa()},"VTimeline"),Yp=Bt()({name:"VTimeline",props:Up(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=xa(e),{densityClasses:n}=Rl(e),{rtlClasses:r}=Va()
Ct({VTimelineDivider:{lineColor:t.toRef(e,"lineColor")},VTimelineItem:{density:t.toRef(e,"density"),dotColor:t.toRef(e,"dotColor"),fillDot:t.toRef(e,"fillDot"),hideOpposite:t.toRef(e,"hideOpposite"),iconColor:t.toRef(e,"iconColor"),lineColor:t.toRef(e,"lineColor"),lineInset:t.toRef(e,"lineInset"),size:t.toRef(e,"size")}})
const i=t.computed((()=>{const t=e.side?e.side:"default"!==e.density?"end":null
return t&&`v-timeline--side-${t}`})),s=t.computed((()=>{const t=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"]
switch(e.truncateLine){case"both":return t
case"start":return t[0]
case"end":return t[1]
default:return null}}))
return Mt((()=>t.createVNode(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,s.value,{"v-timeline--inset-line":!!e.lineInset},o.value,n.value,i.value,r.value,e.class],style:[{"--v-timeline-line-thickness":f(e.lineThickness)},e.style]},l))),{}}}),Gp=ht({...yt(),...El({variant:"text"})},"VToolbarItems"),qp=Bt()({name:"VToolbarItems",props:Gp(),setup(e,a){let{slots:l}=a
return Ct({VBtn:{color:t.toRef(e,"color"),height:"inherit",variant:t.toRef(e,"variant")}}),Mt((()=>t.createVNode("div",{class:["v-toolbar-items",e.class],style:e.style},[l.default?.()]))),{}}}),Kp=ht({id:String,text:String,...x(si({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),Xp=Bt()({name:"VTooltip",props:Kp(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=sa(e,"modelValue"),{scopeId:n}=Jr(),r=kt(),i=t.computed((()=>e.id||`v-tooltip-${r}`)),s=t.ref(),u=t.computed((()=>e.location.split(" ").length>1?e.location:e.location+" center")),c=t.computed((()=>"auto"===e.origin||"overlap"===e.origin||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center")),d=t.computed((()=>e.transition?e.transition:o.value?"scale-transition":"fade-transition")),v=t.computed((()=>t.mergeProps({"aria-describedby":i.value},e.activatorProps)))
return Mt((()=>{const a=ui.filterProps(e)
return t.createVNode(ui,t.mergeProps({ref:s,class:["v-tooltip",e.class],style:e.style,id:i.value},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,transition:d.value,absolute:!0,location:u.value,origin:c.value,persistent:!0,role:"tooltip",activatorProps:v.value,_disableGlobalStack:!0},n),{activator:l.activator,default:function(){for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o]
return l.default?.(...a)??e.text}})})),vi({},s)}}),Zp=Bt()({name:"VValidation",props:dn(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t
const l=vn(e,"validation")
return()=>a.default?.(l)}})
var Qp=Object.freeze({__proto__:null,VAlert:Ho,VAlertTitle:Lo,VApp:Ba,VAppBar:Bl,VAppBarNavIcon:Mo,VAppBarTitle:Oo,VAutocomplete:Li,VAvatar:Uo,VBadge:ji,VBanner:Gi,VBannerActions:Wi,VBannerText:Ui,VBottomNavigation:Ki,VBottomSheet:Ji,VBreadcrumbs:ns,VBreadcrumbsDivider:ts,VBreadcrumbsItem:ls,VBtn:Fo,VBtnGroup:Ml,VBtnToggle:Yl,VCard:ms,VCardActions:rs,VCardItem:ds,VCardSubtitle:ss,VCardText:ps,VCardTitle:us,VCarousel:xs,VCarouselItem:Is,VCheckbox:gn,VCheckboxBtn:tn,VChip:jn,VChipGroup:Ln,VClassIcon:Ut,VCode:Bs,VCol:Zc,VColorPicker:tu,VCombobox:lu,VComponentIcon:jt,VConfirmEdit:Vu,VContainer:Hc,VCounter:gi,VDataIterator:ac,VDataTable:$c,VDataTableFooter:rc,VDataTableHeaders:kc,VDataTableRow:_c,VDataTableRows:Bc,VDataTableServer:zc,VDataTableVirtual:Oc,VDatePicker:Rd,VDatePickerControls:hd,VDatePickerHeader:bd,VDatePickerMonth:kd,VDatePickerMonths:Nd,VDatePickerYears:_d,VDefaultsProvider:ll,VDialog:Zi,VDialogBottomTransition:ja,VDialogTopTransition:Ha,VDialogTransition:Ma,VDivider:mr,VEmptyState:Dd,VExpandTransition:el,VExpandXTransition:tl,VExpansionPanel:zd,VExpansionPanelText:$d,VExpansionPanelTitle:Od,VExpansionPanels:Wd,VFab:Yd,VFabTransition:za,VFadeTransition:Wa,VField:wi,VFieldLabel:yi,VFileInput:qd,VFooter:Xd,VForm:Qd,VHover:ev,VIcon:Zl,VImg:yl,VInfiniteScroll:lv,VInput:fn,VItem:iv,VItemGroup:rv,VKbd:sv,VLabel:Go,VLayout:cv,VLayoutItem:vv,VLazy:fv,VLigatureIcon:Wt,VList:Nr,VListGroup:rr,VListImg:Cr,VListItem:dr,VListItemAction:Ir,VListItemMedia:Pr,VListItemSubtitle:sr,VListItemTitle:ur,VListSubheader:pr,VLocaleProvider:gv,VMain:yv,VMenu:fi,VMessages:on,VNavigationDrawer:_v,VNoSsr:Iv,VOtpInput:Pv,VOverlay:ui,VPagination:oc,VParallax:Rv,VProgressCircular:eo,VProgressLinear:no,VRadio:Dv,VRadioGroup:Fv,VRangeSlider:Mv,VRating:Lv,VResponsive:il,VRow:fd,VScaleTransition:Ua,VScrollXReverseTransition:Ga,VScrollXTransition:Ya,VScrollYReverseTransition:Ka,VScrollYTransition:qa,VSelect:Ei,VSelectionControl:Jo,VSelectionControlGroup:Zo,VSheet:eu,VSkeletonLoader:Gv,VSlideGroup:$n,VSlideGroupItem:qv,VSlideXReverseTransition:Za,VSlideXTransition:Xa,VSlideYReverseTransition:Ja,VSlideYTransition:Qa,VSlider:qs,VSnackbar:Xv,VSpacer:md,VSparkline:ip,VSpeedDial:up,VStepper:kp,VStepperActions:vp,VStepperHeader:pp,VStepperItem:gp,VStepperWindow:yp,VStepperWindowItem:Vp,VSvgIcon:Ht,VSwitch:Np,VSystemBar:_p,VTab:Pp,VTable:Ac,VTabs:Fp,VTabsWindow:Rp,VTabsWindowItem:Dp,VTextField:Ni,VTextarea:Mp,VThemeProvider:Lp,VTimeline:Yp,VTimelineItem:Wp,VToolbar:Nl,VToolbarItems:qp,VToolbarTitle:Ra,VTooltip:Xp,VValidation:Zp,VVirtualScroll:Ai,VWindow:Ss,VWindowItem:Cs})
function Jp(e,t){e._mutate?.[t.instance.$.uid]&&(e._mutate[t.instance.$.uid].observer.disconnect(),delete e._mutate[t.instance.$.uid])}const ef={mounted:function(e,t){const a=t.modifiers||{},l=t.value,{once:o,immediate:n,...r}=a,i=!Object.keys(r).length,{handler:s,options:u}="object"==typeof l?l:{handler:l,options:{attributes:r?.attr??i,characterData:r?.char??i,childList:r?.child??i,subtree:r?.sub??i}},c=new MutationObserver((function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0
s?.(a,l),o&&Jp(e,t)}))
n&&s?.([],c),e._mutate=Object(e._mutate),e._mutate[t.instance.$.uid]={observer:c},c.observe(e,u)},unmounted:Jp}
const tf={mounted:function(e,t){const a=t.value,l={passive:!t.modifiers?.active}
window.addEventListener("resize",a,l),e._onResize=Object(e._onResize),e._onResize[t.instance.$.uid]={handler:a,options:l},t.modifiers?.quiet||a()},unmounted:function(e,t){if(!e._onResize?.[t.instance.$.uid])return
const{handler:a,options:l}=e._onResize[t.instance.$.uid]
window.removeEventListener("resize",a,l),delete e._onResize[t.instance.$.uid]}}
function af(e,t){const{self:a=!1}=t.modifiers??{},l=t.value,o="object"==typeof l&&l.options||{passive:!0},n="function"==typeof l||"handleEvent"in l?l:l.handler,r=a?e:t.arg?document.querySelector(t.arg):window
r&&(r.addEventListener("scroll",n,o),e._onScroll=Object(e._onScroll),e._onScroll[t.instance.$.uid]={handler:n,options:o,target:a?void 0:r})}function lf(e,t){if(!e._onScroll?.[t.instance.$.uid])return
const{handler:a,options:l,target:o=e}=e._onScroll[t.instance.$.uid]
o.removeEventListener("scroll",a,l),delete e._onScroll[t.instance.$.uid]}const of={mounted:af,unmounted:lf,updated:function(e,t){t.value!==t.oldValue&&(lf(e,t),af(e,t))}}
const nf=function(e,a){const l=function(e,a){return function(l,o,n){const r="function"==typeof a?a(o):a,i=o.value?.text??o.value??r?.text,s=m(o.value)?o.value:{},u=()=>i??l.innerHTML,c=(n.ctx===o.instance.$?function(e,t){const a=new Set,l=t=>{for(const o of t){if(!o)continue
if(o===e)return!0
let t
if(a.add(o),o.suspense?t=l([o.ssContent]):Array.isArray(o.children)?t=l(o.children):o.component?.vnode&&(t=l([o.component?.subTree])),t)return t
a.delete(o)}return!1}
if(!l([t.subTree]))throw new Error("Could not find original vnode")
const o=Array.from(a).reverse()
for(const e of o)if(e.component)return e.component
return t}(n,o.instance.$)?.provides:n.ctx?.provides)??o.instance.$.provides,d=t.h(e,t.mergeProps(r,s),u)
d.appContext=Object.assign(Object.create(null),o.instance.$.appContext,{provides:c}),t.render(d,l)}}("string"==typeof e?t.resolveComponent(e):e,a)
return{mounted:l,updated:l,unmounted(e){t.render(null,e)}}}(Xp,(e=>({activator:"parent",location:e.arg?.replace("-"," ")??"top",text:"boolean"==typeof e.value?void 0:e.value})))
var rf=Object.freeze({__proto__:null,ClickOutside:ri,Intersect:gl,Mutate:ef,Resize:tf,Ripple:Do,Scroll:of,Tooltip:nf,Touch:ys})
function sf(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{blueprint:l,...o}=e,n=$(l,o),{aliases:r={},components:i={},directives:s={}}=n,u=function(e){return t.ref(e)}(n.defaults),c=function(e,l){const{thresholds:o,mobileBreakpoint:n}=Vn(e),r=t.shallowRef(Sn(l)),i=t.shallowRef(kn(l)),s=t.reactive({}),u=t.shallowRef(wn(l))
function c(){r.value=Sn(),u.value=wn()}return t.watchEffect((()=>{const e=u.value<o.sm,t=u.value<o.md&&!e,a=u.value<o.lg&&!(t||e),l=u.value<o.xl&&!(a||t||e),c=u.value<o.xxl&&!(l||a||t||e),d=u.value>=o.xxl,v=e?"xs":t?"sm":a?"md":l?"lg":c?"xl":"xxl",p="number"==typeof n?n:o[n],f=u.value<p
s.xs=e,s.sm=t,s.md=a,s.lg=l,s.xl=c,s.xxl=d,s.smAndUp=!e,s.mdAndUp=!(e||t),s.lgAndUp=!(e||t||a),s.xlAndUp=!(e||t||a||l),s.smAndDown=!(a||l||c||d),s.mdAndDown=!(l||c||d),s.lgAndDown=!(c||d),s.xlAndDown=!d,s.name=v,s.height=r.value,s.width=u.value,s.mobile=f,s.mobileBreakpoint=n,s.platform=i.value,s.thresholds=o})),a&&window.addEventListener("resize",c,{passive:!0}),{...t.toRefs(s),update:function(){c(),i.value=kn()},ssr:!!l}}(n.display,n.ssr),d=ka(n.theme),v=Yt(n.icons),p=ha(n.locale),f=function(e,t){const a=$({adapter:fu,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e)
return{options:a,instance:hu(a,t)}}(n.date,p),m=function(e,t){return{rtl:t.isRtl,options:$({container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:(4-2*e)*e-1,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}},e)}}(n.goTo,p)
return{install:e=>{for(const t in s)e.directive(t,s[t])
for(const t in i)e.component(t,i[t])
for(const t in r)e.component(t,It({...r[t],name:t,aliasName:r[t].name}))
if(d.install(e),e.provide(xt,u),e.provide(yn,c),e.provide(wa,d),e.provide(Lt,v),e.provide(ga,p),e.provide(mu,f.options),e.provide(gu,f.instance),e.provide(Cn,m),a&&n.ssr)if(e.$nuxt)e.$nuxt.hook("app:suspense:resolve",(()=>{c.update()}))
else{const{mount:a}=e
e.mount=function(){const l=a(...arguments)
return t.nextTick((()=>c.update())),e.mount=a,l}}kt.reset(),("boolean"!=typeof __VUE_OPTIONS_API__||__VUE_OPTIONS_API__)&&e.mixin({computed:{$vuetify(){return t.reactive({defaults:uf.call(this,xt),display:uf.call(this,yn),theme:uf.call(this,wa),icons:uf.call(this,Lt),locale:uf.call(this,ga),date:uf.call(this,gu)})}}})},defaults:u,display:c,theme:d,icons:v,locale:p,date:f,goTo:m}}function uf(e){const t=this.$,a=t.parent?.provides??t.vnode.appContext?.provides
if(a&&e in a)return a[e]}sf.version="3.7.1"
const cf=function(){return sf({components:Qp,directives:rf,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}})},df="3.7.1"
cf.version=df,e.blueprints=Qt,e.components=Qp,e.createVuetify=cf,e.directives=rf,e.useDate=yu,e.useDefaults=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0
const{props:a,provideSubDefaults:l}=_t(e,t)
return l(),a},e.useDisplay=Nn,e.useGoTo=Pn,e.useLayout=oa,e.useLocale=ya,e.useRtl=Va,e.useTheme=Na,e.version=df}))
//# sourceMappingURL=vuetify.min.js.map
