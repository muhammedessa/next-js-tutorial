const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title : String ,
    imageurl :String,
    details:String
})

export default  mongoose.models.Post || mongoose.model('Post',postSchema )
