import { useState, Ref } from 'react'
import { Button, Input, InputGroup, InputGroupProps, InputRightElement } from '@chakra-ui/react'

interface InputSearchProps extends InputGroupProps {
  handleSearch: (text: string) => void
}

export function InputSearch({ handleSearch, ...props }: InputSearchProps) {
  const [value, setValue] = useState('')

  return (
    <InputGroup mt="5rem" size="md" {...props}>
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Pesquise pelo nome do Produto:"
        value={value}
        variant="filled"
        backgroundColor="gray.700"
        _hover={{ backgroundColor: 'gray.600' }}
        onChange={e => setValue(e.target.value)}
      />

      <InputRightElement width="6.5rem">
        <Button h="1.75rem" size="sm" colorScheme="blue" onClick={() => handleSearch(value)}>
          Pesquisar
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
