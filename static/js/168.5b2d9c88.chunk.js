"use strict";(self.webpackChunkreact_hw_07_movies=self.webpackChunkreact_hw_07_movies||[]).push([[168],{168:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var t=r(861),c=r(439),s=r(757),u=r.n(s),i=r(791),a=r(320),o=r(689),f="Reviews_reviewList__uMBar",l="Reviews_review__sHbuN",v=r(184);function d(){var e=(0,i.useState)([]),n=(0,c.Z)(e,2),r=n[0],s=n[1],d=(0,i.useState)(null),p=(0,c.Z)(d,2),h=p[0],w=p[1],m=(0,i.useState)("idle"),x=(0,c.Z)(m,2),_=x[0],j=x[1],b=(0,o.UO)().movieId,k=function(){var e=(0,t.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j("pending"),e.prev=1,e.next=4,(0,a.Z)("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=ee0ed139d0a1d8fcbabd26e40efda78c"));case 4:r=e.sent,w("false"),s(r.results),j("resolved"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),w(e.t0.message),j("rejected");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){k(b)}),[b]),"pending"===_?(0,v.jsx)("p",{children:"Loading..."}):"rejected"===_?(0,v.jsx)("p",{children:h}):"resolved"===_?0===r.length?(0,v.jsx)("p",{children:"No reviews available"}):(0,v.jsx)("ul",{className:f,children:r.map((function(e){return(0,v.jsxs)("li",{className:l,children:[(0,v.jsx)("h4",{children:e.author}),(0,v.jsx)("p",{children:e.content})]},e.id)}))}):void 0}},320:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(861),c=r(757),s=r.n(c);function u(e){return i.apply(this,arguments)}function i(){return(i=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return t=e.sent,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",Promise.reject(new Error(e.t0.message)));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}},861:function(e,n,r){function t(e,n,r,t,c,s,u){try{var i=e[s](u),a=i.value}catch(o){return void r(o)}i.done?n(a):Promise.resolve(a).then(t,c)}function c(e){return function(){var n=this,r=arguments;return new Promise((function(c,s){var u=e.apply(n,r);function i(e){t(u,c,s,i,a,"next",e)}function a(e){t(u,c,s,i,a,"throw",e)}i(void 0)}))}}r.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=168.5b2d9c88.chunk.js.map