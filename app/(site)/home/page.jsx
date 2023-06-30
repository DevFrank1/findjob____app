import JobBoard from '@/app/components/JobBoard'
import Navigation from '@/app/components/Navigation'
import React from 'react'

export default function HomeBoard() {
    return (
        <div className='px-2 h-screen w-screen flex flex-col'>
            <Navigation />
            <JobBoard />
        </div>
    )
}
