import axios from 'axios'

export interface ProductsProps {
  _meta: {
    score: number
    visitsClickCount: string
  },
  id: string
  name: string
  type: string
}

interface ReqProps {
  products: ProductsProps[]
}

export async function getProducts(text: string) {
  try {
    const url = `https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${text}&source=nanook`
    const { data } = await axios.get<ReqProps>(url)

    return data.products
  } catch (error) {
    return [] as ProductsProps[]
  }
}
