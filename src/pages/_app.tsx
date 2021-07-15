import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Box, ChakraProvider } from '@chakra-ui/react'

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

      <Box maxW="1168px" mx="auto" px={6}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
