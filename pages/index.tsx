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
    <>
      <Header />
      <div className="my-28">
        <Sponsors2 />
      </div>

      <div className="py-6">
        <CallToAction1/>
      </div>
      <div className="pt-20 pb-6">
        <header className="px-fluid-base  md:text-center md:items-center mx-auto flex flex-col justify-center mb-8">
          <div className="flex items-center gap-x-4">
          <h2 className="text-2xl md:text-5xl font-semibold mb-4 md:mb-6 text-center">
            The easiest screen recorder you’ll ever use
          </h2>
          </div>
          <div className="font-semibold text-base md:text-xl text-gray-600 text-center">
            <p>
              Record in a few clicks. Share anywhere. Collaborate better.
            </p>
          </div>
        </header>
        <CallToAction2/>
      </div>
  
      {/* <Services /> */}
      <Services/>

      {/* <Testimonials/> */}
      
      <Testi2/>
                              
      <BlogPreview latestArticles={latestArticles}/>
    </>
  );
}
