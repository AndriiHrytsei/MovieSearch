"use strict";(self.webpackChunkreact_hw_07_movies=self.webpackChunkreact_hw_07_movies||[]).push([[958],{958:function(e,n,s){s.r(n),s.d(n,{default:function(){return h}});var t=s(861),i=s(439),r=s(757),a=s.n(r),o=s(689),c=s(87),l=s(320),v=s(791),d={goBackBtn:"MovieDetails_goBackBtn__-BYoR",movieDetails:"MovieDetails_movieDetails__4UlS5",posterBox:"MovieDetails_posterBox__vtPWU",poster:"MovieDetails_poster__B12ex",movieInfo:"MovieDetails_movieInfo__kyDrT",additionaInfo:"MovieDetails_additionaInfo__ZQerY",overview:"MovieDetails_overview__p1pEP",movieTitle:"MovieDetails_movieTitle__o3anW",genres:"MovieDetails_genres__2ERh5",navLink:"MovieDetails_navLink__m2LhA"},u=s(184);function h(){var e=(0,v.useState)({}),n=(0,i.Z)(e,2),s=n[0],r=n[1],h=(0,v.useState)(null),p=(0,i.Z)(h,2),m=p[0],f=p[1],_=(0,v.useState)("idle"),x=(0,i.Z)(_,2),j=x[0],w=x[1],k=(0,o.UO)().movieId,g=(0,o.s0)(),D=function(){var e=(0,t.Z)(a().mark((function e(n){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w("pending"),e.prev=1,e.next=4,(0,l.Z)("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=ee0ed139d0a1d8fcbabd26e40efda78c"));case 4:s=e.sent,f(!1),r(s),w("resolved"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),f(e.t0.message),w("rejected");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,v.useEffect)((function(){D(k)}),[k]),"rejected"===j?(0,u.jsx)("p",{children:m}):"resolved"===j?(0,u.jsxs)("main",{className:"movieDetailsContainer",children:[(0,u.jsxs)("button",{className:d.goBackBtn,type:"button",onClick:function(){return g(-1)},children:[(0,u.jsx)("span",{className:"material-symbols-outlined",children:"arrow_left_alt"}),(0,u.jsx)("span",{children:"Go back"})]}),(0,u.jsxs)("div",{className:d.movieDetails,children:[(0,u.jsx)("div",{className:d.posterBox,children:(0,u.jsx)("img",{className:d.poster,src:"https://image.tmdb.org/t/p/w500/".concat(s.poster_path),alt:""})}),(0,u.jsxs)("div",{className:d.movieInfo,children:[(0,u.jsx)("h2",{className:d.movieTitle,children:s.title||s.name}),(0,u.jsxs)("p",{className:d.score,children:["User score: ",Math.round(s.vote_average),"/10"]}),(0,u.jsxs)("div",{className:d.overview,children:[(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:s.overview})]}),(0,u.jsxs)("div",{className:d.genres,children:[(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{children:s.genres.map((function(e){return(0,u.jsxs)("span",{children:[e.name,", "]},e.id)}))})]})]})]}),(0,u.jsxs)("div",{className:d.additionaInfo,children:[(0,u.jsx)("p",{className:d.castAndReviewsTitle,children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{className:d.navLink,to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.OL,{className:d.navLink,to:"reviews",children:"Reviews"})})]})]}),(0,u.jsx)(v.Suspense,{fallback:(0,u.jsx)("p",{children:"Loading page..."}),children:(0,u.jsx)(o.j3,{})})]}):void 0}},320:function(e,n,s){s.d(n,{Z:function(){return a}});var t=s(861),i=s(757),r=s.n(i);function a(e){return o.apply(this,arguments)}function o(){return(o=(0,t.Z)(r().mark((function e(n){var s,t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return s=e.sent,e.next=6,s.json();case 6:return t=e.sent,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",Promise.reject(new Error(e.t0.message)));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}},861:function(e,n,s){function t(e,n,s,t,i,r,a){try{var o=e[r](a),c=o.value}catch(l){return void s(l)}o.done?n(c):Promise.resolve(c).then(t,i)}function i(e){return function(){var n=this,s=arguments;return new Promise((function(i,r){var a=e.apply(n,s);function o(e){t(a,i,r,o,c,"next",e)}function c(e){t(a,i,r,o,c,"throw",e)}o(void 0)}))}}s.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=958.11876a92.chunk.js.map