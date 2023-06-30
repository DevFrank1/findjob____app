import React from 'react';
import { Navbar, Typography, Button } from "../convertedComponents";
import { PlusIcon } from "../convertedComponents/icons";
import ProfileMenu from './ProfileMenu';
import Link from 'next/link';
import useSession from '../hooks/useSession';

export default async function Navigation() {

    const session = await useSession()

    return (
        <Navbar fullWidth className="mx-auto my-1 p-2 rounded-md lg:pl-6 shadow-sm bg-blue-gray-50 border-none">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                >
                    Material Tailwind
                </Typography>
                <div className='flex items-center justify-center flex-row'>
                    <Link variant="text" href='/createJob' color="blue-gray" className='mx-4 p-2 rounded-lg bg-blue-gray-100 hover:bg-cyan-100'>
                        <PlusIcon className='h-5 w-5' />
                    </Link>
                    <ProfileMenu session={session} />
                </div>
            </div>
        </Navbar>
    )
}
