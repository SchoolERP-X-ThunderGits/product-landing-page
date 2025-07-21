import '@/assets/styles/app.css'
import { ReactNode } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  title: 'edugits | Smart School ERP',
  description: 'edugits - The ultimate school management solution.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@700;900&family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
