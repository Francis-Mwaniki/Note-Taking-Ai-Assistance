import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Providers from '@/components/Providers'
const inter = Inter({ subsets: ['latin'] })
const dm_sans= DM_Sans({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Your NoteAiAssistant',
  description: 'Use NoteAiAssistant to take notes and organize your thoughts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en" className=' bg-gradient-to-tl from-gray-100 to-gray-300' suppressHydrationWarning>

      <Providers>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    
      </Providers>
    
    </html>
    </ClerkProvider>
  )
}
