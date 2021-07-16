import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'
import '../styles/scrollbar.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Calindra Desafios</title>
        <meta name="description" content="Desafio Tech Frontend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
