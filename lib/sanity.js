import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
}

const client = createClient(config)

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client

// Queries for different content types
export const queries = {
  // Get all projects
  projects: `*[_type == "project"] | order(order asc) {
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
    image,
    gallery,
    order,
    featured,
    type
  }`,
  
  // Get single project by slug
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
    image,
    gallery,
    content,
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