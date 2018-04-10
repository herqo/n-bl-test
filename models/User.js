const mongoose = require('mongoose');
const PassportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'Kullanici Adi Zorunlu'
  },
  email: {
    type: String,
    required: 'E-Posta Adresi Gerekli'
  },
  password: {
    type: String,
    required: 'Lutfen Sifre Girin'
  },
  post: [
    {
      myslug:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
      },
      Title: {
        type: String,
        required: "Can Not Be Empty"
      },
      PostCom: {
        type: String,
        required: "Can Not Be Empty"
      },
      PostImg: {
        type: String,
        required: "Can Not Be Empty"
      },
      Post: {
        type: String,
        required: "Can Not Be Empty"
      },
      date: {
        type: Date,
        default: Date.now
      },
      created: {
        id:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        username: {
          type: String,
          required: 'Kullanici Adi Zorunlu'
        },
        email: {
          type: String,
          required: 'E-Posta Adresi Gerekli'
        },
      }}
  ] 
});

userSchema.plugin(PassportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
