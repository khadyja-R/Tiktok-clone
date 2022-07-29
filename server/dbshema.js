const mongoose = require('mongoose');


const TiktokShema = new mongoose.Schema({

   url: String,
   channel : String , 
   description : String,
   song :  String ,
   likes:  String,
   messages: String,
   shares: String,

});

const  tiktok  = mongoose.model("tiktok" , TiktokShema);

module.exports = tiktok;

