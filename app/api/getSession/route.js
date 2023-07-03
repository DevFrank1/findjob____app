import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET(request) {

    try {
        const session = await getServerSession(authOptions);
        return NextResponse.json(session)
    } catch (error) {
        return new NextResponse('cant get session', { status: 400 })
    }
}