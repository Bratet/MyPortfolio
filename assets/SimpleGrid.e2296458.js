import{c as v,r as y,u as O,j as S,B as P}from"./index.5c7fe767.js";function w(r,e){if(e.length===0)return e;const s="maxWidth"in e[0]?"maxWidth":"minWidth",i=[...e].sort((t,n)=>r.fn.size({size:n[s],sizes:r.breakpoints})-r.fn.size({size:t[s],sizes:r.breakpoints}));return s==="minWidth"?i.reverse():i}var $=Object.defineProperty,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,m=(r,e,s)=>e in r?$(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s,j=(r,e)=>{for(var s in e||(e={}))h.call(e,s)&&m(r,s,e[s]);if(d)for(var s of d(e))b.call(e,s)&&m(r,s,e[s]);return r},W=v((r,{spacing:e,breakpoints:s,cols:i,verticalSpacing:t})=>{const n=t!=null,c=w(r,s).reduce((l,a)=>{const o="maxWidth"in a?"max-width":"min-width",f=r.fn.size({size:o==="max-width"?a.maxWidth:a.minWidth,sizes:r.breakpoints});return l[`@media (${o}: ${f-(o==="max-width"?1:0)}px)`]={gridTemplateColumns:`repeat(${a.cols}, minmax(0, 1fr))`,gap:`${r.fn.size({size:a.verticalSpacing||(n?t:e),sizes:r.spacing})}px ${r.fn.size({size:a.spacing||e,sizes:r.spacing})}px`},l},{});return{root:j({boxSizing:"border-box",display:"grid",gridTemplateColumns:`repeat(${i}, minmax(0, 1fr))`,gap:`${r.fn.size({size:n?t:e,sizes:r.spacing})}px ${r.fn.size({size:e,sizes:r.spacing})}px`},c)}});const N=W;var B=Object.defineProperty,p=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,u=(r,e,s)=>e in r?B(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s,E=(r,e)=>{for(var s in e||(e={}))_.call(e,s)&&u(r,s,e[s]);if(p)for(var s of p(e))g.call(e,s)&&u(r,s,e[s]);return r},G=(r,e)=>{var s={};for(var i in r)_.call(r,i)&&e.indexOf(i)<0&&(s[i]=r[i]);if(r!=null&&p)for(var i of p(r))e.indexOf(i)<0&&g.call(r,i)&&(s[i]=r[i]);return s};const I={breakpoints:[],cols:1,spacing:"md"},C=y.exports.forwardRef((r,e)=>{const s=O("SimpleGrid",I,r),{className:i,breakpoints:t,cols:n,spacing:c,verticalSpacing:l,children:a,unstyled:o}=s,f=G(s,["className","breakpoints","cols","spacing","verticalSpacing","children","unstyled"]),{classes:z,cx:x}=N({breakpoints:t,cols:n,spacing:c,verticalSpacing:l},{unstyled:o,name:"SimpleGrid"});return S(P,{...E({className:x(z.root,i),ref:e},f),children:a})});C.displayName="@mantine/core/SimpleGrid";export{C as S};
