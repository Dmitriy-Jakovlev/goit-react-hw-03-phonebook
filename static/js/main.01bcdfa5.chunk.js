(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(9),c=n.n(r),i=n(10),s=n(2),u=n(3),l=n(6),h=n(5),d=n(4),m=n(19),b=n(0),j={name:"",phone:""},p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state=j,t.handleChangeForm=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(d.a)({},a,o))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,o=n.phone,r=t.props.onAdd;t.validateForm()&&r({id:Object(m.a)(),name:a,phone:o})},t.validateForm=function(){var e=t.state,n=e.name,a=e.phone,o=t.props.onCheckUnique;return n&&a?o(n):(alert("Some filed is empty"),!1)},t.resetForm=function(){return t.setState(j)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(b.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChangeForm}),Object(b.jsx)("input",{type:"tel",name:"phone",placeholder:"Enter phone number",value:n,onChange:this.handleChangeForm}),Object(b.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(a.Component),f=n(8),v=function(t){var e=t.id,n=t.name,a=t.phone,o=t.onRemove;return Object(b.jsxs)("li",{children:[n,": ",a," ",Object(b.jsx)("button",{onClick:function(){return o(e)},children:"delete"})]},e)},O=function(t){var e=t.contacts,n=t.onRemove;return 0===e.length?null:Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)(v,Object(f.a)(Object(f.a)({},t),{},{onRemove:n}))}))})},C=function(t){var e=t.filter,n=t.onChange;return Object(b.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(t){var e=t.target;return n(e.value)}})},g=(n(16),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){return t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(i.a)(n),[e])}}))},t.handleCheckUnique=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("Contact is already exist"),!n},t.handleRemoveContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){return t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){console.log("App componentDidUpdate"),this.state.contacts!==e.contacts&&(console.log("\u043e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435 contacts"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Form Contact"}),Object(b.jsx)(p,{onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUnique}),Object(b.jsx)("h2",{children:"Contacts List"}),Object(b.jsx)(C,{filter:t,onChange:this.handleFilterChange}),Object(b.jsx)(O,{contacts:e,onRemove:this.handleRemoveContact})]})}}]),n}(a.Component));c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.01bcdfa5.chunk.js.map