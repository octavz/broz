import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Centrala Termică Service - Reparații și Mentenanță',
    template: '%s | Centrala Termică Service'
  },
  description: 'Servicii profesionale de reparații, mentenanță și instalare de centrale termice. Specializați în Ariston, Viessmann, Ferroli, Motan. Acoperim București și Ilfov.',
  keywords: ['centrală termică', 'reparații centrale termice', 'întreținere centrală', 'Ariston', 'Viessmann', 'Ferroli', 'Motan', 'București', 'Ilfov'],
  authors: [{ name: 'Centrala Termică Service' }],
  creator: 'Centrala Termică Service',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://centralatermicaservice.ro',
    siteName: 'Centrala Termică Service',
    title: 'Centrala Termică Service - Reparații și Mentenanță',
    description: 'Servicii profesionale de reparații, mentenanță și instalare de centrale termice în București și Ilfov.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isProduction = process.env.NODE_ENV === 'production'
  
  return (
    <html 
      lang="ro" 
      style={{
        '--bg-logo-url': isProduction ? "url('/broz/logo-broz.png')" : "url('/logo-broz.png')"
      } as React.CSSProperties}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}