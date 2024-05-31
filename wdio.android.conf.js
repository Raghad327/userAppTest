const path = require('path');
const {config} = require('./wdio.conf');


//config.port = 4723;

config.specs = [
    './test/specs/android/testAndroid.spec.js'
];


config.capabilities = [
    {
       platformName : "Android",
      'appium:deviceName': 'Pixel 7',
      'appium:platformVersion': '10.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': path.join(process.cwd(), 'app/android/app-release.apk'),
      'appium:autoGrantPermissions': true
    }
];


config.services = [['appium', {
    args: {
        address: 'localhost',
        port: 4723,
        relaxedSecurity: true
    },
}]];

exports.config = config;