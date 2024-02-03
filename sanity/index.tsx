import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "@portabletext/react";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-06-20";
export const SanityToken = process.env.SECRET_SANITY_VIEW_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: SanityToken,
  useCdn: false,
  // useCdn: process.env.NODE_ENV === 'production'
  // perspective: 'published',
});

export const imageBuilder = imageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return imageBuilder.image(source);
}

const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <picture>
          <source
            srcSet={urlForImage(value.asset).format("webp").url()}
            type="image/webp"
          />
          <img
            className="responsive__img rounded-md"
            src={urlForImage(value.asset).url()}
            alt=""
          />
        </picture>
        );
    },
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

export const BlockText = (props: any) => {
  return (
    <PortableText value={props.value} components={PortableTextComponents} />
  );
};
