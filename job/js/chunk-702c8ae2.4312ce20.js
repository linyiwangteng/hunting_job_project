(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-702c8ae2"],{"22de":function(t,s,a){},"2a02":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"apply-container"},[a("h1",[t._v("报名")]),a("div",[a("div",{staticClass:"per-container"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.logo,alt:""}})]),a("div",{staticClass:"name"},[t._v(" "+t._s(t.name)+" ")])]),a("a-button",{staticClass:"apply-btn",on:{click:t.gobaoming}},[t._v("免费报名申请")])],1)])},e=[],n=a("b558"),c=a("9839"),l=a("365c"),o={props:{logo:{required:!1,default:!0},name:{required:!1,default:!0},type:{required:!0,default:0},id:{required:!0,default:0}},components:{Input:n["a"],Select:c["d"]},methods:{gobaoming:function(){var t=this;l["a"].baoming({CompanyId:this.id,Type:this.type}).then((function(s){1==s.code?t.$message.success("报名成功"):t.$message.error(s.msg)}))}}},r=o,d=(a("f7ac"),a("2877")),p=Object(d["a"])(r,i,e,!1,null,"a34363e8",null);s["a"]=p.exports},"2e20":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("intro"),a("div",{staticClass:"intro-content"},[t._m(0),a("div",{staticClass:"intro-right"},[a("div",{staticStyle:{"margin-left":"5px"}},[a("online-apply"),t._m(1)],1)])])],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"intro-left"},[a("h1",[t._v("班级详情")]),a("div",{staticClass:"class-detail"},[a("span",{staticClass:"left-part"},[a("span",{staticClass:"item"},[a("i",{staticClass:"title"},[t._v("班级：")]),t._v("高级电工班 ")]),a("span",{staticClass:"item"},[a("i",{staticClass:"title"},[t._v("所学科目：")]),t._v("计算机/电工类 ")]),a("span",{staticClass:"item"},[a("i",{staticClass:"title"},[t._v("学费：")]),t._v("¥100-¥200 ")]),a("span",{staticClass:"item"},[a("i",{staticClass:"title"},[t._v("培训时间：")]),t._v("1年 ")]),a("span",{staticClass:"item"},[a("i",{staticClass:"title"},[t._v("培训证书：")]),t._v("证书1 ")]),a("span",{staticClass:"item"},[a("i",{staticClass:"title"},[t._v("开班地址：")]),t._v("北京 ")]),a("span",{staticClass:"item"},[a("i",{staticClass:"title"},[t._v("上课地址：")]),t._v("1233213 ")])]),a("span",{staticClass:"right-part"},[a("span",{staticClass:"item"},[a("i",{staticClass:"title"},[t._v("班级状态：")]),t._v("报名中 ")]),a("span",{staticClass:"item"},[a("i",{staticClass:"title"},[t._v("班级介绍：")]),t._v("报名中报名中报名中报名中报名中报名中报名中报名中报名中报名中报名中 ")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"all-school"},[a("h1",[t._v("全国分校")]),a("div",{staticClass:"school-container"},[a("img",{staticClass:"school-img",attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577388785184&di=c620e89d4a07e85b07f8ea26d49f3ac8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F12%2F20180212023234_kUciF.jpeg",alt:""}}),a("img",{staticClass:"school-img",attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577388785184&di=c620e89d4a07e85b07f8ea26d49f3ac8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F12%2F20180212023234_kUciF.jpeg",alt:""}})])])}],n=a("a380"),c=a("2a02"),l=a("9839"),o={methods:{handleChange:function(){}},components:{Intro:n["a"],OnlineApply:c["a"],Select:l["d"]}},r=o,d=(a("b8e6"),a("2877")),p=Object(d["a"])(r,i,e,!1,null,"5513e534",null);s["default"]=p.exports},"912c":function(t,s,a){"use strict";var i=a("22de"),e=a.n(i);e.a},a380:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"intro-content"},[a("div",{staticClass:"intro-left"},[a("div",{staticClass:"title"},[a("h1",[t._v(t._s(t.introInfo.name))])]),a("div",{staticClass:"school-desc",domProps:{innerHTML:t._s(t.introInfo.description)}})]),a("div",{staticClass:"intro-right"},[a("div",{staticStyle:{"margin-left":"5px"}},[a("online-apply",{attrs:{logo:t.introInfo.logo,name:t.introInfo.name,type:t.type,id:t.id}}),a("div",{staticClass:"all-school"},[a("div",{staticClass:"school-container"},[a("h2",[t._v(t._s(t.introInfo.typeName)+"地址："+t._s(t.introInfo.address))]),a("h2",[t._v("联系人："+t._s(t.introInfo.contact))]),a("h2",[t._v("联系电话："+t._s(t.introInfo.phone))])])])],1)])])])},e=[],n=a("365c"),c=a("f64c"),l=a("2a02"),o={name:"intro",components:{OnlineApply:l["a"]},props:{introInfo:{type:Object,default:{}},zhuanyelInfo:{type:Object,default:{}},type:{require:!1},id:{require:!1}},methods:{gobaoming:function(){var t=this.introInfo,s=t.id,a=t.type;n["a"].baoming({CompanyId:s,Type:a}).then((function(t){1==t.code?c["a"].success("报名成功"):c["a"].success(t.msg)}))}}},r=o,d=(a("912c"),a("2877")),p=Object(d["a"])(r,i,e,!1,null,null,null);s["a"]=p.exports},b8e6:function(t,s,a){"use strict";var i=a("d397"),e=a.n(i);e.a},d397:function(t,s,a){},e6fc:function(t,s,a){},f7ac:function(t,s,a){"use strict";var i=a("e6fc"),e=a.n(i);e.a}}]);
//# sourceMappingURL=chunk-702c8ae2.4312ce20.js.map