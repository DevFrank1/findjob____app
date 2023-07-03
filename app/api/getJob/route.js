import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'

export async function GET(request) {

    try {
        const jobs = await prisma.JobPosting.findMany({
            include: {
                business: true
            }
        });
        return NextResponse.json(jobs)
    } catch (error) {
        return new NextResponse('cant get it', { status: 400 })
    }
}