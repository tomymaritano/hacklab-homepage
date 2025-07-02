import React from 'react'
import { Container, Heading, Text, Button, VStack } from '@chakra-ui/react'
import Layout from './layouts/article'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Layout title="Something went wrong">
          <Container>
            <VStack spacing={4} py={10}>
              <Heading size="lg">Something went wrong</Heading>
              <Text>We apologize for the inconvenience. Please try refreshing the page.</Text>
              <Button 
                onClick={() => window.location.reload()} 
                colorScheme="teal"
              >
                Refresh Page
              </Button>
            </VStack>
          </Container>
        </Layout>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary