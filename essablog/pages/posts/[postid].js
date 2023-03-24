import { useRouter } from 'next/router'

export default function postID() {
    const router = useRouter()
    return(
        <>
        <h1>Post number :  {router.query.postid} </h1>
        </>
    )
    
}