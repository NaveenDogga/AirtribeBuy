import { Badge, Group, ActionIcon, Title } from '@mantine/core'
import { IconShoppingCart } from '@tabler/icons-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const cartItems = useSelector(state => state.cart.items)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Group position="apart" p="md" style={{ borderBottom: '1px solid #ddd' }}>
      <Title order={3}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          AirtribeBuy
        </Link>
      </Title>
      <Link to="/cart">
        <ActionIcon variant="outline" size="lg">
          <IconShoppingCart size="1.1rem" />
          {totalItems > 0 && (
            <Badge
              color="red"
              variant="filled"
              size="xs"
              style={{ position: 'absolute', top: -5, right: -5 }}
            >
              {totalItems}
            </Badge>
          )}
        </ActionIcon>
      </Link>
    </Group>
  )
}