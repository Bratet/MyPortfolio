import{r,_ as m,o as Se,c as $e,u as te,e as ge,j as C,a as we,B as F,R as B,p as Ee}from"./index.5c7fe767.js";function Pe(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function oe(...e){return t=>e.forEach(o=>Pe(o,t))}function _(...e){return r.exports.useCallback(oe(...e),e)}const re=r.exports.forwardRef((e,t)=>{const{children:o,...l}=e,n=r.exports.Children.toArray(o),c=n.find(Ce);if(c){const s=c.props.children,a=n.map(i=>i===c?r.exports.Children.count(s)>1?r.exports.Children.only(null):r.exports.isValidElement(s)?s.props.children:null:i);return r.exports.createElement(j,m({},l,{ref:t}),r.exports.isValidElement(s)?r.exports.cloneElement(s,void 0,a):null)}return r.exports.createElement(j,m({},l,{ref:t}),o)});re.displayName="Slot";const j=r.exports.forwardRef((e,t)=>{const{children:o,...l}=e;return r.exports.isValidElement(o)?r.exports.cloneElement(o,{...Ae(l,o.props),ref:oe(t,o.ref)}):r.exports.Children.count(o)>1?r.exports.Children.only(null):null});j.displayName="SlotClone";const ye=({children:e})=>r.exports.createElement(r.exports.Fragment,null,e);function Ce(e){return r.exports.isValidElement(e)&&e.type===ye}function Ae(e,t){const o={...t};for(const l in t){const n=e[l],c=t[l];/^on[A-Z]/.test(l)?o[l]=(...a)=>{c==null||c(...a),n==null||n(...a)}:l==="style"?o[l]={...n,...c}:l==="className"&&(o[l]=[n,c].filter(Boolean).join(" "))}return{...e,...o}}const Re=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],M=Re.reduce((e,t)=>{const o=r.exports.forwardRef((l,n)=>{const{asChild:c,...s}=l,a=c?re:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(a,m({},s,{ref:n}))});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{}),q=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{};function _e(e,t){return r.exports.useReducer((o,l)=>{const n=t[o][l];return n!=null?n:o},e)}const z=e=>{const{present:t,children:o}=e,l=Te(t),n=typeof o=="function"?o({present:l.isPresent}):r.exports.Children.only(o),c=_(l.ref,n.ref);return typeof o=="function"||l.isPresent?r.exports.cloneElement(n,{ref:c}):null};z.displayName="Presence";function Te(e){const[t,o]=r.exports.useState(),l=r.exports.useRef({}),n=r.exports.useRef(e),c=r.exports.useRef("none"),s=e?"mounted":"unmounted",[a,i]=_e(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.exports.useEffect(()=>{const d=k(l.current);c.current=a==="mounted"?d:"none"},[a]),q(()=>{const d=l.current,u=n.current;if(u!==e){const f=c.current,b=k(d);e?i("MOUNT"):b==="none"||(d==null?void 0:d.display)==="none"?i("UNMOUNT"):i(u&&f!==b?"ANIMATION_OUT":"UNMOUNT"),n.current=e}},[e,i]),q(()=>{if(t){const d=p=>{const b=k(l.current).includes(p.animationName);p.target===t&&b&&Se.exports.flushSync(()=>i("ANIMATION_END"))},u=p=>{p.target===t&&(c.current=k(l.current))};return t.addEventListener("animationstart",u),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",u),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:r.exports.useCallback(d=>{d&&(l.current=getComputedStyle(d)),o(d)},[])}}function k(e){return(e==null?void 0:e.animationName)||"none"}function Ne(e,t=[]){let o=[];function l(c,s){const a=r.exports.createContext(s),i=o.length;o=[...o,s];function d(p){const{scope:f,children:b,...h}=p,$=(f==null?void 0:f[e][i])||a,w=r.exports.useMemo(()=>h,Object.values(h));return r.exports.createElement($.Provider,{value:w},b)}function u(p,f){const b=(f==null?void 0:f[e][i])||a,h=r.exports.useContext(b);if(h)return h;if(s!==void 0)return s;throw new Error(`\`${p}\` must be used within \`${c}\``)}return d.displayName=c+"Provider",[d,u]}const n=()=>{const c=o.map(s=>r.exports.createContext(s));return function(a){const i=(a==null?void 0:a[e])||c;return r.exports.useMemo(()=>({[`__scope${e}`]:{...a,[e]:i}}),[a,i])}};return n.scopeName=e,[l,De(n,...t)]}function De(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const l=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(c){const s=l.reduce((a,{useScope:i,scopeName:d})=>{const p=i(c)[`__scope${d}`];return{...a,...p}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return o.scopeName=t.scopeName,o}function A(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...o)=>{var l;return(l=t.current)===null||l===void 0?void 0:l.call(t,...o)},[])}const Le=r.exports.createContext(void 0);function Oe(e){const t=r.exports.useContext(Le);return e||t||"ltr"}function Me(e,[t,o]){return Math.min(o,Math.max(t,e))}function R(e,t,{checkForDefaultPrevented:o=!0}={}){return function(n){if(e==null||e(n),o===!1||!n.defaultPrevented)return t==null?void 0:t(n)}}function ze(e,t){return r.exports.useReducer((o,l)=>{const n=t[o][l];return n!=null?n:o},e)}const ne="ScrollArea",[le,dt]=Ne(ne),[He,S]=le(ne),Ie=r.exports.forwardRef((e,t)=>{const{__scopeScrollArea:o,type:l="hover",dir:n,scrollHideDelay:c=600,...s}=e,[a,i]=r.exports.useState(null),[d,u]=r.exports.useState(null),[p,f]=r.exports.useState(null),[b,h]=r.exports.useState(null),[$,w]=r.exports.useState(null),[v,T]=r.exports.useState(0),[g,N]=r.exports.useState(0),[y,O]=r.exports.useState(!1),[H,I]=r.exports.useState(!1),x=_(t,D=>i(D)),E=Oe(n);return r.exports.createElement(He,{scope:o,type:l,dir:E,scrollHideDelay:c,scrollArea:a,viewport:d,onViewportChange:u,content:p,onContentChange:f,scrollbarX:b,onScrollbarXChange:h,scrollbarXEnabled:y,onScrollbarXEnabledChange:O,scrollbarY:$,onScrollbarYChange:w,scrollbarYEnabled:H,onScrollbarYEnabledChange:I,onCornerWidthChange:T,onCornerHeightChange:N},r.exports.createElement(M.div,m({dir:E},s,{ref:x,style:{position:"relative",["--radix-scroll-area-corner-width"]:v+"px",["--radix-scroll-area-corner-height"]:g+"px",...e.style}})))}),ke="ScrollAreaViewport",We=r.exports.forwardRef((e,t)=>{const{__scopeScrollArea:o,children:l,...n}=e,c=S(ke,o),s=r.exports.useRef(null),a=_(t,s,c.onViewportChange);return r.exports.createElement(r.exports.Fragment,null,r.exports.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),r.exports.createElement(M.div,m({"data-radix-scroll-area-viewport":""},n,{ref:a,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),r.exports.createElement("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},l)))}),P="ScrollAreaScrollbar",Ue=r.exports.forwardRef((e,t)=>{const{forceMount:o,...l}=e,n=S(P,e.__scopeScrollArea),{onScrollbarXEnabledChange:c,onScrollbarYEnabledChange:s}=n,a=e.orientation==="horizontal";return r.exports.useEffect(()=>(a?c(!0):s(!0),()=>{a?c(!1):s(!1)}),[a,c,s]),n.type==="hover"?r.exports.createElement(Xe,m({},l,{ref:t,forceMount:o})):n.type==="scroll"?r.exports.createElement(Ye,m({},l,{ref:t,forceMount:o})):n.type==="auto"?r.exports.createElement(ce,m({},l,{ref:t,forceMount:o})):n.type==="always"?r.exports.createElement(G,m({},l,{ref:t})):null}),Xe=r.exports.forwardRef((e,t)=>{const{forceMount:o,...l}=e,n=S(P,e.__scopeScrollArea),[c,s]=r.exports.useState(!1);return r.exports.useEffect(()=>{const a=n.scrollArea;let i=0;if(a){const d=()=>{window.clearTimeout(i),s(!0)},u=()=>{i=window.setTimeout(()=>s(!1),n.scrollHideDelay)};return a.addEventListener("pointerenter",d),a.addEventListener("pointerleave",u),()=>{window.clearTimeout(i),a.removeEventListener("pointerenter",d),a.removeEventListener("pointerleave",u)}}},[n.scrollArea,n.scrollHideDelay]),r.exports.createElement(z,{present:o||c},r.exports.createElement(ce,m({"data-state":c?"visible":"hidden"},l,{ref:t})))}),Ye=r.exports.forwardRef((e,t)=>{const{forceMount:o,...l}=e,n=S(P,e.__scopeScrollArea),c=e.orientation==="horizontal",s=Y(()=>i("SCROLL_END"),100),[a,i]=ze("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return r.exports.useEffect(()=>{if(a==="idle"){const d=window.setTimeout(()=>i("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(d)}},[a,n.scrollHideDelay,i]),r.exports.useEffect(()=>{const d=n.viewport,u=c?"scrollLeft":"scrollTop";if(d){let p=d[u];const f=()=>{const b=d[u];p!==b&&(i("SCROLL"),s()),p=b};return d.addEventListener("scroll",f),()=>d.removeEventListener("scroll",f)}},[n.viewport,c,i,s]),r.exports.createElement(z,{present:o||a!=="hidden"},r.exports.createElement(G,m({"data-state":a==="hidden"?"hidden":"visible"},l,{ref:t,onPointerEnter:R(e.onPointerEnter,()=>i("POINTER_ENTER")),onPointerLeave:R(e.onPointerLeave,()=>i("POINTER_LEAVE"))})))}),ce=r.exports.forwardRef((e,t)=>{const o=S(P,e.__scopeScrollArea),{forceMount:l,...n}=e,[c,s]=r.exports.useState(!1),a=e.orientation==="horizontal",i=Y(()=>{if(o.viewport){const d=o.viewport.offsetWidth<o.viewport.scrollWidth,u=o.viewport.offsetHeight<o.viewport.scrollHeight;s(a?d:u)}},10);return L(o.viewport,i),L(o.content,i),r.exports.createElement(z,{present:l||c},r.exports.createElement(G,m({"data-state":c?"visible":"hidden"},n,{ref:t})))}),G=r.exports.forwardRef((e,t)=>{const{orientation:o="vertical",...l}=e,n=S(P,e.__scopeScrollArea),c=r.exports.useRef(null),s=r.exports.useRef(0),[a,i]=r.exports.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=de(a.viewport,a.content),u={...l,sizes:a,onSizesChange:i,hasThumb:Boolean(d>0&&d<1),onThumbChange:f=>c.current=f,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:f=>s.current=f};function p(f,b){return Je(f,s.current,a,b)}return o==="horizontal"?r.exports.createElement(Ve,m({},u,{ref:t,onThumbPositionChange:()=>{if(n.viewport&&c.current){const f=n.viewport.scrollLeft,b=J(f,a,n.dir);c.current.style.transform=`translate3d(${b}px, 0, 0)`}},onWheelScroll:f=>{n.viewport&&(n.viewport.scrollLeft=f)},onDragScroll:f=>{n.viewport&&(n.viewport.scrollLeft=p(f,n.dir))}})):o==="vertical"?r.exports.createElement(Be,m({},u,{ref:t,onThumbPositionChange:()=>{if(n.viewport&&c.current){const f=n.viewport.scrollTop,b=J(f,a);c.current.style.transform=`translate3d(0, ${b}px, 0)`}},onWheelScroll:f=>{n.viewport&&(n.viewport.scrollTop=f)},onDragScroll:f=>{n.viewport&&(n.viewport.scrollTop=p(f))}})):null}),Ve=r.exports.forwardRef((e,t)=>{const{sizes:o,onSizesChange:l,...n}=e,c=S(P,e.__scopeScrollArea),[s,a]=r.exports.useState(),i=r.exports.useRef(null),d=_(t,i,c.onScrollbarXChange);return r.exports.useEffect(()=>{i.current&&a(getComputedStyle(i.current))},[i]),r.exports.createElement(ae,m({"data-orientation":"horizontal"},n,{ref:d,sizes:o,style:{bottom:0,left:c.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:c.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,["--radix-scroll-area-thumb-width"]:X(o)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,p)=>{if(c.viewport){const f=c.viewport.scrollLeft+u.deltaX;e.onWheelScroll(f),fe(f,p)&&u.preventDefault()}},onResize:()=>{i.current&&c.viewport&&s&&l({content:c.viewport.scrollWidth,viewport:c.viewport.offsetWidth,scrollbar:{size:i.current.clientWidth,paddingStart:W(s.paddingLeft),paddingEnd:W(s.paddingRight)}})}}))}),Be=r.exports.forwardRef((e,t)=>{const{sizes:o,onSizesChange:l,...n}=e,c=S(P,e.__scopeScrollArea),[s,a]=r.exports.useState(),i=r.exports.useRef(null),d=_(t,i,c.onScrollbarYChange);return r.exports.useEffect(()=>{i.current&&a(getComputedStyle(i.current))},[i]),r.exports.createElement(ae,m({"data-orientation":"vertical"},n,{ref:d,sizes:o,style:{top:0,right:c.dir==="ltr"?0:void 0,left:c.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)",["--radix-scroll-area-thumb-height"]:X(o)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,p)=>{if(c.viewport){const f=c.viewport.scrollTop+u.deltaY;e.onWheelScroll(f),fe(f,p)&&u.preventDefault()}},onResize:()=>{i.current&&c.viewport&&s&&l({content:c.viewport.scrollHeight,viewport:c.viewport.offsetHeight,scrollbar:{size:i.current.clientHeight,paddingStart:W(s.paddingTop),paddingEnd:W(s.paddingBottom)}})}}))}),[Fe,se]=le(P),ae=r.exports.forwardRef((e,t)=>{const{__scopeScrollArea:o,sizes:l,hasThumb:n,onThumbChange:c,onThumbPointerUp:s,onThumbPointerDown:a,onThumbPositionChange:i,onDragScroll:d,onWheelScroll:u,onResize:p,...f}=e,b=S(P,o),[h,$]=r.exports.useState(null),w=_(t,x=>$(x)),v=r.exports.useRef(null),T=r.exports.useRef(""),g=b.viewport,N=l.content-l.viewport,y=A(u),O=A(i),H=Y(p,10);function I(x){if(v.current){const E=x.clientX-v.current.left,D=x.clientY-v.current.top;d({x:E,y:D})}}return r.exports.useEffect(()=>{const x=E=>{const D=E.target;(h==null?void 0:h.contains(D))&&y(E,N)};return document.addEventListener("wheel",x,{passive:!1}),()=>document.removeEventListener("wheel",x,{passive:!1})},[g,h,N,y]),r.exports.useEffect(O,[l,O]),L(h,H),L(b.content,H),r.exports.createElement(Fe,{scope:o,scrollbar:h,hasThumb:n,onThumbChange:A(c),onThumbPointerUp:A(s),onThumbPositionChange:O,onThumbPointerDown:A(a)},r.exports.createElement(M.div,m({},f,{ref:w,style:{position:"absolute",...f.style},onPointerDown:R(e.onPointerDown,x=>{x.button===0&&(x.target.setPointerCapture(x.pointerId),v.current=h.getBoundingClientRect(),T.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",I(x))}),onPointerMove:R(e.onPointerMove,I),onPointerUp:R(e.onPointerUp,x=>{x.target.releasePointerCapture(x.pointerId),document.body.style.webkitUserSelect=T.current,v.current=null})})))}),Z="ScrollAreaThumb",je=r.exports.forwardRef((e,t)=>{const{forceMount:o,...l}=e,n=se(Z,e.__scopeScrollArea);return r.exports.createElement(z,{present:o||n.hasThumb},r.exports.createElement(qe,m({ref:t},l)))}),qe=r.exports.forwardRef((e,t)=>{const{__scopeScrollArea:o,style:l,...n}=e,c=S(Z,o),s=se(Z,o),{onThumbPositionChange:a}=s,i=_(t,p=>s.onThumbChange(p)),d=r.exports.useRef(),u=Y(()=>{d.current&&(d.current(),d.current=void 0)},100);return r.exports.useEffect(()=>{const p=c.viewport;if(p){const f=()=>{if(u(),!d.current){const b=Ke(p,a);d.current=b,a()}};return a(),p.addEventListener("scroll",f),()=>p.removeEventListener("scroll",f)}},[c.viewport,u,a]),r.exports.createElement(M.div,m({"data-state":s.hasThumb?"visible":"hidden"},n,{ref:i,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:R(e.onPointerDownCapture,p=>{const b=p.target.getBoundingClientRect(),h=p.clientX-b.left,$=p.clientY-b.top;s.onThumbPointerDown({x:h,y:$})}),onPointerUp:R(e.onPointerUp,s.onThumbPointerUp)}))}),ie="ScrollAreaCorner",Ze=r.exports.forwardRef((e,t)=>{const o=S(ie,e.__scopeScrollArea),l=Boolean(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&l?r.exports.createElement(Ge,m({},e,{ref:t})):null}),Ge=r.exports.forwardRef((e,t)=>{const{__scopeScrollArea:o,...l}=e,n=S(ie,o),[c,s]=r.exports.useState(0),[a,i]=r.exports.useState(0),d=Boolean(c&&a);return L(n.scrollbarX,()=>{var u;const p=((u=n.scrollbarX)===null||u===void 0?void 0:u.offsetHeight)||0;n.onCornerHeightChange(p),i(p)}),L(n.scrollbarY,()=>{var u;const p=((u=n.scrollbarY)===null||u===void 0?void 0:u.offsetWidth)||0;n.onCornerWidthChange(p),s(p)}),d?r.exports.createElement(M.div,m({},l,{ref:t,style:{width:c,height:a,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function W(e){return e?parseInt(e,10):0}function de(e,t){const o=e/t;return isNaN(o)?0:o}function X(e){const t=de(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,l=(e.scrollbar.size-o)*t;return Math.max(l,18)}function Je(e,t,o,l="ltr"){const n=X(o),c=n/2,s=t||c,a=n-s,i=o.scrollbar.paddingStart+s,d=o.scrollbar.size-o.scrollbar.paddingEnd-a,u=o.content-o.viewport,p=l==="ltr"?[0,u]:[u*-1,0];return ue([i,d],p)(e)}function J(e,t,o="ltr"){const l=X(t),n=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,c=t.scrollbar.size-n,s=t.content-t.viewport,a=c-l,i=o==="ltr"?[0,s]:[s*-1,0],d=Me(e,i);return ue([0,s],[0,a])(d)}function ue(e,t){return o=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const l=(t[1]-t[0])/(e[1]-e[0]);return t[0]+l*(o-e[0])}}function fe(e,t){return e>0&&e<t}const Ke=(e,t=()=>{})=>{let o={left:e.scrollLeft,top:e.scrollTop},l=0;return function n(){const c={left:e.scrollLeft,top:e.scrollTop},s=o.left!==c.left,a=o.top!==c.top;(s||a)&&t(),o=c,l=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(l)};function Y(e,t){const o=A(e),l=r.exports.useRef(0);return r.exports.useEffect(()=>()=>window.clearTimeout(l.current),[]),r.exports.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(o,t)},[o,t])}function L(e,t){const o=A(t);q(()=>{let l=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(l),l=window.requestAnimationFrame(o)});return n.observe(e),()=>{window.cancelAnimationFrame(l),n.unobserve(e)}}},[e,o])}const Qe=Ie,et=We,K=Ue,Q=je,tt=Ze;var ot=$e((e,{scrollbarSize:t,offsetScrollbars:o,scrollbarHovered:l,hidden:n},c)=>({root:{overflow:"hidden"},viewport:{width:"100%",height:"100%",paddingRight:o?t:void 0,paddingBottom:o?t:void 0},scrollbar:{display:n?"none":"flex",userSelect:"none",touchAction:"none",boxSizing:"border-box",padding:t/5,transition:"background-color 150ms ease, opacity 150ms ease","&:hover":{backgroundColor:e.colorScheme==="dark"?e.colors.dark[8]:e.colors.gray[0],[`& .${c("thumb")}`]:{backgroundColor:e.colorScheme==="dark"?e.fn.rgba(e.white,.5):e.fn.rgba(e.black,.5)}},'&[data-orientation="vertical"]':{width:t},'&[data-orientation="horizontal"]':{flexDirection:"column",height:t},'&[data-state="hidden"]':{display:"none",opacity:0}},thumb:{ref:c("thumb"),flex:1,backgroundColor:e.colorScheme==="dark"?e.fn.rgba(e.white,.4):e.fn.rgba(e.black,.4),borderRadius:t,position:"relative",transition:"background-color 150ms ease",display:n?"none":void 0,"&::before":{content:'""',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%"}},corner:{backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[0],transition:"opacity 150ms ease",opacity:l?1:0,display:n?"none":void 0}}));const rt=ot;var nt=Object.defineProperty,lt=Object.defineProperties,ct=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,ee=(e,t,o)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,he=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&ee(e,o,t[o]);if(U)for(var o of U(t))be.call(t,o)&&ee(e,o,t[o]);return e},st=(e,t)=>lt(e,ct(t)),me=(e,t)=>{var o={};for(var l in e)pe.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(e!=null&&U)for(var l of U(e))t.indexOf(l)<0&&be.call(e,l)&&(o[l]=e[l]);return o};const xe={scrollbarSize:12,scrollHideDelay:1e3,type:"hover",offsetScrollbars:!1},V=r.exports.forwardRef((e,t)=>{const o=te("ScrollArea",xe,e),{children:l,className:n,classNames:c,styles:s,scrollbarSize:a,scrollHideDelay:i,type:d,dir:u,offsetScrollbars:p,viewportRef:f,onScrollPositionChange:b,unstyled:h}=o,$=me(o,["children","className","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled"]),[w,v]=r.exports.useState(!1),T=ge(),{classes:g,cx:N}=rt({scrollbarSize:a,offsetScrollbars:p,scrollbarHovered:w,hidden:d==="never"},{name:"ScrollArea",classNames:c,styles:s,unstyled:h});return C(Qe,{type:d==="never"?"always":d,scrollHideDelay:i,dir:u||T.dir,ref:t,asChild:!0,children:we(F,{...he({className:N(g.root,n)},$),children:[C(et,{className:g.viewport,ref:f,onScroll:typeof b=="function"?({currentTarget:y})=>b({x:y.scrollLeft,y:y.scrollTop}):void 0,children:l}),C(K,{orientation:"horizontal",className:g.scrollbar,forceMount:!0,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:C(Q,{className:g.thumb})}),C(K,{orientation:"vertical",className:g.scrollbar,forceMount:!0,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:C(Q,{className:g.thumb})}),C(tt,{className:g.corner})]})})}),ve=r.exports.forwardRef((e,t)=>{const o=te("ScrollAreaAutosize",xe,e),{maxHeight:l,children:n,classNames:c,styles:s,scrollbarSize:a,scrollHideDelay:i,type:d,dir:u,offsetScrollbars:p,viewportRef:f,onScrollPositionChange:b,unstyled:h,sx:$}=o,w=me(o,["maxHeight","children","classNames","styles","scrollbarSize","scrollHideDelay","type","dir","offsetScrollbars","viewportRef","onScrollPositionChange","unstyled","sx"]);return B.createElement(F,st(he({},w),{ref:t,sx:[{display:"flex",maxHeight:l},...Ee($)]}),B.createElement(F,{sx:{display:"flex",flexDirection:"column",flex:1}},B.createElement(V,{classNames:c,styles:s,scrollHideDelay:i,scrollbarSize:a,type:d,dir:u,offsetScrollbars:p,viewportRef:f,onScrollPositionChange:b,unstyled:h},n)))});ve.displayName="@mantine/core/ScrollAreaAutosize";V.displayName="@mantine/core/ScrollArea";V.Autosize=ve;const ut=V;export{ut as S};
