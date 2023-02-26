import './globals.css'

export const metadata = {
  title: 'Aarush Tanwar',
  description: 'Full Stack Developer Portfolio - Aarush Tanwar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
