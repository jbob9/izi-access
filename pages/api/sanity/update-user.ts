import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]'
import { client } from '@/sanity'
import { acceptConditionSchema } from '@/validations'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  if(req.method === 'POST') {
    const session = await getServerSession(req, res, authOptions)
    if(session) {
      const user = await client.fetch<{ _id: string, email: string} | null>(`
      *[type == 'user' && email == $email]{
        _id,
        email
      }`)
      if(user) {
        const input = acceptConditionSchema.safeParse(req.body)
        if(input.success){
          const up = await client.patch(user._id).set({ input }).commit()
          console.log(up, 'uo')
          res.status(200).json({ message: 'The user have update successfully' })
        }
      }
    }
    res.status(200).json({ message: 'Something went wrong' })
  }
}
