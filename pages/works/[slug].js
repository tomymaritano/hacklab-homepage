import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import ErrorBoundary from '../../components/error-boundary'
import client, { queries, urlFor } from '../../lib/sanity'

const Work = ({ project }) => {
  if (!project) {
    return (
      <Layout title="Project Not Found">
        <Container>
          <Title>Project Not Found</Title>
          <P>The project you&#39;re looking for doesn&#39;t exist.</P>
        </Container>
      </Layout>
    )
  }

  const {
    title,
    year,
    platform,
    stack = [],
    features = [],
    users,
    roi,
    growth,
    website,
    description,
    image,
    gallery
  } = project

  // Ensure gallery is always an array
  const projectGallery = gallery || []

  return (
    <ErrorBoundary>
      <Layout title={title}>
        <Container>
        <Title>
          {title} <Badge>{year}</Badge>
        </Title>
        <P>{description}</P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>{platform}</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>{Array.isArray(stack) ? stack.join(', ') : stack || 'N/A'}</span>
          </ListItem>
          {users && (
            <ListItem>
              <Meta>Users</Meta>
              <span>{users}</span>
            </ListItem>
          )}
          {roi && (
            <ListItem>
              <Meta>ROI</Meta>
              <span>{roi}</span>
            </ListItem>
          )}
          {growth && (
            <ListItem>
              <Meta>Growth</Meta>
              <span>{growth}</span>
            </ListItem>
          )}
          <ListItem>
            <Meta>Year</Meta>
            <span>{year}</span>
          </ListItem>
        </List>

        {Array.isArray(features) && features.length > 0 && (
          <>
            <P><strong>Key Features:</strong></P>
            <UnorderedList ml={4} my={4}>
              {features.map((feature, index) => (
                <ListItem key={index}>{feature}</ListItem>
              ))}
            </UnorderedList>
          </>
        )}

        {website && (
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Website</Meta>
              <Link href={website} target="_blank">
                {website} <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
        )}

        {/* Gallery images from Sanity */}
        {(image?.asset?._id || projectGallery.length > 0) && (
          <SimpleGrid columns={[1, 2, 2]} gap={4} my={6}>
            {/* Main image */}
            {image?.asset?._id && (() => {
              try {
                const imageUrl = urlFor(image)?.width(800)?.url()
                if (imageUrl) {
                  return (
                    <WorkImage 
                      src={imageUrl} 
                      alt={image.alt || `${title} - Main image`} 
                    />
                  )
                }
              } catch (error) {
                console.warn('Error loading main image:', error)
              }
              return null
            })()}
            
            {/* Gallery images */}
            {projectGallery.map((galleryImage, index) => {
              if (!galleryImage?.asset?._id) return null
              try {
                const imageUrl = urlFor(galleryImage).width(800).url()
                return (
                  <WorkImage 
                    key={index}
                    src={imageUrl} 
                    alt={galleryImage.alt || `${title} - Screenshot ${index + 1}`} 
                  />
                )
              } catch (error) {
                console.warn(`Error loading gallery image ${index}:`, error)
                return null
              }
            })}
          </SimpleGrid>
        )}
        </Container>
      </Layout>
    </ErrorBoundary>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params
  
  try {
    const project = await client.fetch(queries.project, { slug })
    
    if (!project) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        project
      }
    }
  } catch (error) {
    console.error('Failed to fetch project:', error)
    return {
      notFound: true
    }
  }
}

export default Work