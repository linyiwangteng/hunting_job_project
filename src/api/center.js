import instance, { serverUrl } from './instance';

export const uploadPhoto = serverUrl + '/api/cms/cmsinfo/uploadpicture';

///api/personalcenter/personcandidate/candidateadd
// 基本信息添加与修改
const baseInfo = (params) => instance.post('/api/business/personcandidate/candidateadd', { ...params });
// 基本信息添加与修改
const getBaseInfo = (params) => instance.get('/api/business/personcandidate/info');

// 工作经历添加修改
const workAdd = (params) => instance.post('/api/business/personcandidatework/add', { ...params });

// 工作经历添加修改
const workEdit = (params) => instance.post('/api/business/personcandidatework/edit', { ...params });
// 基本信息添加与修改
// const getBaseInfo = (params) => instance.get('/api/business/personcandidate/info');


export default {
    baseInfo,
    getBaseInfo,
    workEdit,
    workAdd,
}