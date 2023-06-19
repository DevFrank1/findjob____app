import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const body = await request.json();

    const { title, description, email } = body;

    if (!title || !description || !email) {
        return new NextResponse('Missing Fields', { status: 400 })
    }
    const user = await prisma.business.findUnique({
        where: {
            email
        }
    });

    const businessId = user.id;

    const job = await prisma.JobPosting.create({
        data: {
            title,
            description,
            businessId
        }
    });

    return NextResponse.json(job)
}