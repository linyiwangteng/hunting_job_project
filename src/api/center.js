import instance, { serverUrl } from './instance';

export const uploadPhoto = serverUrl + '/api/cms/cmsinfo/uploadpicture';

///api/personalcenter/personcandidate/candidateadd
// 基本信息添加与修改
const baseInfo = (params) => instance.post('/api/business/personcandidate/candidateadd', { ...params });


export default {
    baseInfo,
}