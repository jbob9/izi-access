import { client } from "@/sanity";
import { savePersonalInfoSchema } from "@/validations";
import { nanoid } from "nanoid";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  if (req.method === "POST") {
    const form = savePersonalInfoSchema.safeParse(JSON.parse(req.body));
    if (form.success) {
      const user = await client.fetch<{ _id: string; email: string } | null>(
        `
      *[_type == 'user' && email == $email][0]{
        _id,
        email
      }`,
        { email: form.data.email }
      );

      if (user) {
        return res.status(400).json({ message: "Your are already a member of iziaccess" });
      }
      await client.create({
        _id: nanoid(),
        _type: "user",
        email: form.data.email,
        name: `${form.data.firstname} ${form.data.lastname}`,
        firstname: form.data.firstname,
        lastname: form.data.lastname,
        // phonenumber: form.data.phonenumber,
        country: form.data.country,
        address: form.data.address,
      });
      return res.status(200).json({ message: "User create sucessfully" });
    }
    res.status(400).json({ message: "Something went wrong" });
  }
}
