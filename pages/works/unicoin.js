import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Unicoin">
    <Container>
      <Title>
        Unicoin Web Platform <Badge>2022-2024</Badge>
      </Title>
      <P>
        Secure web platform for managing crypto assets and executing blockchain transactions.
        Built with modern technologies to provide a seamless user experience for cryptocurrency management.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Node.js, Web3, Blockchain APIs</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>Product Manager & UX Lead</span>
        </ListItem>
        <ListItem>
          <Meta>Year</Meta>
          <span>2022-2024</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works-migration/unicoin/web/1.webp" alt="Unicoin Web Platform" />
      <WorkImage src="/images/works-migration/unicoin/web/2.webp" alt="Unicoin Dashboard" />
      <WorkImage src="/images/works-migration/unicoin/web/3.webp" alt="Unicoin Interface" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'