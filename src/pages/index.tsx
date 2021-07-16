import { Stack } from '@chakra-ui/react'
import { CardHome } from '../components/CardHome'

export default function Home() {
  return (
    <Stack height="100vh" alignItems="center" justifyContent="center" spacing="4rem">
      <CardHome href="/desafio1" text="Desafio 1" />
      <CardHome href="/desafio2" text="Desafio 2" />
    </Stack>
  )
}
