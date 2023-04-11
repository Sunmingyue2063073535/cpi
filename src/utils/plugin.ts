import { registerPlugin } from '@capacitor/core';
export interface EchoPlugin {
    echo(options: { k: string }): Promise<{ k: string }>;
}
const Echo = registerPlugin<EchoPlugin>('MyEcho');
export default Echo;