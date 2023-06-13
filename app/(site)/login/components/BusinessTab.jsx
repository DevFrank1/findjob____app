import React, { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react'
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
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
        email: '',
        password: ''
    });

    const loginBusiness = async (e) => {
        e.preventDefault()
        signIn('business',
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
            email: '',
            password: '',
        })
    }, []);

    return (
        <Card className='items-center' color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Sign In
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={loginBusiness}>
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Company Email" value={businessData.email} onChange={e => setBusinessData({ ...businessData, email: e.target.value })} />
                    <Input type="password" size="lg" label="Password" value={businessData.password} onChange={e => setBusinessData({ ...businessData, password: e.target.value })} />
                </div>
                <Button className="mt-6" fullWidth type='submit'>
                    Login
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                    >
                        Sign Up
                    </a>
                </Typography>
            </form>
        </Card>
    )
}
