import { Calendar } from "@/components/ui/calendar";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "po-elite",
  title: "Programme Elite",
  type: "document",
  icon: Calendar,
  fields: [
    defineField({
      name: "firstname",
      title: "Firstname",
      type: "string",
    }),
    defineField({
      name: "lastname",
      title: "lastname",
      type: "string",
    }),
    defineField({
      name: "sexe",
      title: "Sexe",
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
      name: "birthdate",
      title: "BirthDate",
      type: "string",
    }),
    defineField({
      name: "nationality",
      title: "Nationality",
      type: "string",
    }),
    defineField({
      name: "residance_country",
      title: "Residance Country",
      type: "string",
    }),
    defineField({
      name: "activity",
      title: "Activity",
      type: "string",
    }),
    defineField({
      name: "why",
      title: "Why?",
      type: "text",
    }),
  ],
});
