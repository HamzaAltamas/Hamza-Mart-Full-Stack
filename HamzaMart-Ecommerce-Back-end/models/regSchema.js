const mongoose = require("mongoose");
const { Schema } = mongoose;

const regSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uniq: true,
  },
  tel: {
    type: String,
    required: true,
  },
  addressOne: {
    type: String,
    required: true,
  },
  addressTwo: {
    type: String,
  },
  city: {
    type: String,
  },
  postCode: {
    type: String,
  },
  country:{
    type:String,
    
},
  region: {
    type: String,
  },
  password:{
    type:String,
    required:true
},
});

module.exports = mongoose.model("User", regSchema);
