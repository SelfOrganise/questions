(this.webpackJsonpquestions=this.webpackJsonpquestions||[]).push([[0],{171:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var c,i,a=n(0),r=n.n(a),s=n(18),o=n.n(s),l=(n(171),n(30)),j=n(267),d=n(266),u=n(258),b=n(154),h=n(257),O=n(263),x=n(264),g=n(261),m=n(251),p=n(265),f=n(153),v=n.n(f),y=n(67),q=n.n(y),w=n(27),Q=n(97),k=n(36),A=n(63),C=n(152),N=n.n(C),B=n(155),S=n(253),I=n(255),L=n(249),M=n(252),U=n(254),W=n(247),J=n(250),$=n(10),z=Object(l.gql)(c||(c=Object(A.a)(["\n  mutation addQuestion($id: Int!) {\n    deleteQuestion(id: $id)\n  }\n"])));function E(e){var t=e.question,n=Object(l.useMutation)(z),c=Object(k.a)(n,2),i=c[0],r=c[1].loading,s=Object(a.useCallback)(Object(Q.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i({variables:{id:t.id},update:function(e,n){if(!0===n.data.deleteQuestion){var c=e.readQuery({query:D})||[];e.writeQuery({query:D,data:{questions:Object(w.a)(c.questions.filter((function(e){return e.id!==t.id})))}})}}});case 2:case"end":return e.stop()}}),e)}))),[i,t.id]);return Object($.jsxs)(W.a,{children:[Object($.jsx)(L.a,{component:"th",scope:"row",children:t.id}),Object($.jsx)(L.a,{align:"right",children:t.content}),Object($.jsx)(L.a,{align:"right",children:t.createdAtUtc}),Object($.jsx)(L.a,{align:"right",children:r?Object($.jsx)(J.a,{size:"1em"}):Object($.jsx)(m.a,{onClick:s,children:"Delete"})})]})}var R,D=Object(l.gql)(i||(i=Object(A.a)(["\n  query {\n    questions {\n      id,\n      content,\n      createdBy,\n      createdAtUtc\n    }\n  }\n"])));function G(){var e,t=Object(l.useQuery)(D),n=t.data,c=t.error;return t.loading?Object($.jsx)("span",{children:"'Loading questions'"}):c?Object($.jsx)("span",{children:"'Error loading questions'"}):(null===(e=n.questions)||void 0===e?void 0:e.length)<=0?null:Object($.jsx)(M.a,{component:B.a,children:Object($.jsxs)(S.a,{children:[Object($.jsx)(U.a,{children:Object($.jsxs)(W.a,{children:[Object($.jsx)(L.a,{align:"right",children:"Id"}),Object($.jsx)(L.a,{align:"right",children:"Question"}),Object($.jsx)(L.a,{align:"right",children:"Created at"}),Object($.jsx)(L.a,{align:"right",children:"Actions"})]})}),Object($.jsx)(I.a,{children:n.questions.map((function(e){return Object($.jsx)(E,{question:e},e.id)}))})]})})}var P=Object(l.gql)(R||(R=Object(A.a)(["\n  mutation addQuestion($content: String!) {\n    addQuestion(content: $content) {\n      id\n    }\n  }\n"])));function _(){var e=Object(a.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1],i=Object(l.useMutation)(P),r=Object(k.a)(i,2),s=r[0],o=r[1].error,d=Object(a.useCallback)(Object(Q.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({variables:{content:n},optimisticResponse:{addQuestion:{__type:"Question",id:-1,content:n,createdBy:-1,createdAtUtc:"unknown"}},update:function(e,t){var n=t.data,c=e.readQuery({query:D})||[];e.writeQuery({query:D,data:{questions:[].concat(Object(w.a)(c.questions),[n.addQuestion])}})}});case 2:c("");case 3:case"end":return e.stop()}}),e)}))),[s,n,c]);return Object($.jsxs)(j.a,{children:[Object($.jsx)(N.a,{value:n,onChange:function(e){return c(e.target.value)}}),Object($.jsx)(m.a,{color:"primary",onClick:d,children:"Add question"}),Object($.jsx)("span",{children:o?o.message:""})]})}var F=n(259),H=n(262),K=n(260),T=Object(u.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function X(){var e=T(),t=Object($.jsx)("span",{className:e.bullet,children:"\u2022"});return Object($.jsxs)(F.a,{className:e.root,children:[Object($.jsxs)(K.a,{children:[Object($.jsx)(g.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:"Word of the Day"}),Object($.jsxs)(g.a,{variant:"h5",component:"h2",children:["be",t,"nev",t,"o",t,"lent"]}),Object($.jsx)(g.a,{className:e.pos,color:"textSecondary",children:"adjective"}),Object($.jsxs)(g.a,{variant:"body2",component:"p",children:["well meaning and kindly.",Object($.jsx)("br",{}),'"a benevolent smile"']})]}),Object($.jsx)(H.a,{children:Object($.jsx)(m.a,{size:"small",children:"Learn More"})})]})}var V=n(117),Y=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Z=new l.ApolloClient({uri:"http://localhost:4000/",cache:new l.InMemoryCache}),ee=Object(b.a)();function te(){var e=Y(),t=Object(V.b)(),n=t.logout,c=t.loginWithRedirect,i=t.isAuthenticated,a=t.user;return console.log({isAuthenticated:i}),Object($.jsxs)(h.a,{theme:ee,children:[Object($.jsx)(O.a,{position:"static",children:Object($.jsxs)(x.a,{children:[Object($.jsx)(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object($.jsx)(v.a,{})}),Object($.jsx)(g.a,{variant:"h6",className:e.title,children:"Questions"}),i?Object($.jsx)(m.a,{color:"inherit",onClick:function(){return n({returnTo:window.location.origin})},children:"Logout"}):Object($.jsx)(m.a,{color:"inherit",onClick:function(){return c()},children:"Login"})]})}),Object($.jsx)(d.a,{maxWidth:"sm",className:"App",children:Object($.jsxs)(j.a,{padding:5,children:[Object($.jsx)(X,{}),i?a.email:"unauthenticated",Object($.jsx)(_,{}),Object($.jsx)(G,{})]})})]})}var ne=function(){return Object($.jsx)(V.a,{domain:"boiculese.auth0.com",clientId:"9umXUJ235FysjsLWAvJKHE43jN7toi4P",redirectUri:window.location.origin,children:Object($.jsx)(l.ApolloProvider,{client:Z,children:Object($.jsx)(te,{})})})};o.a.render(Object($.jsx)(r.a.StrictMode,{children:Object($.jsx)(ne,{})}),document.getElementById("root"))}},[[215,1,2]]]);
//# sourceMappingURL=main.559b76ec.chunk.js.map