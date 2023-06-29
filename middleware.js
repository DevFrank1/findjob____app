import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
// import { useSession } from 'next-auth/react';
// import { useParams } from 'next/navigation';

// import { getServerSession } from "next-auth";
// import { authOptions } from './app/api/auth/[...nextauth]/route';
import { getToken } from 'next-auth/jwt';

const secret = process.env.SECRET

export async function middleware(req) {

    const token = await getToken({ req, secret })

    console.log('json web token', token);
    // if (!token) {
    //     return NextResponse.redirect(new URL('/login', req.url));
    // }

    const decodedUser = decodeURIComponent(req.nextUrl.pathname);
    console.log(decodedUser)

    // if (req.nextUrl.pathname.startsWith(`/dashboard`) && !token) {
    //     return NextResponse.redirect(new URL('/login', req.url));
    // }

    // if (req.nextUrl.pathname.startsWith(`/dashboard/${token.name}`) && token) {
    //     return NextResponse.redirect(new URL(`/dashboard/${token.name}`, req.url));
    // }

    // if (req.nextUrl.pathname != `/dashboard/${token.name}`) {
    //     return NextResponse.redirect(new URL(`/login`, req.url));
    // }
}

export const config = {
    matcher: ['/dashboard/:path*'],
}