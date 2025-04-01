import { Group, Image, Text, Button, NumberInput, ActionIcon } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../features/cart/cartSlice'

export default function CartItem({ item }) {
  const dispatch = useDispatch()

  return (
    <Group position="apart" p="md" style={{ borderBottom: '1px solid #ddd' }}>
      <Group>
        <Image
          src={item.image}
          width={80}
          height={80}
          fit="contain"
          alt={item.title}
        />
        <div>
          <Text weight={500}>{item.title}</Text>
          <Text size="sm" color="dimmed">
            ${item.price} each
          </Text>
        </div>
      </Group>
      <Group>
        <Text>Qty: {item.quantity}</Text>
        <Text weight={700}>${(item.price * item.quantity).toFixed(2)}</Text>
        <ActionIcon
          color="red"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          <IconTrash size="1rem" />
        </ActionIcon>
      </Group>
    </Group>
  )
}