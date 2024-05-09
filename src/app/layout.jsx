import React from 'react'
import './globals.css'
import Header from '@/components/Header'

import Footer from '@/components/Footer'

export const metadata = {
    title:"Movie App"
}

const Layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Header/>
            <div>
                {children}
            </div>
     
            <Footer/>
        </body>
    </html>
  )
}

export default Layout