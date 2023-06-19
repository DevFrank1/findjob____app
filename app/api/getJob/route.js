import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'

export async function GET(request) {

    try {
        const jobs = await prisma.JobPosting.findMany();
        return NextResponse.json(jobs)
    } catch (error) {
        return NextResponse('cant get it', { status: 400 })
    }
}