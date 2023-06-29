import React from 'react';
import useGetJobList from '../hooks/useGetJobList';

import { Avatar, Button, List, ListItem, ListItemPrefix, ListItemSuffix, Card, Typography } from '../convertedComponents';

import { cookies } from 'next/headers'
import JobListItem from './JobListItem';

export default async function JobListDemo() {
    const cookieStore = cookies();
    const jobs = await useGetJobList();
    console.log(jobs)

    const chosenJobDetail = async (id) => {
        const jobDetail = await jobList.find(job => job.id === id);
        setCurrentJobDetail(jobDetail);
        console.log(jobDetail.title)
    }
    return (
        <Card className="w-full lg:w-6/12 h-10/12 my-4 shadow-sm overflow-y-scroll scroll-smooth">
            <List className='bg-blue-gray-200'>
                {jobs?.map((element) => (
                    <JobListItem element={element} />
                ))}
            </List>
        </Card>
    )
}
