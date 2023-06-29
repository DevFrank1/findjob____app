import { Card, Spinner } from '@material-tailwind/react'
import React from 'react'

export default function Main() {
    return (
        <Card className="items-center justify-center bg-blue-gray-100 h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5 m-4">
            <Spinner />
        </Card>
    )
}
