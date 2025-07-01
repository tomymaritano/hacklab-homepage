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
  <Layout title="Nazdik Marketplace">
    <Container>
      <Title>
        Nazdik Marketplace <Badge>2023</Badge>
      </Title>
      <P>
        Marketplace app connecting buyers and sellers of articles in Toronto from the Arabian community, 
        facilitating local commerce with multilingual support and secure transactions.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile Application</span>
        </ListItem>
        <ListItem>
          <Meta>Target</Meta>
          <span>Arabian community in Toronto</span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <span>Multilingual support, Secure transactions, Local commerce</span>
        </ListItem>
        <ListItem>
          <Meta>Type</Meta>
          <span>Collaboration Project</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Product Development</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works-migration/nazdik/1.webp" alt="Nazdik Marketplace Interface" />
      <WorkImage src="/images/works-migration/nazdik/2.webp" alt="Nazdik Product Listings" />
      <WorkImage src="/images/works-migration/nazdik/3.webp" alt="Nazdik User Experience" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'