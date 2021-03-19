(this.webpackJsonpquestions=this.webpackJsonpquestions||[]).push([[0],{147:function(e,t,n){},170:function(e,t,n){"use strict";n.r(t),n.d(t,"url",(function(){return me}));var a=n(38),c=n(127),i=n(226),r=n(0),s=n.n(r),o=(n(147),n(78)),l=n(225),j=n(215),d=n(214),u=n(20),b=n(22),O=n(12),h=n(209),x=n(229),p=n(207),f=n(213),m=n(230),g=n(211),v=n(212),y=n(5),q=Object(p.a)((function(e){return{tabs:Object(O.a)({marginLeft:"20px"},e.breakpoints.down("xs"),{marginLeft:"0"})}}));function k(){var e=Object(a.b)(),t=e.logout,n=e.loginWithRedirect,c=e.isAuthenticated,i=Object(u.f)(),o=s.a.useState("/"),l=Object(b.a)(o,2),j=l[0],O=l[1];Object(r.useEffect)((function(){O(i.location.pathname)}),[i]);var p=q();return Object(y.jsx)(h.a,{position:"static",children:Object(y.jsxs)(g.a,{children:[Object(y.jsxs)(x.a,{display:"flex",alignItems:"center",flexGrow:1,children:[Object(y.jsx)(x.a,{display:{xs:"none",sm:"block"},children:Object(y.jsx)(v.a,{variant:"h6",children:"\u2049\ufe0f Questions \u2049\ufe0f"})}),c&&Object(y.jsxs)(m.a,{className:p.tabs,value:j,onChange:function(e,t){O(t),i.push(t)},children:[Object(y.jsx)(f.a,{label:"\u2699\ufe0f Manage",value:"/"}),Object(y.jsx)(f.a,{label:"\ud83d\udd79\ufe0f Play",value:"/play"})]})]}),c?Object(y.jsx)(d.a,{color:"inherit",onClick:function(){return t({returnTo:me})},children:"Logout"}):Object(y.jsx)(d.a,{variant:"outlined",color:"inherit",onClick:function(){return n()},children:"Login"})]})})}var C=n(24),w=n(61),Q=n(122);var A=n(4);function N(e){var t=e.children,n=Object(A.a)(e,["children"]);return Object(y.jsx)(x.a,Object(w.a)(Object(w.a)({marginTop:"10%",display:"flex",alignItems:"center",alignContent:"center",justifyContent:"center",justifyItems:"center"},n),{},{children:t}))}function I(e){var t=function(){var e=Object(a.b)(),t=e.getAccessTokenSilently,n=e.isAuthenticated,c=Object(r.useState)(),i=Object(b.a)(c,2),s=i[0],o=i[1];return Object(r.useEffect)((function(){n&&t().then((function(e){var t=Object(C.createHttpLink)({uri:"https://bogdbo-questions-api.herokuapp.com/graphql"}),n=Object(Q.a)((function(t,n){var a=n.headers;return{headers:Object(w.a)(Object(w.a)({},a),{},{Authorization:"Bearer ".concat(e)})}}));o(new C.ApolloClient({cache:new C.InMemoryCache,link:n.concat(t)}))}))}),[n,t]),s}();return t?Object(y.jsx)(C.ApolloProvider,{client:t,children:e.children}):Object(y.jsx)(N,{children:Object(y.jsx)(j.a,{})})}var L,M,S=n(62),T=n.n(S),B=n(28),U=n(88),E=n(50),R=n(227),W=n(173),z=n(220),F=n(222),J=n(217),P=n(219),$=n(221),_=n(216),D=n(126),G=n.n(D),H=n(218),K=Object(C.gql)(L||(L=Object(E.a)(["\n  mutation addQuestion($id: Int!) {\n    deleteQuestion(id: $id)\n  }\n"])));function X(e){var t=e.question,n=Object(C.useMutation)(K),a=Object(b.a)(n,2),c=a[0],i=a[1].loading,s=Object(r.useCallback)(Object(U.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({variables:{id:t.id},update:function(e,n){if(!0===n.data.deleteQuestion){var a=e.readQuery({query:Y})||[];a.questions&&e.writeQuery({query:Y,data:{questions:Object(B.a)(a.questions.filter((function(e){return e.id!==t.id})))}})}}});case 2:case"end":return e.stop()}}),e)}))),[c,t.id]),o=!i&&t.id>=0;return Object(y.jsxs)(_.a,{children:[Object(y.jsx)(J.a,{align:"left",children:t.content}),Object(y.jsx)(J.a,{align:"right",children:Object(y.jsx)(H.a,{disabled:!o,onClick:s,children:o?Object(y.jsx)(G.a,{}):Object(y.jsx)(j.a,{size:"1em"})})})]})}var Y=Object(C.gql)(M||(M=Object(E.a)(["\n  query getQuestions {\n    questions {\n      id\n      content\n      createdBy\n      createdAtUtc\n    }\n  }\n"])));function V(){var e,t=Object(C.useQuery)(Y),n=t.data,a=t.error,c=t.loading,i=ee();return c||null==n?Object(y.jsx)(N,{children:Object(y.jsx)(v.a,{variant:"body1",children:"Loading questions"})}):a?Object(y.jsx)(N,{children:Object(y.jsx)(v.a,{variant:"body1",children:"Error loading questions"})}):(null===(e=n.questions)||void 0===e?void 0:e.length)<=0?Object(y.jsx)(N,{children:Object(y.jsx)(v.a,{variant:"body1",children:"No questions added"})}):Object(y.jsx)(P.a,{className:i.container,component:W.a,children:Object(y.jsxs)(z.a,{children:[Object(y.jsx)($.a,{children:Object(y.jsxs)(_.a,{children:[Object(y.jsx)(J.a,{align:"left",children:"Question"}),Object(y.jsx)(J.a,{align:"right"})]})}),Object(y.jsx)(F.a,{children:n.questions.map((function(e){return Object(y.jsx)(X,{question:e},e.id)}))})]})})}var Z,ee=Object(p.a)((function(){return{container:{}}})),te=Object(C.gql)(Z||(Z=Object(E.a)(["\n  mutation addQuestions($questions: [String!]) {\n    addQuestions(questions: $questions) {\n      id\n      content\n      createdAtUtc\n      createdBy\n    }\n  }\n"])));function ne(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(C.useMutation)(te),i=Object(b.a)(c,2),s=i[0],o=i[1],l=o.error,j=o.loading,u=Object(r.useCallback)(Object(U.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(""),t=n.split("\n").filter((function(e){return e&&e.length>0})),e.next=4,s({variables:{questions:t},optimisticResponse:{__typename:"Mutation",addQuestions:t.map((function(e){return ae(e)}))},update:function(e,t){var n=t.data,a=e.readQuery({query:Y});e.writeQuery({query:Y,data:{questions:[].concat(Object(B.a)(n.addQuestions),Object(B.a)(a.questions))}})}});case 4:case"end":return e.stop()}}),e)}))),[s,n,a]);return Object(y.jsxs)(x.a,{display:"flex",flexDirection:"column",children:[Object(y.jsx)(R.a,{variant:"outlined",multiline:!0,rows:5,label:"Type in one or more questions",placeholder:"Multiple questions can be entered by separating them with with a new line",value:n,onChange:function(e){return a(e.target.value)}}),Object(y.jsx)(x.a,{marginTop:"10px",display:"flex",justifyContent:"flex-end",children:Object(y.jsx)(d.a,{disabled:0===n.length||j,variant:"contained",color:"primary",onClick:u,children:"Add question"})}),Object(y.jsx)("span",{children:l?l.message:""})]})}function ae(e){return{__typename:"Question",id:-Math.floor(1e8*Math.random()),content:e,createdBy:-1,createdAtUtc:""}}function ce(){var e,t=Object(a.b)();return Object(y.jsx)(x.a,{marginBottom:"10px",children:Object(y.jsxs)(v.a,{variant:"h6",children:["Welcome ",null===(e=t.user.name)||void 0===e?void 0:e.split("@")[0]," \ud83d\udc4b"]})})}function ie(){return Object(y.jsxs)(x.a,{paddingTop:3,children:[Object(y.jsx)(ce,{}),Object(y.jsx)(ne,{}),Object(y.jsx)(V,{})]})}var re=n(224),se=n(223);function oe(e){var t=e.message;return Object(y.jsx)(N,{children:Object(y.jsxs)(v.a,{color:"error",children:["\ud83d\uded1 ",t,". Sorry \ud83d\ude3f."]})})}function le(){return Object(y.jsx)(N,{children:Object(y.jsx)(v.a,{children:"You have completed all questions."})})}function je(e){var t=e.onClick;return Object(y.jsx)(N,{children:Object(y.jsx)(d.a,{variant:"contained",onClick:t,children:"Start"})})}var de,ue=n(228);var be=Object(C.gql)(de||(de=Object(E.a)(["\n  query getRandomQuestion {\n    randomQuestion {\n      id\n      content\n      createdAtUtc\n      createdByName\n    }\n  }\n"])));function Oe(){var e,t=Object(C.useLazyQuery)(be,{fetchPolicy:"network-only"}),n=Object(b.a)(t,2),a=n[0],c=n[1],i=c.data,r=c.loading,s=c.error,o=c.called,l=null===i||void 0===i?void 0:i.randomQuestion,u=he();return o?s?Object(y.jsx)(oe,{message:s.message}):!o||r||l?Object(y.jsxs)(x.a,{paddingTop:4,paddingLeft:2,paddingRight:2,children:[r&&Object(y.jsx)(N,{className:u.paper,marginTop:0,children:Object(y.jsx)(j.a,{})}),!r&&l&&Object(y.jsx)(se.a,{timeout:1e3,in:!0,children:Object(y.jsx)(re.a,{timeout:1e3,in:!0,children:Object(y.jsx)(W.a,{className:u.paper,elevation:4,children:Object(y.jsxs)(x.a,{height:"100%",display:"flex",flexDirection:"column",flexGrow:"1",children:[Object(y.jsxs)(v.a,{className:u.date,variant:"overline",children:[(e=l.createdAtUtc,Object(ue.a)(parseInt(e)))," ago"]}),Object(y.jsx)(x.a,{className:u.questionContainer,children:Object(y.jsx)("span",{className:u.question,children:l.content})}),Object(y.jsx)(v.a,{className:u.author,variant:"caption",children:l.createdByName})]})})})}),(r||!s)&&Object(y.jsx)(d.a,{className:u.nextQuestion,color:"primary",disabled:r,onClick:function(){return a()},children:"\ud83d\udcdc Next question"})]}):Object(y.jsx)(le,{}):Object(y.jsx)(je,{onClick:a})}var he=Object(p.a)((function(){return{nextQuestion:{marginTop:"15px",width:"100%"},paper:{padding:"20px",height:"60vh",display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center"},question:{fontFamily:"Indie Flower, cursive;",fontSize:"1.8rem"},questionContainer:{display:"flex",flex:"1 1 auto",alignItems:"center",justifyContent:"center"},date:{display:"flex"},author:{display:"flex",justifyContent:"flex-end"}}}));var xe=function(){var e=Object(a.b)(),t=e.isAuthenticated,n=e.isLoading,c=e.loginWithRedirect;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(k,{}),Object(y.jsxs)(l.a,{maxWidth:"md",className:"App",children:[t&&Object(y.jsx)(I,{children:Object(y.jsxs)(u.c,{children:[Object(y.jsx)(u.a,{exact:!0,path:"/play",children:Object(y.jsx)(Oe,{})}),Object(y.jsx)(u.a,{exact:!0,path:"/",children:Object(y.jsx)(ie,{})})]})}),n&&Object(y.jsx)(N,{children:Object(y.jsx)(j.a,{})}),!t&&!n&&Object(y.jsx)(N,{children:Object(y.jsx)(d.a,{variant:"outlined",onClick:c,children:"Click here to login"})})]})]})},pe=n(18),fe=n.n(pe),me=window.location.origin+"/questions",ge=Object(c.a)({palette:{secondary:{main:"#f48fb1",light:"#ffc1e3",dark:"#bf5f82"},primary:{main:"#ab47bc",light:"#df78ef",dark:"#790e8b"}}});fe.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(a.a,{domain:"boiculese.auth0.com",clientId:"9umXUJ235FysjsLWAvJKHE43jN7toi4P",audience:"https://bogdbo-questions-api.herokuapp.com",scope:"start:questions",redirectUri:me,children:Object(y.jsx)(i.a,{theme:ge,children:Object(y.jsx)(o.a,{basename:"/questions",children:Object(y.jsx)(xe,{})})})})}),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.bef1a783.chunk.js.map