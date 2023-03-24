import Footer from "./Footer"
import Header from "./Header"
 


export default function MainLayout(props) {
    return (
      <>
      <Header/>
      {props.children}
       <Footer/>
      </>
    )
  }