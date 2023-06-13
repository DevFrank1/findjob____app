import bcrypt from 'bcrypt'
import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'


export async function POST(request) {
    const body = await request.json();

    const { name, surname, email, password, type } = body;

    // const imageByte = image;

    if (!name || !surname || !email || !password) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (exist) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            surname,
            email,
            // imageByte,
            hashedPassword,
            type
        }
    });

    // await signIn('credentials',
    //     {
    //         data: {
    //             email,
    //             password
    //         }
    //     })

    return NextResponse.json(user)
}