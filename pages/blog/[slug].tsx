import { BlockText } from '@/sanity';
import { getArticle, getArticlesSlug } from '@/sanity/queries';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug as string;
  const article = await getArticle(slug)
  
  return {
    props: {
      article,
    },
    revalidate: 7200,
  };
}

export async function getStaticPaths() {
  const articles = await getArticlesSlug()
  const paths = articles.map((data) => ({
    params: { slug: data.slug },
  })) 
  return {
    paths,
    fallback: false,
  };
}

const Blog = ({ article }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='max-w-2xl container mx-auto pt-20 md:pt-14 pb-20 px-4'>
      {/* <h2 className="font-bold text-3xl pb-12 text-gray-800 dark:text-white">First blog</h2> */}
      <article className="prose lg:prose-xl">
       <BlockText value={article.content}/>
      </article>
    </div>
  )
}

export default Blog