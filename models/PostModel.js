const mongoose = require("mongoose");

const URL_slug = require("mongoose-url-slugs");

const postSchema = new mongoose.Schema({
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
  }
});

// postSchema.pre('save', function(next){
//   this.SeoName = speaker_url(this.Title, {
//     lang:'tr'
//   });
//   next()
// });

postSchema.plugin(URL_slug("Title", { field: "myslug" }));

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
