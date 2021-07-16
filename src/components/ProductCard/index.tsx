import { Flex } from '@chakra-ui/react'

interface ProductCardProps {
  text: string
}

export function ProductCard({ text }: ProductCardProps) {
  return (
    <Flex padding="1rem 1.5rem" boxShadow="lg" align="center" justify="center">
      {text}
    </Flex>
  )
}
