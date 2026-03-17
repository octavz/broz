import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface MarkdownData {
  title: string
  slug: string
  content: string
  excerpt?: string
  date?: string
  [key: string]: any
}

const contentDirectory = path.join(process.cwd(), 'content')

export function getMarkdownFiles(dir: string): string[] {
  const files: string[] = []
  
  if (!fs.existsSync(dir)) return files
  
  const items = fs.readdirSync(dir)
  
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    
    if (stat.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath))
    } else if (item.endsWith('.md')) {
      files.push(fullPath)
    }
  }
  
  return files
}

export function readMarkdownFile(filePath: string): MarkdownData | null {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const relativePath = path.relative(contentDirectory, filePath)
    const slug = relativePath.replace(/\\/g, '/').replace(/\.md$/, '')
    
    return {
      ...data,
      slug,
      content,
    } as MarkdownData
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error)
    return null
  }
}

export async function getAllMarkdown(): Promise<MarkdownData[]> {
  const files = getMarkdownFiles(contentDirectory)
  const markdownData = files
    .map(readMarkdownFile)
    .filter((data): data is MarkdownData => data !== null)
  
  return markdownData.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0
    const dateB = b.date ? new Date(b.date).getTime() : 0
    return dateB - dateA
  })
}

export async function getMarkdownBySlug(slug: string): Promise<MarkdownData | null> {
  const allData = await getAllMarkdown()
  return allData.find(data => data.slug === slug) || null
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return String(result)
}

export function getPageBySlug(slug: string): string {
  const normalizedSlug = slug.endsWith('/') ? slug.slice(0, -1) : slug
  return normalizedSlug.split('/').pop() || 'index'
}