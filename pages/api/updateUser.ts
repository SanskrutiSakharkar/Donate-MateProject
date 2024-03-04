import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'libs/prisma';
import { getSession } from 'next-auth/react';

export default async function updateUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, image, contact } = await req.body;
    const session = await getSession({ req });
    if (session) {
      try {
        await prisma.user.update({
          where: {
            //@ts-ignore
            email: session.user.email,
          },
          data: {
            name: name,
            email: email,
            contact: contact,
            image: image,
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
  res.status(405).end();
}
