import { client } from "@/sanity";
import { formationFormSchema } from "@/validations";
import { nanoid } from "nanoid";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  url?: string;
  message: string;
  userId?: string;
  error: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const form = formationFormSchema.safeParse(JSON.parse(req.body));
    if (form.success) {
      const existUser = await client.fetch<{ id: string } | null>(
        `*[_type == "user" && email == $email]{ id }[0]`
      , { email: form.data.email });

      if (!existUser) {
        const userId = nanoid();
        const r = await client
          .transaction()
          .create({
            _id: userId,
            _type: "user",
            email: form.data.email,
            name: `${form.data.firstname} ${form.data.lastname}`,
            firstname: form.data.firstname,
            lastname: form.data.lastname,
            phonenumber: form.data.phonenumber,
          })
          .create({
            _type: "formation",
            ...form.data,
            user: {
              _key: nanoid(),
              _ref: userId,
              _type: "reference",
            },
          })
          .commit();

        console.log(r.results , 'Transaction response')
        return res
          .status(200)
          .json({
            error: false,
            userId,
            message: "Your request have been accepted",
          });
      }
      console.log(existUser, 'User exist')

      client.create({
        _type: "formation",
        ...form.data,
        user: {
          _key: nanoid(),
          _ref: existUser.id,
          _type: "reference",
        },
      })
      return res
        .status(200)
        .json({
          error: false,
          userId: existUser.id,
          message: "Your request have been accepted",
        });
    }

    return res.status(400).json({ error: true, message: form.error.message });
  }
}
