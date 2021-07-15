import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.800',
      },
    },
  },
  fonts: {
    body: '"Fira Sans", sans-serif',
    heading: '"Fira Sans", sans-serif',
  },
  colors: {
  },
})
