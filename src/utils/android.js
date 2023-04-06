import { jiami } from './AESKEY';
import Echo from './Plugin.ts'
// // 获取Token
export async function getPhoneInfo() {
    const { gaId, androidId, appVersionName } = await Echo.echo({ key: 'getHeaderToken' });
    console.log(' GAID, AID, VERSION', gaId, androidId, appVersionName);
    const str = {
        GAID: gaId,
        AID: androidId,
        RV: appVersionName,
        VERSION: '1.0.0'
    }
    const token = 'TULZTPQL' + jiami(str)
    return token
}