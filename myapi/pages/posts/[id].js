import axios from 'axios';

export default function Posts({post}) {
    return (
      <>
        <h1>Posts page </h1>
        <div>
        <h3> userId :  {post.userId}   </h3>
        <h3>  id: {post.id}   </h3>
        <h3>  title : {post.title}   </h3>
        <h3>  body: {post.body}   </h3>
        </div>
      </>
    )
  }


export async function getServerSideProps(context) {

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`)
        console.log(response.data)

        return {
            props: {post:response.data}, // will be passed to the page component as props
          }

    } catch (error) {
        console.log(error)
    }

    
  }


