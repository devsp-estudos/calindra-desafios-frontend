import { useBreakpointValue } from '@chakra-ui/react'

import { HeaderMobile } from './HeaderMobile'
import { HeaderDesktop } from './HeaderDesktop'

export function HeaderZutterman() {
  const isHeaderMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isHeaderMobile) {
    return <HeaderMobile />
  }

  return <HeaderDesktop />
}
