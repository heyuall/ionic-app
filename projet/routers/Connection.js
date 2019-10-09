var mongoose=require ("mongoose");
var con= mongoose.connect('mongodb://localhost:27017/proget_db',function (err) {
  if (err)
    throw err;
  console.log("DB connected")

});
exports.getConnection=function () {
  return(con);

}
