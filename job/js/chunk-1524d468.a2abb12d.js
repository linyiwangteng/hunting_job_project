(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1524d468"],{"0546":function(t,a,s){"use strict";var e=s("7e07"),i=s.n(e);i.a},"22de":function(t,a,s){},"2a02":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"apply-container"},[s("h1",[t._v("申请在线报名")]),s("div",[s("div",{staticClass:"per-container"},[s("span",[t._v("申请姓名")]),s("a-input",{staticClass:"input-box",attrs:{placeholder:"请输入联系人姓名"}})],1),s("div",{staticClass:"per-container"},[s("span",[t._v("申请手机号")]),s("a-input",{staticClass:"input-box",attrs:{placeholder:"请输入联系人手机号"}})],1),s("div",{staticClass:"per-container"},[s("span",[t._v("申请课程")]),s("a-select",{staticClass:"input-box",attrs:{defaultValue:"请选择"}},[s("a-select-option",{attrs:{value:"1"}},[t._v("1")]),s("a-select-option",{attrs:{value:"2"}},[t._v("2")]),s("a-select-option",{attrs:{value:"3"}},[t._v("3")])],1)],1),s("div",{staticClass:"per-container"},[s("span",[t._v("申请班级")]),s("a-select",{staticClass:"input-box",attrs:{defaultValue:"请选择"}},[s("a-select-option",{attrs:{value:"1"}},[t._v("1")]),s("a-select-option",{attrs:{value:"2"}},[t._v("2")]),s("a-select-option",{attrs:{value:"3"}},[t._v("3")])],1)],1),s("a-button",{staticClass:"apply-btn"},[t._v("免费报名申请")])],1)])},i=[],c=s("b558"),n=s("9839"),o={components:{Input:c["a"],Select:n["d"]}},l=o,f=(s("0546"),s("2877")),b=Object(f["a"])(l,e,i,!1,null,"2a09ea77",null);a["a"]=b.exports},"5cff":function(t,a,s){"use strict";var e=s("5e78"),i=s.n(e);i.a},"5e78":function(t,a,s){},"7d15":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"intro-detail"},[s("h1",[t._v(t._s(t.zhuanyelInfo.name))]),s("p",{staticStyle:{"margin-bottom":"40px"}},[t._v(t._s(t.zhuanyelInfo.description))]),s("h2",{staticStyle:{"font-size":"18px"}},[t._v(t._s(t.schoolInfo.name))]),s("img",{staticStyle:{display:"block",width:"160px",height:"auto","margin-bottom":"20px"},attrs:{src:t.schoolInfo.logo,alt:""}}),s("h2",[t._v(t._s(t.schoolInfo.typeName)+"地址："+t._s(t.schoolInfo.address))]),s("h2",[t._v("联系人："+t._s(t.schoolInfo.contact))]),s("h2",[t._v("联系电话："+t._s(t.schoolInfo.phone))]),s("span",{staticClass:"baoming",on:{click:t.gobaoming}},[t._v("报名")])]),t._e()])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title"},[s("span",[t._v("专业介绍")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"all-school"},[s("h1",[t._v("全国分校")]),s("div",{staticClass:"school-container"},[s("img",{staticClass:"school-img",attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577388785184&di=c620e89d4a07e85b07f8ea26d49f3ac8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F12%2F20180212023234_kUciF.jpeg",alt:""}}),s("img",{staticClass:"school-img",attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577388785184&di=c620e89d4a07e85b07f8ea26d49f3ac8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F12%2F20180212023234_kUciF.jpeg",alt:""}})])])}],c=s("a380"),n=s("2a02"),o=s("9839"),l=s("365c"),f={data:function(){return{showall:!1,schoolInfo:{},zhuanyelInfo:{}}},mounted:function(){this._getInfoData()},methods:{handleChange:function(){},handleShowall:function(){this.showall=!this.showall},_getInfoData:function(){var t=this,a=this.$route.query,s=a.id,e=a.schoolId;l["a"].majorDetail({id:s}).then((function(a){t.zhuanyelInfo=a.data,t.schoolInfo.typeName="院校",l["a"].orgDetail({id:e}).then((function(a){t.schoolInfo=a.data}))}))},gobaoming:function(){var t=this.schoolInfo,a=t.id,s=t.type;l["a"].baoming({CompanyId:a,Type:s}).then((function(t){console.log(t),1==t.code&&message.success("报名成功")}))}},components:{Intro:c["a"],OnlineApply:n["a"],Select:o["d"]}},b=f,d=(s("5cff"),s("2877")),u=Object(d["a"])(b,e,i,!1,null,"22debcac",null);a["default"]=u.exports},"7e07":function(t,a,s){},"912c":function(t,a,s){"use strict";var e=s("22de"),i=s.n(e);i.a},a380:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"intro-detail"},[s("h1",[t._v(t._s(t.introInfo.name))]),s("p",{staticStyle:{"margin-bottom":"40px"}},[t._v(t._s(t.introInfo.description))]),s("h2",{staticStyle:{"font-size":"18px"}},[t._v(t._s(t.introInfo.name))]),s("img",{staticStyle:{display:"block",width:"160px",height:"auto","margin-bottom":"20px"},attrs:{src:t.introInfo.logo,alt:""}}),s("h2",[t._v(t._s(t.introInfo.typeName)+"地址："+t._s(t.introInfo.address))]),s("h2",[t._v("联系人："+t._s(t.introInfo.contact))]),s("h2",[t._v("联系电话："+t._s(t.introInfo.phone))]),s("span",{staticClass:"baoming",on:{click:t.gobaoming}},[t._v("报名")])])},i=[],c=s("365c"),n=s("f64c"),o={props:{introInfo:{type:Object,default:function(){return{name:"尚德教育",description:"嗨学网致力成为世界一流的互联网教育服务提供商，是中国首家兼具学术研发基因与互联网基因的职业教育培训领先品牌，是目前国内最专业的新锐派远程教育平台。嗨学网的培训课程和服务范围广阔，从职业资格考试的学习培训、技能培训，到与执业相关的就业服务，用户遍及全国各地。目前，嗨学网标准化的课程体系，已成为职业培训在线教育领域的模板。",introImg:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577386455649&di=b306cfa55d5c4f2ef5ac9fdbf62fd327&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577386455649&di=b306cfa55d5c4f2ef5ac9fdbf62fd327&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577386455649&di=b306cfa55d5c4f2ef5ac9fdbf62fd327&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577386455649&di=b306cfa55d5c4f2ef5ac9fdbf62fd327&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577386455649&di=b306cfa55d5c4f2ef5ac9fdbf62fd327&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577386455649&di=b306cfa55d5c4f2ef5ac9fdbf62fd327&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb1cce6f996734bdbb9b3fb9ef7705deabc980e35493b-ysf8BZ_fw658"],address:"黑龙江省哈尔滨×××××××××××××",type:"机构"}}}},methods:{gobaoming:function(){var t=this.introInfo,a=t.id,s=t.type;c["a"].baoming({CompanyId:a,Type:s}).then((function(t){1==t.code?n["a"].success("报名成功"):n["a"].success(t.msg)}))}}},l=o,f=(s("912c"),s("2877")),b=Object(f["a"])(l,e,i,!1,null,null,null);a["a"]=b.exports}}]);
//# sourceMappingURL=chunk-1524d468.a2abb12d.js.map