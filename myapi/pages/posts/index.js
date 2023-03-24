import axios from 'axios';

export default function Posts({posts}) {
    return (
      <>
        <h1>Posts page </h1>
        <div>
          {posts.map(
            (post)=>{   
                return <h3>  {post.title}   </h3>
            }
          )}  
        </div>
      </>
    )
  }


export async function getStaticProps() {

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data)

        return {
            props: {posts:response.data}, // will be passed to the page component as props
          }

    } catch (error) {
        console.log(error)
    }

    
  }


