import Image from 'next/image'
import myimage from '../public/myimage.png'
export default function NotFound() {
 
    return (
      <>
     <h1>Sorry not found !</h1>

     <Image 
      src={myimage}
      alt="Picture of the author"
      width={800}
      height={500}
    />

      </>
    )
  }