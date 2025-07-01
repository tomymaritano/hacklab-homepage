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
  <Layout title="Heirloom">
    <Container>
      <Title>
        Heirloom App <Badge>2023</Badge>
      </Title>
      <P>
        Social media platform focused on preserving and sharing meaningful memories.
        Heirloom isn&apos;t just a social media platform; it&apos;s a product designed to foster deeper 
        connections and preserve memories for a lifetime.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile App (Flutter) & Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, Dart, PostgreSQL</span>
        </ListItem>
        <ListItem>
          <Meta>Users</Meta>
          <span>15,000+ with 30% monthly growth</span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <span>Multimedia memories, Timeline storytelling, Collaborative sharing</span>
        </ListItem>
        <ListItem>
          <Meta>ROI</Meta>
          <span>22% return on investment</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works-migration/heirloom/1.webp" alt="Heirloom App Interface" />
      <WorkImage src="/images/works-migration/heirloom/2.webp" alt="Heirloom Memory Timeline" />
      <WorkImage src="/images/works-migration/heirloom/3.webp" alt="Heirloom Collaborative Features" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'