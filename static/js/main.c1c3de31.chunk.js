(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{161:function(e,t,a){},162:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c);a(161),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(162);var i=a(275),u=a(276),o=a(277),l=a(267),d=a(279),j=a(270),b=a(280),O=a(281),f=a(278),p=a(27),h=a(15),m=a(287),v=a(284),x={errorText:null,requestStatus:"idle",isInitialized:!1},g=function(e){return{type:"SET-REQUEST-STATUS",status:e}},T=function(e){return{type:"SET-APP-ERROR",errorText:e}},k=a(1),S=r.a.forwardRef((function(e,t){return Object(k.jsx)(v.a,Object(h.a)({elevation:6,ref:t,variant:"filled"},e))}));function I(){var e=Object(p.c)((function(e){return e.app.errorText})),t=Object(p.b)(),a=function(e,a){"clickaway"!==a&&t(T(null))};return Object(k.jsx)(m.a,{open:null!==e,autoHideDuration:6e3,onClose:a,children:Object(k.jsxs)(S,{onClose:a,severity:"error",sx:{width:"100%"},children:[e," \ud83d\ude20"]})})}var y,w,E=a(26),D=a(18),C=a(283),L=a(268),N=r.a.memo((function(e){var t=Object(n.useState)(""),a=Object(D.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),i=Object(D.a)(s,2),u=i[0],o=i[1],d=Object(n.useCallback)((function(){""!==r.trim()?e.addNewItem(r):o("This field is required!"),c("")}),[e,r]),j=Object(n.useCallback)((function(e){c(e.currentTarget.value),u&&o("")}),[u]),b=Object(n.useCallback)((function(e){"Enter"===e.key&&d()}),[d]);return Object(k.jsxs)("div",{className:"listInputAria",children:[Object(k.jsx)(C.a,{variant:"outlined",size:"small",label:"New item name",title:"Here you can add a new item to the list",helperText:u,error:!!u,onKeyPress:b,onChange:j,value:r}),Object(k.jsx)(l.a,{color:"primary",onClick:d,children:Object(k.jsx)(L.a,{})})]})})),A=a(133),P=a.n(A).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"api-key":"ac2e9e4b-fbeb-410b-8ade-89b124fefc6f"}});!function(e){e[e.New=0]="New",e[e.InProgress=1]="InProgress",e[e.Completed=2]="Completed",e[e.Draft=3]="Draft"}(y||(y={})),function(e){e[e.Low=0]="Low",e[e.Middle=1]="Middle",e[e.Hi=2]="Hi",e[e.Urgently=3]="Urgently",e[e.Later=4]="Later"}(w||(w={}));var R=function(){return P.get("auth/me")},V=function(e){return P.post("auth/login",e)},K=function(){return P.delete("auth/login")},U=function(){return P.get("todo-lists")},G=function(e){return P.post("todo-lists",{title:e})},H=function(e){return P.delete("todo-lists/".concat(e))},M=function(e,t){return P.put("todo-lists/".concat(e),{title:t})},q=function(e){return P.get("todo-lists/".concat(e,"/tasks"))},F=function(e,t){return P.post("todo-lists/".concat(e,"/tasks"),{title:t})},B=function(e,t,a){return P.put("todo-lists/".concat(e,"/tasks/").concat(t),a)},W=function(e,t){return P.delete("todo-lists/".concat(e,"/tasks/").concat(t))},z=r.a.memo((function(e){var t=Object(n.useState)(!1),a=Object(D.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),i=Object(D.a)(s,2),u=i[0],o=i[1],l=Object(n.useCallback)((function(){c(!0),o(e.title)}),[c,o,e]),d=Object(n.useCallback)((function(t){e.changeItemValue(t.currentTarget.value),c(!1)}),[e,c]),j=Object(n.useCallback)((function(e){o(e.currentTarget.value)}),[o]),b=Object(n.useCallback)((function(t){"Enter"===t.key&&(e.changeItemValue(u),c(!1))}),[e,c,u]);return r?Object(k.jsx)(C.a,{onKeyPress:b,onChange:j,onBlur:d,value:u,autoFocus:!0,type:"text"}):Object(k.jsxs)("span",{onDoubleClick:l,className:e.status===y.Completed?"doneTask":"inProcess",children:[e.title," "]})})),Z=a(200),Y=a(269),J=a(288),Q=function(e){var t=Object(n.useCallback)((function(t){e.changeItemValue(e.tdlID,e.task.id,t)}),[e]),a=Object(n.useCallback)((function(){e.removeTask(e.tdlID,e.task.id)}),[e]),r=Object(n.useCallback)((function(t){console.log(e.task.status,t.currentTarget.checked),e.changeStatus(e.tdlID,e.task.id,t.currentTarget.checked?y.Completed:y.New)}),[e]);return Object(k.jsxs)("li",{className:"listItem ".concat("loading"===e.task.entityStatus&&"entityRequest"),children:[Object(k.jsx)(J.a,{className:"itemCheckBox",color:"primary",onChange:r,checked:e.task.status===y.Completed}),Object(k.jsx)(z,{changeItemValue:t,status:e.task.status,title:e.task.title}),Object(k.jsx)(l.a,{className:"iconTrash",onClick:a,children:Object(k.jsx)(Y.a,{})})]},e.task.id)},$=a(23),_=a.n($),X=a(37),ee=a(20),te=a(7),ae=function(e,t){var a;t(T(null!==(a=e.messages[0])&&void 0!==a?a:"Some Error occurred!")),t(g("failed"))},ne=function(e,t){var a;t(T(null!==(a=e.message)&&void 0!==a?a:"Some Error occurred!")),t(g("failed"))},re={},ce=function(e,t,a){return{type:"SET-TASK-ENTITY-STATUS",status:a,tdlID:e,id:t}},se=function(e,t){return{type:"SET-TASKS",tdlID:e,tasks:t}},ie=function(e,t){return{type:"REMOVE-TASK",tdlID:e,id:t}},ue=function(e,t){return{type:"ADD-NEW-TASK",tdlID:e,taskData:t}},oe=function(e,t,a){return{type:"CHANGE-TASK",tdlID:e,id:t,newData:a}},le=function(e,t,a){return function(){var n=Object(X.a)(_.a.mark((function n(r,c){var s,i,u;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(ce(e,t,"loading")),r(g("loading")),s=c().tasks[e].find((function(e){return e.id===t}))){n.next=6;break}return console.warn("There is no such taskID"),n.abrupt("return");case 6:return i=Object(h.a)({title:s.title,description:s.description,priority:s.priority,status:s.status,deadline:s.deadline,startDate:s.startDate},a),n.prev=7,n.next=10,B(e,t,i);case 10:0!==(u=n.sent).data.resultCode?(ae(u.data,r),r(ce(e,t,"failed"))):(r(oe(e,t,i)),r(g("succeeded")),r(ce(e,t,"succeeded"))),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(7),ne(n.t0,r),r(ce(e,t,"failed"));case 18:case"end":return n.stop()}}),n,null,[[7,14]])})));return function(e,t){return n.apply(this,arguments)}}()},de=r.a.memo((function(e){var t=Object(p.b)();Object(n.useEffect)((function(){var a;t((a=e.id,function(){var e=Object(X.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g("loading")),e.prev=1,e.next=4,q(a);case 4:(n=e.sent).data.error?(t(g("failed")),t(T("Some error occurred"))):(t(se(a,n.data.items)),t(g("succeeded"))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),ne(e.t0,t);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()))}),[t,e.id]);var a=e.tasks;"active"===e.filterStatus&&(a=a.filter((function(e){return e.status===y.New}))),"completed"===e.filterStatus&&(a=a.filter((function(e){return e.status===y.Completed})));var r=a.map((function(t){return Object(k.jsx)(Q,{removeTask:e.removeTask,changeItemValue:e.changeItemValue,changeStatus:e.changeStatus,tdlID:e.id,task:t},t.id)})),c=Object(n.useCallback)((function(){return e.removeToDoList(e.id)}),[e]),s=Object(n.useCallback)((function(){return e.filterTasks(e.id,"all")}),[e]),i=Object(n.useCallback)((function(){return e.filterTasks(e.id,"active")}),[e]),u=Object(n.useCallback)((function(){return e.filterTasks(e.id,"completed")}),[e]),o=Object(n.useCallback)((function(t){e.addNewTask(e.id,t)}),[e]),d=Object(n.useCallback)((function(t){e.onChangeListName(e.id,t)}),[e]);return Object(k.jsxs)(Z.a,{className:"toDoListsWrapper ".concat("loading"===e.entityStatus&&"entityRequest"),children:[Object(k.jsxs)("h3",{children:[Object(k.jsx)(z,{status:y.New,title:e.heading,changeItemValue:d}),Object(k.jsx)(l.a,{onClick:c,children:Object(k.jsx)(Y.a,{})})]}),Object(k.jsx)(N,{addNewItem:o}),Object(k.jsx)("ul",{className:"listWrapper",children:r}),Object(k.jsxs)("div",{children:[Object(k.jsx)(j.a,{style:{margin:"0 5px"},color:"secondary",disabled:"all"===e.filterStatus,variant:"all"===e.filterStatus?"outlined":"contained",onClick:s,children:"All"}),Object(k.jsx)(j.a,{style:{margin:"0 5px"},color:"primary",disabled:"active"===e.filterStatus,variant:"active"===e.filterStatus?"outlined":"contained",onClick:i,children:"Active"}),Object(k.jsx)(j.a,{style:{margin:"0 5px"},color:"primary",disabled:"completed"===e.filterStatus,variant:"completed"===e.filterStatus?"outlined":"contained",onClick:u,children:"Completed"})]})]})})),je=a(271),be=[],Oe=function(e,t){return{type:"SET-ENTITY-STATUS",status:t,tdlID:e}},fe=function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}},pe=r.a.memo((function(){var e=Object(p.c)((function(e){return e.toDoLists})),t=Object(p.c)((function(e){return e.tasks})),a=Object(p.c)((function(e){return e.app.requestStatus})),r=Object(p.c)((function(e){return e.login.isLoggedIn})),c=Object(p.b)();Object(n.useEffect)((function(){r&&c(function(){var e=Object(X.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g("loading")),e.prev=1,e.next=4,U();case 4:a=e.sent,t({type:"SET-TO-DO-LISTS",tdls:a.data}),t(g("succeeded")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),ne(e.t0,t);case 12:return e.prev=12,t(g("succeeded")),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}())}),[c]);var s=Object(n.useCallback)((function(e){var t;c((t=e,function(){var e=Object(X.a)(_.a.mark((function e(a){var n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(g("loading")),a(Oe(t,"loading")),e.prev=2,e.next=5,H(t);case 5:0!==(n=e.sent).data.resultCode?ae(n.data,a):(a({type:"REMOVE-TODOLIST",tdlID:t}),a(g("succeeded")),a(Oe(t,"succeeded"))),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),a(T(null!==(r=e.t0.message)&&void 0!==r?r:"Some Error occurred!")),a(g("failed")),a(Oe(t,"failed"));case 14:return e.prev=14,a(g("succeeded")),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,9,14,17]])})));return function(t){return e.apply(this,arguments)}}()))}),[c,a]),i=Object(n.useCallback)((function(e,t){var a,n;c((a=e,n=t,function(){var e=Object(X.a)(_.a.mark((function e(t){var r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g("loading")),t(Oe(a,"loading")),e.prev=2,e.next=5,M(a,n);case 5:0!==(r=e.sent).data.resultCode?ae(r.data,t):(t(fe(a,n)),t(Oe(a,"succeeded")),t(g("succeeded"))),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),t(T(null!==(c=e.t0.message)&&void 0!==c?c:"Some Error occurred!")),t(g("failed")),t(Oe(a,"failed"));case 14:return e.prev=14,t(g("succeeded")),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,9,14,17]])})));return function(t){return e.apply(this,arguments)}}()))}),[c]),u=Object(n.useCallback)((function(e,t,a){c(le(e,t,{title:a}))}),[c]),o=Object(n.useCallback)((function(e,t){c({type:"CHANGE-TODOLIST-FILTER",id:e,status:t})}),[c]),l=Object(n.useCallback)((function(e,t){c(function(e,t){return function(){var a=Object(X.a)(_.a.mark((function a(n){var r;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(ce(e,t,"loading")),n(g("loading")),a.prev=2,a.next=5,W(e,t);case 5:0!==(r=a.sent).data.resultCode?(ae(r.data,n),n(ce(e,t,"failed"))):(n(ie(e,t)),n(g("succeeded")),n(ce(e,t,"succeeded"))),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(2),ne(a.t0,n),n(ce(e,t,"failed"));case 13:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}(e,t))}),[c]),d=Object(n.useCallback)((function(e,t){c(function(e,t){return function(){var a=Object(X.a)(_.a.mark((function a(n){var r;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(g("loading")),a.prev=1,a.next=4,F(e,t);case 4:0!==(r=a.sent).data.resultCode?ae(r.data,n):(n(ue(e,r.data.data.item)),n(g("succeeded"))),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),ne(a.t0,n);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}(e,t))}),[c]),j=Object(n.useCallback)((function(e,t,a){c(le(e,t,{status:a}))}),[c]),b=Object(n.useCallback)((function(e){var t;c((t=e,function(){var e=Object(X.a)(_.a.mark((function e(a){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(g("loading")),e.prev=1,e.next=4,G(t);case 4:0!==(n=e.sent).data.resultCode?ae(n.data,a):(a({type:"ADD-TODOLIST",payload:n.data.data.item}),a(g("succeeded"))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),ne(e.t0,a);case 11:return e.prev=11,a(g("succeeded")),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}()))}),[c]);return r?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"addNewList",children:Object(k.jsxs)(Z.a,{style:{padding:"15px"},children:[Object(k.jsx)("h2",{style:{margin:0},children:"Add New List"}),Object(k.jsx)(N,{addNewItem:b})]})}),Object(k.jsx)(je.a,{container:!0,spacing:2,children:e.map((function(e){return Object(k.jsx)(je.a,{item:!0,children:Object(k.jsx)(de,{id:e.id,entityStatus:e.entityStatus,heading:e.title,tasks:t[e.id],removeTask:l,filterTasks:o,addNewTask:d,changeStatus:j,filterStatus:e.status,removeToDoList:s,changeItemValue:u,onChangeListName:i})},e.id)}))})]}):Object(k.jsx)(E.a,{to:"/login"})})),he=a(293),me=a(286),ve=a(289),xe=a(290),ge=a(294),Te=a(273),ke=a(282),Se=a(295),Ie=a(138),ye={isLoggedIn:!1},we=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},Ee=function(){var e=Object(p.c)((function(e){return e.login.isLoggedIn})),t=Object(p.b)(),a=Object(Ie.a)({initialValues:{email:"",password:"",rememberMe:!0},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email is required",e.password?e.password.length<4&&(t.password="The password should contain minimum 3 characters"):t.password="The password field is required",t},onSubmit:function(e){var n;t((n=e,function(){var e=Object(X.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g("loading")),e.prev=1,e.next=4,V(n);case 4:0===(a=e.sent).data.resultCode?t(we(!0)):ae(a.data,t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),ne({message:e.t0.message},t);case 11:return e.prev=11,t(g("succeeded")),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}())),a.resetForm()}});return e?Object(k.jsx)(E.a,{to:"/"}):Object(k.jsx)(he.a,{container:!0,justifyContent:"center",children:Object(k.jsx)(he.a,{item:!0,justifyContent:"center",children:Object(k.jsx)("form",{onSubmit:a.handleSubmit,children:Object(k.jsxs)(ve.a,{children:[Object(k.jsxs)(Te.a,{children:[Object(k.jsxs)("p",{children:["To log in get registered",Object(k.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(k.jsx)("p",{children:"or use common test account credentials:"}),Object(k.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(k.jsx)("p",{children:"Password: free"})]}),Object(k.jsxs)(ge.a,{children:[Object(k.jsx)(ke.a,Object(h.a)(Object(h.a)({label:"Email",margin:"normal"},a.getFieldProps("email")),{},{onBlur:a.handleBlur})),a.errors.email&&a.touched.email&&Object(k.jsx)("div",{style:{color:"red",fontSize:"10px"},children:a.errors.email}),Object(k.jsx)(ke.a,Object(h.a)(Object(h.a)({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password")),{},{onBlur:a.handleBlur})),a.errors.password&&a.touched.password&&Object(k.jsx)("div",{style:{color:"red",fontSize:"10px"},children:a.errors.password}),Object(k.jsx)(xe.a,Object(h.a)(Object(h.a)({label:"Remember me",control:Object(k.jsx)(me.a,{})},a.getFieldProps("rememberMe")),{},{checked:a.values.rememberMe})),Object(k.jsx)(Se.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},De=r.a.memo((function(){var e=Object(p.c)((function(e){return e.app.requestStatus})),t=Object(p.c)((function(e){return e.app.isInitialized})),a=Object(p.c)((function(e){return e.login.isLoggedIn})),r=Object(p.b)();return Object(n.useEffect)((function(){r(function(){var e=Object(X.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g("loading")),e.prev=1,e.next=4,R();case 4:0===(a=e.sent).data.resultCode?t(we(!0)):ae(a.data,t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),ne({message:e.t0.message},t);case 11:return e.prev=11,t(g("succeeded")),t({type:"SET-APP-INITIALIZED",status:!0}),e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[1,8,11,15]])})));return function(t){return e.apply(this,arguments)}}())}),[r]),t?Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"headerWrapper",children:[Object(k.jsx)(u.a,{position:"static",children:Object(k.jsxs)(o.a,{variant:"dense",children:[Object(k.jsx)(l.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(k.jsx)(f.a,{})}),Object(k.jsx)(d.a,{variant:"h6",color:"inherit",children:"Todo"}),a&&Object(k.jsx)(j.a,{onClick:function(){return r(function(){var e=Object(X.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g("loading")),e.prev=1,e.next=4,K();case 4:0===(a=e.sent).data.resultCode?(t(we(!1)),t(g("succeeded"))):ae(a.data,t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),ne(e.t0,t);case 11:return e.prev=11,t(g("succeeded")),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}())},style:{color:"white",fontWeight:"bold",marginLeft:"auto"},children:"Log out"})]})}),Object(k.jsx)("div",{className:"headerPreloader",children:"loading"===e&&Object(k.jsx)(b.a,{})})]}),Object(k.jsx)(O.a,{children:Object(k.jsxs)(E.d,{children:[Object(k.jsx)(E.b,{path:"/",exact:!0,render:function(){return Object(k.jsx)(pe,{})}}),Object(k.jsx)(E.b,{path:"/login",render:function(){return Object(k.jsx)(Ee,{})}}),Object(k.jsx)(E.b,{path:"/404",render:function(){return Object(k.jsxs)("h1",{children:[Object(k.jsx)("p",{children:"404:"})," Page Not Found"]})}}),Object(k.jsx)(E.a,{from:"*",to:"/404"})]})}),Object(k.jsx)(I,{})]}):Object(k.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(k.jsx)(i.a,{})})})),Ce=a(95),Le=a(137),Ne=Object(Ce.b)({toDoLists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-ENTITY-STATUS":return e.map((function(e){return e.id===t.tdlID?Object(h.a)(Object(h.a)({},e),{},{entityStatus:t.status}):e}));case"SET-TO-DO-LISTS":return t.tdls.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{status:"all",entityStatus:"idle"})}));case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!==t.tdlID}));case"ADD-TODOLIST":return[Object(h.a)(Object(h.a)({},t.payload),{},{status:"all",entityStatus:"idle"})].concat(Object(ee.a)(e));case"CHANGE-TODOLIST-TITLE":return e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{title:t.title}):e}));case"CHANGE-TODOLIST-FILTER":return e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{status:t.status}):e}));default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-TO-DO-LISTS":var a=Object(h.a)({},e);return t.tdls.forEach((function(e){return a[e.id]=[]})),a;case"SET-TASKS":return Object(h.a)(Object(h.a)({},e),{},Object(te.a)({},t.tdlID,t.tasks.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{entityStatus:"idle"})}))));case"REMOVE-TASK":return Object(h.a)(Object(h.a)({},e),{},Object(te.a)({},t.tdlID,e[t.tdlID].filter((function(e){return e.id!==t.id}))));case"ADD-NEW-TASK":return Object(h.a)(Object(h.a)({},e),{},Object(te.a)({},t.tdlID,[Object(h.a)(Object(h.a)({},t.taskData),{},{entityStatus:"idle"})].concat(Object(ee.a)(e[t.tdlID]))));case"CHANGE-TASK":return Object(h.a)(Object(h.a)({},e),{},Object(te.a)({},t.tdlID,e[t.tdlID].map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),t.newData):e}))));case"ADD-TODOLIST":return Object(h.a)(Object(h.a)({},e),{},Object(te.a)({},t.payload.id,[]));case"REMOVE-TODOLIST":var n=Object(h.a)({},e);return delete n[t.tdlID],n;case"SET-TASK-ENTITY-STATUS":return Object(h.a)(Object(h.a)({},e),{},Object(te.a)({},t.tdlID,e[t.tdlID].map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{entityStatus:t.status}):e}))));default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-REQUEST-STATUS":return Object(h.a)(Object(h.a)({},e),{},{requestStatus:t.status});case"SET-APP-ERROR":return Object(h.a)(Object(h.a)({},e),{},{errorText:t.errorText});case"SET-APP-INITIALIZED":return Object(h.a)(Object(h.a)({},e),{},{isInitialized:t.status});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(h.a)(Object(h.a)({},e),{},{isLoggedIn:t.value});default:return e}}}),Ae=Object(Ce.c)(Ne,Object(Ce.a)(Le.a));window.store=Ae;var Pe=a(76);s.a.render(Object(k.jsx)(p.a,{store:Ae,children:Object(k.jsx)(Pe.a,{children:Object(k.jsx)(De,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[195,1,2]]]);
//# sourceMappingURL=main.c1c3de31.chunk.js.map