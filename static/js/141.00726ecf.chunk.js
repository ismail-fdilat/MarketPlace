(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[141],{1901:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t(493),c=t(457),l=t(924),n=t(6);a.default=function(){return Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(c.a,{breadCrumbTitle:"Layout Boxed",breadCrumbParent:"Layouts",breadCrumbActive:"Layout Boxed"}),Object(n.jsx)(r.a,{color:"primary",children:Object(n.jsxs)("div",{className:"alert-body",children:[Object(n.jsx)("span",{className:"font-weight-bold",children:"Info: "}),Object(n.jsxs)("span",{children:["Please check the"," ",Object(n.jsx)("a",{href:"https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/page-layouts",target:"_blank",children:"Layout boxed documentation"})," ","for more details."]})]})}),Object(n.jsx)(l.default,{})]})}},457:function(e,a,t){"use strict";var s=t(458),r=t(1045),c=t(976),l=t(977),n=t(975),i=t(1002),o=t(469),d=t(470),b=t(471),m=t(1268),j=t(955),u=t(965),p=t(6);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,O=e.breadCrumbParent2,g=e.breadCrumbParent3,h=e.breadCrumbActive;return Object(p.jsxs)("div",{className:"content-header row",children:[Object(p.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(p.jsx)("div",{className:"row breadcrumbs-top",children:Object(p.jsxs)("div",{className:"col-12",children:[a?Object(p.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(p.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(d.a,{tag:"li",children:Object(p.jsx)(s.b,{to:"/",children:"Home"})}),Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:t}),O?Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:O}):"",g?Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:g}):"",Object(p.jsx)(d.a,{tag:"li",active:!0,children:h})]})})]})})}),Object(p.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(p.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(m.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(p.jsx)(r.a,{size:14})}),Object(p.jsxs)(j.a,{tag:"ul",right:!0,children:[Object(p.jsxs)(u.a,{tag:s.b,to:"/apps/chat",children:[Object(p.jsx)(c.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(p.jsxs)(u.a,{tag:s.b,to:"/apps/chat",children:[Object(p.jsx)(l.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(p.jsxs)(u.a,{tag:s.b,to:"/apps/email",children:[Object(p.jsx)(n.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(p.jsxs)(u.a,{tag:s.b,to:"/apps/calendar",children:[Object(p.jsx)(i.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},469:function(e,a,t){"use strict";var s=t(15),r=t(21),c=t(0),l=t.n(c),n=t(5),i=t.n(n),o=t(117),d=t.n(o),b=t(78),m={tag:b.tagPropType,listTag:b.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},j=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,n=e.children,i=e.tag,o=e.listTag,m=e["aria-label"],j=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),u=Object(b.mapToCssModules)(d()(a),c),p=Object(b.mapToCssModules)(d()("breadcrumb",t),c);return l.a.createElement(i,Object(s.a)({},j,{className:u,"aria-label":m}),l.a.createElement(o,{className:p},n))};j.propTypes=m,j.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=j},470:function(e,a,t){"use strict";var s=t(15),r=t(21),c=t(0),l=t.n(c),n=t(5),i=t.n(n),o=t(117),d=t.n(o),b=t(78),m={tag:b.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},j=function(e){var a=e.className,t=e.cssModule,c=e.active,n=e.tag,i=Object(r.a)(e,["className","cssModule","active","tag"]),o=Object(b.mapToCssModules)(d()(a,!!c&&"active","breadcrumb-item"),t);return l.a.createElement(n,Object(s.a)({},i,{className:o,"aria-current":c?"page":void 0}))};j.propTypes=m,j.defaultProps={tag:"li"},a.a=j},493:function(e,a,t){"use strict";var s=t(15),r=t(21),c=t(460),l=t(0),n=t.n(l),i=t(5),o=t.n(i),d=t(117),b=t.n(d),m=t(78),j=t(480);function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(Object(t),!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var O={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:m.tagPropType,transition:o.a.shape(j.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},g={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:p(p({},j.a.defaultProps),{},{unmountOnExit:!0})};function h(e){var a=e.className,t=e.closeClassName,c=e.closeAriaLabel,l=e.cssModule,i=e.tag,o=e.color,d=e.isOpen,u=e.toggle,O=e.children,g=e.transition,h=e.fade,x=e.innerRef,f=Object(r.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),N=Object(m.mapToCssModules)(b()(a,"alert","alert-"+o,{"alert-dismissible":u}),l),v=Object(m.mapToCssModules)(b()("close",t),l),y=p(p(p({},j.a.defaultProps),g),{},{baseClass:h?g.baseClass:"",timeout:h?g.timeout:0});return n.a.createElement(j.a,Object(s.a)({},f,y,{tag:i,className:N,in:d,role:"alert",innerRef:x}),u?n.a.createElement("button",{type:"button",className:v,"aria-label":c,onClick:u},n.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,O)}h.propTypes=O,h.defaultProps=g,a.a=h}}]);
//# sourceMappingURL=141.00726ecf.chunk.js.map