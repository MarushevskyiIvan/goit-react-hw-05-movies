"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[826],{6802:function(n,e,t){t.d(e,{M$:function(){return s},Rl:function(){return l},aK:function(){return d},jR:function(){return p},rc:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),i=t(5294),o="https://api.themoviedb.org/",u="b71ac7ae2bc34144ca056afa7f7b4bb5",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"3/trending/movie/day?api_key=").concat(u));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"3/movie/").concat(e,"?api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get(" ".concat(o,"3/movie/").concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get(" ".concat(o,"3/movie/").concat(e,"/reviews?api_key=").concat(u,"&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get(" ".concat(o,"3/search/movie?api_key=").concat(u,"&query=").concat(e,"&include_adult=false&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},839:function(n,e,t){t.d(e,{a:function(){return c}});var r=t(3430),a=t(184),c=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#4da1a9",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},wrapperClassName:"",visible:!0})}},3826:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,c,i,o=t(5861),u=t(9439),s=t(7757),p=t.n(s),f=t(2791),l=t(6802),d=t(1087),h=t(5218),x=t(168),v=t(5867),m=v.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),b=v.ZP.form(a||(a=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 320px;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  border: solid #3f51b5 1px;\n"]))),g=v.ZP.button(c||(c=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 38px;\n  border: 0;\n  background-color: #3f51b5;\n\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n    color: white;\n  }\n"]))),y=v.ZP.input(i||(i=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  padding-left: 12px;\n  padding-right: 12px;\n"]))),w=t(7689),Z=t(184),k=function(n){var e=n.movies,t=(0,w.TH)();return e&&(0,Z.jsx)("ul",{children:e.map((function(n){var e=n.title,r=n.poster_path,a=n.id;return(0,Z.jsx)("li",{children:(0,Z.jsxs)(d.rU,{to:"/movies/".concat(a),state:{from:t},children:[(0,Z.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w185/".concat(r):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e}),(0,Z.jsx)("p",{children:e})]})},a)}))})},j=function(n){var e,t=n.movies,r=(0,f.useState)(""),a=(0,u.Z)(r,2),c=a[0],i=a[1],o=(0,d.lr)(),s=(0,u.Z)(o,2),p=s[0],l=s[1],x=null!==(e=p.get("query"))&&void 0!==e?e:"";return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(m,{children:(0,Z.jsxs)(b,{onSubmit:function(n){if(n.preventDefault(),""===c.trim())return h.ZP.error("Please enter the text of the query");p.set("query",c),l(p)},children:[(0,Z.jsx)(g,{type:"submit",children:(0,Z.jsx)("span",{children:"Search"})}),(0,Z.jsx)(y,{type:"text",placeholder:"Search images and photos",name:"name",onChange:function(n){return e=n.target.value,void i(e);var e}})]})}),x&&(0,Z.jsx)(k,{movies:t}),(0,Z.jsx)(h.x7,{})]})},_=t(839),P=function(){var n,e=(0,f.useState)([]),t=(0,u.Z)(e,2),r=t[0],a=t[1],c=(0,f.useState)(!1),i=(0,u.Z)(c,2),s=i[0],x=i[1],v=(0,d.lr)(),m=null!==(n=(0,u.Z)(v,1)[0].get("query"))&&void 0!==n?n:"";return(0,f.useEffect)((function(){function n(){return(n=(0,o.Z)(p().mark((function n(){var e,t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(m){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,x(!0),n.next=6,(0,l.aK)(m);case 6:e=n.sent,t=e.results,a(t),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),h.ZP.error("sorry movies not found");case 14:return n.prev=14,x(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[2,11,14,17]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[m]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j,{movies:r}),s&&(0,Z.jsx)(_.a,{}),(0,Z.jsx)(h.x7,{})]})}}}]);
//# sourceMappingURL=826.1e579f8b.chunk.js.map