import{c as T,R as o,B as C,r as h,u as R,j as i,p as W,v as F,w as M,e as V,a as f,C as H,F as D,W as G}from"./index.85de86f5.js";import{B as J}from"./BoxWrapper.5b9632da.js";import{T as y}from"./Text.2f356170.js";import{S as U}from"./ScrollArea.32b4bdb6.js";import{P as Y}from"./ParticlesWrapper.09d26656.js";var Q=T((e,{bulletSize:r,color:t,radius:a,align:l,lineVariant:c,lineWidth:n})=>{const s=e.fn.variant({variant:"filled",color:t});return{itemBody:{},itemContent:{},itemBullet:{boxSizing:"border-box",width:r,height:r,borderRadius:e.fn.size({size:a,sizes:e.radius}),border:`${n}px solid ${e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3]}`,backgroundColor:e.colorScheme==="dark"?e.colors.dark[7]:e.white,position:"absolute",top:0,left:l==="left"?-r/2-n/2:"auto",right:l==="right"?-r/2-n/2:"auto",display:"flex",alignItems:"center",justifyContent:"center",color:e.white,"&[data-with-child]":{borderWidth:1,backgroundColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3],color:e.colorScheme==="dark"?e.colors.dark[0]:e.black},"&[data-active]":{borderColor:s.background,backgroundColor:e.white,"&[data-with-child]":{backgroundColor:s.background,color:e.white}}},item:{position:"relative",boxSizing:"border-box",color:e.colorScheme==="dark"?e.colors.dark[0]:e.black,paddingLeft:l==="left"?e.spacing.xl:0,paddingRight:l==="right"?e.spacing.xl:0,textAlign:l,"&:not(:last-of-type)::before":{display:"block"},"&:not(:first-of-type)":{marginTop:e.spacing.xl},"&::before":{boxSizing:"border-box",position:"absolute",top:0,left:l==="left"?-n:"auto",right:l==="right"?-n:"auto",bottom:-e.spacing.xl,borderLeft:`${n}px ${c} ${e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3]}`,content:'""',display:"none"},"&[data-line-active]":{"&::before":{borderLeftColor:s.background}}},itemTitle:{fontWeight:500,lineHeight:1,marginBottom:`calc(${e.spacing.xs}px / 2)`,textAlign:l}}});const q=Q;var K=Object.defineProperty,x=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,O=(e,r,t)=>r in e?K(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,X=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&O(e,t,r[t]);if(x)for(var t of x(r))I.call(r,t)&&O(e,t,r[t]);return e},Z=(e,r)=>{var t={};for(var a in e)A.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&x)for(var a of x(e))r.indexOf(a)<0&&I.call(e,a)&&(t[a]=e[a]);return t};function N(e){var r=e,{className:t,bullet:a,title:l,bulletSize:c=20,radius:n="xl",lineWidth:s=4,active:d,lineActive:b,classNames:P,styles:_,children:w,color:v,align:z,lineVariant:E="solid",unstyled:u}=r,j=Z(r,["className","bullet","title","bulletSize","radius","lineWidth","active","lineActive","classNames","styles","children","color","align","lineVariant","unstyled"]);const{classes:g,cx:p}=q({bulletSize:c,color:v,radius:n,align:z,lineVariant:E,lineWidth:s},{classNames:P,styles:_,unstyled:u,name:"Timeline"});return o.createElement(C,X({className:p(g.item,t),"data-line-active":b||void 0,"data-active":d||void 0},j),o.createElement("div",{className:g.itemBullet,"data-with-child":!!a||void 0,"data-active":d||void 0},a),o.createElement("div",{className:g.itemBody},l&&o.createElement(y,{className:g.itemTitle},l),o.createElement("div",{className:g.itemContent},w)))}N.displayName="@mantine/core/TimelineItem";var ee=Object.defineProperty,S=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,$=(e,r,t)=>r in e?ee(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,re=(e,r)=>{for(var t in r||(r={}))B.call(r,t)&&$(e,t,r[t]);if(S)for(var t of S(r))L.call(r,t)&&$(e,t,r[t]);return e},te=(e,r)=>{var t={};for(var a in e)B.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&S)for(var a of S(e))r.indexOf(a)<0&&L.call(e,a)&&(t[a]=e[a]);return t};const ae={active:-1,radius:"xl",bulletSize:20,align:"left",lineWidth:4,reverseActive:!1},k=h.exports.forwardRef((e,r)=>{const t=R("Timeline",ae,e),{children:a,active:l,color:c,radius:n,bulletSize:s,align:d,lineWidth:b,classNames:P,styles:_,sx:w,reverseActive:v,unstyled:z}=t,E=te(t,["children","active","color","radius","bulletSize","align","lineWidth","classNames","styles","sx","reverseActive","unstyled"]),u=h.exports.Children.toArray(a),j=u.map((p,m)=>o.cloneElement(p,{classNames:P,styles:_,align:d,lineWidth:b,radius:p.props.radius||n,color:p.props.color||c,bulletSize:p.props.bulletSize||s,unstyled:z,active:p.props.active||(v?l>=u.length-m-1:l>=m),lineActive:p.props.lineActive||(v?l>=u.length-m-1:l-1>=m)})),g=d==="left"?{paddingLeft:s/2+b/2}:{paddingRight:s/2+b/2};return i(C,{...re({ref:r,sx:[g,...W(w)]},E),children:j})});k.Item=N;k.displayName="@mantine/core/Timeline";var le=["size","color"];function oe(e){var r=e.size,t=r===void 0?24:r,a=e.color,l=a===void 0?"currentColor":a,c=F(e,le);return o.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-git-branch",width:t,height:t,viewBox:"0 0 24 24",stroke:l,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},c),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("circle",{cx:"7",cy:"18",r:"2"}),o.createElement("circle",{cx:"7",cy:"6",r:"2"}),o.createElement("circle",{cx:"17",cy:"6",r:"2"}),o.createElement("line",{x1:"7",y1:"8",x2:"7",y2:"16"}),o.createElement("path",{d:"M9 18h6a2 2 0 0 0 2 -2v-5"}),o.createElement("polyline",{points:"14 14 17 11 20 14"}))}const ie=[{start:"2021-09-28",end:"present",title:"Full-stack Engineer",company:"@ SOWIT | Ag Intelligence",badges:[{label:"Python",png:"python"},{label:"Django",png:"django"},{label:"React",png:"react"},{label:"Azure",png:"azure"},{label:"Vite",png:"vite"},{label:"Postgres",png:"postgres"},{label:"TypeScript",png:"typescript"},{label:"JavaScript",png:"js"},{label:"Angular",png:"angular"},{label:"HTML",png:"html"},{label:"CSS",png:"css"},{label:"..."}]},{start:"2021-08-01",end:"2021-09-26 (2 m)",title:"Full-stack Engineer",company:"Atkana It Solution",badges:[{label:"Python",png:"python"},{label:"Django",png:"django"},{label:"Angular",png:"angular"},{label:"Github",png:"github"},{label:"Postgres",png:"postgres"},{label:"TypeScript",png:"typescript"},{label:"JavaScript",png:"js"},{label:"PostgreSQL",png:"postgres"},{label:"HTML",png:"html"},{label:"CSS",png:"css"},{label:"..."}]},{start:"2021-03-08",end:"2021-08-29 (6 m)",title:"Full-stack Engineer (Intern)",company:"PULL4YOU SERIVICE S.A.R.L",badges:[{label:"Python",png:"python"},{label:"Django",png:"django"},{label:"React",png:"react"},{label:"Github",png:"github"},{label:"TypeScript",png:"typescript"},{label:"JavaScript",png:"js"},{label:"HTML",png:"html"},{label:"CSS",png:"css"},{label:"..."}]}],ne=T(e=>({card:{backgroundColor:e.colorScheme==="dark"?e.colors.dark[6]:e.colors.gray[0],border:`1px solid ${e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3]}`,boxShadow:`${e.shadows.md} !important`},section:{borderBottom:`1px solid ${e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[3]}`,paddingLeft:e.spacing.md,paddingRight:e.spacing.md,paddingBottom:e.spacing.md},like:{color:e.colors.red[6]},label:{textTransform:"uppercase",fontSize:e.fontSizes.xs,fontWeight:700},badge:{backgroundColor:e.colorScheme==="dark"?e.colors.gray[7]:e.colors.gray[3]}}));function se(){ne(),V(),h.exports.useState(0);const e=ie.map((r,t)=>f(k.Item,{bullet:i(oe,{size:12}),title:"New branch",children:[f(y,{color:"dimmed",size:"sm",children:["You've pushed 23 commits to",i(y,{variant:"link",component:"span",inherit:!0,children:"fix-notifications branch"})]}),i(y,{size:"xs",mt:4,children:"52 minutes ago"})]}));return i(H,{px:"xl",size:"lg",sx:{zIndex:5},children:i(J,{withBackground:!1,children:i(U,{style:{height:300,width:350},type:"scroll",offsetScrollbars:!0,scrollbarSize:14,children:i(k,{color:"teal",active:2,reverseActive:!0,lineWidth:8,bulletSize:30,children:e})})})})}const ce=h.exports.forwardRef(({children:e,title:r="",meta:t,height:a,isFirst:l,withBackground:c,...n},s)=>f(D,{children:[f(G,{children:[i("title",{children:`${r} | Ahmed Portfolio`}),t]}),i(C,{sx:d=>({marginRight:-16,marginLeft:-16,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:c?(d.colorScheme==="dark",d.colors.teal[4]):"transparent"}),children:e})]})),de=ce;function ve(){return f(de,{title:"Path",isFirst:!0,withBackground:!1,children:[i(Y,{}),i(se,{})]})}export{ve as default};
