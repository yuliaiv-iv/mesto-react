(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,a,t){e.exports=t(18)},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(7),r=t.n(o),i=(t(17),t(11)),l=t(1),s=t(8),u=t.n(s);var m=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("img",{className:"header__logo",src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))},p=c.a.createContext();var d=function(e){var a=e.card,t=e.onCardClick,n=e.onCardLike,o=e.onCardDelete,r=c.a.useContext(p),i=a.owner._id===r._id,l=a.likes.some((function(e){return e._id===r._id})),s="button__delete button opacity ".concat(i?"button_visible":""),u="button__like button opacity ".concat(l?"button__like_active":"");return c.a.createElement("li",{className:"card"},c.a.createElement("img",{className:"card__image",src:a.link,alt:a.name,onClick:function(){t(a)}}),c.a.createElement("button",{type:"button","aria-label":"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442",className:s,onClick:function(){o(a)}}),c.a.createElement("div",{className:"card__info"},c.a.createElement("h3",{className:"card__title"},a.name),c.a.createElement("div",{className:"card__like"},c.a.createElement("button",{type:"button","aria-label":"\u0432\u044b\u0440\u0430\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0440\u0435\u0430\u043a\u0446\u0438\u044e",className:u,onClick:function(){n(a)}}),c.a.createElement("div",{className:"card__like-counter"},a.likes.length))))};var _=function(e){var a=e.cards,t=e.onEditAvatar,n=e.onEditProfile,o=e.onAddPlace,r=e.onCardClick,i=e.onCardLike,l=e.onCardDelete,s=c.a.useContext(p);return c.a.createElement("main",{className:"content"},c.a.createElement("section",{className:"profile"},c.a.createElement("div",{className:"profile__avatar"},c.a.createElement("img",{className:"profile__image",src:s.avatar,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),c.a.createElement("div",{className:"profile__cover"},c.a.createElement("button",{onClick:t,type:"button",className:"button profile__button-avatar","aria-label":"\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}))),c.a.createElement("div",{className:"profile__info"},c.a.createElement("h1",{className:"profile__name"},s.name),c.a.createElement("button",{onClick:n,type:"button","aria-label":"\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"button profile__button-edit opacity"}),c.a.createElement("p",{className:"profile__about"},s.about)),c.a.createElement("button",{onClick:o,type:"button","aria-label":"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"button profile__button-add opacity"})),c.a.createElement("section",{className:"card-container"},c.a.createElement("ul",{className:"card-container__list"},a.map((function(e){return c.a.createElement(d,Object.assign({},e,{onCardClick:r,onCardLike:i,onCardDelete:l,key:e._id,card:e}))})))))};var b=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var f=function(e){var a=e.onClose,t=e.isOpen,o=e.name,r=e.classname,i=e.children;function l(e){"Escape"===e.key&&a()}return Object(n.useEffect)((function(){return document.addEventListener("keydown",l),function(){return document.removeEventListener("keydown",l)}}),[t]),c.a.createElement("section",{className:"popup popup_type_".concat(o," ").concat(t?"popup_open":"")},c.a.createElement("div",{className:r},c.a.createElement("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e",className:"button popup__close opacity",onClick:a}),i))};var h=function(e){var a=e.card,t=e.onClose,n=e.isOpen;return c.a.createElement(f,{name:"image",classname:"popup__container_image",onClose:t,isOpen:n},c.a.createElement("img",{className:"popup__view",src:a?a.link:"",alt:a?a.name:""}),c.a.createElement("figcaption",{className:"popup__title popup__title_image"},a?a.name:""))},E=t(9),v=t(10),k=new(function(){function e(a){Object(E.a)(this,e),this._baseUrl=a.baseUrl,this._headers=a.headers}return Object(v.a)(e,[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkStatus)}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkStatus)}},{key:"postNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkStatus)}},{key:"setUserData",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkStatus)}},{key:"setUserAvatarData",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.link})}).then(this._checkStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkStatus)}},{key:"changeLikeStatus",value:function(e,a){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:a?"PUT":"DELETE",headers:this._headers}).then(this._checkStatus)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"4905795f-d4f5-4259-8ab1-1154380da5eb","Content-Type":"application/json"}}),O=t(3),C=t(2);var N=function(e){var a=e.isDisabled,t=e.onClick,n=e.button;return c.a.createElement("button",{type:"submit",className:"button popup__button-submit ".concat(a?"popup__button-submit_disabled":""),disabled:a},t?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":n)};var g=function(e){var a=e.onUpdateUser,t=e.isOpen,n=e.onClose,o=e.onClick,r=c.a.useContext(p),i=c.a.useState({name:!0,about:!0}),s=Object(l.a)(i,2),u=s[0],m=s[1],d=c.a.useState({name:"",about:""}),_=Object(l.a)(d,2),b=_[0],h=_[1],E=c.a.useState({name:"",about:""}),v=Object(l.a)(E,2),k=v[0],g=v[1],j=Object.values(u).every(Boolean);function y(e){var a=e.target,t=a.name,n=a.value;g(Object(C.a)(Object(C.a)({},k),{},Object(O.a)({},t,n))),m(Object(C.a)(Object(C.a)({},u),{},Object(O.a)({},t,e.target.validity.valid))),h(Object(C.a)(Object(C.a)({},b),{},Object(O.a)({},t,e.target.validationMessage)))}return c.a.useEffect((function(){g({name:r.name||"",about:r.about||""})}),[r]),c.a.useEffect((function(){g({name:r.name||"",about:r.about||""}),h({name:"",about:""})}),[r.about,r.name,t]),c.a.createElement(f,{name:"edit",classname:"popup__container",isOpen:t,onClose:n},c.a.createElement("h3",{className:"popup__title"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a({name:k.name,about:k.about})},className:"popup__form",action:"#",method:"POST",noValidate:!0},c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"text",value:k.name,onChange:y,id:"name-input",className:"popup__item",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40"}),c.a.createElement("span",{id:"name-input-error",className:u.name?"":"popup__item-error"},b.name)),c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"text",value:k.about,onChange:y,id:"about-input",className:"popup__item",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200"}),c.a.createElement("span",{id:"name-input-error",className:u.about?"":"popup__item-error"},b.about)),c.a.createElement(N,{isDisabled:!j,button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:o})))};var j=function(e){var a=e.onUpdateAvatar,t=e.isOpen,n=e.onClose,o=e.onClick,r=c.a.useRef(""),i=c.a.useState(!1),s=Object(l.a)(i,2),u=s[0],m=s[1],p=c.a.useState(""),d=Object(l.a)(p,2),_=d[0],b=d[1],h=c.a.useState(!1),E=Object(l.a)(h,2),v=E[0],k=E[1];return c.a.useEffect((function(){r.current.value="",b(""),k()}),[t]),c.a.createElement(f,{name:"avatar",classname:"popup__container",isOpen:t,onClose:n},c.a.createElement("h3",{className:"popup__title"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a({link:r.current.value})},className:"popup__form",action:"#",method:"POST",noValidate:!0},c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{ref:r,type:"url",onChange:function(e){e.target.validity.valid?(m(!1),b(""),k(!0)):(m(!0),b(e.target.validationMessage),k())},id:"link-input",className:"popup__item",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),c.a.createElement("span",{id:"link-input-error",className:u?"popup__item-error":""},_)),c.a.createElement(N,{isDisabled:!v,button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:o})))};var y=function(e){var a=e.isOpen,t=e.onAddPlace,n=e.onClose,o=e.onClick,r=c.a.useState({name:"",link:""}),i=Object(l.a)(r,2),s=i[0],u=i[1],m=c.a.useState({name:!1,link:!1}),p=Object(l.a)(m,2),d=p[0],_=p[1],b=c.a.useState({name:"",link:""}),h=Object(l.a)(b,2),E=h[0],v=h[1],k=Object.values(d).every(Boolean);function g(e){var a=e.target,t=a.name,n=a.value;u(Object(C.a)(Object(C.a)({},s),{},Object(O.a)({},t,n))),_(Object(C.a)(Object(C.a)({},d),{},Object(O.a)({},t,e.target.validity.valid))),v(Object(C.a)(Object(C.a)({},E),{},Object(O.a)({},t,e.target.validationMessage)))}return c.a.useEffect((function(){u({name:"",link:""}),v({name:"",link:""}),_({name:!1,link:!1})}),[a]),c.a.createElement(f,{name:"edit",classname:"popup__container",isOpen:a,onClose:n},c.a.createElement("h3",{className:"popup__title"},"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({name:s.name,link:s.link})},className:"popup__form",action:"#",method:"POST",noValidate:!0},c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"text",value:s.name,id:"title-input",className:"popup__item",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",onChange:g}),c.a.createElement("span",{id:"title-input-error",className:d.name?"":"popup__item-error"},E.name)),c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"url",value:s.link,id:"link-input",className:"popup__item",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:g}),c.a.createElement("span",{id:"title-input-error",className:d.link?"":"popup__item-error"},E.link)),c.a.createElement(N,{isDisabled:!k,button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onClick:o})))};var S=function(e){var a=e.card,t=e.onDelete,n=e.isOpen,o=e.onClose;return c.a.createElement(f,{name:"delete",classname:"popup__container",isOpen:n,onClose:o},c.a.createElement("h3",{className:"popup__title"},"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(a)},className:"popup__form",action:"#",method:"POST",noValidate:!0},c.a.createElement(N,{button:"\u0414\u0430"})))};var U=function(){var e=c.a.useState(!1),a=Object(l.a)(e,2),t=a[0],n=a[1],o=c.a.useState(!1),r=Object(l.a)(o,2),s=r[0],u=r[1],d=c.a.useState(!1),f=Object(l.a)(d,2),E=f[0],v=f[1],O=c.a.useState(!1),C=Object(l.a)(O,2),N=C[0],U=C[1],D=c.a.useState(!1),P=Object(l.a)(D,2),L=P[0],x=P[1],A=c.a.useState(void 0),T=Object(l.a)(A,2),w=T[0],q=T[1],J=c.a.useState(!1),M=Object(l.a)(J,2),V=M[0],B=M[1],I=c.a.useState({}),H=Object(l.a)(I,2),R=H[0],z=H[1],F=c.a.useState([]),G=Object(l.a)(F,2),K=G[0],Q=G[1];function W(){n(!1),u(!1),v(!1),U(!1),x(!1),q()}return c.a.useEffect((function(){Promise.all([k.getUserData(),k.getInitialCards()]).then((function(e){var a=Object(l.a)(e,2),t=a[0],n=a[1];z(t),Q(n)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"page"},c.a.createElement(p.Provider,{value:R},c.a.createElement(m,null),c.a.createElement("div",{className:"container"},c.a.createElement(_,{cards:K,onEditProfile:function(){n(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){v(!0)},onCardClick:function(e){q(e),U(!0)},onCardLike:function(e){var a=e.likes.some((function(e){return e._id===R._id}));k.changeLikeStatus(e._id,!a).then((function(a){var t=K.map((function(t){return t._id===e._id?a:t}));Q(t)}))},onCardDelete:function(e){q(e),x(!0)}}),c.a.createElement(b,null),c.a.createElement(g,{isOpen:t,onClick:V,onClose:W,onUpdateUser:function(e){B(!0),k.setUserData(e).then((function(e){z(e),W()})).catch((function(e){console.log(e)})).finally((function(){B(!1)}))}}),c.a.createElement(j,{isOpen:E,onClick:V,onClose:W,onUpdateAvatar:function(e){B(!0),k.setUserAvatarData(e).then((function(e){z(e),W()})).catch((function(e){console.log(e)})).finally((function(){B(!1)}))}}),c.a.createElement(y,{isOpen:s,onClick:V,onClose:W,onAddPlace:function(e){B(!0),k.postNewCard(e).then((function(e){Q([e].concat(Object(i.a)(K))),W()})).catch((function(e){console.log(e)})).finally((function(){B(!1)}))}}),c.a.createElement(h,{isOpen:N,card:w,onClose:W}),c.a.createElement(S,{isOpen:L,onClose:W,onDelete:function(e){k.deleteCard(e._id).then((function(){var a=K.filter((function(a){return a._id!==e._id}));Q(a),W()}))},card:w})))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root"))},8:function(e,a,t){e.exports=t.p+"static/media/logo.855a8c98.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.66ef7ed6.chunk.js.map