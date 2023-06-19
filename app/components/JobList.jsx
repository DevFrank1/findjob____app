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

export default function JobList({ setCurrentJobDetail }) {
    const [jobList, setJobList] = useState([]);
    const [jobApplication, setJobApplication] = useState({
        jobId: '',
        userId: '',
        applicationText: 'hello'
    })

    const applyToJob = async (id) => {
        setJobApplication({ ...jobApplication, jobId: id, userId: user.id })
        await axios.post('/api/applyJob', {
            jobId: id,
            userId: user.id,
            applicationText: 'hello'
        }).then(() => toast.success('Applied!'))
            .catch(() => toast.error('Something went wrong!'));
    }

    const chosenJobDetail = async (id) => {
        const jobDetail = await jobList.find(job => job.id === id);
        setCurrentJobDetail(jobDetail);
        console.log(jobDetail.title)
    }

    useEffect(() => {
        const getJobList = async () => {

            try {
                const response = await axios.get('/api/getJob');
                toast.success('Job List got!');

                const jobs = await response.data;
                console.log(jobs)
                setJobList(jobs)

            } catch (error) {
                toast.error('Something went wrong!');
                console.log(error);
            }
        }
        getJobList();
    }, []);

    console.log(jobList)


    return (
        <Card className="w-full lg:w-6/12 h-max my-4 shadow-sm">
            <List>
                {jobList.map((element) => (
                    <ListItem key={element.id} className='px-2 py-2' onClick={() => chosenJobDetail(element.id)}>
                        <ListItemPrefix>
                            <Avatar variant="circular" alt="candice" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                Candice Wu
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                Software Engineer @ Material Tailwind
                            </Typography>
                        </div>
                        <ListItemSuffix>
                            <Button variant="text" className='bg-blue-gray-100' color="blue-gray">
                                apply
                            </Button>
                        </ListItemSuffix>
                    </ListItem>
                ))}
                {/* <ListItem className='px-2 py-2'>
                    <ListItemPrefix>
                        <Avatar variant="circular" alt="alexander" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                    </ListItemPrefix>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Alexander
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            Backend Developer @ Material Tailwind
                        </Typography>
                    </div>
                </ListItem>
                <ListItem className='px-2 py-2'>
                    <ListItemPrefix>
                        <Avatar variant="circular" alt="emma" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                    </ListItemPrefix>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Emma Willever
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            UI/UX Designer @ Material Tailwind
                        </Typography>
                    </div>
                </ListItem>
                <ListItem className='px-2 py-2'>
                    <ListItemPrefix>
                        <Avatar variant="circular" alt="emma" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                    </ListItemPrefix>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Emma Willever
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            UI/UX Designer @ Material Tailwind
                        </Typography>
                    </div>
                </ListItem>
                <ListItem className='px-2 py-2'>
                    <ListItemPrefix>
                        <Avatar variant="circular" alt="emma" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                    </ListItemPrefix>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Emma Willever
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            UI/UX Designer @ Material Tailwind
                        </Typography>
                    </div>
                </ListItem>
                <ListItem className='px-2 py-2'>
                    <ListItemPrefix>
                        <Avatar variant="circular" alt="emma" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                    </ListItemPrefix>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Emma Willever
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            UI/UX Designer @ Material Tailwind
                        </Typography>
                    </div>
                </ListItem>
                <ListItem className='px-2 py-2'>
                    <ListItemPrefix>
                        <Avatar variant="circular" alt="emma" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                    </ListItemPrefix>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Emma Willever
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            UI/UX Designer @ Material Tailwind
                        </Typography>
                    </div>
                </ListItem>
                <ListItem className='px-2 py-2'>
                    <ListItemPrefix>
                        <Avatar variant="circular" alt="emma" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                    </ListItemPrefix>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Emma Willever
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            UI/UX Designer @ Material Tailwind
                        </Typography>
                    </div>
                </ListItem>
                <ListItem className='px-2 py-2'>
                    <ListItemPrefix>
                        <Avatar variant="circular" alt="emma" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                    </ListItemPrefix>
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            Emma Willever
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            UI/UX Designer @ Material Tailwind
                        </Typography>
                    </div>
                </ListItem> */}
            </List>
        </Card>
    )
}
