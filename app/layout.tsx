import type { Metadata } from 'html-react-parser' // أو استبدل هذا السطر بما يناسب
import './globals.css'

export const metadata = {
  title: 'Benyadeksah Admin',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
