// Require Dependencies
var OdysseyController = require("./odyssey.controller");


// Write functionality 
function setupRoutes(app){
  app.get('/open-doors',       OdysseyController.openDoors);
  app.get('/another',          OdysseyController.another);
  app.get('/create-something', OdysseyController.createSomething);
}

module.exports = setupRoutes;