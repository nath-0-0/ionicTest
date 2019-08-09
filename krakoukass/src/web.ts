import { WebPlugin } from '@capacitor/core';
import { KrakoukassPluginPlugin } from './definitions';
declare const AbsoluteOrientationSensor: any;

export class KrakoukassPluginWeb extends WebPlugin implements KrakoukassPluginPlugin {
  constructor() {
    super({
      name: 'KrakoukassPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO krakoukass', options);
    return options;
  }

    async start() {
      const sensor = new AbsoluteOrientationSensor();
      sensor.start();
      sensor.onerror = event => {
  if (event.error.name === 'SecurityError') {
    console.log("No permissions to use AbsoluteOrientationSensor.");
  }
};
      sensor.onreading = (e: any) => {
    console.log('Anglua velocity', sensor);
  }
  }
}

const KrakoukassPlugin = new KrakoukassPluginWeb();

export { KrakoukassPlugin };

import { registerWebPlugin } from '@capacitor/core';
import { start } from 'repl';
registerWebPlugin(KrakoukassPlugin);
