import BlogCard from "@/components/blog/blog-card";
import Link from "next/link";

import { getArticles } from "@/sanity/queries";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const articles = await getArticles(30);

  return {
    props: {
      articles,
    },
    revalidate: 7200,
  };
}

const Blog = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="pt-16 pb-24 px-2 md:px-4">
      {/* <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our blog
        </h2>
      </div> */}

      <div className="flex items-start md:items-center flex-col md:flex-row justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-gray-900">
          Recent posts
        </h2>
        <div className="flex overflow-y-hidden overflow-x-scroll py-4 space-x-3 md:space-x-5 max-w-full">
          <div className="min-w-20">
            <Link href={"/"} className="block text-center whitespace-nowrap">
              <div className="leading-5 text-sm text-gray-500 hover:text-gray-400 rounded-3xl p-2 compose-shadow">
                <span>All Posts</span>
              </div>
            </Link>
          </div>
          <div className="min-w-20">
            <Link
              href="/blog?category=community"
              className="block group text-center whitespace-nowrap"
            >
              <div className="leading-5 text-sm text-gray-500 hover:text-gray-400 rounded-3xl p-2 hover:compose-shadow">
                <span>Community</span>
              </div>
            </Link>
          </div>
          <div className="min-w-20">
            <Link
              href="/blog?category=press"
              className="block group text-center whitespace-nowrap"
            >
              <div className="leading-5 text-sm text-gray-500 hover:text-gray-400 rounded-3xl p-2 hover:compose-shadow">
                <span>Press</span>
              </div>
            </Link>
          </div>
          <div className="min-w-20">
            <Link
              href="/blog?category=company-news"
              className="block group text-center whitespace-nowrap"
            >
              <div className="leading-5 text-sm text-gray-500 hover:text-gray-400 rounded-3xl p-2 hover:compose-shadow">
                <span>Company News</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {articles.map((article) => (
          <BlogCard withMinWidth={false} article={article} key={article._id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
