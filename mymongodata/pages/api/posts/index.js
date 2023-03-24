import Post from "@/models/Post";
import dbConnect from "@/utils/dbConnect";
import nc from "next-connect";

dbConnect()


const handler = nc().get(async(req, res) => {
   
    try {
        const posts = await Post.find({})
        res.send(posts);
    } catch (error) {
        return  res.status(400).json({message:'Sorry something went wrong !'});
    }
   
   
  }).post(async(req, res) => {
    const {title,details,user,age} = req.body
    const newpost = new Post({title,details,user,age})
    try {
         await newpost.save()
        res.send('New post added !');
    } catch (error) {
        return  res.status(400).json({message:'Sorry something went wrong !'});
    }
  })



  export default handler