(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-301d889c"],{1527:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("div",{staticClass:"fl detail-left"},[n("h1",[t._v(t._s(t.news.title))]),n("content",{domProps:{innerHTML:t._s(t.news.contents)}})]),n("div",{staticClass:"fr"},[n("hot-job")],1)])},o=[],r=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),c=n("365c"),a=n("2f62"),s=n("aa82");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={components:{HotJob:s["a"]},data:function(){return{query:{},news:{id:0,title:"",titlePage:null,titleChild:"",author:"",contents:"",infoType:1}}},mounted:function(){this.query=this.$route.query,this._getData(this.query.id)},watch:{$route:function(){this.query=this.$route.query,this._getData(this.query.id)}},methods:l({_getData:function(t){var e=this;c["a"].newsDetail({id:t}).then((function(t){1==t.code&&(e.news=l({},t.data))}))}},Object(a["b"])(["getNewsContent"]))},d=f,p=(n("99c0"),n("2877")),h=Object(p["a"])(d,i,o,!1,null,null,null);e["default"]=h.exports},"88ce":function(t,e,n){"use strict";var i=n("d436"),o=n.n(i);o.a},"99c0":function(t,e,n){"use strict";var i=n("e243"),o=n.n(i);o.a},aa82:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-right"},[n("div",{staticClass:"enter-company"},[n("h1",[t._v("入驻企业 / 院校")]),n("ul",{staticClass:"companyList"},t._l(t.conpanyList,(function(e){return n("li",{key:e.id,on:{click:function(n){return t.goIntroDetail(e.id)}}},[n("span",[n("img",{attrs:{src:e.logo||t.placehoderListImg(),alt:""}})])])})),0)])])},o=[],r=n("365c"),c={data:function(){return{conpanyList:[]}},mounted:function(){this._getCompany()},methods:{goIntroDetail:function(t){location.href="companylist.html#/detail?id=".concat(t)},_getCompany:function(){var t=this;r["a"].organizationList({row:6,type:2,companyType:0}).then((function(e){1==e.code&&(t.conpanyList=e.data)}))}}},a=c,s=(n("88ce"),n("2877")),u=Object(s["a"])(a,i,o,!1,null,null,null);e["a"]=u.exports},d436:function(t,e,n){},e243:function(t,e,n){}}]);
//# sourceMappingURL=chunk-301d889c.6a5541f3.js.map