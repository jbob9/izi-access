import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "user",
  title: "User",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "name",
      type: "string",
    }),
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
      name: "country",
      title: "Country",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "acceptCondition",
      title: 'Accept Condition',
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "password",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "emailVerified",
      type: "datetime",
      hidden: true,
    }),
  ],
});
