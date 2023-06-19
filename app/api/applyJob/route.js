import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const body = await request.json();

    const { jobId, userId, applicationText } = body;

    if (!jobId || !userId || !applicationText) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const jobs = await prisma.JobApplication.create({
        data: {
            jobId,
            userId,
            applicationText
        }
    });
    return NextResponse.json(jobs)
}