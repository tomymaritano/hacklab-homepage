import {
  Container,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Cascade">
    <Container>
      <Title>
        Cascade <Badge>2023</Badge>
      </Title>
      <P>
        A complete revamp of a legacy platform for managing mechanical parts. 
        Cascade is not just a redesign—it&apos;s a transformation that modernizes user experience 
        and functionality while maintaining precision and reliability.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js (upgraded from PHP)</span>
        </ListItem>
        <ListItem>
          <Meta>Users</Meta>
          <span>12,000+ active users</span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <span>Advanced search, Modern UI, Large dataset management</span>
        </ListItem>
        <ListItem>
          <Meta>ROI</Meta>
          <span>40% return on investment</span>
        </ListItem>
        <ListItem>
          <Meta>Growth</Meta>
          <span>22% overall growth</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works-migration/cascade/1.webp" alt="Cascade Dashboard Interface" />
      <WorkImage src="/images/works-migration/cascade/2.webp" alt="Cascade Advanced Search" />
      <WorkImage src="/images/works-migration/cascade/3.webp" alt="Cascade Data Management" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'