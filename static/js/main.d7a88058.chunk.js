(this["webpackJsonpcalorie-zen"]=this["webpackJsonpcalorie-zen"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),l=(a(12),a(1)),i=a(4),s=a.n(i);var u=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("img",{className:"header__logo",src:s.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))},m=a(5),p=a(6),_=new(function(){function e(t){Object(m.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(p.a)(e,[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkStatus)}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkStatus)}},{key:"postNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkStatus)}},{key:"setUserData",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkStatus)}},{key:"setUserAvatarData",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.link})}).then(this._checkStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._checkStatus)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkStatus)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkStatus)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"4905795f-d4f5-4259-8ab1-1154380da5eb","Content-Type":"application/json"}});var d=function(e){return c.a.createElement("li",{className:"card"},c.a.createElement("img",{className:"card__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),c.a.createElement("button",{type:"button","aria-label":"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442",className:"button button__delete opacity"}),c.a.createElement("div",{className:"card__info"},c.a.createElement("h3",{className:"card__title"},e.card.name),c.a.createElement("div",{className:"card__like"},c.a.createElement("button",{type:"button","aria-label":"\u0432\u044b\u0440\u0430\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0440\u0435\u0430\u043a\u0446\u0438\u044e",className:"button button__like opacity"}),c.a.createElement("dev",{className:"card__like-counter"},e.card.likes.length))))};var h=function(e){var t=c.a.useState(),a=Object(l.a)(t,2),n=a[0],r=a[1],o=c.a.useState(),i=Object(l.a)(o,2),s=i[0],u=i[1],m=c.a.useState(),p=Object(l.a)(m,2),h=p[0],b=p[1],f=c.a.useState([]),E=Object(l.a)(f,2),N=E[0],k=E[1];return c.a.useEffect((function(){_.getUserData().then((function(e){r(e.avatar),u(e.name),b(e.about)})).catch((function(e){console.log(e)}))})),c.a.useEffect((function(){_.getInitialCards().then((function(e){k(e)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("main",{className:"content"},c.a.createElement("section",{className:"profile"},c.a.createElement("dev",{className:"profile__avatar"},c.a.createElement("img",{className:"profile__image",src:n,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),c.a.createElement("div",{className:"profile__cover"},c.a.createElement("button",{onClick:e.onEditAvatar,type:"button",className:"button profile__button-avatar","aria-label":"\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}))),c.a.createElement("div",{className:"profile__info"},c.a.createElement("h1",{className:"profile__name"},s),c.a.createElement("button",{onClick:e.onEditProfile,type:"button","aria-label":"\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"button profile__button-edit opacity"}),c.a.createElement("p",{className:"profile__about"},h)),c.a.createElement("button",{onClick:e.onAddPlace,type:"button","aria-label":"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"button profile__button-add opacity"})),c.a.createElement("section",{className:"card-container"},c.a.createElement("ul",{className:"card-container__list"},N.map((function(t){return c.a.createElement(d,Object.assign({},t,{onCardClick:e.onCardClick,key:t._id,card:t}))})))))};var b=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var f=function(e){return c.a.createElement("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_open":"")},c.a.createElement("div",{className:"popup__container"},c.a.createElement("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e",className:"button popup__close opacity",onClick:e.onClose}),c.a.createElement("h3",{className:"popup__title"},e.title),c.a.createElement("form",{name:e.name,className:"popup__form",action:"#",method:"POST",noValidate:!0},e.children,c.a.createElement("button",{type:"submit",className:"button popup__button-submit"},e.button))))};var E=function(e){return c.a.createElement("section",{className:"popup popup__image popup__background_image ".concat(e.card?"popup_open":"")},c.a.createElement("figure",{className:"popup__container popup__container_image"},c.a.createElement("button",{type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e",className:"button popup__close opacity",onClick:e.onClose}),c.a.createElement("img",{className:"popup__view",src:e.card?e.card.link:"",alt:e.card?e.card.name:""}),c.a.createElement("figcaption",{className:"popup__title popup__title_image"},e.card?e.card.name:"")))};var N=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=c.a.useState(!1),o=Object(l.a)(r,2),i=o[0],s=o[1],m=c.a.useState(!1),p=Object(l.a)(m,2),_=p[0],d=p[1],N=c.a.useState(),k=Object(l.a)(N,2),v=k[0],g=k[1];function y(){n(!1),s(!1),d(!1),g()}return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null),c.a.createElement("div",{className:"container"},c.a.createElement(h,{onEditProfile:function(){n(!0)},onAddPlace:function(){s(!0)},onEditAvatar:function(){d(!0)},onCardClick:function(e){g(e)}}),c.a.createElement(b,null),c.a.createElement(f,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:y},c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"text",id:"name-input",className:"popup__item popup__item_input-name",name:"name",value:"",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40"}),c.a.createElement("span",{id:"name-input-error",className:"popup__item-error"})),c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"text",id:"about-input",className:"popup__item popup__item_input-about",name:"about",value:"",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200"}),c.a.createElement("span",{id:"about-input-error",className:"popup__item-error"}))),c.a.createElement(f,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:i,onClose:y},c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"text",id:"title-input",className:"popup__item popup__item_input-title",name:"name",value:"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30"}),c.a.createElement("span",{id:"title-input-error",className:"popup__item-error"})),c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"url",id:"link-input",className:"popup__item popup__item_input-link",name:"link",value:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),c.a.createElement("span",{id:"link-input-error",className:"popup__item-error"}))),c.a.createElement(f,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:_,onClose:y},c.a.createElement("label",{className:"popup__field"},c.a.createElement("input",{type:"url",id:"link-input",className:"popup__item popup__item_input-avatar",name:"link",value:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),c.a.createElement("span",{id:"link-input-error",className:"popup__item-error"}))),c.a.createElement(f,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",button:"\u0414\u0430",onClose:y}),c.a.createElement(E,{card:v,onClose:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.d7a88058.chunk.js.map