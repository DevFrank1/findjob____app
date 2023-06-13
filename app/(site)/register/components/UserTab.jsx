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

export default function UserTab() {

    const router = useRouter()
    const [userData, setUserData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        type: 'user'
        // image: null,
        // type: 'user'
    })

    const registerUser = async (e) => {
        e.preventDefault()
        await axios.post('/api/registerUser', userData)
            .then(() => toast.success('User has been registered!'))
            .catch(() => toast.error('Something went wrong!'));
        await signIn('user',
            {
                ...userData, redirect: false
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
        setUserData({
            name: '',
            surname: '',
            email: '',
            password: '',
            type: 'user'
            // image: null,
            // type: 'user'
        })
    }, []);


    return (
        <Card className='items-center' color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Sign Up
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={registerUser}>
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Name" value={userData.name} required onChange={e => setUserData({ ...userData, name: e.target.value })} />
                    <Input size="lg" label="Surname" value={userData.surname} required onChange={e => setUserData({ ...userData, surname: e.target.value })} />
                    <Input size="lg" label="Email" value={userData.email} required onChange={e => setUserData({ ...userData, email: e.target.value })} />
                    <Input type="password" size="lg" label="Password" value={userData.password} required onChange={e => setUserData({ ...userData, password: e.target.value })} />
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
                        Sign In
                    </a>
                </Typography>
            </form>
        </Card>
    )
}
