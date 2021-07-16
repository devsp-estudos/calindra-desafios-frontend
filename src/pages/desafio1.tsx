import { useState } from 'react'
import { Box } from '@chakra-ui/react'

import { Header } from '../layouts/Header'
import { InputSearch } from '../components/InputSearch'
import { ProductsGrid } from '../layouts/ProductsGrid'

import { getProducts, ProductsProps } from '../services/requests/getProducts'

export default function Desafio1() {
  const [products, setProducts] = useState([] as ProductsProps[])

  const handleSearch = async (text: string) => {
    if (!text) return

    const arrayProducts = await getProducts(text)
    setProducts(arrayProducts)
  }

  return (
    <>
      <Header />

      <Box maxW="900px" mx="auto" px={6}>
        <InputSearch handleSearch={handleSearch} />
        <ProductsGrid products={products} />
      </Box>
    </>
  )
}
