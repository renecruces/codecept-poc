# Codecept POC

## Get started

To get started, please perform the following steps:

- Install the packages `npm run install`.
- Create a .env file with the required variables as per [env.ts](./env.ts).
- Run the E2E test command `npm run e2e:android`

## Remote testing

Please check the following link to enable automated mobile app testing through Codecept + Browserstack:
https://codecept.io/mobile/#browserstack-configuration

Alternatively, Codecept could also integrate with Testingbot:
https://testingbot.com/support/mobile/codeceptjs.html#configure

## Other services used

### Mailosaur (https://mailosaur.com/)

Mailosaur enables us to automate email and sms verification through their SDK. See [login_test](./tests/login_test.ts).
