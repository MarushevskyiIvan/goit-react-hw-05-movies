"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[914],{839:function(n,e,t){t.d(e,{a:function(){return c}});var r=t(3430),a=t(184),c=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#4da1a9",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},wrapperClassName:"",visible:!0})}},2676:function(n,e,t){t.d(e,{O:function(){return i}});var r=t(7689),a=t(1087),c=t(184),i=function(n){var e=n.movies,t=(0,r.TH)();return e&&(0,c.jsx)("ul",{children:e.map((function(n){var e=n.title,r=n.poster_path,i=n.id;return(0,c.jsx)("li",{children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(i),state:{from:t},children:[(0,c.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w185/".concat(r):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=342x342",alt:e}),(0,c.jsx)("p",{children:e})]})},i)}))})}},832:function(n,e,t){t.d(e,{M$:function(){return s},Rl:function(){return l},aK:function(){return d},jR:function(){return p},rc:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),i=t(5294),o="https://api.themoviedb.org/",u="b71ac7ae2bc34144ca056afa7f7b4bb5",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"3/trending/movie/day?api_key=").concat(u));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"3/movie/").concat(e,"?api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get(" ".concat(o,"3/movie/").concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get(" ".concat(o,"3/movie/").concat(e,"/reviews?api_key=").concat(u,"&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get(" ".concat(o,"3/search/movie?api_key=").concat(u,"&query=").concat(e,"&include_adult=false&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1914:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,c,i,o=t(5861),u=t(9439),s=t(7757),p=t.n(s),f=t(2791),l=t(832),d=t(1087),h=t(5218),x=t(168),v=t(5867),m=v.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),b=v.ZP.form(a||(a=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 320px;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  border: solid #3f51b5 1px;\n"]))),g=v.ZP.button(c||(c=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 38px;\n  border: 0;\n  background-color: #3f51b5;\n\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n    color: white;\n  }\n"]))),y=v.ZP.input(i||(i=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  padding-left: 12px;\n  padding-right: 12px;\n"]))),w=t(184),Z=function(){var n=(0,f.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,d.lr)(),c=(0,u.Z)(a,2),i=c[0],o=c[1];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(m,{children:(0,w.jsxs)(b,{onSubmit:function(n){if(n.preventDefault(),""===t.trim())return h.ZP.error("Please enter the text of the query");i.set("query",t),o(i)},children:[(0,w.jsx)(g,{type:"submit",children:(0,w.jsx)("span",{children:"Search"})}),(0,w.jsx)(y,{type:"text",placeholder:"Search movies",name:"name",onChange:function(n){return e=n.target.value,void r(e);var e}})]})}),(0,w.jsx)(h.x7,{})]})},k=t(839),j=t(2676),_=function(){var n,e=(0,f.useState)(null),t=(0,u.Z)(e,2),r=t[0],a=t[1],c=(0,f.useState)(!1),i=(0,u.Z)(c,2),s=i[0],x=i[1],v=(0,d.lr)(),m=null!==(n=(0,u.Z)(v,1)[0].get("query"))&&void 0!==n?n:"";return(0,f.useEffect)((function(){function n(){return(n=(0,o.Z)(p().mark((function n(){var e,t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(m){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,x(!0),n.next=6,(0,l.aK)(m);case 6:e=n.sent,t=e.results,a(t),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),h.ZP.error("sorry movies not found");case 14:return n.prev=14,x(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[2,11,14,17]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[m]),(0,w.jsxs)(w.Fragment,{children:[s&&(0,w.jsx)(k.a,{}),(0,w.jsx)(Z,{}),(0,w.jsx)(j.O,{movies:r}),(0,w.jsx)(h.x7,{})]})}}}]);
//# sourceMappingURL=914.cead3f59.chunk.js.map