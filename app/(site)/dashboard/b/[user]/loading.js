'use client'

import { Spinner, Card } from "../../../../convertedComponents";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <Card className="flex items-center justify-center bg-blue-gray-100 h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5 m-4">
        <Spinner />
    </Card>
}