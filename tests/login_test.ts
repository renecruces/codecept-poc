import MailosaurClient from 'mailosaur';
import { env } from '../env';

const { mailosaurApiKey, mailosaurServerId, mailosaurServerDomain, appBundleId } = env;

const mailosaur = new MailosaurClient(mailosaurApiKey);

const fetchEmailCode = async (sentTo: string) => {
  const criteria = { sentTo };

  const email = await mailosaur.messages.get(mailosaurServerId, criteria);

  return email.html.codes[0].value;
};

Feature('Login');

Scenario('Login user', async ({ I }) => {
  await I.seeAppIsInstalled(appBundleId);

  await I.tap('Sign In');

  await I.wait(10);

  await I.switchToWeb();

  await I.see('Enter your email to sign in');

  const sentTo = 'rene.cruces@' + mailosaurServerDomain;

  await I.fillField('input[type=email]', sentTo);

  await I.click('button[name=submit]');

  await I.wait(10);

  const emailCode = await fetchEmailCode(sentTo);

  await I.fillField('input', emailCode);
});

After(async ({ I }) => {
  await I.switchToNative();
});
