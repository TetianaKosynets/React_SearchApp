(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(5),i=n.n(a),s=(n(15),n(6)),u=n(7),j=n(10),o=n(9),l=n(4),d=n.n(l),b=n(8),f=n(2),h=n(0);function O(t){var e=Object(c.useState)(null),n=Object(f.a)(e,2),r=n[0],a=n[1];if(Object(c.useEffect)((function(){a(t.data)}),[t.data]),!r)return"null";return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{placeholder:"Search",onChange:function(e){var n=e.target.value;if(""!==n){var c=t.data.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));a(c)}}})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Products"}),r.map((function(t){return Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:t.name}),Object(h.jsx)("li",{children:t.details}),Object(h.jsx)("li",{children:t.price}),Object(h.jsx)("li",{children:t.location})]})}))]})]})}function p(){var t=Object(c.useState)(null),e=Object(f.a)(t,2),n=e[0],r=e[1];function a(){return(a=Object(b.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./data.json");case 2:return e=t.sent,t.t0=r,t.next=6,e.json();case 6:t.t1=t.sent,(0,t.t0)(t.t1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){a.apply(this,arguments)}()}),[]),Object(h.jsx)(O,{data:n})}var x=function(t){Object(j.a)(n,t);var e=Object(o.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).state={},c}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)(p,{})}}]),n}(c.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.c8c5c2e2.chunk.js.map