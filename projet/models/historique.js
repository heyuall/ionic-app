var mongoose =require('mongoose');
var historiqueshema;
historiqueshema = mongoose.Schema({


  username: {
    type: String,
    required:true


  },
  date:{
    type:String,
    required:true
  }

});
var Historique =module.exports=mongoose.model('historique',historiqueshema);
module.exports=Historique;
