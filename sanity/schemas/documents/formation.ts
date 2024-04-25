import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from "sanity";

export default defineType({
  name: "formation",
  title: "Formation",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),
    {
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
    }
  ]
})