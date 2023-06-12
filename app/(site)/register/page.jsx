'use client'

import React, { useState } from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import UserTab from './components/UserTab';
import BusinessTab from './components/BusinessTab';

export default function Register() {

    const [typeSection, setTypeSection] = useState('user')
    return (
        <div className='w-screen h-screen flex justify-center'>
            <Tabs className='w-80 sm:w-96 mt-10 lg:mt-32' value={typeSection}>
                <TabsHeader>
                    <Tab value='user' onClick={() => setTypeSection('user')}>
                        <div className="flex items-center gap-2">
                            user
                        </div>
                    </Tab>
                    <Tab value='business' onClick={() => setTypeSection('business')}>
                        <div className="flex items-center gap-2">
                            business
                        </div>
                    </Tab>
                </TabsHeader>
                <TabsBody>
                    {typeSection === 'user' ? <TabPanel key={typeSection} value={typeSection}><UserTab /></TabPanel> :
                        <TabPanel key={typeSection} value={typeSection}><BusinessTab />
                        </TabPanel>}
                </TabsBody>
            </Tabs>
        </div>
    )
}
