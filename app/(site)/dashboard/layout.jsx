'use client'

import { SessionProvider } from 'next-auth/react'
import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation';

import useSessionDetail from '@/app/hooks/useSessionDetail';

import { useSession } from 'next-auth/react';
import { Spinner } from '@material-tailwind/react';


export default function DashboardLayout({ children }) {

    const [user, setUser] = useState();
    const params = useParams();
    const userParams = params.user;

    // const { data: session, status } = useSession()

    const [loading, setLoading] = useState(true);
    const [authenticatedUser, setAuthenticatedUser] = useState(false)

    const decodedUser = decodeURIComponent(userParams);
    console.log(decodedUser);

    const searchParams = useSearchParams()

    const search = searchParams.toString()
    console.log(search)

    async function getUser() {
        const data = await useSessionDetail();
        setUser(data);
    }

    useEffect(() => {
        getUser()
        if (decodedUser === user?.user?.name) {
            setAuthenticatedUser(true);
            setLoading(false);
        }
    }, [])

    // if (loading) {
    //     return <Spinner />
    // }

    if (decodedUser !== user?.user?.name) {
        return <div>invalid user</div>
    }
    return (
        <main className='px-2 h-screen w-screen flex'>
            <SessionProvider>
                {children}
            </SessionProvider>
        </main>
    )
}
