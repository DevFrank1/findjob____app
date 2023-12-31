// import prisma from '../libs/prismadb'
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from 'bcrypt'

// export const authOptions = {
//     adapter: PrismaAdapter(prisma),
//     providers: [
//         CredentialsProvider({
//             id: 'user',
//             name: "credentials",
//             credentials: {
//                 email: { label: "Email", type: "text", placeholder: "jsmith" },
//                 password: { label: "Password", type: "password" },
//                 username: { label: "Username", type: "text", placeholder: "John Smith" },
//             },
//             async authorize(credentials) {

//                 // check to see if email and password is there
//                 if (!credentials.email || !credentials.password) {
//                     throw new Error('Please enter an email and password')
//                 }

//                 // check to see if user exists
//                 const user = await prisma.user.findUnique({
//                     where: {
//                         email: credentials.email
//                     }
//                 });

//                 // if no user was found 
//                 if (!user || !user?.hashedPassword) {
//                     throw new Error('No user found')
//                 }

//                 // check to see if password matches
//                 const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

//                 // if password does not match
//                 if (!passwordMatch) {
//                     throw new Error('Incorrect password')
//                 }

//                 return {
//                     id: user.id,
//                     email: user.email,
//                     name: user.name,
//                     type: user.type
//                 };
//             },
//         }),
//         CredentialsProvider({
//             id: 'business',
//             name: "credentialsBusiness",
//             credentials: {
//                 email: { label: "Email", type: "text", placeholder: "jsmith" },
//                 password: { label: "Password", type: "password" },
//                 username: { label: "Username", type: "text", placeholder: "John Smith" },
//             },
//             async authorize(credentials) {

//                 // check to see if email and password is there
//                 if (!credentials.email || !credentials.password) {
//                     throw new Error('Please enter an email and password')
//                 }

//                 // check to see if user exists
//                 const user = await prisma.business.findUnique({
//                     where: {
//                         email: credentials.email
//                     }
//                 });

//                 // if no user was found 
//                 if (!user || !user?.hashedPassword) {
//                     throw new Error('No user found')
//                 }

//                 // check to see if password matches
//                 const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

//                 // if password does not match
//                 if (!passwordMatch) {
//                     throw new Error('Incorrect password')
//                 }

//                 return {
//                     id: user.id,
//                     email: user.email,
//                     name: user.name,
//                     type: user.type
//                 };
//             },
//         }),

//     ],
//     secret: process.env.SECRET,
//     session: {
//         strategy: "jwt",
//     },
//     pages: {
//         signIn: '/login',
//     },
//     callbacks: {
//         session: ({ session, token }) => {
//             console.log("Session Callback", { session, token });
//             return {
//                 ...session,
//                 user: {
//                     ...session.user,
//                     id: token.id,
//                     type: token.type
//                 },
//             };
//         },
//         jwt: ({ token, user }) => {
//             console.log("JWT Callback", { token, user });
//             if (user) {
//                 const u = user;
//                 return {
//                     ...token,
//                     id: u.id,
//                     type: u.type
//                 };
//             }
//             return token;
//         },
//     },

//     debug: process.env.NODE_ENV === "development",
// }