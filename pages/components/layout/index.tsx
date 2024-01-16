
import { PropsWithChildren } from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout