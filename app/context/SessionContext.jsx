'use client'

import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const SessionContext = createContext();

export default async function SessionContextProvider({ children }) {

    const [user, setUser] = useState({});

    useEffect(() => {
        const getSession = async () => {

            try {
                const response = await axios.get('/api/getSession');
                toast.success('Session got');
                const sessionData = await response.data;
                setUser(sessionData);
                console.log(sessionData);
            } catch (error) {
                toast.error('Something went wrong!');
                console.log(error);
            }
        }
        getSession();
    }, []);

    return (
        <SessionContext.Provider value={{ user }}>
            {children}
        </SessionContext.Provider>
    )
}
