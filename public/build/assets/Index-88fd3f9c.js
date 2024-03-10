import{s as m,h as E,v as H,x as y,r as C,o as p,b as h,d as e,g as x,l as F,w as L,f as M,i as V,y as g,z as f,e as U,n as r,F as B,j as N,t as b,p as S}from"./app-25ba0aa8.js";import{u as O}from"./posts-fae0748d.js";import{u as q}from"./categories-87e46fd4.js";const G={class:"row justify-content-center my-2"},J={class:"col-md-12"},K={class:"card border-0"},Q={class:"card-header bg-transparent"},R=e("h5",{class:"float-start"},"Posts",-1),W={class:"card-body shadow-sm"},X={class:"mb-4"},Y={class:"table-responsive"},Z={class:"table"},ee={class:"px-6 py-3 bg-gray-50 text-left"},te={class:"px-6 py-3 bg-gray-50 text-left"},se={class:"px-6 py-3 bg-gray-50 text-left"},ae={class:"px-6 py-3 bg-gray-50 text-left"},le=e("th",{class:"px-6 py-3 text-start"},null,-1),oe=e("th",{class:"px-6 py-3 text-start"},null,-1),ne={class:"px-6 py-3 text-start"},ie={class:"select-none"},de={class:"px-6 py-3 text-left"},ce={class:"select-none"},ue=e("th",{class:"px-6 py-3 text-left"},[e("div",{class:"flex flex-row"},[e("div",{class:"font-medium text-uppercase"}," Thumbnail ")])],-1),re=e("th",{class:"px-6 py-3 bg-gray-50 text-left"},[e("span",{class:"text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},"Category")],-1),ve=e("th",{class:"px-6 py-3 bg-gray-50 text-left"},[e("span",{class:"text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"},"Content")],-1),pe={class:"px-6 py-3 bg-gray-50 text-left"},_e={class:"select-none"},xe=e("th",{class:"px-6 py-3 bg-gray-50 text-left"}," Actions ",-1),me={class:"px-6 py-4 text-sm",width:"20"},he={class:"px-6 py-4 text-sm"},ye={class:"px-6 py-4 text-sm"},ge=["src"],fe={class:"px-6 py-4 text-sm"},be={class:"px-6 py-4 text-sm"},ke=["innerHTML"],we={class:"px-6 py-4 text-sm"},Ce={class:"px-6 py-4 text-sm"},Ve=["onClick"],Pe={class:"card-footer"},Me={__name:"Index",setup(Te){const n=m(""),i=m(""),d=m(""),c=m(""),u=m(""),l=m("created_at"),a=m("desc"),{posts:P,getPosts:v,deletePost:$}=O(),{categoryList:j,getCategoryList:I}=q(),{can:k}=E();H(()=>{v(),I()});const w=o=>{l.value=o,a.value=a.value==="asc"?"desc":"asc",v(1,n.value,i.value,d.value,c.value,u.value,l.value,a.value)};return y(n,(o,s)=>{v(1,o,i.value,d.value,c.value,u.value)}),y(i,(o,s)=>{v(1,n.value,o,d.value,c.value,u.value)}),y(d,(o,s)=>{v(1,n.value,i.value,o,c.value,u.value)}),y(c,(o,s)=>{v(1,n.value,i.value,d.value,o,u.value)}),y(u,_.debounce((o,s)=>{v(1,n.value,i.value,d.value,c.value,o)},200)),(o,s)=>{const T=C("router-link"),z=C("v-select"),A=C("Pagination");return p(),h("div",G,[e("div",J,[e("div",K,[e("div",Q,[R,x(k)("post-create")?(p(),F(T,{key:0,to:{name:"posts.create"},class:"btn btn-primary btn-sm float-end"},{default:L(()=>[M(" Create Post ")]),_:1},8,["to"])):V("",!0)]),e("div",W,[e("div",X,[g(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>u.value=t),type:"text",placeholder:"Search...",class:"form-control w-25"},null,512),[[f,u.value]])]),e("div",Y,[e("table",Z,[e("thead",null,[e("tr",null,[e("th",ee,[g(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>i.value=t),type:"text",class:"inline-block mt-1 form-control",placeholder:"Filter by ID"},null,512),[[f,i.value]])]),e("th",te,[g(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>d.value=t),type:"text",class:"inline-block mt-1 form-control",placeholder:"Filter by Title"},null,512),[[f,d.value]])]),e("th",se,[U(z,{multiple:"",modelValue:n.value,"onUpdate:modelValue":s[3]||(s[3]=t=>n.value=t),options:x(j),reduce:t=>t.id,label:"name",class:"form-control w-100"},null,8,["modelValue","options","reduce"])]),e("th",ae,[g(e("input",{"onUpdate:modelValue":s[4]||(s[4]=t=>c.value=t),type:"text",class:"inline-block mt-1 form-control",placeholder:"Filter by Content"},null,512),[[f,c.value]])]),le,oe]),e("tr",null,[e("th",ne,[e("div",{class:"flex flex-row",onClick:s[5]||(s[5]=t=>w("id"))},[e("div",{class:r(["font-medium text-uppercase",{"font-bold text-blue-600":l.value==="id"}])}," ID ",2),e("div",ie,[e("span",{class:r({"text-blue-600":a.value==="asc"&&l.value==="id",hidden:a.value!==""&&a.value!=="asc"&&l.value==="id"})},"↑",2),e("span",{class:r({"text-blue-600":a.value==="desc"&&l.value==="id",hidden:a.value!==""&&a.value!=="desc"&&l.value==="id"})},"↓",2)])])]),e("th",de,[e("div",{class:"flex flex-row",onClick:s[6]||(s[6]=t=>w("title"))},[e("div",{class:r(["font-medium text-uppercase",{"font-bold text-blue-600":l.value==="title"}])}," Title ",2),e("div",ce,[e("span",{class:r({"text-blue-600":a.value==="asc"&&l.value==="title",hidden:a.value!==""&&a.value!=="asc"&&l.value==="title"})},"↑",2),e("span",{class:r({"text-blue-600":a.value==="desc"&&l.value==="title",hidden:a.value!==""&&a.value!=="desc"&&l.value==="title"})},"↓",2)])])]),ue,re,ve,e("th",pe,[e("div",{class:"flex flex-row items-center justify-between cursor-pointer",onClick:s[7]||(s[7]=t=>w("created_at"))},[e("div",{class:r(["leading-4 font-medium text-gray-500 uppercase tracking-wider",{"font-bold text-blue-600":l.value==="created_at"}])}," Created at ",2),e("div",_e,[e("span",{class:r({"text-blue-600":a.value==="asc"&&l.value==="created_at",hidden:a.value!==""&&a.value!=="asc"&&l.value==="created_at"})},"↑",2),e("span",{class:r({"text-blue-600":a.value==="desc"&&l.value==="created_at",hidden:a.value!==""&&a.value!=="desc"&&l.value==="created_at"})},"↓",2)])])]),xe])]),e("tbody",null,[(p(!0),h(B,null,N(x(P).data,t=>(p(),h("tr",{key:t.id},[e("td",me,b(t.id),1),e("td",he,b(t.title),1),e("td",ye,[e("img",{src:t.original_image,alt:"image",height:"70"},null,8,ge)]),e("td",fe,[(p(!0),h(B,null,N(t.categories,D=>(p(),h("div",null,b(D.name),1))),256))]),e("td",be,[e("div",{innerHTML:t.content.slice(0,100)+"..."},null,8,ke)]),e("td",we,b(t.created_at),1),e("td",Ce,[x(k)("post-edit")?(p(),F(T,{key:0,to:{name:"posts.edit",params:{id:t.id}},class:"badge bg-primary"},{default:L(()=>[M("Edit ")]),_:2},1032,["to"])):V("",!0),x(k)("post-delete")?(p(),h("a",{key:1,href:"#",onClick:S(D=>x($)(t.id),["prevent"]),class:"ms-2 badge bg-danger"},"Delete",8,Ve)):V("",!0)])]))),128))])])])]),e("div",Pe,[U(A,{data:x(P),limit:3,onPaginationChangePage:s[8]||(s[8]=t=>x(v)(t,n.value,i.value,d.value,c.value,u.value,l.value,a.value)),class:"mt-4"},null,8,["data"])])])])])}}};export{Me as default};
