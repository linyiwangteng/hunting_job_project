<template>
  <div class="persion-center-container">
    <div class="mr-myresume-left">
      <div class="myresume">
        <div class="basic" id="baseInfo">
          <a-upload
            name="formFile"
            listType="picture-card"
            class="avatar-uploader"
            accept=".png, .jpg, .jpeg"
            :showUploadList="false"
            :action="uploadPhoto"
            :beforeUpload="beforeUpload"
            @change="handleChange"
            :headers="geHeader"
          >
            <img v-if="headImg" :src="headImg" alt="avatar" />
            <div v-else>
              <a-icon :type="loading ? 'loading' : 'plus'" />
              <div class="ant-upload-text">上传头像</div>
            </div>
          </a-upload>
          <div class="basic-info">
            <em class="edit-btn" @click="showSelfDesc('selfModal')">
              <i class="icon-icon_resume_editor active-color"></i>编辑
            </em>
            <div class="basic-name-area">
              <p class="basic-name female" v-text="page_name"></p>
              <i class="icon-sex icon-sex__male"></i>
            </div>
            <p class="basic-self">
              <span class="basic-edu">{{ page_gender | genderFilter }}</span>
              <span class="basic-age">&nbsp;/ {{ page_birthday | getAge }}</span>
            </p>
            <p>
              <span class="basic-tel">
                <i class></i>
                <span v-text="page_mobile"></span>
              </span>
              <span class>
                <i class></i>
                <span v-text="page_email"></span>
              </span>
            </p>
            <p>
              <span class="basic-tel">
                <i class></i>
                <span>{{ page_jobWantedStatus | jobStatusFilter }}</span>
              </span>/
              <span class>
                <i class></i>
                <span v-text="page_cityName"></span>
              </span>/
              <span class>
                <i class></i>
                <span v-text="page_expectationOccupation"></span>
              </span>/
              <span class>
                <i class></i>
                <span>{{page_expectationSalary}}K</span>
              </span>
            </p>
            <p>{{page_description}}</p>
          </div>
        </div>
      </div>
      <!-- 工作经历 -->
      <div class="mr-template work-exp" id="workExp">
        <div class="mr-template_title">
          <span>工作经历</span>
          <div class="add-btn" @click="()=>{this.companyId= 0;showSelfDesc('jianliModal')}">
            <i class="icon-icon_resume_add active-color"></i>
            添加
          </div>
        </div>
        <ol class="work-exp_group">
          <li class="work-exp_list" :key="index" v-for="(item, index) in companyWorkList">
            <div class="editor-tool">
              <div class="edit-btn" @click="alertCompanyEdit(item.id,'edit',index)">
                <i class="icon-icon_resume_editor active-color"></i>
                编辑
              </div>
              <div class="del-btn" @click="alertCompanyEdit(item.id,'delete')">
                <i class="icon-icon_resume_delete active-color"></i>
                删除
              </div>
            </div>
            <p
              class="exp-list_time"
            >{{item.startYear}}.{{item.startMonth}}-{{item.endYear}}.{{item.endMonth}}</p>
            <div class="exp-list_top">
              <div class="exp-list_right">
                <strong class="exp-list_title">
                  <span v-text="item.companyName"></span>
                </strong>
              </div>
            </div>
            <div class="exp-list_content">
              <p v-text="item.description"></p>
            </div>
          </li>
        </ol>
      </div>
      <!-- 项目经历 -->
      <div class="mr-template work-exp">
        <div class="mr-template_title">
          <span>项目经历</span>
          <div class="add-btn" @click="()=>{this.projectId = 0;showSelfDesc('projectModal')}">
            <i class="icon-icon_resume_add active-color"></i>
            添加
          </div>
        </div>
        <ol class="work-exp_group">
          <li class="work-exp_list" :key="index" v-for="(item, index) in projectList">
            <div class="editor-tool">
              <div class="edit-btn" @click="alertProjectEdit(item.id,'edit',index)">
                <i class="icon-icon_resume_editor active-color"></i>
                编辑
              </div>
              <div class="del-btn" @click="alertProjectEdit(item.id,'delete')">
                <i class="icon-icon_resume_delete active-color"></i>
                删除
              </div>
            </div>
            <p
              class="exp-list_time"
            >{{item.startYear}}.{{item.startMonth}}-{{item.endYear}}.{{item.endMonth}}</p>
            <div class="exp-list_top">
              <div class="exp-list_right">
                <strong class="exp-list_title">
                  <span v-text="item.projectDescription"></span>
                </strong>
              </div>
            </div>
            <div class="exp-list_content" v-text="item.description"></div>
          </li>
        </ol>
      </div>
      <!-- 教育经历 -->
      <div class="mr-template work-exp">
        <div class="mr-template_title">
          <span>教育经历</span>
          <div class="add-btn" @click="()=>{this.studyId = 0;showSelfDesc('studyModal')}">
            <i class="icon-icon_resume_add active-color"></i>
            添加
          </div>
        </div>
        <ol class="work-exp_group">
          <li class="work-exp_list" :key="item.id" v-for="(item, index) in studyList">
            <div class="editor-tool">
              <div class="edit-btn" @click="alertStudyEdit(item.id,'edit',index)">
                <i class="icon-icon_resume_editor active-color"></i>
                编辑
              </div>
              <div class="del-btn" @click="alertStudyEdit(item.id,'delete')">
                <i class="icon-icon_resume_delete active-color"></i>
                删除
              </div>
            </div>
            <p
              class="exp-list_time"
            >{{item.startYear}}.{{item.startMonth}}-{{item.endYear}}.{{item.endMonth}}</p>
            <div class="exp-list_top">
              <div class="exp-list_right">
                <strong v-text="item.schoolName"></strong>
                <p>{{item.speciality}} / {{item.education}}</p>
              </div>
            </div>
            <div class="exp-list_content" v-text="item.description"></div>
          </li>
        </ol>
      </div>
    </div>
    <div class="mr-myresume-right">
      <div class="right-nav">
        <div class="mr_uploaded clearfixs">
          <p class="mr-upload__title">
            <strong>附件简历</strong>
            <a-upload
              name="formFile"
              listType="text"
              accept=".pdf, .doc, .docx"
              :multiple="false"
              :showUploadList="false"
              :action="uploadJianli"
              :headers="geHeader"
              @change="handlePDFChange"
            >
              <a class="inline upload_add cboxElement" href="javascript:;" title="上传附件简历">添加</a>
            </a-upload>
          </p>
          <!-- <div class="mr_upload_btn">
            <a class="inline" href="#uploadFile" title="上传附件简历">继续添加附件简历</a>
          </div>-->
          <div class="nearbyResumes-group">
            <div class="mr_up_main">
              <span class="mr_up_text">{{ jianliName }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right-nav">
        <div class="scroll-fix">
          <ul class="right-nav__content">
            <li class="right-nav__item" @click="goTouDi(1)" >
              <i class="mr_base_i"></i>
              <span class="mr_m_name">我的院校</span>
            </li>
            <li class="right-nav__item" @click="goTouDi(2)">
              <i class="mr_self_i"></i>
              <span class="mr_m_name">报名机构</span>
            </li>
            <li class="right-nav__item" @click="goTouDi(0)">
              <i class="mr_works_i"></i>
              <span class="mr_m_name">我的投递</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- <hot-job style="width:100%" /> -->
    </div>
    <!-- 基本信息 -->
    <a-modal title="基本信息" v-model="selfModal" :footer="null" @ok="selfModal = false">
      <a-form :form="form" @submit="handleSelfInfoSubmit">
        <a-form-item v-bind="formItemLayout">
          <span slot="label">姓名</span>
          <a-input v-model="name" />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">邮箱</span>
          <a-input v-model="email" />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">生日</span>
          <a-date-picker
            placeholder
            :defaultValue="moment(birthday, 'YYYY-MM-DD')"
            @change="onBirthdayChange"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">姓别</span>
          <a-radio-group v-model="gender" @change="getGenger">
            <a-radio :value="1">男</a-radio>
            <a-radio :value="0">女</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="手机号">
          <a-input v-model="mobile" style="width: 100%"></a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" class="city_set">
          <span slot="label">期望城市</span>
          <a-select placeholder="请选择省份" v-model="activeProvince" @change="getZoneList(item.code)">
            <a-select-option
              :key="item.code"
              :value="item.id"
              v-for="(item) in Province"
            >{{item.name}}</a-select-option>
          </a-select>
          <a-select placeholder="请选择城市" v-model="activeCity" @change="getCityCode">
            <a-select-option :key="item.code" :value="item.id" v-for="(item) in City">{{item.name}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" class="city_set">
          <span slot="label">期望薪资</span>
          <a-input style="width:70%;marginRight:10px" v-model="expectationSalary" type="number"></a-input>
          <span>K(千元)</span>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" class="city_set">
          <span slot="label">期望职业</span>
          <a-select @change="_getjoblist" v-model="expectationIndustry">
            <a-select-option :key="item.id" :value="item.id" v-for="item in jobList">{{item.name}}</a-select-option>
          </a-select>
          <a-select @change="getTwoJobId" v-model="expectationOccupation">
            <a-select-option
              :key="item.id"
              :value="item.id"
              v-for="item in twoJobList"
            >{{item.name}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" class="city_set">
          <span slot="label">求职类型</span>
          <a-select v-model="jobWantedStatus">
            <a-select-option :key="item.id" :value="item.id" v-for="item in getJobType">{{item.val}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="自我描述">
          <a-textarea v-model="description" style="width: 100%"></a-textarea>
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" html-type="submit">保存</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- 添加简历 -->
    <a-modal title="工作经历" v-model="jianliModal" :footer="null" @ok="jianliModal = false">
      <a-form :form="form" @submit="handleWordEdit">
        <a-form-item v-bind="formItemLayout">
          <span slot="label">公司名称</span>
          <a-input v-model="workCompanyName" />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">加入时间</span>
          <a-range-picker
            format="YYYY-MM-DD"
            :disabledDate="disabledDate"
            :value="workDate"
            @change="workDateChange"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="公司描述">
          <a-textarea v-model="workDescription"></a-textarea>
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" html-type="submit">保存</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- 项目经历 -->
    <a-modal title="项目经历" v-model="projectModal" :footer="null" @ok="projectModal = false">
      <a-form :form="form" @submit="handleProjectSubmit">
        <a-form-item v-bind="formItemLayout">
          <span slot="label">项目介绍</span>
          <a-textarea v-model="projectDescription" />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">项目周期</span>
          <a-range-picker
            format="YYYY-MM-DD"
            :disabledDate="disabledDate"
            :value="projectDate"
            @change="projectDateChange"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="职责描述">
          <a-textarea v-model="projectDescriptionMsg"></a-textarea>
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-button type="primary" html-type="submit">保存</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- 教育经历 -->
    <a-modal title="教育经历" v-model="studyModal" :footer="null" @ok="studyModal = false">
      <a-form :form="form" @submit="handleStudySubmit">
        <a-form-item v-bind="formItemLayout">
          <span slot="label">学校名称</span>
          <a-input v-model="schoolName" />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">专业</span>
          <a-textarea v-model="schoolSpeciality" />
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">学历</span>
          <a-select v-model="schoolEducation" @change="e=>this.schoolEducation = e">
            <a-select-option
              :key="index"
              :value="item"
              v-for="(item, index) in ['初中','高中','大专','本科','研究生','博士']"
            >{{item}}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
          <span slot="label">学习时间</span>
          <a-range-picker
            format="YYYY-MM-DD"
            :disabledDate="disabledDate"
            :value="schoolDate"
            @change="schoolDateChange"
          />
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
import { tag, modal, message } from "ant-design-vue";
import { uploadPhoto, uploadJianli } from "@/api/center.js";
import citydata from "@/assets/pca-code.js";
import api from "@/api";
import moment from "moment";
import HotJob from "@/components/HotJob.vue";
// console.log(uploadPhoto);

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  components: {
    HotJob
  },
  filters: {
    genderFilter(type) {
      return type == 1 ? "男" : "女";
    },
    jobStatusFilter(num) {
      // { id: 1, val: "全职" },
      // { id: 2, val: "兼职" },
      // { id: 3, val: "实习" },
      // { id: 4, val: "全/兼职" }
      switch (num) {
        case 1:
          return "全职";
          break;
        case 2:
          return "兼职";
          break;
        case 3:
          return "实习";
          break;
        case 4:
          return "全/兼职";
          break;
        default:
          return "全职";
          break;
      }
    },
    getProvice(id) {},
    getAge(strBirthday) {
      var returnAge;
      var strBirthdayArr = strBirthday.split("-");
      var birthYear = strBirthdayArr[0];
      var birthMonth = strBirthdayArr[1];
      var birthDay = strBirthdayArr[2];

      var d = new Date();
      var nowYear = d.getFullYear();
      var nowMonth = d.getMonth() + 1;
      var nowDay = d.getDate();

      if (nowYear == birthYear) {
        returnAge = 0; //同年 则为0岁
      } else {
        var ageDiff = nowYear - birthYear; //年之差
        if (ageDiff > 0) {
          if (nowMonth == birthMonth) {
            var dayDiff = nowDay - birthDay; //日之差
            if (dayDiff < 0) {
              returnAge = ageDiff - 1;
            } else {
              returnAge = ageDiff;
            }
          } else {
            var monthDiff = nowMonth - birthMonth; //月之差
            if (monthDiff < 0) {
              returnAge = ageDiff - 1;
            } else {
              returnAge = ageDiff;
            }
          }
        } else {
          returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
        }
      }

      return returnAge + "岁"; //返回周岁年龄
    }
  },
  data() {
    return {
      jianliUrl: "",
      jianliName: "",
      moment,
      jianli_id: 0, //简历ID
      companyId: 0, // 编辑还是添加公司 ID
      projectId: 0, // 编辑还是添加项目 ID
      studyId: 0, // 编辑还是添加项目 ID
      Province: [
        {
          name: "",
          code: 0
        }
      ],
      City: [
        {
          name: "",
          code: 0
        }
      ],
      ePrice: [
        "10k",
        "15k",
        "18k",
        "20k",
        "25k",
        "30k",
        "35k",
        "40k",
        "45k",
        "50k"
      ],

      activeProvince: 0,
      activeCity: 0,
      headImg: "", //头像

      // 求职类型
      getJobType: [
        { id: 1, val: "全职" },
        { id: 2, val: "兼职" },
        { id: 3, val: "实习" },
        { id: 4, val: "全/兼职" }
      ],
      province: "",
      city: "",
      jobList: [], //期望职业
      twoJobList: [], //期望职业2
      // 公司列表
      companyWorkList: [],
      // 项目列表
      projectList: [],
      // 教育列表
      studyList: [],
      // 邮箱
      email: "",
      tittle: "",
      //期望职业
      expectationOccupation: "",
      //求值类型
      jobWantedStatus: 1,
      // 期望行业
      expectationIndustry: "",
      //薪资范围
      expectationSalary: "",
      // 姓名
      name: "",
      cityName: "",
      //性别
      gender: 1,
      //生日
      birthday: moment().format("YYYY-MM-DD"),
      //手机
      mobile: "",

      // 邮箱
      page_email: "",
      page_tittle: "",
      //期望职业
      page_expectationOccupation: "",
      //求值类型
      page_jobWantedStatus: 1,
      // 期望行业
      page_expectationIndustry: "",
      //薪资范围
      page_expectationSalary: "",
      // 姓名
      page_name: "",
      page_cityName: "",
      //性别
      page_gender: 1,
      //生日
      page_birthday: "",
      //手机
      page_mobile: "",
      // 自我评价
      page_description: "",
      page_activeCity: 0,
      page_activeProvince: 0,

      // show
      jianIndex: 0,
      projectIndex: 0,
      studyIndex: 0,
      // 工作经历
      workCompanyName: "",
      workDate: [],
      workDateStr: [],
      workDescription: "",
      // 项目经历
      projectDescription: "",
      projectDescriptionMsg: "",
      projectDate: [],
      projectDateStr: [],
      // 教育经历schoolEducation
      schoolName: "",
      schoolSpeciality: "",
      schoolEducation: "",
      schoolDate: [],
      schoolDateStr: [],

      weight: 0,
      height: 0,
      description: "",
      uploadPhoto, //上传头像URL
      uploadJianli,
      geHeader: {},
      loading: false,
      imageUrl: "",
      imgUrl: DefaultImg,
      selfModal: false,
      confirmDirty: false,
      jianliModal: false, //
      selfHopeModal: false, //求职意向
      projectModal: false, //项目经验
      studyModal: false, //项目经验

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
    this.form = this.$form.createForm(this);
  },
  computed: {},
  mounted() {
    let accessToken = localStorage.getItem("accessToken");
    if (accessToken == null || accessToken == "null") {
      location.href = "login.html";
    } else {
      this.geHeader = {
        Authorization: "Bearer " + accessToken
      };
    }

    this.getZoneList();
    // 期望职来
    this._getjoblist();
  },
  methods: {
    goTouDi(type){
      location.href = `delivery.html?type=${type}`;
    },
    closeModal() {
      this.selfModal = false;
      this.confirmDirty = false;
      this.jianliModal = false; //
      this.selfHopeModal = false; //求职意向
      this.projectModal = false; //项目经验
      this.studyModal = false; //项目经验
    },
    // 编辑工作经历弹窗
    alertCompanyEdit(id, type = "edit", index = 0) {
      this.jianIndex = index;
      this.companyId = id;
      if (type == "delete") {
        // 删除简历
        this.deleteWork(id);
      } else {
        this.jianliModal = true;
        let { companyWorkList } = this;

        let {
          companyName,
          description,
          startYear,
          startMonth,
          endYear,
          endMonth
        } = companyWorkList.find((el, i) => {
          return el.id == id;
        });

        this.workCompanyName = companyName;
        this.workDescription = description;
        this.workDate = [
          moment(`${startYear}/${startMonth}`, "YYYY-MM-DD"),
          moment(`${endYear}/${endMonth}`, "YYYY-MM-DD")
        ];
      }
    },
    // 编辑项目经历弹窗
    alertProjectEdit(id, type = "edit", index = 0) {
      this.projectId = id;
      this.projectIndex = index;
      if (type == "delete") {
        // 删除简历
        this.deleteProject(id);
      } else {
        this.projectModal = true;
        let { projectList } = this;

        let {
          projectDescription,
          description,
          startYear,
          startMonth,
          endYear,
          endMonth
        } = projectList.find((el, i) => {
          return el.id == id;
        });

        this.projectDescription = projectDescription;
        this.projectDescriptionMsg = description;

        this.projectDate = [
          moment(`${startYear}/${startMonth}`, "YYYY-MM-DD"),
          moment(`${endYear}/${endMonth}`, "YYYY-MM-DD")
        ];
      }
    },
    // 编辑教育经历弹窗
    alertStudyEdit(id, type = "edit", index = 0) {
      this.studyId = id;
      this.studyIndex = index;
      if (type == "delete") {
        // 删除简历
        this.deleteStudy(id);
      } else {
        this.studyModal = true;
        let { studyList } = this;

        let {
          schoolName,
          description,
          speciality,
          education,
          startYear,
          startMonth,
          endYear,
          endMonth
        } = studyList.find((el, i) => {
          return el.id == id;
        });

        this.schoolName = schoolName;
        this.schoolDescription = description;
        this.schoolSpeciality = speciality;
        this.schoolEducation = education;

        this.schoolDate = [
          moment(`${startYear}/${startMonth}`, "YYYY-MM-DD"),
          moment(`${endYear}/${endMonth}`, "YYYY-MM-DD")
        ];
      }
    },
    // 初始化数据
    initPageData() {
      // 获取工作经历
      this.getWorkList();
      this.getProjectList();
      this.getStudyList();
    },
    // 删除工作经历
    deleteWork(Id) {
      api
        .workDelete({
          Id
        })
        .then(res => {
          if (res.code == 1) {
            this.$message.success("删除成功");
            this.getWorkList();
          } else {
            this.$message.error("删除失败");
          }
        });
    },
    getTwoJobId(id) {
      this.expectationOccupation = id;
    },
    _getjoblist(id = 0, isDefaultID = false) {
      api
        .joblist({
          parentId: id
        })
        .then(res => {
          if (res.code == 1) {
            if (id == 0) {
              this.jobList = [...res.data];

              this._getjoblist(res.data[0].id);
            } else {
              this.twoJobList = [...res.data];
              if (isDefaultID) {
                getTwoJobId(isDefaultID);
              }
            }
          }
        });
    },
    // 删除教育经历
    deleteStudy(Id) {
      api
        .studyDelete({
          Id
        })
        .then(res => {
          if (res.code == 1) {
            this.$message.success("删除成功");
            this.getStudyList();
          } else {
            this.$message.error("删除失败");
          }
        });
    },
    // 删除工作经历
    deleteProject(Id) {
      api
        .projectDelete({
          Id
        })
        .then(res => {
          if (res.code == 1) {
            this.$message.success("删除成功");
            this.getProjectList();
          } else {
            this.$message.error("删除失败");
          }
        });
    },
    getWorkList() {
      let { jianli_id } = this;
      api
        .workList({
          candidateId: jianli_id
        })
        .then(res => {
          if (res.code == 1) {
            if (Array.isArray(res.data)) {
              this.companyWorkList = [...res.data];
            }
          } else {
            console.error("获取工作经历失败");
          }
        });
    },
    getStudyList() {
      let { jianli_id } = this;
      api
        .studyList({
          candidateId: jianli_id
        })
        .then(res => {
          if (res.code == 1) {
            if (Array.isArray(res.data)) {
              this.studyList = [...res.data];
            }
          } else {
            console.error("获取教育经历失败");
          }
        });
    },
    disabledDate(current) {
      return current > moment().endOf("day");
    },
    // 添加工作经历
    addWord(params) {
      api
        .workAdd({
          ...params
        })
        .then(res => {
          if (res.code == 1) {
            this.$message.success("添加成功");
            this.closeModal();
            this.getWorkList();
          }
        });
    },
    getBaseInfo() {
      api.getBaseInfo({}).then(res => {
        if (res.code == 1) {
          let data = res.data;
          // 邮箱
          this.page_name = data.name;
          this.page_email = data.email;
          this.page_gender = data.gender;
          this.page_birthday = data.birthday;
          this.page_mobile = data.mobile;
          this.jianli_id = data.id;
          this.page_description = data.description;
          this.page_expectationSalary = data.expectationSalary;
          this.page_jobWantedStatus = data.jobWantedStatus;
          this.page_cityName = data.cityName;

          this.page_expectationOccupation = data.occupationName;
          this.page_expectationIndustry = data.industryName;

          this.expectationOccupation = Number(data.expectationOccupation);
          this.expectationIndustry = Number(data.expectationIndustry);

          this._getjoblist(this.expectationIndustry);

          this.activeProvince = data.province;

          this.activeCity = data.city;
          // 设置初始城市
          this.getZoneList(this.findProviceCode(this.activeProvince));

          // 初始化
          this.initPageData();
        }
      });
    },
    getGenger(val) {
      this.gender = val;
    },
    onBirthdayChange(date, dateString) {
      this.birthday = dateString;
    },
    onGetJobType(val) {
      console.log(val);
    },
    editJianli() {
      let {
        jianli_id,
        tittle,
        email,
        expectationSalary,
        name,
        activeCity,
        activeProvince,
        height,
        weight,
        mobile,
        gender,
        description,
        birthday,
        jobWantedStatus,
        expectationIndustry,
        expectationOccupation
      } = this;
      let subData = Object.assign(
        {},
        {
          id: jianli_id,
          tittle: this.formatData(tittle),
          email: this.formatData(email),
          expectationSalary: this.formatData(expectationSalary),
          name: this.formatData(name),
          city: this.formatData(activeCity),
          province: this.formatData(activeProvince),
          height: this.formatData(height),
          weight: this.formatData(weight),
          mobile: this.formatData(mobile),
          gender: this.formatData(gender),
          description: this.formatData(description, true),
          birthday: this.formatData(birthday),
          jobWantedStatus: this.formatData(jobWantedStatus),
          expectationIndustry: this.formatData(expectationIndustry),
          expectationOccupation: this.formatData(expectationOccupation)
        }
      );

      api
        .baseInfo({
          ...subData
        })
        .then(res => {
          if (res.code == 1) {
            this.$message.success("保存成功");
            this.getWorkList();
            this.getBaseInfo();
            this.closeModal();
          } else {
            this.$message.success("保存失败");
          }
        });
    },
    getZoneList(code = 0, isDefaultID = false) {
      api
        .zoneList__all({
          parentCode: code
        })
        .then(res => {
          if (res.code == 1) {
            if (code == 0) {
              this.Province = res.data;
              this.getBaseInfo();
            } else {
              this.City = res.data;
              if (isDefaultID) {
                // setTimeout(e=>{
                this.activeCity = isDefaultID;
                // },1000);
              }
              this.activeProvince = this.Province.filter((el, index) => {
                return el.code == code;
              })[0].id;
            }
          }
        });
    },
    findProviceCode(id) {
      let { Province } = this;
      return Province.filter((el, index) => {
        return el.id == id;
      })[0].code;
    },
    formatData(data, isDay = false) {
      if (data == "") {
        if (isDay) {
          return "0000-00-00";
        }
        return 0;
      } else {
        return data;
      }
    },
    getCityCode(id) {
      this.activeCity = id;
    },
    // 上传图片
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        if (info.file.response.code == 1) {
          this.headImg = info.file.response.data.url;
        } else {
          this.$message.error("上传失败");
        }
      }
    },
    // 上传简历
    handlePDFChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        if (info.file.response.code == 1) {
          this.jianliUrl = info.file.response.data.url;
          this.jianliName = info.file.response.data.fileName;
        } else {
          this.$message.error("上传失败");
        }
      }
    },
    beforeUpload(file) {
      // const isJPG = file.type === "image/jpeg";
      // if (!isJPG) {
      //   this.$message.error("You can only upload JPG file!");
      // }
      // const isLt2M = file.size / 1024 / 1024 < 2;
      // if (!isLt2M) {
      //   this.$message.error("Image must smaller than 2MB!");
      // }
      // return isJPG && isLt2M;
    },
    showSelfDesc(desc, id = 0) {
      this.clearFormText();
      this[desc] = true;
      let {
        name,
        gender,
        mobile,
        email,
        jobWantedStatus,
        expectationSalary,
        cityName,
        companyWorkList,
        projectList,
        studyList
      } = this;

      switch (desc) {
        case "selfModal":
          this.name = this.page_name;
          this.email = this.page_email;
          this.gender = this.page_gender;
          this.birthday = this.page_birthday;
          this.mobile = this.page_mobile;
          this.description = this.page_description;
          this.expectationSalary = this.page_expectationSalary;
          this.jobWantedStatus = this.page_jobWantedStatus;
          this.cityName = this.page_cityName;
          break;
        case "selfHopeModal":
          break;
        default:
          break;
      }
    },

    // 添加编辑工作经历
    workDateChange(date, dateStr) {
      this.workDateStr = dateStr;
      this.workDate = date;
    },
    // 添加编辑项目经历
    projectDateChange(date, dateStr) {
      this.projectDateStr = dateStr;
      this.projectDate = date;
    },
    // 添加编辑教育经历
    schoolDateChange(date, dateStr) {
      this.schoolDateStr = dateStr;
      this.schoolDate = date;
    },

    clearFormText() {
      this.workCompanyName = "";
      this.workDescription = "";
      this.workDateStr = [];
      this.workDate = [];

      this.projectDescription = "";
      this.projectDescriptionMsg = "";
      this.projectDate = [];
      this.projectDateStr = [];

      this.schoolName = "";
      this.schoolSpeciality = "";
      this.schoolEducation = "";
      this.schoolDate = [];
      this.schoolDateStr = [];
    },
    handleWordEdit(e) {
      e.preventDefault();
      let {
        workCompanyName,
        companyId,
        workDescription,
        jianli_id,
        workDateStr
      } = this;

      let newComp = {
        id: companyId,
        CompanyName: workCompanyName,
        Description: workDescription,
        StartYear: Number(moment(workDateStr[0]).format("YYYY")),
        StartMonth: Number(moment(workDateStr[0]).format("MM")),
        EndYear: Number(moment(workDateStr[1]).format("YYYY")),
        EndMonth: Number(moment(workDateStr[1]).format("MM")),
        CandidateID: jianli_id
      };

      this.addWord(newComp);
    },
    //基本信息
    handleSelfInfoSubmit(e) {
      e.preventDefault();
      this.editJianli();
    },
    //项目信息
    handleProjectSubmit(e) {
      e.preventDefault();
      let {
        projectId,
        jianli_id,
        projectDescription,
        projectDescriptionMsg,
        projectDate
      } = this;
      let newComp = {
        id: projectId,
        CandidateId: jianli_id,
        Description: projectDescriptionMsg,
        ProjectDescription: projectDescription,
        StartYear: moment(projectDate[0]).format("YYYY"),
        StartMonth: moment(projectDate[0]).format("MM"),
        EndYear: moment(projectDate[1]).format("YYYY"),
        EndMonth: moment(projectDate[1]).format("MM")
      };
      this.editProject(newComp);
    },
    //教育信息
    handleStudySubmit(e) {
      e.preventDefault();
      let {
        studyId,
        jianli_id,
        schoolName,
        schoolSpeciality,
        schoolEducation,
        schoolDate
      } = this;
      let newComp = {
        id: studyId,
        CandidateID: jianli_id,
        SchoolName: schoolName,
        Speciality: schoolSpeciality,
        Education: schoolEducation,
        StartYear: Number(moment(schoolDate[0]).format("YYYY")),
        StartMonth: Number(moment(schoolDate[0]).format("MM")),
        EndYear: Number(moment(schoolDate[1]).format("YYYY")),
        EndMonth: Number(moment(schoolDate[1]).format("MM"))
      };
      this.editStudy(newComp);
    },
    // 编辑项目
    editDescInfo(e) {
      e.preventDefault();
      this.editJianli();
    },
    // 获取项目列表
    getProjectList() {
      api
        .projectList({
          candidateId: this.jianli_id
        })
        .then(res => {
          if (res.code == 1) {
            if (Array.isArray(res.data)) {
              this.projectList = [...res.data];
            }
          }
        });
    },
    // 项目经验编辑添加
    editProject(params) {
      api
        .projectEdit({
          ...params
        })
        .then(res => {
          if (res.code == 1) {
            this.$message.success("保存成功");
            this.getProjectList();
            this.closeModal();
          } else {
            this.$message.error(res.msg);
          }
        });
    },
    // 教育编辑添加
    editStudy(params) {
      api
        .studyEdit({
          ...params
        })
        .then(res => {
          if (res.code == 1) {
            this.$message.success("保存成功");
            this.getStudyList();
            this.closeModal();
          } else {
            this.$message.error(res.msg);
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
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
  color: #dd0101;
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
  color: #dd0101;
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
  color: #dd0101;
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