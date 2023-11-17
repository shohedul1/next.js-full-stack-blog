// import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth"

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/db";


export const authOptions = {
    adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      })
  ],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

