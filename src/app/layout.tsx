import '@/assets/styles/app.css'
import Head from 'next/head'

export const metadata = {
  title: 'EduSmart | Smart School ERP',
  description: 'EduSmart - The ultimate school management solution.',
  icons: {
    icon: '/favicon.png', // Place favicon.ico in the /public folder
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700;900&family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}
