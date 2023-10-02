// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GetAllAdminAds } from '@/FunctionComponents/AdminAds';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  GetAllAdminAds(res)
  
}
