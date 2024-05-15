import React from 'react'
import './globals.css'
import Header from '@/components/Header'

import Footer from '@/components/Footer'
import Providers from './Providers'

export const metadata = {
  title: "Movie App"
}

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <body className="bg-slate-50 dark:bg-slate-950">
        <Providers>
          <Header />
          <div>
            {children}
          </div>
          <Footer />
        </Providers>

      </body>
    </html>
  )
}

export default Layout