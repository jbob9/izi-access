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