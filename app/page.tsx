import type { Metadata } from 'next'
import Container from '@/components/Container'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getAllMarkdown, markdownToHtml } from '@/lib/markdown'

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await getAllMarkdown().then(data => data.find(page => page.slug === 'index'))
  
  return {
    title: homepage?.title || 'Centrala Termică Service',
    description: homepage?.excerpt || homepage?.description || 'Servicii profesionale de reparații, mentenanță și instalare de centrale termice.',
  }
}

export default async function HomePage() {
  const homepage = await getAllMarkdown().then(data => data.find(page => page.slug === 'index'))
  
  if (!homepage) {
    return (
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Pagina nu a fost găsită</h1>
          <p className="text-gray-600">Conținutul pentru pagina principală lipsește.</p>
        </div>
      </Container>
    )
  }

  const excerptHtml = homepage.excerpt 
    ? await markdownToHtml(homepage.excerpt)
    : await markdownToHtml(homepage.content.split('\n\n')[0])
  const contentHtml = await markdownToHtml(homepage.content)

  return (
    <>
       {/* Hero Section */}
       <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
         <div className="container py-8 md:py-10 lg:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              {homepage.title}
            </h1>
            <div className="text-lg md:text-xl text-primary-100 mb-6 md:mb-8 leading-relaxed prose-invert max-w-3xl mx-auto">
              <div dangerouslySetInnerHTML={{ __html: excerptHtml }} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/despre-noi/"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 text-base font-medium text-primary-700 bg-white hover:bg-primary-50 rounded-lg transition-colors shadow-lg"
              >
                Află Mai Multe
              </a>
              <a
                href="/servicii/"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 text-base font-medium text-white border-2 border-white hover:bg-white hover:text-primary-700 rounded-lg transition-colors"
              >
                Vezi Serviciile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <MarkdownRenderer content={contentHtml} />
          </div>
        </Container>
      </section>

      {/* Trust Indicators */}
      <section className="bg-secondary-50 py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-700 font-medium">Ani de Experiență</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Disponibilitate Urgențe</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Clienți Satisfăcuți</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-700 text-white py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ai nevoie de intervenție urgentă?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contactează-ne imediat pentru a programa un tehnician. Servim București și Ilfov.
            </p>
            <a
              href="/contact/"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-primary-700 bg-white hover:bg-primary-50 rounded-lg transition-colors shadow-lg"
            >
              Sună Acum
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}