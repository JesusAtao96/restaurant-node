(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{ggUV:function(i,t,n){"use strict";n.r(t),n.d(t,"IonCol",function(){return a}),n.d(t,"IonGrid",function(){return p}),n.d(t,"IonRow",function(){return l});var e=n("cBjU"),r=n("TJRR"),o=!!(CSS&&CSS.supports&&CSS.supports("--a: 0")),d=["","xs","sm","md","lg","xl"],a=function(){function i(){}return i.prototype.onResize=function(){this.el.forceUpdate()},i.prototype.getColumns=function(i){for(var t,n=0,e=d;n<e.length;n++){var o=e[n],a=Object(r.a)(this.win,o),p=this[i+o.charAt(0).toUpperCase()+o.slice(1)];a&&void 0!==p&&(t=p)}return t},i.prototype.calculateSize=function(){var i=this.getColumns("size");if(i&&""!==i){var t="auto"===i?"auto":o?"calc(calc("+i+" / var(--ion-grid-columns, 12)) * 100%)":i/12*100+"%";return{flex:"0 0 "+t,width:""+t,"max-width":""+t}}},i.prototype.calculatePosition=function(i,t){var n,e=this.getColumns(i);if(e)return(n={})[t]=o?"calc(calc("+e+" / var(--ion-grid-columns, 12)) * 100%)":e>0&&e<12?e/12*100+"%":"auto",n},i.prototype.calculateOffset=function(){return this.calculatePosition("offset","margin-left")},i.prototype.calculatePull=function(){return this.calculatePosition("pull","right")},i.prototype.calculatePush=function(){return this.calculatePosition("push","left")},i.prototype.hostData=function(){return{style:Object.assign({},this.calculateOffset(),this.calculatePull(),this.calculatePush(),this.calculateSize())}},i.prototype.render=function(){return Object(e.b)("slot",null)},Object.defineProperty(i,"is",{get:function(){return"ion-col"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"properties",{get:function(){return{el:{elementRef:!0},offset:{type:String,attr:"offset"},offsetLg:{type:String,attr:"offset-lg"},offsetMd:{type:String,attr:"offset-md"},offsetSm:{type:String,attr:"offset-sm"},offsetXl:{type:String,attr:"offset-xl"},offsetXs:{type:String,attr:"offset-xs"},pull:{type:String,attr:"pull"},pullLg:{type:String,attr:"pull-lg"},pullMd:{type:String,attr:"pull-md"},pullSm:{type:String,attr:"pull-sm"},pullXl:{type:String,attr:"pull-xl"},pullXs:{type:String,attr:"pull-xs"},push:{type:String,attr:"push"},pushLg:{type:String,attr:"push-lg"},pushMd:{type:String,attr:"push-md"},pushSm:{type:String,attr:"push-sm"},pushXl:{type:String,attr:"push-xl"},pushXs:{type:String,attr:"push-xs"},size:{type:String,attr:"size"},sizeLg:{type:String,attr:"size-lg"},sizeMd:{type:String,attr:"size-md"},sizeSm:{type:String,attr:"size-sm"},sizeXl:{type:String,attr:"size-xl"},sizeXs:{type:String,attr:"size-xs"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"listeners",{get:function(){return[{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return".sc-ion-col-h{padding:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}@media (min-width:576px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}@media (min-width:768px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}@media (min-width:992px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}@media (min-width:1200px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}"},enumerable:!0,configurable:!0}),i}(),p=function(){function i(){this.fixed=!1}return i.prototype.hostData=function(){return{class:{"grid-fixed":this.fixed}}},i.prototype.render=function(){return Object(e.b)("slot",null)},Object.defineProperty(i,"is",{get:function(){return"ion-grid"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"properties",{get:function(){return{fixed:{type:Boolean,attr:"fixed"}}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return".sc-ion-grid-h{padding:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));margin-left:auto;margin-right:auto;display:block}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-xs,var(--ion-grid-width,100%));max-width:100%}@media (min-width:576px){.sc-ion-grid-h{padding:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-sm,var(--ion-grid-width,540px))}}@media (min-width:768px){.sc-ion-grid-h{padding:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-md,var(--ion-grid-width,720px))}}@media (min-width:992px){.sc-ion-grid-h{padding:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-lg,var(--ion-grid-width,960px))}}@media (min-width:1200px){.sc-ion-grid-h{padding:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px))}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-xl,var(--ion-grid-width,1140px))}}[no-padding].sc-ion-grid-h{padding:0}.sc-ion-grid-h[no-padding] .sc-ion-grid-s > ion-col{padding:0}"},enumerable:!0,configurable:!0}),i}(),l=function(){function i(){}return i.prototype.render=function(){return Object(e.b)("slot",null)},Object.defineProperty(i,"is",{get:function(){return"ion-row"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return".sc-ion-row-h{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"},enumerable:!0,configurable:!0}),i}()}}]);