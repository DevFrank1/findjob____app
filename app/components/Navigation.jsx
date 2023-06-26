'use client'

import React, { useState, useEffect } from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import ProfileMenu from './ProfileMenu';

import { PlusIcon } from "@heroicons/react/24/outline";
import JobPostingModal from './JobPostingModal';

import { useRouter } from 'next/navigation';
import useSessionDetail from '../hooks/useSessionDetail';



export default function Navigation() {
    const router = useRouter();
    const [user, setUser] = useState();

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        async function getUser() {
            const data = await useSessionDetail();
            setUser(data);
        }
        getUser()
    }, [])

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
                    <Button variant="text" onClick={() => router.push('/createJob')} color="blue-gray" className='mx-4 p-2 rounded-lg bg-blue-gray-100 '>
                        <PlusIcon className='h-5 w-5' />
                    </Button>
                    {/* <JobPostingModal openModal={openModal} setOpenModal={setOpenModal} /> */}
                    <ProfileMenu user={user} />
                </div>
            </div>
        </Navbar>
    )
}
