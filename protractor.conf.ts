import { browser, Config } from "protractor";
export let config: Config = {
  capabilities: {
    browserName: "chrome"
  },
  directConnect: true,
  framework: "mocha",
  mochaOpts: {
    reporter: "dot",
    slow: 3000
  },
  specs: ["spec/*.spec.js"],
  // tslint:disable-next-line:object-literal-sort-keys
  onPrepare: async () => {
    await browser.waitForAngularEnabled(false);
  }
};
