// import { authOptions } from "@/lib/auth"
// import NextAuth from "next-auth"

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";



const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    })
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}