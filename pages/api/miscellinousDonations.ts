import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'libs/prisma';
import { getSession } from 'next-auth/react';

export default async function CreateRequest(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, contact, email, amount, address, details, type, ngoName } =
      await req.body;

    const session = await getSession({ req });
    if (session) {
      try {
        await prisma.miscellinousDonations.create({
          data: {
            name: name,
            contact: contact,
            email: email,
            amount: parseInt(amount),
            address: address,
            details: details,
            ngoName: ngoName,
            type: type,
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
