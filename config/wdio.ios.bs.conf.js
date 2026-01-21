const {config} = require('./wdio.shared.conf');

// ============
// BrowserStack Credentials
// ============
config.user = 'cristian_bisKOA';
config.key = '9FSmBkf4uYebzH1X5pYA';

// ============
// Specs
// ============
config.specs = [
        // ToDo: define location for spec files here
        //'./test/specs/iOS/*.js'
        '../test/specs/iOS/iOS-todo-item*.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
    {'appium:platformName': 'iOS',
    'appium:platformVersion': '18.5',
    'appium:deviceName': 'iPhone 16 Pro',
    'appium:automationName': 'XCUItest',
    'appium:app': "bs://fa17adf7c57e1047df75d7db815abb89f7896180",
    }

];

 //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'],

exports.config = config;