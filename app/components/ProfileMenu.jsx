'use client'

import React, { useState } from 'react'

import {
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";

import { ChevronDownIcon, PowerIcon, } from "@heroicons/react/24/outline";
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ProfileMenu({ session }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const router = useRouter();

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="candice wu"
                        className="border-2 border-blue-gray-200"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                <MenuItem
                    key='Dashboard'
                    onClick={() => {
                        session.user.type === 'business' ? router.push(`/dashboard/b/${session?.user?.name}`) :
                            router.push(`/dashboard/u/${session?.user?.name}`)
                    }}
                    className="flex items-center gap-2 rounded"
                >
                    {React.createElement(PowerIcon, {
                        className: "h-4 w-4",
                        strokeWidth: 2,
                    })}
                    <Typography
                        as="span"
                        variant="small"
                        className="font-normal"

                    >
                        Dashboard
                    </Typography>
                </MenuItem>
                <MenuItem
                    key='Sign Out'
                    onClick={() => { signOut({ callbackUrl: '/login' }); }}
                    className="flex items-center gap-2 rounded
                         hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                >
                    {React.createElement(PowerIcon, {
                        className: "h-4 w-4 text-red-500",
                        strokeWidth: 2,
                    })}
                    <Typography
                        as="span"
                        variant="small"
                        className="font-normal"
                        color="red"
                    >
                        Sign Out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
