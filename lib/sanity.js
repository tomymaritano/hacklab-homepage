import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: 'ebl2wr39',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  // Enable faster queries
  token: process.env.SANITY_API_TOKEN,
}

const client = createClient(config)

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  if (!source) return null
  return builder.image(source).auto('format').fit('max')
}

// Helper to get optimized image URL with specific dimensions
export const getOptimizedImageUrl = (source, width = 800, height = null) => {
  if (!source) return null
  let imageBuilder = builder.image(source).auto('format').fit('max').width(width)
  if (height) {
    imageBuilder = imageBuilder.height(height)
  }
  return imageBuilder.url()
}

export default client

// Queries for different content types
export const queries = {
  // Get all projects (optimized for listing)
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
        url
      },
      alt
    }
  }`,
  
  // Get single project by slug (full data)
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
        url
      },
      alt
    },
    gallery[] {
      asset->{
        _id,
        url
      },
      alt,
      caption
    },
    content,
    type,
    order
  }`,
  
  // Get featured projects only
  featuredProjects: `*[_type == "project" && featured == true] | order(order asc) {
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
    type
  }`,
  
  // Get projects by type
  projectsByType: `*[_type == "project" && type == $type] | order(order asc) {
    _id,
    title,
    slug,
    description,
    year,
    platform,
    stack[0...3],
    users,
    type
  }`,
  
  // Get bio/about content
  about: `*[_type == "about"][0] {
    _id,
    name,
    title,
    description,
    location,
    bio,
    profileImage,
    experience,
    skills,
    social
  }`,
  
  // Get skills
  skills: `*[_type == "skill"] | order(order asc) {
    _id,
    name,
    category,
    level,
    order
  }`
}