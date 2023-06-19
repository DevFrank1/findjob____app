'use client'

import React, { useState, useEffect } from 'react'

import { Button, Input, Card, Typography } from '@material-tailwind/react'
import useSessionDetail from '@/app/hooks/useSessionDetail';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function CreateJob() {
    const router = useRouter();
    const [user, setUser] = useState();
    const [jobPostData, setJobPostData] = useState({
        title: '',
        description: '',
        email: user?.user?.email
    });

    const postJob = async (e) => {
        e.preventDefault()
        setJobPostData({
            ...jobPostData,
            email: user?.user?.email
        })
        await axios.post('/api/postJob', jobPostData)
            .then(() => toast.success('Job has been posted!'))
            .catch(() => toast.error('Something went wrong!'));
        setJobPostData({
            title: '',
            description: '',
            email: user?.user?.email
        })
        router.push('/')
    }

    useEffect(() => {
        async function getUser() {
            const data = await useSessionDetail();
            setUser(data);
            setJobPostData({
                title: '',
                description: '',
                email: data?.user?.email
            })
        }
        getUser()
    }, [])
    // console.log(user?.user?.email)

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <Card className='items-center' color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Create Job
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={postJob}>
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" type='text' label="Title" value={jobPostData.title} required onChange={e => setJobPostData({ ...jobPostData, title: e.target.value })} />
                        <Input type="text" size="lg" label="Description" value={jobPostData.description} required mt="md" onChange={e => setJobPostData({ ...jobPostData, description: e.target.value })} />
                    </div>
                    <Button className="mt-6" fullWidth type='submit'>
                        Add
                    </Button>
                </form>
            </Card>
        </div>
    )
}
