
const http = require('http');
const express = require('express');
const expressObject = express();
const config = require('./config/ExpressConfig')
const createError = require('http-errors');

const app = config.set(expressObject);



const httpServer =http.createServer(app).listen( app.get('port'), function(req,res){
  console.log(`PORT NAME : ${app.get('port')} server START`);
});

const io = require('socket.io').listen(httpServer);
const ICU_socket = require('./module/icu/socket_center');


const ICU = io.of('/ICU');
const IMESSAGE = io.of('/imessage');

let ICU_count = 0;
let IMESSAGE_count = 0;

const icu = ICU_socket.socket_connect( io, "icu" );
 

const icu_center = ICU_socket.socket_start( icu );

// ICU.on( "connect", ( socket ) =>{
  
//   ICU_count++;
//   const socket_id = socket.id.split('#')[1];

//   console.log('test join : ', socket_id);
//   ICU.to(socket.id).emit("join:authkey", { authkey : socket_id } );
 
//   socket.on( "test", ( param ) =>{
    
//     console.log('test : ', param, socket_id);
//   }); 

//   socket.on("disconnect", () => {
//     ICU_count--;
//     console.log( "disconnect", ICU_count );
//   });

// }); 




//module.exports = app;
