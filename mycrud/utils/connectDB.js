const mongoose = require('mongoose')

async function connectDB() {

    try {
        await mongoose.connect('mongodb+srv://muhammed:muhammed@cluster0.57e3zjb.mongodb.net/test',
        {useUnifiedTopology:true, useNewUrlParser:true})
    
        console.log('DB Connected Successfully !')
    } catch (error) {
        console.log(error)
    }
    
}

export default connectDB