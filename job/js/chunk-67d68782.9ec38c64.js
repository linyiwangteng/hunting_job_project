(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67d68782"],{1527:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("h1",[t._v(t._s(t.news.title))]),n("content",{domProps:{innerHTML:t._s(t.news.contents)}})])},i=[],c=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),o=n("365c"),s=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={data:function(){return{query:{},news:{id:0,title:"",titlePage:null,titleChild:"",author:"",contents:"",infoType:1}}},mounted:function(){this.query=this.$route.query,this._getData(this.query.id)},watch:{$route:function(){this.query=this.$route.query,this._getData(this.query.id)}},methods:a({_getData:function(t){var e=this;o["a"].newsDetail({id:t}).then((function(t){1==t.code&&(e.news=a({},t.data))}))}},Object(s["b"])(["getNewsContent"]))},b=l,f=(n("99c0"),n("2877")),d=Object(f["a"])(b,r,i,!1,null,null,null);e["default"]=d.exports},"99c0":function(t,e,n){"use strict";var r=n("e243"),i=n.n(r);i.a},e243:function(t,e,n){}}]);
//# sourceMappingURL=chunk-67d68782.9ec38c64.js.map