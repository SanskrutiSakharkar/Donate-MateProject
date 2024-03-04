import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'libs/prisma';
import { hashPassword } from '@/libs/hashPassword';

export default async function SignUp(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, password, contact } = await req.body;

    const passHash = await hashPassword(password);
    try {
      await prisma.user.create({
        data: {
          name: name,
          email: email,
          passHash: passHash,
          contact: contact,
        },
      });

      res.status(200).end();
    } catch (error) {
      console.log(error); //@todo : replace with a logger
      res.status(500).end();
    }
  }
  res.status(405).end();
}
