import { AspectRatio, Flex, Heading, Image } from '@chakra-ui/react'
import { HeaderZutterman } from '../layouts/HeaderZutterman'

const heightMobile = 'calc(100vh - 3.5rem)'
const heightDesktop = 'calc(100vh - 6.875rem)'

export default function Desafio2() {
  return (
    <>
      <HeaderZutterman />

      <Flex
        as="section"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        height={[heightMobile, heightMobile, heightMobile, heightDesktop]}
        padding="1.5rem"
        bg="#E9E9E9"
        align="center"
        justify="center"
      >
        <Heading
          as="h1"
          color="#755050"
          fontSize={['3rem', '4rem', '5.15rem']}
          lineHeight={['3.5rem', '5rem', '6rem']}
          margin={['0 0 1.5rem', '0 2rem']}
        >
          Measuring <br /> everything
        </Heading>

        <AspectRatio w="100%" maxWidth="43rem" ratio={18 / 8}>
          <Image src="/assets/img-tape-1.png" alt="tape 1" />
        </AspectRatio>
      </Flex>
    </>
  )
}
