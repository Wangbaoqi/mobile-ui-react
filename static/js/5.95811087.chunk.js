(this["webpackJsonpreact-rewrite"]=this["webpackJsonpreact-rewrite"]||[]).push([[5],{145:function(t,e,n){"use strict";n.r(e);var c=n(51),i=n(2),o=n(0),s=n(4),r=n(22),a=n(15),l=n.n(a),j=n(23),b=(n(86),"n-popup"),d=function(t){var e=t.position,n=void 0===e?"bottom":e,c=t.isShow,a=void 0!==c&&c,d=t.title,u=void 0===d?"":d,h=t.titlePosition,O=void 0===h?"left":h,p=t.content,f=void 0===p?"":p,m=t.onClose,v=t.height,x=t.borderRadius,y=t.titleStyle,g=void 0===y?{}:y,S=t.safeAreaInsetBottom,w=void 0===S||S,N=t.closeable,R=void 0===N||N,A=t.closeIcon,_=void 0===A?{name:"cross",color:"#e1514c"}:A,C=t.closeIconPosition,k=void 0===C?{top:"10px",right:"10px"}:C,I=Object(o.useRef)(null)||{current:{}};Object(o.useEffect)((function(){return document.addEventListener("click",P,!0),function(){document.removeEventListener("click",P,!0)}}));var E={className:l()("".concat(b,"__container"),[{isShow:a},"".concat(n)]),style:{}},L={className:l()(b,Object(r.a)({},"".concat("safe-area-inset-bottom"),w),[{isShow:a},"".concat(n)]),style:{}},T={className:l()("".concat(b,"__title")),style:{textAlign:O}},B={className:l()("".concat(b,"__content"),["".concat(n)]),style:{}},J={className:l()({"n-popup__close":!0})},P=function(t){I&&I.current&&!I.current.isSameNode(t.target)&&m&&m()},M=function(t){return L.className.includes(t)};return g&&Object.assign(T,{style:Object(s.a)(Object(s.a)({},T.style),g)}),R&&Object.assign(J,{style:Object(s.a)({},k),onClick:function(){m()}}),x&&Object.assign(L,{style:Object(s.a)(Object(s.a)({},L.style),{},{borderTopLeftRadius:(M("right")||M("center")||M("bottom"))&&x,borderTopRightRadius:(M("left")||M("center")||M("bottom"))&&x,borderBottomLeftRadius:(M("right")||M("center")||M("top"))&&x,borderBottomRightRadius:(M("left")||M("center")||M("top"))&&x})}),v&&Object.assign(L,{style:Object(s.a)(Object(s.a)({},L.style),{},{height:v})}),Object(i.jsx)("div",Object(s.a)(Object(s.a)({},E),{},{children:Object(i.jsxs)("div",Object(s.a)(Object(s.a)({},L),{},{ref:I,children:[Object(i.jsx)("div",Object(s.a)(Object(s.a)({},T),{},{children:u})),Object(i.jsx)("span",Object(s.a)(Object(s.a)({},J),{},{children:Object(i.jsx)(j.a,{name:_.name,color:_.color})})),Object(i.jsx)("div",Object(s.a)(Object(s.a)({},B),{},{children:f&&f}))]}))}))};n(87),e.default=function(){var t=Object(o.useState)(!1),e=Object(c.a)(t,2),n=e[0],s=e[1],r=Object(i.jsxs)("div",{className:"pop-container",children:[Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("p",{children:"this is content"}),Object(i.jsx)("div",{className:"bottom-btn",children:"Confirm"})]});return Object(i.jsxs)("div",{className:"popup-view",children:[Object(i.jsx)("button",{onClick:function(){return s(!0)},children:"popShow"}),Object(i.jsx)(d,{isShow:n,title:"\u8fd9\u662f\u6807\u9898",titleStyle:{padding:"10px"},height:"50%",customTitleClass:"title-box",onClose:function(){s(!1)},borderRadius:"10px",content:r})]})}},51:function(t,e,n){"use strict";function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,c=new Array(e);n<e;n++)c[n]=t[n];return c}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],c=!0,i=!1,o=void 0;try{for(var s,r=t[Symbol.iterator]();!(c=(s=r.next()).done)&&(n.push(s.value),!e||n.length!==e);c=!0);}catch(a){i=!0,o=a}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return i}))},86:function(t,e,n){},87:function(t,e,n){}}]);