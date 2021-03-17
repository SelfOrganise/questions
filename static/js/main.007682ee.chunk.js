(this.webpackJsonpquestions=this.webpackJsonpquestions||[]).push([[0],{129:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var i=n(47),c=n(107),a=n(201),r=n(0),o=n.n(r),s=(n(129),n(198)),d=n(203),j=n(196),u=n(190),l=n(200),b=n(197),O=n(199),h=n(191),x=n(50),p=n.n(x),f=n(26),g=n(70),m=n(29),v=n(48),y=n(24),q=n(202),w=n(153),k=n(193),Q=n(195),A=n(188),C=n(192),M=n(194),B=n(186),I=n(51),L=n(4),S=n(8);function T(e){var t=e.children,n=Object(L.a)(e,["children"]);return Object(S.jsx)(d.a,Object(I.a)(Object(I.a)({marginTop:"10%",display:"flex",alignItems:"center",alignContent:"center",justifyContent:"center",justifyItems:"center"},n),{},{children:t}))}var U,E,J=n(105),N=n.n(J),$=n(189),_=Object(y.gql)(U||(U=Object(v.a)(["\n  mutation addQuestion($id: Int!) {\n    deleteQuestion(id: $id)\n  }\n"])));function P(e){var t=e.question,n=Object(y.useMutation)(_),i=Object(m.a)(n,2),c=i[0],a=i[1].loading,o=Object(r.useCallback)(Object(g.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({variables:{id:t.id},update:function(e,n){if(!0===n.data.deleteQuestion){var i=e.readQuery({query:W})||[];i.questions&&e.writeQuery({query:W,data:{questions:Object(f.a)(i.questions.filter((function(e){return e.id!==t.id})))}})}}});case 2:case"end":return e.stop()}}),e)}))),[c,t.id]),s=!a&&t.id>=0;return Object(S.jsxs)(B.a,{children:[Object(S.jsx)(A.a,{align:"left",children:t.content}),Object(S.jsx)(A.a,{align:"right",children:Object(S.jsx)($.a,{disabled:!s,onClick:o,children:s?Object(S.jsx)(N.a,{}):Object(S.jsx)(u.a,{size:"1em"})})})]})}var R,W=Object(y.gql)(E||(E=Object(v.a)(["\n  query questions {\n    questions {\n      id\n      content\n      createdBy\n      createdAtUtc\n    }\n  }\n"])));function z(){var e,t=Object(y.useQuery)(W),n=t.data,i=t.error;return t.loading||null==n?Object(S.jsx)(T,{children:Object(S.jsx)(h.a,{variant:"body1",children:"Loading questions"})}):i?Object(S.jsx)(T,{children:Object(S.jsx)(h.a,{variant:"body1",children:"Error loading questions"})}):(null===(e=n.questions)||void 0===e?void 0:e.length)<=0?Object(S.jsx)(T,{children:Object(S.jsx)(h.a,{variant:"body1",children:"No questions added"})}):Object(S.jsx)(C.a,{component:w.a,children:Object(S.jsxs)(k.a,{children:[Object(S.jsx)(M.a,{children:Object(S.jsxs)(B.a,{children:[Object(S.jsx)(A.a,{align:"left",children:"Question"}),Object(S.jsx)(A.a,{align:"right"})]})}),Object(S.jsx)(Q.a,{children:n.questions.map((function(e){return Object(S.jsx)(P,{question:e},e.id)}))})]})})}var F=Object(y.gql)(R||(R=Object(v.a)(["\n  mutation addQuestion($content: String!) {\n    addQuestion(content: $content) {\n      id\n      content\n      createdBy\n      createdAtUtc\n    }\n  }\n"])));function G(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),n=t[0],i=t[1],c=Object(y.useMutation)(F),a=Object(m.a)(c,2),o=a[0],s=a[1],u=s.error,l=s.loading,b=Object(r.useCallback)(Object(g.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),e.next=3,o({variables:{content:n},optimisticResponse:{__typename:"Mutation",addQuestion:{__typename:"Question",id:-Math.floor(1e4*Math.random()),content:n,createdBy:-1,createdAtUtc:""}},update:function(e,t){var n=t.data,i=e.readQuery({query:W});e.writeQuery({query:W,data:{questions:[n.addQuestion].concat(Object(f.a)(i.questions))}})}});case 3:case"end":return e.stop()}}),e)}))),[o,n,i]);return Object(S.jsxs)(d.a,{display:"flex",flexDirection:"column",children:[Object(S.jsx)(q.a,{variant:"outlined",multiline:!0,rows:3,label:"Type in a new question",value:n,onChange:function(e){return i(e.target.value)}}),Object(S.jsx)(d.a,{marginTop:"10px",display:"flex",justifyContent:"flex-end",children:Object(S.jsx)(j.a,{disabled:0===n.length||l,variant:"contained",color:"primary",onClick:b,children:"Add question"})}),Object(S.jsx)("span",{children:u?u.message:""})]})}var H=n(106);function D(e){var t=function(){var e=Object(i.b)(),t=e.getAccessTokenSilently,n=e.isAuthenticated,c=Object(r.useState)(),a=Object(m.a)(c,2),o=a[0],s=a[1];return Object(r.useEffect)((function(){n&&t().then((function(e){var t=Object(y.createHttpLink)({uri:"https://bogdbo-questions-api.herokuapp.com/graphql"}),n=Object(H.a)((function(t,n){var i=n.headers;return{headers:Object(I.a)(Object(I.a)({},i),{},{Authorization:"Bearer ".concat(e)})}}));s(new y.ApolloClient({cache:new y.InMemoryCache,link:n.concat(t)}))}))}),[n,t]),o}();return t?Object(S.jsx)(y.ApolloProvider,{client:t,children:e.children}):Object(S.jsx)(T,{children:Object(S.jsx)(u.a,{})})}var K=Object(b.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),X=window.location.origin+window.location.pathname;var V=function(){var e=K(),t=Object(i.b)(),n=t.logout,c=t.loginWithRedirect,a=t.isAuthenticated,r=t.isLoading;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(s.a,{position:"static",children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)(h.a,{variant:"h6",className:e.title,children:"Questions"}),a?Object(S.jsx)(j.a,{color:"inherit",onClick:function(){return n({returnTo:X})},children:"Logout"}):Object(S.jsx)(j.a,{variant:"outlined",color:"inherit",onClick:function(){return c()},children:"Login"})]})}),Object(S.jsxs)(l.a,{maxWidth:"md",className:"App",children:[a&&Object(S.jsx)(D,{children:Object(S.jsxs)(d.a,{padding:5,children:[Object(S.jsx)(G,{}),Object(S.jsx)(z,{})]})}),r&&Object(S.jsx)(T,{children:Object(S.jsx)(u.a,{})}),!a&&!r&&Object(S.jsx)(T,{children:Object(S.jsx)(h.a,{variant:"h5",children:"Please login"})})]})]})},Y=n(17),Z=n.n(Y),ee=window.location.origin+window.location.pathname,te=Object(c.a)();Z.a.render(Object(S.jsx)(o.a.StrictMode,{children:Object(S.jsx)(i.a,{domain:"boiculese.auth0.com",clientId:"9umXUJ235FysjsLWAvJKHE43jN7toi4P",audience:"https://bogdbo-questions-api.herokuapp.com",redirectUri:ee,children:Object(S.jsx)(a.a,{theme:te,children:Object(S.jsx)(V,{})})})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.007682ee.chunk.js.map