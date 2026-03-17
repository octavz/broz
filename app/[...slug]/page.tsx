import type { Metadata } from 'next'
import Container from '@/components/Container'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getAllMarkdown, getMarkdownBySlug, markdownToHtml } from '@/lib/markdown'

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const slugString = slug.join('/')
  const page = await getMarkdownBySlug(slugString)
  
  return {
    title: page?.title || 'Pagină',
    description: page?.description || '',
  }
}

export async function generateStaticParams() {
  const allPages = await getAllMarkdown()
  
  return allPages
    .filter(page => page.slug !== 'index' && page.slug !== 'contact' && page.slug !== 'servicii' && page.slug !== 'despre-noi')
    .map((page) => ({
      slug: page.slug.split('/'),
    }))
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const slugString = slug.join('/')
  const page = await getMarkdownBySlug(slugString)
  
  if (!page) {
    return (
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Pagina nu a fost găsită</h1>
          <p className="text-gray-600">Pagina căutată nu există.</p>
        </div>
      </Container>
    )
  }

  const contentHtml = await markdownToHtml(page.content)

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-700 text-white py-10 md:py-12">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">{page.title}</h1>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <MarkdownRenderer content={contentHtml} />
          </div>
        </Container>
      </section>
    </>
  )
}