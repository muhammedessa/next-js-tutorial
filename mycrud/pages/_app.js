import MainLayout from "@/components/MainLayout"
import 'bootstrap/dist/css/bootstrap.css'
//import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return <MainLayout> 
  <Component {...pageProps} /> 
  </MainLayout>
}
