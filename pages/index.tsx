import Sponsors2 from "@/components/sponsors2";
import BlogPreview from "../components/blog/blog-preview";
import Header from "../components/home/header";
import Services from "../components/home/services";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mb-10">
        <Sponsors2 />
      </div>
      <Services />
      <BlogPreview />
    </>
  );
}
