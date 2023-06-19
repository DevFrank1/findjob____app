'use client'

import React, { useState, useEffect } from 'react';
import { Button, Card } from '@material-tailwind/react';
import useSessionDetail from '../hooks/useSessionDetail';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function JobDetail({ currentJobDetail }) {
    const [user, setUser] = useState();
    const [jobApplication, setJobApplication] = useState({
        jobId: '',
        userId: '',
        applicationText: 'hello'
    })

    const applyToJob = async () => {
        setJobApplication({ ...jobApplication, jobId: currentJobDetail.id, userId: user?.user?.id })
        await axios.post('/api/applyJob', {
            jobId: currentJobDetail.id,
            userId: user?.user?.id,
            applicationText: 'hello'
        }).then(() => toast.success('Applied!'))
            .catch(() => toast.error('Something went wrong!'));
    }

    useEffect(() => {
        async function getUser() {
            const data = await useSessionDetail();
            setUser(data);
        }
        getUser()
    }, [])
    // console.log(user)

    return (
        <Card className="hidden lg:flex lg:w-6/12 bg-blue-gray-50 my-4 shadow-sm p-4 items-center justify-center">
            <h1>
                {user?.user?.name}
            </h1>
            <h1>
                {currentJobDetail?.title}
            </h1>
            <Button variant="text" className='bg-blue-gray-100' color="blue-gray" onClick={applyToJob}>
                apply
            </Button>
        </Card>
    )
}
