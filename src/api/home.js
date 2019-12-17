import instance from './instance';

// 首页广告
const advList = (params) => instance.get('/api/advert/advertinfo/querytop',{params});
// 首页新闻
const newsList = (params) => instance.get('/api/cms/cmsinfo/querytop',{params});
// 区域划分
const zoneList = (params) => instance.get('/api/common/area/querychildren',{params});
const  organizationList = (params) => instance.get('/api/personnelfiles/company/querytop',{params});

const orgDetail = (params) => instance.get('/api/personnelfiles/company/edit',{params});
export default {
  advList,
  newsList,
  zoneList,
  organizationList,
  orgDetail
}