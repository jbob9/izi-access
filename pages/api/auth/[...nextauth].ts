import NextAuth, { NextAuthOptions } from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import { client } from "@/sanity";
import type { SanityClient } from "sanity";

export const authOptions: NextAuthOptions = {
  providers: [
    SanityCredentials(client as SanityClient),
  ],
  session: {
    strategy: "jwt",
    maxAge: 90 * 24 * 60 * 60
  },
  adapter: SanityAdapter(client as SanityClient),
};

export default NextAuth(authOptions);
