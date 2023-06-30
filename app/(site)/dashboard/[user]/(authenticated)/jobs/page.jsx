import React from 'react';

import { Card, List, ListItem, Typography } from "../../../../../convertedComponents";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { SessionContext } from '@/app/context/SessionContext';
import useSession from '@/app/hooks/useSession';
import useGetPostedJobs from '@/app/hooks/useGetPostedJobs';

export default async function Jobs() {
    // const [postedJobs, setPostedJobs] = useState([]);
    // const [user, setUser] = useState();

    // const { data: session, status } = useSession()
    // console.log(session)
    // useEffect(() => {
    //     const data = useSessionDetail();
    //     const getPostedJobs = async () => {
    //         try {
    //             const response = await fetch('/api/getPostedJobs', {
    //                 method: 'POST',
    //                 credentials: 'same-origin',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     businessId: data.user.id
    //                 })
    //             });
    //             toast.success('Posted Jobs got!');

    //             const jobs = await response.json()
    //             console.log(jobs)
    //             setPostedJobs(jobs)
    //         } catch (error) {
    //             toast.error('Something went wrong!');
    //             console.log(error);
    //         }
    //     }
    //     getPostedJobs();
    // }, []);
    // console.log(user)
    // console.log(postedJobs)
    const session = await useSession()

    const postedJobs = await useGetPostedJobs(session.user.id)
    console.log('Posted Jobs:', postedJobs)
    return (
        <Card className="bg-blue-gray-100 h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5 m-4">
            hello Jobs
            <List className='bg-blue-gray-200'>
                {postedJobs.map((element) => (
                    <ListItem key={element.id} className='px-2 py-1 border-b-2'>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                {element.title}
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                {element.business.name}
                            </Typography>
                        </div>
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}
