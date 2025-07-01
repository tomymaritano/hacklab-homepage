import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Dripnex">
    <Container>
      <Title>
        Dripnex Wallet <Badge>2025</Badge>
      </Title>
      <P>
        Minimalistic Web3 wallet that allows users to send, receive, and manage multiple tokens 
        across different networks. Designed to make crypto more accessible to everyone through 
        a simple, user-friendly interface.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dripnex.app" target="_blank">
            dripnex.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Tailwind CSS, Ethers.js, Wagmi, Viem</span>
        </ListItem>
        <ListItem>
          <Meta>Networks</Meta>
          <span>Ethereum, Polygon, BSC, Arbitrum, Optimism</span>
        </ListItem>
        <ListItem>
          <Meta>Users</Meta>
          <span>1,200+ connected wallets</span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <span>Multi-chain support, NFTs, Donations, Message signing</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works-migration/dripnex/wallet.webp" alt="Dripnex Wallet Interface" />
      <WorkImage src="/images/works-migration/dripnex/transactionlist.webp" alt="Dripnex Transaction History" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'