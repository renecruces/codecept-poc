/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
  }
  interface Methods extends AppiumTs, ReturnType<steps_file> {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
