import { ReactNode } from 'react'
import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

interface LinkProps {
  href: string
  children: ReactNode
}

export function Link({ href, children }: LinkProps) {
  return (
    <NextLink href={href} >
      <ChakraLink>
        {children}
      </ChakraLink>
    </NextLink>
  )
}
