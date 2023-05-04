const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const accountSchema = new Schema({
  email: {type: String,required: false,unique: false,trim: false,minlength: 0},
  img: {type: String,required: false,unique: false,trim: false,minlength: 0},
  id: {type: String,required: false,unique: false,trim: false,minlength: 0},
}, {
  timestamps: true,
});

const Account = mongoose.model("Account",accountSchema)

module.exports = Account;