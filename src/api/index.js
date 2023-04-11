import request from '@/utils/request'
//获取验证码
export function getyzmApi(data) {
    return request.post('/hatchway-hate-hateable/stomatic-stomatitis', data)
}
//登录
export function loginAPI(data) {
    return request.post('/openwork-opera/sala-salaam/reveller-revelry', data)
}
//上传文件
export function uploadFileApi(data) {
    return request.post('/yokefellow/unlax', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
    })
}
//证件识别
export function zhengjainshibieAPI(data) {
    return request.post('/unmortise/reinscribe-reinsert-reinsertion', data)
}
//提交用户信息
export function subUserInfoAPI(data) {
    return request.post('/boring-borland-born/skatol-skatole-skean', data)
}
//推荐app列表
export function tuijianAppApi(data) {
    return request.post('/scungy-scunner-scup/excussion-exdividend-exe/nudibranch-nudibranchiate-nudicaul', data)
}
//上报上报InstanceId
export function uploadInstallIdAPI(data) {
    return request.post('/barret-barretry/graftabl-grafter', data)
}
// 上报InstallReferrer
export function uploadInstallReferrerAPI(data) {
    return request.post('/peribolos-peribolus-pericardiac/palsgravine-palship', data)
}