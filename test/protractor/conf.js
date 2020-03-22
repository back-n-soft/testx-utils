const fs = require('fs');
const path = require('path');
const { keywords } = require('../../lib');
const { testxLogger } = require('../../lib/utils/logger');

exports.config = {
  directConnect: true,
  specs: ['specs/**/*.spec.js'],
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: false,
    maxInstances: 1,
    chromeOptions: {
      args: [
        'headless',
        'disable-dev-shm-usage',
        'no-sandbox',
        'window-size=1920,1080',
        'disable-gpu',
        'incognito',
      ],
      prefs: {
        profile: {
          default_content_settings: {
            popups: 0,
          },
        },
        download: {
          prompt_for_download: false,
          default_directory: `${process.cwd()}/tmp`,
          directory_upgrade: true,
        },
      },
    },
  },
  baseUrl: '',
  framework: 'jasmine',
  jasmineNodeOpts: {
    silent: true,
    defaultTimeoutInterval: 300000,
    includeStackTrace: false,
  },
  onPrepare: () => {
    const testx = require('testx');
    testx.keywords.add(keywords);
    testxLogger(testx.events, true, true);

    let objectsDir = path.join(__dirname, 'objects');
    if (fs.existsSync(objectsDir)) {
      const objects = fs.readdirSync(objectsDir);
      objects.forEach((object) => {
        const prefix = object.replace('.js', '.');
        testx.objects.add(require(path.join(__dirname, `./objects/${object}`)), prefix);
        console.log(`Loaded ${object} with prefix ${prefix}`);
      });
    }

    browser.waitForAngularEnabled(false);
  },
};
