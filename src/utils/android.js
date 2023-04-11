import { jiami } from './AESKEY';
import Echo from './Plugin.ts'
// // 获取Token
export async function getPhoneInfo() {
    const { ga, and, appV } = await Echo.echo({ k: 'getHeaderToken' });
    console.log(' GAID, AID, VERSION', ga, and, appV);
    const str = {
        GAID: ga,
        AID: and,
        RV: appV,
        VERSION: '1.0.0'
    }
    const token = 'TULZTPQL' + jiami(str)
    return token
}