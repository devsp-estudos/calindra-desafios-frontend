import { Text } from '@chakra-ui/react'

interface TextSpanProps {
  children: string
}

export function TextSpan({ children }: TextSpanProps) {
  return (
    <Text
      as="span"
      fontSize="1rem"
      lineHeight="1.2rem"
      letterSpacing="0.35rem"
    >
      {children}
    </Text>
  )
}
