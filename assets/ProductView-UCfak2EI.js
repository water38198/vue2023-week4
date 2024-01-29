import{_ as V,r as x,w as R,o as c,c as u,a as e,t as h,b as _,v as b,F as y,d as U,e as L,f as O,p as S,g as I,n as k,h as C,u as j,i as F,j as P,k as f,S as g}from"./index-iD2sSZwR.js";const p=r=>(S("data-v-9625d22e"),r=r(),I(),r),H={method:"dialog"},J={class:"bg-#212529 p-4 flex justify-between items-center"},G={class:"text-white"},W={class:"grid grid-cols-12 gap-6 p-3"},q={class:"col-span-4"},K={class:"input-group"},Q=p(()=>e("label",{for:"imagUrl",class:"block"},"主要圖片",-1)),X=["src"],Y=p(()=>e("img",{src:"",alt:""},null,-1)),Z=p(()=>e("h4",null,"多圖新增",-1)),ee={class:"flex justify-between mb-2"},te={for:"images-1"},oe=["onClick"],se={class:"input-group"},ie=["onUpdate:modelValue"],le=["src"],ne={class:"col-span-8"},ae={class:"grid grid-cols-2 gap-col-6 gap-row-4"},re={class:"input-group col-span-2"},de=p(()=>e("label",{for:"title"},"標題",-1)),ce={class:"input-group"},ue=p(()=>e("label",{for:"category"},"分類",-1)),pe=O('<datalist id="categories" data-v-9625d22e><option value="策略" data-v-9625d22e>策略</option><option value="派對" data-v-9625d22e>派對</option><option value="雙人" data-v-9625d22e>雙人</option><option value="陣營" data-v-9625d22e>陣營</option><option value="家庭" data-v-9625d22e>家庭</option></datalist>',1),ve={class:"input-group"},_e=p(()=>e("label",{for:"unit"},"單位",-1)),be={class:"input-group"},ge=p(()=>e("label",{for:"origin_price"},"原價",-1)),he={class:"input-group"},me=p(()=>e("label",{for:"price"},"售價",-1)),fe={class:"input-group col-span-2"},xe=p(()=>e("label",{for:"description"},"產品敘述",-1)),$e={class:"input-group col-span-2"},we=p(()=>e("label",{for:"content"},"說明內容",-1)),ye=p(()=>e("label",{for:"is_enabled"},"是否啟用",-1)),ke={class:"text-end p-3 border-t border-solid border-#dee2e6"},Ce={__name:"ProductModal",props:["temp","isNew"],setup(r){const d=r,t=x(d.temp);function $(){t.value.imagesUrl||(t.value.imagesUrl=[]),t.value.imagesUrl[t.value.imagesUrl.length-1]!==""&&t.value.imagesUrl.push("")}return R(()=>d.temp,()=>{t.value=d.temp}),(v,o)=>(c(),u("form",H,[e("div",J,[e("h3",G,h(r.isNew?"新增產品":"編輯產品"),1),e("button",{type:"button",class:"i-ic:baseline-close p-2 text-white font-size-4 hover:cursor-pointer",onClick:o[0]||(o[0]=s=>v.$emit("dialogClose"))})]),e("div",W,[e("div",q,[e("div",K,[Q,_(e("input",{type:"text",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[1]||(o[1]=s=>t.value.imageUrl=s),class:"mb-2"},null,512),[[b,t.value.imageUrl]]),e("img",{src:t.value.imageUrl,alt:""},null,8,X)]),Y,e("div",null,[Z,(c(!0),u(y,null,U(t.value.imagesUrl,(s,n)=>(c(),u("div",{key:s},[e("div",ee,[e("label",te,"圖片網址"+h(n+1),1),e("button",{class:"i-ic:baseline-close font-size-5 opacity-50 hover:cursor-pointer hover:opacity-75",onClick:m=>t.value.imagesUrl.splice(n,1)},null,8,oe)]),e("div",se,[_(e("input",{type:"text","onUpdate:modelValue":m=>t.value.imagesUrl[n]=m,placeholder:"請輸入圖片網址",class:",b-2"},null,8,ie),[[b,t.value.imagesUrl[n]]])]),e("img",{src:s,alt:""},null,8,le)]))),128)),e("button",{type:"button",class:"inline-block w-100% bg-transparent border-#0d6efd border-solid border-1 rd text-#0d6efd py-1 mb-1",hover:"cursor-pointer bg-#0d6efd text-white",onClick:$},"新增圖片")])]),e("div",ne,[e("div",ae,[e("div",re,[de,_(e("input",{type:"text",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":o[2]||(o[2]=s=>t.value.title=s)},null,512),[[b,t.value.title]])]),e("div",ce,[ue,_(e("input",{type:"text",id:"category",placeholder:"請輸入分類",list:"categories",autocomplete:"off","onUpdate:modelValue":o[3]||(o[3]=s=>t.value.category=s)},null,512),[[b,t.value.category]]),pe]),e("div",ve,[_e,_(e("input",{type:"text",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":o[4]||(o[4]=s=>t.value.unit=s)},null,512),[[b,t.value.unit]])]),e("div",be,[ge,_(e("input",{type:"number",id:"origin_price",placeholder:"請輸入原價",min:"0","onUpdate:modelValue":o[5]||(o[5]=s=>t.value.origin_price=s)},null,512),[[b,t.value.origin_price,void 0,{number:!0}]])]),e("div",he,[me,_(e("input",{type:"number",id:"price",placeholder:"請輸入售價",min:"0","onUpdate:modelValue":o[6]||(o[6]=s=>t.value.price=s)},null,512),[[b,t.value.price,void 0,{number:!0}]])]),e("div",fe,[xe,_(e("textarea",{name:"",id:"description",rows:"4","onUpdate:modelValue":o[7]||(o[7]=s=>t.value.description=s)},null,512),[[b,t.value.description]])]),e("div",$e,[we,_(e("textarea",{name:"",id:"content",rows:"4","onUpdate:modelValue":o[8]||(o[8]=s=>t.value.content=s)},null,512),[[b,t.value.content]])]),e("div",null,[_(e("input",{type:"checkbox",id:"is_enabled","onUpdate:modelValue":o[9]||(o[9]=s=>t.value.is_enabled=s),"true-value":1,"false-value":0},null,512),[[L,t.value.is_enabled]]),ye])])])]),e("div",ke,[e("button",{type:"button",class:"m-1 px-3 py-1.5 bg-transparent text-#6c757d border-1 border-solid border-#6c757d rd hover:cursor-pointer hover:bg-#5c636a hover:text-white",onClick:o[10]||(o[10]=s=>v.$emit("dialogClose"))},"取消"),e("button",{type:"button",class:"m-1 px-3 py-1.5 text-white bg-#0d6efd border-0 rd hover:cursor-pointer hover:bg-#0b5ed7",onClick:o[11]||(o[11]=s=>v.$emit("confirmProduct",t.value))},"確定")])]))}},Ue=V(Ce,[["__scopeId","data-v-9625d22e"]]),E=r=>(S("data-v-461597e1"),r=r(),I(),r),Pe={class:"container mx-a py-6"},Ve={class:"flex justify-center"},Se={class:"flex items-center text-#0d6efd"},Ie=E(()=>e("div",{class:"i-mdi:arrow-left"},null,-1)),Ee=[Ie],Ne=["onClick"],Te=E(()=>e("div",{class:"i-mdi:arrow-right"},null,-1)),Me=[Te],De={__name:"PaginationComponent",props:["pages"],emits:["changePage"],setup(r,{emit:d}){const t=r,$=d;function v(o){$("changePage",o)}return(o,s)=>(c(),u("div",Pe,[e("nav",Ve,[e("ul",Se,[e("li",{class:k(["border-solid border-#dee2e6 border-1 border-collapse rd-tl rd-bl",{disabled:t.pages.current_page===1}])},[e("a",{href:"#",class:"block p-2 text-#0d6efd hover:bg-#e9ecef hover:cursor-pointer",onClick:s[0]||(s[0]=C(n=>v(t.pages.current_page-1),["prevent"]))},Ee)],2),(c(!0),u(y,null,U(t.pages.total_pages,n=>(c(),u("li",{key:n,class:k(["border-solid border-#dee2e6 border-1 border-collapse",{active:n===t.pages.current_page}])},[e("a",{href:"#",class:"font-size-4 decoration-none block text-#0d6efd px-3 py-1 hover:bg-#e9ecef hover:cursor-pointer",onClick:C(m=>v(n),["prevent"])},h(n),9,Ne)],2))),128)),e("li",{class:k(["border-solid border-#dee2e6 border-1 border-collapse rd-tr rd-br",{disabled:t.pages.current_page===t.pages.total_pages}])},[e("a",{href:"#",class:"block p-2 text-#0d6efd hover:bg-#e9ecef hover:cursor-pointer",onClick:s[1]||(s[1]=C(n=>v(t.pages.current_page+1),["prevent"]))},Me)],2)])])]))}},Be=V(De,[["__scopeId","data-v-461597e1"]]);var ze={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"payroom",BASE_URL:"/vue2023-week4/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Ae={class:"container mx-a"},Re={class:"text-end mt-6"},Le={class:"w-100% mt-6"},Oe=e("thead",{class:"border-b-1 border-black border-solid fw-bold text-left"},[e("tr",null,[e("th",{width:"120"}," 分類 "),e("th",null,"產品名稱"),e("th",{width:"120",class:"text-end"}," 原價 "),e("th",{width:"120",class:"text-end"}," 售價 "),e("th",{width:"100",class:"text-center"}," 是否啟用 "),e("th",{width:"120"}," 編輯 ")])],-1),je={class:"text-end"},Fe={class:"text-end"},He={class:"text-center"},Je={key:0,class:"text-#198754"},Ge={key:1,class:"text-red"},We={class:"btn-group"},qe=["onClick"],Ke=["onClick"],Xe={__name:"ProductView",setup(r){const{VITE_URL:d,VITE_PATH:t}=ze,$=j(),v=x([]),o=x(),s=x({}),n=x(!0),m=x({});function N(){var l;const a=(l=document.cookie.split("; ").find(i=>i.startsWith("myToken=")))==null?void 0:l.split("=")[1];a&&(f.defaults.headers.common.Authorization=a),f.post(`${d}/v2/api/user/check`).then(()=>{w()}).catch(()=>{g.fire({title:"請先登入",icon:"error",didClose:()=>{$.push("/")}})})}function w(a=1){f.get(`${d}/v2/api/${t}/admin/products?page=${a}`).then(l=>{v.value=l.data.products,m.value=l.data.pagination})}function T(a){a.target.nodeName==="DIALOG"&&o.value.close()}function M(){o.value.showModal(),s.value={},n.value=!0}function D(a){s.value=JSON.parse(JSON.stringify(a)),n.value=!1,o.value.showModal()}function B(a){if(n.value)f.post(`${d}/v2/api/${t}/admin/product`,{data:a}).then(l=>{g.fire({title:`${l.data.message}`,icon:"success"}),o.value.close(),s.value={},w()}).catch(l=>{g.fire({icon:"error",target:"dialog",title:"錯誤發生",text:`${l.response.data.message}`})});else{const{id:l}=a;f.put(`${d}/v2/api/${t}/admin/product/${l}`,{data:a}).then(i=>{g.fire({title:`${i.data.message}`,icon:"success"}),o.value.close(),s.value={},w()}).catch(i=>{g.fire({icon:"error",target:"dialog",title:"錯誤發生",text:`${i.response.data.message}`})})}}function z(a){g.fire({title:`你確定要刪除 ${a.title} 嗎?`,showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then(l=>{l.isConfirmed&&f.delete(`${d}/v2/api/${t}/admin/product/${a.id}`).then(i=>{w(),g.fire(i.data.message),g.fire({icon:"success",text:i.data.message})}).catch(i=>{g.fire({icon:"error",text:i.response.data.message})})})}return F(()=>{N()}),(a,l)=>(c(),u(y,null,[e("div",Ae,[e("div",Re,[e("button",{type:"button",class:"bg-#0d6efd border-0 text-white cursor-pointer inline-block px-3 py-1.5 rd font-size-4 hover:bg-#0b5ed7",onClick:l[0]||(l[0]=i=>M())},"建立新的產品")]),e("table",Le,[Oe,e("tbody",null,[(c(!0),u(y,null,U(v.value,i=>(c(),u("tr",{class:"border-b border-#DEE2E6 border-solid",key:i.id},[e("td",null,h(i.category),1),e("td",null,h(i.title),1),e("td",je,h(i.origin_price),1),e("td",Fe,h(i.price),1),e("td",He,[i.is_enabled?(c(),u("span",Je,"啟用")):(c(),u("span",Ge,"未啟用"))]),e("td",null,[e("div",We,[e("button",{type:"button",class:"text-#0d6efd bg-transparent border-1 border-#0d6efd border-solid border-r-0 rd-tl rd-bl px-2 py-1 hover:bg-#0d6efd hover:text-white hover:cursor-pointer",onClick:A=>D(i)}," 編輯 ",8,qe),e("button",{type:"button",class:"text-#dc3545 bg-transparent border-1 border-#de3545 border-solid rd-tr rd-br px-2 py-1 hover:bg-#de3545 hover:text-white hover:cursor-pointer",onClick:A=>z(i)}," 刪除 ",8,Ke)])])]))),128))])])]),e("dialog",{ref_key:"dialog",ref:o,class:"max-w-1140px w-100% border-0 rd p-0 backdrop:backdrop-blur-3",onClick:T},[P(Ue,{onDialogClose:l[1]||(l[1]=i=>o.value.close()),onConfirmProduct:l[2]||(l[2]=i=>B(s.value)),temp:s.value,"is-new":n.value},null,8,["temp","is-new"])],512),P(Be,{pages:m.value,onChangePage:w},null,8,["pages"])],64))}};export{Xe as default};
