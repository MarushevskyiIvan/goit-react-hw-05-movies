"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{839:function(t,n,r){r.d(n,{a:function(){return c}});var e=r(3430),a=r(184),c=function(){return(0,a.jsx)(e.g4,{height:"80",width:"80",radius:"9",color:"#4da1a9",ariaLabel:"three-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"},wrapperClassName:"",visible:!0})}},2676:function(t,n,r){r.d(n,{O:function(){return u}});var e=r(7689),a=r(1087),c=r(184),u=function(t){var n=t.movies,r=(0,e.TH)();return n&&(0,c.jsx)("ul",{children:n.map((function(t){var n=t.title,e=t.poster_path,u=t.id;return(0,c.jsx)("li",{children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(u),state:{from:r},children:[(0,c.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w185/".concat(e):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=342x342",alt:n}),(0,c.jsx)("p",{children:n})]})},u)}))})}},832:function(t,n,r){r.d(n,{M$:function(){return s},Rl:function(){return l},aK:function(){return d},jR:function(){return p},rc:function(){return f}});var e=r(5861),a=r(7757),c=r.n(a),u=r(5294),i="https://api.themoviedb.org/",o="b71ac7ae2bc34144ca056afa7f7b4bb5",s=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"3/trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"3/movie/").concat(n,"?api_key=").concat(o));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get(" ".concat(i,"3/movie/").concat(n,"/credits?api_key=").concat(o));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get(" ".concat(i,"3/movie/").concat(n,"/reviews?api_key=").concat(o,"&page=1"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get(" ".concat(i,"3/search/movie?api_key=").concat(o,"&query=").concat(n,"&include_adult=false&page=1"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},1206:function(t,n,r){r.r(n);var e=r(5861),a=r(9439),c=r(7757),u=r.n(c),i=r(2791),o=r(5218),s=r(832),p=r(839),f=r(2676),l=r(184);n.default=function(){var t=(0,i.useState)(null),n=(0,a.Z)(t,2),r=n[0],c=n[1],d=(0,i.useState)(!1),v=(0,a.Z)(d,2),h=v[0],m=v[1];return(0,i.useEffect)((function(){function t(){return(t=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,s.M$)();case 4:n=t.sent,r=n.results,c(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),o.ZP.error("sorry movies not found");case 12:return t.prev=12,m(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Trending today"}),h&&(0,l.jsx)(p.a,{}),r&&(0,l.jsx)(f.O,{movies:r}),(0,l.jsx)(o.x7,{})]})}}}]);
//# sourceMappingURL=206.9f8d53f2.chunk.js.map