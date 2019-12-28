import instance, { serverUrl } from './instance';

export const uploadPhoto = serverUrl + '/api/cms/cmsinfo/uploadpicture';

///api/personalcenter/personcandidate/candidateadd
// 基本信息添加与修改
const baseInfo = (params) => instance.post('/api/business/personcandidate/candidateadd', { ...params });
// 基本信息添加与修改
const getBaseInfo = (params) => instance.get('/api/business/personcandidate/info');

// 工作经历添加
const workAdd = (params) => instance.post('/api/business/personcandidatework/add', { ...params });

// 工作经历修改
const workEdit = (params) => instance.post('/api/business/personcandidatework/edit', { ...params });

// 工作经历删除
const workDelete = (params) => instance.post('/api/business/personcandidatework/delete', { ...params });

// 项目经历编辑
const projectEdit = (params) => instance.post('/api/business/personcandidateproject/add', { ...params });


export default {
    baseInfo,
    getBaseInfo,
    workEdit,
    workAdd,
    workDelete,
    projectEdit,
}