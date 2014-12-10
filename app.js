var express = require('express');
var app = express();

// Tell application where the views are 
var path = require('path') // path is included in node, just need to require it to use it
app.set('views', path.join(__dirname, 'lib', 'views'));
app.set('view engine', 'jade');

// Pass 'app' to routes 
var setupOdysseyRoutes = require('./lib/odyssey/routes');
setupOdysseyRoutes(app);

// Start the app, and begin listening on port 3000
var server = app.listen(3000, function(){
  console.log('Express server listening on port 3000');
});