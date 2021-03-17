(this.webpackJsonpquestions=this.webpackJsonpquestions||[]).push([[0],{140:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t),n.d(t,"url",(function(){return be}));var c=n(38),a=n(121),i=n(221),r=n(0),s=n.n(r),o=(n(140),n(76)),j=n(210),d=n(220),l=n(207),u=n(20),b=n(27),O=n(12),h=n(204),x=n(223),p=n(209),f=n(202),g=n(208),m=n(224),v=n(206),y=n(6),q=Object(f.a)((function(e){return{tabs:Object(O.a)({marginLeft:"20px"},e.breakpoints.down("xs"),{marginLeft:"0"})}}));function Q(){var e=Object(c.b)(),t=e.logout,n=e.loginWithRedirect,a=e.isAuthenticated,i=Object(u.f)(),o=s.a.useState("/"),j=Object(b.a)(o,2),d=j[0],O=j[1];Object(r.useEffect)((function(){O(i.location.pathname)}),[i]);var f=q();return Object(y.jsx)(h.a,{position:"static",children:Object(y.jsxs)(v.a,{children:[Object(y.jsxs)(x.a,{display:"flex",alignItems:"center",flexGrow:1,children:[Object(y.jsx)(x.a,{display:{xs:"none",sm:"block"},children:Object(y.jsx)(l.a,{variant:"h6",children:"\u2049\ufe0f Questions \u2049\ufe0f"})}),a&&Object(y.jsxs)(m.a,{className:f.tabs,value:d,onChange:function(e,t){O(t),i.push(t)},children:[Object(y.jsx)(g.a,{label:"\u2699\ufe0f Manage",value:"/"}),Object(y.jsx)(g.a,{label:"\ud83d\udd79\ufe0f Play",value:"/play"})]})]}),a?Object(y.jsx)(p.a,{color:"inherit",onClick:function(){return t({returnTo:be})},children:"Logout"}):Object(y.jsx)(p.a,{variant:"outlined",color:"inherit",onClick:function(){return n()},children:"Login"})]})})}var k=n(23),w=n(60),A=n(116);var C=n(4);function L(e){var t=e.children,n=Object(C.a)(e,["children"]);return Object(y.jsx)(x.a,Object(w.a)(Object(w.a)({marginTop:"10%",display:"flex",alignItems:"center",alignContent:"center",justifyContent:"center",justifyItems:"center"},n),{},{children:t}))}function M(e){var t=function(){var e=Object(c.b)(),t=e.getAccessTokenSilently,n=e.isAuthenticated,a=Object(r.useState)(),i=Object(b.a)(a,2),s=i[0],o=i[1];return Object(r.useEffect)((function(){n&&t().then((function(e){var t=Object(k.createHttpLink)({uri:"https://bogdbo-questions-api.herokuapp.com/graphql"}),n=Object(A.a)((function(t,n){var c=n.headers;return{headers:Object(w.a)(Object(w.a)({},c),{},{Authorization:"Bearer ".concat(e)})}}));o(new k.ApolloClient({cache:new k.InMemoryCache,link:n.concat(t)}))}))}),[n,t]),s}();return t?Object(y.jsx)(k.ApolloProvider,{client:t,children:e.children}):Object(y.jsx)(L,{children:Object(y.jsx)(j.a,{})})}var I,N,T=n(61),U=n.n(T),B=n(31),S=n(86),E=n(50),J=n(222),P=n(124),W=n(215),$=n(217),_=n(212),R=n(214),z=n(216),F=n(211),H=n(120),D=n.n(H),G=n(213),K=Object(k.gql)(I||(I=Object(E.a)(["\n  mutation addQuestion($id: Int!) {\n    deleteQuestion(id: $id)\n  }\n"])));function X(e){var t=e.question,n=Object(k.useMutation)(K),c=Object(b.a)(n,2),a=c[0],i=c[1].loading,s=Object(r.useCallback)(Object(S.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({variables:{id:t.id},update:function(e,n){if(!0===n.data.deleteQuestion){var c=e.readQuery({query:Y})||[];c.questions&&e.writeQuery({query:Y,data:{questions:Object(B.a)(c.questions.filter((function(e){return e.id!==t.id})))}})}}});case 2:case"end":return e.stop()}}),e)}))),[a,t.id]),o=!i&&t.id>=0;return Object(y.jsxs)(F.a,{children:[Object(y.jsx)(_.a,{align:"left",children:t.content}),Object(y.jsx)(_.a,{align:"right",children:Object(y.jsx)(G.a,{disabled:!o,onClick:s,children:o?Object(y.jsx)(D.a,{}):Object(y.jsx)(j.a,{size:"1em"})})})]})}var V,Y=Object(k.gql)(N||(N=Object(E.a)(["\n  query getQuestions {\n    questions {\n      id\n      content\n      createdBy\n      createdAtUtc\n    }\n  }\n"])));function Z(){var e,t=Object(k.useQuery)(Y),n=t.data,c=t.error;return t.loading||null==n?Object(y.jsx)(L,{children:Object(y.jsx)(l.a,{variant:"body1",children:"Loading questions"})}):c?Object(y.jsx)(L,{children:Object(y.jsx)(l.a,{variant:"body1",children:"Error loading questions"})}):(null===(e=n.questions)||void 0===e?void 0:e.length)<=0?Object(y.jsx)(L,{children:Object(y.jsx)(l.a,{variant:"body1",children:"No questions added"})}):Object(y.jsx)(R.a,{component:P.a,children:Object(y.jsxs)(W.a,{children:[Object(y.jsx)(z.a,{children:Object(y.jsxs)(F.a,{children:[Object(y.jsx)(_.a,{align:"left",children:"Question"}),Object(y.jsx)(_.a,{align:"right"})]})}),Object(y.jsx)($.a,{children:n.questions.map((function(e){return Object(y.jsx)(X,{question:e},e.id)}))})]})})}var ee=Object(k.gql)(V||(V=Object(E.a)(["\n  mutation addQuestion($content: String!) {\n    addQuestion(content: $content) {\n      id\n      content\n      createdBy\n      createdAtUtc\n    }\n  }\n"])));function te(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(k.useMutation)(ee),i=Object(b.a)(a,2),s=i[0],o=i[1],j=o.error,d=o.loading,l=Object(r.useCallback)(Object(S.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.next=3,s({variables:{content:n},optimisticResponse:{__typename:"Mutation",addQuestion:{__typename:"Question",id:-Math.floor(1e4*Math.random()),content:n,createdBy:-1,createdAtUtc:""}},update:function(e,t){var n=t.data,c=e.readQuery({query:Y});e.writeQuery({query:Y,data:{questions:[n.addQuestion].concat(Object(B.a)(c.questions))}})}});case 3:case"end":return e.stop()}}),e)}))),[s,n,c]);return Object(y.jsxs)(x.a,{display:"flex",flexDirection:"column",children:[Object(y.jsx)(J.a,{variant:"outlined",multiline:!0,rows:5,label:"Type in a new question",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)(x.a,{marginTop:"10px",display:"flex",justifyContent:"flex-end",children:Object(y.jsx)(p.a,{disabled:0===n.length||d,variant:"contained",color:"primary",onClick:l,children:"Add question"})}),Object(y.jsx)("span",{children:j?j.message:""})]})}function ne(){var e=Object(c.b)();return Object(y.jsx)(x.a,{marginBottom:"10px",children:Object(y.jsxs)(l.a,{variant:"h6",children:["Welcome ",e.user.name," \ud83d\udc4b"]})})}function ce(){return Object(y.jsxs)(x.a,{padding:5,children:[Object(y.jsx)(ne,{}),Object(y.jsx)(te,{}),Object(y.jsx)(Z,{})]})}var ae,ie=n(218),re=n(219),se=Object(k.gql)(ae||(ae=Object(E.a)(["\n  query getRandomQuestion {\n    randomQuestion {\n      id\n      content\n      createdAtUtc\n    }\n  }\n"]))),oe=Object(f.a)((function(){return{nextQuestion:{marginTop:"15px",width:"100%"}}}));function je(){var e=Object(k.useQuery)(se),t=e.data,n=e.loading,c=e.refetch,a=e.error,i=null===t||void 0===t?void 0:t.randomQuestion,r=oe();return Object(y.jsxs)(x.a,{padding:5,children:[Object(y.jsx)(ie.a,{children:Object(y.jsxs)(re.a,{children:[n&&Object(y.jsx)(L,{marginTop:0,children:Object(y.jsx)(j.a,{})}),!n&&!a&&Object(y.jsxs)(x.a,{textAlign:"center",children:[!i&&Object(y.jsx)(l.a,{children:"No questions left \ud83d\ude3f"}),i&&Object(y.jsxs)(l.a,{children:[i.content," created ",i.createdAtUtc]})]}),a&&Object(y.jsx)(l.a,{color:"error",children:a.message})]})}),(n||!a)&&Object(y.jsx)(p.a,{className:r.nextQuestion,color:"primary",disabled:n,onClick:function(){return c()},children:"Next question"})]})}var de=function(){var e=Object(c.b)(),t=e.isAuthenticated,n=e.isLoading;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Q,{}),Object(y.jsxs)(d.a,{maxWidth:"md",className:"App",children:[t&&Object(y.jsx)(M,{children:Object(y.jsxs)(u.c,{children:[Object(y.jsx)(u.a,{exact:!0,path:"/play",children:Object(y.jsx)(je,{})}),Object(y.jsx)(u.a,{exact:!0,path:"/",children:Object(y.jsx)(ce,{})})]})}),n&&Object(y.jsx)(L,{children:Object(y.jsx)(j.a,{})}),!t&&!n&&Object(y.jsx)(L,{children:Object(y.jsx)(l.a,{variant:"h5",children:"Please login"})})]})]})},le=n(18),ue=n.n(le),be=window.location.origin+"/questions",Oe=Object(a.a)();ue.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(c.a,{domain:"boiculese.auth0.com",clientId:"9umXUJ235FysjsLWAvJKHE43jN7toi4P",audience:"https://bogdbo-questions-api.herokuapp.com",scope:"start:questions",redirectUri:be,children:Object(y.jsx)(i.a,{theme:Oe,children:Object(y.jsx)(o.a,{basename:"/questions",children:Object(y.jsx)(de,{})})})})}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.5e4abc85.chunk.js.map