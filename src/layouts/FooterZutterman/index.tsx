import { Box, Flex, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { FiYoutube, FiFacebook, FiTwitter } from 'react-icons/fi'

export function FooterZutterman() {
  return (
    <Box bg="#E9E9E9" color="#716565">
      <Flex
        height={['20rem', '14rem']}
        maxWidth="1440px"
        paddingLeft={['0', '0', '9.5rem']}
        margin="0 auto"
        direction={['column', 'row']}
        align="center"
        justify={['center', 'center', 'initial']}
      >
        <VStack
          alignItems={['center', 'flex-start']}
          spacing={['0.75rem', '2.75rem']}
          mr={['0', '8rem', '15rem']}
          mb={['2.5rem', '0']}
        >
          <Heading as="h3" fontSize="1.75rem">
            Follow Us
          </Heading>

          <HStack spacing="2rem">
            <Icon as={FiYoutube} w="2rem" h="2rem" color="#716565" />
            <Icon as={FiFacebook} w="2rem" h="2rem" color="#716565" />
            <Icon as={FiTwitter} w="2rem" h="2rem" color="#716565" />
          </HStack>
        </VStack>

        <VStack alignItems={['center', 'flex-start']} spacing="0.75rem">
          <Heading as="h3" fontSize="1.75rem">
            Contact
          </Heading>

          <Text>
            2490 Leisure Lane <br />
            San Luis Obispo <br />
            California
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}
