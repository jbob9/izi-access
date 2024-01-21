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
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "emailVerified",
      type: "boolean",
      hidden: true,
    }),
  ],
});
