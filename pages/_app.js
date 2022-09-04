import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Webinário | Criptomoedas e impactos na economia</title>
        <meta name="theme-color" content="#FFBB11 "></meta>
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
