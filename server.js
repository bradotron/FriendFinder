// add dependencies
var express = require('express');
var path = require('path');

// create routers
var htmlRouter = require('./app/routes/htmlRoutes');
var apiRouter = require('./app/routes/apiRoutes');


// create the app instance
var app = express();

app.use('/', htmlRouter);
app.use('/api', apiRouter);

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
