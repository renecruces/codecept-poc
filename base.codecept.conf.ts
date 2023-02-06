import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
import { env } from './env';

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

const { browserstackUser, browserstackKey } = env;

export const appiumConfig = {
  host: 'hub-cloud.browserstack.com',
  port: 4444,
  user: browserstackUser,
  key: browserstackKey
};

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  include: {
    I: './steps_file'
  },
  name: 'codecept-poc',
  fullPromiseBased: true
};
