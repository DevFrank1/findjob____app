'use client'

import React from 'react'

import { Avatar, Button, List, ListItem, ListItemPrefix, ListItemSuffix, Card, Typography } from '../convertedComponents';
import useJobDetail from '../hooks/useJobDetail';


export default function JobListItem({ element }) {

    return (
        <ListItem key={element.id} className='px-2 py-1 border-b-2' onClick={() => useJobDetail(element)} >
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
    )
}
