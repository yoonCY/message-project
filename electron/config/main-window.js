
const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

const debug = /--debug/.test(process.argv[2]);

// 기본 윈도우 config
const windows_option = (app) => {
    return {
        window: {
            width: 400,
            height: 600,
            title: app.name,
            // minWidth : 200,
            modal: true,
            resizable: false,
            //transparent : true,
            webPreferences: {
                javascript: true,
                plugins: true,
                nodeIntegration: true
            },
        }
    }
};

// 로드 URL 
const loadURL = 'http://kin123s.iwedding.biz:7470/';

// 종료 이벤트 
const close = (win) => {
    return win.on('closed', function () {
        win = null;
    });
}


exports.createWindow = (app) => {
    const windowOptions = windows_option(app);
    // const menu = Menu.buildFromTemplate(require('./menu')(app));

    if (process.platform === 'linux') {
        console.log("linux");
    }
    
    var win = new BrowserWindow(windowOptions.window);

    // Menu.setApplicationMenu(menu);
    // win.setMenu(menu);

    win.loadURL( loadURL );

    if (debug) {

        win.webContents.openDevTools();
        //mainWindow.maximize();
        require('devtron').install();
    }

    win = close(win);

    return win;
}