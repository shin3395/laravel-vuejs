import{A as F,k,v as B,C as E,o as t,b as a,d as s,p as P,y as m,z as S,t as u,g as o,F as q,j as D,B as M}from"./app-25ba0aa8.js";import{u as V}from"./permissions-394edfb7.js";import{d as _,u as j,a as L,r as R,m as T}from"./rules-2bfff6b0.js";const U={class:"row justify-content-center my-5"},z={class:"col-md-6"},A={class:"card border-0 shadow-sm"},C={class:"card-body"},N={class:"mb-3"},G=s("label",{for:"post-title",class:"form-label"}," Title ",-1),H={class:"text-danger mt-1"},I={class:"text-danger mt-1"},J={class:"mt-4"},K=["disabled"],O={class:""},Q={key:0},W={key:1},es={__name:"Edit",setup(X){_("required",R),_("min",T);const p={name:"required|min:3"},{validate:v,errors:h,resetForm:Y}=j({validationSchema:p}),{value:f}=L("name",null,{initialValue:""}),{permission:r,getPermission:b,updatePermission:y,validationErrors:g,isLoading:i}=V(),e=F({name:f}),w=k();function x(){v().then(d=>{d.valid&&y(e)})}return B(()=>{b(w.params.id)}),E(()=>{e.id=r.value.id,e.name=r.value.name}),(d,l)=>{var c;return t(),a("div",U,[s("div",z,[s("div",A,[s("div",C,[s("form",{onSubmit:P(x,["prevent"])},[s("div",N,[G,m(s("input",{"onUpdate:modelValue":l[0]||(l[0]=n=>e.name=n),id:"post-title",type:"text",class:"form-control"},null,512),[[S,e.name]]),s("div",H,u(o(h).name),1),s("div",I,[(t(!0),a(q,null,D((c=o(g))==null?void 0:c.name,n=>(t(),a("div",null,u(n),1))),256))])]),s("div",J,[s("button",{disabled:o(i),class:"btn btn-primary"},[m(s("div",O,null,512),[[M,o(i)]]),o(i)?(t(),a("span",Q,"Processing...")):(t(),a("span",W,"Update"))],8,K)])],32)])])])])}}};export{es as default};
