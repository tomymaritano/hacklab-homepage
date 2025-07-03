import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbBlog from '../public/images/links/blog.png'
import thumbSalary from '../public/images/works-migration/salaryboard.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie developer based in Rosario!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tomás Maritano
          </Heading>
          <p>Indie Developer & Digital Creator</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/me.jpeg"
              alt="Tomás Maritano - Indie Developer and Product Manager profile photo"
              width="100"
              height="100"
              priority
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Tomás is an indie developer with 7+ years scaling from Frontend Developer to
          Product Manager at companies like Wolt, Unicoin, and Valere. He specializes in
          end-to-end product development and team leadership. Now focused on indie development,
          combining product expertise with technical skills to build innovative solutions.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2017</BioYear>
          Started as Frontend Developer, building user-friendly web experiences with modern technologies.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Scaled to Team Lead at Wolt (Denmark), managing multidisciplinary teams and strategic planning.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Evolved into Product Management, leading full-stack development and product lifecycle across multiple companies.
        </BioSection>
        <BioSection>
          <BioYear>2025 to present</BioYear>
          Focus on indie development, combining technical expertise with product strategy to build innovative digital solutions.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          I enjoy solving puzzles, AI (Claude Code), droning, photography, minimalist design, reading hacker books, keyboards, and collecting action figures.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/tomymaritano" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @tomymaritano
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/hacklabdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @hacklabdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/tomymaritano" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @tomymaritano
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/hacklabdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @hacklabdog
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://blog.hacklab.dog"
            title="Hacklab Blog"
            thumbnail={thumbBlog}
          >
            Product development insights and tutorials
          </GridItem>
          <GridItem
            href="https://salaries.hacklab.dog"
            title="Salaryboard"
            thumbnail={thumbSalary}
          >

            Platform built for developers and HR
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://blog.hacklab.dog/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
