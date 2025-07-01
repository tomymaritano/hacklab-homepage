import client, { queries } from './sanity'

// Get all projects
export async function getAllProjects() {
  try {
    const projects = await client.fetch(queries.projects)
    return projects || []
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

// Get single project by slug
export async function getProject(slug) {
  try {
    const project = await client.fetch(queries.project, { slug })
    return project
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

// Get about content
export async function getAbout() {
  try {
    const about = await client.fetch(queries.about)
    return about
  } catch (error) {
    console.error('Error fetching about:', error)
    return null
  }
}

// Get projects by type
export async function getProjectsByType(type) {
  try {
    const query = `*[_type == "project" && type == $type] | order(order asc) {
      _id,
      title,
      slug,
      description,
      year,
      image,
      featured
    }`
    const projects = await client.fetch(query, { type })
    return projects || []
  } catch (error) {
    console.error('Error fetching projects by type:', error)
    return []
  }
}

// Get featured projects
export async function getFeaturedProjects() {
  try {
    const query = `*[_type == "project" && featured == true] | order(order asc) {
      _id,
      title,
      slug,
      description,
      year,
      image
    }`
    const projects = await client.fetch(query)
    return projects || []
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }
}