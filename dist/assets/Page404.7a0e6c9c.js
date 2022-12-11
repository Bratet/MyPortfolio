import{R as _,c as b,r as d,u as q,a as A,j as t,B as L,b as p,L as J}from"./index.6bb47fb8.js";import{T as N}from"./Text.e9e93048.js";var K=Object.defineProperty,h=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,w=(e,r,o)=>r in e?K(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,Y=(e,r)=>{for(var o in r||(r={}))Q.call(r,o)&&w(e,o,r[o]);if(h)for(var o of h(r))X.call(r,o)&&w(e,o,r[o]);return e};function ee(e){return _.createElement("svg",Y({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),_.createElement("path",{d:"M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var re=Object.defineProperty,oe=Object.defineProperties,ae=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,O=(e,r,o)=>r in e?re(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,C=(e,r)=>{for(var o in r||(r={}))te.call(r,o)&&O(e,o,r[o]);if(P)for(var o of P(r))se.call(r,o)&&O(e,o,r[o]);return e},S=(e,r)=>oe(e,ae(r)),ne=b((e,{radius:r})=>({root:{},imageWrapper:{position:"relative"},figure:{margin:0},image:S(C({},e.fn.fontStyles()),{display:"block",width:"100%",height:"100%",border:0,borderRadius:e.fn.size({size:r,sizes:e.radius})}),caption:{color:e.colorScheme==="dark"?e.colors.dark[2]:e.colors.gray[7],marginTop:e.spacing.xs},placeholder:S(C({},e.fn.cover()),{display:"flex",alignItems:"center",justifyContent:"center",color:e.colorScheme==="dark"?e.colors.dark[2]:e.colors.gray[6],backgroundColor:e.colorScheme==="dark"?e.colors.dark[8]:e.colors.gray[0],borderRadius:e.fn.size({size:r,sizes:e.radius})})}));const ie=ne;var le=Object.defineProperty,l=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,x=(e,r,o)=>r in e?le(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,f=(e,r)=>{for(var o in r||(r={}))j.call(r,o)&&x(e,o,r[o]);if(l)for(var o of l(r))I.call(r,o)&&x(e,o,r[o]);return e},ce=(e,r)=>{var o={};for(var a in e)j.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&l)for(var a of l(e))r.indexOf(a)<0&&I.call(e,a)&&(o[a]=e[a]);return o};const de={fit:"cover",width:"100%",height:"auto",radius:0},$=d.exports.forwardRef((e,r)=>{const o=q("Image",de,e),{className:a,alt:g,src:i,fit:E,width:u,height:R,radius:z,imageProps:s,withPlaceholder:V,placeholder:D,imageRef:H,classNames:M,styles:Z,caption:m,unstyled:k,style:T}=o,F=ce(o,["className","alt","src","fit","width","height","radius","imageProps","withPlaceholder","placeholder","imageRef","classNames","styles","caption","unstyled","style"]),{classes:n,cx:B}=ie({radius:z},{classNames:M,styles:Z,unstyled:k,name:"Image"}),[W,y]=d.exports.useState(!!i),[G,v]=d.exports.useState(!i),U=V&&(!W||G);return A(()=>{y(!1),v(!1)},[i]),t(L,{...f({className:B(n.root,a),ref:r,style:f({width:u},T)},F),children:p("figure",{className:n.figure,children:[p("div",{className:n.imageWrapper,children:[t("img",{...f({className:n.image,src:i,alt:g,style:{objectFit:E,width:u,height:R},ref:H,onLoad:c=>{y(!0),typeof(s==null?void 0:s.onLoad)=="function"&&s.onLoad(c)},onError:c=>{v(!0),typeof(s==null?void 0:s.onError)=="function"&&s.onError(c)}},s)}),U&&t("div",{className:n.placeholder,title:g,children:D||t("div",{children:t(ee,{style:{width:40,height:40}})})})]}),!!m&&t(N,{component:"figcaption",size:"sm",align:"center",className:n.caption,children:m})]})})});$.displayName="@mantine/core/Image";const fe=""+new URL("not_found.93d8f610.svg",import.meta.url).href,pe=b(e=>({root:{marginTop:window.innerHeight/10,"@media (max-width: 600px)":{marginTop:window.innerHeight/3.5-50},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},link:{fontSize:"2rem",textDecoration:"none","&:hover":{fontSize:"2.3rem",color:e.colors.green},fontWeight:"bold",color:e.colors.gray[8]}}));function me(){const{classes:e}=pe();return p(L,{className:e.root,children:[t($,{src:fe}),t(N,{component:"span",align:"center",variant:"gradient",gradient:{from:"indigo",to:"cyan",deg:45},weight:700,style:{fontFamily:"Greycliff CF, sans-serif",fontSize:"3rem"},children:"404 - Page not found"}),t(J,{to:"/",className:e.link,children:"Go to Dashboard"})]})}export{me as default};