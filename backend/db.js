const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://rawataditya193:44296889@cluster0.qz9zc0g.mongodb.net/");

const userSchema=  mongoose.Schema({
  username : {
    required : true,
    unique : true,
    minLength : 5,
    maxLength : 15
  },
  firstName : {
    type : String,
    required : true
  },
  lastname : {
    type : String,
    required : true,
  },
  password :{
    type : String,
    required : true,
    minLength : 6
  }
});

const accountSchema = new mongoose.Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to User model
      ref: 'User',
      required: true
  },
  balance: {
      type: Number,
      required: true
  }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
User,
  Account
};