import { client } from "."
import { Blog } from "./types"

export const getArticles = (take = 10) => {
  return client.fetch<Blog[]>(`
    *[_type == 'blog'] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      description,
      "image": mainImage.asset->url,
      "author": author->{
        name,
        activity,
        "avatar": image.asset->url
      },
      _createdAt
    }[0...${take}]
  `)
}

export const getArticle = (slug: string) => {
  return client.fetch<Blog>(`
    *[_type == 'blog' && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      description,
      "image": mainImage.asset->url,
      content,
      "author": author->{
        name,
        activity,
        "avatar": image.asset->url
      },
      _createdAt
    }
  `, { slug })
}
export const getArticlesSlug = () => {
  return client.fetch<{ slug: string }[]>(`
    *[_type == 'blog'] {
      "slug": slug.current,
    }[0...30]
  `,)
}