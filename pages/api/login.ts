// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {  SigninFunc} from '@/FunctionComponents/Reg'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const phone_ = req.headers.phone;
  const password_ = req.headers.password;
  SigninFunc(phone_,password_,res,req)
  
}
