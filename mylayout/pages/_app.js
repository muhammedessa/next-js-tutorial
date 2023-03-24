import '@/styles/globals.css'

import MainLayout from "@/components/mainLayout"
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
   
   <MainLayout>

      <Head>
        <title>MUhammed Essa</title>
      </Head>

  <Component {...pageProps} />
  </MainLayout>
  )
}
