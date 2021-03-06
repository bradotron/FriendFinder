// add dependencies
var createError = require('http-errors');
var express = require('express');
var path = require('path');

// create the app instance
var app = express();

// set the port (process.env.PORT is required for heroku support)
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// ***** these must be added before creating the routes ***** //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create routers
var htmlRouter = require('./app/routes/htmlRoutes');
var apiRouter = require('./app/routes/apiRoutes');

app.use('/', htmlRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

// start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
