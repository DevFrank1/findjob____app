'use client'

import React from 'react';

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "../../../../../convertedComponents";
// import {
//     PresentationChartBarIcon,
//     ShoppingBagIcon,
//     UserCircleIcon,
//     Cog6ToothIcon,
//     InboxIcon,
//     PowerIcon,
// } from "@heroicons/react/24/solid";
// import { useRouter } from 'next/navigation';

import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link';

export default function Sidebar() {

    const router = useRouter();
    const params = useParams();
    const userParams = params.user;

    console.log(userParams);
    return (
        <Card className="bg-blue-gray-100 my-4 ml-4 h-[calc(100vh-2rem)] w-full max-w-[17rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Sidebar
                </Typography>
            </div>
            <List>
                <ListItem onClick={() => { router.push(`/dashboard/b/${userParams}`) }}>
                    Dashboard
                </ListItem>
                <ListItem onClick={() => { router.push(`/dashboard/b/${userParams}/jobs`) }}>
                    Posted Jobs
                </ListItem>
                {/* <ListItem
                    onClick={() => { router.push(`/dashboard/${userParams}/inbox`) }}>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem> */}
            </List>
        </Card>
    )
}
