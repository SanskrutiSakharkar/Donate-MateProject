import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from 'libs/prisma';
import bcrypt from 'bcrypt';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Food Donation',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your Email',
        },
        password: {
          label: 'Password',
          type: 'Password',
          placeholder: 'Enter your Password',
        },
      },
      //@ts-ignore
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        //@ts-ignore
        if (bcrypt.compareSync(credentials?.password, user?.passHash)) {
          return {
            id: user?.id,
            name: user?.name,
            role: user?.userType,
            email: user?.email,
            avatarUrl: user?.image,
          };
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    jwt: ({ token, user }: any) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = user.role;
        token.email = user.email;
        token.picture = user.avatarUrl;
      }
      return token;
    },
    session: ({ session, token }: any) => {
      if (token) {
        session.id = token.id;
        session.name = token.name;
        session.role = token.role;
        session.email = token.email;
        session.picture = token.picture;
      }
      return session;
    },
  },

  secret: process.env.NEXT_AUTH_SECRET,
  jwt: {
    secret: process.env.NEXT_AUTH_JWT_SECRET,
  },

  pages: {
    signIn: '/signin',
  },
});
