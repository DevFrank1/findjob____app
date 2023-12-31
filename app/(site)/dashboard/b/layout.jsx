import React from 'react'
import useSession from '@/app/hooks/useSession';
import Dashboard from './page';


export default function DashboardLayout({ children }) {
    // const session = await useSession();

    return (
        <main className='h-screen w-screen flex'>
            <Dashboard children={children} />
        </main>
    )
}
