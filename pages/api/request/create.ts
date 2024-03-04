import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'libs/prisma';
import { getSession } from 'next-auth/react';

export default async function CreateRequest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const {
      name,
      email,
      contact,
      amount,
      address,
      details,
      formLink,
      donationType,
    } = await req.body;

    const session = await getSession({ req });
    if (session) {
      try {
        await prisma.requests.create({
          data: {
            name: name,
            email: email,
            contact: contact,
            amount: parseInt(amount),
            address: address,
            type: donationType,
            status: 'ACCEPTING',
            details: details,
            formLink: formLink,

            //@ts-ignore
            userId: session.id,
          },
        });

        res.status(200).end();
      } catch (error) {
        console.log(error);
        res.status(500).end();
      }
    }
    res.status(405).end();
  }
  res.status(405).end();
}
