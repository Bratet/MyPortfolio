import{r as p,j as de,R as ee,u as pt,e as Ue,o as ze,q as Ye,b as Oe}from"./index.bc99c009.js";function Rn(e){const t=p.exports.createContext(null);return[({children:o,value:s})=>de(t.Provider,{value:s,children:o}),()=>{const o=p.exports.useContext(t);if(o===null)throw new Error(e);return o}]}function En(e){return Array.isArray(e)||e===null?!1:typeof e=="object"?e.type!==ee.Fragment:!1}const qe=p.exports.createContext({classNames:{},styles:{},unstyled:!1});function Pn({children:e,classNames:t,unstyled:n,styles:r,staticSelector:o}){return de(qe.Provider,{value:{classNames:t,styles:r,unstyled:n,staticSelector:o},children:e})}function Cn(){return p.exports.useContext(qe)}const Ge=typeof document<"u"?p.exports.useLayoutEffect:p.exports.useEffect,mt=()=>`mantine-${Math.random().toString(36).slice(2,11)}`,gt=ee["useId".toString()]||(()=>{});function ht(){const[e,t]=p.exports.useState("");return Ge(()=>{t(mt())},[]),e}function vt(){const e=gt();return e?`mantine-${e.replace(/:/g,"")}`:""}function On(e){return typeof e=="string"?e:vt()||ht()}function xt(e,t){typeof e=="function"?e(t):typeof e=="object"&&e!==null&&"current"in e&&(e.current=t)}function wt(...e){return t=>{e.forEach(n=>xt(n,t))}}function Ln(...e){return p.exports.useCallback(wt(...e),e)}function An({value:e,defaultValue:t,finalValue:n,onChange:r=()=>{}}){const[o,s]=p.exports.useState(t!==void 0?t:n),c=i=>{s(i),r==null||r(i)};return e!==void 0?[e,r,!0]:[o,c,!1]}function Ke(e){const{children:t,target:n,className:r}=pt("Portal",{},e),o=Ue(),[s,c]=p.exports.useState(!1),i=p.exports.useRef();return Ge(()=>(c(!0),i.current=n?typeof n=="string"?document.querySelector(n):n:document.createElement("div"),n||document.body.appendChild(i.current),()=>{!n&&document.body.removeChild(i.current)}),[n]),s?ze.exports.createPortal(de("div",{className:r,dir:o.dir,children:t}),i.current):null}Ke.displayName="@mantine/core/Portal";var yt=Object.defineProperty,se=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,Le=(e,t,n)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bt=(e,t)=>{for(var n in t||(t={}))Je.call(t,n)&&Le(e,n,t[n]);if(se)for(var n of se(t))Qe.call(t,n)&&Le(e,n,t[n]);return e},Rt=(e,t)=>{var n={};for(var r in e)Je.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&se)for(var r of se(e))t.indexOf(r)<0&&Qe.call(e,r)&&(n[r]=e[r]);return n};function Et(e){var t=e,{withinPortal:n=!0,children:r}=t,o=Rt(t,["withinPortal","children"]);return n?ee.createElement(Ke,bt({},o),r):ee.createElement(ee.Fragment,null,r)}Et.displayName="@mantine/core/OptionalPortal";function F(e){return e.split("-")[0]}function re(e){return e.split("-")[1]}function G(e){return["top","bottom"].includes(F(e))?"x":"y"}function Re(e){return e==="y"?"height":"width"}function Ae(e,t,n){let{reference:r,floating:o}=e;const s=r.x+r.width/2-o.width/2,c=r.y+r.height/2-o.height/2,i=G(t),l=Re(i),f=r[l]/2-o[l]/2,d=F(t),a=i==="x";let u;switch(d){case"top":u={x:s,y:r.y-o.height};break;case"bottom":u={x:s,y:r.y+r.height};break;case"right":u={x:r.x+r.width,y:c};break;case"left":u={x:r.x-o.width,y:c};break;default:u={x:r.x,y:r.y}}switch(re(t)){case"start":u[i]-=f*(n&&a?-1:1);break;case"end":u[i]+=f*(n&&a?-1:1);break}return u}const Pt=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:c}=n,i=await(c.isRTL==null?void 0:c.isRTL(t));let l=await c.getElementRects({reference:e,floating:t,strategy:o}),{x:f,y:d}=Ae(l,r,i),a=r,u={},g=0;for(let m=0;m<s.length;m++){const{name:h,fn:x}=s[m],{x:w,y,data:E,reset:v}=await x({x:f,y:d,initialPlacement:r,placement:a,strategy:o,middlewareData:u,rects:l,platform:c,elements:{reference:e,floating:t}});if(f=w!=null?w:f,d=y!=null?y:d,u={...u,[h]:{...u[h],...E}},v&&g<=50){g++,typeof v=="object"&&(v.placement&&(a=v.placement),v.rects&&(l=v.rects===!0?await c.getElementRects({reference:e,floating:t,strategy:o}):v.rects),{x:f,y:d}=Ae(l,a,i)),m=-1;continue}}return{x:f,y:d,placement:a,strategy:o,middlewareData:u}};function Ct(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ee(e){return typeof e!="number"?Ct(e):{top:e,right:e,bottom:e,left:e}}function ne(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function Pe(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:s,rects:c,elements:i,strategy:l}=e,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:a="floating",altBoundary:u=!1,padding:g=0}=t,m=Ee(g),x=i[u?a==="floating"?"reference":"floating":a],w=ne(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(i.floating)),boundary:f,rootBoundary:d,strategy:l})),y=ne(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:a==="floating"?{...c.floating,x:r,y:o}:c.reference,offsetParent:await(s.getOffsetParent==null?void 0:s.getOffsetParent(i.floating)),strategy:l}):c[a]);return{top:w.top-y.top+m.top,bottom:y.bottom-w.bottom+m.bottom,left:w.left-y.left+m.left,right:y.right-w.right+m.right}}const Ze=Math.min,X=Math.max;function we(e,t,n){return X(e,Ze(t,n))}const Se=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e!=null?e:{},{x:o,y:s,placement:c,rects:i,platform:l}=t;if(n==null)return{};const f=Ee(r),d={x:o,y:s},a=G(c),u=re(c),g=Re(a),m=await l.getDimensions(n),h=a==="y"?"top":"left",x=a==="y"?"bottom":"right",w=i.reference[g]+i.reference[a]-d[a]-i.floating[g],y=d[a]-i.reference[a],E=await(l.getOffsetParent==null?void 0:l.getOffsetParent(n));let v=E?a==="y"?E.clientHeight||0:E.clientWidth||0:0;v===0&&(v=i.floating[g]);const b=w/2-y/2,C=f[h],R=v-m[g]-f[x],S=v/2-m[g]/2+b,O=we(C,S,R),T=(u==="start"?f[h]:f[x])>0&&S!==O&&i.reference[g]<=i.floating[g]?S<C?C-S:R-S:0;return{[a]:d[a]-T,data:{[a]:O,centerOffset:S-O}}}}),Ot={left:"right",right:"left",bottom:"top",top:"bottom"};function ce(e){return e.replace(/left|right|bottom|top/g,t=>Ot[t])}function Lt(e,t,n){n===void 0&&(n=!1);const r=re(e),o=G(e),s=Re(o);let c=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(c=ce(c)),{main:c,cross:ce(c)}}const At={start:"end",end:"start"};function Te(e){return e.replace(/start|end/g,t=>At[t])}function St(e){const t=ce(e);return[Te(e),t,Te(t)]}const Sn=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:o,rects:s,initialPlacement:c,platform:i,elements:l}=t,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:a,fallbackStrategy:u="bestFit",flipAlignment:g=!0,...m}=e,h=F(r),w=a||(h===c||!g?[ce(c)]:St(c)),y=[c,...w],E=await Pe(t,m),v=[];let b=((n=o.flip)==null?void 0:n.overflows)||[];if(f&&v.push(E[h]),d){const{main:O,cross:_}=Lt(r,s,await(i.isRTL==null?void 0:i.isRTL(l.floating)));v.push(E[O],E[_])}if(b=[...b,{placement:r,overflows:v}],!v.every(O=>O<=0)){var C,R;const O=((C=(R=o.flip)==null?void 0:R.index)!=null?C:0)+1,_=y[O];if(_)return{data:{index:O,overflows:b},reset:{placement:_}};let L="bottom";switch(u){case"bestFit":{var S;const T=(S=b.map($=>[$,$.overflows.filter(P=>P>0).reduce((P,A)=>P+A,0)]).sort(($,P)=>$[1]-P[1])[0])==null?void 0:S[0].placement;T&&(L=T);break}case"initialPlacement":L=c;break}if(r!==L)return{reset:{placement:L}}}return{}}}};async function Tt(e,t){const{placement:n,platform:r,elements:o}=e,s=await(r.isRTL==null?void 0:r.isRTL(o.floating)),c=F(n),i=re(n),l=G(n)==="x",f=["left","top"].includes(c)?-1:1,d=s&&l?-1:1,a=typeof t=="function"?t(e):t;let{mainAxis:u,crossAxis:g,alignmentAxis:m}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return i&&typeof m=="number"&&(g=i==="end"?m*-1:m),l?{x:g*d,y:u*f}:{x:u*f,y:g*d}}const Tn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await Tt(t,e);return{x:n+o.x,y:r+o.y,data:o}}}};function et(e){return e==="x"?"y":"x"}const _n=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:s=!0,crossAxis:c=!1,limiter:i={fn:x=>{let{x:w,y}=x;return{x:w,y}}},...l}=e,f={x:n,y:r},d=await Pe(t,l),a=G(F(o)),u=et(a);let g=f[a],m=f[u];if(s){const x=a==="y"?"top":"left",w=a==="y"?"bottom":"right",y=g+d[x],E=g-d[w];g=we(y,g,E)}if(c){const x=u==="y"?"top":"left",w=u==="y"?"bottom":"right",y=m+d[x],E=m-d[w];m=we(y,m,E)}const h=i.fn({...t,[a]:g,[u]:m});return{...h,data:{x:h.x-n,y:h.y-r}}}}},$n=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:s,middlewareData:c}=t,{offset:i=0,mainAxis:l=!0,crossAxis:f=!0}=e,d={x:n,y:r},a=G(o),u=et(a);let g=d[a],m=d[u];const h=typeof i=="function"?i(t):i,x=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(l){const b=a==="y"?"height":"width",C=s.reference[a]-s.floating[b]+x.mainAxis,R=s.reference[a]+s.reference[b]-x.mainAxis;g<C?g=C:g>R&&(g=R)}if(f){var w,y,E,v;const b=a==="y"?"width":"height",C=["top","left"].includes(F(o)),R=s.reference[u]-s.floating[b]+(C&&(w=(y=c.offset)==null?void 0:y[u])!=null?w:0)+(C?0:x.crossAxis),S=s.reference[u]+s.reference[b]+(C?0:(E=(v=c.offset)==null?void 0:v[u])!=null?E:0)-(C?x.crossAxis:0);m<R?m=R:m>S&&(m=S)}return{[a]:g,[u]:m}}}},Dn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:s}=t,{apply:c=()=>{},...i}=e,l=await Pe(t,i),f=F(n),d=re(n);let a,u;f==="top"||f==="bottom"?(a=f,u=d===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?"start":"end")?"left":"right"):(u=f,a=d==="end"?"top":"bottom");const g=X(l.left,0),m=X(l.right,0),h=X(l.top,0),x=X(l.bottom,0),w={availableHeight:r.floating.height-(["left","right"].includes(n)?2*(h!==0||x!==0?h+x:X(l.top,l.bottom)):l[a]),availableWidth:r.floating.width-(["top","bottom"].includes(n)?2*(g!==0||m!==0?g+m:X(l.left,l.right)):l[u])};await c({...t,...w});const y=await o.getDimensions(s.floating);return r.floating.width!==y.width||r.floating.height!==y.height?{reset:{rects:!0}}:{}}}},Mn=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){var n;const{placement:r,elements:o,rects:s,platform:c,strategy:i}=t,{padding:l=2,x:f,y:d}=e,a=ne(c.convertOffsetParentRelativeRectToViewportRelativeRect?await c.convertOffsetParentRelativeRectToViewportRelativeRect({rect:s.reference,offsetParent:await(c.getOffsetParent==null?void 0:c.getOffsetParent(o.floating)),strategy:i}):s.reference),u=(n=await(c.getClientRects==null?void 0:c.getClientRects(o.reference)))!=null?n:[],g=Ee(l);function m(){if(u.length===2&&u[0].left>u[1].right&&f!=null&&d!=null){var x;return(x=u.find(w=>f>w.left-g.left&&f<w.right+g.right&&d>w.top-g.top&&d<w.bottom+g.bottom))!=null?x:a}if(u.length>=2){if(G(r)==="x"){const L=u[0],T=u[u.length-1],$=F(r)==="top",P=L.top,A=T.bottom,M=$?L.left:T.left,I=$?L.right:T.right,V=I-M,D=A-P;return{top:P,bottom:A,left:M,right:I,width:V,height:D,x:M,y:P}}const w=F(r)==="left",y=X(...u.map(L=>L.right)),E=Ze(...u.map(L=>L.left)),v=u.filter(L=>w?L.left===E:L.right===y),b=v[0].top,C=v[v.length-1].bottom,R=E,S=y,O=S-R,_=C-b;return{top:b,bottom:C,left:R,right:S,width:O,height:_,x:R,y:b}}return a}const h=await c.getElementRects({reference:{getBoundingClientRect:m},floating:o.floating,strategy:i});return s.reference.x!==h.reference.x||s.reference.y!==h.reference.y||s.reference.width!==h.reference.width||s.reference.height!==h.reference.height?{reset:{rects:h}}:{}}}};function tt(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function H(e){if(e==null)return window;if(!tt(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function z(e){return H(e).getComputedStyle(e)}function j(e){return tt(e)?"":e?(e.nodeName||"").toLowerCase():""}function nt(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function k(e){return e instanceof H(e).HTMLElement}function Y(e){return e instanceof H(e).Element}function _t(e){return e instanceof H(e).Node}function le(e){if(typeof ShadowRoot>"u")return!1;const t=H(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function pe(e){const{overflow:t,overflowX:n,overflowY:r}=z(e);return/auto|scroll|overlay|hidden/.test(t+r+n)}function $t(e){return["table","td","th"].includes(j(e))}function rt(e){const t=/firefox/i.test(nt()),n=z(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&(n.filter?n.filter!=="none":!1)}function ot(){return!/^((?!chrome|android).)*safari/i.test(nt())}const _e=Math.min,te=Math.max,ue=Math.round;function N(e,t,n){var r,o,s,c;t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect();let l=1,f=1;t&&k(e)&&(l=e.offsetWidth>0&&ue(i.width)/e.offsetWidth||1,f=e.offsetHeight>0&&ue(i.height)/e.offsetHeight||1);const d=Y(e)?H(e):window,a=!ot()&&n,u=(i.left+(a&&(r=(o=d.visualViewport)==null?void 0:o.offsetLeft)!=null?r:0))/l,g=(i.top+(a&&(s=(c=d.visualViewport)==null?void 0:c.offsetTop)!=null?s:0))/f,m=i.width/l,h=i.height/f;return{width:m,height:h,top:g,right:u+m,bottom:g+h,left:u,x:u,y:g}}function q(e){return((_t(e)?e.ownerDocument:e.document)||window.document).documentElement}function me(e){return Y(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function it(e){return N(q(e)).left+me(e).scrollLeft}function Dt(e){const t=N(e);return ue(t.width)!==e.offsetWidth||ue(t.height)!==e.offsetHeight}function Mt(e,t,n){const r=k(t),o=q(t),s=N(e,r&&Dt(t),n==="fixed");let c={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(r||!r&&n!=="fixed")if((j(t)!=="body"||pe(o))&&(c=me(t)),k(t)){const l=N(t,!0);i.x=l.x+t.clientLeft,i.y=l.y+t.clientTop}else o&&(i.x=it(o));return{x:s.left+c.scrollLeft-i.x,y:s.top+c.scrollTop-i.y,width:s.width,height:s.height}}function st(e){return j(e)==="html"?e:e.assignedSlot||e.parentNode||(le(e)?e.host:null)||q(e)}function $e(e){return!k(e)||z(e).position==="fixed"?null:e.offsetParent}function It(e){let t=st(e);for(le(t)&&(t=t.host);k(t)&&!["html","body"].includes(j(t));){if(rt(t))return t;{const n=t.parentNode;t=le(n)?n.host:n}}return null}function ye(e){const t=H(e);let n=$e(e);for(;n&&$t(n)&&z(n).position==="static";)n=$e(n);return n&&(j(n)==="html"||j(n)==="body"&&z(n).position==="static"&&!rt(n))?t:n||It(e)||t}function De(e){if(k(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=N(e);return{width:t.width,height:t.height}}function kt(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=k(n),s=q(n);if(n===s)return t;let c={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if((o||!o&&r!=="fixed")&&((j(n)!=="body"||pe(s))&&(c=me(n)),k(n))){const l=N(n,!0);i.x=l.x+n.clientLeft,i.y=l.y+n.clientTop}return{...t,x:t.x-c.scrollLeft+i.x,y:t.y-c.scrollTop+i.y}}function Vt(e,t){const n=H(e),r=q(e),o=n.visualViewport;let s=r.clientWidth,c=r.clientHeight,i=0,l=0;if(o){s=o.width,c=o.height;const f=ot();(f||!f&&t==="fixed")&&(i=o.offsetLeft,l=o.offsetTop)}return{width:s,height:c,x:i,y:l}}function Ft(e){var t;const n=q(e),r=me(e),o=(t=e.ownerDocument)==null?void 0:t.body,s=te(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=te(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let i=-r.scrollLeft+it(e);const l=-r.scrollTop;return z(o||n).direction==="rtl"&&(i+=te(n.clientWidth,o?o.clientWidth:0)-s),{width:s,height:c,x:i,y:l}}function ct(e){const t=st(e);return["html","body","#document"].includes(j(t))?e.ownerDocument.body:k(t)&&pe(t)?t:ct(t)}function J(e,t){var n;t===void 0&&(t=[]);const r=ct(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),s=H(r),c=o?[s].concat(s.visualViewport||[],pe(r)?r:[]):r,i=t.concat(c);return o?i:i.concat(J(c))}function jt(e,t){const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&le(n)){let r=t;do{if(r&&e===r)return!0;r=r.parentNode||r.host}while(r)}return!1}function Nt(e,t){const n=N(e,!1,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft;return{top:r,left:o,x:o,y:r,right:o+e.clientWidth,bottom:r+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}function Me(e,t,n){return t==="viewport"?ne(Vt(e,n)):Y(t)?Nt(t,n):ne(Ft(q(e)))}function Ht(e){const t=J(e),r=["absolute","fixed"].includes(z(e).position)&&k(e)?ye(e):e;return Y(r)?t.filter(o=>Y(o)&&jt(o,r)&&j(o)!=="body"):[]}function Wt(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const c=[...n==="clippingAncestors"?Ht(t):[].concat(n),r],i=c[0],l=c.reduce((f,d)=>{const a=Me(t,d,o);return f.top=te(a.top,f.top),f.right=_e(a.right,f.right),f.bottom=_e(a.bottom,f.bottom),f.left=te(a.left,f.left),f},Me(t,i,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}const Bt={getClippingRect:Wt,convertOffsetParentRelativeRectToViewportRelativeRect:kt,isElement:Y,getDimensions:De,getOffsetParent:ye,getDocumentElement:q,getElementRects:e=>{let{reference:t,floating:n,strategy:r}=e;return{reference:Mt(t,ye(n),r),floating:{...De(n),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>z(e).direction==="rtl"};function Xt(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:c=!0,animationFrame:i=!1}=r,l=o&&!i,f=s&&!i,d=l||f?[...Y(e)?J(e):[],...J(t)]:[];d.forEach(h=>{l&&h.addEventListener("scroll",n,{passive:!0}),f&&h.addEventListener("resize",n)});let a=null;if(c){let h=!0;a=new ResizeObserver(()=>{h||n(),h=!1}),Y(e)&&!i&&a.observe(e),a.observe(t)}let u,g=i?N(e):null;i&&m();function m(){const h=N(e);g&&(h.x!==g.x||h.y!==g.y||h.width!==g.width||h.height!==g.height)&&n(),g=h,u=requestAnimationFrame(m)}return n(),()=>{var h;d.forEach(x=>{l&&x.removeEventListener("scroll",n),f&&x.removeEventListener("resize",n)}),(h=a)==null||h.disconnect(),a=null,i&&cancelAnimationFrame(u)}}const Ut=(e,t,n)=>Pt(e,t,{platform:Bt,...n});var be=typeof document<"u"?p.exports.useLayoutEffect:p.exports.useEffect;function fe(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!fe(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const s=o[r];if(!(s==="_owner"&&e.$$typeof)&&!fe(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function zt(e){const t=p.exports.useRef(e);return be(()=>{t.current=e}),t}function Yt(e){let{middleware:t,placement:n="bottom",strategy:r="absolute",whileElementsMounted:o}=e===void 0?{}:e;const[s,c]=p.exports.useState({x:null,y:null,strategy:r,placement:n,middlewareData:{}}),[i,l]=p.exports.useState(t);fe(i==null?void 0:i.map(v=>{let{name:b,options:C}=v;return{name:b,options:C}}),t==null?void 0:t.map(v=>{let{name:b,options:C}=v;return{name:b,options:C}}))||l(t);const f=p.exports.useRef(null),d=p.exports.useRef(null),a=p.exports.useRef(null),u=p.exports.useRef(s),g=zt(o),m=p.exports.useCallback(()=>{!f.current||!d.current||Ut(f.current,d.current,{middleware:i,placement:n,strategy:r}).then(v=>{h.current&&!fe(u.current,v)&&(u.current=v,ze.exports.flushSync(()=>{c(v)}))})},[i,n,r]);be(()=>{h.current&&m()},[m]);const h=p.exports.useRef(!1);be(()=>(h.current=!0,()=>{h.current=!1}),[]);const x=p.exports.useCallback(()=>{if(typeof a.current=="function"&&(a.current(),a.current=null),f.current&&d.current)if(g.current){const v=g.current(f.current,d.current,m);a.current=v}else m()},[m,g]),w=p.exports.useCallback(v=>{f.current=v,x()},[x]),y=p.exports.useCallback(v=>{d.current=v,x()},[x]),E=p.exports.useMemo(()=>({reference:f,floating:d}),[]);return p.exports.useMemo(()=>({...s,update:m,refs:E,reference:w,floating:y}),[s,m,E,w,y])}const In=e=>{const{element:t,padding:n}=e;function r(o){return Object.prototype.hasOwnProperty.call(o,"current")}return{name:"arrow",options:e,fn(o){return r(t)?t.current!=null?Se({element:t.current,padding:n}).fn(o):{}:t?Se({element:t,padding:n}).fn(o):{}}}};var Q=typeof document<"u"?p.exports.useLayoutEffect:p.exports.useEffect;function qt(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){e.set(t,(e.get(t)||[]).filter(r=>r!==n))}}}let ge=!1,Gt=0;const Ie=()=>"floating-ui-"+Gt++;function Kt(){const[e,t]=p.exports.useState(()=>ge?Ie():void 0);return Q(()=>{e==null&&t(Ie())},[]),p.exports.useEffect(()=>{ge||(ge=!0)},[]),e}const ke=Ye["useId".toString()],Ve=ke!=null?ke:Kt,Jt=p.exports.createContext(null),Qt=p.exports.createContext(null),lt=()=>{var e,t;return(e=(t=p.exports.useContext(Jt))==null?void 0:t.id)!=null?e:null},Ce=()=>p.exports.useContext(Qt);function U(e){var t;return(t=e==null?void 0:e.ownerDocument)!=null?t:document}function ut(e){var t;return(t=U(e).defaultView)!=null?t:window}function K(e){return e?e instanceof ut(e).Element:!1}function Zt(e){return e?e instanceof ut(e).HTMLElement:!1}const Fe=Ye["useInsertionEffect".toString()];function en(e){const t=p.exports.useRef(()=>{});return Fe?Fe(()=>{t.current=e}):t.current=e,p.exports.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}function kn(e){let{open:t=!1,onOpenChange:n,whileElementsMounted:r,placement:o,middleware:s,strategy:c,nodeId:i}=e===void 0?{}:e;const[l,f]=p.exports.useState(null),d=Ce(),a=p.exports.useRef(null),u=p.exports.useRef({}),g=p.exports.useState(()=>qt())[0],m=Yt({placement:o,middleware:s,strategy:c,whileElementsMounted:r}),h=en(n),x=p.exports.useMemo(()=>({...m.refs,domReference:a}),[m.refs]),w=p.exports.useMemo(()=>({...m,refs:x,dataRef:u,nodeId:i,events:g,open:t,onOpenChange:h,_:{domReference:l}}),[m,i,g,t,h,x,l]);Q(()=>{const v=d==null?void 0:d.nodesRef.current.find(b=>b.id===i);v&&(v.context=w)});const{reference:y}=m,E=p.exports.useCallback(v=>{(K(v)||v===null)&&(w.refs.domReference.current=v,f(v)),y(v)},[y,w.refs]);return p.exports.useMemo(()=>({...m,context:w,refs:x,reference:E}),[m,x,w,E])}function he(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(o=>o?o[n]:null).concat(e).reduce((o,s)=>(s&&Object.entries(s).forEach(c=>{let[i,l]=c;if(i.indexOf("on")===0){if(r.has(i)||r.set(i,[]),typeof l=="function"){var f;(f=r.get(i))==null||f.push(l),o[i]=function(){for(var d,a=arguments.length,u=new Array(a),g=0;g<a;g++)u[g]=arguments[g];(d=r.get(i))==null||d.forEach(m=>m(...u))}}}else o[i]=l}),o),{})}}const Vn=function(e){return e===void 0&&(e=[]),{getReferenceProps:t=>he(t,e,"reference"),getFloatingProps:t=>he(t,e,"floating"),getItemProps:t=>he(t,e,"item")}};function ve(e,t){var n;let r=(n=e.filter(c=>{var i;return c.parentId===t&&((i=c.context)==null?void 0:i.open)}))!=null?n:[],o=r;for(;o.length;){var s;o=(s=e.filter(c=>{var i;return(i=o)==null?void 0:i.some(l=>{var f;return c.parentId===l.id&&((f=c.context)==null?void 0:f.open)})}))!=null?s:[],r=r.concat(o)}return r}function tn(e){return"composedPath"in e?e.composedPath()[0]:e.target}function je(e){const t=p.exports.useRef(e);return Q(()=>{t.current=e}),t}function nn(e){const t=p.exports.useRef();return Q(()=>{t.current=e},[e]),t.current}function ie(e,t,n){return n&&n!=="mouse"?0:typeof e=="number"?e:e==null?void 0:e[t]}const Fn=function(e,t){let{enabled:n=!0,delay:r=0,handleClose:o=null,mouseOnly:s=!1,restMs:c=0,move:i=!0}=t===void 0?{}:t;const{open:l,onOpenChange:f,dataRef:d,events:a,refs:u,_:g}=e,m=Ce(),h=lt(),x=je(o),w=je(r),y=nn(l),E=p.exports.useRef(),v=p.exports.useRef(),b=p.exports.useRef(),C=p.exports.useRef(),R=p.exports.useRef(!0),S=p.exports.useRef(!1),O=p.exports.useCallback(()=>{var P;const A=(P=d.current.openEvent)==null?void 0:P.type;return(A==null?void 0:A.includes("mouse"))&&A!=="mousedown"},[d]);p.exports.useEffect(()=>{if(!n)return;function P(){clearTimeout(v.current),clearTimeout(C.current),R.current=!0}return a.on("dismiss",P),()=>{a.off("dismiss",P)}},[n,a,u]),p.exports.useEffect(()=>{if(!n||!x.current)return;function P(){O()&&f(!1)}const A=U(u.floating.current).documentElement;return A.addEventListener("mouseleave",P),()=>{A.removeEventListener("mouseleave",P)}},[u,f,n,x,d,O]);const _=p.exports.useCallback(function(P){P===void 0&&(P=!0);const A=ie(w.current,"close",E.current);A&&!b.current?(clearTimeout(v.current),v.current=setTimeout(()=>f(!1),A)):P&&(clearTimeout(v.current),f(!1))},[w,f]),L=p.exports.useCallback(()=>{b.current&&(U(u.floating.current).removeEventListener("pointermove",b.current),b.current=void 0)},[u]),T=p.exports.useCallback(()=>{U(u.floating.current).body.style.pointerEvents="",S.current=!1},[u]);if(p.exports.useEffect(()=>{if(!n)return;function P(){return d.current.openEvent?["click","mousedown"].includes(d.current.openEvent.type):!1}function A(W){if(clearTimeout(v.current),R.current=!1,s&&E.current!=="mouse"||c>0&&ie(w.current,"open")===0)return;d.current.openEvent=W;const Z=ie(w.current,"open",E.current);Z?v.current=setTimeout(()=>{f(!0)},Z):f(!0)}function M(W){if(P())return;const Z=U(u.floating.current);if(clearTimeout(C.current),x.current){clearTimeout(v.current),b.current&&Z.removeEventListener("pointermove",b.current),b.current=x.current({...e,tree:m,x:W.clientX,y:W.clientY,onClose(){T(),L(),_()}}),Z.addEventListener("pointermove",b.current);return}_()}function I(W){P()||x.current==null||x.current({...e,tree:m,x:W.clientX,y:W.clientY,leave:!0,onClose(){T(),L(),_()}})(W)}const V=u.floating.current,D=u.domReference.current;if(K(D))return l&&D.addEventListener("mouseleave",I),V==null||V.addEventListener("mouseleave",I),i&&D.addEventListener("mousemove",A,{once:!0}),D.addEventListener("mouseenter",A),D.addEventListener("mouseleave",M),()=>{l&&D.removeEventListener("mouseleave",I),V==null||V.removeEventListener("mouseleave",I),i&&D.removeEventListener("mousemove",A),D.removeEventListener("mouseenter",A),D.removeEventListener("mouseleave",M)}},[g.domReference,n,e,s,c,i,_,L,T,f,l,m,u,w,x,d]),Q(()=>{if(!!n&&l&&x.current&&x.current.__options.blockPointerEvents&&O()){U(u.floating.current).body.style.pointerEvents="none",S.current=!0;const M=u.domReference.current,I=u.floating.current;if(K(M)&&I){var P,A;const V=m==null||(P=m.nodesRef.current.find(D=>D.id===h))==null||(A=P.context)==null?void 0:A.refs.floating.current;return V&&(V.style.pointerEvents=""),M.style.pointerEvents="auto",I.style.pointerEvents="auto",()=>{M.style.pointerEvents="",I.style.pointerEvents=""}}}},[n,l,h,u,m,x,d,O]),Q(()=>{y&&!l&&(E.current=void 0,L(),T())}),p.exports.useEffect(()=>()=>{L(),clearTimeout(v.current),clearTimeout(C.current),S.current&&T()},[n,L,T]),!n)return{};function $(P){E.current=P.pointerType}return{reference:{onPointerDown:$,onPointerEnter:$,onMouseMove(){l||c===0||(clearTimeout(C.current),C.current=setTimeout(()=>{R.current||f(!0)},c))}},floating:{onMouseEnter(){clearTimeout(v.current)},onMouseLeave(){_(!1)}}}},ft=p.exports.createContext({delay:1e3,initialDelay:1e3,currentId:null,setCurrentId:()=>{},setState:()=>{}}),rn=()=>p.exports.useContext(ft),jn=e=>{let{children:t,delay:n}=e;const[r,o]=p.exports.useState({delay:n,initialDelay:n,currentId:null}),s=p.exports.useCallback(c=>{o(i=>({...i,currentId:c}))},[]);return p.exports.createElement(ft.Provider,{value:p.exports.useMemo(()=>({...r,setState:o,setCurrentId:s}),[r,o,s])},t)},Nn=(e,t)=>{let{open:n,onOpenChange:r}=e,{id:o}=t;const{currentId:s,initialDelay:c,setState:i}=rn();p.exports.useEffect(()=>{s&&(i(l=>({...l,delay:{open:1,close:ie(c,"close")}})),s!==o&&r(!1))},[o,r,i,s,c]),p.exports.useEffect(()=>{!n&&s===o&&(r(!1),i(l=>({...l,delay:c,currentId:null})))},[n,i,s,o,r,c])},Hn=function(e,t){let{open:n}=e,{enabled:r=!0,role:o="dialog"}=t===void 0?{}:t;const s=Ve(),c=Ve(),i={id:s,role:o};return r?o==="tooltip"?{reference:{"aria-describedby":n?s:void 0},floating:i}:{reference:{"aria-expanded":n?"true":"false","aria-haspopup":o==="alertdialog"?"dialog":o,"aria-controls":n?s:void 0,...o==="listbox"&&{role:"combobox"},...o==="menu"&&{id:c}},floating:{...i,...o==="menu"&&{"aria-labelledby":c}}}:{}};function xe(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const on={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},sn={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Wn=function(e,t){let{open:n,onOpenChange:r,refs:o,events:s,nodeId:c}=e,{enabled:i=!0,escapeKey:l=!0,outsidePress:f=!0,outsidePressEvent:d="pointerdown",referencePress:a=!1,referencePressEvent:u="pointerdown",ancestorScroll:g=!1,bubbles:m=!0}=t===void 0?{}:t;const h=Ce(),x=lt()!=null,w=p.exports.useRef(!1);return p.exports.useEffect(()=>{if(!n||!i)return;function y(R){if(R.key==="Escape"){if(!m&&h&&ve(h.nodesRef.current,c).length>0)return;s.emit("dismiss",{preventScroll:!1}),r(!1)}}function E(R){const S=w.current;if(w.current=!1,S)return;const O=tn(R);if(K(O)&&o.floating.current){var _;const T=(_=o.floating.current.ownerDocument.defaultView)!=null?_:window,$=O.scrollWidth>O.clientWidth,P=O.scrollHeight>O.clientHeight;let A=P&&R.offsetX>O.clientWidth;if(P&&T.getComputedStyle(O).direction==="rtl"&&(A=R.offsetX<=O.offsetWidth-O.clientWidth),A||$&&R.offsetY>O.clientHeight)return}const L=h&&ve(h.nodesRef.current,c).some(T=>{var $;return xe(R,($=T.context)==null?void 0:$.refs.floating.current)});xe(R,o.floating.current)||xe(R,o.domReference.current)||L||!m&&h&&ve(h.nodesRef.current,c).length>0||(s.emit("dismiss",x?{preventScroll:!0}:!1),r(!1))}function v(){r(!1)}const b=U(o.floating.current);l&&b.addEventListener("keydown",y),f&&b.addEventListener(d,E);const C=(g?[...K(o.reference.current)?J(o.reference.current):[],...K(o.floating.current)?J(o.floating.current):[]]:[]).filter(R=>{var S;return R!==((S=b.defaultView)==null?void 0:S.visualViewport)});return C.forEach(R=>R.addEventListener("scroll",v,{passive:!0})),()=>{l&&b.removeEventListener("keydown",y),f&&b.removeEventListener(d,E),C.forEach(R=>R.removeEventListener("scroll",v))}},[l,f,d,s,h,c,n,r,g,i,m,o,x]),i?{reference:{[on[u]]:()=>{a&&(s.emit("dismiss"),r(!1))}},floating:{[sn[d]]:()=>{w.current=!0}}}:{}},Bn=function(e,t){let{open:n,onOpenChange:r,dataRef:o,refs:s,events:c}=e,{enabled:i=!0,keyboardOnly:l=!0}=t===void 0?{}:t;const f=p.exports.useRef(""),d=p.exports.useRef(!1),a=p.exports.useRef();return p.exports.useEffect(()=>{var u;if(!i)return;const m=(u=U(s.floating.current).defaultView)!=null?u:window;function h(){!n&&Zt(s.domReference.current)&&s.domReference.current.blur()}return m.addEventListener("blur",h),()=>{m.removeEventListener("blur",h)}},[s,n,i]),p.exports.useEffect(()=>{if(!i)return;function u(){d.current=!0}return c.on("dismiss",u),()=>{c.off("dismiss",u)}},[c,i]),p.exports.useEffect(()=>()=>{clearTimeout(a.current)},[]),i?{reference:{onPointerDown(u){let{pointerType:g}=u;f.current=g,d.current=!!(g&&l)},onPointerLeave(){d.current=!1},onFocus(u){var g,m,h;d.current||u.type==="focus"&&((g=o.current.openEvent)==null?void 0:g.type)==="mousedown"&&(m=s.domReference.current)!=null&&m.contains((h=o.current.openEvent)==null?void 0:h.target)||(o.current.openEvent=u.nativeEvent,r(!0))},onBlur(u){const g=u.relatedTarget;a.current=setTimeout(()=>{var m,h;(m=s.floating.current)!=null&&m.contains(g)||(h=s.domReference.current)!=null&&h.contains(g)||(d.current=!1,r(!1))})}}}:{}};function Xn({opened:e,floating:t,positionDependencies:n}){const[r,o]=p.exports.useState(0);p.exports.useEffect(()=>{if(t.refs.reference.current&&t.refs.floating.current)return Xt(t.refs.reference.current,t.refs.floating.current,t.update)},[t.refs.reference,t.refs.floating,e,r]),Oe(()=>{t.update()},n),Oe(()=>{o(s=>s+1)},[e])}var cn=Object.defineProperty,ln=Object.defineProperties,un=Object.getOwnPropertyDescriptors,Ne=Object.getOwnPropertySymbols,fn=Object.prototype.hasOwnProperty,an=Object.prototype.propertyIsEnumerable,He=(e,t,n)=>t in e?cn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,B=(e,t)=>{for(var n in t||(t={}))fn.call(t,n)&&He(e,n,t[n]);if(Ne)for(var n of Ne(t))an.call(t,n)&&He(e,n,t[n]);return e},oe=(e,t)=>ln(e,un(t));function We(e,t,n){return e==="center"?{top:t}:e==="end"?{bottom:n}:e==="start"?{top:n}:{}}function Be(e,t,n,r){return e==="center"?{[r==="ltr"?"left":"right"]:t}:e==="end"?{[r==="ltr"?"right":"left"]:n}:e==="start"?{[r==="ltr"?"left":"right"]:n}:{}}const dn={bottom:"borderTopLeftRadius",left:"borderTopRightRadius",right:"borderBottomLeftRadius",top:"borderBottomRightRadius"};function pn({position:e,withBorder:t,arrowSize:n,arrowOffset:r,arrowRadius:o,arrowX:s,arrowY:c,dir:i}){const[l,f="center"]=e.split("-"),d={width:n,height:n,transform:"rotate(45deg)",position:"absolute",[dn[l]]:o},a=t?-n/2-1:-n/2;return l==="left"?oe(B(B({},d),We(f,c,r)),{right:a,borderLeft:0,borderBottom:0}):l==="right"?oe(B(B({},d),We(f,c,r)),{left:a,borderRight:0,borderTop:0}):l==="top"?oe(B(B({},d),Be(f,s,r,i)),{bottom:a,borderTop:0,[i==="ltr"?"borderLeft":"borderRight"]:0}):l==="bottom"?oe(B(B({},d),Be(f,s,r,i)),{top:a,borderBottom:0,[i==="ltr"?"borderRight":"borderLeft"]:0}):{}}var mn=Object.defineProperty,gn=Object.defineProperties,hn=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable,Xe=(e,t,n)=>t in e?mn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vn=(e,t)=>{for(var n in t||(t={}))at.call(t,n)&&Xe(e,n,t[n]);if(ae)for(var n of ae(t))dt.call(t,n)&&Xe(e,n,t[n]);return e},xn=(e,t)=>gn(e,hn(t)),wn=(e,t)=>{var n={};for(var r in e)at.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ae)for(var r of ae(e))t.indexOf(r)<0&&dt.call(e,r)&&(n[r]=e[r]);return n};const yn=p.exports.forwardRef((e,t)=>{var n=e,{withBorder:r,position:o,arrowSize:s,arrowOffset:c,arrowRadius:i,visible:l,arrowX:f,arrowY:d}=n,a=wn(n,["withBorder","position","arrowSize","arrowOffset","arrowRadius","visible","arrowX","arrowY"]);const u=Ue();return l?de("div",{...xn(vn({},a),{ref:t,style:pn({withBorder:r,position:o,arrowSize:s,arrowOffset:c,arrowRadius:i,dir:u.dir,arrowX:f,arrowY:d})})}):null});yn.displayName="@mantine/core/FloatingArrow";function Un(e,t){if(e==="rtl"&&(t.includes("right")||t.includes("left"))){const[n,r]=t.split("-"),o=n==="right"?"left":"right";return r===void 0?o:`${o}-${r}`}return t}export{jn as F,Et as O,Pn as S,Ln as a,On as b,rn as c,In as d,Mn as e,Sn as f,J as g,Vn as h,En as i,Fn as j,Bn as k,Hn as l,Wn as m,Nn as n,Tn as o,Xn as p,Un as q,yn as r,_n as s,Rn as t,kn as u,Cn as v,An as w,Dn as x,$n as y};
