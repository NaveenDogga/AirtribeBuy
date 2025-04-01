import { Card, Image, Text, Group, Badge, Button } from '@mantine/core'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={product.image}
          height={160}
          alt={product.title}
          fit="contain"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} lineClamp={1}>{product.title}</Text>
        <Badge color="pink" variant="light">
          ${product.price}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed" lineClamp={2}>
        {product.description}
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        component={Link}
        to={`/product/${product.id}`}
      >
        View details
      </Button>
    </Card>
  )
}