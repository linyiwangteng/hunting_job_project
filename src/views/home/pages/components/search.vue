<template>
  <div class="search-box">
    <div class="search-input-box">
      <span class="type-box">
        <template v-for="(item,index) in search_type">
          <span
            class="search-type"
            :key="index"
            :class="search_type_index === index ? 'search-type-active':''"
            @click="handletype(index)"
          >{{item}}</span>
        </template>
      </span>
      <div class="input-box">
        <span class="select-type">
          <!-- <i class="bottom-point"></i> -->
        </span>
        <input type="text" v-model="val" class="search-input" placeholder="搜索职位、公司" />
        <span class="search-btn" @click="goList"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_type: ["职位", "院校", "培训认证"],
      search_type_index: 0, //默认：0/职位
      val: ""
    };
  },
  methods: {
    // 搜索类型
    handletype(index) {
      this.search_type_index = index;
    },
    // 跳转
    goList() {
      switch (this.search_type_index) {
        case 0:
          location.href = "list.html#/?v=" + this.val;
          break;
        case 1:
          location.href = "school.html#/?v=" + this.val;
          break;
        case 2:
          location.href = "organization.html#/?v=" + this.val;
          break;
        default:
          location.href = "list.html#/?v=" + this.val;
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.search-box {
  padding-top: 34px;
  .search-input-box {
    position: relative;
    width: 924px;
    height: 72px;
    padding-top: 33px;
    .type-box {
      position: absolute;
      width: 283px;
      height: 33px;
      top: 0;
      left: 0;
      .search-type {
        display: inline-block;
        width: 93px;
        height: 33px;
        background: url("../../img/search-select-default.png") no-repeat center
          top;
        background-size: 100% auto;
        text-align: center;
        font-size: 15px;
        color: #000000;
        line-height: 34px;
        cursor: pointer;
        &-active {
          background: url("../../img/search-select-active.png") no-repeat center
            top;
          background-size: 100% auto;
        }
      }
    }
    .input-box {
      display: flex;
      justify-content: flex-start;
      width: 913px;
      height: 39px;
      border: 1px solid #ff6700;
      box-sizing: border-box;
      //   .select-type {
      //     width: 92px;
      //     text-align: center;
      //     line-height: 37px;

      //     .bottom-point {
      //       display: inline-block;
      //       width: 9px;
      //       height: 10px;
      //       background: url(../../img/bottom-point.png) no-repeat center;
      //       background-size: 9px 10px;
      //       margin-left: 8px;
      //     }
      //   }
      .search-input {
        width: 840px;
        height: 37px;
        border: none;
        outline: none;
        padding: 0 0 0 34px;
        box-sizing: border-box;
        margin-top: 0 !important;
      }
      .search-btn {
        display: inline-block;
        width: 80px;
        height: 37px;
        background: url("../../img/icon-search.png") no-repeat center;
        background-size: 100% autp;
      }
    }
    .hot-search {
      padding-top: 12px;
      padding-left: 16px;
      font-size: 15px;
      i {
        color: #ff6700;
      }
      a {
        padding-right: 5px;
        color: #bcbcbc;
      }
    }
  }
}
</style>