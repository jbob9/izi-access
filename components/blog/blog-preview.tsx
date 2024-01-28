import BlogCard from './blog-card'

const BlogPreview = () => {
  return (
  
  <div className='px-2 md:px-4 py-12'>
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