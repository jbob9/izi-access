import React from 'react'
import BlogCard from './blog-card'

const BlogPreview = () => {
  return (
    
    <div className="py-16">
    <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="grid gap-12 md:gap-6 md:grid-cols-2 lg:gap-12">
        <BlogCard/>
        <BlogCard/>
        
      </div>
    </div>
  </div>
                                      
  )
}

export default BlogPreview