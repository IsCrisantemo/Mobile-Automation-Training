require('dotenv').config();
const { config } = require('./wdio.shared.conf');
// 1. CREDENCIALES Y CONEXIÓN
// ==========================
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
// 👇 Éstas dos líneas son las que arreglaron el error 404
config.hostname = 'hub.browserstack.com';
config.path = '/wd/hub'; 
// 2. ESPECIFICACIONES
// ==================
config.specs = [
    '../test/specs/android/add-note-screen*.js'
];
// 3. CAPABILITIES
// ==================
config.capabilities = [
  {
    platformName: 'Android',
    "appium:platformVersion": "11.0",
    "appium:deviceName": "Google Pixel 5",
    "appium:automationName": "UIAutomator2",
    "appium:autoGrantPermissions": true,

    // ✅ Appium necesita esto para ejecutar
    "appium:app": "bs://fa17adf7c57e1047df75d7db815abb89f7896180",

    'bstack:options': {
        projectName: "Mi Proyecto Android definitivo 3",
        buildName: `Build ${new Date().toISOString().split('T')[0]}`,
        sessionName: "Test Add Note",
        debug: true,
        networkLogs: true
    }
  }
];
// 4. SERVICIOS
// ==================
// Reiniciamos el array para evitar conflictos con el archivo shared
config.services = [];
// 5. HOOK MÁGICO (El que pone el verde)
// ==================
config.afterTest = async function (test, context, { passed }) {
    const status = passed ? "passed" : "failed";
    const reason = passed ? "Test completado correctamente" : "Fallo en la aserción";

    console.log(`📡 REPORTE A BROWSERSTACK: ${status.toUpperCase()}`);

    // Forzamos el estado verde/rojo antes de cerrar la sesión
    await browser.executeScript(
        `browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"${status}", "reason": "${reason}"}}`,
        []
    );
    
    // Pequeña pausa de seguridad
    await browser.pause(1500);
};
exports.config = config;