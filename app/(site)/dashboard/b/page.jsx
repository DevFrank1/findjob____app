

import React from 'react';
// import { useParams } from 'next/navigation';
// import { Spinner } from '@material-tailwind/react';
// import AuthenticatedLayout from './[user]/layout';

export default function Dashboard({ children }) {

 
    // console.log(decodedUser);

    // if (!session) {
    //     return <div>invalid user</div>
    // }
    // if (decodedUser !== session?.user?.name) {
    //     return <div>invalid user</div>
    // }
    return (
        <main className='w-full h-full'>
            {children}
        </main>
    )
}
