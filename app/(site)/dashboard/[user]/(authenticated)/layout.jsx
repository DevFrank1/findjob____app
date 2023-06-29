'use client'

import React from 'react';
import { useSession } from 'next-auth/react';

import { useRouter } from 'next/navigation';
import Sidebar from './components/Sidebar';

import { useParams } from 'next/navigation';

export default function layout({ children }) {
    // const router = useRouter()
    // const { data: session, status } = useSession();
    // console.log(status)


    // if (status === "loading") {
    //     return "Loading or not authenticated..."
    // }

    // if (status === "unauthenticated") {
    //     router.push('/login')
    // }


    // const params = useParams();
    // const userParams = params.user;

    // const { data: session, status } = useSession()

    // const decodedUser = decodeURIComponent(userParams);
    // console.log(decodedUser);


    // if (decodedUser !== session?.user?.name) {
    //     return <div>hello</div>
    // }

    return (
        <main className='w-full h-full flex flex-row gap-2 overflow-hidden'>
            <Sidebar />
            {children}
        </main>
    )
}
