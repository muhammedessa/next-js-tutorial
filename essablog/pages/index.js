import Link from 'next/link'
import { useRouter } from 'next/router'
 
export default function Home() {

  const router = useRouter()
  const studentname = 'muhammedhameed'
  const studentNo = '234234234'

  return (
    <>
      <h1>Hello Muhammed Essa</h1>

      
      <Link href="/muhammed">muhammed</Link> <br></br>
      <Link href="/aboutme">about me</Link><br></br>
      <Link href="/users">Users</Link><br></br>

<button onClick={()=>{router.push('/posts')} }  >Click to post</button>
<button onClick={()=>{router.push( `/services/${studentname}/${studentNo}` )} }  >services</button>
    </>

   
  )
}
