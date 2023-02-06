import { appiumConfig, config as baseConfig } from './base.codecept.conf';
import { env } from './env';

const { browserstackAppIosUrl } = env;

export const config: CodeceptJS.MainConfig = {
  ...baseConfig,
  helpers: {
    Appium: {
      ...appiumConfig,
      platform: 'ios',
      app: browserstackAppIosUrl,
      device: 'iPhone 14'
    }
  }
};
