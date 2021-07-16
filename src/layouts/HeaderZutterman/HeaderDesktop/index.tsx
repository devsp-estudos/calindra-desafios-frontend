import { Box, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { TextSpan } from '../TextSpan'

export function HeaderDesktop() {
  return (
    <Box as="header" bg="white" color="#846219">
      <Flex
        maxWidth="1440px"
        height="6.875rem"
        paddingX="4rem"
        margin="0 auto"
        align="center"
        justify="space-between"
      >
        <HStack spacing="1.5rem">
          <Image src="/assets/logo-zutterman.svg" alt="logo zutterman" />

          <Flex align="center" direction="column">
            <Heading fontWeight="bold" fontSize="2.7rem" lineHeight="3rem">
              zutterman
            </Heading>

            <TextSpan>Measure Tapes</TextSpan>
          </Flex>
        </HStack>

        <HStack as="nav" spacing={[null, null, null, '4rem', '6rem']}>
          <TextSpan>ABOUT US</TextSpan>
          <TextSpan>MODELS</TextSpan>
          <TextSpan>GUARANTEE</TextSpan>
        </HStack>
      </Flex>
    </Box>
  )
}
