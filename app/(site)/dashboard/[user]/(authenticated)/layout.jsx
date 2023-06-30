import React from 'react';
import Sidebar from './components/Sidebar';
import AuthenticatedDashboard from './page';

export default function AuthenticatedLayout({ children}) {

    return (
        <main className='w-full h-full flex flex-row gap-2 overflow-hidden'>
            <Sidebar />
            {children}
        </main>
    )
}
