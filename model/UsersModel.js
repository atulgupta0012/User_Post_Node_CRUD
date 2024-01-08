const mongoose= require("mongoose");

let Schema=mongoose.Schema;

const UsersSchema= new mongoose.Schema({
    uid:String,
    type:{

    type:Schema.Types.ObjectId,
    ref:'Users'
},
    
    title:String,
    description:String
},

{timestamps:true}
);

const Users=mongoose.model("Users",UsersSchema)
module.exports=Users;