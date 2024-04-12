import { client } from "@/sanity";
import { formationFormSchema } from "@/validations";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  url?: string;
  message: string;
  error: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const form = formationFormSchema.safeParse(JSON.parse(req.body));
    if (form.success) {
      await client.create({
        _type: "formation",
        ...form.data,
      });
      return res
        .status(200)
        .json({ error: false, message: "Your request have been accepted" });
    }

    return res.status(400).json({ error: true, message: form.error.message });
  }
}
