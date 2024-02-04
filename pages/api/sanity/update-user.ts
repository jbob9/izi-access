import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { client } from "@/sanity";
import { acceptConditionSchema } from "@/validations";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);

    if (session) {
      const user = await client.fetch<{ _id: string; email: string } | null>(
        `
      *[_type == 'user' && email == $email][0]{
        _id,
        email
      }`,
        { email: session.user?.email }
      );

      if (user) {
        const input = acceptConditionSchema.safeParse(JSON.parse(req.body));
        if (input.success) {
          const up = await client.patch(user._id).set({ acceptCondition: input.data.accept }).commit();
          console.log(up, "up");
          return res
            .status(200)
            .json({ message: "The user have update successfully" });
        }
      }
    }
    res.status(400).json({ message: "Something went wrong" });
  }
}
