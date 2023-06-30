'use client'

import React from 'react'
import Main from './components/Main'

export default function AuthenticatedDashboard({ children }) {
    return (
        <div className='w-full h-full flex'>
            <Main />
        </div>
    )
}
