import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/scrollbar.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Calindra Desafios</title>
        <meta name="description" content="Desafio Tech Frontend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
