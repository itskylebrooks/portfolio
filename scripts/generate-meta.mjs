import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SITE_URL = 'https://itskylebrooks.vercel.app'

// Function to extract meta from MDX files
function extractMetaFromMDX(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const metaMatch = content.match(/export const meta = ({[\s\S]*?})/m)
  if (!metaMatch) return null
  
  try {
    // Simple parsing - extract values
    const metaStr = metaMatch[1]
    const title = metaStr.match(/title:\s*['"]([^'"]+)['"]/)?.[1]
    const date = metaStr.match(/date:\s*['"]([^'"]+)['"]/)?.[1]
    const summary = metaStr.match(/summary:\s*['"]([^'"]+)['"]/)?.[1]
    const version = metaStr.match(/version:\s*['"]([^'"]+)['"]/)?.[1]
    
    return { title, date, summary, version }
  } catch (e) {
    console.error(`Error parsing meta from ${filePath}:`, e)
    return null
  }
}

// Read posts from content directory
const postsDir = join(__dirname, '../content/posts')
const postFiles = readdirSync(postsDir).filter(f => f.endsWith('.mdx'))
const POSTS = postFiles.map(file => {
  const slug = file.replace('.mdx', '')
  const meta = extractMetaFromMDX(join(postsDir, file))
  return { slug, ...meta }
}).filter(p => p.title && p.date)

// Read projects from content directory
const projectsDir = join(__dirname, '../content/projects')
const projectFiles = readdirSync(projectsDir).filter(f => f.endsWith('.mdx'))
const PROJECTS = projectFiles.map(file => {
  const slug = file.replace('.mdx', '')
  const meta = extractMetaFromMDX(join(projectsDir, file))
  return { slug, ...meta }
}).filter(p => p.title && p.date)

console.log(`Found ${POSTS.length} posts and ${PROJECTS.length} projects`)

// Read the base HTML template
const baseHtml = readFileSync(join(__dirname, '../dist/index.html'), 'utf-8')

function generateMetaTags(data) {
  const { title, description, type, url, image = `${SITE_URL}/icon-black.png` } = data
  
  return baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${title} — Kyle Brooks</title>`)
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${description}"`)
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${title}"`)
    .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${description}"`)
    .replace(/<meta property="og:type" content="[^"]*"/, `<meta property="og:type" content="${type}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`)
    .replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${image}"`)
    .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${title}"`)
    .replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${description}"`)
    .replace(/<meta name="twitter:url" content="[^"]*"/, `<meta name="twitter:url" content="${url}"`)
    .replace(/<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${image}"`)
}

// Generate HTML for blog posts
POSTS.forEach(post => {
  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  
  const html = generateMetaTags({
    title: `${post.title} — ${date}`,
    description: post.summary,
    type: 'article',
    url: `${SITE_URL}/blog/${post.slug}`,
  })
  
  const dir = join(__dirname, '../dist/blog', post.slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  console.log(`✓ Generated /blog/${post.slug}/index.html`)
})

// Generate HTML for projects
PROJECTS.forEach(project => {
  const titleWithVersion = project.version 
    ? `${project.title} v${project.version}`
    : project.title
    
  const html = generateMetaTags({
    title: titleWithVersion,
    description: project.summary,
    type: 'website',
    url: `${SITE_URL}/work/${project.slug}`,
  })
  
  const dir = join(__dirname, '../dist/work', project.slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  console.log(`✓ Generated /work/${project.slug}/index.html`)
})

console.log('✓ All meta tags generated successfully!')
