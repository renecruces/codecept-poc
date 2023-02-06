import { appiumConfig, config as baseConfig } from './base.codecept.conf';
import { env } from './env';

const { browserstackAppAndroidUrl } = env;

export const config: CodeceptJS.MainConfig = {
  ...baseConfig,
  helpers: {
    Appium: {
      ...appiumConfig,
      platform: 'android',
      app: browserstackAppAndroidUrl,
      device: 'Google Pixel 3'
    }
  }
};
