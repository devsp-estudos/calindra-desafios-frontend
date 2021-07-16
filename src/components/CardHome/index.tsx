import { Box, Heading } from '@chakra-ui/react'

import { Link } from '../Link'

interface CardHomeProps {
  href: string
  text: string
}

export function CardHome({ href, text }: CardHomeProps) {
  return (
    <Link href={href}>
      <Box padding="4rem 6rem" borderRadius="3xl" transition="all 0.2s" _hover={{ boxShadow: 'xl' }}>
        <Heading>{text}</Heading>
      </Box>
    </Link>
  )
}
