import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MēbeļCRM',
  description: 'CRM mēbeļu ražotājiem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="lv">
      <body>{children}</body>
    </html>
  )
}
