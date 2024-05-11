import { client } from "@/sanity";
import { programmeEliteFormSchema } from "@/validations";
import dayjs from "dayjs";
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
    const body = JSON.parse(req.body)
    const form = programmeEliteFormSchema.safeParse(body);

    if (form.success) {
      await client.create({
        _type: "po-elite",
        ...form.data,
      });
      return res.status(200).json({
        error: false,
        message: "Your request have been accepted",
      });
    }

    return res.status(400).json({ error: true, message: form.error.message });
  }
}
