(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{R3xw:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=(u("M0ag"),u("OO+k"),u("gIcY")),r=function(){function l(l,n,u,a){this.authService=l,this.alertController=n,this.loadingController=u,this.fb=a,this.registerForm=this.fb.group({email:["",[e.n.required,e.n.email]],password:["",[e.n.pattern(/^[a-z0-9_-]{6,18}$/)]],confirmPassword:[""]},{validator:t.MatchPassword})}return l.prototype.ngOnInit=function(){},l.prototype.register=function(){console.log(this.registerForm.value)},l}(),t=function(){function l(){}return l.MatchPassword=function(l){var n=l.get("password").value,u=l.get("confirmPassword").value;if(n&&u){if(n==u)return l.get("confirmPassword").setErrors(null),null;console.log("false"),l.get("confirmPassword").setErrors({MatchPassword:!0})}},l}(),o=function(){},i=u("pMnS"),s=u("ra/t"),c=u("ntG5"),d=u("M9A9"),g=u("ZYCi"),p=u("4Olv"),m=u("tXrQ"),f=u("Zq1E"),h=u("Ip0R"),k=u("lxdG"),b=u("Glnz"),M=u("n0fD"),C=u("CssM"),W=u("Eq7r"),v=a.La({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{--background:rgb(244, 81, 30);--color:white}ion-content[_ngcontent-%COMP%]{--background:url('login-bg.01429122d1b155b72546.png')}ion-card[_ngcontent-%COMP%]{--background:white}ion-card-header[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function w(l){return a.cb(0,[(l()(),a.Na(0,0,null,null,4,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Wa(l,2).onClick(u)&&e),e},s.K,s.n)),a.Ma(1,49152,null,0,c.F,[a.k],null,null),a.Ma(2,16384,null,0,d.a,[[2,g.l],a.k],null,null),(l()(),a.Na(3,0,null,0,1,"p",[["color","danger"],["ion-text",""]],null,null,null,null,null)),(l()(),a.bb(-1,null,["Email incorrecto"]))],null,null)}function N(l){return a.cb(0,[(l()(),a.Na(0,0,null,null,4,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Wa(l,2).onClick(u)&&e),e},s.K,s.n)),a.Ma(1,49152,null,0,c.F,[a.k],null,null),a.Ma(2,16384,null,0,d.a,[[2,g.l],a.k],null,null),(l()(),a.Na(3,0,null,0,1,"p",[["color","danger"],["ion-text",""]],null,null,null,null,null)),(l()(),a.bb(-1,null,["Password muy debil"]))],null,null)}function U(l){return a.cb(0,[(l()(),a.Na(0,0,null,null,4,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Wa(l,2).onClick(u)&&e),e},s.K,s.n)),a.Ma(1,49152,null,0,c.F,[a.k],null,null),a.Ma(2,16384,null,0,d.a,[[2,g.l],a.k],null,null),(l()(),a.Na(3,0,null,0,1,"p",[["color","danger"],["ion-text",""]],null,null,null,null,null)),(l()(),a.bb(-1,null,["Los passwords no coinciden"]))],null,null)}function I(l){return a.cb(0,[(l()(),a.Na(0,0,null,null,14,"ion-header",[],null,null,null,s.H,s.k)),a.Ma(1,49152,null,0,c.y,[a.k],null,null),(l()(),a.Na(2,0,null,0,12,"ion-toolbar",[["color","danger"]],null,null,null,s.T,s.v)),a.Ma(3,49152,null,0,c.Xa,[a.k],{color:[0,"color"]},null),(l()(),a.Na(4,0,null,0,2,"ion-title",[],null,null,null,s.S,s.w)),a.Ma(5,49152,null,0,c.Ya,[a.k],null,null),(l()(),a.bb(-1,0,["Restaurant App"])),(l()(),a.Na(7,0,null,0,7,"ion-buttons",[["slot","start"]],null,null,null,s.z,s.c)),a.Ma(8,49152,null,0,c.g,[],null,null),(l()(),a.Na(9,0,null,0,5,"ion-button",[["href","/start"],["routerDirection","back"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Wa(l,11).onClick()&&e),"click"===n&&(e=!1!==a.Wa(l,12).onClick(u)&&e),e},s.y,s.b)),a.Ma(10,49152,null,0,c.f,[a.k],{routerDirection:[0,"routerDirection"],href:[1,"href"]},null),a.Ma(11,16384,null,0,p.a,[m.a],{routerDirection:[0,"routerDirection"]},null),a.Ma(12,16384,null,0,d.a,[[2,g.l],a.k],{href:[0,"href"]},null),(l()(),a.Na(13,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"]],null,null,null,s.I,s.l)),a.Ma(14,49152,null,0,c.A,[a.k],{name:[0,"name"]},null),(l()(),a.Na(15,0,null,null,72,"ion-content",[],null,null,null,s.F,s.i)),a.Ma(16,49152,null,0,c.r,[a.k],null,null),(l()(),a.Na(17,0,null,0,70,"ion-card",[],null,null,null,s.D,s.d)),a.Ma(18,49152,null,0,c.h,[a.k],null,null),(l()(),a.Na(19,0,null,0,4,"ion-card-header",[],null,null,null,s.B,s.f)),a.Ma(20,49152,null,0,c.j,[a.k],null,null),(l()(),a.Na(21,0,null,0,2,"ion-card-title",[],null,null,null,s.C,s.g)),a.Ma(22,49152,null,0,c.l,[a.k],null,null),(l()(),a.bb(-1,0,["Reg\xedstrate"])),(l()(),a.Na(24,0,null,0,63,"ion-card-content",[],null,null,null,s.A,s.e)),a.Ma(25,49152,null,0,c.i,[a.k],null,null),(l()(),a.Na(26,0,null,0,61,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,r=l.component;return"submit"===n&&(e=!1!==a.Wa(l,28).onSubmit(u)&&e),"reset"===n&&(e=!1!==a.Wa(l,28).onReset()&&e),"ngSubmit"===n&&(e=!1!==r.register()&&e),e},null,null)),a.Ma(27,16384,null,0,e.p,[],null,null),a.Ma(28,540672,null,0,e.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a.Ya(2048,null,e.a,null,[e.d]),a.Ma(30,16384,null,0,e.k,[[4,e.a]],null,null),(l()(),a.Na(31,0,null,null,54,"ion-list",[["class","no-border"],["inset",""]],null,null,null,s.M,s.p)),a.Ma(32,49152,null,0,c.M,[a.k],{inset:[0,"inset"]},null),(l()(),a.Na(33,0,null,0,14,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Wa(l,35).onClick(u)&&e),e},s.K,s.n)),a.Ma(34,49152,null,0,c.F,[a.k],null,null),a.Ma(35,16384,null,0,d.a,[[2,g.l],a.k],null,null),(l()(),a.Na(36,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,s.L,s.o)),a.Ma(37,49152,null,0,c.L,[a.k],{position:[0,"position"]},null),(l()(),a.bb(-1,0,["Email"])),(l()(),a.Na(39,0,null,0,8,"ion-input",[["autofocus","true"],["clearInput",""],["formControlName","email"],["inputmode","email"],["placeholder","Introduce tu email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var e=!0;return"ionChange"===n&&(e=!1!==a.Wa(l,42)._handleInputEvent(u.target.value)&&e),"ionBlur"===n&&(e=!1!==a.Wa(l,42)._handleBlurEvent()&&e),e},s.J,s.m)),a.Ma(40,16384,null,0,e.m,[],{required:[0,"required"]},null),a.Ya(1024,null,e.g,function(l){return[l]},[e.m]),a.Ma(42,16384,null,0,f.a,[a.k],null,null),a.Ya(1024,null,e.h,function(l){return[l]},[f.a]),a.Ma(44,671744,null,0,e.c,[[3,e.a],[6,e.g],[8,null],[6,e.h],[2,e.r]],{name:[0,"name"]},null),a.Ya(2048,null,e.i,null,[e.c]),a.Ma(46,16384,null,0,e.j,[[4,e.i]],null,null),a.Ma(47,49152,null,0,c.E,[a.k],{autofocus:[0,"autofocus"],clearInput:[1,"clearInput"],inputmode:[2,"inputmode"],placeholder:[3,"placeholder"],required:[4,"required"],type:[5,"type"]},null),(l()(),a.Ea(16777216,null,0,1,null,w)),a.Ma(49,16384,null,0,h.i,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(50,0,null,0,15,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Wa(l,52).onClick(u)&&e),e},s.K,s.n)),a.Ma(51,49152,null,0,c.F,[a.k],null,null),a.Ma(52,16384,null,0,d.a,[[2,g.l],a.k],null,null),(l()(),a.Na(53,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,s.L,s.o)),a.Ma(54,49152,null,0,c.L,[a.k],{position:[0,"position"]},null),(l()(),a.bb(-1,0,["Password"])),(l()(),a.Na(56,0,null,0,9,"ion-input",[["clearInput",""],["formControlName","password"],["maxlength","18"],["placeholder","Introduce tu password"],["required",""],["type","password"]],[[1,"required",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var e=!0;return"ionChange"===n&&(e=!1!==a.Wa(l,60)._handleInputEvent(u.target.value)&&e),"ionBlur"===n&&(e=!1!==a.Wa(l,60)._handleBlurEvent()&&e),e},s.J,s.m)),a.Ma(57,16384,null,0,e.m,[],{required:[0,"required"]},null),a.Ma(58,540672,null,0,e.f,[],{maxlength:[0,"maxlength"]},null),a.Ya(1024,null,e.g,function(l,n){return[l,n]},[e.m,e.f]),a.Ma(60,16384,null,0,f.a,[a.k],null,null),a.Ya(1024,null,e.h,function(l){return[l]},[f.a]),a.Ma(62,671744,null,0,e.c,[[3,e.a],[6,e.g],[8,null],[6,e.h],[2,e.r]],{name:[0,"name"]},null),a.Ya(2048,null,e.i,null,[e.c]),a.Ma(64,16384,null,0,e.j,[[4,e.i]],null,null),a.Ma(65,49152,null,0,c.E,[a.k],{clearInput:[0,"clearInput"],maxlength:[1,"maxlength"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"]},null),(l()(),a.Ea(16777216,null,0,1,null,N)),a.Ma(67,16384,null,0,h.i,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(68,0,null,0,15,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Wa(l,70).onClick(u)&&e),e},s.K,s.n)),a.Ma(69,49152,null,0,c.F,[a.k],null,null),a.Ma(70,16384,null,0,d.a,[[2,g.l],a.k],null,null),(l()(),a.Na(71,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,s.L,s.o)),a.Ma(72,49152,null,0,c.L,[a.k],{position:[0,"position"]},null),(l()(),a.bb(-1,0,["Confirmar Password"])),(l()(),a.Na(74,0,null,0,9,"ion-input",[["clearInput",""],["formControlName","confirmPassword"],["maxlength","18"],["placeholder","Repite el password"],["required",""],["type","password"]],[[1,"required",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var e=!0;return"ionChange"===n&&(e=!1!==a.Wa(l,78)._handleInputEvent(u.target.value)&&e),"ionBlur"===n&&(e=!1!==a.Wa(l,78)._handleBlurEvent()&&e),e},s.J,s.m)),a.Ma(75,16384,null,0,e.m,[],{required:[0,"required"]},null),a.Ma(76,540672,null,0,e.f,[],{maxlength:[0,"maxlength"]},null),a.Ya(1024,null,e.g,function(l,n){return[l,n]},[e.m,e.f]),a.Ma(78,16384,null,0,f.a,[a.k],null,null),a.Ya(1024,null,e.h,function(l){return[l]},[f.a]),a.Ma(80,671744,null,0,e.c,[[3,e.a],[6,e.g],[8,null],[6,e.h],[2,e.r]],{name:[0,"name"]},null),a.Ya(2048,null,e.i,null,[e.c]),a.Ma(82,16384,null,0,e.j,[[4,e.i]],null,null),a.Ma(83,49152,null,0,c.E,[a.k],{clearInput:[0,"clearInput"],maxlength:[1,"maxlength"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"]},null),(l()(),a.Ea(16777216,null,0,1,null,U)),a.Ma(85,16384,null,0,h.i,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(86,0,null,null,1,"app-button",[["bgColor","rgba(200, 200, 50, 0.7)"],["fontColor","#fff"],["iconColor","#fff"],["iconName","person-add"],["iconSize","15px"],["title","Registrarme"],["type","submit"]],null,null,null,k.b,k.a)),a.Ma(87,114688,null,0,b.a,[],{bgColor:[0,"bgColor"],title:[1,"title"],type:[2,"type"],disabled:[3,"disabled"],fontColor:[4,"fontColor"],iconName:[5,"iconName"],iconSize:[6,"iconSize"],iconColor:[7,"iconColor"]},null)],function(l,n){var u=n.component;l(n,3,0,"danger"),l(n,10,0,"back","/start"),l(n,11,0,"back"),l(n,12,0,"/start"),l(n,14,0,"arrow-back"),l(n,28,0,u.registerForm),l(n,32,0,""),l(n,37,0,"stacked"),l(n,40,0,""),l(n,44,0,"email"),l(n,47,0,"true","","email","Introduce tu email","","email"),l(n,49,0,u.registerForm.get("email").hasError("email")),l(n,54,0,"stacked"),l(n,57,0,""),l(n,58,0,"18"),l(n,62,0,"password"),l(n,65,0,"","18","Introduce tu password","","password"),l(n,67,0,u.registerForm.get("password").hasError("pattern")),l(n,72,0,"stacked"),l(n,75,0,""),l(n,76,0,"18"),l(n,80,0,"confirmPassword"),l(n,83,0,"","18","Repite el password","","password"),l(n,85,0,null==u.registerForm.controls.confirmPassword.errors?null:u.registerForm.controls.confirmPassword.errors.MatchPassword),l(n,87,0,"rgba(200, 200, 50, 0.7)","Registrarme","submit",u.registerForm.invalid,"#fff","person-add","15px","#fff")},function(l,n){l(n,26,0,a.Wa(n,30).ngClassUntouched,a.Wa(n,30).ngClassTouched,a.Wa(n,30).ngClassPristine,a.Wa(n,30).ngClassDirty,a.Wa(n,30).ngClassValid,a.Wa(n,30).ngClassInvalid,a.Wa(n,30).ngClassPending),l(n,39,0,a.Wa(n,40).required?"":null,a.Wa(n,46).ngClassUntouched,a.Wa(n,46).ngClassTouched,a.Wa(n,46).ngClassPristine,a.Wa(n,46).ngClassDirty,a.Wa(n,46).ngClassValid,a.Wa(n,46).ngClassInvalid,a.Wa(n,46).ngClassPending),l(n,56,0,a.Wa(n,57).required?"":null,a.Wa(n,58).maxlength?a.Wa(n,58).maxlength:null,a.Wa(n,64).ngClassUntouched,a.Wa(n,64).ngClassTouched,a.Wa(n,64).ngClassPristine,a.Wa(n,64).ngClassDirty,a.Wa(n,64).ngClassValid,a.Wa(n,64).ngClassInvalid,a.Wa(n,64).ngClassPending),l(n,74,0,a.Wa(n,75).required?"":null,a.Wa(n,76).maxlength?a.Wa(n,76).maxlength:null,a.Wa(n,82).ngClassUntouched,a.Wa(n,82).ngClassTouched,a.Wa(n,82).ngClassPristine,a.Wa(n,82).ngClassDirty,a.Wa(n,82).ngClassValid,a.Wa(n,82).ngClassInvalid,a.Wa(n,82).ngClassPending)})}var y=a.Ja("app-register",r,function(l){return a.cb(0,[(l()(),a.Na(0,0,null,null,1,"app-register",[],null,null,null,I,v)),a.Ma(1,114688,null,0,r,[M.a,C.a,W.a,e.b],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),P=u("95zI"),x=u("9opb"),q=u("apKv"),E=u("tGuD"),F=u("cyHW"),D=u("aa6e"),Y=u("/J3r"),B=u("P87I"),S=u("12Tz"),_=u("YxxD"),j=u("Da8k"),J=u("V8C+"),R=u("B4/3"),z=u("V/fk");u.d(n,"RegisterPageModuleNgFactory",function(){return K});var K=a.Ka(o,[],function(l){return a.Ta([a.Ua(512,a.j,a.Z,[[8,[i.a,y]],[3,a.j],a.v]),a.Ua(4608,h.k,h.j,[a.s,[2,h.s]]),a.Ua(4608,e.b,e.b,[]),a.Ua(4608,e.q,e.q,[]),a.Ua(4608,P.a,P.a,[a.x,a.g]),a.Ua(4608,x.a,x.a,[P.a,a.j,a.p]),a.Ua(4608,q.a,q.a,[P.a,a.j,a.p]),a.Ua(5120,a.d,function(l){return[E.a(l)]},[F.b]),a.Ua(4608,D.a,D.a,[]),a.Ua(4608,C.a,C.a,[]),a.Ua(4608,F.a,F.a,[]),a.Ua(4608,W.a,W.a,[]),a.Ua(4608,Y.a,Y.a,[]),a.Ua(4608,B.a,B.a,[]),a.Ua(4608,S.a,S.a,[]),a.Ua(4608,m.a,m.a,[h.f,[2,g.l]]),a.Ua(4608,_.a,_.a,[]),a.Ua(4608,j.a,j.a,[]),a.Ua(4608,J.a,J.a,[]),a.Ua(1073742336,h.b,h.b,[]),a.Ua(1073742336,e.o,e.o,[]),a.Ua(1073742336,e.l,e.l,[]),a.Ua(1073742336,e.e,e.e,[]),a.Ua(1073742336,R.a,R.a,[]),a.Ua(1073742336,z.a,z.a,[]),a.Ua(1073742336,g.m,g.m,[[2,g.s],[2,g.l]]),a.Ua(1073742336,o,o,[]),a.Ua(256,F.b,void 0,[]),a.Ua(1024,g.j,function(){return[[{path:"",component:r}]]},[])])})}}]);