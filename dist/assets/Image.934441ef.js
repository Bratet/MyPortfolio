import{R as v,c as W,r as p,u as F,b as U,j as l,B as q,a as y}from"./index.21fb1955.js";import{T as A}from"./Text.e903b44c.js";var G=Object.defineProperty,P=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,w=(r,e,a)=>e in r?G(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,Q=(r,e)=>{for(var a in e||(e={}))J.call(e,a)&&w(r,a,e[a]);if(P)for(var a of P(e))K.call(e,a)&&w(r,a,e[a]);return r};function X(r){return v.createElement("svg",Q({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r),v.createElement("path",{d:"M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var Y=Object.defineProperty,rr=Object.defineProperties,er=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,ar=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable,O=(r,e,a)=>e in r?Y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,C=(r,e)=>{for(var a in e||(e={}))ar.call(e,a)&&O(r,a,e[a]);if(h)for(var a of h(e))or.call(e,a)&&O(r,a,e[a]);return r},b=(r,e)=>rr(r,er(e)),tr=W((r,{radius:e})=>({root:{},imageWrapper:{position:"relative"},figure:{margin:0},image:b(C({},r.fn.fontStyles()),{display:"block",width:"100%",height:"100%",border:0,borderRadius:r.fn.size({size:e,sizes:r.radius})}),caption:{color:r.colorScheme==="dark"?r.colors.dark[2]:r.colors.gray[7],marginTop:r.spacing.xs},placeholder:b(C({},r.fn.cover()),{display:"flex",alignItems:"center",justifyContent:"center",color:r.colorScheme==="dark"?r.colors.dark[2]:r.colors.gray[6],backgroundColor:r.colorScheme==="dark"?r.colors.dark[8]:r.colors.gray[0],borderRadius:r.fn.size({size:e,sizes:r.radius})})}));const sr=tr;var lr=Object.defineProperty,n=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,S=(r,e,a)=>e in r?lr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,d=(r,e)=>{for(var a in e||(e={}))j.call(e,a)&&S(r,a,e[a]);if(n)for(var a of n(e))x.call(e,a)&&S(r,a,e[a]);return r},ir=(r,e)=>{var a={};for(var o in r)j.call(r,o)&&e.indexOf(o)<0&&(a[o]=r[o]);if(r!=null&&n)for(var o of n(r))e.indexOf(o)<0&&x.call(r,o)&&(a[o]=r[o]);return a};const nr={fit:"cover",width:"100%",height:"auto",radius:0},cr=p.exports.forwardRef((r,e)=>{const a=F("Image",nr,r),{className:o,alt:f,src:i,fit:I,width:u,height:L,radius:N,imageProps:t,withPlaceholder:$,placeholder:E,imageRef:R,classNames:V,styles:z,caption:g,unstyled:M,style:Z}=a,H=ir(a,["className","alt","src","fit","width","height","radius","imageProps","withPlaceholder","placeholder","imageRef","classNames","styles","caption","unstyled","style"]),{classes:s,cx:D}=sr({radius:N},{classNames:V,styles:z,unstyled:M,name:"Image"}),[B,m]=p.exports.useState(!!i),[T,_]=p.exports.useState(!i),k=$&&(!B||T);return U(()=>{m(!1),_(!1)},[i]),l(q,{...d({className:D(s.root,o),ref:e,style:d({width:u},Z)},H),children:y("figure",{className:s.figure,children:[y("div",{className:s.imageWrapper,children:[l("img",{...d({className:s.image,src:i,alt:f,style:{objectFit:I,width:u,height:L},ref:R,onLoad:c=>{m(!0),typeof(t==null?void 0:t.onLoad)=="function"&&t.onLoad(c)},onError:c=>{_(!0),typeof(t==null?void 0:t.onError)=="function"&&t.onError(c)}},t)}),k&&l("div",{className:s.placeholder,title:f,children:E||l("div",{children:l(X,{style:{width:40,height:40}})})})]}),!!g&&l(A,{component:"figcaption",size:"sm",align:"center",className:s.caption,children:g})]})})});cr.displayName="@mantine/core/Image";export{cr as I};
