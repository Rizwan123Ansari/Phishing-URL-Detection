import{r as t,j as e,A as i,B as l,G as P,g as F,y as w,z as h}from"./index-ypYb1kJR.js";import{C as E}from"./index.esm-5psiqHf3.js";import{C as j}from"./CCardHeader-CaMhGjju.js";import{C as D,a as B,b as U,c as g,d as A,e as m}from"./CTable-CkzegtIv.js";const q=()=>{const[r,C]=t.useState(""),[p,f]=t.useState([]),[S,L]=t.useState(""),[o,b]=t.useState(0),[d,R]=t.useState(0),[x,N]=t.useState(null),[u,y]=t.useState("");t.useEffect(()=>{const s=JSON.parse(localStorage.getItem("urlResults"))||[];f(s);const n=s.filter(a=>a.isPhishing).length,c=s.length-n;b(n),R(c)},[]);const v=s=>["wwww","http://","\\\\",".tk",".ml",".ga",".cf",".gq"].some(a=>s.includes(a)),I=()=>{if(y(""),!r){y("Please enter a URL.");return}const s=v(r);N(s);const n=new Date().toLocaleString("en-US",{timeZone:"Asia/Kolkata"}),c={url:r,isPhishing:s,timestamp:n},a=[...p,c];f(a),C(""),s?b(o+1):R(d+1),localStorage.setItem("urlResults",JSON.stringify(a))},T=p.filter(s=>s.url.toLowerCase().includes(S.toLowerCase())),k={labels:["Safe","Unsafe"],datasets:[{data:[d,o],backgroundColor:["#008000","#FF6384"],hoverBackgroundColor:["#008000","#FF6384"]}]};return e.jsxs(e.Fragment,{children:[e.jsxs(i,{className:"mb-4",children:[e.jsx(j,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("h5",{children:"Phishing URL Detection"})}),e.jsxs(l,{children:[e.jsx(P,{type:"text",placeholder:"Enter a website URL",value:r,onChange:s=>C(s.target.value),invalid:!!u}),e.jsx(F,{color:"primary",className:"mt-3",onClick:I,children:"Check URL"}),u&&e.jsx("div",{className:"text-danger mt-2",children:u})," ",x!==null&&e.jsx("div",{className:`mt-4 p-3 ${x?"bg-danger":"bg-success"} text-white`,children:x?"This website is NOT SAFE (Phishing URL)":"This website is SAFE"})]})]}),e.jsxs(w,{className:"mb-4",children:[e.jsx(h,{md:6,children:e.jsx(i,{className:"bg-success text-white",children:e.jsxs(l,{children:[e.jsx("h5",{children:"Safe URLs"}),e.jsx("p",{children:d})]})})}),e.jsx(h,{md:6,children:e.jsx(i,{className:"bg-danger text-white",children:e.jsxs(l,{children:[e.jsx("h5",{children:"Unsafe URLs"}),e.jsx("p",{children:o})]})})})]}),e.jsxs(w,{children:[e.jsx(h,{md:6,children:e.jsxs(i,{className:"mb-4",children:[e.jsxs(j,{children:[e.jsx("h5",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:"Checked URLs"}),e.jsx(P,{type:"text",placeholder:"Search URLs",value:S,onChange:s=>L(s.target.value),className:"mt-3"})]}),e.jsx(l,{children:e.jsx("div",{style:{height:"300px",overflowY:"auto"},children:e.jsxs(D,{align:"middle",hover:!0,responsive:!0,children:[e.jsx(B,{children:e.jsxs(U,{children:[e.jsx(g,{children:"Website URL"}),e.jsx(g,{children:"Status"}),e.jsx(g,{children:"Timestamp"})]})}),e.jsx(A,{children:T.map((s,n)=>e.jsxs(U,{children:[e.jsx(m,{children:s.url}),e.jsx(m,{className:s.isPhishing?"text-danger":"text-success",children:s.isPhishing?"Not Safe":"Safe"}),e.jsx(m,{children:s.timestamp})]},n))})]})})})]})}),e.jsx(h,{md:6,children:e.jsxs(i,{className:"mb-4",children:[e.jsx(j,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("h5",{children:"Phishing URL Details"})}),e.jsx(l,{children:e.jsx("div",{style:{height:"350px",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(E,{data:k})})})]})})]})]})};export{q as default};
