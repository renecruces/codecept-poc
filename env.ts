import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  appBundleId: process.env.APP_BUNDLE_ID,
  browserstackAppAndroidUrl: process.env.BROWSERSTACK_APP_ANDROID_URL,
  browserstackAppIosUrl: process.env.BROWSERSTACK_APP_IOS_URL,
  browserstackUser: process.env.BROWSERSTACK_USER,
  browserstackKey: process.env.BROWSERSTACK_KEY,
  mailosaurApiKey: process.env.MAILOSAUR_API_KEY,
  mailosaurServerId: process.env.MAILOSAUR_SERVER_ID,
  mailosaurServerDomain: process.env.MAILOSAUR_SERVER_DOMAIN,
  localAppAndroidUrl: process.env.LOCAL_APP_ANDROID_URL,
  localAppIosUrl: process.env.LOCAL_APP_IOS_URL
};
