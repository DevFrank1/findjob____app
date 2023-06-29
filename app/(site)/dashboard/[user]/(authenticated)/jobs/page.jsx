'use client'

import React, { useState, useEffect, useContext } from 'react';

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
import { SessionContext } from '@/app/context/SessionContext';
import useSessionDetail from '@/app/hooks/useSessionDetail';
import { useSession } from 'next-auth/react';


export default function Jobs() {
    const [postedJobs, setPostedJobs] = useState([]);
    const [user, setUser] = useState();

    const { data: session, status } = useSession()
    console.log(session)
    useEffect(() => {
        const data = useSessionDetail();
        const getPostedJobs = async () => {
            try {
                const response = await fetch('/api/getPostedJobs', {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        businessId: data.user.id
                    })
                });
                toast.success('Posted Jobs got!');

                const jobs = await response.json()
                console.log(jobs)
                setPostedJobs(jobs)
            } catch (error) {
                toast.error('Something went wrong!');
                console.log(error);
            }
        }
        getPostedJobs();
    }, []);
    console.log(user)
    console.log(postedJobs)
    return (
        <Card className="bg-blue-gray-100 h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5 m-4">
            <List className='bg-blue-gray-200'>
                {postedJobs.map((element) => (
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
