import { Flex, HStack } from '@chakra-ui/react'
import { FiYoutube, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'

import { ActiveLink } from './ActiveLink'
import { IconLink } from './IconLink'

export function Header() {
  return (
    <Flex as="header" my={8} justify="space-evenly" align="center">
      <HStack as="nav" spacing={8}>
        <ActiveLink href="/desafio1">Desafio1</ActiveLink>
        <ActiveLink href="/desafio2">Desafio2</ActiveLink>
      </HStack>

      <HStack spacing={6}>
        <IconLink
          href="https://www.youtube.com/channel/UCFIHeoKduKPsE2m1oSiK9Mg"
          as={FiYoutube}
          accentColor="red.500"
        />

        <IconLink
          href="https://www.linkedin.com/in/vitordevsp"
          as={FiLinkedin}
          accentColor="blue.600"
        />

        <IconLink
          href="https://www.github.com/vitordevsp"
          as={FiGithub}
          accentColor="gray.600"
        />

        <IconLink
          href="https://www.instagram.com/vitordevsp"
          as={FiInstagram}
          accentColor="red.400"
        />
      </HStack>
    </Flex>
  )
}
