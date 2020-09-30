(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,a,t){e.exports=t(18)},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(7),i=t.n(o),r=(t(17),t(11)),l=t(1),s=t(8),u=t.n(s);var m=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("img",{className:"header__logo",src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))},p=c.a.createContext();var d=function(e){var a=c.a.useContext(p),t=e.card.owner._id===a._id,n=e.card.likes.some((function(e){return e._id===a._id})),o="button__delete button opacity ".concat(t?"button_visible":""),i="button__like button opacity ".concat(n?"button__like_active":"");return c.a.createElement("li",{className:"card"},c.a.createElement("img",{className:"card__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),c.a.createElement("button",{type:"button","aria-label":"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442",className:o,onClick:function(){e.onCardDelete(e.card)}}),c.a.createElement("div",{className:"card__info"},c.a.createElement("h3",{className:"card__title"},e.card.name),c.a.createElement("div",{className:"card__like"},c.a.createElement("button",{type:"button","aria-label":"\u0432\u044b\u0440\u0430\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0440\u0435\u0430\u043a\u0446\u0438\u044e",className:i,onClick:function(){e.onCardLike(e.card)}}),c.a.createElement("div",{className:"card__like-counter"},e.card.likes.length))))};var b=function(e){var a=c.a.useContext(p);return c.a.createElement("main",{className:"content"},c.a.createElement("section",{className:"profile"},c.a.createElement("div",{className:"profile__avatar"},c.a.createElement("img",{className:"profile__image",src:a.avatar,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),c.a.createElement("div",{className:"profile__cover"},c.a.createElement("button",{onClick:e.onEditAvatar,type:"button",className:"button profile__button-avatar","aria-label":"\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}))),c.a.createElement("div",{className:"profile__info"},c.a.createElement("h1",{className:"profile__name"},a.name),c.a.createElement("button",{onClick:e.onEditProfile,type:"button","aria-label":"\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"button profile__button-edit opacity"}),c.a.createElement("p",{className:"profile__about"},a.about)),c.a.createElement("button",{onClick:e.onAddPlace,type:"button","aria-label":"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"button profile__button-add opacity"})),c.a.createElement("section",{className:"card-container"},c.a.createElement("ul",{className:"card-container__list"},e.cards.map((function(a){return c.a.createElement(d,Object.assign({},a,{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,key:a._id,card:a}))})))))};var _=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var f=function(e){return c.a.createElement("section",{className:"popup popup_type_image ".concat(e.isOpen?"popup_open":"")},c.a.createElement("figure",{className:"popup__container popup__container_image"},c.a.createElement("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e",className:"button popup__close opacity",onClick:e.onClose}),c.a.createElement("img",{className:"popup__view",src:e.card?e.card.link:"",alt:e.card?e.card.name:""}),c.a.createElement("figcaption",{className:"popup__title popup__title_image"},e.card?e.card.name:"")))},h=t(9),v=t(10),E=new(function(){function e(a){Object(h.a)(this,e),this._baseUrl=a.baseUrl,this._headers=a.headers}return Object(v.a)(e,[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkStatus)}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkStatus)}},{key:"postNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkStatus)}},{key:"setUserData",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkStatus)}},{key:"setUserAvatarData",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.link})}).then(this._checkStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkStatus)}},{key:"changeLikeStatus",value:function(e,a){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:a?"PUT":"DELETE",headers:this._headers}).then(this._checkStatus)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"4905795f-d4f5-4259-8ab1-1154380da5eb","Content-Type":"application/json"}}),k=t(3),C=t(2);var O=function(e){return c.a.createElement("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_open":"")},c.a.createElement("div",{className:"popup__container"},c.a.createElement("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e",className:"button popup__close opacity",onClick:e.onClose}),c.a.createElement("h3",{className:"popup__title"},e.title),c.a.createElement("form",{name:e.name,onSubmit:e.onSubmit,className:"popup__form",action:"#",method:"POST",noValidate:!0},e.children,c.a.createElement("button",{type:"submit",className:"button popup__button-submit ".concat(e.isDisabled?"popup__button-submit_disabled":""),disabled:e.isDisabled},e.onClick?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":e.button))))};var g=function(e){var a=c.a.useContext(p),t=c.a.useState({name:!0,about:!0}),n=Object(l.a)(t,2),o=n[0],i=n[1],r=c.a.useState({name:"",about:""}),s=Object(l.a)(r,2),u=s[0],m=s[1],d=c.a.useState({name:"",about:""}),b=Object(l.a)(d,2),_=b[0],f=b[1],h=Object.values(o).every(Boolean);function v(e){var a=e.target,t=a.name,n=a.value;f(Object(C.a)(Object(C.a)({},_),{},Object(k.a)({},t,n))),i(Object(C.a)(Object(C.a)({},o),{},Object(k.a)({},t,e.target.validity.valid))),m(Object(C.a)(Object(C.a)({},u),{},Object(k.a)({},t,e.target.validationMessage)))}return c.a.useEffect((function(){f({name:a.name||"",about:a.about||""})}),[a]),c.a.useEffect((function(){f({name:a.name,about:a.about}),m({name:"",about:""})}),[e.isOpen]),c.a.createElement(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onClick:e.onClick,isDisabled:!h,onSubmit:function(a){a.preventDefault(),e.onUpdateUser({name:_.name,about:_.about})}},c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"text",value:_.name,onChange:v,id:"name-input",className:"popup__item",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40"}),c.a.createElement("span",{id:"name-input-error",className:o.name?"":"popup__item-error"},u.name)),c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"text",value:_.about,onChange:v,id:"about-input",className:"popup__item",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200"}),c.a.createElement("span",{id:"name-input-error",className:o.about?"":"popup__item-error"},u.about)))};var N=function(e,a){var t=c.a.useRef(""),n=c.a.useState(!1),o=Object(l.a)(n,2),i=o[0],r=o[1],s=c.a.useState(""),u=Object(l.a)(s,2),m=u[0],p=u[1],d=c.a.useState(a),b=Object(l.a)(d,2),_=b[0],f=b[1];return c.a.useEffect((function(){t.current.value="",p(""),f(a)}),[e.isOpen]),c.a.createElement(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClick:e.onClick,isDisabled:_,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({link:t.current.value})}},c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{ref:t,type:"url",onChange:function(e){e.target.validity.valid?(r(!1),p(""),f(!a)):(r(!0),p(e.target.validationMessage),f(a))},id:"link-input",className:"popup__item",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),c.a.createElement("span",{id:"link-input-error",className:i?"popup__item-error":""},m)))};var y=function(e){var a=c.a.useState({name:"",link:""}),t=Object(l.a)(a,2),n=t[0],o=t[1],i=c.a.useState({name:!1,link:!1}),r=Object(l.a)(i,2),s=r[0],u=r[1],m=c.a.useState({name:"",link:""}),p=Object(l.a)(m,2),d=p[0],b=p[1],_=Object.values(s).every(Boolean);function f(e){var a=e.target,t=a.name,c=a.value;o(Object(C.a)(Object(C.a)({},n),{},Object(k.a)({},t,c))),u(Object(C.a)(Object(C.a)({},s),{},Object(k.a)({},t,e.target.validity.valid))),b(Object(C.a)(Object(C.a)({},d),{},Object(k.a)({},t,e.target.validationMessage)))}return c.a.useEffect((function(){o({name:"",link:""}),b({name:"",link:""}),u({name:!1,link:!1})}),[e.isOpen]),c.a.createElement(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClick:e.onClick,onClose:e.onClose,isDisabled:!_,onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:n.name,link:n.link})}},c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"text",value:n.name,id:"title-input",className:"popup__item",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",onChange:f}),c.a.createElement("span",{id:"title-input-error",className:s.name?"":"popup__item-error"},d.name)),c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"url",value:n.link,id:"link-input",className:"popup__item",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:f}),c.a.createElement("span",{id:"title-input-error",className:s.link?"":"popup__item-error"},d.link)))};var j=function(e){return c.a.createElement(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete",button:"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onDelete(e.card)}})};var S=function(){var e=c.a.useState(!1),a=Object(l.a)(e,2),t=a[0],n=a[1],o=c.a.useState(!1),i=Object(l.a)(o,2),s=i[0],u=i[1],d=c.a.useState(!1),h=Object(l.a)(d,2),v=h[0],k=h[1],C=c.a.useState(!1),O=Object(l.a)(C,2),S=O[0],D=O[1],U=c.a.useState(!1),L=Object(l.a)(U,2),P=L[0],w=L[1],x=c.a.useState(void 0),A=Object(l.a)(x,2),T=A[0],q=A[1],J=c.a.useState(!1),M=Object(l.a)(J,2),B=M[0],I=M[1],H=c.a.useState({}),R=Object(l.a)(H,2),W=R[0],z=R[1],F=c.a.useState([]),V=Object(l.a)(F,2),$=V[0],G=V[1];function K(){n(!1),u(!1),k(!1),D(!1),w(!1),q()}return c.a.useEffect((function(){Promise.all([E.getUserData(),E.getInitialCards()]).then((function(e){var a=Object(l.a)(e,2),t=a[0],n=a[1];z(t),G(n)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"page"},c.a.createElement(p.Provider,{value:W},c.a.createElement(m,null),c.a.createElement("div",{className:"container"},c.a.createElement(b,{cards:$,onEditProfile:function(){n(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){k(!0)},onCardClick:function(e){q(e),D(!0)},onCardLike:function(e){var a=e.likes.some((function(e){return e._id===W._id}));E.changeLikeStatus(e._id,!a).then((function(a){var t=$.map((function(t){return t._id===e._id?a:t}));G(t)}))},onCardDelete:function(e){q(e),w(!0)}}),c.a.createElement(_,null),c.a.createElement(g,{isOpen:t,onClick:B,onClose:K,onUpdateUser:function(e){I(!0),E.setUserData(e).then((function(e){z(e),K()})).catch((function(e){console.log(e)})).finally((function(){I(!1)}))}}),c.a.createElement(N,{isOpen:v,onClick:B,onClose:K,onUpdateAvatar:function(e){I(!0),E.setUserAvatarData(e).then((function(e){z(e),K()})).catch((function(e){console.log(e)})).finally((function(){I(!1)}))}}),c.a.createElement(y,{isOpen:s,onClick:B,onClose:K,onAddPlace:function(e){I(!0),E.postNewCard(e).then((function(e){G([e].concat(Object(r.a)($))),K()})).catch((function(e){console.log(e)})).finally((function(){I(!1)}))}}),c.a.createElement(f,{isOpen:S,card:T,onClose:K}),c.a.createElement(j,{isOpen:P,onClose:K,onDelete:function(e){E.deleteCard(e._id).then((function(){var a=$.filter((function(a){return a._id!==e._id}));G(a),K()}))},card:T})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t.p+"static/media/logo.855a8c98.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.da04e06f.chunk.js.map