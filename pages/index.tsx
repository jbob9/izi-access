import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/home/header'
import Services from '../components/home/services'
import Layout from '../components/layout'
import BlogPreview from '../components/blog/blog-preview'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Header/>

      <Services/>
      <BlogPreview/>
    </Layout>
  )
}
