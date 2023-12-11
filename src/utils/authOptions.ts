import { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import bcrypt from "bcryptjs"

import { prisma } from "@/utils/prismadb"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),

    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: { label: "E-Mail", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("No credentials")
        }

        const user = await prisma.account.findUnique({
          where: { email: credentials.email },
        })

        if (!user) {
          throw new Error("No user found")
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password as string
        )

        if (!isValid) {
          throw new Error("Invalid password")
        }
        // whatever you return here is accessed in the frontend
        return { id: user.id, role: user.role, email: user.email }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials })
      return true
    },

    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },

    async jwt({ token, user, account, profile }) {
      // pass user.id and user.role to token
      if (user) {
        return {
          // ...token,
          // ...user,
          id: user.id,
          role: user.role,
          email: user.email,
        }
      }
      return token
    },

    async session({ session, user, token }) {
      //  pass user.id and user.role from token to session
      if (token) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
            role: token.role,
            // email: token.email,
          },
        }
      }
      return session
    },
  },

  pages: { signIn: "/account" },

  secret: process.env.NEXTAUTH_SECRET,

  session: { strategy: "jwt" },

  debug: process.env.NODE_ENV === "development",
}
