// 'use client'

import React from 'react'
import JobList from './JobList'
import JobDetail from './JobDetail'
import JobListDemo from './JobListDemo';

export default function JobBoard() {
    // const [currentJobDetail, setCurrentJobDetail] = useState();
    return (
        <div className='w-full h-full flex flex-row gap-2 overflow-hidden'>
            {/* <JobList setCurrentJobDetail={setCurrentJobDetail} /> */}
            <JobListDemo />
            <JobDetail />
        </div>
    )
}
