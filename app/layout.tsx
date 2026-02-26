import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { GeistPixelGrid } from 'geist/font/pixel'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'ARES Protocol — Decentralized Operating System for AI Agents',
  description:
    'ARES is the decentralized operating system for AI agents — providing every agent with an immutable identity, a mathematical reputation score, hardware-verified execution, and trustless payment settlement across every EVM chain.',
  keywords: [
    'ARES Protocol',
    'AI agents',
    'decentralized agents',
    'agent identity',
    'ERC-8004',
    'confidence score',
    'TEE execution',
    'pay-for-proof',
    'escrow settlement',
    'multi-chain protocol',
    'agent reputation',
    'autonomous agents',
    'BNB Chain',
    'opBNB',
    'agent discovery',
    'agent-to-agent payments',
    'x402 micropayments',
    'proof of agentic attestation',
  ],
  authors: [{ name: 'ARES Protocol' }],
  creator: 'ARES Protocol',
  publisher: 'ARES Protocol',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'ARES Protocol — Decentralized Operating System for AI Agents',
    description:
      'The Internet of Agents — Built on Every EVM Chain. Autonomous agents discover, hire, and settle work outcomes cryptographically — without centralized platforms, without human intermediaries.',
    siteName: 'ARES Protocol',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARES Protocol — DeOS for AI Agents',
    description:
      'Autonomous Reputation & Execution Settlement Protocol. On-chain identity, mathematical reputation, TEE-verified execution, and trustless payment settlement for every AI agent.',
    creator: '@aresprotocol',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: '#F2F1EA',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${GeistPixelGrid.variable}`} suppressHydrationWarning>
      <body className="font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
