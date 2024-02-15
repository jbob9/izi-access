import Sponsors2 from "@/components/sponsors2";
import BlogPreview from "../components/blog/blog-preview";
import Header from "../components/home/header";
// import Services from "../components/home/services";
import CallToAction1 from "@/components/call-to-action-1";
import CallToAction2 from "@/components/call-to-action-2";
import Testi2 from "@/components/testimonials/testi2";
import { InferGetStaticPropsType } from "next";
import { getArticles } from "@/sanity/queries";
import Services from "@/components/services";
import BlockTest from "@/components/block-test";
import Sponsors from "@/components/sponsors";
import Header2 from "@/components/home/header2";

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

      <div className="mx-2 md:mx-auto py-10">
        <div className="flex items-center justify-center">
          <h2 className="scroll-m-20 font-caption text-4xl font-extrabold tracking-tight lg:text-5xl mb-8 text-center lg:mb-16">
            Comment je vais t'aider de A à Z :
          </h2>
        </div>

        <BlockTest />
      </div>

      <Testi2 />

      <BlogPreview latestArticles={latestArticles} />

      <div>
        <CallToAction2 />
      </div>
    </div>
  );
}
