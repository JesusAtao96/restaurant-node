(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"hm/M":function(o,t,e){"use strict";e.r(t),e.d(t,"IonBackdrop",function(){return a});var n=e("gfhn"),r=e("TJRR"),a=function(){function o(){this.lastClick=-1e4,this.blocker=n.a.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return o.prototype.componentDidLoad=function(){this.stopPropagation&&this.blocker.block()},o.prototype.componentDidUnload=function(){this.blocker.destroy()},o.prototype.onTouchStart=function(o){this.lastClick=Object(r.c)(o),this.emitTap(o)},o.prototype.onMouseDown=function(o){this.lastClick<Object(r.c)(o)-2500&&this.emitTap(o)},o.prototype.emitTap=function(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},o.prototype.hostData=function(){return{tabindex:"-1",class:{"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}}},Object.defineProperty(o,"is",{get:function(){return"ion-backdrop"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"properties",{get:function(){return{doc:{context:"document"},stopPropagation:{type:Boolean,attr:"stop-propagation"},tappable:{type:Boolean,attr:"tappable"},visible:{type:Boolean,attr:"visible"}}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"events",{get:function(){return[{name:"ionBackdropTap",method:"ionBackdropTap",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(o,"listeners",{get:function(){return[{name:"touchstart",method:"onTouchStart",capture:!0},{name:"click",method:"onMouseDown",capture:!0},{name:"mousedown",method:"onMouseDown",capture:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return".sc-ion-backdrop-ios-h{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}.backdrop-hide.sc-ion-backdrop-ios-h{background:0 0}.backdrop-no-tappable.sc-ion-backdrop-ios-h{cursor:auto}.sc-ion-backdrop-ios-h{background-color:var(--ion-backdrop-color,#000)}"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),o}()}}]);