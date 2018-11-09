const {ipcMain} = require('electron')

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log('test', event, arg);
  event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('test', (event, arg) => {
  console.log('test');
})