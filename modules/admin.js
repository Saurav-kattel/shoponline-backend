const mongoose=require("mongoose");
const {Schema}=mongoose;
const adminSchema = new Schema({
    type:{type:String,required:true},
    brand:{type:String,required:true},
    title:{type:String,required:true},
    desc:{type:String,required:true},
    price:{type:Number,required:true},
    img:{type:String,required:true},
    date: { type: Date, default: Date.now },
  });

module.exports=mongoose.model("admin",adminSchema);