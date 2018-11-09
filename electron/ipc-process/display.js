const {ipcMain} = require('electron')

let win = null;

const resize = (  ) => {

    ipcMain.on('electron:resize', ( event, args ) => {
        
        args.width = ( args.width !== undefined ) ? args.width : 400;
        args.heigth = ( args.heigth !== undefined ) ? args.heigth : 600;
        args.animate = ( args.animate !== undefined ) ? args.animate : true;

        console.log( "reisze : ", args )
        win.setSize(args.width, args.heigth,  args.animate );
        win.setResizable( true );
        win.center( true );
    });
}

const devlopment = (  ) => {

    ipcMain.on('electron:dev', ( event, args ) => {
        
        
        let devlopmentMode = ( args.dev !== undefined ) ? args.dev : false;
        
        if( devlopmentMode ) {
            win.openDevTools();
        }else{
            win.webContents.closeDevTools();
        }
        
    });

} 

module.exports = ( WindowObject = null ) => {
    
    if( WindowObject !== null ){

        win = WindowObject;

        resize();
        devlopment();
    }
    
    
}
