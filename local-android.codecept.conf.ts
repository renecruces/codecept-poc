import { config as baseConfig } from './base.codecept.conf'; // turn on headless mode when running with HEADLESS=true environment variable
import { env } from './env';

const { localAppAndroidUrl } = env;

export const config: CodeceptJS.MainConfig = {
  ...baseConfig,
  helpers: {
    Appium: {
      app: localAppAndroidUrl,
      platform: 'Android',
      desiredCapabilities: {}
    }
  }
};
