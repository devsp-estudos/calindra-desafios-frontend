import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'

export function SecondSection() {
  return (
    <Box bg="#506FA9">
      <Flex
        as="section"
        direction={['column', 'column', 'column', 'row']}
        maxWidth="1440px"
        height="100vh"
        margin="0 auto"
        paddingLeft="1.5rem"
        align="flex-end"
        justify={['center', 'center', 'initial']}
        position="relative"
      >
        <Box margin={['0 auto 0', '8rem auto 0', '6rem auto 0', '0 0 10rem 10rem']} color="white">
          <Heading
            as="h1"
            maxW="35rem"
            fontSize={['2.3rem', '3rem', '4rem', '4.3rem']}
            lineHeight={['3rem', '3.75rem', '5rem', '5rem']}
            mb={['1rem', '1rem', '1rem', '1.5rem']}
          >
            We are Leader <br /> in Measure Tapes
          </Heading>

          <Text
            maxW={['16rem', '20rem', '26rem', '32rem']}
            fontSize={['1.5rem', '1.75rem', '2rem', '2.5rem']}
            lineHeight={['2rem', '2.5rem', '3rem', '3.5rem']}
            fontWeight="light"
          >
            There are 5x the circumference of planet earth in metric tapes.
          </Text>
        </Box>

        <Image
          w="100%"
          maxWidth={['36rem', '36rem', '46rem', '65rem']}
          position={['initial', 'initial', 'initial', 'absolute']}
          top="2rem"
          right="0"
          src="/assets/img-tape-2.png"
          alt="tape 1"
        />
      </Flex>
    </Box>
  )
}
