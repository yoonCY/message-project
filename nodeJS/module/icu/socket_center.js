


const uuidv4 = require ( 'uuid/v4' ) ;  

exports.socket_connect = ( io, nameSpace ) => {
    
    console.log( nameSpace );
    const socket_name = io.of( nameSpace );

    return socket_name;
}


exports.socket_start = ( io ) => {

    io.on( 'connect', ( socket ) => {
        console.log( uuidv4() );
        socket.emit( 'start', { test : 1  } );

    });

}