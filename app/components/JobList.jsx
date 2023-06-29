'use client'

import React, { useState, useEffect } from 'react';

import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
    ListItemSuffix,
    Button
} from "@material-tailwind/react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import useGetJobList from '../hooks/useGetJobList';

export default async function JobList({ setCurrentJobDetail }) {
    const [jobList, setJobList] = useState([]);
    const [jobApplication, setJobApplication] = useState({
        jobId: '',
        userId: '',
        applicationText: 'hello'
    })

    const chosenJobDetail = async (id) => {
        const jobDetail = await jobList.find(job => job.id === id);
        setCurrentJobDetail(jobDetail);
        console.log(jobDetail.title)
    }

    const jobs = await useGetJobList();
    console.log(jobs)


    return (
        <Card className="w-full lg:w-6/12 h-10/12 my-4 shadow-sm overflow-y-scroll scroll-smooth">
            <List className='bg-blue-gray-200'>
                {jobs?.map((element) => (
                    <ListItem key={element.id} className='px-2 py-1 border-b-2' onClick={() => chosenJobDetail(element.id)}>
                        <ListItemPrefix>
                            <Avatar variant="circular" alt="candice" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                {element.title}
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                {element.business.name}
                            </Typography>
                        </div>
                        <ListItemSuffix>
                            <Button variant="text" className='bg-blue-gray-100' color="blue-gray">
                                apply
                            </Button>
                        </ListItemSuffix>
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}
