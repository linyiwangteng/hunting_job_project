(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70c535f9"],{1276:function(t,e,a){"use strict";var i=a("d784"),r=a("44e7"),s=a("825a"),o=a("1d80"),n=a("4840"),l=a("8aa5"),c=a("50c4"),d=a("14c3"),u=a("9263"),m=a("d039"),f=[].push,p=Math.min,v=4294967295,h=!m((function(){return!RegExp(v,"y")}));i("split",2,(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=String(o(this)),s=void 0===a?v:a>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);var n,l,c,d=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,h=new RegExp(t.source,m+"g");while(n=u.call(h,i)){if(l=h.lastIndex,l>p&&(d.push(i.slice(p,n.index)),n.length>1&&n.index<i.length&&f.apply(d,n.slice(1)),c=n[0].length,p=l,d.length>=s))break;h.lastIndex===n.index&&h.lastIndex++}return p===i.length?!c&&h.test("")||d.push(""):d.push(i.slice(p)),d.length>s?d.slice(0,s):d}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var r=o(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,r,a):i.call(String(r),e,a)},function(t,r){var o=a(i,t,this,r,i!==e);if(o.done)return o.value;var u=s(t),m=String(this),f=n(u,RegExp),b=u.unicode,g=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(h?"y":"g"),_=new f(h?u:"^(?:"+u.source+")",g),y=void 0===r?v:r>>>0;if(0===y)return[];if(0===m.length)return null===d(_,m)?[m]:[];var x=0,C=0,w=[];while(C<m.length){_.lastIndex=h?C:0;var j,I=d(_,h?m:m.slice(C));if(null===I||(j=p(c(_.lastIndex+(h?0:C)),m.length))===x)C=l(m,C,b);else{if(w.push(m.slice(x,C)),w.length===y)return w;for(var S=1;S<=I.length-1;S++)if(w.push(I[S]),w.length===y)return w;C=x=j}}return w.push(m.slice(x)),w}]}),!h)},"14c3":function(t,e,a){var i=a("c6b6"),r=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var s=a.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"25f0":function(t,e,a){"use strict";var i=a("6eeb"),r=a("825a"),s=a("d039"),o=a("ad6d"),n="toString",l=RegExp.prototype,c=l[n],d=s((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),u=c.name!=n;(d||u)&&i(RegExp.prototype,n,(function(){var t=r(this),e=String(t.source),a=t.flags,i=String(void 0===a&&t instanceof RegExp&&!("flags"in l)?o.call(t):a);return"/"+e+"/"+i}),{unsafe:!0})},2909:function(t,e,a){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("e260"),a("d3b7"),a("25f0"),a("3ca3"),a("ddb0");function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){return i(t)||r(t)||s()}a.d(e,"a",(function(){return o}))},"3d27":function(t,e,a){t.exports=a.p+"img/touxiang.ad1713e8.jpg"},"44e7":function(t,e,a){var i=a("861d"),r=a("c6b6"),s=a("b622"),o=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},"4b21":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"persion-center-container"},[i("div",{staticClass:"mr-myresume-left"},[i("div",{staticClass:"myresume"},[i("div",{staticClass:"basic",attrs:{id:"baseInfo"}},[i("a-upload",{staticClass:"avatar-uploader",attrs:{name:"formFile",listType:"picture-card",accept:".png, .jpg, .jpeg",showUploadList:!1,action:e.uploadPhoto,beforeUpload:e.beforeUpload,headers:e.geHeader},on:{change:e.handleChange}},[e.headImg?i("img",{attrs:{src:e.headImg,alt:"avatar"}}):i("div",[i("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),i("div",{staticClass:"ant-upload-text"},[e._v("上传头像")])],1)]),i("div",{staticClass:"basic-info"},[i("em",{staticClass:"edit-btn",on:{click:function(t){return e.showSelfDesc("selfModal")}}},[i("i",{staticClass:"icon-icon_resume_editor active-color"}),e._v("编辑 ")]),i("div",{staticClass:"basic-name-area"},[i("p",{staticClass:"basic-name female",domProps:{textContent:e._s(e.name)}}),i("i",{staticClass:"icon-sex icon-sex__male"})]),i("p",{staticClass:"basic-self"},[i("span",{staticClass:"basic-edu"},[e._v(e._s(e._f("genderFilter")(e.gender)))]),i("span",{staticClass:"basic-age"},[e._v(" / "+e._s(e._f("getAge")(e.birthday)))])]),i("p",[i("span",{staticClass:"basic-tel"},[i("i",{staticClass:"basic-tel_icon"}),i("span",{domProps:{textContent:e._s(e.mobile)}})]),i("span",{staticClass:"basic-email"},[i("i",{staticClass:"basic-email_icon"}),i("span",{domProps:{textContent:e._s(e.email)}})])])])],1)]),i("div",{staticClass:"mr-template per",attrs:{id:"perAbility"}},[e._m(0),i("div",{staticClass:"per-self_content"},[i("div",{staticClass:"per-self_des",domProps:{textContent:e._s(e.description)}}),i("div",{staticClass:"editor-tool"},[i("div",{staticClass:"edit-btn",on:{click:function(t){return e.showSelfDesc("selfDescModal")}}},[i("i",{staticClass:"icon-icon_resume_editor active-color"}),e._v(" 编辑 ")])])])]),i("div",{staticClass:"mr-template work-exp",attrs:{id:"workExp"}},[i("div",{staticClass:"mr-template_title"},[i("span",[e._v("工作经历")]),i("div",{staticClass:"add-btn",on:{click:function(){t.companyId=0,e.showSelfDesc("jianliModal")}}},[i("i",{staticClass:"icon-icon_resume_add active-color"}),e._v(" 添加 ")])]),i("ol",{staticClass:"work-exp_group"},e._l(e.companyWorkList,(function(t,a){return i("li",{key:a,staticClass:"work-exp_list"},[i("div",{staticClass:"editor-tool"},[i("div",{staticClass:"edit-btn",on:{click:function(a){return e.alertCompanyEdit(t.id)}}},[i("i",{staticClass:"icon-icon_resume_editor active-color"}),e._v(" 编辑 ")]),i("div",{staticClass:"del-btn",on:{click:function(a){return e.alertCompanyEdit(t.id,"delete")}}},[i("i",{staticClass:"icon-icon_resume_delete active-color"}),e._v(" 删除 ")])]),i("p",{staticClass:"exp-list_time"},[e._v(e._s(t.startYear)+"."+e._s(t.startMonth)+"-"+e._s(t.endYear)+"."+e._s(t.endMonth))]),i("div",{staticClass:"exp-list_top"},[i("div",{staticClass:"exp-list_right"},[i("strong",{staticClass:"exp-list_title"},[i("span",{domProps:{textContent:e._s(t.companyName)}})])])]),i("div",{staticClass:"exp-list_content"},[i("p",{domProps:{textContent:e._s(t.description)}})])])})),0)]),i("div",{staticClass:"mr-template work-exp"},[i("div",{staticClass:"mr-template_title"},[i("span",[e._v("项目经历")]),i("div",{staticClass:"add-btn",on:{click:function(){t.projectId=0,e.showSelfDesc("projectModal")}}},[i("i",{staticClass:"icon-icon_resume_add active-color"}),e._v(" 添加 ")])]),i("ol",{staticClass:"work-exp_group"},e._l(e.projectList,(function(t,a){return i("li",{key:a,staticClass:"work-exp_list"},[i("div",{staticClass:"editor-tool"},[i("div",{staticClass:"edit-btn",on:{click:function(a){return e.alertProjectEdit(t.id)}}},[i("i",{staticClass:"icon-icon_resume_editor active-color"}),e._v(" 编辑 ")]),i("div",{staticClass:"del-btn",on:{click:function(a){return e.alertProjectEdit(t.id,"delete")}}},[i("i",{staticClass:"icon-icon_resume_delete active-color"}),e._v(" 删除 ")])]),i("p",{staticClass:"exp-list_time"},[e._v(e._s(t.startYear)+"."+e._s(t.startMonth)+"-"+e._s(t.endYear)+"."+e._s(t.endMonth))]),i("div",{staticClass:"exp-list_top"},[i("div",{staticClass:"exp-list_right"},[i("strong",{staticClass:"exp-list_title"},[i("span",{domProps:{textContent:e._s(t.projectDescription)}})])])]),i("div",{staticClass:"exp-list_content",domProps:{textContent:e._s(t.description)}})])})),0)]),i("div",{staticClass:"mr-template work-exp"},[i("div",{staticClass:"mr-template_title"},[i("span",[e._v("教育经历")]),i("div",{staticClass:"add-btn",on:{click:function(){t.studyId=0,e.showSelfDesc("studyModal")}}},[i("i",{staticClass:"icon-icon_resume_add active-color"}),e._v(" 添加 ")])]),i("ol",{staticClass:"work-exp_group"},e._l(e.studyList,(function(t,a){return i("li",{key:a,staticClass:"work-exp_list"},[i("div",{staticClass:"editor-tool"},[i("div",{staticClass:"edit-btn",on:{click:function(a){return e.alertProjectEdit(t.id)}}},[i("i",{staticClass:"icon-icon_resume_editor active-color"}),e._v(" 编辑 ")]),i("div",{staticClass:"del-btn",on:{click:function(a){return e.alertProjectEdit(t.id,"delete")}}},[i("i",{staticClass:"icon-icon_resume_delete active-color"}),e._v(" 删除 ")])]),i("p",{staticClass:"exp-list_time"},[e._v(e._s(t.startYear)+"."+e._s(t.startMonth)+"-"+e._s(t.endYear)+"."+e._s(t.endMonth))]),i("div",{staticClass:"exp-list_top"},[i("div",{staticClass:"exp-list_right"},[i("strong",{domProps:{textContent:e._s(t.schoolName)}}),i("p",[e._v(e._s(t.speciality)+" / "+e._s(t.education))])])]),i("div",{staticClass:"exp-list_content",domProps:{textContent:e._s(t.description)}})])})),0)])]),i("div",{staticClass:"mr-myresume-right"},[i("div",{staticClass:"job-objective"},[i("div",{staticClass:"job-objective__title"},[i("p",[e._v("求职意向")]),i("em",{staticClass:"edit-btn",on:{click:function(t){return e.showSelfDesc("selfHopeModal")}}},[i("i",{staticClass:"icon-icon_resume_editor active-color"}),e._v("编辑 ")])]),i("ul",{staticClass:"job-objective__list"},[i("li",{staticClass:"job-objective__type dn"},[i("i"),i("span",[e._v(e._s(e._f("jobStatusFilter")(e.jobWantedStatus)))])]),i("li",{staticClass:"job-objective__salary dn"},[i("i"),i("span",[e._v(e._s(e.expectationSalary)+"k")])])])]),e._m(1)]),i("a-modal",{attrs:{title:"基本信息",footer:null},on:{ok:function(t){e.selfModal=!1}},model:{value:e.selfModal,callback:function(t){e.selfModal=t},expression:"selfModal"}},[i("a-form",{attrs:{form:e.form},on:{submit:e.handleSelfInfoSubmit}},[i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("姓名")]),i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入姓名!",whitespace:!0}]}],expression:"[\n        'name',\n        {\n          rules: [{ required: true, message: '请输入姓名!', whitespace: true }],\n        },\n      ]"}]})],1),i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("邮箱")]),i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"请输入邮箱!",whitespace:!0}]}],expression:"[\n        'email',\n        {\n          rules: [{ required: true, message: '请输入邮箱!', whitespace: true }],\n        },\n      ]"}]})],1),i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("生日")]),i("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["date",{rules:[{type:"object",required:!0,message:"请输入生日!"}]}],expression:"['date', {rules: [{ type: 'object', required: true, message: '请输入生日!' }]} ]"}],attrs:{placeholder:""},on:{change:e.onBirthdayChange}})],1),i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("姓别")]),i("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["gender",{rules:[{required:!0,message:"请选择性别!",whitespace:!0}]}],expression:"[\n        'gender',\n        {\n          rules: [{ required: true, message: '请选择性别!', whitespace: true }],\n        }\n        ]"}],on:{change:e.getGenger},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[i("a-radio",{attrs:{value:"1"}},[e._v("男")]),i("a-radio",{attrs:{value:"0"}},[e._v("女")])],1)],1),i("a-form-item",e._b({attrs:{label:"手机号"}},"a-form-item",e.formItemLayout,!1),[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,message:"请输入手机号!"}]}],expression:"[\n        'mobile',\n        {\n          rules: [{ required: true, message: '请输入手机号!' }],\n        },\n      ]"}],staticStyle:{width:"100%"}},[i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["prefix",{initialValue:"86"}],expression:"['prefix', { initialValue: '86' }]"}],staticStyle:{width:"70px"},attrs:{slot:"addonBefore"},slot:"addonBefore"},[i("a-select-option",{attrs:{value:"86"}},[e._v("+86")]),i("a-select-option",{attrs:{value:"87"}},[e._v("+87")])],1)],1)],1),i("a-form-item",e._b({},"a-form-item",e.tailFormItemLayout,!1),[i("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("保存")])],1)],1)],1),i("a-modal",{attrs:{title:"自我描述",footer:null},on:{ok:function(t){e.selfDescModal=!1}},model:{value:e.selfDescModal,callback:function(t){e.selfDescModal=t},expression:"selfDescModal"}},[i("a-form",{attrs:{layout:"inline",form:e.form},on:{submit:e.editDescInfo}},[i("a-textarea",{staticStyle:{width:"100%",height:"200px"},attrs:{placeholder:"描述"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),i("a-form-item",[i("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("保存")])],1)],1)],1),i("a-modal",{attrs:{title:"工作经历",footer:null},on:{ok:function(t){e.jianliModal=!1}},model:{value:e.jianliModal,callback:function(t){e.jianliModal=t},expression:"jianliModal"}},[i("a-form",{attrs:{form:e.form},on:{submit:e.handleWordEdit}},[i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("公司名称")]),i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["CompanyName",{rules:[{required:!0,message:"请输入公司名称!",whitespace:!0}]}],expression:"[\n        'CompanyName',\n        {\n          rules: [{ required: true, message: '请输入公司名称!', whitespace: true }],\n        },\n      ]"}]})],1),i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("加入时间")]),i("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["date",{rules:[{type:"array",required:!0,message:"请输入在公司的时间!"}]}],expression:"['date', {rules: [{ type: 'array', required: true, message: '请输入在公司的时间!' }]} ]"}],attrs:{format:"YYYY-MM-DD",disabledDate:e.disabledDate}})],1),i("a-form-item",e._b({attrs:{label:"公司描述"}},"a-form-item",e.formItemLayout,!1),[i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Description",{rules:[{required:!0,message:"请输入公司描述!"}]}],expression:"[\n        'Description',\n        {\n          rules: [{ required: true, message: '请输入公司描述!' }],\n        },\n      ]"}]})],1),i("a-form-item",e._b({},"a-form-item",e.tailFormItemLayout,!1),[i("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("保存")])],1)],1)],1),i("a-modal",{attrs:{title:"项目经历",footer:null},on:{ok:function(t){e.projectModal=!1}},model:{value:e.projectModal,callback:function(t){e.projectModal=t},expression:"projectModal"}},[i("a-form",{attrs:{form:e.form},on:{submit:e.handleProjectSubmit}},[i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("项目名称")]),i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["projectName",{rules:[{required:!0,message:"请输入项目名称!",whitespace:!0}]}],expression:"[\n        'projectName',\n        {\n          rules: [{ required: true, message: '请输入项目名称!', whitespace: true }],\n        },\n      ]"}]})],1),i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("项目介绍")]),i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["ProjectDescription",{rules:[{required:!0,message:"请输入项目介绍!",whitespace:!0}]}],expression:"[\n        'ProjectDescription',\n        {\n          rules: [{ required: true, message: '请输入项目介绍!', whitespace: true }],\n        },\n      ]"}]})],1),i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("项目周期")]),i("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["date",{rules:[{type:"array",required:!0,message:"请输入在公司的时间!"}]}],expression:"['date', {rules: [{ type: 'array', required: true, message: '请输入在公司的时间!' }]} ]"}],attrs:{format:"YYYY-MM-DD",disabledDate:e.disabledDate}})],1),i("a-form-item",e._b({attrs:{label:"职责描述"}},"a-form-item",e.formItemLayout,!1),[i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Description",{rules:[{required:!0,message:"请输入职责描述!"}]}],expression:"[\n        'Description',\n        {\n          rules: [{ required: true, message: '请输入职责描述!' }],\n        },\n      ]"}]})],1),i("a-form-item",e._b({},"a-form-item",e.tailFormItemLayout,!1),[i("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("保存")])],1)],1)],1),i("a-modal",{attrs:{title:"教育经历",footer:null},on:{ok:function(t){e.studyModal=!1}},model:{value:e.studyModal,callback:function(t){e.studyModal=t},expression:"studyModal"}},[i("a-form",{attrs:{form:e.form},on:{submit:e.handleStudySubmit}},[i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("学校名称")]),i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["SchoolName",{rules:[{required:!0,message:"请输入学校名称!",whitespace:!0}]}],expression:"[\n        'SchoolName',\n        {\n          rules: [{ required: true, message: '请输入学校名称!', whitespace: true }],\n        },\n      ]"}]})],1),i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("专业")]),i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Speciality",{rules:[{required:!0,message:"请输入专来!",whitespace:!0}]}],expression:"[\n        'Speciality',\n        {\n          rules: [{ required: true, message: '请输入专来!', whitespace: true }],\n        },\n      ]"}]})],1),i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("学历")]),i("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Education",{rules:[{required:!0,message:"请输入学历!",whitespace:!0}]}],expression:"[\n        'Education',\n        {\n          rules: [{ required: true, message: '请输入学历!', whitespace: true }],\n        },\n      ]"}]})],1),i("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("学习时间")]),i("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["date",{rules:[{type:"array",required:!0,message:"请输入学习的时间!"}]}],expression:"['date', {rules: [{ type: 'array', required: true, message: '请输入学习的时间!' }]} ]"}],attrs:{format:"YYYY-MM-DD",disabledDate:e.disabledDate}})],1),i("a-form-item",e._b({},"a-form-item",e.tailFormItemLayout,!1),[i("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("保存")])],1)],1)],1),i("a-modal",{attrs:{title:"求职意向",footer:null},on:{ok:function(t){e.selfHopeModal=!1}},model:{value:e.selfHopeModal,callback:function(t){e.selfHopeModal=t},expression:"selfHopeModal"}},[i("a-form",{attrs:{form:e.form},on:{submit:e.handleGetJobHope}},[i("a-form-item",e._b({staticClass:"city_set"},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("期望城市")]),i("a-select",{attrs:{placeholder:"请选择省份"},on:{change:e.getZoneList}},e._l(e.Province,(function(t,a){return i("a-select-option",{key:t.code,attrs:{value:a}},[e._v(e._s(t.name))])})),1),i("a-select",{attrs:{placeholder:"请选择城市"},on:{change:e.getCityCode}},e._l(e.City,(function(t,a){return i("a-select-option",{key:t.code,attrs:{value:a}},[e._v(e._s(t.name))])})),1)],1),i("a-form-item",e._b({staticClass:"city_set"},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("期望薪资")]),i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["expectationSalary",{rules:[{required:!0,message:"请输入期望薪资!",whitespace:!0}]}],expression:"[\n        'expectationSalary',\n        {\n          rules: [{ required: true, message: '请输入期望薪资!', whitespace: true }],\n        },\n      ]"}],staticStyle:{width:"70%",marginRight:"10px"},attrs:{type:"number"}}),i("span",[e._v("K(千元)")])],1),i("a-form-item",e._b({staticClass:"city_set"},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("期望职业")]),i("a-select",{on:{change:e._getjoblist}},e._l(e.jobList,(function(t){return i("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1),i("a-select",{on:{change:e.getTwoJobId}},e._l(e.twoJobList,(function(t){return i("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1)],1),i("a-form-item",e._b({staticClass:"city_set"},"a-form-item",e.formItemLayout,!1),[i("span",{attrs:{slot:"label"},slot:"label"},[e._v("求职类型")]),i("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["jobWantedStatus",{rules:[{type:"number",required:!0,message:"请选择求职类型",whitespace:!0}]}],expression:"[\n        'jobWantedStatus',\n        {\n          rules: [{ type:'number',required: true, message: '请选择求职类型', whitespace: true }],\n        }\n      ]"}]},e._l(e.getJobType,(function(t){return i("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.val))])})),1)],1),i("a-form-item",e._b({},"a-form-item",e.tailFormItemLayout,!1),[i("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("保存")])],1)],1)],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mr-template_title"},[a("span",[t._v("自我描述")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right-nav"},[a("div",{staticClass:"mr_upload dn"},[a("i",{staticClass:"icon-attachment"}),a("a",{staticClass:"inline cboxElement",attrs:{href:"javascript:;",title:"上传附件简历"}},[t._v("我要上传附件简历")])]),a("div",{staticClass:"mr_uploaded clearfixs"},[a("p",{staticClass:"mr-upload__title"},[a("strong",[t._v("附件简历")]),a("a",{staticClass:"inline upload_add cboxElement",attrs:{href:"#uploadFile",title:"上传附件简历"}},[t._v("添加")])]),a("div",{staticClass:"nearbyResumes-group"},[a("div",{staticClass:"mr_up_main",attrs:{"data-id":"10706726"}},[a("i",{staticClass:"icon-attachment"}),a("a",{staticClass:"mr_up_text",attrs:{title:"下载前端工程师边晓凯.pdf"}},[t._v("前端工程师边晓凯.pdf")]),a("div",{staticClass:"mr_more clearfixs"},[a("ul",{staticClass:"more_action"},[a("li",{staticClass:"preview"},[a("a",{attrs:{target:"_blank",href:"https://www.lagou.com/resume/preview-attach-resume.html?id=10706726&name=前端工程师边晓凯.pdf"}},[t._v("预览")])]),a("li",{staticClass:"download"},[a("a",{attrs:{title:"下载前端工程师边晓凯.pdf"}},[t._v("下载")])]),a("li",{staticClass:"delete",attrs:{"data-lg-webtj-_address_id":"1nvi"}},[t._v("删除")])])])])])]),a("div",{staticClass:"scroll-fix",staticStyle:{top:"0px"}},[a("div",{staticClass:"right-nav__integrity"},[a("div",{staticClass:"mr_top"},[a("span",[a("em",[t._v("简历完整度：")]),a("em",{staticClass:"mr-score"},[t._v("100分")])]),a("a",{staticClass:"active-color",attrs:{href:"#"}},[t._v("预览简历")])]),a("div",{staticClass:"mr_integrity_m"},[a("div",{staticClass:"mr_solid",staticStyle:{width:"250px"}}),a("div",{staticClass:"mr_dashed",staticStyle:{width:"250px"}})])])])])}],s=(a("a4d3"),a("e01a"),a("4de4"),a("b0c0"),a("a9e3"),a("e439"),a("dbb4"),a("b64b"),a("ac1f"),a("1276"),a("159b"),a("ade3")),o=a("2909"),n=a("3d27"),l=a.n(n),c=a("7cba"),d=(a("7835"),a("365c")),u=a("c1df"),m=a.n(u),f=a("3022");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function h(t,e){var a=new FileReader;a.addEventListener("load",(function(){return e(a.result)})),a.readAsDataURL(t)}var b={filters:{genderFilter:function(t){return 1==t?"男":"女"},jobStatusFilter:function(t){switch(t){case 1:return"全职";case 2:return"兼职";case 3:return"实习";case 4:return"全/兼职";default:return"全职"}},getProvice:function(t){},getAge:function(t){var e,a=t.split("-"),i=a[0],r=a[1],s=a[2],o=new Date,n=o.getFullYear(),l=o.getMonth()+1,c=o.getDate();if(n==i)e=0;else{var d=n-i;if(d>0)if(l==r){var u=c-s;e=u<0?d-1:d}else{var m=l-r;e=m<0?d-1:d}else e=-1}return e+"岁"}},data:function(){return{id:0,companyId:0,projectId:0,studyId:0,Province:[{name:"",code:0}],City:[{name:"",code:0}],ePrice:["10k","15k","18k","20k","25k","30k","35k","40k","45k","50k"],activeProvince:0,activeCity:0,headImg:"",getJobType:[{id:1,val:"全职"},{id:2,val:"兼职"},{id:3,val:"实习"},{id:4,val:"全/兼职"}],province:"",city:"",jobList:[],twoJobList:[],companyWorkList:[],projectList:[],studyList:[],email:"",tittle:"",expectationOccupation:"",jobWantedStatus:1,expectationIndustry:"",expectationSalary:"",name:"",gender:1,birthday:"",mobile:"",weight:0,height:0,description:"",uploadPhoto:c["b"],geHeader:{},loading:!1,imageUrl:"",imgUrl:l.a,selfModal:!1,selfDescModal:!1,confirmDirty:!1,jianliModal:!1,selfHopeModal:!1,projectModal:!1,studyModal:!1,desc:[{id:1,desc:"fasdfadfadfaa"}],autoCompleteResult:[],formItemLayout:{labelCol:{xs:{span:12},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16}}},tailFormItemLayout:{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}}}},created:function(){this.form=this.$form.createForm(this,{name:"register"})},computed:{},mounted:function(){var t=localStorage.getItem("accessToken");null==t||"null"==t?location.href="login.html":this.geHeader={Authorization:"Bearer "+t},this.getZoneList(),this._getjoblist()},methods:{closeModal:function(){this.selfModal=!1,this.selfDescModal=!1,this.confirmDirty=!1,this.jianliModal=!1,this.selfHopeModal=!1,this.projectModal=!1,this.studyModal=!1},alertCompanyEdit:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"edit";this.companyId=t,"delete"==e?this.deleteWork(t):this.jianliModal=!0},alertProjectEdit:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"edit";this.projectId=t,"delete"==e?this.deleteProject(t):this.projectModal=!0},alertStudyEdit:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"edit";this.studyId=t,"delete"==e?this.deleteStudy(t):this.studyModal=!0},initPageData:function(){this.getWorkList(),this.getProjectList(),this.getStudyList()},deleteWork:function(t){var e=this;d["a"].workDelete({Id:t}).then((function(t){1==t.code?(e.$message.success("删除成功"),e.getWorkList()):e.$message.error("删除失败")}))},getTwoJobId:function(t){this.expectationOccupation=t},_getjoblist:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;d["a"].joblist({parentId:e}).then((function(a){1==a.code&&(0==e?(t.jobList=Object(o["a"])(a.data),t._getjoblist(a.data[0].id)):t.twoJobList=Object(o["a"])(a.data))}))},deleteStudy:function(t){var e=this;d["a"].studyDelete({Id:t}).then((function(t){1==t.code?(e.$message.success("删除成功"),e.getStudyList()):e.$message.error("删除失败")}))},deleteProject:function(t){var e=this;d["a"].projectDelete({Id:t}).then((function(t){1==t.code?(e.$message.success("删除成功"),e.getProjectList()):e.$message.error("删除失败")}))},getWorkList:function(){var t=this,e=this.id;d["a"].workList({candidateId:e}).then((function(e){1==e.code?Object(f["isArray"])(e.data)&&(t.companyWorkList=Object(o["a"])(e.data)):console.error("获取工作经历失败")}))},getStudyList:function(){var t=this,e=this.id;d["a"].studyList({candidateId:e}).then((function(e){1==e.code?Object(f["isArray"])(e.data)&&(t.studyList=Object(o["a"])(e.data)):console.error("获取教育经历失败")}))},disabledDate:function(t){return t>m()().endOf("day")},addWord:function(t){var e=this;d["a"].workAdd(v({},t)).then((function(t){1==t.code&&(e.$message.success("添加成功"),e.closeModal(),e.getWorkList())}))},handleGetJobHope:function(t){var e=this;t.preventDefault(),this.form.validateFieldsAndScroll((function(t,a){if(!t){var i=a.expectationSalary,r=a.jobWantedStatus;e.jobWantedStatus=r,e.expectationSalary=i,e.editJianli()}}))},getBaseInfo:function(){var t=this;d["a"].getBaseInfo({}).then((function(e){1==e.code&&(t.name=e.data.name,t.email=e.data.email,t.gender=e.data.gender,t.birthday=e.data.birthday,t.mobile=e.data.mobile,t.id=e.data.id,t.description=e.data.description,t.expectationSalary=e.data.expectationSalary,t.initPageData())}))},getGenger:function(t){this.gender=t},onBirthdayChange:function(t,e){this.birthday=e},onGetJobType:function(t){console.log(t)},editJianli:function(){var t=this,e=this.id,a=this.tittle,i=this.email,r=this.expectationSalary,s=this.name,o=this.activeCity,n=this.activeProvince,l=this.height,c=this.weight,u=this.mobile,m=this.gender,f=this.description,p=this.birthday,h=this.jobWantedStatus,b=this.expectationIndustry,g=this.expectationOccupation,_=Object.assign({},{id:e,tittle:this.formatData(a),email:this.formatData(i),expectationSalary:this.formatData(r),name:this.formatData(s),city:this.formatData(o),province:this.formatData(n),height:this.formatData(l),weight:this.formatData(c),mobile:this.formatData(u),gender:this.formatData(m),description:this.formatData(f,!0),birthday:this.formatData(p),jobWantedStatus:this.formatData(h),expectationIndustry:this.formatData(b),expectationOccupation:this.formatData(g)});d["a"].baseInfo(v({},_)).then((function(e){1==e.code?(t.$message.success("保存成功"),t.getWorkList(),t.closeModal()):t.$$message.success("保存失败")}))},getZoneList:function(){var t=arguments,e=this,a=0==arguments.length?{parentCode:0}:{parentCode:this.Province[arguments[0]].code};d["a"].zoneList__all(a).then((function(a){1==a.code&&(0==t.length?(e.Province=a.data,e.getBaseInfo()):(e.City=a.data,e.activeProvince=e.Province[t[0]].id))}))},formatData:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return""==t?e?"0000-00-00":0:t},getCityCode:function(){this.activeCity=this.City[arguments[0]].id},handleChange:function(t){var e=this;"uploading"!==t.file.status?"done"===t.file.status&&h(t.file.originFileObj,(function(t){e.headImg=t,e.loading=!1})):this.loading=!0},beforeUpload:function(t){},showSelfDesc:function(t){console.log(t),this[t]=!0},handleWordEdit:function(t){var e=this;t.preventDefault(),this.form.validateFieldsAndScroll((function(t,a){if(!t){e.companyArray;var i=e.companyId,r=e.id,s={id:i,CompanyName:a.CompanyName,Description:a.Description,StartYear:Number(a.date[0].format("YYYY")),StartMonth:Number(a.date[0].format("MM")),EndYear:Number(a.date[1].format("YYYY")),EndMonth:Number(a.date[1].format("MM")),CandidateID:r};e.addWord(s)}}))},handleSelfInfoSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFieldsAndScroll((function(t,a){if(!t){var i=a.name,r=a.gender,s=a.mobile,o=(a.date,a.email);e.name=i,e.gender=Number(r),e.mobile=s,e.email=o,e.editJianli(0)}}))},handleProjectSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFieldsAndScroll((function(t,a){if(!t){var i=e.projectId,r=e.id,s={id:i,CandidateId:r,Description:a.Description,ProjectDescription:a.ProjectDescription,StartYear:Number(a.date[0].format("YYYY")),StartMonth:Number(a.date[0].format("MM")),EndYear:Number(a.date[1].format("YYYY")),EndMonth:Number(a.date[1].format("MM"))};e.editProject(s)}}))},handleStudySubmit:function(t){var e=this;t.preventDefault(),this.form.validateFieldsAndScroll((function(t,a){if(!t){var i=e.studyId,r=e.id,s={id:i,CandidateID:r,SchoolName:a.SchoolName,Speciality:a.Speciality,Education:a.Education,StartYear:Number(a.date[0].format("YYYY")),StartMonth:Number(a.date[0].format("MM")),EndYear:Number(a.date[1].format("YYYY")),EndMonth:Number(a.date[1].format("MM"))};e.editStudy(s)}}))},editDescInfo:function(t){t.preventDefault(),this.editJianli()},getProjectList:function(){var t=this;d["a"].projectList({candidateId:this.id}).then((function(e){1==e.code&&Object(f["isArray"])(e.data)&&(t.projectList=Object(o["a"])(e.data))}))},editProject:function(t){var e=this;d["a"].projectEdit(v({},t)).then((function(t){1==t.code?(e.$message.success("保存成功"),e.getProjectList(),e.closeModal()):e.$message.error(t.msg)}))},editStudy:function(t){var e=this;d["a"].studyEdit(v({},t)).then((function(t){1==t.code?(e.$message.success("保存成功"),e.getStudyList(),e.closeModal()):e.$message.error(t.msg)}))}}},g=b,_=(a("dd9f"),a("2877")),y=Object(_["a"])(g,i,r,!1,null,"f1bb815e",null);e["default"]=y.exports},"4df4":function(t,e,a){"use strict";var i=a("f8c2"),r=a("7b0b"),s=a("9bdd"),o=a("e95a"),n=a("50c4"),l=a("8418"),c=a("35a1");t.exports=function(t){var e,a,d,u,m,f=r(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,b=void 0!==h,g=0,_=c(f);if(b&&(h=i(h,v>2?arguments[2]:void 0,2)),void 0==_||p==Array&&o(_))for(e=n(f.length),a=new p(e);e>g;g++)l(a,g,b?h(f[g],g):f[g]);else for(u=_.call(f),m=u.next,a=new p;!(d=m.call(u)).done;g++)l(a,g,b?s(u,h,[d.value,g],!0):d.value);return a.length=g,a}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),r=a("5899"),s="["+r+"]",o=RegExp("^"+s+s+"*"),n=RegExp(s+s+"*$"),l=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(n,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,a){var i=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var s,o;return r&&"function"==typeof(s=e.constructor)&&s!==a&&i(o=s.prototype)&&o!==a.prototype&&r(t,o),t}},7971:function(t,e,a){},"8aa5":function(t,e,a){"use strict";var i=a("6547").charAt;t.exports=function(t,e,a){return e+(a?i(t,e).length:1)}},9263:function(t,e,a){"use strict";var i=a("ad6d"),r=a("9f7f"),s=RegExp.prototype.exec,o=String.prototype.replace,n=s,l=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],u=l||d||c;u&&(n=function(t){var e,a,r,n,u=this,m=c&&u.sticky,f=i.call(u),p=u.source,v=0,h=t;return m&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),h=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,v++),a=new RegExp("^(?:"+p+")",f)),d&&(a=new RegExp("^"+p+"$(?!\\s)",f)),l&&(e=u.lastIndex),r=s.call(m?a:u,h),m?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:l&&r&&(u.lastIndex=u.global?r.index+r[0].length:e),d&&r&&r.length>1&&o.call(r[0],a,(function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(r[n]=void 0)})),r}),t.exports=n},"9f7f":function(t,e,a){"use strict";var i=a("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a630:function(t,e,a){var i=a("23e7"),r=a("4df4"),s=a("1c7e"),o=!s((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:o},{from:r})},a9e3:function(t,e,a){"use strict";var i=a("83ab"),r=a("da84"),s=a("94ca"),o=a("6eeb"),n=a("5135"),l=a("c6b6"),c=a("7156"),d=a("c04e"),u=a("d039"),m=a("7c73"),f=a("241c").f,p=a("06cf").f,v=a("9bf2").f,h=a("58a8").trim,b="Number",g=r[b],_=g.prototype,y=l(m(_))==b,x=function(t){var e,a,i,r,s,o,n,l,c=d(t,!1);if("string"==typeof c&&c.length>2)if(c=h(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(s=c.slice(2),o=s.length,n=0;n<o;n++)if(l=s.charCodeAt(n),l<48||l>r)return NaN;return parseInt(s,i)}return+c};if(s(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var C,w=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof w&&(y?u((function(){_.valueOf.call(a)})):l(a)!=b)?c(new g(x(e)),a,w):x(e)},j=i?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;j.length>I;I++)n(g,C=j[I])&&!n(w,C)&&v(w,C,p(g,C));w.prototype=_,_.constructor=w,o(r,b,w)}},ac1f:function(t,e,a){"use strict";var i=a("23e7"),r=a("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,a){"use strict";var i=a("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,a){var i=a("83ab"),r=a("9bf2").f,s=Function.prototype,o=s.toString,n=/^\s*function ([^ (]*)/,l="name";!i||l in s||r(s,l,{configurable:!0,get:function(){try{return o.call(this).match(n)[1]}catch(t){return""}}})},d784:function(t,e,a){"use strict";var i=a("6eeb"),r=a("d039"),s=a("b622"),o=a("9263"),n=a("9112"),l=s("species"),c=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),u=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,m){var f=s(t),p=!r((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),v=p&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[f]=/./[f]),a.exec=function(){return e=!0,null},a[f](""),!e}));if(!p||!v||"replace"===t&&(!c||!d)||"split"===t&&!u){var h=/./[f],b=a(f,""[t],(function(t,e,a,i,r){return e.exec===o?p&&!r?{done:!0,value:h.call(e,a,i)}:{done:!0,value:t.call(a,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:d}),g=b[0],_=b[1];i(String.prototype,t,g),i(RegExp.prototype,f,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}m&&n(RegExp.prototype[f],"sham",!0)}},dd9f:function(t,e,a){"use strict";var i=a("7971"),r=a.n(i);r.a}}]);
//# sourceMappingURL=chunk-70c535f9.d3d893bf.js.map