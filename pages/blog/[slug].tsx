import { BlockText } from "@/sanity";
import { getArticle, getArticlesSlug } from "@/sanity/queries";
import dayjs from "dayjs";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Image from "next/image";

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug as string;
  const article = await getArticle(slug);

  return {
    props: {
      article,
    },
    revalidate: 7200,
  };
}

export async function getStaticPaths() {
  const articles = await getArticlesSlug();
  const paths = articles.map((data) => ({
    params: { slug: data.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

const Blog = ({ article }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="max-w-2xl container mx-auto pt-20 md:pt-14 pb-20 px-4">
      <div className="mb-10">
        <h1 className="font-medium leading-10 text-3xl">{article.title}</h1>
        <div className="flex items-center space-x-2 text-gray-500 text-xs mt-6">
          <span >
            {dayjs(article._createdAt).format("MMM DD, YYYY")}
          </span>
          <span>by</span>
          <Image
            className="w-6 h-6 object-cover rounded-full bg-gray-100"
            src={article.author.avatar}
            width={24}
            height={24}
            alt="author avatar"
          />
          <span>
            {article.author.name}
          </span>
        </div>
        <p className="mb-5 mt-3 text-gray-600 text-sm leading-7">
          {article.description}
        </p>
      </div>
      <article className="prose">
        <BlockText value={article.content} />
      </article>
    </div>
  );
};

export default Blog;
