(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[117],{454:function(e,a,t){"use strict";var s=t(14),n=t(20),c=t(0),l=t.n(c),i=t(5),o=t.n(i),r=t(56),d=t.n(r),u=t(78),p={tag:u.tagPropType,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},j=function(e){var a=e.className,t=e.cssModule,c=e.color,i=e.body,o=e.inverse,r=e.outline,p=e.tag,j=e.innerRef,m=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.mapToCssModules)(d()(a,"card",!!o&&"text-white",!!i&&"card-body",!!c&&(r?"border":"bg")+"-"+c),t);return l.a.createElement(p,Object(s.a)({},m,{className:b,ref:j}))};j.propTypes=p,j.defaultProps={tag:"div"},a.a=j},456:function(e,a,t){"use strict";var s=t(14),n=t(20),c=t(0),l=t.n(c),i=t(5),o=t.n(i),r=t(56),d=t.n(r),u=t(78),p=o.a.oneOfType([o.a.number,o.a.string]),j={tag:u.tagPropType,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,i=e.tag,o=e.form,r=e.widths,p=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),j=[];r.forEach((function(a,t){var s=e[a];if(delete p[a],s){var n=!t;j.push(n?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var m=Object(u.mapToCssModules)(d()(a,c?"no-gutters":null,o?"form-row":"row",j),t);return l.a.createElement(i,Object(s.a)({},p,{className:m}))};b.propTypes=j,b.defaultProps=m,a.a=b},457:function(e,a,t){"use strict";var s=t(14),n=t(20),c=t(0),l=t.n(c),i=t(5),o=t.n(i),r=t(56),d=t.n(r),u=t(78),p=o.a.oneOfType([o.a.number,o.a.string]),j=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),m={tag:u.tagPropType,xs:j,sm:j,md:j,lg:j,xl:j,className:o.a.string,cssModule:o.a.object,widths:o.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,c=e.widths,i=e.tag,o=Object(n.a)(e,["className","cssModule","widths","tag"]),r=[];c.forEach((function(a,s){var n=e[a];if(delete o[a],n||""===n){var c=!s;if(Object(u.isObject)(n)){var l,i=c?"-":"-"+a+"-",p=h(c,a,n.size);r.push(Object(u.mapToCssModules)(d()(((l={})[p]=n.size||""===n.size,l["order"+i+n.order]=n.order||0===n.order,l["offset"+i+n.offset]=n.offset||0===n.offset,l)),t))}else{var j=h(c,a,n);r.push(j)}}})),r.length||r.push("col");var p=Object(u.mapToCssModules)(d()(a,r),t);return l.a.createElement(i,Object(s.a)({},o,{className:p}))};g.propTypes=m,g.defaultProps=b,a.a=g},467:function(e,a,t){"use strict";var s=t(14),n=t(20),c=t(0),l=t.n(c),i=t(5),o=t.n(i),r=t(56),d=t.n(r),u=t(78),p=o.a.oneOfType([o.a.number,o.a.string]),j=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),m={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:j,sm:j,md:j,lg:j,xl:j,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,c=e.hidden,i=e.widths,o=e.tag,r=e.check,p=e.size,j=e.for,m=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];i.forEach((function(a,s){var n=e[a];if(delete m[a],n||""===n){var c,l=!s;if(Object(u.isObject)(n)){var i,o=l?"-":"-"+a+"-";c=h(l,a,n.size),b.push(Object(u.mapToCssModules)(d()(((i={})[c]=n.size||""===n.size,i["order"+o+n.order]=n.order||0===n.order,i["offset"+o+n.offset]=n.offset||0===n.offset,i))),t)}else c=h(l,a,n),b.push(c)}}));var g=Object(u.mapToCssModules)(d()(a,!!c&&"sr-only",!!r&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return l.a.createElement(o,Object(s.a)({htmlFor:j},m,{className:g}))};g.propTypes=m,g.defaultProps=b,a.a=g},526:function(e,a,t){},658:function(e,a,t){},772:function(e,a,t){"use strict";t.r(a);var s=t(15),n=t(0),c=t(451),l=t(458),i=t(79),o=t.n(i),r=function(e){return function(a){o.a.get("/apps/invoice/invoices",e).then((function(t){a({type:"GET_DATA",allData:t.data.allData,data:t.data.invoices,totalPages:t.data.total,params:e})}))}},d=t(131),u=t(1109),p=t(964),j=t(942),m=t(1264),b=t(946),h=t(956),g=t(1074),f=t(995),x=t(1073),O=t(981),v=t(1041),N=t(1066),w=t(1093),y=t(1025),P=t(1027),C=t(1059),D=t(1021),T=t(1091),k=t(1014),M=t(6),S={Sent:{color:"light-secondary",icon:g.a},Paid:{color:"light-success",icon:f.a},Draft:{color:"light-primary",icon:x.a},Downloaded:{color:"light-info",icon:O.a},"Past Due":{color:"light-danger",icon:v.a},"Partial Payment":{color:"light-warning",icon:N.a}},z=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar.length?Object(M.jsx)(l.a,{className:"mr-50",img:e.avatar,width:"32",height:"32"}):Object(M.jsx)(l.a,{color:a,className:"mr-50",content:e.client?e.client.name:"John Doe",initials:!0})},E=[{name:"#",minWidth:"107px",selector:"id",cell:function(e){return Object(M.jsx)(c.b,{to:"/apps/invoice/preview/".concat(e.id),children:"#".concat(e.id)})}},{name:Object(M.jsx)(w.a,{size:14}),minWidth:"102px",selector:"invoiceStatus",sortable:!0,cell:function(e){var a=S[e.invoiceStatus]?S[e.invoiceStatus].color:"primary",t=S[e.invoiceStatus]?S[e.invoiceStatus].icon:y.a;return Object(M.jsxs)(n.Fragment,{children:[Object(M.jsx)(l.a,{color:a,icon:Object(M.jsx)(t,{size:14}),id:"av-tooltip-".concat(e.id)}),Object(M.jsxs)(u.a,{placement:"top",target:"av-tooltip-".concat(e.id),children:[Object(M.jsx)("span",{className:"font-weight-bold",children:e.invoiceStatus}),Object(M.jsx)("br",{}),Object(M.jsx)("span",{className:"font-weight-bold",children:"Balance:"})," ",e.balance,Object(M.jsx)("br",{}),Object(M.jsx)("span",{className:"font-weight-bold",children:"Due Date:"})," ",e.dueDate]})]})}},{name:"Client",minWidth:"350px",selector:"client",sortable:!0,cell:function(e){var a=e.client?e.client.name:"John Doe",t=e.client?e.client.companyEmail:"johnDoe@email.com";return Object(M.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[z(e),Object(M.jsxs)("div",{className:"d-flex flex-column",children:[Object(M.jsx)("h6",{className:"user-name text-truncate mb-0",children:a}),Object(M.jsx)("small",{className:"text-truncate text-muted mb-0",children:t})]})]})}},{name:"Total",selector:"total",sortable:!0,minWidth:"150px",cell:function(e){return Object(M.jsxs)("span",{children:["$",e.total||0]})}},{name:"Issued Date",selector:"dueDate",sortable:!0,minWidth:"200px",cell:function(e){return e.dueDate}},{name:"Balance",selector:"balance",sortable:!0,minWidth:"164px",cell:function(e){return 0!==e.balance?Object(M.jsx)("span",{children:e.balance}):Object(M.jsx)(p.a,{color:"light-success",pill:!0,children:"Paid"})}},{name:"Action",minWidth:"110px",selector:"",sortable:!0,cell:function(e){return Object(M.jsxs)("div",{className:"column-action d-flex align-items-center",children:[Object(M.jsx)(g.a,{size:17,id:"send-tooltip-".concat(e.id)}),Object(M.jsx)(u.a,{placement:"top",target:"send-tooltip-".concat(e.id),children:"Send Mail"}),Object(M.jsx)(c.b,{to:"/apps/invoice/preview/".concat(e.id),id:"pw-tooltip-".concat(e.id),children:Object(M.jsx)(P.a,{size:17,className:"mx-1"})}),Object(M.jsx)(u.a,{placement:"top",target:"pw-tooltip-".concat(e.id),children:"Preview Invoice"}),Object(M.jsxs)(j.a,{children:[Object(M.jsx)(m.a,{tag:"span",children:Object(M.jsx)(C.a,{size:17,className:"cursor-pointer"})}),Object(M.jsxs)(b.a,{right:!0,children:[Object(M.jsxs)(h.a,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(M.jsx)(D.a,{size:14,className:"mr-50"}),Object(M.jsx)("span",{className:"align-middle",children:"Download"})]}),Object(M.jsxs)(h.a,{tag:c.b,to:"/apps/invoice/edit/".concat(e.id),className:"w-100",children:[Object(M.jsx)(y.a,{size:14,className:"mr-50"}),Object(M.jsx)("span",{className:"align-middle",children:"Edit"})]}),Object(M.jsxs)(h.a,{tag:"a",href:"/",className:"w-100",onClick:function(a){var t;a.preventDefault(),d.a.dispatch((t=e.id,function(e,a){o.a.delete("/apps/invoice/delete",{id:t}).then((function(a){e({type:"DELETE_INVOICE"})})).then((function(){return e(r(a().invoice.params))}))}))},children:[Object(M.jsx)(T.a,{size:14,className:"mr-50"}),Object(M.jsx)("span",{className:"align-middle",children:"Delete"})]}),Object(M.jsxs)(h.a,{tag:"a",href:"/",className:"w-100",onClick:function(e){return e.preventDefault()},children:[Object(M.jsx)(k.a,{size:14,className:"mr-50"}),Object(M.jsx)("span",{className:"align-middle",children:"Duplicate"})]})]})]})]})}}],I=t(486),L=t.n(I),W=t(997),q=t(540),F=t.n(q),R=t(456),V=t(457),A=t(467),G=t(927),J=t(448),H=t(959),B=t(454),_=t(122),$=(t(658),t(526),function(e){var a=e.handleFilter,t=e.value,s=e.handleStatusValue,n=e.statusValue,l=e.handlePerPage,i=e.rowsPerPage;return Object(M.jsx)("div",{className:"invoice-list-table-header w-100 py-2",children:Object(M.jsxs)(R.a,{children:[Object(M.jsxs)(V.a,{lg:"6",className:"d-flex align-items-center px-0 px-lg-1",children:[Object(M.jsxs)("div",{className:"d-flex align-items-center mr-2",children:[Object(M.jsx)(A.a,{for:"rows-per-page",children:"Show"}),Object(M.jsxs)(G.a,{className:"form-control ml-50 pr-3",type:"select",id:"rows-per-page",value:i,onChange:l,children:[Object(M.jsx)("option",{value:"10",children:"10"}),Object(M.jsx)("option",{value:"25",children:"25"}),Object(M.jsx)("option",{value:"50",children:"50"})]})]}),Object(M.jsx)(J.a.Ripple,{tag:c.b,to:"/apps/invoice/add",color:"primary",children:"Add Record"})]}),Object(M.jsxs)(V.a,{lg:"6",className:"actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0",children:[Object(M.jsxs)("div",{className:"d-flex align-items-center",children:[Object(M.jsx)(A.a,{for:"search-invoice",children:"Search"}),Object(M.jsx)(H.a,{id:"search-invoice",className:"ml-50 mr-2 w-100",type:"text",value:t,onChange:function(e){return a(e.target.value)},placeholder:"Search Invoice"})]}),Object(M.jsxs)(H.a,{className:"w-auto ",type:"select",value:n,onChange:s,children:[Object(M.jsx)("option",{value:"",children:"Select Status"}),Object(M.jsx)("option",{value:"downloaded",children:"Downloaded"}),Object(M.jsx)("option",{value:"draft",children:"Draft"}),Object(M.jsx)("option",{value:"paid",children:"Paid"}),Object(M.jsx)("option",{value:"partial payment",children:"Partial Payment"}),Object(M.jsx)("option",{value:"past due",children:"Past Due"}),Object(M.jsx)("option",{value:"partial payment",children:"Partial Payment"})]})]})]})})});a.default=function(){var e=Object(_.b)(),a=Object(_.c)((function(e){return e.invoice})),t=Object(n.useState)(""),c=Object(s.a)(t,2),l=c[0],i=c[1],o=Object(n.useState)(1),d=Object(s.a)(o,2),u=d[0],p=d[1],j=Object(n.useState)(""),m=Object(s.a)(j,2),b=m[0],h=m[1],g=Object(n.useState)(10),f=Object(s.a)(g,2),x=f[0],O=f[1];Object(n.useEffect)((function(){e(r({page:u,perPage:x,status:b,q:l}))}),[e,a.data.length]);return Object(M.jsx)("div",{className:"invoice-list-wrapper",children:Object(M.jsx)(B.a,{children:Object(M.jsx)("div",{className:"invoice-list-dataTable",children:Object(M.jsx)(F.a,{noHeader:!0,pagination:!0,paginationServer:!0,subHeader:!0,columns:E,responsive:!0,sortIcon:Object(M.jsx)(W.a,{}),className:"react-dataTable",defaultSortField:"invoiceId",paginationDefaultPage:u,paginationComponent:function(){var t=Number((a.total/x).toFixed(0));return Object(M.jsx)(L.a,{pageCount:t||1,nextLabel:"",breakLabel:"...",previousLabel:"",activeClassName:"active",breakClassName:"page-item",breakLinkClassName:"page-link",forcePage:0!==u?u-1:0,onPageChange:function(a){return function(a){e(r({page:a.selected+1,perPage:x,status:b,q:l})),p(a.selected+1)}(a)},pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",containerClassName:"pagination react-paginate justify-content-end p-1"})},data:function(){var e={status:b,q:l},t=Object.keys(e).some((function(a){return e[a].length>0}));return a.data.length>0?a.data:0===a.data.length&&t?[]:a.allData.slice(0,x)}(),subHeaderComponent:Object(M.jsx)($,{value:l,statusValue:b,rowsPerPage:x,handleFilter:function(a){i(a),e(r({page:u,perPage:x,status:b,q:a}))},handlePerPage:function(a){e(r({page:u,perPage:parseInt(a.target.value),status:b,q:l})),O(parseInt(a.target.value))},handleStatusValue:function(a){h(a.target.value),e(r({page:u,perPage:x,status:a.target.value,q:l}))}})})})})})}}}]);
//# sourceMappingURL=117.88c3111d.chunk.js.map