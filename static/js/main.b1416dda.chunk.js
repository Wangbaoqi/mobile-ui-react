(this["webpackJsonpreact-rewrite"]=this["webpackJsonpreact-rewrite"]||[]).push([[0],{23:function(n,e,t){"use strict";var c=t(4),a=t(2),i=(t(0),t(15)),o=t.n(i),r=(t(37),"n-icon");e.a=function(n){var e=n.name,t=n.dot,i=n.badge,s=n.color,l=n.size,j=n.onClick,b=n.tag||"i",u={className:o()("".concat(r,"__container"),[{dot:t||i}])},d={className:o()("".concat(r," ").concat(r,"-").concat(e)),style:{fontSize:"20px"}};return s&&Object.assign(d,{style:Object(c.a)(Object(c.a)({},d.style),{},{color:s})}),l&&Object.assign(d,{style:Object(c.a)(Object(c.a)({},d.style),{},{fontSize:l})}),j&&Object.assign(d,{onClick:j}),Object(a.jsx)("div",Object(c.a)(Object(c.a)({},u),{},{children:Object(a.jsx)(b,Object(c.a)({},d))}))}},24:function(n,e,t){"use strict";var c=t(3);e.a=function(){var n=Object(c.f)();return{go:function(e){n.push(e)},back:function(){n.goBack()}}}},37:function(n,e,t){},38:function(n,e,t){},39:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var c=t(2),a=t(0),i=t.n(a),o=t(12),r=t.n(o),s=function(n){n&&n instanceof Function&&t.e(10).then(t.bind(null,142)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),c(n),a(n),i(n),o(n)}))},l=t(26),j=t(10),b=t(4),u="CHANGENUMBER",d={num:0},h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0,t=e.type,c=void 0===t?"":t,a=e.data,i=void 0===a?"":a;switch(c){case u:return Object(b.a)(Object(b.a)({},n),{},{num:i});default:return n}},O=Object(j.b)({home:h}),p=Object(j.c)(O),f=t(14),m=t(3),x=function(n){return Object(c.jsx)(m.c,{children:n.children&&n.children.map((function(n,e){return Object(c.jsx)(m.a,{path:n.path,render:function(e){return n.component&&Object(c.jsx)(n.component,Object(b.a)({children:n.children},e))}},e)}))})},v=t(23),g=t(24),y=(t(38),function(n){var e=n.location,t=Object(g.a)(),a=e.pathname.substr(1);return Object(c.jsxs)("div",{className:"n-nav__header",children:[Object(c.jsx)("div",{className:"n-nav__center",children:a}),Object(c.jsx)("span",{className:"n-nav__back",onClick:function(){t.back()},children:Object(c.jsx)(v.a,{name:"arrow-left",color:"#333"})})]})}),k=(t(39),[{path:"/",component:function(n){return Object(c.jsxs)("div",{className:"layout",children:[n&&n.location&&-1==n.location.pathname.indexOf("/index")?Object(c.jsx)(y,Object(b.a)({},n)):"",Object(c.jsx)(x,Object(b.a)({},n))]})},redirect:"/index",children:[{path:"/index",component:Object(a.lazy)((function(){return Promise.all([t.e(9),t.e(7)]).then(t.bind(null,143))}))},{path:"/popUp",component:Object(a.lazy)((function(){return t.e(5).then(t.bind(null,145))}))},{path:"/tab",component:Object(a.lazy)((function(){return Promise.all([t.e(2),t.e(6)]).then(t.bind(null,144))}))},{path:"/swiper",component:Object(a.lazy)((function(){return t.e(8).then(t.bind(null,146))}))},{path:"/drag",component:Object(a.lazy)((function(){return t.e(4).then(t.bind(null,147))}))}]}]);r.a.render(Object(c.jsx)(f.a,{children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)("div",{children:"loading..."}),children:Object(c.jsx)(l.a,{store:p,children:Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{children:k})})})})}),document.getElementById("root")),s()}},[[40,1,3]]]);