import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

exports.account = {
  name: "account",
  title: "Account",
  type: "document",
  fields: [
    {
      name: "providerType",
      type: "string",
    },
    {
      name: "providerId",
      type: "string",
    },
    {
      name: "providerAccountId",
      type: "string",
    },
    {
      name: "refreshToken",
      type: "string",
    },
    {
      name: "accessToken",
      type: "string",
    },
    {
      name: "accessTokenExpires",
      type: "number",
    },
    {
      name: "user",
      title: "User",
      type: "reference",
      to: { type: "user" },
    },
  ],
};

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
