import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isProduction = process.env.NODE_ENV === 'production'
  
  return (
    <html 
      lang="ro"
      data-scroll-behavior="smooth"
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
