const path = require('path');
const {config} = require('./wdio.conf');

config.specs = [
    'test/specs/ios/testIOS.spec.js'
];
config.user = 'raghadsadaqa_zFKxbn';
config.key = 'oaZF1DFxG4Pu9yXeDzBF';

config.capabilities = [
   /* 
    { 
            platformName: 'ios',
           'appium:deviceName': 'iPhone R',
           'appium:platformVersion': '17.5',
           'appium:automationName': 'XCUITest',
           'appium:app': path.join(process.cwd(), 'app/ios/user_app.app'),
           'appium:autoGrantPermissions': true
          }
*/
    { 
            platformName: 'ios',
           'appium:deviceName': 'iPhone 14',
           'appium:platformVersion': '16',
           'appium:automationName': 'XCUITest',
           'appium:app': 'bs://b9db1a5d55b47ce86eeebfae25526720f05bc4f2',
           'appium:autoGrantPermissions': true
          }
          
];

config.services = ['browserstack'];


/*
config.services = [['appium', {
    args: {
        address: 'localhost',
       port: 4723,
       relaxedSecurity: true
    },
}]];
*/

exports.config = config;