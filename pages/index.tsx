import Sponsors from "@/components/sponsors";
import BlogPreview from "../components/blog/blog-preview";
import Header from "../components/home/header";
import Services from "../components/home/services";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mb-10">
        <Sponsors />
      </div>
      <Services />

      <BlogPreview />
    </>
  );
}
