import {
  Flex,
  VStack,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

import { TextSpan } from '../TextSpan'

export function HeaderMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        as="header"
        height="3.5rem"
        paddingX={['2rem', '4rem']}
        bg="white"
        justify="space-between"
        align="center"
      >
        <Icon
          as={FiMenu}
          w={6}
          h={6}
          cursor="pointer"
          opacity="0.7"
          color="#846219"
          transition="all 0.2s"
          _hover={{ opacity: 1 }}
          onClick={onOpen}
        />

        <Image src="/assets/logo-zutterman.svg" height="2.5rem" alt="logo zutterman" />

        <br />
      </Flex>

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent bg="white" p={4}>
          <DrawerCloseButton size="lg" margin="2rem" color="#846219" />

          <DrawerBody h="100vh" display="flex" flexDir="column" alignItems="center" justifyContent="center">
            <VStack as="nav" color="#846219" spacing="4rem">
              <TextSpan>ABOUT US</TextSpan>
              <TextSpan>MODELS</TextSpan>
              <TextSpan>GUARANTEE</TextSpan>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
