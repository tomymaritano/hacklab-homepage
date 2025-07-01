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
    gallery = []
  } = project

  return (
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
            <span>{stack.join(', ')}</span>
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

        {features.length > 0 && (
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

        {/* Gallery images from Sanity or fallback */}
        <SimpleGrid columns={1} gap={4} my={6}>
          {/* Main image */}
          {image?.asset?.url && (
            <WorkImage 
              src={urlFor(image).width(800).url()} 
              alt={image.alt || `${title} - Main image`} 
            />
          )}
          
          {/* Gallery images */}
          {gallery.length > 0 ? (
            gallery.map((galleryImage, index) => (
              <WorkImage 
                key={index}
                src={urlFor(galleryImage).width(800).url()} 
                alt={galleryImage.alt || `${title} - Screenshot ${index + 1}`} 
              />
            ))
          ) : (
            /* Fallback to static images if no gallery */
            <>
              <WorkImage 
                src={`/images/works-migration/${project.slug.current}/web/1.webp`} 
                alt={`${title} - Screenshot 1`} 
              />
              <WorkImage 
                src={`/images/works-migration/${project.slug.current}/web/2.webp`} 
                alt={`${title} - Screenshot 2`} 
              />
              <WorkImage 
                src={`/images/works-migration/${project.slug.current}/web/3.webp`} 
                alt={`${title} - Screenshot 3`} 
              />
            </>
          )}
        </SimpleGrid>
      </Container>
    </Layout>
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