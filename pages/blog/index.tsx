import BlogCard from "@/components/blog/blog-card";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="py-20 px-2 md:px-4">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our blog
        </h2>
      </div>
      <div className="pt-5">
      <div className="flex overflow-y-hidden overflow-x-scroll py-4  space-x-3 md:space-x-5 pb-4">
          <div className="min-w-20">
            <Link href={'/'} className="block text-center whitespace-nowrap">
              <div
                className="relative text-gray-900
              before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-gray-900"
              >
                <span>All Posts</span>
              </div>
            </Link>
          </div>
          <div className="min-w-20">
            <Link href="/blog?category=community" className="block group text-center whitespace-nowrap">
              <div
                className="relative text-gray-600
                  before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-gray-900 before:transition before:scale-x-0 group-hover:before:scale-x-100"
              >
                <span className="transition group-hover:text-gray-700 ">
                  Community
                </span>
              </div>
            </Link>
          </div>
          <div className="min-w-20">
            <Link href="/blog?category=press" className="block group text-center whitespace-nowrap">
              <div
                className="relative text-gray-600
                  before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-gray-900 before:transition before:scale-x-0 group-hover:before:scale-x-100"
              >
                <span className="transition group-hover:text-gray-700 ">
                  Press
                </span>
              </div>
            </Link>
          </div>
          <div className="min-w-20">
            <Link href="/blog?category=company-news" className="block group text-center whitespace-nowrap">
              <div
                className="relative text-gray-600
                                              before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left before:mx-auto before:mt-auto before:rounded-full before:bg-gray-900 before:transition before:scale-x-0 group-hover:before:scale-x-100"
              >
                <span className="transition group-hover:text-gray-700">
                  Company News
                </span>
              </div>
            </Link>
          </div>
         
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <BlogCard withMinWidth={false}/>
        <BlogCard withMinWidth={false}/>
        <BlogCard withMinWidth={false}/>
        <BlogCard withMinWidth={false}/>
        <BlogCard withMinWidth={false}/>
        <BlogCard withMinWidth={false}/>
        <BlogCard withMinWidth={false}/>
        <BlogCard withMinWidth={false}/>
      </div>
    </div>
  );
};

export default Blog;
