import axios from "axios"
import { useRouter } from 'next/router'
import domain from "@/utils/config"
import { useState } from "react"


export default function postID({post}) {
 
const [title,settitle] = useState(post.title)
const [imageurl,setimageurl] = useState(post.imageurl)
const [details,setdetails] = useState(post.details)

async function updatePost() {

  const postUpdate = {    
    title,
    imageurl,
    details
} 
try {
  await axios.put(`${domain}/posts/${post._id}`,postUpdate )
  alert('Post updated successfully')
} catch (error) {
  alert(error)
  console.log(error)
}
  
}

    return (
      <>
      <h1>Update post  </h1>
      <div className="container">
       
           <div className="mb-3 row">
               <div className="col-8">
                   <input type="text" className="form-control" name="title" 
                   value={title} 
                   onChange={ (e)=>{settitle(e.target.value)} }
                   placeholder="title"/>
               </div>
           </div>
           <div className="mb-3 row">
               <div className="col-8">
                   <input type="text" className="form-control" name="imageurl" 
                   value={imageurl} 
                   onChange={ (e)=>{setimageurl(e.target.value)} }
                   placeholder="image url"/>
               </div>
           </div>
           <br/>
           <div className="mb-3 row">
               <div className="col-8">
               <textarea className="form-control" name="details" 
                value={details} 
                onChange={ (e)=>{setdetails(e.target.value)} }
               rows="3"></textarea>

                </div>
           </div>
           
           
           
           <div className="mb-3 row">
               <div className="offset-sm-4 col-sm-8">
                   <button   className="btn btn-primary" onClick={updatePost} >Update</button>
               </div>
           </div>
        
      </div>
     </>
    )
  }


  export async function getServerSideProps(context) {

    const response = await axios.get(`${domain}/posts/${context.query.id}`)
    return {
      props: {
        post : response.data
      }, // will be passed to the page component as props
    }
  }