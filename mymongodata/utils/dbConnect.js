const mongoose = require('mongoose');

export default  async function dbConnect() {
    try {
      await mongoose.connect('mongodb+srv://muhammed:muhammed@cluster0.57e3zjb.mongodb.net/test' ,
      {useUnifiedTopology:true , useNewUrlParser:true});

      console.log('Connected successfully !')

    } catch (error) {
        console.log(error)
    }
}

 