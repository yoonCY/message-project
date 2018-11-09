// only add update server if it's not being run from cli
if (require.main !== module) {
  require('update-electron-app')({
    logger: require('electron-log')
  })
}

const path = require('path')
const glob = require('glob')
const {app, BrowserWindow} = require('electron')

const debug = /--debug/.test(process.argv[2])

if (process.mas) app.setName('Electron APIs')



require( "./golbal.config" )

const WindowsConfig = require( appRoot+"/config/main-window")
const ipcElectron = require( appRoot + "/ipc-process/display")


let mainWindow = null;
// let mainWindow = require( AppRoot + "/config/main-window").mainWindow()

// console.log(mainWindow)
// return;
function initialize() {
  var shouldQuit = makeSingleInstance();
  if (shouldQuit) return app.quit();

  //loadDemos();
  

  function createWindow() {
      
      mainWindow = WindowsConfig.createWindow( app );
      
      // mainWindow.openDevTools();

      // 리사이즈 설정
      // ipcElectron.resize( mainWindow );
      ipcElectron( mainWindow )
      console.log(ipcElectron);

  }

  // 시작 
  app.on('ready', function () {

      createWindow();
      // autoUpdater.initialize();
  });

  app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') {
          app.quit()
      }
  });

  app.on('activate', function () {
      if (mainWindow === null) {
          createWindow()
      }
  })
}

// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function makeSingleInstance () {
  if (process.mas) return false

  return app.makeSingleInstance(() => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

// Require each JS file in the main-process dir
function loadDemos () {
  //const files = glob.sync(path.join(__dirname, 'main-process/**/*.js'))
  const files = glob.sync(path.join(__dirname, 'ipc-process/*.js'))
  files.forEach((file) => { require(file)( mainWindow  ) })
}

initialize();
