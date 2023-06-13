import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { signIn } from 'next-auth/react'

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function BusinessTab() {

    const router = useRouter()
    const [businessData, setBusinessData] = useState({
        name: '',
        email: '',
        password: '',
        type: 'business'
        // image: null,
        // type: 'business'
    });

    const registerBusiness = async (e) => {
        e.preventDefault()
        await axios.post('/api/registerBusiness', businessData)
            .then(() => toast.success('User has been registered!'))
            .catch(() => toast.error('Something went wrong!'));
        await signIn('business',
            {
                ...businessData, redirect: false
            })
            .then((callback) => {
                if (callback?.error) {
                    toast.error(callback.error)
                }

                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in successfully!')
                }
            }).then(() => router.push('/'))
    }


    useEffect(() => {
        setBusinessData({
            name: '',
            email: '',
            password: '',
            type: 'business'
            // image: null,
            // type: 'business'
        })
    }, []);


    return (
        <Card className='items-center' color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Sign Up
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={registerBusiness}>
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Company Name" value={businessData.name} required onChange={e => setBusinessData({ ...businessData, name: e.target.value })} />
                    <Input size="lg" label="Company Email" value={businessData.email} required onChange={e => setBusinessData({ ...businessData, email: e.target.value })} />
                    <Input type="password" size="lg" label="Password" value={businessData.password} required onChange={e => setBusinessData({ ...businessData, password: e.target.value })} />
                </div>
                <Button className="mt-6" fullWidth type='submit'>
                    Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                    >
                        Register
                    </a>
                </Typography>
            </form>
        </Card>
    )
}
