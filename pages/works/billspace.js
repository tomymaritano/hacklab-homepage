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
  <Layout title="Billspace">
    <Container>
      <Title>
        Billspace APP <Badge>2023</Badge>
      </Title>
      <P>
        Subscription management app to track, organize, and optimize recurring payments.
        Helps users manage their subscriptions and avoid unwanted charges.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Mobile Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Node.js, Payment APIs</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Product Engineer</span>
        </ListItem>
        <ListItem>
          <Meta>Type</Meta>
          <span>Collaboration</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works-migration/billspace/1.webp" alt="Billspace" />
      <WorkImage src="/images/works-migration/billspace/2.webp" alt="Billspace" />
      <WorkImage src="/images/works-migration/billspace/3.webp" alt="Billspace" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'