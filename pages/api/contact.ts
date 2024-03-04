import { transport } from '@/libs/nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'POST') {
    const { name, contact, email, message, subject } = await req.body;
    try {
      await transport.sendMail({
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.NODEMAILER_EMAIL,
        subject: `${subject}`,
        text: `${message}\n\n
                
                -from\n 
                ${name},\n
                ${contact},\n
                ${email}`,

        html: `${message}<br/><br/>
                
                -from<br/> 
                ${name},<br/>
                ${contact},<br/>
                ${email}`,
      });

      res.status(200).end();
    } catch (error) {
      res.status(500).end();
    }
  }
  res.status(405).end();
}
