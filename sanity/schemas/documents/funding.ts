import { CreditCardIcon } from '@sanity/icons'
import { defineField, defineType } from "sanity";

export default defineType({
  name: "funding",
  title: "Funding",
  type: "document",
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: "rising",
      title: "Rising",
      type: "string",
    }),
    defineField({
      name: "objectif",
      title: "Objectif",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "more_info",
      title: "More info",
      type: "string",
    }),
    {
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
    }
  ]
})