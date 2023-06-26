'use client'

import React from 'react';
import { useSession } from 'next-auth/react';

import { useRouter } from 'next/navigation';

export default function layout({ children }) {
    const router = useRouter()
    const { data: session, status } = useSession();
    console.log(status)


    if (status === "loading") {
        return "Loading or not authenticated..."
    }

    if (status === "unauthenticated") {
        router.push('/login')
    }

    return (
        <main>
            {children}
        </main>
    )
}
