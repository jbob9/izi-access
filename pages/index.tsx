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

export async function getStaticProps() {
  const latestArticles = await getArticles(6);

  return {
    props: {
      latestArticles
    },
    revalidate: 7200,
  };
}

export default function Home({ latestArticles }: InferGetStaticPropsType<typeof getStaticProps>) {
  
  return (
    <div className="pt-0 md:pt-4">
      <Header />
      <div className="my-28">
        <Sponsors2 />
      </div>
      
      <div className="py-6">
        <CallToAction1/>
      </div>
      <BlockTest/>

      <Services/>

      {/* <Testimonials/> */}
      
      <Testi2/>
                              
      <BlogPreview latestArticles={latestArticles}/>

      <div>
        <CallToAction2/>
      </div>
    </div>
  );
}
