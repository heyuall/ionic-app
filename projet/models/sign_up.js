var mongoose =require('mongoose');
var signupshema=mongoose.Schema({


  username:{
    type:String,
    lowercase:true,
    unique:true,
    required:true
  },

  email:{
    type:String,
    lowercase:true,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true
  }

});
var Signup =module.exports=mongoose.model('signup',signupshema);
module.exports=Signup;
