import '@/assets/styles/app.css'

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
      <body>
        {children}
      </body>
    </html>
  )
}
