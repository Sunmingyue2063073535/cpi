import { registerPlugin } from '@capacitor/core';
export interface EchoPlugin {
    echo(options: { key: string }): Promise<{ key: string }>;
}
const Echo = registerPlugin<EchoPlugin>('MyEcho');
export default Echo;