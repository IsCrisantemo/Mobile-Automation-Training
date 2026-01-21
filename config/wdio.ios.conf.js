const path = require('path');
const {config} = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
    config.runner = 'local',
    config.port = 4723,

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
    'appium:app': path.join(process.cwd(), 'app/iOS/MVCTodo.app'),
    }

];

 //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
config.services = ['appium'],

exports.config = config;