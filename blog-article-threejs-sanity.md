# 🚀 Cómo Integrar Three.js y Sanity CMS en tu Portfolio de Next.js

*Por Tomás Maritano - Enero 2025*

---

## 📌 Introducción

¿Alguna vez quisiste combinar gráficos 3D interactivos con un CMS headless moderno? En este artículo te voy a mostrar **paso a paso** cómo integré **Three.js** y **Sanity CMS** en mi portfolio de Next.js, creando una experiencia visual impresionante y un sistema de gestión de contenido flexible.

### 🎯 ¿Qué vamos a lograr?

- **Modelo 3D interactivo** con Three.js (PC que rota y responde al mouse)
- **CMS gratuito** con Sanity para gestionar proyectos
- **Optimización de imágenes** automática con lazy loading
- **Integración perfecta** entre componentes 3D y contenido dinámico
- **Performance optimizada** para web y mobile

### 🛠️ Stack Tecnológico

```json
{
  "frontend": "Next.js 13",
  "3d": "Three.js",
  "cms": "Sanity CMS",
  "styling": "Chakra UI",
  "deployment": "Vercel"
}
```

---

## 🎨 Parte 1: Configurando Three.js

### 1.1 Instalación de dependencias

Primero, instalamos las dependencias necesarias para Three.js:

```bash
npm install three @types/three
# O si usas yarn
yarn add three @types/three
```

### 1.2 Creando el componente 3D

Vamos a crear un componente que renderice un modelo 3D de una PC:

```javascript
// components/voxel-pc.js
import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { PcSpinner, PcContainer } from './voxel-pc-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelPc = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()
  const urlPcGLB = '/pc.glb'

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      // Configurar renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer

      // Crear escena
      const scene = new THREE.Scene()

      // Configurar cámara
      const target = new THREE.Vector3(0, 0, 0)
      const initialCameraPosition = new THREE.Vector3(
        12 * Math.sin(0.2 * Math.PI),
        6,
        12 * Math.cos(0.2 * Math.PI)
      )

      const scale = scH * 0.003 + 2.2
      const camera = new THREE.OrthographicCamera(
        -scale, scale, scale, -scale, 0.01, 50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      // Agregar iluminación
      const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI)
      scene.add(ambientLight)

      // Configurar controles
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      // Cargar modelo 3D
      loadGLTFModel(scene, urlPcGLB, {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      }).catch((error) => {
        console.error('Error loading pc.glb:', error)
        setLoading(false)
      })

      // Loop de animación
      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)
        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 6
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      // Cleanup
      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  // Manejar resize
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <PcContainer ref={refContainer}>
      {loading && <PcSpinner />}
    </PcContainer>
  )
}

export default VoxelPc
```

### 1.3 Loader para modelos GLTF

Creamos un helper para cargar modelos 3D:

```javascript
// lib/model.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

const draco = new DRACOLoader()
draco.setDecoderConfig({ type: 'js' })
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.setDRACOLoader(draco)

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'pc'
        obj.position.set(0, 0, 0)
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        
        // Escalar el modelo
        obj.scale.setScalar(4.5)
        
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      error => reject(error)
    )
  })
}
```

### 1.4 Componente de loading

```javascript
// components/voxel-pc-loader.js
import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const PcSpinner = () => (
  <Box
    position="absolute"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
  >
    <Spinner size="xl" color="orange.400" />
  </Box>
)

export const PcContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-pc"
    m="auto"
    mt={['20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

PcContainer.displayName = 'PcContainer'
```

---

## 🏗️ Parte 2: Configurando Sanity CMS

### 2.1 Instalación de Sanity

```bash
npm install @sanity/client sanity @sanity/image-url
```

### 2.2 Configuración del cliente

```javascript
// lib/sanity.js
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: 'tu-project-id', // Obtén esto desde sanity.io
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}

const client = createClient(config)
const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  if (!source) return null
  return builder.image(source).auto('format').fit('max')
}

export const getOptimizedImageUrl = (source, width = 800, height = null) => {
  if (!source) return null
  let imageBuilder = builder.image(source).auto('format').fit('max').width(width)
  if (height) {
    imageBuilder = imageBuilder.height(height)
  }
  return imageBuilder.url()
}

export default client

// Queries optimizadas
export const queries = {
  projects: `*[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    year,
    platform,
    stack[0...3],
    users,
    roi,
    growth,
    order,
    featured,
    type,
    image {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip
        }
      },
      alt
    }
  }`,
  
  project: `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    year,
    platform,
    stack,
    features,
    users,
    roi,
    growth,
    website,
    image {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip
        }
      },
      alt
    },
    gallery[] {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip
        }
      },
      alt,
      caption
    },
    content,
    type,
    order
  }`
}
```

### 2.3 Variables de entorno

```env
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=tu-api-token
```

### 2.4 Schema para proyectos

```javascript
// sanity/schemas/project.js
export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }
          ]
        }
      ]
    },
    {
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Main Project', value: 'main' },
          { title: 'Collaboration', value: 'collaboration' },
          { title: 'Side Project', value: 'side' }
        ]
      },
      initialValue: 'main'
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'users',
      title: 'Users/Downloads',
      type: 'string',
      description: 'e.g., "10K+ users", "5K downloads"'
    },
    {
      name: 'roi',
      title: 'ROI/Impact',
      type: 'string',
      description: 'e.g., "30% increase in sales"'
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'url'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'year'
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
}
```

---

## 🖼️ Parte 3: Optimización de Imágenes

### 3.1 Componente de imagen optimizada

```javascript
// components/sanity-image.js
import Image from 'next/image'
import { urlFor } from '../lib/sanity'

const SanityImage = ({ 
  image, 
  alt = '', 
  width = 800, 
  height = 600, 
  className = '',
  priority = false,
  quality = 85,
  ...props 
}) => {
  if (!image?.asset) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">No image</span>
      </div>
    )
  }

  const imageUrl = urlFor(image)
    .width(width)
    .height(height)
    .quality(quality)
    .auto('format')
    .url()

  const blurDataURL = image.asset.metadata?.lqip || 
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+PC9zdmc+'

  return (
    <Image
      src={imageUrl}
      alt={alt || image.alt || 'Image'}
      width={width}
      height={height}
      className={className}
      priority={priority}
      placeholder="blur"
      blurDataURL={blurDataURL}
      {...props}
    />
  )
}

export default SanityImage
```

### 3.2 Configuración de Next.js

```javascript
// next.config.js
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
  }
}
```

---

## 🔗 Parte 4: Integrando Todo

### 4.1 Página de proyectos

```javascript
// pages/works.js
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import client, { queries, urlFor } from '../lib/sanity'

const Works = ({ projects = [] }) => {
  if (projects.length === 0) {
    return <div>No projects found</div>
  }

  const mainProjects = projects.filter(p => p.type === 'main')
  const collaborations = projects.filter(p => p.type === 'collaboration') 
  const sideProjects = projects.filter(p => p.type === 'side')

  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {mainProjects.map((project, index) => {
            const thumbnail = project.image?.asset?.url 
              ? urlFor(project.image).width(400).height(225).auto('format').quality(85).url()
              : '/fallback-image.jpg'
            
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
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              {collaborations.map((project, index) => (
                <Section key={project._id} delay={0.3 + index * 0.1}>
                  <WorkGridItem 
                    id={project.slug.current} 
                    title={project.title} 
                    thumbnail={urlFor(project.image).width(400).height(225).url()}
                  >
                    {project.description}
                  </WorkGridItem>
                </Section>
              ))}
            </SimpleGrid>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const projects = await client.fetch(queries.projects)
    return {
      props: { projects }
    }
  } catch (error) {
    console.error('Failed to fetch projects from Sanity:', error)
    return {
      props: { projects: [] }
    }
  }
}

export default Works
```

### 4.2 Página principal con modelo 3D

```javascript
// pages/index.js
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GitHubIcon, TwitterIcon, LinkedInIcon } from '../components/icons'
import Image from 'next/image'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import VoxelPc from '../components/voxel-pc'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

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
          <p>Digital Craftsman ( Developer / Designer / Entrepreneur )</p>
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
            <ProfileImage
              src="/images/tomy.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
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
          end-to-end product development and team leadership.
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
          <BioYear>1995</BioYear>
          Born in Rosario, Argentina.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Started as Frontend Developer
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Promoted to Product Manager at Wolt
        </BioSection>
        <BioSection>
          <BioYear>2025 to present</BioYear>
          Working as an indie developer
        </BioSection>
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
        </List>
      </Section>

      <Section delay={0.3}>
        <Box align="center" my={4}>
          <VoxelPc />
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
```

---

## ⚡ Parte 5: Optimizaciones y Performance

### 5.1 Lazy Loading de componentes 3D

```javascript
// components/lazy-voxel.js
import dynamic from 'next/dynamic'
import { PcSpinner, PcContainer } from './voxel-pc-loader'

const LazyVoxelPc = dynamic(() => import('./voxel-pc'), {
  ssr: false,
  loading: () => (
    <PcContainer>
      <PcSpinner />
    </PcContainer>
  )
})

export default LazyVoxelPc
```

### 5.2 Optimización de queries GROQ

```javascript
// Queries optimizadas para diferentes casos de uso
export const optimizedQueries = {
  // Para listados (solo datos esenciales)
  projectsListing: `*[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    type,
    "thumbnail": image.asset->url
  }[0...12]`, // Limitar resultados
  
  // Para página individual (datos completos)
  projectDetail: `*[_type == "project" && slug.current == $slug][0] {
    ...,
    "imageUrl": image.asset->url,
    "galleryImages": gallery[].asset->url
  }`,
  
  // Para sitemap (solo slugs)
  projectSlugs: `*[_type == "project"].slug.current`
}
```

### 5.3 Implementación de ISR (Incremental Static Regeneration)

```javascript
// pages/works/[slug].js
export async function getStaticProps({ params }) {
  const project = await client.fetch(queries.project, { slug: params.slug })
  
  if (!project) {
    return { notFound: true }
  }

  return {
    props: { project },
    revalidate: 60 // Revalidar cada minuto
  }
}

export async function getStaticPaths() {
  const slugs = await client.fetch(`*[_type == "project"].slug.current`)
  
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: 'blocking'
  }
}
```

---

## 🚀 Parte 6: Despliegue y Configuración

### 6.1 Configuración de Vercel

```json
// vercel.json
{
  "functions": {
    "pages/api/revalidate.js": {
      "maxDuration": 10
    }
  },
  "env": {
    "NEXT_PUBLIC_SANITY_PROJECT_ID": "@sanity-project-id",
    "SANITY_API_TOKEN": "@sanity-api-token"
  }
}
```

### 6.2 Webhook para revalidación automática

```javascript
// pages/api/revalidate.js
export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate('/works')
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
```

### 6.3 Configuración de Sanity Studio

```javascript
// sanity.config.js
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  
  plugins: [
    deskTool(),
    visionTool()
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  tools: (prev) => {
    if (process.env.NODE_ENV === 'development') {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  }
})
```

---

## 📊 Parte 7: Métricas y Monitoring

### 7.1 Performance monitoring

```javascript
// lib/analytics.js
export const trackModelLoad = (loadTime, modelSize) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', '3d_model_loaded', {
      event_category: 'Performance',
      event_label: 'PC Model',
      value: Math.round(loadTime),
      custom_parameter_1: modelSize
    })
  }
}

export const trackCMSQuery = (queryType, responseTime) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cms_query', {
      event_category: 'CMS',
      event_label: queryType,
      value: Math.round(responseTime)
    })
  }
}
```

### 7.2 Error boundary para componentes 3D

```javascript
// components/error-boundary.js
import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'

class ModelErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Model Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box textAlign="center" p={8}>
          <Text mb={4}>Could not load 3D model</Text>
          <Button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </Button>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ModelErrorBoundary
```

---

## 🎯 Conclusiones y Mejores Prácticas

### ✅ Lo que logramos

1. **Experiencia visual impresionante** con modelos 3D interactivos
2. **CMS completamente gratuito** con Sanity
3. **Performance optimizada** con lazy loading e ISR
4. **Escalabilidad** para crecer con tu portfolio
5. **SEO friendly** con renderizado server-side

### 🔧 Mejores prácticas implementadas

- **Lazy loading** para componentes pesados
- **Error boundaries** para componentes 3D
- **Optimización de imágenes** automática
- **Queries eficientes** con GROQ
- **Tipado con TypeScript** (opcional)
- **Monitoring de performance**

### 📈 Próximos pasos

1. **Implementar PWA** para experiencia móvil mejorada
2. **Agregar animaciones** con Framer Motion
3. **A/B testing** de componentes 3D
4. **Internacionalización** (i18n)
5. **Analytics avanzados** con evento tracking

### 🔗 Recursos útiles

- [Three.js Documentation](https://threejs.org/docs/)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

---

## 💻 Código completo

Todo el código de este artículo está disponible en mi [GitHub](https://github.com/tomymaritano/portfolio-hacklab).

¿Te gustó este tutorial? Sígueme en [Twitter](https://twitter.com/hacklabdog) para más contenido sobre desarrollo web y tecnología.

---

*Este artículo fue creado como parte de mi experiencia desarrollando mi portfolio personal. Si tienes preguntas o sugerencias, no dudes en contactarme.*

**Tags:** `three.js` `sanity-cms` `nextjs` `react` `3d-web` `portfolio` `javascript` `webgl`