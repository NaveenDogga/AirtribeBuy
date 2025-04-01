import { Container, Stack, Title, Button, Alert, LoadingOverlay } from '@mantine/core'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import CartItem from '../components/CartItem'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true)
    setTimeout(() => {
      dispatch(clearCart())
      setShowSuccess(true)
      setIsPlacingOrder(false)
      setTimeout(() => {
        setShowSuccess(false)
        navigate('/')
      }, 2000)
    }, 1000)
  }

  if (cartItems.length === 0) {
    return (
      <Container py="md">
        <Title order={3} mb="md">Your Cart is Empty</Title>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </Container>
    )
  }

  return (
    <Container py="md">
      <LoadingOverlay visible={isPlacingOrder} overlayBlur={2} />
      {showSuccess && (
        <Alert title="Success!" color="green" mb="md">
          Order successfully placed!
        </Alert>
      )}
      <Title order={3} mb="md">Your Cart</Title>
      <Stack spacing="sm">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Stack>
      <Group position="apart" mt="xl">
        <Title order={4}>Total: ${totalAmount.toFixed(2)}</Title>
        <Button size="lg" onClick={handlePlaceOrder}>
          Buy Now
        </Button>
      </Group>
    </Container>
  )
}