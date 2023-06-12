'use client'

import React, { useState, useEffect } from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import ProfileMenu from './ProfileMenu';



export default function Navigation() {

    return (
        <Navbar fullWidth className="mx-auto my-1 p-2 rounded-md lg:pl-6 shadow-sm bg-blue-gray-50 border-none">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                >
                    Material Tailwind
                </Typography>
                <ProfileMenu />
            </div>
        </Navbar>
    )
}
