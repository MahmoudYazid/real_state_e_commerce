// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { SignUpFunc } from '@/FunctionComponents/Reg';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const phone_ = req.headers.phone;
    const password_ = req.headers.password;
    const name_ = req.headers.name;
  SignUpFunc(phone_,name_,password_,res)
  
}
