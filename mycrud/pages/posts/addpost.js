 
import domain from "@/utils/config"
import axios from "axios"
import { useState } from "react"
 
 


export default function AddPost() {


const [title,settitle] = useState('')
const [imageurl,setimageurl] = useState('')
const [details,setdetails] = useState('')

async function addPost() {

    const post = {    
        title,
        imageurl,
        details
    }
    console.log(post)
    try {
        await axios.post(`${domain}/posts`,post )
        alert('Post added successfully')
    } catch (error) {
        console.log(error)
    }
}

    return (
      <>
       <h1>Add post page</h1>
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
                    <button   className="btn btn-primary" onClick={addPost} >Create</button>
                </div>
            </div>
         
       </div>
      </>
    )
  }