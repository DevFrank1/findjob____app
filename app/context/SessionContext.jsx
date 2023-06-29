'use client'

import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

export const SessionContext = createContext();

export default function SessionContextProvider({ children }) {

    // const [user, setUser] = useState({});

    // useEffect(() => {
    //     const getSession = async () => {
    //         try {
    //             const response = await fetch('/api/getSession');
    //             toast.success('Session got');
    //             const sessionData = await response.json();
    //             setUser(sessionData);
    //             console.log(sessionData);
    //         } catch (error) {
    //             toast.error('Something went wrong!');
    //             console.log(error);
    //         }
    //     }
    //     getSession();
    // }, []);

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
