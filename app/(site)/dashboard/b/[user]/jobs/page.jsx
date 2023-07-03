import React from 'react';

import { Button, Card, Chip, List, ListItem, ListItemSuffix, Typography } from "../../../../../convertedComponents";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { SessionContext } from '@/app/context/SessionContext';
import useSession from '@/app/hooks/useSession';
import useGetPostedJobs from '@/app/hooks/useGetPostedJobs';
import Link from 'next/link';

export default async function Jobs() {
    const session = await useSession()

    const postedJobs = await useGetPostedJobs(session.user.id)
    console.log('Posted Jobs:', postedJobs)

    return (
        <Card className="bg-blue-gray-100 h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5 m-4">
            <List>
                {postedJobs.map((element) => (
                    <Card key={element.id} color='bg-gray-50' className='px-4 py-1 flex flex-row items-center justify-between bg-gray-50 shadow-none'>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                {element.title}
                            </Typography>
                            <div className='flex flex-row gap-2'>
                                <Typography variant="h6" color="blue-gray">
                                    {element.createdAt.substring(0, 10)}
                                </Typography>
                                <Typography variant="h6" color="blue-gray">
                                    {element.createdAt.substring(11, 19)}
                                </Typography>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <Chip value="17" size="md" variant="ghost" color="blue-gray" className="rounded-lg p-2" />
                            <Link href='/' variant='text' className='bg-blue-gray-50 p-2 hover:bg-blue-gray-100/50 rounded-lg' color='blue-gray'>
                                    edit
                            </Link>
                            <Button variant='text' className='bg-blue-gray-50 p-2' color='red'>
                                delete
                            </Button>
                        </div>
                    </Card>
                ))}
            </List>
        </Card>
    )
}
