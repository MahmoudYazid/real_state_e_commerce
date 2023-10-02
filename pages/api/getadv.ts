// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { GetAllAdv } from '@/FunctionComponents/ListControl'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  GetAllAdv(res)
  
}

