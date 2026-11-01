import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fight My Fine Print — Contract intelligence for everyone',
  description: 'Spot the risk. Feel the trap. Counter the offer.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
