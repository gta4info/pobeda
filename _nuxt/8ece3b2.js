(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{341:function(e,t,n){var content=n(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("1c756451",content,!0,{sourceMap:!1})},362:function(e,t,n){e.exports=n.p+"img/logo.e401b41.png"},363:function(e,t,n){"use strict";n(341)},364:function(e,t,n){var r=n(54)(!1);r.push([e.i,'.header[data-v-302485c0]{display:flex;align-items:center;height:96px}@media(max-width:768px){.header[data-v-302485c0]{height:100px;padding:0 20px}}.header-wrapper[data-v-302485c0]{box-shadow:0 0 10px #e9f0fd;position:fixed;top:0;right:0;left:0;background:#fff;z-index:2}.header-wrapper .container[data-v-302485c0]{padding-top:0;padding-bottom:0}.header__logo[data-v-302485c0]{height:71px;width:71px;display:flex;align-items:center;justify-content:center;margin-right:40px;flex-shrink:0}@media(max-width:769px){.header__logo[data-v-302485c0]{width:60px;height:60px;margin-right:10px}}.header__logo img[data-v-302485c0]{width:100%;height:100%}@media(max-width:768px){.header__nav[data-v-302485c0]{display:none}}.header__nav ul[data-v-302485c0]{list-style:none;margin:0;padding:0;display:flex;align-items:center}.header__nav ul li[data-v-302485c0]{margin-right:20px;font-family:"Proxima Nova Bl",sans-serif;color:rgba(33,45,69,.7);transition:.3s;padding:10px;background:transparent;border-radius:10px;cursor:pointer}.header__nav ul li[data-v-302485c0]:not(:last-child){padding-right:20px}.header__nav ul li.active[data-v-302485c0],.header__nav ul li[data-v-302485c0]:hover{color:#304095;background:#f2f7ff}.header__navMobile[data-v-302485c0]{position:relative}@media(min-width:769px){.header__navMobile[data-v-302485c0]{display:none}}.header__navMobile-burger[data-v-302485c0]{margin-right:10px}.header__navMobile-menu[data-v-302485c0]{position:fixed;top:100px;background:#fff;border-top:1px solid #e6e6e6;padding:30px!important;opacity:0;transition:.3s;left:-100vw;width:100%}.header__navMobile-menu.active[data-v-302485c0]{opacity:1;left:0}.header__navMobile-menu li[data-v-302485c0]{align-items:center;display:flex;min-height:48px;width:100%;border:1px solid #e6e6e6;border-bottom:none}.header__navMobile-menu li[data-v-302485c0]:last-of-type{border-bottom:1px solid #e6e6e6}.header__navMobile-menu li a[data-v-302485c0]{padding:16px 24px;width:100%}.header__contacts[data-v-302485c0]{display:flex;align-items:center;margin-left:auto}@media(max-width:768px){.header__contacts[data-v-302485c0]{flex-direction:column-reverse;align-items:flex-start}}.header__contacts-lines[data-v-302485c0]{display:flex;flex-direction:column}.header__contacts-phone[data-v-302485c0]{color:#212c66;font-family:"Proxima Nova Sb",sans-serif}@media(max-width:768px){.header__contacts-phone[data-v-302485c0]{font-size:12px}}.header__contacts-email[data-v-302485c0]{color:#212c66}@media(max-width:768px){.header__contacts-email[data-v-302485c0]{font-size:12px}.header__contacts-email span[data-v-302485c0]{display:none}}.header__contacts-btn[data-v-302485c0]{padding:10px 15px;text-transform:none;margin-left:20px;color:#fff!important;height:40px!important}@media(max-width:768px){.header__contacts-btn[data-v-302485c0]{margin-left:0;margin-bottom:10px}}.header__dropdown[data-v-302485c0]{display:flex;flex-direction:column;padding:16px 24px;background:#f2f7ff;margin-top:10px}.header__dropdown-activator[data-v-302485c0]{cursor:default!important;display:flex;align-items:center}.header__dropdown-item a[data-v-302485c0]{padding:10px;height:100%;width:100%;display:flex;color:#68889c;transition:.3s}.header__dropdown-item a.active[data-v-302485c0],.header__dropdown-item a[data-v-302485c0]:hover{background:#fff;border-radius:5px;color:#304095}',""]),e.exports=r},389:function(e,t,n){"use strict";n.r(t);var r={name:"Header",data:function(){return{showMobileMenu:!1,nav:[{title:"Победа",link:"/",items:[]},{title:"Афиша мероприятий",link:"/",items:[]},{title:"Новости",link:"/",items:[]},{title:"Занятия",link:null,items:[{title:"Хореография",link:"/"},{title:"Ударные инструменты",link:"/"},{title:"Вокал",link:"/"},{title:"Мастерская",link:"/"},{title:"Клуб молодых родителей",link:"/"}]},{title:"Информация",link:null,items:[{title:"Документы",link:"/"},{title:"Филиалы",link:"/"},{title:"Контакты",link:"/"}]}]}}},o=(n(363),n(76)),l=n(91),d=n.n(l),c=n(387),_=n(321),v=n(382),h=n(383),m=n(384),f=n(391),x=n(331),k=n(386),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header-wrapper"},[r("v-container",[r("header",{staticClass:"header"},[r("nuxt-link",{staticClass:"header__logo",attrs:{to:"/"}},[r("img",{attrs:{src:n(362),alt:"Победа"}})]),e._v(" "),r("nav",{staticClass:"header__nav"},[r("ul",[e._l(e.nav.filter((function(e){return 0===e.items.length})),(function(t,i){return r("li",{key:"link"+i},[r("nuxt-link",{attrs:{to:t.link}},[e._v(e._s(t.title))])],1)})),e._v(" "),e._l(e.nav.filter((function(e){return e.items.length>0})),(function(t,i){return r("v-menu",{key:"activator"+i,attrs:{"open-on-hover":"","offset-y":"","close-delay":"200","content-class":"header__dropdown"},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on;return[r("li",e._g({staticClass:"header__dropdown-activator"},o),[e._v(e._s(t.title)+" "),r("v-icon",{staticClass:"ml-2",attrs:{size:"16",color:"#212C66"}},[e._v("mdi-chevron-down")])],1)]}}],null,!0)},[e._v(" "),e._l(t.items,(function(t,n){return r("div",{key:"item"+n,staticClass:"header__dropdown-item"},[r("nuxt-link",{attrs:{to:t.link,"active-class":"active"}},[e._v(e._s(t.title))])],1)}))],2)}))],2)]),e._v(" "),r("nav",{staticClass:"header__navMobile"},[r("v-btn",{staticClass:"header__navMobile-burger",attrs:{depressed:"",icon:""},on:{click:function(t){e.showMobileMenu=!e.showMobileMenu}}},[r("v-icon",[e._v("mdi-menu")])],1),e._v(" "),r("ul",{staticClass:"header__navMobile-menu",class:{active:e.showMobileMenu}},[e._l(e.nav.filter((function(e){return 0===e.items.length})),(function(t,i){return r("li",{key:"link"+i},[r("nuxt-link",{attrs:{to:t.link}},[e._v(e._s(t.title))])],1)})),e._v(" "),r("v-expansion-panels",e._l(e.nav.filter((function(e){return e.items.length>0})),(function(t,i){return r("v-expansion-panel",{key:"activator"+i},[r("v-expansion-panel-header",[e._v(e._s(t.title))]),e._v(" "),e._l(t.items,(function(t,n){return r("v-expansion-panel-content",{key:"item"+n},[r("nuxt-link",{attrs:{to:t.link,"active-class":"active"}},[e._v(e._s(t.title))])],1)}))],2)})),1)],2)],1),e._v(" "),r("div",{staticClass:"header__contacts"},[r("div",{staticClass:"header__contacts-lines"},[r("a",{staticClass:"header__contacts-phone",attrs:{href:"tel:84967935153"}},[e._v("8 (496) 793-51-53")]),e._v(" "),r("a",{staticClass:"header__contacts-email",attrs:{href:"mailto:dmdd_mbu_pob@mosreg.ru"}},[r("span",[e._v("e-mail: ")]),e._v("dmdd_mbu_pob@mosreg.ru")])]),e._v(" "),r("v-btn",{staticClass:"header__contacts-btn",attrs:{color:"#304095",depressed:""}},[e._v("Написать нам")])],1)],1)])],1)}),[],!1,null,"302485c0",null);t.default=component.exports;d()(component,{Header:function(){return Promise.resolve().then(n.bind(null,389)).then((function(e){return e.default||e}))}}),d()(component,{VBtn:c.a,VContainer:_.a,VExpansionPanel:v.a,VExpansionPanelContent:h.a,VExpansionPanelHeader:m.a,VExpansionPanels:f.a,VIcon:x.a,VMenu:k.a})}}]);