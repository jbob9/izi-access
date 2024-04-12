import { CreditCardIcon } from '@sanity/icons'
import { defineField, defineType } from "sanity";

export default defineType({
  name: "funding",
  title: "Funding",
  type: "document",
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: "firstname",
      title: "Firstname",
      type: "string",
    }),
    defineField({
      name: "lastname",
      title: "Lastname",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phonenumber",
      title: "Phonenumber",
      type: "string",
    }),
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

  ]
})