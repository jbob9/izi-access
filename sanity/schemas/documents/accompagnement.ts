import { HelpCircleIcon } from '@sanity/icons'
import { defineField, defineType } from "sanity";

export default defineType({
  name: "accompagnement",
  title: "Accompagnement",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: "entreprise",
      title: "Entreprise",
      type: "string",
    }),
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