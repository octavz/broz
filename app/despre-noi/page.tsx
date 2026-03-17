import type { Metadata } from 'next'
import Container from '@/components/Container'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { getAllMarkdown, markdownToHtml } from '@/lib/markdown'

export async function generateMetadata(): Promise<Metadata> {
  const aboutPage = await getAllMarkdown().then(data => data.find(page => page.slug === 'despre-noi'))
  
  return {
    title: aboutPage?.title || 'Despre Noi',
    description: aboutPage?.description || 'Cunoaște echipa și istoria noastră.',
  }
}

export default async function AboutPage() {
  const aboutPage = await getAllMarkdown().then(data => data.find(page => page.slug === 'despre-noi'))
  
  if (!aboutPage) {
    return (
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Pagina nu a fost găsită</h1>
          <p className="text-gray-600">Conținutul pentru pagina Despre Noi lipsește.</p>
        </div>
      </Container>
    )
  }

  const contentHtml = await markdownToHtml(aboutPage.content)

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-700 text-white py-10 md:py-12">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">{aboutPage.title}</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
              Cunoaște echipa noastră, experiența și valorile care ne diferențiază.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <MarkdownRenderer content={contentHtml} />
          </div>
        </Container>
      </section>

      {/* Experience Section */}
      <section className="bg-secondary-50 py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">De ce să ne alegi pe noi?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-4">10+</div>
                <h3 className="text-xl font-semibold mb-2">Ani de Experiență</h3>
                <p className="text-gray-600">Am rezolvat mii de probleme la centrale termice</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-4">24/7</div>
                <h3 className="text-xl font-semibold mb-2">Disponibilitate</h3>
                <p className="text-gray-600">Intervenții urgente oricând ai nevoie</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Branduri</h3>
                <p className="text-gray-600">Specializare în Ariston, Viessmann, Ferroli, Motan</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}