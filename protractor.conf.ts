import { browser, Config } from "protractor";

const directConnect = true;
const specs = ["spec/*.spec.js"];
const framework = "mocha";
const mochaOpts = {
  reporter: "dot"
};

const onPrepare = () => {
  browser.waitForAngularEnabled(false);
};

const headed = {
  capabilities: {
    browserName: "chrome"
  },
  directConnect,
  framework,
  mochaOpts,
  onPrepare,
  specs
};

const headless = {
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--no-sandbox", "--disable-gpu"]
    }
  },
  directConnect,
  framework,
  mochaOpts,
  onPrepare,
  specs
};

const config: Config = process.env.GITHUB_ACTIONS ? headless : headed;

export { config };
