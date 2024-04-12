// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createMoncashSession } from '@/feature/payment'
import type { NextApiRequest, NextApiResponse } from 'next'
import { nanoid } from 'nanoid'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

type Data = {
  url?: string
  message: string
  error: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST') {
   
    const authSession = await getServerSession(req, res, authOptions)

    if(!authSession || !authSession?.user){
      return res
      .status(200)
      .send({ message: "You are not authenticated.", error: true });
    }

    const body = (JSON.parse(req.body))
    
    try{
      const { url } = await createMoncashSession(
        'Price', 
        `OrderId`
      )
      return res.status(200).json({ url, message: 'Your moncash payment url', error: false })
    }catch(e) {
      console.log(e, 'error')
      return res.status(200).json({ message: 'Your moncash attempt payment failed', error: true })
    }
    
  }
}
