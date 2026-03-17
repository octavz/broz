import Link from 'next/link'

const navigation = {
  servicii: [
    { name: 'Reparații de Urgență', href: '/servicii/#urgenta' },
    { name: 'Întreținere Preventivă', href: '/servicii/#intretinere' },
    { name: 'Instalare și Înlocuire', href: '/servicii/#instalare' },
    { name: 'Consultanță Tehnică', href: '/servicii/#consultanta' },
  ],
  companie: [
    { name: 'Despre Noi', href: '/despre-noi/' },
    { name: 'Servicii', href: '/servicii/' },
    { name: 'Contact', href: '/contact/' },
  ],
}

const contactInfo = {
  telefon: '0722 123 456',
  telefonUrgenta: '0722 999 888',
  email: 'contact@centralatermicaservice.ro',
  adresa: 'Strada Exemplului nr. 123, București',
}

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Centrala Termică Service</h3>
            <p className="text-secondary-300 text-sm leading-relaxed mb-4">
              Servicii profesionale de reparații, mentenanță și instalare de centrale termice.
              Specializați în Ariston, Viessmann, Ferroli, Motan.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders - can add real links later */}
              <span className="text-secondary-400">Facebook</span>
              <span className="text-secondary-400">Google</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2">
              {navigation.servicii.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Compania</h4>
            <ul className="space-y-2">
              {navigation.companie.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.telefon.replace(/\s/g, '')}`}
                  className="text-secondary-300 hover:text-white text-sm transition-colors flex items-center"
                >
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {contactInfo.telefon}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.telefonUrgenta.replace(/\s/g, '')}`}
                  className="text-secondary-300 hover:text-white text-sm transition-colors flex items-center"
                >
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {contactInfo.telefonUrgenta} (Urgențe)
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-secondary-300 hover:text-white text-sm transition-colors flex items-center"
                >
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <span className="text-secondary-300 text-sm flex items-start">
                  <svg className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{contactInfo.adresa}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © {new Date().getFullYear()} Centrala Termică Service. Toate drepturile rezervate.
            </p>
            <p className="text-secondary-400 text-sm mt-2 md:mt-0">
              Autorizați și certificați. Servicii în București și Ilfov.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}