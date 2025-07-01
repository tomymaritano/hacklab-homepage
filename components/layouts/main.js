import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Box
        as="a"
        href="#main-content"
        position="absolute"
        top="-40px"
        left="6px"
        bg="blue.500"
        color="white"
        px={4}
        py={2}
        borderRadius="md"
        textDecoration="none"
        zIndex={1000}
        _focus={{
          top: "6px"
        }}
        aria-label="Skip to main content"
      >
        Skip to main content
      </Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tomás Maritano - Indie Developer with 7+ years experience. Product Manager, UX Lead, and Full-Stack Developer building innovative digital solutions." />
        <meta name="keywords" content="indie developer, product manager, full-stack developer, react, node.js, portfolio, argentina, rosario, hacklab" />
        <meta name="author" content="Tomás Maritano" />
        <meta name="author" content="hacklabdog" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#202023" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://hacklab.dog/" />
        <meta name="twitter:title" content="Tomás Maritano" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hacklabdog" />
        <meta name="twitter:creator" content="@hacklabdog" />
        <meta name="twitter:description" content="Indie Developer with 7+ years experience. Building innovative digital products." />
        <meta name="twitter:image" content="https://hacklab.dog/card.png" />
        <meta property="og:site_name" content="Tomás Maritano" />
        <meta name="og:title" content="Tomás Maritano" />
        <meta property="og:description" content="Indie Developer with 7+ years experience. Product Manager, UX Lead, and Full-Stack Developer building innovative digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hacklab.dog/" />
        <meta property="og:image" content="https://hacklab.dog/card.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <title>Tomás Maritano - Homepage</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tomás Maritano",
              "alternateName": "Tomy Maritano",
              "jobTitle": "Indie Developer",
              "description": "Product Manager, UX Lead, and Full-Stack Developer with 7+ years experience building innovative digital solutions",
              "url": "https://hacklab.dog",
              "image": "https://hacklab.dog/images/me.jpeg",
              "sameAs": [
                "https://github.com/tomymaritano",
                "https://twitter.com/hacklabdog",
                "https://linkedin.com/in/tomymaritano",
                "https://instagram.com/tomymaritano"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rosario",
                "addressCountry": "Argentina"
              },
              "knowsAbout": [
                "React",
                "Node.js",
                "Product Management",
                "UX Design",
                "Full-Stack Development",
                "Blockchain",
                "Web3"
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "Wolt"
              }
            })
          }}
        />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14} id="main-content">
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
