import { client } from "@/sanity";
import { signUpHandler } from "next-auth-sanity";
import type { SanityClient } from "sanity";

export default signUpHandler(client as SanityClient);

import { user, account, verificationToken } from "next-auth-sanity/schemas";
