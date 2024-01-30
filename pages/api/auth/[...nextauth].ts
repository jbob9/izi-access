import NextAuth, { NextAuthOptions } from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import { client } from "@/sanity";
import type { SanityClient } from "sanity";

const options: NextAuthOptions = {
  providers: [
    SanityCredentials(client as SanityClient),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(client as SanityClient),
};

export default NextAuth(options);
