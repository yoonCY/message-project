
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');
const apiRouter = require('../routes/api');
const cors = require('cors');

const errorHendle = {

    set404 : ( app ) => {
        app.use(function (req, res, next) {
            next(createError(404));
        });

        return app;
    },
    set500 : ( app ) => {

        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: {}
            });
        });

        app.use(function (err, req, res, next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render('error');
        });


        return app;
    }
}

const AppConfig = {

    set: (app) => {

        // view engine setup
        app.set('views', path.join(__dirname, '/../views'));
        
        app.set('view engine', 'jade');
        app.set('port', 8080);

        app.use(cors());

        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());
        //app.use(express.static(path.join(__dirname, 'public')));
        app.use('/build', express.static(__dirname + '/../../react/icu/build'));
        app.use('/static', express.static(__dirname + '/../../react/icu/build/static'));

        
        app.use('/', indexRouter);
        app.use('/users', usersRouter);
        app.use('/api', apiRouter);

        // catch 404 and forward to error handler
        app = errorHendle.set404(app);

        /// error handlers

        // development error handler
        // will print stacktrace
        
        // production error handler
        // no stacktraces leaked to user
        
        // error handler
        app = errorHendle.set500(app);

        return app;
    }

}


module.exports = AppConfig;