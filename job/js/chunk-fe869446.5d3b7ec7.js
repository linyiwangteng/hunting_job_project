(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe869446"],{"22de":function(t,n,e){},"2a02":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"apply-container"},[e("h1",[t._v("报名")]),e("div",[e("div",{staticClass:"per-container"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.logo,alt:""}})]),e("div",{staticClass:"name"},[t._v(" "+t._s(t.name)+" ")])]),e("a-button",{staticClass:"apply-btn",on:{click:t.gobaoming}},[t._v("免费报名申请")])],1)])},a=[],i=e("b558"),s=e("9839"),c=e("365c"),r={props:{logo:{required:!1,default:!0},name:{required:!1,default:!0},type:{required:!0,default:0},id:{required:!0,default:0},cID:{required:!0,default:0}},components:{Input:i["a"],Select:s["d"]},methods:{gobaoming:function(){var t=this;c["a"].baoming({CompanyId:this.cID,Type:this.type,RecruitId:this.id}).then((function(n){1==n.code?t.$message.success("报名成功"):t.$message.error(n.msg)}))}}},l=r,u=(e("5fed"),e("2877")),f=Object(u["a"])(l,o,a,!1,null,"77a3c77f",null);n["a"]=f.exports},"30e7":function(t,n,e){"use strict";var o=e("987f"),a=e.n(o);a.a},"5fed":function(t,n,e){"use strict";var o=e("e6b9"),a=e.n(o);a.a},"759e":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("intro",{attrs:{introInfo:t.schoolInfo,id:t.schoolInfo.schoolId,type:2}})],1)},a=[],i=(e("a4d3"),e("e01a"),e("b0c0"),e("a380")),s=e("2a02"),c=e("9839"),r=e("365c"),l={data:function(){return{schoolInfo:{},zhuanyelInfo:{}}},mounted:function(){this._getInfoData()},methods:{handleChange:function(){},_getInfoData:function(){var t=this,n=this.$route.query.id;r["a"].jigouDetail({id:n}).then((function(n){t.zhuanyelInfo={name:n.data.name,description:n.data.description},t.schoolInfo=n.data,t.schoolInfo.typeName="机构"}))},goClassDetail:function(t){this.$router.push("/detail-class?id="+t)}},components:{Intro:i["a"],OnlineApply:s["a"],Select:c["d"]}},u=l,f=(e("30e7"),e("2877")),d=Object(f["a"])(u,o,a,!1,null,"345aaa6a",null);n["default"]=d.exports},"912c":function(t,n,e){"use strict";var o=e("22de"),a=e.n(o);a.a},"987f":function(t,n,e){},a380:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"intro-content"},[e("div",{staticClass:"intro-left"},[e("div",{staticClass:"title"},[e("h1",[t._v(t._s(t.introInfo.name))])]),e("div",{staticClass:"school-desc",staticStyle:{"white-space":"pre-wrap"},domProps:{innerHTML:t._s(t.introInfo.description)}})]),e("div",{staticClass:"intro-right"},[e("div",{staticStyle:{"margin-left":"5px"}},[e("online-apply",{attrs:{logo:t.introInfo.logo,cID:t.introInfo.schoolId,name:t.introInfo.name,type:t.introInfo.type,id:t.introInfo.id}}),e("div",{staticClass:"all-school"},[e("div",{staticClass:"school-container"},[e("h2",[t._v(t._s(t.introInfo.typeName)+"地址："+t._s(t.introInfo.address))]),e("h2",[t._v("联系人："+t._s(t.introInfo.contact))]),e("h2",[t._v("联系电话："+t._s(t.introInfo.phone))])])])],1)])])])},a=[],i=e("365c"),s=e("f64c"),c=e("2a02"),r={name:"intro",components:{OnlineApply:c["a"]},props:{introInfo:{type:Object,default:{}},zhuanyelInfo:{type:Object,default:{}},type:{require:!1},id:{require:!1}},methods:{gobaoming:function(){var t=this.introInfo,n=t.id,e=t.type;i["a"].baoming({CompanyId:n,Type:e}).then((function(t){1==t.code?s["a"].success("报名成功"):s["a"].success(t.msg)}))}}},l=r,u=(e("912c"),e("2877")),f=Object(u["a"])(l,o,a,!1,null,null,null);n["a"]=f.exports},b0c0:function(t,n,e){var o=e("83ab"),a=e("9bf2").f,i=Function.prototype,s=i.toString,c=/^\s*function ([^ (]*)/,r="name";!o||r in i||a(i,r,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(t){return""}}})},e6b9:function(t,n,e){}}]);
//# sourceMappingURL=chunk-fe869446.5d3b7ec7.js.map