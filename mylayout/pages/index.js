import indexStyle from '@/styles/Index.module.css'
 

export default function Home() {
  return (
    <>
      
      <h1 className="header"> Hello this is index page</h1>
      <h1 className={indexStyle.myinfo}> Iam still in index page </h1>
      <h1 className={indexStyle.h1}> This color index page </h1>
     
    </>
  )
}
