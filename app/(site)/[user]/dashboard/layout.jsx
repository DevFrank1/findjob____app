'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'


export default function DashboardLayout({ children }) {

    return (
        <main>
            <SessionProvider>
                {children}
            </SessionProvider>
        </main>
    )
}
