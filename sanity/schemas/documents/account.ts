import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "account",
  title: "Account",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "providerType",
      title: "providerType",
      type: "string",
    }),
    defineField({
      name: "providerId",
      title: "ProviderId",
      type: "string",
    }),
    defineField({
      name: "providerAccountId",
      title: "ProviderAccountId",
      type: "string",
    }),
    defineField({
      name: "refreshToken",
      title: "RefreshToken",
      type: "string",
    }),
    defineField({
      name: "accessToken",
      title: "AccessToken",
      type: "string",
    }),
    defineField({
      name: "accessTokenExpires",
      title: "AccessTokenExpires",
      type: "number",
    }),
    {
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
    }
  ],
});
