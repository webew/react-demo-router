(this["webpackJsonpdemo-router"]=this["webpackJsonpdemo-router"]||[]).push([[0],{27:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(20),a=n.n(s),u=(n(27),n(8)),o=n(2),i=n(1),j=function(){return Object(i.jsx)("h2",{children:"About"})},l=n(11),h=n(12),b=n(14),d=n(13),O=n(10),x=n.n(O),p=n(17),f=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).handlePlus=function(){c.setState({value:c.state.value+1},(function(){c.props.handleChange(c.state.value)}))},c.handleMoins=Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.setState({value:c.state.value-1});case 2:c.props.handleChange(c.state.value);case 3:case"end":return e.stop()}}),e)}))),c.handleReset=Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.setState({value:0});case 2:c.props.handleChange(c.state.value);case 3:case"end":return e.stop()}}),e)}))),c.state={value:0},c}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:this.state.value}),Object(i.jsx)("button",{onClick:this.handlePlus,children:"+"}),Object(i.jsx)("button",{onClick:this.handleMoins,children:"-"}),Object(i.jsx)("button",{onClick:this.handleReset,children:"Reset"})]})}}]),n}(c.Component),v=function(e){return Object(i.jsxs)("header",{children:["Count : ",e.count]})},C=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).updateCounters=function(e,t){console.log("Counter "+t," Valeur : "+e);var n=c.state.counters;n[t]=e,console.log(n),c.setState({counters:n});var r=n.reduce((function(e,t){return e+t}),0);c.setState({total:r})},c.state={counters:[0,0,0],total:0},c}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("main",{children:[Object(i.jsx)(v,{count:this.state.total}),this.state.counters.map((function(t,n){return Object(i.jsx)(f,{handleChange:function(t){e.updateCounters(t,n)}},n)}))]})}}]),n}(c.Component);var m=function(){return Object(i.jsx)("h2",{children:"Home"})},g=function(){return Object(i.jsx)("h2",{children:"Users"})};function k(){return Object(i.jsx)(u.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{to:"/",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{to:"/about",children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{to:"/users",children:"Users"})}),Object(i.jsx)("li",{children:Object(i.jsx)(u.b,{to:"/compteurs",children:"Compteurs"})})]})}),Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{path:"/compteurs",children:Object(i.jsx)(C,{})}),Object(i.jsx)(o.a,{path:"/about",children:Object(i.jsx)(j,{})}),Object(i.jsx)(o.a,{path:"/users",children:Object(i.jsx)(g,{})}),Object(i.jsx)(o.a,{path:"/",children:Object(i.jsx)(m,{})})]})]})})}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root")),S()}},[[35,1,2]]]);
//# sourceMappingURL=main.f164e30c.chunk.js.map