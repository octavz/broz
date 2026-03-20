'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ServiceItem {
  id: string
  labelRo: string
  labelEn: string
  hrefRo: string
  hrefEn: string
}

interface NavItem {
  id: string
  labelRo: string
  labelEn: string
  hrefRo: string
  hrefEn: string
}

const navigation = {
  servicii: [
    { id: 'emergency', labelRo: 'Reparații de Urgență', labelEn: 'Emergency Repairs', hrefRo: '/servicii/#urgenta', hrefEn: '/en/services/#urgenta' },
    { id: 'maintenance', labelRo: 'Întreținere Preventivă', labelEn: 'Preventive Maintenance', hrefRo: '/servicii/#intretinere', hrefEn: '/en/services/#intretinere' },
    { id: 'installation', labelRo: 'Instalare și Înlocuire', labelEn: 'Installation and Replacement', hrefRo: '/servicii/#instalare', hrefEn: '/en/services/#instalare' },
    { id: 'consultation', labelRo: 'Consultanță Tehnică', labelEn: 'Technical Consultation', hrefRo: '/servicii/#consultanta', hrefEn: '/en/services/#consultanta' },
  ],
  companie: [
    { id: 'about', labelRo: 'Despre Noi', labelEn: 'About Us', hrefRo: '/despre-noi/', hrefEn: '/en/about/' },
    { id: 'services', labelRo: 'Servicii', labelEn: 'Services', hrefRo: '/servicii/', hrefEn: '/en/services/' },
    { id: 'contact', labelRo: 'Contact', labelEn: 'Contact', hrefRo: '/contact/', hrefEn: '/en/contact/' },
  ],
}

const contactInfo = {
  telefon: '0722 123 456',
  telefonUrgenta: '0722 999 888',
  email: 'contact@centralatermicaservice.ro',
  adresaRo: 'Strada Exemplului nr. 123, București',
  adresaEn: 'Exemplo Street no. 123, Bucharest',
}

export default function Footer() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')
  
  const getLabel = (item: { labelRo: string; labelEn: string }) => {
    return isEnglish ? item.labelEn : item.labelRo
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Centrala Termică Service</h3>
            <p className="text-secondary-300 text-sm leading-relaxed mb-4">
              {isEnglish 
                ? 'Professional repair, maintenance and installation services for heating centrals. Specialized in Ariston, Viessmann, Ferroli, Motan.'
                : 'Servicii profesionale de reparații, mentenanță și instalare de centrale termice. Specializați în Ariston, Viessmann, Ferroli, Motan.'}
            </p>
             <div className="flex space-x-5 items-center mt-2">
               {/* Social/Contact links */}
               <a href="https://facebook.com/centralatermica" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary-400 text-secondary-400 transition-colors">
                 <svg className="inline h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.675 0h-21.35C.597 0 0 .592 0 1.326v21.348C0 23.406.597 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.099 2.797.142v3.24l-1.918.001c-1.504 0-1.797.716-1.797 1.764v2.314h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.406 24 22.674V1.326C24 .592 23.403 0 22.675 0"/></svg>
                 Facebook
               </a>
               <a href="https://wa.me/40722123456" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp" className="hover:text-green-400 text-secondary-400 transition-colors">
                 <svg className="inline h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M12.004 2.002a9.927 9.927 0 0 0-7.033 2.912A9.927 9.927 0 0 0 2.06 12.001c0 1.737.455 3.397 1.322 4.892L2 22l5.237-1.357a10.029 10.029 0 0 0 4.767 1.22h.001c5.513 0 9.984-4.471 9.984-9.984a9.96 9.96 0 0 0-2.916-7.03 9.93 9.93 0 0 0-7.062-2.837zm.001 1.823c2.166 0 4.205.844 5.732 2.371a8.113 8.113 0 0 1 2.36 5.723c0 4.484-3.648 8.13-8.123 8.13a8.16 8.16 0 0 1-4.027-1.036l-.288-.163-3.108.806.827-3.034-.187-.311A8.077 8.077 0 0 1 3.887 12c0-4.484 3.65-8.127 8.118-8.127zm-4.016 4.28a.699.699 0 0 0-.7.7c0 .402.011.734.03.97.122 1.467.689 2.709 1.637 3.733 1.09 1.186 2.161 1.934 3.437 2.288.177.05.338.08.49.08.212 0 .427-.082.598-.253l.859-.784c.145-.145.191-.349.149-.521a.666.666 0 0 0-.222-.356 6.157 6.157 0 0 1-.383-.401c-.274-.333-.36-.54-.547-.981a.482.482 0 0 0-.438-.319h-.002c-.12 0-.234.045-.321.127l-.471.46a4.77 4.77 0 0 1-1.727-2.238l.471-.447a.484.484 0 0 0 .125-.635 5.654 5.654 0 0 1-.547-.965.479.479 0 0 0-.44-.28z"/></svg>
                 WhatsApp
               </a>
               <a href="tel:0722123456" className="hover:text-primary-400 text-secondary-400 transition-colors" aria-label="Telefon">
                 <svg className="inline h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M17.707 14.293l-3.024-3.024a1 1 0 0 0-1.414 0l-1.293 1.293A9.03 9.03 0 0 1 6.438 9.024l1.293-1.293a1 1 0 0 0 0-1.415l-3.023-3.021a1 1 0 0 0-1.414 0l-.707.707C2.458 6.149 2 7.068 2 8c0 7.18 5.82 13 13 13 .931 0 1.85-.458 2.695-1.293l.708-.707a1 1 0 0 0 0-1.414z"/></svg>
                 Telefon
               </a>
             </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">{isEnglish ? 'Services' : 'Servicii'}</h4>
            <ul className="space-y-2">
              {navigation.servicii.map((item) => (
                <li key={item.id}>
                  <Link
                    href={isEnglish ? item.hrefEn : item.hrefRo}
                    className="text-secondary-300 hover:text-white text-sm transition-colors"
                  >
                    {getLabel(item)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">{isEnglish ? 'Company' : 'Compania'}</h4>
            <ul className="space-y-2">
              {navigation.companie.map((item) => (
                <li key={item.id}>
                  <Link
                    href={isEnglish ? item.hrefEn : item.hrefRo}
                    className="text-secondary-300 hover:text-white text-sm transition-colors"
                  >
                    {getLabel(item)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* Contact */}
           <div>
             <h4 className="text-sm font-semibold mb-4">{isEnglish ? 'Contact' : 'Contact'}</h4>
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
                   {contactInfo.telefonUrgenta} ({isEnglish ? 'Emergency' : 'Urgențe'})
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
                   <span>{isEnglish ? contactInfo.adresaEn : contactInfo.adresaRo}</span>
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
              © {new Date().getFullYear()} Centrala Termică Service. {isEnglish ? 'All rights reserved.' : 'Toate drepturile rezervate.'}
            </p>
            <p className="text-secondary-400 text-sm mt-2 md:mt-0">
              {isEnglish ? 'Authorized and certified. Services in Bucharest and Ilfov.' : 'Autorizați și certificați. Servicii în București și Ilfov.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}