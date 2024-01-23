import NextAuth, { NextAuthOptions } from "next-auth";
// import GitHub from 'next-auth/providers/github';
// import { NextApiRequest, NextApiResponse } from 'next';
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import { client } from "@/sanity";
import type { SanityClient } from "sanity";
import { signUp } from "next-auth-sanity/client";

const options: NextAuthOptions = {
  providers: [
    // GitHub({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
    SanityCredentials(client as SanityClient), // only if you use sign in with credentials
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(client as SanityClient),
};

export default NextAuth(options);
