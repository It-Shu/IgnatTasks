(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,function(e,a,t){e.exports={topBlock:"Message_topBlock__8VwqW",Blocks:"Message_Blocks__3a5bQ",Blocks2:"Message_Blocks2__2GqKK",allBlock:"Message_allBlock__2ePjr",avatarBlock:"Message_avatarBlock__1s2Nw",nameBlock:"Message_nameBlock__1wmML",messageBlock:"Message_messageBlock__1LNk9",timeBlock:"Message_timeBlock__1ln6T",allBlock2:"Message_allBlock2__u_yVk",avatarBlock2:"Message_avatarBlock2__2LUxW",nameBlock2:"Message_nameBlock2__3oJLj",messageBlock2:"Message_messageBlock2__Vy094",timeBlock2:"Message_timeBlock2__3E-A2"}},,,,function(e,a,t){e.exports={buttons:"Affairs_buttons__5RLTm",x_button:"Affairs_x_button__2YLhD",name:"Affairs_name__3c8-U"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__TbgeZ",error:"Greeting_error__yT9eP",error_title:"Greeting_error_title__14sAE",button:"Greeting_button__POPI2",button_error:"Greeting_button_error__3qtzU",span:"Greeting_span__25x55"}},,,,function(e,a,t){e.exports={nav:"Header_nav__2i8Oe",span:"Header_span__3KnKS"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1LoM8",errorInput:"SuperInputText_errorInput__lqYly",error:"SuperInputText_error__16iHM"}},,function(e,a,t){e.exports={default:"SuperButton_default__1Hy1P",red:"SuperButton_red__2yE1Z"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1zXi1",spanClassName:"SuperCheckbox_spanClassName__2vytj"}},function(e,a,t){e.exports={dark:"HW12_dark__3bwAq","dark-text":"HW12_dark-text__2e_NB",red:"HW12_red__PeXID","red-text":"HW12_red-text__2gBWX",some:"HW12_some__2SqEp","some-text":"HW12_some-text__2UDcm"}},,,,,,,function(e,a,t){e.exports={App:"App_App__3QDfX"}},function(e,a,t){e.exports={blue:"HW4_blue__1xame",column:"HW4_column__2UL_D"}},,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(34),t(25)),s=t.n(o),u=t(9),m=t(12),i=t.n(m);var E=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},_=t(3),d=t.n(_);function p(e){return r.a.createElement("div",{className:d.a.Blocks},r.a.createElement("div",{className:d.a.avatarBlock},r.a.createElement("img",{src:e.avatar,alt:""})),r.a.createElement("div",{className:d.a.allBlock},r.a.createElement("div",{className:d.a.nameBlock},e.name),r.a.createElement("div",{className:d.a.messageBlock},e.message),r.a.createElement("div",{className:d.a.timeBlock},e.time)))}function f(e){return r.a.createElement("div",{className:d.a.Blocks2},r.a.createElement("div",{className:d.a.avatarBlock2},r.a.createElement("img",{src:e.avatar,alt:""})),r.a.createElement("div",{className:d.a.allBlock2},r.a.createElement("div",{className:d.a.nameBlock2},e.name),r.a.createElement("div",{className:d.a.messageBlock2},e.message),r.a.createElement("div",{className:d.a.timeBlock2},e.time)))}var v=[{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Artem",message:"npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",time:"22:00"}],h=[{avatar:"https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png",name:"Sergei",message:"\u0430 \u0447\u0442\u043e \u044d\u0442\u043e?!",time:"22:07"}];var k=function(){return r.a.createElement("div",{className:d.a.topBlock},v.map((function(e,a){return r.a.createElement(p,Object.assign({key:a},e))})),h.map((function(e,a){return r.a.createElement(f,Object.assign({key:a},e))})))},g=t(2),b=t(7),C=t.n(b);var N=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{className:C.a.x_button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},r.a.createElement("a",{className:C.a.x_button},"X")),e.affair.priority)};var O=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:C.a.buttons,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:C.a.buttons,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:C.a.buttons,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:C.a.buttons,onClick:function(){e.setFilter("low")}},"Low"))},j=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"html & css",priority:"middle"},{_id:6,name:"google",priority:"middle"}];var B=function(){var e=Object(n.useState)(j),a=Object(g.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(g.a)(c,2),s=o[0],u=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return r.a.createElement("div",{className:C.a.name},r.a.createElement("hr",null),r.a.createElement(O,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(28),y=t(8),w=t.n(y),S=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=w.a.error;w.a.displayNone;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:l?o:""}),r.a.createElement("span",{className:w.a.error_title},l?"Give Me Your Name":""),r.a.createElement("button",{onClick:n,className:l?w.a.button_error:w.a.button},"add"),r.a.createElement("div",null,r.a.createElement("span",{className:w.a.span},"Total added users ",c)))},M=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(g.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(!1),m=Object(g.a)(u,2),i=m[0],E=m[1],_=a.length;return r.a.createElement(S,{name:o,setNameCallback:function(e){s(e.currentTarget.value)},addUser:function(){""===o?E(!0):(E(!1),setTimeout((function(){return alert("Hello ".concat(o," !"))}),100),t(o))},error:i,totalUsers:_})},A=t(42);var T=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:w.a.someClass}," ",r.a.createElement("h3",null,"homeworks 3"),r.a.createElement(M,{users:t,addUserCallback:function(e){var a={_id:Object(A.a)(),name:e};e&&l([].concat(Object(x.a)(t),[a]))}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},W=t(6),H=t(14),I=t.n(H),P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,u=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(I.a.error," ").concat(s||""),i="".concat(I.a.errorInput," ").concat(o?I.a.superInput:"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:i},u)),c&&r.a.createElement("span",{className:m},c))},U=t(26),L=t.n(U),G=t(16),F=t.n(G),q=function(e){var a=e.red,t=e.className,n=Object(W.a)(e,["red","className"]),l="".concat(a?F.a.red:F.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},J=t(17),K=t.n(J),D=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){var n=e.currentTarget.checked;a&&a(e),t&&t(n)},className:o},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var X=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(g.a)(s,2),m=u[0],i=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:L.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(q,{red:!0,onClick:o},"delete "),r.a.createElement(D,{checked:m,onChangeChecked:i},"some text "),r.a.createElement(D,{checked:m,onChange:function(e){return i(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var z=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(B,null),r.a.createElement(T,null),r.a.createElement(X,null))},Y=t(1),V=function(e){e.options,e.onChange,e.onChangeOption;var a=Object(W.a)(e,["options","onChange","onChangeOption"]),t=[];return r.a.createElement("select",Object.assign({onChange:function(e){}},a),t)},Z=function(e){e.type,e.name;var a=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(W.a)(e,["type","name","options","value","onChange","onChangeOption"]),a?a.map((function(e,a){})):[]);return r.a.createElement(r.a.Fragment,null,t)},Q=["x","y","z"];var R=function(){var e=Object(n.useState)(Q[1]),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(V,{options:Q,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(Z,{name:"radio",options:Q,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},$=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ee=function(){var e=Object(n.useState)($),a=Object(g.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},"some name, age")}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(q,{onClick:function(){return l(function(e,a){switch(a.type){case"sort":case"check":default:return e}}($,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,"sort down"),"check 18",r.a.createElement("hr",null),r.a.createElement("hr",null))};var ae=function(){var e=Object(n.useState)(0),a=Object(g.a)(e,2),t=(a[0],a[1]),l=Object(n.useState)(),c=Object(g.a)(l,2),o=(c[0],c[1],Object(n.useState)(!1)),s=Object(g.a)(o,2),u=s[0],m=(s[1],function(){});return r.a.createElement("div",null,r.a.createElement("div",{onMouseEnter:function(){},onMouseLeave:function(){}},"Time"),u&&r.a.createElement("div",null,"Date"),r.a.createElement(q,{onClick:function(){var e=window.setInterval((function(){}),1e3);t(e)}},"start"),r.a.createElement(q,{onClick:m},"stop"))};var te=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ae,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ne=function(){return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(ee,null),r.a.createElement(te,null))},re=t(18),le=t.n(re);var ce=function(){return r.a.createElement("div",{className:le.a.some},r.a.createElement("hr",null),r.a.createElement("span",{className:le.a["some-text"]},"homeworks 12"),r.a.createElement("hr",null))};var oe=function(){return r.a.createElement("div",null,r.a.createElement(ce,null))},se="/pre-junior",ue="/junior",me="/junior+";var ie=function(){return r.a.createElement("div",null,r.a.createElement(Y.d,null,r.a.createElement(Y.b,{path:"/",exact:!0,render:function(){return r.a.createElement(Y.a,{to:se})}}),r.a.createElement(Y.b,{path:se,render:function(){return r.a.createElement(z,null)}}),r.a.createElement(Y.b,{path:"/junior",exact:!0,render:function(){return r.a.createElement(Y.a,{to:ue})}}),r.a.createElement(Y.b,{path:ue,render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(Y.b,{path:"/junior+",exact:!0,render:function(){return r.a.createElement(Y.a,{to:me})}}),r.a.createElement(Y.b,{path:me,render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(Y.b,{render:function(){return r.a.createElement(E,null)}})))};var Ee=function(){return r.a.createElement("nav",{className:i.a.nav},r.a.createElement("span",{className:i.a.span},r.a.createElement(u.b,{to:se},"PreJunior")),r.a.createElement("span",{className:i.a.span},r.a.createElement(u.b,{to:ue},"Junior")),r.a.createElement("span",{className:i.a.span},r.a.createElement(u.b,{to:me},"Junior+")))};var _e=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(Ee,null),r.a.createElement(ie,null)))};var de=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(_e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.80b97805.chunk.js.map