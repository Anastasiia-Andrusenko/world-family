"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[412],{5412:function(e,n,a){a.r(n),a.d(n,{default:function(){return pe}});var t=a(9439),s=a(2791),i={in__usa:"InUsa_in__usa__NcSoB",list:"InUsa_list__Nktsx",item:"InUsa_item__bjKNV",avatar:"InUsa_avatar__6Gk4s",name:"InUsa_name__6bHi9"},r=a(7928),c=a(4997),l=a(184),o=function(e){var n=e.onMembersClick;return(0,l.jsx)("div",{className:i.in__usa,id:"inUsa",onClick:n,children:(0,l.jsx)("div",{className:i.link,children:(0,l.jsxs)("ul",{className:i.list,children:[(0,l.jsxs)("li",{className:i.item,children:[(0,l.jsx)("img",{alt:"",src:r,className:i.avatar}),(0,l.jsx)("span",{className:i.name,children:"Ann"})]}),(0,l.jsxs)("li",{className:i.item,children:[(0,l.jsx)("img",{alt:"",src:c,className:i.avatar}),(0,l.jsx)("span",{className:i.name,children:"Tania"})]})]})})})},d={in__kyiv:"InKyiv_in__kyiv__C0BU7",list:"InKyiv_list__Y5iXT",item:"InKyiv_item__0tgcF",alone:"InKyiv_alone__OydD5",avatar:"InKyiv_avatar__U+jTB",name:"InKyiv_name__TNcfh"},m=a(3818),u=a(1694),p=a.n(u),_=function(e){var n=e.onMembersClick;return(0,l.jsx)("div",{className:d.in__kyiv,id:"InKyiv",onClick:n,children:(0,l.jsx)("div",{className:d.link,children:(0,l.jsx)("ul",{className:d.list,children:(0,l.jsxs)("li",{className:p()(d.item,d.alone),children:[(0,l.jsx)("img",{alt:"nastia_photo",src:m,className:d.avatar}),(0,l.jsx)("span",{className:d.name,children:"Nastia"})]})})})})},h={in__donetsk:"InDonetsk_in__donetsk__mREd7",list:"InDonetsk_list__rxnsc",item:"InDonetsk_item__NNn11",avatar:"InDonetsk_avatar__92PyI",name:"InDonetsk_name__SIAc2",imgs:"InDonetsk_imgs__p-u3h"},f=a(3811),v=a(4493),x=a(8589),y=a(397),j=function(e){var n=e.onMembersClick;return(0,l.jsx)("div",{className:h.in__donetsk,id:"InDonetsk",onClick:n,children:(0,l.jsx)("div",{className:h.link,children:(0,l.jsxs)("ul",{className:h.list,children:[(0,l.jsxs)("li",{className:h.item,children:[(0,l.jsxs)("div",{className:h.imgs,children:[(0,l.jsx)("img",{alt:"",src:f,className:h.avatar}),(0,l.jsx)("img",{alt:"",src:x,className:h.avatar})]}),(0,l.jsx)("span",{className:h.name,children:"grandmothers"})]}),(0,l.jsxs)("li",{className:h.item,children:[(0,l.jsxs)("div",{className:h.imgs,children:[(0,l.jsx)("img",{alt:"",src:v,className:h.avatar}),(0,l.jsx)("img",{alt:"",src:y,className:h.avatar})]}),(0,l.jsx)("span",{className:h.name,children:"grandfathers"})]})]})})})},k={in__pl:"InPoland_in__pl__gBhZ3",list:"InPoland_list__oJiAJ",item:"InPoland_item__jXL+g",alone:"InPoland_alone__TbVMg",avatar:"InPoland_avatar__ipfyg",name:"InPoland_name__1jFno"},N=a(8194),g=function(e){var n=e.onMembersClick;return(0,l.jsx)("div",{className:k.in__pl,id:"InPoland",onClick:n,children:(0,l.jsx)("div",{className:k.link,children:(0,l.jsx)("ul",{className:k.list,children:(0,l.jsxs)("li",{className:p()(k.item,k.alone),children:[(0,l.jsx)("img",{alt:"andrew_photo",src:N,className:k.avatar}),(0,l.jsx)("span",{className:k.name,children:"Andrew"})]})})})})},b=a(5671),w=a(3144),I=a(136),C=a(4104),M=a(4164),Z=a(6907),G={overlay:"Modal_overlay__r63M6",modal:"Modal_modal__DJDMv",icon:"Modal_icon__2UpwH",img:"Modal_img__20InI",title:"Modal_title__3HkNf",time:"Modal_time__ZZCFP",blok:"Modal_blok__YtAkf"},D=a(6171),K=a(2958),U=a(2467),P=a(6256),T=a(9564),E=a.n(T),L=a(3394),q=a(5861),B=a(7757),F=a.n(B),O=function(){var e=(0,q.Z)(F().mark((function e(n){return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.weatherapi.com/v1","/current.json?key=").concat("dada1f37ac1948d0aa8144651231403","&q=").concat(n)).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S={container:"Weather_container__R0oUo",condition:"Weather_condition__IFtqH",icon:"Weather_icon__OpA+l"},V=a(458),J=function(e){var n=e.city,a=(0,s.useState)(""),i=(0,t.Z)(a,2),r=i[0],c=i[1];return(0,s.useEffect)((function(){O(n).then((function(e){console.log(e),c({temp:e.current.temp_c,feelTemp:e.current.feelslike_c,condition:e.current.condition.text,illustration:e.current.condition.icon})}))}),[n,c]),(0,l.jsxs)("div",{className:S.container,children:[(0,l.jsxs)("div",{className:S.condition,children:[(0,l.jsx)("img",{src:r.illustration,alt:"condition icon"}),(0,l.jsx)("p",{children:r.condition})]}),(0,l.jsxs)("div",{className:S.temp,children:[(0,l.jsxs)("p",{children:[(0,l.jsx)(V.ahx,{className:S.icon})," ",r.temp,"\xb0 \u0421"]}),(0,l.jsxs)("p",{children:["Feels like ",r.feelTemp,"\xb0 \u0421"]})]})]})},W=a(3433),z=a(1912),A={method:"GET",url:"https://api.newscatcherapi.com/v2/search",params:{q:"Cleveland",lang:"en",sort_by:"relevancy",page:"1"},headers:{"x-api-key":"6orwVgKbvG4w4tc3rUtwLDnGBQVGIJGuynBGLyq1lyw"}},H=function(){var e=(0,q.Z)(F().mark((function e(){var n,a;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.Z.request(A);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q={method:"GET",url:"https://api.newscatcherapi.com/v2/search",params:{q:"Poland",lang:"en",sort_by:"relevancy",page:"1"},headers:{"x-api-key":"6orwVgKbvG4w4tc3rUtwLDnGBQVGIJGuynBGLyq1lyw"}},Y=function(){var e=(0,q.Z)(F().mark((function e(){var n,a;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.Z.request(Q);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R={method:"GET",url:"https://api.newscatcherapi.com/v2/search",params:{q:"Ukraine",lang:"en",sort_by:"relevancy",page:"1"},headers:{"x-api-key":"6orwVgKbvG4w4tc3rUtwLDnGBQVGIJGuynBGLyq1lyw"}},X=function(){var e=(0,q.Z)(F().mark((function e(){var n,a;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.Z.request(R);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$={method:"GET",url:"https://api.newscatcherapi.com/v2/search",params:{q:"Kyiv",lang:"en",sort_by:"relevancy",page:"1"},headers:{"x-api-key":"6orwVgKbvG4w4tc3rUtwLDnGBQVGIJGuynBGLyq1lyw"}},ee=function(){var e=(0,q.Z)(F().mark((function e(){var n,a;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.Z.request($);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne="News_container__ew0ZC",ae="News_list__5JQ3S",te="News_item__Ru6gL",se="News_title__g2IiO",ie="News_article__+Pkno",re="News_link__5iYTJ",ce=a(2756),le=function(e){var n=e.city,a=(0,s.useState)([]),i=(0,t.Z)(a,2),r=i[0],c=i[1],o=(0,s.useState)(!1),d=(0,t.Z)(o,2),m=d[0],u=d[1],p=(0,s.useState)(null),_=(0,t.Z)(p,2),h=_[0],f=_[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,q.Z)(F().mark((function e(){var a,t,s,i;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Donetsk"!==n){e.next=19;break}return e.prev=1,u(!0),e.next=5,X();case 5:a=e.sent,console.log(a),c((function(e){return[].concat((0,W.Z)(e),(0,W.Z)(a.articles))})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message),f(e.t0.message);case 14:return e.prev=14,u(!1),e.finish(14);case 17:e.next=73;break;case 19:if("Cleveland"!==n){e.next=37;break}return e.prev=20,u(!0),e.next=24,H();case 24:t=e.sent,console.log(t),c((function(e){return[].concat((0,W.Z)(e),(0,W.Z)(t.articles))})),e.next=32;break;case 29:e.prev=29,e.t1=e.catch(20),f(e.t1.message);case 32:return e.prev=32,u(!1),e.finish(32);case 35:e.next=73;break;case 37:if("Poland (Lodz)"!==n){e.next=57;break}return e.prev=38,u(!0),e.next=42,Y();case 42:s=e.sent,console.log(s),c((function(e){return[].concat((0,W.Z)(e),(0,W.Z)(s.articles))})),e.next=51;break;case 47:e.prev=47,e.t2=e.catch(38),console.log(e.t2.message),f(e.t2.message);case 51:return e.prev=51,u(!1),f(null),e.finish(51);case 55:e.next=73;break;case 57:if("Kyiv"!==n){e.next=73;break}return e.prev=58,u(!0),e.next=62,ee();case 62:i=e.sent,c((function(e){return[].concat((0,W.Z)(e),(0,W.Z)(i.articles))})),e.next=69;break;case 66:e.prev=66,e.t3=e.catch(58),f(e.t3.message);case 69:return e.prev=69,u(!1),f(null),e.finish(69);case 73:case"end":return e.stop()}}),e,null,[[1,10,14,17],[20,29,32,35],[38,47,51,55],[58,66,69,73]])})));return function(){return e.apply(this,arguments)}}();e()}),[n,c]),m?(0,l.jsx)("div",{style:{marginTop:"10vh",marginLeft:"10vw"},children:(0,l.jsx)(ce.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#8c03fc","#9d26ff","#ac49fc","#c175ff","#d5a4fc"]})}):(0,l.jsxs)("div",{className:ne,children:[(0,l.jsx)("p",{className:se,children:"News"}),h?(0,l.jsx)("p",{children:h}):(0,l.jsx)("ul",{className:ae,children:r.map((function(e){return(0,l.jsxs)("li",{className:te,children:[(0,l.jsx)("p",{className:ie,children:e.title}),(0,l.jsx)("a",{href:e.link,className:re,target:"_blank",rel:"noreferrer",children:"link to the article"})]},e._id)}))})]})},oe=document.querySelector("#modal-root"),de=document.getElementById("html"),me=function(e){(0,I.Z)(a,e);var n=(0,C.Z)(a);function a(){var e;(0,b.Z)(this,a);for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];return(e=n.call.apply(n,[this].concat(s))).handleKeydown=function(n){"Escape"===n.code&&e.props.onClose()},e.handleBackdropClick=function(n){n.target===n.currentTarget&&e.props.onClose()},e.getTimezone=function(e){return"InDonetsk"===e?"Europe/Moscow":"inUsa"===e?"America/New_York":"InPoland"===e?"Europe/Warsaw":void 0},e.getCityName=function(e){return"InDonetsk"===e?"Donetsk":"inUsa"===e?"Cleveland":"InPoland"===e?"Poland (Lodz)":"InKyiv"===e?"Kyiv":void 0},e.getImg=function(e){return"InDonetsk"===e?U:"inUsa"===e?D:"InPoland"===e?K:"InKyiv"===e?P:void 0},e.getCityNameForWeather=function(e){return"inUsa"===e?"Cleveland":"InDonetsk"===e?"47.917012,37.620669":"InPoland"===e?"Lodz":"InKyiv"===e?"50.46892807925003,30.51370074584721":void 0},e}return(0,w.Z)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown),de.style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown),de.style.overflow="unset"}},{key:"render",value:function(){var e=this.getTimezone(this.props.idOfMembers),n=this.getCityName(this.props.idOfMembers),a=this.getImg(this.props.idOfMembers),t=this.getCityNameForWeather(this.props.idOfMembers);return(0,M.createPortal)((0,l.jsx)("div",{className:G.overlay,children:(0,l.jsx)(L.E.div,{className:G.modal,initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:180,damping:40},children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:G.title,children:n}),(0,l.jsxs)("div",{className:G.blok,children:[(0,l.jsx)("img",{className:G.img,alt:n,src:a}),(0,l.jsxs)("div",{className:G.day_info,children:[(0,l.jsxs)("div",{className:G.date_time,children:[(0,l.jsx)("div",{className:G.time,children:(0,l.jsx)(E(),{format:"HH:mm:ss",ticking:!0,timezone:e})}),(0,l.jsx)("div",{className:G.day,children:(0,l.jsx)(E(),{format:"D MMMM, dddd",ticking:!1,timezone:e})})]}),(0,l.jsx)("div",{className:G.info,children:(0,l.jsx)(J,{city:t})})]})]}),(0,l.jsx)(le,{city:n}),(0,l.jsx)(Z.Ivx,{className:G.icon,onClick:this.props.onClose})]})})}),oe)}}]),a}(s.Component),ue={familyCards:"Family_familyCards__ddD1m",title:"Family_title__5PpZK",text:"Family_text__xeWrs",list:"Family_list__TMC4n",titles:"Family_titles__Nad13"},pe=function(){var e=(0,s.useState)({idOfMembers:""}),n=(0,t.Z)(e,2),a=n[0],i=n[1],r=(0,s.useState)(!1),c=(0,t.Z)(r,2),d=c[0],m=c[1],u=function(e){var n=e.currentTarget.id;m(!d),i({idOfMembers:n})};return(0,l.jsxs)("section",{className:ue.familyCards,children:[(0,l.jsxs)(L.E.div,{initial:{opacity:0,scale:.1,y:-200},animate:{opacity:1,scale:1,y:100},transition:{duration:1,delay:0},children:[(0,l.jsxs)("div",{className:ue.titles,children:[(0,l.jsx)("h2",{className:ue.title,children:" Where are they ?"}),(0,l.jsx)("h2",{className:ue.title,children:"How are they ?"})]}),(0,l.jsx)(L.E.div,{initial:{opacity:0,scale:.1},animate:{opacity:1,scale:1},transition:{duration:1,delay:2},children:(0,l.jsx)("p",{className:ue.text,children:"select a card for details"})}),(0,l.jsxs)(L.E.div,{className:ue.list,initial:{opacity:0,scale:.1},animate:{opacity:1,scale:1},transition:{duration:1,delay:1},children:[(0,l.jsx)("div",{className:ue.item,children:(0,l.jsx)(o,{onMembersClick:u})}),(0,l.jsx)("div",{className:ue.item,children:(0,l.jsx)(j,{onMembersClick:u})}),(0,l.jsx)("div",{className:ue.item,children:(0,l.jsx)(g,{onMembersClick:u})}),(0,l.jsx)("div",{className:ue.item,children:(0,l.jsx)(_,{onMembersClick:u})})]})]}),d&&(0,l.jsx)(me,{onClose:function(){m(!d),i({idOfMembers:""})},idOfMembers:a.idOfMembers})]})}},8194:function(e,n,a){e.exports=a.p+"static/media/andrew.035bce9d527b424fc9d4.png"},7928:function(e,n,a){e.exports=a.p+"static/media/ann.58b996022ab7dc3f329f.png"},6171:function(e,n,a){e.exports=a.p+"static/media/clevelend.d32dea9a31134742efc2.jpg"},2467:function(e,n,a){e.exports=a.p+"static/media/donetsk.bf669af8572ed53cbbab.jpg"},6256:function(e,n,a){e.exports=a.p+"static/media/kyiv.234915045c61d2dcbb42.jpg"},8589:function(e,n,a){e.exports=a.p+"static/media/lena.d4dd6b905577bec691b9.png"},2958:function(e,n,a){e.exports=a.p+"static/media/lodz.7484e0259dc1b0f61dfa.jpg"},3818:function(e,n,a){e.exports=a.p+"static/media/nastia.c3c22d3f9579db4a8bf1.png"},4493:function(e,n,a){e.exports=a.p+"static/media/nikolay.e434ea78acbc99da6760.png"},3811:function(e,n,a){e.exports=a.p+"static/media/nina.fdd2bb1f1d599b9a9a2c.png"},397:function(e,n,a){e.exports=a.p+"static/media/sasha.fcfb22e1120c6c997e01.png"},4997:function(e,n,a){e.exports=a.p+"static/media/tetiana.8630d1a7a8aff5b14691.png"}}]);
//# sourceMappingURL=412.0c9e3db6.chunk.js.map