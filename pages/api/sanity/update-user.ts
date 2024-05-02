import { client } from "@/sanity";
import { acceptConditionSchema } from "@/validations";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  if (req.method === "POST") {
    const input = acceptConditionSchema.safeParse(JSON.parse(req.body));

    if (input.success) {
      const user = await client.fetch<{ _id: string; email: string } | null>(
        `
      *[_type == 'user' && email == $email][0]{
        _id,
        email
      }`,
        { email: input.data.email }
      );

      if (user) {
        await client
          .patch(user._id)
          .set({ acceptCondition: input.data.accept })
          .commit();

        return res
          .status(200)
          .json({ message: "The user have update successfully" });
      }
    }
    res.status(400).json({ message: "Something went wrong" });
  }
}
