import { HelpCircleIcon } from '@sanity/icons'
import { defineField, defineType } from "sanity";

export default defineType({
  name: "accompagnement",
  title: "Accompagnement",
  type: "document",
  icon: HelpCircleIcon,
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
      name: "address",
      title: "Address",
      type: "string",
    }),
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

  ]
})