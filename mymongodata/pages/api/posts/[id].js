import Post from "@/models/Post";
import dbConnect from "@/utils/dbConnect";
import nc from "next-connect";

dbConnect()


const handler = nc().delete(async(req, res) => {
   
    try {
        const posts = await Post.findOneAndDelete({_id: req.query.id})
        res.send('Deleted !');
    } catch (error) {
        return  res.status(400).json({message:'Sorry something went wrong !'});
    }
   
   
  }) .put(async (req, res) => {

    try {
        const post = await Post.findOne({_id: req.query.id})
        post.title = req.body.title
        post.details= req.body.details
        post.user= req.body.user
        post.age= req.body.age
        await post.save()
        res.send('Updated !');
    } catch (error) {
        return  res.status(400).json({message:'Sorry something went wrong !'});
    }

 
  }) 
 
  export default handler