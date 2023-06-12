import React from 'react'
import JobList from './JobList'
import JobDetail from './JobDetail'

export default function JobBoard() {
    return (
        <div className='w-full h-full flex flex-row gap-2 overflow-hidden'>
            <JobList />
            <JobDetail />
        </div>
    )
}
