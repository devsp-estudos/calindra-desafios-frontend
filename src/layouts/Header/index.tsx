import { Flex, HStack, Stack } from '@chakra-ui/react'
import { FiYoutube, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'

import { ActiveLink } from './ActiveLink'
import { IconLink } from './IconLink'

export function Header() {
  return (
    <Flex as="header" my={8} justify={['space-around', 'space-evenly']} align="center">
      <Stack as="nav" spacing={[1, 8]} direction={['column', 'row']}>
        <ActiveLink href="/desafio1">Desafio1</ActiveLink>
        <ActiveLink href="/desafio2">Desafio2</ActiveLink>
      </Stack>

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
