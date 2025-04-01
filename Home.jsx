import { SimpleGrid, Container, LoadingOverlay } from '@mantine/core'
import { useGetAllProductsQuery } from '../features/cart/cartApi'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const { data: products, isLoading } = useGetAllProductsQuery()

  return (
    <Container py="md">
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: 'md', cols: 3, spacing: 'md' },
          { maxWidth: 'sm', cols: 2, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' },
        ]}
      >
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  )
}