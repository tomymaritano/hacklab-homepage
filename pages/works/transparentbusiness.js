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
  <Layout title="Transparent Business">
    <Container>
      <Title>
        Transparent Business <Badge>2024</Badge>
      </Title>
      <P>
        Freelance workforce tracker designed to provide real-time visibility, accountability, 
        and productivity metrics for distributed teams. Helps organizations manage remote 
        contractors efficiently with transparent task tracking.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Next.js, Firebase, Chakra UI</span>
        </ListItem>
        <ListItem>
          <Meta>Clients</Meta>
          <span>120+ active clients</span>
        </ListItem>
        <ListItem>
          <Meta>Hours Tracked</Meta>
          <span>40,000+ monthly freelance hours</span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <span>Real-time tracking, Dashboard analytics, Tool integrations</span>
        </ListItem>
        <ListItem>
          <Meta>ROI</Meta>
          <span>60% return on investment</span>
        </ListItem>
        <ListItem>
          <Meta>Growth</Meta>
          <span>30% quarter-over-quarter growth</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works-migration/transparentbusiness/1.webp" alt="Transparent Business Dashboard" />
      <WorkImage src="/images/works-migration/transparentbusiness/2.webp" alt="Time Tracking Interface" />
      <WorkImage src="/images/works-migration/transparentbusiness/3.webp" alt="Analytics and Reports" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'