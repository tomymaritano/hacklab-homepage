import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import client, { queries, urlFor } from '../lib/sanity'

import thumbUnicoin from '../public/images/works-migration/unicoin-web.webp'
import thumbBillspace from '../public/images/works-migration/billspace.webp'
import thumbHeirloom from '../public/images/works-migration/heirloom.webp'
import thumbTransparentBusiness from '../public/images/works-migration/transparentbusiness.webp'
import thumbNazdik from '../public/images/works-migration/nazdik.webp'
import thumbCascade from '../public/images/works-migration/cascade.webp'
import thumbDolarGaucho from '../public/images/works-migration/dolargaucho.webp'
import thumbDripnex from '../public/images/works-migration/dripnex.webp'
import thumbGrandvalira from '../public/images/works-migration/grandvalira.webp'
import thumbJetsetz from '../public/images/works-migration/jetsetz.webp'
import thumbLego from '../public/images/works-migration/legocover.png'
import thumbSalaryBoard from '../public/images/works-migration/salaryboard.webp'

const Works = ({ projects = [] }) => {
  // Fallback thumbnails map
  const thumbnails = {
    unicoin: thumbUnicoin,
    billspace: thumbBillspace,
    heirloom: thumbHeirloom,
    transparentbusiness: thumbTransparentBusiness,
    nazdik: thumbNazdik,
    cascade: thumbCascade,
    dolargaucho: thumbDolarGaucho,
    dripnex: thumbDripnex,
    grandvalira: thumbGrandvalira,
    jetsetz: thumbJetsetz,
    legoecommerce: thumbLego,
    salaryboard: thumbSalaryBoard
  }

  // If we have Sanity projects, use them; otherwise fallback to static content
  if (projects.length > 0) {
    const mainProjects = projects.filter(p => p.type === 'main')
    const collaborations = projects.filter(p => p.type === 'collaboration') 
    const sideProjects = projects.filter(p => p.type === 'side')

    return (
      <Layout title="Works">
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            Works
          </Heading>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {mainProjects.map((project, index) => {
              // Use Sanity image if available, otherwise fallback to static
              const thumbnail = project.image?.asset?.url 
                ? urlFor(project.image).width(400).height(225).auto('format').quality(85).url()
                : thumbnails[project.slug.current] || thumbUnicoin
              
              return (
                <Section key={project._id} delay={index * 0.1}>
                  <WorkGridItem 
                    id={project.slug.current} 
                    title={project.title} 
                    thumbnail={thumbnail}
                  >
                    {project.description}
                  </WorkGridItem>
                </Section>
              )
            })}
          </SimpleGrid>

          {collaborations.length > 0 && (
            <>
              <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                  Collaborations
                </Heading>
              </Section>

              <SimpleGrid columns={[1, 2, 2]} gap={6}>
                {collaborations.map((project, index) => {
                  const thumbnail = project.image?.asset?.url 
                    ? urlFor(project.image).width(400).height(225).auto('format').quality(85).url()
                    : thumbnails[project.slug.current] || thumbNazdik
                  
                  return (
                    <Section key={project._id} delay={0.3 + index * 0.1}>
                      <WorkGridItem 
                        id={project.slug.current} 
                        title={project.title} 
                        thumbnail={thumbnail}
                      >
                        {project.description}
                      </WorkGridItem>
                    </Section>
                  )
                })}
              </SimpleGrid>
            </>
          )}

          {sideProjects.length > 0 && (
            <>
              <Section delay={0.4}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                  More Projects
                </Heading>
              </Section>

              <SimpleGrid columns={[1, 2, 2]} gap={6}>
                {sideProjects.map((project, index) => {
                  const thumbnail = project.image?.asset?.url 
                    ? urlFor(project.image).width(400).height(225).auto('format').quality(85).url()
                    : thumbnails[project.slug.current] || thumbDripnex
                  
                  return (
                    <Section key={project._id} delay={0.5 + index * 0.1}>
                      <WorkGridItem 
                        id={project.slug.current} 
                        title={project.title} 
                        thumbnail={thumbnail}
                      >
                        {project.description}
                      </WorkGridItem>
                    </Section>
                  )
                })}
              </SimpleGrid>
            </>
          )}
        </Container>
      </Layout>
    )
  }

  // Fallback to static content
  return (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="unicoin" title="Unicoin Web Platform" thumbnail={thumbUnicoin}>
            Secure web platform for managing crypto assets and executing 
            blockchain transactions
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="billspace"
            title="Billspace APP"
            thumbnail={thumbBillspace}
          >
            Subscription management app to track, organize, and optimize 
            recurring payments
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="heirloom"
            title="Heirloom App"
            thumbnail={thumbHeirloom}
          >
            Social app for capturing, sharing, and preserving 
            meaningful moments
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="transparentbusiness" thumbnail={thumbTransparentBusiness} title="Transparent Business">
            Platform for transparent management of freelance contracts, 
            work logs, and project collaboration
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="nazdik" thumbnail={thumbNazdik} title="Nazdik Marketplace">
            Marketplace connecting buyers and sellers in Toronto&#39;s 
            Arabian community
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="cascade"
            thumbnail={thumbCascade}
            title="Cascade"
          >
            Revamped PHP platform for efficient stock control 
            and inventory management
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="dolargaucho" thumbnail={thumbDolarGaucho} title="Dolar Gaucho">
            Interactive visualization tool for Argentina&#39;s 
            historical exchange rates
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          More Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="dripnex" thumbnail={thumbDripnex} title="Dripnex Wallet">
            Modern crypto wallet with a clean interface, enabling secure 
            and intuitive management of digital assets
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="grandvalira"
            thumbnail={thumbGrandvalira}
            title="Contacts Directory"
          >
            Dashboard for efficient browsing, searching, and management 
            of professional contacts
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="jetsetz" thumbnail={thumbJetsetz} title="Jetsetz Bidding App">
            Bidding platform enabling users to participate in auctions
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="salaryboard" thumbnail={thumbSalaryBoard} title="Salary Board">
            Comprehensive platform for exploring, comparing, and analyzing 
            international salary data
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

}

export async function getServerSideProps() {
  try {
    const projects = await client.fetch(queries.projects)
    return {
      props: {
        projects
      }
    }
  } catch (error) {
    console.error('Failed to fetch projects from Sanity:', error)
    return {
      props: {
        projects: []
      }
    }
  }
}

export default Works
