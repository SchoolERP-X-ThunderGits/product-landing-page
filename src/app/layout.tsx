import '@/assets/styles/app.css'

export const metadata = {
  title: 'SMS Pro | Bulk Messaging Made Simple',
  description: 'SMS Pro - Send bulk messages with ease, speed, and precision.',
  icons: {
    icon: '/smspro-favicon.png', // Make sure this file is placed in the /public folder
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
