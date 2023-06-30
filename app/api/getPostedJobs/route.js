import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const body = await request.json();

    const { businessId } = body;

    try {
        const postedJobs = await prisma.JobPosting.findMany({
            where: {
                businessId: businessId
            },
            include: {
                business: true
            }
        });
        return NextResponse.json(postedJobs)
    } catch (error) {
        return NextResponse('cant get it', { status: 400 })
    }
}