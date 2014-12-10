module.exports = {
  
  openDoors : function(req, res){
    res.send("I'm sorry Dave.");
  },
  
  another : function(req, res){
    res.send("Another route here");
  },

  createSomething : function(req, res){
    res.render('create-something', {title: 'create something'});
  }
};