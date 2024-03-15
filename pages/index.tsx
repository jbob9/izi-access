import BlogPreview from "../components/blog/blog-preview";
// import Services from "../components/home/services";
import CallToAction1 from "@/components/call-to-action-1";
import CallToAction2 from "@/components/call-to-action-2";
import Header2 from "@/components/home/header2";
import Services from "@/components/services";
import Sponsors from "@/components/sponsors";
import Testi2 from "@/components/testimonials/testi2";
import { getArticles } from "@/sanity/queries";
import { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
  const latestArticles = await getArticles(6);

  return {
    props: {
      latestArticles,
    },
    revalidate: 7200,
  };
}

export default function Home({
  latestArticles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="pt-0 md:pt-4">
      <div className="pt-20 md:pt-4">
        <Header2 />
      </div>
      <div className="mb-16 md:mb-28 mt-10">
        <Sponsors />
      </div>

      <div className="py-12">
        <Services />
      </div>

      <div className="py-20 md:py-28">
        <CallToAction1 />
      </div>

      <Testi2 />

      <BlogPreview latestArticles={latestArticles} />

      <div>
        <CallToAction2 />
      </div>
    </div>
  );
}
