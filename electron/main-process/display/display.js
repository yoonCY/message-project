const {ipcMain} = require('electron')

const {
    mainWindow 
} = require("../../main")

ipcMain.on('display', (event, arg) => {
  
    console.log( "test", arg)
    console.log(mainWindow)
    event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('test', (event, arg) => {
  console.log('test');
})