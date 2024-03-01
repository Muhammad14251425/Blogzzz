import NextAuth, { NextAuthOptions ,User} from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import UserDetail from "@/models/users";
import { compare } from "bcrypt";
import { NextResponse } from "next/server";
export const authOptions:NextAuthOptions = {
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
          }),
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
          }),
          CredentialsProvider({
            name: "Credentials",
            credentials:{
                email: { label: "Email", type: "email", placeholder: "abc@gmail.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials): Promise<User | null>{
                if(!credentials?.email || !credentials?.password){
                    return null;
                }
                const existingUser = await UserDetail.findOne({email: credentials.email})
                if(!existingUser)
                return null
            const passwordMatch = await compare(credentials.password, existingUser.password)
            if(!passwordMatch)
            return null;
            return {
                id: `${existingUser.id}`,
                username : existingUser.username as string,
                email : existingUser.email
            }
            }
          })
    ],
    callbacks : {
        async jwt ({token,user}){
          if(user) {
            return {
              ...token,
              username: user.username,
            }
          }
          return token
        },
        async session ({ session,token}){
          return {
            ...session,
            user: {
              ...session.user,
              username: token.username
            }
          }
          
        }
      },
}