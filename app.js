var express = require('express');
var app = express();
var setupOdysseyRoutes = require('./lib/odyssey/routes');

// Pass 'app' to routes 
setupOdysseyRoutes(app);

// Start the app, and begin listening on port 3000
var server = app.listen(3000, function(){
  console.log('Express server listening on port 3000');
});