<template>
  <div class="body">
    <div id="container">
      <div class="sidebar">
        <div id="options" class="greybg">
          <dl>
            <dt>
              月薪范围
              <em></em>
            </dt>
            <dd>
              <div>2k以下</div>
              <div>2k-5k</div>
              <div>5k-10k</div>
              <div>10k-15k</div>
              <div>15k-25k</div>
              <div>25k-50k</div>
              <div>50k以上</div>
            </dd>
          </dl>
          <dl>
            <dt>
              工作经验
              <em></em>
            </dt>
            <dd>
              <div>不限</div>
              <div>应届毕业生</div>
              <div>1年以下</div>
              <div>1-3年</div>
              <div>3-5年</div>
              <div>5-10年</div>
              <div>10年以上</div>
            </dd>
          </dl>
          <dl>
            <dt>
              最低学历
              <em></em>
            </dt>
            <dd>
              <div>不限</div>
              <div>大专</div>
              <div>本科</div>
              <div>硕士</div>
              <div>博士</div>
            </dd>
          </dl>
          <dl>
            <dt>
              工作性质
              <em></em>
            </dt>
            <dd>
              <div>全职</div>
              <div>兼职</div>
              <div>实习</div>
            </dd>
          </dl>
          <dl>
            <dt>
              发布时间
              <em></em>
            </dt>
            <dd>
              <div>今天</div>
              <div>3天内</div>
              <div>一周内</div>
              <div>一月内</div>
            </dd>
          </dl>
        </div>
      </div>

      <div class="content">
        <div id="search_box">
          <form id="searchForm" name="searchForm" action="list.html" method="get">
            <ul id="searchType">
              <li data-searchtype="1" class="type_selected">职位</li>
              <li data-searchtype="4">公司</li>
            </ul>
            <div class="searchtype_arrow"></div>
            <input
              type="text"
              id="search_input"
              name="kd"
              tabindex="1"
              value="前端开发"
              placeholder="请输入职位名称，如：产品经理"
            />
            <input type="submit" id="search_button" value="搜索" />
          </form>
        </div>
        <dl class="hotSearch">
          <dt>热门搜索：</dt>
          <dd>
            <a href="list.htmlJava?labelWords=label&amp;city=全国">Java</a>
          </dd>
          <dd>
            <a href="list.htmlPHP?labelWords=label&amp;city=全国">PHP</a>
          </dd>
          <dd>
            <a href="list.htmlAndroid?labelWords=label&amp;city=全国">Android</a>
          </dd>
          <dd>
            <a href="list.htmliOS?labelWords=label&amp;city=全国">iOS</a>
          </dd>
          <dd>
            <a href="list.html前端?labelWords=label&amp;city=全国">前端</a>
          </dd>
          <dd>
            <a href="list.html产品经理?labelWords=label&amp;city=全国">产品经理</a>
          </dd>
          <dd>
            <a href="list.htmlUI?labelWords=label&amp;city=全国">UI</a>
          </dd>
          <dd>
            <a href="list.html运营?labelWords=label&amp;city=全国">运营</a>
          </dd>
          <dd>
            <a href="list.htmlBD?labelWords=label&amp;city=全国">BD</a>
          </dd>
          <dd>
            <a href="list.html?gx=实习&amp;city=全国">实习</a>
          </dd>
        </dl>
        <div class="breakline"></div>
        <dl class="workplace" id="workplaceSelect">
          <dt class="fl">工作地点：</dt>
          <dd>
            <a href="javascript:;" class="current">全国</a>
            |
          </dd>
          <dd>
            <a href="javascript:;">北京</a>
            |
          </dd>
          <dd>
            <a href="javascript:;">上海</a>
            |
          </dd>
          <dd>
            <a href="javascript:;">广州</a>
            |
          </dd>
          <dd>
            <a href="javascript:;">深圳</a>
            |
          </dd>
          <dd>
            <a href="javascript:;">成都</a>
            |
          </dd>
          <dd>
            <a href="javascript:;">杭州</a>
            |
          </dd>
          <dd>
            <a href="javascript:;">武汉</a>
            |
          </dd>
          <dd>
            <a href="javascript:;">南京</a>
            |
          </dd>
          <dd class="more">
            <a href="javascript:;">其他</a>
            <div class="triangle citymore_arrow"></div>
          </dd>
          <dd id="box_expectCity" class="searchlist_expectCity dn" style="display: none;">
            <span class="bot"></span>
            <span class="top"></span>
            <dl>
              <dt>ABCDEF</dt>
              <dd>
                <span>北京</span>
                <span>长春</span>
                <span>成都</span>
                <span>重庆</span>
                <span>长沙</span>
                <span>常州</span>
                <span>东莞</span>
                <span>大连</span>
                <span>佛山</span>
                <span>福州</span>
              </dd>
            </dl>
            <dl>
              <dt>GHIJ</dt>
              <dd>
                <span>贵阳</span>
                <span>广州</span>
                <span>哈尔滨</span>
                <span>合肥</span>
                <span>海口</span>
                <span>杭州</span>
                <span>惠州</span>
                <span>金华</span>
                <span>济南</span>
                <span>嘉兴</span>
              </dd>
            </dl>
            <dl>
              <dt>KLMN</dt>
              <dd>
                <span>昆明</span>
                <span>廊坊</span>
                <span>宁波</span>
                <span>南昌</span>
                <span>南京</span>
                <span>南宁</span>
                <span>南通</span>
              </dd>
            </dl>
            <dl>
              <dt>OPQR</dt>
              <dd>
                <span>青岛</span>
                <span>泉州</span>
              </dd>
            </dl>
            <dl>
              <dt>STUV</dt>
              <dd>
                <span>上海</span>
                <span>石家庄</span>
                <span>绍兴</span>
                <span>沈阳</span>
                <span>深圳</span>
                <span>苏州</span>
                <span>天津</span>
                <span>太原</span>
                <span>台州</span>
              </dd>
            </dl>
            <dl>
              <dt>WXYZ</dt>
              <dd>
                <span>武汉</span>
                <span>无锡</span>
                <span>温州</span>
                <span>西安</span>
                <span>厦门</span>
                <span>烟台</span>
                <span>珠海</span>
                <span>中山</span>
                <span>郑州</span>
              </dd>
            </dl>
          </dd>
        </dl>
        <ul class="hot_pos reset">
          <li class="odd clearfix">
            <div class="hot_pos_l">
              <div class="mb10">
                <a href="#/company/1" title="前端开发" target="_blank">
                  <span>前</span>
                  <span>端</span>
                  <span>开</span>
                  <span>发</span>
                </a>
                &nbsp;
                <span class="c9">[北京]</span>
              </div>
              <span>
                <em class="c7">月薪：</em>10k-20k
              </span>
              <span>
                <em class="c7">经验：</em> 3-5年
              </span>
              <span>
                <em class="c7">最低学历：</em>本科
              </span>
              <br />
              <span>
                <em class="c7">职位诱惑：</em>借移动医疗大势享受坐直升飞机的职场发展
              </span>
              <br />
              <span>1天前发布</span>
            </div>
            <div class="hot_pos_r">
              <div class="apply">
                <a href="toudi.html" target="_blank">投个简历</a>
              </div>
              <div class="mb10">
                <a href="h/c/1712.html" title="紫色医疗" target="_blank">紫色医疗</a>
              </div>
              <span>
                <em class="c7">领域：</em>移动互联网 ,健康医疗
              </span>
              <span>
                <em class="c7">创始人：</em> Lu
              </span>
              <br />
              <span>
                <em class="c7">阶段：</em>成长型(A轮)
              </span>
              <span>
                <em class="c7">规模：</em>15-50人
              </span>
              <ul class="companyTags reset">
                <li>五险一金</li>
                <li>股票期权</li>
                <li>年度旅游</li>
              </ul>
            </div>
          </li>
          <li class="clearfix">
            <div class="hot_pos_l">
              <div class="mb10">
                <a href="#/company/2" title="前端开发" target="_blank">
                  <span>前</span>
                  <span>端</span>
                  <span>开</span>
                  <span>发</span>
                </a>
                &nbsp;
                <span class="c9">[北京]</span>
              </div>
              <span>
                <em class="c7">月薪：</em>8k-16k
              </span>
              <span>
                <em class="c7">经验：</em> 3-5年
              </span>
              <span>
                <em class="c7">最低学历：</em>本科
              </span>
              <br />
              <span>
                <em class="c7">职位诱惑：</em>第一家互联网私人银行招募各路牛人
              </span>
              <br />
              <span>09:41发布</span>
            </div>
            <div class="hot_pos_r">
              <div class="apply">
                <a href="toudi.html" target="_blank">投个简历</a>
              </div>
              <div class="mb10">
                <a href="h/c/7626.html" title="网利宝" target="_blank">网利宝</a>
              </div>
              <span>
                <em class="c7">领域：</em>O2O,金融互联网
              </span>
              <span>
                <em class="c7">创始人：</em> 赵润龙（Kevin Chiu）
              </span>
              <br />
              <span>
                <em class="c7">阶段：</em>成长型(A轮)
              </span>
              <span>
                <em class="c7">规模：</em>15-50人
              </span>
              <ul class="companyTags reset">
                <li>股票期权</li>
                <li>五险一金</li>
                <li>带薪年假</li>
              </ul>
            </div>
          </li>
          <li class="odd clearfix">
            <div class="hot_pos_l">
              <div class="mb10">
                <a href="#/company/1" title="高级web前端开发工程师" target="_blank">
                  高级web
                  <span>前</span>
                  <span>端</span>
                  <span>开</span>
                  <span>发</span>工程师
                </a>
                &nbsp;
                <span class="c9">[上海]</span>
              </div>
              <span>
                <em class="c7">月薪：</em>8k-15k
              </span>
              <span>
                <em class="c7">经验：</em> 3-5年
              </span>
              <span>
                <em class="c7">最低学历：</em>大专
              </span>
              <br />
              <span>
                <em class="c7">职位诱惑：</em>上市公司创业型团队 五险一金 精英团队
              </span>
              <br />
              <span>09:40发布</span>
            </div>
            <div class="hot_pos_r">
              <div class="apply">
                <a href="toudi.html" target="_blank">投个简历</a>
              </div>
              <div class="mb10">
                <a href="h/c/9725.html" title="淘米" target="_blank">淘米</a>
              </div>
              <span>
                <em class="c7">领域：</em>游戏
              </span>
              <br />
              <span>
                <em class="c7">阶段：</em>上市公司
              </span>
              <span>
                <em class="c7">规模：</em>500-2000人
              </span>
              <ul class="companyTags reset">
                <li>岗位晋升</li>
                <li>技能培训</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <a id="backtop" title="回到顶部" rel="nofollow" style="display: none;"></a>
    </div>
  </div>
</template>

<script>
// import DefaultImg from "./assets/./assets/touxiang.jpg";
export default {
  data() {
    return {};
  },
  created() {}
};
</script>
<style lang="less" scoped>
</style>