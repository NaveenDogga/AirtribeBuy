import { Container, Image, Text, Title, Group, NumberInput, Button, LoadingOverlay } from '@mantine/core'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../features/cart/cartApi'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

export default function ProductDetails() {
  const { id } = useParams()
  const { data: product, isLoading } = useGetProductByIdQuery(id)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity
    }))
  }

  if (isLoading) return <LoadingOverlay visible overlayBlur={2} />

  return (
    <Container py="md">
      <Group align="flex-start" spacing="xl">
        <Image
          src={product.image}
          width={400}
          height={400}
          fit="contain"
          alt={product.title}
        />
        <div style={{ flex: 1 }}>
          <Title order={2}>{product.title}</Title>
          <Text size="xl" weight={700} color="blue" mt="sm">
            ${product.price}
          </Text>
          <Text mt="md">{product.description}</Text>
          
          <Group mt="xl">
            <NumberInput
              value={quantity}
              onChange={(val) => setQuantity(val)}
              min={1}
              max={10}
              label="Quantity"
            />
            <Button
              size="lg"
              mt="auto"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Group>
        </div>
      </Group>
    </Container>
  )
}