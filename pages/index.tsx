import Image from "next/image";
import Header from "../components/home/header";
import Services from "../components/home/services";
import Layout from "../components/layout";
import BlogPreview from "../components/blog/blog-preview";

export default function Home() {
  return (
    <>
      <Header />

      <Services />
      <BlogPreview />
    </>
  );
}
