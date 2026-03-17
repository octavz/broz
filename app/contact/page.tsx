import type { Metadata } from 'next'
import Container from '@/components/Container'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import ContactForm from '@/components/ContactForm'
import { getAllMarkdown, markdownToHtml } from '@/lib/markdown'

export async function generateMetadata(): Promise<Metadata> {
  const contactPage = await getAllMarkdown().then(data => data.find(page => page.slug === 'contact'))
  
  return {
    title: contactPage?.title || 'Contact',
    description: contactPage?.description || 'Contactează-ne pentru servicii de centrale termice.',
  }
}

export default async function ContactPage() {
  const contactPage = await getAllMarkdown().then(data => data.find(page => page.slug === 'contact'))
  
  if (!contactPage) {
    return (
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Pagina nu a fost găsită</h1>
          <p className="text-gray-600">Conținutul pentru pagina Contact lipsește.</p>
        </div>
      </Container>
    )
  }

  const contentHtml = await markdownToHtml(contactPage.content)

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-700 text-white py-10 md:py-12">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">{contactPage.title}</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">
              Contactează-ne pentru orice nevoă legată de centrala termică. Suntem disponibili 24/7 pentru urgențe.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Phone */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Telefon</h3>
                  <div className="space-y-2">
                    <a
                      href="tel:0722123456"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <svg className="h-5 w-5 mr-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-medium">Programare:</span> 0722 123 456
                    </a>
                    <a
                      href="tel:0722999888"
                      className="flex items-center text-red-600 hover:text-red-700 transition-colors font-medium"
                    >
                      <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Urgențe:</span> 0722 999 888
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Email</h3>
                  <a
                    href="mailto:contact@centralatermicaservice.ro"
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <svg className="h-5 w-5 mr-3 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@centralatermicaservice.ro
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Adresă</h3>
                  <div className="flex items-start text-gray-700">
                    <svg className="h-5 w-5 mr-3 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Strada Exemplului nr. 123, București</span>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Program</h3>
                  <div className="text-gray-700 space-y-1">
                    <p>Luni - Vineri: 08:00 - 20:00</p>
                    <p>Sâmbătă: 09:00 - 14:00</p>
                    <p>Duminică: Închis</p>
                    <p className="text-red-600 font-medium pt-2">Urgențe: 24/7</p>
                  </div>
                </div>

                {/* Coverage */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Zona de acoperire</h3>
                  <p className="text-gray-700">
                    <strong>București:</strong> Toate sectoarele (1-6) și zonele limitrofe.
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Ilfov:</strong> Voluntari, Bragadiru, Pantelimon, Popești-Leordeni, Chiajna, Buftea, Măgurele, Berceni și alte localități.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content + Form */}
            <div className="lg:col-span-2 space-y-12">
              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cum funcționează?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-3">1</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contactezi</h3>
                    <p className="text-gray-600 text-sm">Ne scrii prin formular sau ne suni direct la numărul de telefon.</p>
                  </div>
                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-3">2</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Răspundem</h3>
                    <p className="text-gray-600 text-sm">În max. 2 ore în program, imediat în caz de urgență. Stabilim o oră convenabilă.</p>
                  </div>
                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-3">3</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Intervenția</h3>
                    <p className="text-gray-600 text-sm"> Tehnicianul ajunge la tine la ora stabilită, face diagnosticul și oferă prețul clar.</p>
                  </div>
                  <div className="bg-secondary-50 p-6 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-3">4</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Finalizare</h3>
                    <p className="text-gray-600 text-sm">Dacă ești de acord, rezolvăm problema și primești factura pe email.</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Trimite-ne un mesaj</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-50 border-t border-red-200 py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Ai o urgență?</h2>
            <p className="text-red-700 mb-6 max-w-2xl mx-auto">
              Defecțiuni grave cu centrala termică? Nu aștepta! Sună imediat la numărul de urgență pentru intervenție rapidă.
            </p>
            <a
              href="tel:0722999888"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-lg"
            >
              <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Sună Urgențe: 0722 999 888
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}