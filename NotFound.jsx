import { Container, Title, Text, Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <Container py="md" style={{ textAlign: 'center' }}>
      <Title order={1}>404</Title>
      <Text size="xl" mt="md">Page Not Found</Text>
      <Button mt="xl" onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </Container>
  )
}