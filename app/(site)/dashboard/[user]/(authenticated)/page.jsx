'use client'

import React from 'react'
import Main from './components/Main'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';

export default function Dashboard({ children }) {
    // const pathname = usePathname();
    // const router = useRouter();
    // const { username } = router.query;
    return (
        <div>
            {children}
        </div>
    )
}
