import { SimpleGrid } from '@chakra-ui/react'

import { ProductsProps } from '../../services/requests/getProducts'
import { ProductCard } from '../../components/ProductCard'

interface ProductsGridProps {
  products: ProductsProps[]
}

export function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <SimpleGrid mt="3rem" columns={[1, 2]} spacing="1rem">
      {products.map(({ id, name }) => (
        <ProductCard key={id} text={name} />
      ))}
    </SimpleGrid>
  )
}
