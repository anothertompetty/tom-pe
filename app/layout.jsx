import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tom Petty, Designer',
  description: 'Tom Petty is a Product Designer with 15 years of experience building and leading startups. Ex incident.io, Google, GoCardless, Cord.',
  keywords: 'Tom Petty, Designer, UX Design, Product Design, Startup Design, Incident.io, Cord, Google Play Console',
  author: 'Tom Petty',
  robots: 'index, follow',
  openGraph: {
    title: 'Tom Petty, Designer',
    description: 'Tom Petty is a Product Designer with 15 years of experience building and leading startups. Ex incident.io, Google, GoCardless, Cord.',
    type: 'website',
    url: 'https://tom.pe',
    images: [
      {
        url: '/images/social/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tom Petty, Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tom Petty, Designer',
    description: 'Tom Petty is a Product Designer with 15 years of experience building and leading startups. Ex incident.io, Google, GoCardless, Cord.',
    images: ['/images/social/og-image.png'],
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F8F8' },
    { media: '(prefers-color-scheme: dark)', color: '#101010' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images/social/favicon.ico" />
        <link rel="preload" href="/fonts/Octave-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Octave-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 