const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title : String,
    details: String,
    user: String,
    age: Number
})


export default mongoose.models.Post || mongoose.model('Post',postSchema )