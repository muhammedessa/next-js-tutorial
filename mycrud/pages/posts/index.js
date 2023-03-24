import PostItem from "@/components/PostItem"
import domain from "@/utils/config"
import axios from "axios"
  


export default function Index({ postData }) {

  //console.log(postData)

  const posts = postData.map( (post)=>{
    return <PostItem post={post}/> 
  }

  )

  return (
    <>
    {posts}
    </>
  )
}


export async function getStaticProps() {
  const response = await axios.get(`${domain}/posts`)
  return {
    props: {
      postData: response.data
    }
  }
}