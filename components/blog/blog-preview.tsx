import Link from 'next/link'
import BlogCard from './blog-card'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const BlogPreview = () => {
  return (
  
  <div className='px-2 md:px-4 pt-4 pb-12'>
    <div className='flex items-center justify-between'>
      <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 text-center">
        Latest blog
      </h2>
      <Link href={'/blog'} className='flex items-center space-x-1 text-blue-500'>
        <span className='font-semibold'>See all</span> <ArrowRightIcon className='w-5 h-5' stroke='2'/> 
      </Link>
    </div>
    <div className="flex overflow-y-hidden overflow-x-scroll py-4 scrollbar-none space-x-3 md:space-x-5 pb-4">
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      
    </div>
  </div>
                                      
  )
}

export default BlogPreview