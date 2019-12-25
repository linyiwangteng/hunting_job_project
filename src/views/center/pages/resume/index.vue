<template>
  <div class="persion-center-container">
    <div class="mr-myresume-left">
      <div class="myresume">
        <div class="basic" id="baseInfo">
          <div class="basic-photo">
            <img
              class="mr_headimg user-avatar"
              id="userpic"
              src="//www.lgstatic.com/i/image/M00/38/05/Cgp3O1dh_YmAfQWcAAA0yho1ATU51.jpeg"
              width="120"
              height="120"
              alt="头像"
            />
            <img
              class="basic-photo_shadow"
              src="//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/shadow_tx_a482008.png"
              width="119"
              height="119"
            />
          </div>
          <div class="basic-info">
            <em class="edit-btn" @click="showSelfDesc('selfModal')">
              <i class="icon-icon_resume_editor active-color"></i>编辑
            </em>
            <div class="basic-name-area">
              <p class="basic-name female">边晓凯</p>
              <i class="icon-sex icon-sex__male"></i>
            </div>
            <p>
              <span class="basic-company">北京拓课网络科技有限公司</span>
              <span>/</span>
              <span class="basic-job">WEB前端</span>
            </p>
            <p class="basic-self">
              <span class="basic-exp">4年工作经验</span>
              <span class="basic-edu">/ 大专</span>
              <span class="basic-age">/ 26岁</span>
            </p>
            <p>
              <span class="basic-tel">
                <i class="basic-tel_icon"></i>
                <span>17778141896</span>
              </span>
              <span class="basic-email">
                <i class="basic-email_icon"></i>
                <span>bxk0129@163.com</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="mr-template per" id="perAbility">
        <div class="mr-template_title">
          <span>自我描述</span>
        </div>
        <div class="tagboard integrative-tag">
          <!-- <div class="edit-btn">
            <i class="icon-icon_resume_editor active-color"></i>
            编辑
          </div>-->
          <!-- 个人标签 -->
          <!-- <div class="integrative-tag_content">
            <a-tag>责任心</a-tag>
            <a-tag>责任心</a-tag>
            <a-tag>责任心</a-tag>
          </div>-->
        </div>
        <div class="per-self_content">
          <div class="per-self_des">
            <ul>
              <li>
                <p>沉着冷静的我，相信遇到任何困难都会有它的解决办法。</p>
              </li>
              <li>
                <p>喜欢学习一些新的前端技术级框架</p>
              </li>
              <li>
                <p>运用所学技术开发一些项目</p>
              </li>
            </ul>
          </div>
          <div class="editor-tool">
            <div class="edit-btn" @click="showSelfDesc('selfDescModal')">
              <i class="icon-icon_resume_editor active-color"></i>
              编辑
            </div>
          </div>
        </div>
      </div>
      <!-- 工作经历 -->
      <div class="mr-template work-exp" id="workExp">
        <div class="mr-template_title">
          <span>工作经历</span>
          <div class="add-btn" @click="showSelfDesc('jianliModal')">
            <i class="icon-icon_resume_add active-color"></i>
            添加
          </div>
        </div>
        <ol class="work-exp_group">
          <li class="work-exp_list">
            <div class="editor-tool">
              <div class="edit-btn">
                <i class="icon-icon_resume_editor active-color"></i>
                编辑
              </div>
              <div
                class="del-btn"
                data-lg-tj-id="1jit"
                data-lg-tj-no="0005"
                data-lg-tj-cid="idnull"
              >
                <i class="icon-icon_resume_delete active-color"></i>
                删除
              </div>
            </div>
            <p class="exp-list_time">2018.04-至今</p>
            <div class="exp-list_top">
              <img
                src="//www.lgstatic.com/i/image2/M00/1B/C5/CgotOVoDyFqATP28AAAPFZX7li4887.jpg"
                alt="公司Logo"
              />
              <div class="exp-list_right">
                <strong class="exp-list_title">
                  <span>北京拓课网络科技有限公司</span>
                  ／
                  <span>研发部</span>
                </strong>
                <p>WEB前端</p>
              </div>
            </div>
            <div class="tagboard">
              <a-tag>React</a-tag>
              <a-tag>Web前端</a-tag>
            </div>
            <div class="exp-list_content">
              <p>
                <br />
              </p>
              <p>设计、编写可复用的用户界面组件、前端通用组件。&nbsp;</p>
              <p>h5教室系统组件的开发与设计、教室回放播放器的开发。&nbsp;</p>
              <p>与服务器端开发人员进行应用及系统整合，调试网站页面在不同浏览器下的兼容性。&nbsp;</p>
              <p>跟踪前端技术的发展，掌握最新动态和主流技术。</p>
              <p>
                <br />
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
    <div class="mr-myresume-right">
      <div class="job-objective">
        <div class="job-objective__title">
          <p>求职意向</p>
          <em class="edit-btn" @click="showSelfDesc('selfHopeModal')">
            <i class="icon-icon_resume_editor active-color"></i>编辑
          </em>
        </div>
        <ul class="job-objective__list" data-id="3494365">
          <li class="job-objective__name dn">
            <i></i>
            <span title="WEB前端" positiontypefirst="开发|测试|运维类" positiontypesecond="前端开发">WEB前端</span>
          </li>
          <li class="job-objective__type dn">
            <i></i>
            <span title="全职">全职</span>
          </li>
          <li class="job-objective__city dn">
            <i></i>
            <span title="北京">北京</span>
          </li>
          <li class="job-objective__salary dn">
            <i></i>
            <span title="15k-20k">15k-20k</span>
          </li>
          <li class="job-objective__info dn">
            <i></i>

            <span title="暂时不换工作">暂时不换工作</span>

            <span></span>
          </li>
        </ul>
      </div>
      <div class="right-nav">
        <div class="mr_upload dn">
          <i class="icon-attachment"></i>
          <a
            class="inline cboxElement"
            href="#uploadFile"
            title="上传附件简历"
            data-lg-tj-id="1jit"
            data-lg-tj-no="0018"
            data-lg-tj-cid="idnull"
          >我要上传附件简历</a>
        </div>

        <div class="mr_uploaded clearfixs">
          <p class="mr-upload__title">
            <strong>附件简历</strong>
            <a
              data-lg-webtj-_address_id="1nvf"
              class="inline upload_add cboxElement"
              href="#uploadFile"
              title="上传附件简历"
            >添加</a>
          </p>
          <!-- <div class="mr_upload_btn">
            <a class="inline" href="#uploadFile" title="上传附件简历">继续添加附件简历</a>
          </div>-->
          <div class="nearbyResumes-group">
            <div class="mr_up_main" data-id="10706726">
              <i class="icon-attachment"></i>
              <a
                href="https://www.lagou.com/nearBy/downloadResume?id=10706726"
                class="mr_up_text"
                title="下载前端工程师边晓凯.pdf"
              >前端工程师边晓凯.pdf</a>
              <!-- <p></p> -->
              <div class="mr_more clearfixs">
                <ul class="more_action">
                  <li class="preview">
                    <a
                      data-lg-webtj-_address_id="1nvg"
                      target="_blank"
                      href="https://www.lagou.com/resume/preview-attach-resume.html?id=10706726&amp;name=前端工程师边晓凯.pdf"
                    >预览</a>
                  </li>
                  <li class="download">
                    <a
                      data-lg-webtj-_address_id="1nvh"
                      href="https://www.lagou.com/nearBy/downloadResume?id=10706726"
                      title="下载前端工程师边晓凯.pdf"
                    >下载</a>
                  </li>
                  <li class="delete" data-lg-webtj-_address_id="1nvi">删除</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="scroll-fix" style="top: 0px;">
          <div class="right-nav__integrity">
            <div class="mr_top">
              <span>
                <em>简历完整度：</em>
                <em class="mr-score">100分</em>
              </span>
              <a
                class="active-color"
                target="_blank"
                data-lg-tj-id="1jit"
                data-lg-tj-no="0017"
                data-lg-tj-cid="idnull"
                href="https://www.lagou.com/resume/preview.html"
              >预览简历</a>
            </div>
            <div class="mr_integrity_m">
              <div class="mr_solid" style="width: 250px;"></div>
              <div class="mr_dashed" style="width: 250px;"></div>
            </div>
          </div>
          <ul class="right-nav__content">
            <li
              class="right-nav__item active"
              data-id="baseInfo"
              data-lg-tj-id="1jit"
              data-lg-tj-no="0023"
              data-lg-tj-cid="idnull"
            >
              <i class="mr_base_i"></i>
              <span class="mr_m_name">基本信息</span>
            </li>
            <li
              class="right-nav__item"
              data-id="perAbility"
              data-lg-tj-id="1jit"
              data-lg-tj-no="0024"
              data-lg-tj-cid="idnull"
            >
              <i class="mr_self_i"></i>
              <span class="mr_m_name">个人能力</span>
            </li>
            <li
              class="right-nav__item"
              data-id="workExp"
              data-lg-tj-id="1jit"
              data-lg-tj-no="0025"
              data-lg-tj-cid="idnull"
            >
              <div class="editor-tool">
                <em
                  class="add-btn"
                  data-lg-tj-id="1jit"
                  data-lg-tj-no="0026"
                  data-lg-tj-cid="idnull"
                >添加</em>
              </div>
              <i class="mr_works_i"></i>
              <span class="mr_m_name">工作经历</span>
            </li>
            <li
              class="right-nav__item"
              data-id="proExp"
              data-lg-tj-id="1jit"
              data-lg-tj-no="0027"
              data-lg-tj-cid="idnull"
            >
              <div class="editor-tool">
                <em
                  class="add-btn"
                  data-lg-tj-id="1jit"
                  data-lg-tj-no="0028"
                  data-lg-tj-cid="idnull"
                >添加</em>
                <em
                  class="del-btn"
                  data-lg-tj-id="1jit"
                  data-lg-tj-no="0029"
                  data-lg-tj-cid="idnull"
                >删除</em>
              </div>
              <i class="mr_project_i"></i>
              <span class="mr_m_name">项目经验</span>
            </li>
            <li
              class="right-nav__item"
              data-id="eduExp"
              data-lg-tj-id="1jit"
              data-lg-tj-no="0030"
              data-lg-tj-cid="idnull"
            >
              <div class="editor-tool">
                <em
                  class="add-btn"
                  data-lg-tj-id="1jit"
                  data-lg-tj-no="0031"
                  data-lg-tj-cid="idnull"
                >添加</em>
              </div>
              <i class="mr_edu_i"></i>
              <span class="mr_m_name">教育经历</span>
            </li>
            <li
              class="right-nav__item"
              data-id="socialPage"
              data-lg-tj-id="1jit"
              data-lg-tj-no="0032"
              data-lg-tj-cid="idnull"
            >
              <div class="editor-tool">
                <em
                  class="add-btn"
                  data-lg-tj-id="1jit"
                  data-lg-tj-no="0033"
                  data-lg-tj-cid="idnull"
                >添加</em>
                <em
                  class="del-btn dn"
                  data-lg-tj-id="1jit"
                  data-lg-tj-no="0034"
                  data-lg-tj-cid="idnull"
                >删除</em>
              </div>
              <i class="mr_social_account_i"></i>
              <span class="mr_m_name">社交主页</span>
            </li>
            <li class="right-nav__item" data-id="portfolioPage">
              <div class="editor-tool">
                <em
                  class="add-btn"
                  data-lg-tj-id="1jit"
                  data-lg-tj-no="0063"
                  data-lg-tj-cid="idnull"
                >添加</em>
                <em
                  class="del-btn dn"
                  data-lg-tj-id="1jit"
                  data-lg-tj-no="0064"
                  data-lg-tj-cid="idnull"
                >删除</em>
              </div>
              <i class="mr_portfolio_account_i"></i>
              <span class="mr_m_name">图片作品</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 基本信息 -->
    <a-modal title="基本信息" v-model="selfModal" :footer="null" @ok="selfModal = false">
      <a-form :form="form" @submit="handleSelfInfoSubmit">
        <a-form-item v-bind="formItemLayout">
          <span slot="label">姓名</span>
          <a-input
            v-decorator="[
          'username',
          {
            rules: [{ required: true, message: '请输入姓名!', whitespace: true }],
          },
        ]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">生日</span>
          <a-date-picker
            placeholder
            v-decorator="['date', {rules: [{ type: 'array', required: true, message: '请输入生日!' }]} ]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">姓别</span>
          <a-radio-group
            v-decorator="[
          'genger',
          {
            rules: [{ required: true, message: '请选择性别!', whitespace: true }],
          }
          ]"
          >
            <a-radio value="1">男</a-radio>
            <a-radio value="0">女</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="手机号">
          <a-input
            v-decorator="[
          'phone',
          {
            rules: [{ required: true, message: '请输入手机号!' }],
          },
        ]"
            style="width: 100%"
          >
            <a-select
              slot="addonBefore"
              v-decorator="['prefix', { initialValue: '86' }]"
              style="width: 70px"
            >
              <a-select-option value="86">+86</a-select-option>
              <a-select-option value="87">+87</a-select-option>
            </a-select>
          </a-input>
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" html-type="submit">保存</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- 自我描述 -->
    <a-modal title="自我描述" v-model="selfDescModal" :footer="null" @ok="selfDescModal = false">
      <a-form layout="inline" :form="form" @submit="editDescInfo">
        <div class="self_desc_box">
          <a-form-item>
            <a-input
              v-decorator="[
          'desc',
          { rules: [{ type:'string', required: true, message: '请输入描述!' }] },
        ]"
              placeholder="描述"
            >
              <!-- <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" /> -->
            </a-input>
          </a-form-item>
          <ul class="todo-list">
            <li class="desc-item" :key="item.id" v-for="item in desc">{{ item.desc }}</li>
          </ul>
          <a-form-item>
            <a-button type="primary" html-type="submit">添加</a-button>
          </a-form-item>
        </div>
      </a-form>
    </a-modal>
    <!-- 添加简历 -->
    <a-modal title="基本信息" v-model="jianliModal" :footer="null" @ok="jianliModal = false">
      <a-form :form="form" @submit="handleSelfInfoSubmit">
        <a-form-item v-bind="formItemLayout">
          <span slot="label">项目名称</span>
          <a-input
            v-decorator="[
          'projectName',
          {
            rules: [{ required: true, message: '请输入项目名称!', whitespace: true }],
          },
        ]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">公司名称</span>
          <a-input
            v-decorator="[
          'companyName',
          {
            rules: [{ required: true, message: '请输入公司名称!', whitespace: true }],
          },
        ]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">项目周期</span>
          <a-date-picker
            placeholder
            v-decorator="['date', {rules: [{ type: 'array', required: true, message: '请输入项目周期!' }]} ]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="项目描述">
          <a-textarea
            v-decorator="[
          'projectDesc',
          {
            rules: [{ required: true, message: '请输入项目描述!' }],
          },
        ]"
          ></a-textarea>
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" html-type="submit">保存</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- 求职意向 -->
    <a-modal title="求职意向" v-model="selfHopeModal" :footer="null" @ok="selfHopeModal = false">
      <a-form :form="form" @submit="handleSelfInfoSubmit">
        <a-form-item v-bind="formItemLayout">
          <span slot="label">期望职位</span>
          <a-select default-value="1">
            <a-select-option value="1">Option 1</a-select-option>
            <a-select-option value="2">Option 2</a-select-option>
            <a-select-option value="3">Option 3</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">职位类型</span>
          <a-select default-value="1">
            <a-select-option value="1">Option 1</a-select-option>
            <a-select-option value="2">Option 2</a-select-option>
            <a-select-option value="3">Option 3</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">期望城市</span>
          <a-select default-value="1">
            <a-select-option value="1">Option 1</a-select-option>
            <a-select-option value="2">Option 2</a-select-option>
            <a-select-option value="3">Option 3</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">期望薪资</span>
          <a-select default-value="1">
            <a-select-option value="1">Option 1</a-select-option>
            <a-select-option value="2">Option 2</a-select-option>
            <a-select-option value="3">Option 3</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">目前状态</span>
          <a-select default-value="1">
            <a-select-option value="1">Option 1</a-select-option>
            <a-select-option value="2">Option 2</a-select-option>
            <a-select-option value="3">Option 3</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" html-type="submit">保存</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import DefaultImg from "../assets/img/touxiang.jpg";
import { tag, modal } from "ant-design-vue";

export default {
  data() {
    return {
      imgUrl: DefaultImg,
      selfModal: false,
      selfDescModal: false,
      confirmDirty: false,
      jianliModal: false,
      selfHopeModal: false, //求职意向
      desc: [
        {
          id: 1,
          desc: "fasdfadfadfaa"
        }
      ],
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 12 },
          sm: { span: 6 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      }
    };
  },
  created() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  methods: {
    showSelfDesc(desc) {
      console.log(desc);

      this[desc] = true;
    },

    handleSelfInfoSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    editDescInfo(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.desc.push({
            id: this.desc.length + 1,
            desc: values.desc
          });
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Two passwords that you enter is inconsistent!");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
    handleWebsiteChange(value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = [".com", ".org", ".net"].map(
          domain => `${value}${domain}`
        );
      }
      this.autoCompleteResult = autoCompleteResult;
    }
  }
};
</script>
<style lang="less" scoped>
body {
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
}
a {
  color: #000;
}
li {
  list-style: none;
}
ul {
  padding-left: 0;
  margin-bottom: 0;
}
.persion-center-container {
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .basic {
    padding: 50px;
    background: #fafafa;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #e3ebe9;
    display: flex;
  }

  .basic .basic-photo {
    height: 88px;
    width: 88px;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .basic .basic-photo img {
    height: 88px;
    width: 88px;
    position: absolute;
    top: 0;
    border-radius: 50%;
  }

  .basic .basic-photo .basic-photo_shadow {
    display: none;
  }

  .basic .basic-photo:hover .basic-photo_shadow {
    display: block;
  }

  .basic .basic-info {
    position: relative;
    width: 100%;
    margin-left: 20px;
    flex: 1;
  }

  .basic .basic-info .edit-btn {
    position: absolute;
    right: 0;
    top: 0;
    height: 37px;
  }

  .basic .basic-info .basic-name-area {
    overflow: hidden;
    height: 37px;
    margin-bottom: 11px;
  }

  .basic .basic-info .basic-name {
    float: left;
    max-width: 250px;
    font-size: 26px;
    color: #333;
    font-weight: 600;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .basic .basic-info .icon-sex {
    width: 13px;
    height: 13px;
    float: left;
    margin-top: 16px;
    margin-left: 10px;
    background-repeat: no-repeat;
    background-image: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/myresume_new/img/basic-sprite_fa961f7.png);
  }

  .basic .basic-info .icon-sex.icon-sex__male {
    background-position: -54px -117px;
  }

  .basic .basic-info .icon-sex.icon-sex__female {
    background-position: -20px -111px;
  }

  .basic .basic-info .basic-self {
    margin-top: 20px;
  }

  .basic .basic-info p {
    font-size: 14px;
    color: #333;
    line-height: 20px;
    margin-top: 6px;
  }

  .basic .basic-info .basic-tel {
    margin-right: 20px;
  }

  .basic .basic-info .basic-tel span {
    vertical-align: middle;
  }

  .basic .basic-info .basic-email span {
    vertical-align: middle;
  }

  .basic .basic-info .basic-tel_icon {
    width: 11px;
    height: 14px;
    margin-right: 5px;
    background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/myresume_new/img/basic-sprite_fa961f7.png);
    background-position: -88px -116px;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
  }

  .basic .basic-info .basic-email_icon {
    width: 14px;
    height: 11px;
    margin-right: 5px;
    background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/myresume_new/img/basic-sprite_fa961f7.png);
    background-position: -20px -144px;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
  }

  .basic .basic-info .edit-btn {
    position: absolute;
    right: 0;
    top: 0;
    height: 37px;
  }

  .per .tagboard .editor-tool {
    width: 50px;
  }

  .per .per-self_content {
    position: relative;
    padding: 5px 0;
  }

  .per .per-self_content .per-self_des {
    margin-top: 13px;
    font-size: 14px;
    color: #666;
    line-height: 30px;
  }

  .per .per-self_content .per-self_des p {
    margin-top: 0;
  }

  .per .per-self_content .per-self_des ol {
    list-style-type: decimal;
    -webkit-padding-start: 20px;
  }

  .per .per-self_content .per-self_des ul {
    list-style: disc;
    -webkit-padding-start: 20px;
  }

  .per .per-self_content span {
    color: #999;
  }

  .per .per-self_content .editor-tool {
    bottom: 9px;
    top: auto;
    background: #fff;
    width: 50px;
  }

  .per .per-self_content:hover .editor-tool {
    visibility: visible;
  }

  .mr-myresume-left {
    width: 702px;
    margin-bottom: 20px;
    float: left;
  }

  .mr-myresume-left pre {
    white-space: pre-line;
  }

  .mr-myresume-left .myresume {
    border: 1px solid #e3ebe9;
    border-radius: 5px;
  }

  .mr-myresume-left .mr-template {
    padding: 50px 50px 10px;
  }

  .mr-myresume-left .mr-template .mr-template_title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .mr-myresume-left .mr-template .mr-template_title span {
    font-size: 18px;
    color: #333;
    font-weight: 600;
    position: relative;
    margin-left: 10px;
  }

  .mr-myresume-left .mr-template .mr-template_title span:before {
    content: "";
    display: block;
    border-left: 3px solid #00b38a;
    height: 16px;
    width: 3px;
    position: absolute;
    left: -7px;
    top: 50%;
    transform: translateY(-50%);
  }

  .mr-myresume-left .mr-template .mr_md_del {
    right: -9px;
    left: unset;
  }

  .mr-myresume-left .mr-template .mr_md_del .mr_tip_div {
    line-height: 50px;
  }

  .mr-myresume-left .mr-template .mr_md_del .mr_tip_des {
    margin: 39px 0 32px;
  }

  .mr-myresume-left .mr_bottom {
    margin-top: 5px;
  }

  .mr-myresume-left .mr_bottom .mr_bottom_l {
    float: left;
    position: relative;
    cursor: pointer;
  }

  .mr-myresume-left .mr_bottom .mr_bottom_l i {
    display: inline-block;
    margin-right: 10px;
    width: 16px;
    height: 12px;
    background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/icons_mr_0ef4596.png) -90px -140px
      no-repeat;
  }

  .mr-myresume-left .mr_bottom .mr_bottom_l em {
    color: #c5c5c5;
  }

  .mr-myresume-left .mr_bottom .mr_bottom_r {
    float: right;
    text-align: right;
    color: #c6c6c6;
  }

  .mr-myresume-left .mr_bottom .mr_down:hover em {
    color: #333;
  }

  .mr-myresume-left .mr_bottom .mr_down:hover i {
    background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/icons_mr_0ef4596.png) -117px -140px
      no-repeat;
  }

  .mr-myresume-left .mr_bottom .mr_down_tip {
    position: absolute;
    width: 96px;
    top: -120px;
    left: 12px;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    box-shadow: 2px 2px 4px #efefe4;
  }

  .mr-myresume-left .mr_bottom .mr_down_tip i {
    position: absolute;
    background: 0 0;
    border: 8px solid #e7e7e7;
    border-color: #e7e7e7 transparent transparent;
    display: block;
    font-size: 0;
    height: 0;
    width: 0;
    right: 30px;
    bottom: -16px;
  }

  .mr-myresume-left .mr_bottom .mr_down_tip em {
    position: absolute;
    background: 0 0;
    border: 8px solid #e7e7e7;
    border-color: #e7e7e7 transparent transparent;
    display: block;
    font-size: 0;
    height: 0;
    width: 0;
    right: 40px;
    bottom: -15px;
    border-color: #fff transparent transparent;
  }

  .mr-myresume-left .mr_bottom .mr_down_tip li {
    height: 38px;
    line-height: 38px;
  }

  .mr-myresume-left .mr_bottom .mr_down_tip li a {
    display: block;
    text-align: center;
  }

  .mr-myresume-left .mr_bottom .mr_down_tip li.active a {
    background-color: #f4f4f4;
    color: #555;
  }

  .per-self_content {
    padding: 30px 0 30px 20px;
    .per-self_des {
      li {
        list-style: disc;
      }
    }
  }
  .integrative-tag {
    position: relative;
    .edit-btn {
      position: absolute;
      right: 0;
    }
  }
}
.mr-myresume-left .mr-template .mr-template_title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.mr-myresume-left .mr-template .mr-template_title span {
  font-size: 18px;
  color: #333;
  font-weight: 600;
  position: relative;
  margin-left: 10px;
}

.mr-myresume-left .mr-template .mr-template_title span:before {
  content: "";
  display: block;
  border-left: 3px solid #00b38a;
  height: 16px;
  width: 3px;
  position: absolute;
  left: -7px;
  top: 50%;
  transform: translateY(-50%);
}

.mr-myresume-left .mr-template .mr_md_del {
  right: -9px;
  left: unset;
}

.mr-myresume-left .mr-template .mr_md_del .mr_tip_div {
  line-height: 50px;
}

.mr-myresume-left .mr-template .mr_md_del .mr_tip_des {
  margin: 39px 0 32px;
}

.mr-myresume-left .mr_bottom {
  margin-top: 5px;
}

.mr-myresume-left .mr_bottom .mr_bottom_l {
  float: left;
  position: relative;
  cursor: pointer;
}

.mr-myresume-left .mr_bottom .mr_bottom_l i {
  display: inline-block;
  margin-right: 10px;
  width: 16px;
  height: 12px;
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/icons_mr_0ef4596.png) -90px -140px
    no-repeat;
}

.mr-myresume-left .mr_bottom .mr_bottom_l em {
  color: #c5c5c5;
}

.mr-myresume-left .mr_bottom .mr_bottom_r {
  float: right;
  text-align: right;
  color: #c6c6c6;
}

.mr-myresume-left .mr_bottom .mr_down:hover em {
  color: #333;
}

.mr-myresume-left .mr_bottom .mr_down:hover i {
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/icons_mr_0ef4596.png) -117px -140px
    no-repeat;
}

.mr-myresume-left .mr_bottom .mr_down_tip {
  position: absolute;
  width: 96px;
  top: -120px;
  left: 12px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  box-shadow: 2px 2px 4px #efefe4;
}

.mr-myresume-left .mr_bottom .mr_down_tip i {
  position: absolute;
  background: 0 0;
  border: 8px solid #e7e7e7;
  border-color: #e7e7e7 transparent transparent;
  display: block;
  font-size: 0;
  height: 0;
  width: 0;
  right: 30px;
  bottom: -16px;
}

.mr-myresume-left .mr_bottom .mr_down_tip em {
  position: absolute;
  background: 0 0;
  border: 8px solid #e7e7e7;
  border-color: #e7e7e7 transparent transparent;
  display: block;
  font-size: 0;
  height: 0;
  width: 0;
  right: 40px;
  bottom: -15px;
  border-color: #fff transparent transparent;
}

.mr-myresume-left .mr_bottom .mr_down_tip li {
  height: 38px;
  line-height: 38px;
}

.mr-myresume-left .mr_bottom .mr_down_tip li a {
  display: block;
  text-align: center;
}

.mr-myresume-left .mr_bottom .mr_down_tip li.active a {
  background-color: #f4f4f4;
  color: #555;
}

.mr-myresume-right {
  width: 282px;
  float: right;
}

.active-color {
  color: #00b38a;
}

.edit-btn {
  color: #00b38a;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 1;
}

.edit-btn .icon-icon_resume_editor {
  margin-right: 6px;
}

.add-btn {
  color: #00b38a;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 1;
}

.add-btn .icon-icon_resume_add {
  margin-right: 5px;
}

.del-btn {
  color: #00b38a;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 1;
}

.del-btn .icon-icon_resume_delete {
  margin-right: 6px;
}

.del-btn.dn,
.dn {
  display: none;
}
.work-exp .work-exp_list {
  position: relative;
  margin-bottom: 30px;
}

.work-exp .work-exp_list .exp-list_time {
  font-size: 14px;
  color: #666;
  position: absolute;
  right: 0;
}

.work-exp .work-exp_list .exp-list_top {
  display: flex;
  align-items: center;
}

.work-exp .work-exp_list .exp-list_top img {
  width: 46px;
  height: 46px;
  margin-right: 10px;
}

.work-exp .work-exp_list .exp-list_top .exp-list_right {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 46px;
  justify-content: space-between;
}

.work-exp .work-exp_list .exp-list_top .exp-list_right p,
.work-exp .work-exp_list .exp-list_top .exp-list_right strong {
  font-size: 14px;
  color: #333;
}

.work-exp .work-exp_list .exp-list_top .exp-list_right strong {
  font-weight: 600;
  display: flex;
}

.work-exp .work-exp_list .exp-list_top .exp-list_right strong span {
  max-width: 127px;
  height: 20px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.work-exp .work-exp_list .exp-list_top .exp-list_right strong span:first-child {
  max-width: 222px;
}

.work-exp .work-exp_list .tagboard {
  margin: 20px 0 10px;
}

.work-exp .work-exp_list .exp-list_content,
.work-exp .work-exp_list .exp-list_content_highlight {
  font-size: 14px;
  color: #666;
  line-height: 30px;
}

.work-exp .work-exp_list .exp-list_content ol,
.work-exp .work-exp_list .exp-list_content_highlight ol {
  list-style-type: decimal;
  -webkit-padding-start: 20px;
}

.work-exp .work-exp_list .exp-list_content ul,
.work-exp .work-exp_list .exp-list_content_highlight ul {
  list-style: disc;
  -webkit-padding-start: 20px;
}

.work-exp .work-exp_list:hover .editor-tool {
  visibility: visible;
}

.workExpForm .change-title {
  position: absolute;
  right: 20px;
  top: 20px;
}

.workExpForm .mr-input_temp:first-of-type {
  margin-bottom: 10px !important;
}

.workExpForm .edit-wang_wrapper {
  border: 1px solid #d5dadf;
  border-radius: 3px;
  width: 100%;
  max-width: 434px;
  box-sizing: border-box;
}

.workExpForm .check-box {
  width: 100%;
  font-size: 14px;
  color: #555;
  vertical-align: middle;
  cursor: pointer;
  flex: 1;
}

.workExpForm .check-box span {
  padding-left: 2px;
  display: inline-block;
  vertical-align: middle;
}

.workExpForm .check-box:before {
  content: "";
  width: 14px;
  height: 14px;
  border: 1px solid #e8e9eb;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
}

.workExpForm .check-box.check-box_checked:before {
  width: 14px;
  height: 14px;
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/myresume_new/img/sprite_cd72b74.png);
  background-position: -421px -128px;
  background-repeat: no-repeat;
}
.editor-tool {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;
  z-index: 1;
  padding: 2px 3px;
}

.editor-tool .del-btn {
  margin-left: 32px;
}

.mr-template .editor-tool {
  background: #fff;
  width: 160px;
  justify-content: flex-end;
}

// 右侧
.mr-myresume-right {
  width: 282px;
  float: right;
}

.active-color {
  color: #00b38a;
}

.edit-btn {
  color: #00b38a;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 1;
}

.edit-btn .icon-icon_resume_editor {
  margin-right: 6px;
}

.add-btn {
  color: #00b38a;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 1;
}

.add-btn .icon-icon_resume_add {
  margin-right: 5px;
}

.del-btn {
  color: #00b38a;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 1;
}

.del-btn .icon-icon_resume_delete {
  margin-right: 6px;
}

.del-btn.dn,
.dn {
  display: none;
}

.editor-tool {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  visibility: hidden;
  z-index: 1;
  padding: 2px 3px;
}

.editor-tool .del-btn {
  margin-left: 32px;
}

.mr-template .editor-tool {
  background: #fff;
  width: 160px;
  justify-content: flex-end;
}

.tagboard {
  position: relative;
}

.tagboard span {
  color: #999;
}

.tagboard .tagboard-tag {
  font-size: 12px;
  color: #999;
  line-height: 18px;
  padding: 3px 10px;
  border: 1px solid #eaedec;
  border-radius: 100px;
  margin-right: 10px;
}

.mr_md_del,
.mr_md_del_resume {
  position: absolute;
  z-index: 2;
  font-size: 16px;
  left: -9px;
  top: -170px;
  width: 334px;
  background-color: #fff;
  box-shadow: 2px 2px 4px #e7e7e7;
  border: 1px solid #e7e7e7;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

.mr_md_del .mr_ic,
.mr_md_del_resume .mr_ic {
  display: inline-block;
  margin-right: 9px;
  width: 22px;
  height: 24px;
  color: #b6a129;
  text-align: center;
  line-height: 24px;
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/icons_mr_0ef4596.png) -91px -163px
    no-repeat;
}

.mr_md_del .mr_del_tip,
.mr_md_del_resume .mr_del_tip {
  color: #333;
}

.mr_md_del .mr_tip_div,
.mr_md_del_resume .mr_tip_div {
  text-align: center;
}

.mr_md_del p,
.mr_md_del_resume p {
  line-height: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #555;
  text-align: center;
}

.mr_md_del .mr_btn_area,
.mr_md_del_resume .mr_btn_area {
  background: #fafafa;
  padding: 13px 0;
  text-align: center;
}

.mr_md_del .mr_btn_area .mr_del_btn,
.mr_md_del_resume .mr_btn_area .mr_del_btn {
  background: #00b38a;
  border-radius: 28px;
  padding: 11px 25px;
  color: #fff;
  margin-right: 18px;
  font-size: 16px;
  line-height: 1;
}

.mr_md_del .mr_btn_area .mr_del_cel,
.mr_md_del_resume .mr_btn_area .mr_del_cel {
  font-size: 16px;
  color: #333;
  border: 0;
  background: transparent;
}
.job-objective {
  padding: 20px 20px 15px;
  border: 1px solid #f2f2f2;
  border-radius: 1px;
  margin-bottom: 20px;
}

.job-objective .job-objective__title {
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px;
}

.job-objective .job-objective__title p {
  font-size: 16px;
  color: #333;
  font-weight: 600;
}

.job-objective .job-objective__list {
  color: #666;
  font-size: 14px;
  padding: 0 0 0 10px;
}

.job-objective .job-objective__list li {
  margin-bottom: 15px;
  display: flex;
}

.job-objective .job-objective__list li i {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-image: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/icon_jobObj_1c9b4bb.png);
  background-repeat: no-repeat;
  background-size: 128px 256px;
}

.job-objective .job-objective__list .job-objective__name i {
  background-position: -10px -170px;
}

.job-objective .job-objective__list .job-objective__type i {
  background-position: -10px -110px;
}

.job-objective .job-objective__list .job-objective__city i {
  margin-right: 6px;
  background-position: -102px -106px;
}

.job-objective .job-objective__list .job-objective__salary i {
  background-position: -10px -140px;
}

.job-objective .job-objective__list .job-objective__info i {
  background-position: -10px -200px;
}

.basic {
  padding: 50px;
  background: #fafafa;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #e3ebe9;
  display: flex;
}

.basic .basic-photo {
  height: 88px;
  width: 88px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.basic .basic-photo img {
  height: 88px;
  width: 88px;
  position: absolute;
  top: 0;
  border-radius: 50%;
}

.basic .basic-photo .basic-photo_shadow {
  display: none;
}

.basic .basic-photo:hover .basic-photo_shadow {
  display: block;
}

.basic .basic-info {
  position: relative;
  width: 100%;
  margin-left: 20px;
  flex: 1;
}

.basic .basic-info .edit-btn {
  position: absolute;
  right: 0;
  top: 0;
  height: 37px;
}

.basic .basic-info .basic-name-area {
  overflow: hidden;
  height: 37px;
  margin-bottom: 11px;
}

.basic .basic-info .basic-name {
  float: left;
  max-width: 250px;
  font-size: 26px;
  color: #333;
  font-weight: 600;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.basic .basic-info .icon-sex {
  width: 13px;
  height: 13px;
  float: left;
  margin-top: 16px;
  margin-left: 10px;
  background-repeat: no-repeat;
  background-image: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/myresume_new/img/basic-sprite_fa961f7.png);
}

.basic .basic-info .icon-sex.icon-sex__male {
  background-position: -54px -117px;
}

.basic .basic-info .icon-sex.icon-sex__female {
  background-position: -20px -111px;
}

.basic .basic-info .basic-self {
  margin-top: 20px;
}

.basic .basic-info p {
  font-size: 14px;
  color: #333;
  line-height: 20px;
  margin-top: 6px;
}

.basic .basic-info .basic-tel {
  margin-right: 20px;
}

.basic .basic-info .basic-tel span {
  vertical-align: middle;
}

.basic .basic-info .basic-email span {
  vertical-align: middle;
}

.basic .basic-info .basic-tel_icon {
  width: 11px;
  height: 14px;
  margin-right: 5px;
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/myresume_new/img/basic-sprite_fa961f7.png);
  background-position: -88px -116px;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: middle;
}

.basic .basic-info .basic-email_icon {
  width: 14px;
  height: 11px;
  margin-right: 5px;
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/myresume_new/img/basic-sprite_fa961f7.png);
  background-position: -20px -144px;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: middle;
}

@media only screen and (-webkit-min-device-pixel-ratio: 2),
  not all,
  not all,
  not all,
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
  .basic .basic-info .icon-sex.icon-sex__male {
    background-size: 64px 128px;
    background-position: -34px -11px;
  }

  .basic .basic-info .icon-sex.icon-sex__female {
    background-size: 64px 128px;
    background-position: -10px -11px;
  }

  .basic .basic-info .basic-tel_icon {
    background-size: 64px 128px;
    background-position: -34px -34px;
  }

  .basic .basic-info .basic-email_icon {
    background-size: 64px 128px;
    background-position: -10px -34px;
  }
}

.mr-myresume-right {
  width: 282px;
  float: right;
}

.right-nav .mr-upload__title {
  padding: 6px 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right-nav .mr-upload__title strong {
  font-size: 16px;
  color: #333;
  font-weight: 600;
}

.right-nav .mr-upload__title a {
  color: #00b88d;
  margin: 0 10px 0 0;
}

.right-nav .icon-attachment {
  float: left;
  font-size: 20px;
  margin: 3px 15px 0 0;
}

.right-nav .mr_up_text {
  width: 163px;
  height: 21px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  line-height: 27px;
}

.right-nav .mr_upload {
  position: relative;
  height: 79px;
  border: 1px solid #f2f2f2;
  background-color: #fafafa;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin-bottom: 8px !important;
}

.right-nav .mr_upload * {
  vertical-align: middle;
}

.right-nav .mr_upload a {
  cursor: pointer;
}

.right-nav .mr_upload a.inline {
  display: block;
  text-align: center;
  line-height: 79px;
  font-size: 14px;
  color: #666;
}

.right-nav .mr_upload i {
  position: absolute;
  top: 28px;
  left: 58px;
  font-size: 24px;
  margin: 0;
}

.right-nav .mr_uploaded {
  position: relative;
  padding: 0;
  border: 1px solid #f2f2f2;
  background-color: #fafafa;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin-bottom: 20px !important;
  padding: 10px 20px;
  z-index: 5;
}

.right-nav .mr_up_main {
  position: relative;
  width: 230px;
  height: 27px;
  margin: 0 10px;
  padding: 10px 0;
  border-bottom: 1px solid #f2f2f2;
}

.right-nav .mr_up_main a {
  font-size: 14px;
}

.right-nav .mr_md_del_resume p {
  margin: 20px auto;
}

.right-nav .mr_up_main:last-of-type {
  border-bottom: 0;
  padding: 10px 0 0;
}

.right-nav .mr_set_default {
  width: 100%;
  border-top: 1px solid #e6e6e6;
  padding: 7px 0 !important;
  height: 34px;
  background-color: #f2f2f2;
}

.right-nav .mr_set_default .active {
  background-color: #fff;
}

.right-nav .mr_upload_btn {
  width: 100%;
  border-top: 1px solid #e6e6e6;
  height: 34px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-nav .set_default_wrap {
  position: relative;
  cursor: pointer;
  margin: 0 auto !important;
  width: 246px;
  height: 32px;
  border: 1px solid #f1f3e9;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

.right-nav .set_default_wrap .mr_button {
  text-align: left;
  padding-left: 9px;
  height: 32px;
  width: 200px;
  background-color: #f2f2f2;
  font-size: 14px;
  border: 0;
}

.right-nav .set_default_wrap span {
  position: absolute;
  top: 6px;
  right: 2px;
  width: 20px;
  height: 18px;
  border: 1px solid #cdcdcd;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

.right-nav .set_default_wrap .mr_sj {
  position: absolute;
  right: 5px;
  top: 7px;
  border: 5px solid #fff;
  border-color: #d3d3d3 transparent transparent;
  display: block;
  font-size: 0;
  height: 0;
  width: 0;
  transform: rotate(0deg);
}

.right-nav .set_default_wrap.active .mr_button {
  background-color: #fff;
}

.right-nav .set_default_wrap.active span {
  border-color: #fff;
}

.right-nav .set_default_wrap.active .mr_sj {
  border-color: #747474 transparent transparent;
}

.right-nav .set_default_wrap .xl_list {
  top: 34px;
  width: 246px;
}

.right-nav .set_default_wrap .xl_list li {
  padding-left: 9px;
}

.right-nav .mr_del {
  float: right;
  -webkit-transition: all 0.4s ease 0s;
  -moz-transition: all 0.4s ease 0s;
  -ms-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  width: 12px;
  height: 13px;
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/myresume_new/img/del@2x_9e9472b.png)
    no-repeat;
  background-size: contain;
  position: absolute;
  right: 0;
  cursor: pointer;
}

.right-nav .mr_del:hover {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.right-nav .mr_more {
  float: left;
  width: 30px;
  height: 26px;
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/myresume_new/img/more_normal@2x_d67aea1.png)
    no-repeat;
  background-size: contain;
  cursor: pointer;
}

.right-nav .mr_more:hover {
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/myresume_new/img/more_hover@2x_98c9d2d.png)
    no-repeat;
  background-size: contain;
}

.right-nav .mr_more:hover .more_action {
  display: block;
}

.right-nav .more_action {
  width: 72px;
  display: none;
  background: #fff;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid #e3ebe9;
  margin: 20px 0 0 -20px;
  border-radius: 2px;
  z-index: 2;
  position: absolute;
}

.right-nav .more_action li {
  width: 72px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  font-family: HiraginoSansGB-W3, HiraginoSansGB;
  color: #555;
}

.right-nav .more_action li a {
  width: 72px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  font-family: HiraginoSansGB-W3, HiraginoSansGB;
  color: #555;
}

.right-nav .more_action li:hover {
  background: #f4f4f4;
}

.right-nav .action_press {
  background: #ebf9f6 !important;
  color: #02b28a !important;
}

.right-nav .action_press a {
  color: #02b28a !important;
}

.right-nav .scroll-fix__top {
  position: fixed;
  margin-left: 0;
  width: 282px;
  top: 0;
}

.right-nav .scroll-fix__top.scroll-abs__top {
  position: absolute;
}

.right-nav .scroll-fix {
  margin-top: 10px;
}

.right-nav .right-nav__integrity {
  padding: 16px 16px 18px;
  border: 1px solid #f2f2f2;
  background-color: #fafafa;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin-bottom: 18px;
}

.right-nav .right-nav__integrity .mr_top {
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
}

.right-nav .right-nav__integrity .mr_integrity_m {
  position: relative;
  height: 6px;
  background-color: #eee;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

.right-nav .right-nav__integrity .mr_integrity_m .mr_solid {
  position: absolute;
  height: 100%;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  z-index: 3;
  background-color: #00b88d;
}

.right-nav .right-nav__integrity .mr_integrity_m .mr_dashed {
  position: absolute;
  height: 100%;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  z-index: 2;
  background-color: #a6ded1;
}

.right-nav .right-nav__content {
  border: 1px solid #f2f2f2;
}

.right-nav .right-nav__content .right-nav__item {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  height: 50px;
  border-left: 3px solid transparent;
  line-height: 50px;
  margin-left: -1.5px;
  position: relative;
  cursor: pointer;
}

.right-nav .right-nav__content .right-nav__item i {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/icons_mr_0ef4596.png)
    no-repeat;
  margin: 0 15px 0 31px;
}

.right-nav .right-nav__content .right-nav__item .mr_base_i {
  background-position: -24px -117px;
}

.right-nav .right-nav__content .right-nav__item .mr_self_i {
  background-position: -67px -262px;
}

.right-nav .right-nav__content .right-nav__item .mr_works_i {
  background-position: -24px -137px;
}

.right-nav .right-nav__content .right-nav__item .mr_project_i {
  background-position: -67px -177px;
}

.right-nav .right-nav__content .right-nav__item .mr_edu_i {
  background-position: -24px -156px;
}

.right-nav .right-nav__content .right-nav__item .mr_social_account_i {
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/social_account_a5d472f.png)
    no-repeat;
  background-position: -5px -5px;
}

.right-nav .right-nav__content .right-nav__item .mr_portfolio_account_i {
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/myresume_new/img/photo@2x_defa2c7.png)
    no-repeat;
  background-size: contain;
}

.right-nav .right-nav__content .right-nav__item .editor-tool {
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  right: 20px;
}

.right-nav .right-nav__content .right-nav__item .editor-tool .del-btn {
  margin-left: 20px;
}

.right-nav .right-nav__content .right-nav__item.active {
  color: #00b88d;
  border-color: #00b88d;
  border-width: 3px;
}

.right-nav .right-nav__content .right-nav__item.active .mr_base_i {
  background-position: -5px -117px;
}

.right-nav .right-nav__content .right-nav__item.active .mr_self_i {
  background-position: -5px -262px;
}

.right-nav .right-nav__content .right-nav__item.active .mr_works_i {
  background-position: -5px -137px;
}

.right-nav .right-nav__content .right-nav__item.active .mr_project_i {
  background-position: -5px -177px;
}

.right-nav .right-nav__content .right-nav__item.active .mr_edu_i {
  background-position: -5px -156px;
}

.right-nav .right-nav__content .right-nav__item.active .mr_social_account_i {
  background: url(//www.lgstatic.com/lg-www-fed/mycenter/modules/common/img/social_account_a5d472f.png)
    no-repeat;
  background-position: -5px -36px;
}

.right-nav .right-nav__content .right-nav__item:hover {
  background: #fafafa;
}

.right-nav .right-nav__content .right-nav__item:hover .editor-tool {
  visibility: visible;
}
.self_desc_box {
  padding-left: 50px;
}
.todo-list {
  padding: 20px;
  li {
    list-style-type: disc !important;
    padding: 5px;
  }
}
</style>