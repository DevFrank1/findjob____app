import React from 'react';
// import { Button, Card } from '@material-tailwind/react';
// import useSessionDetail from '../hooks/useSessionDetail';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { useSession } from 'next-auth/react';
import useGetJobDetail from '../hooks/useGetJobDetail';
import { Avatar, Button, List, ListItem, ListItemPrefix, ListItemSuffix, Card, Typography } from '../convertedComponents';

export default async function JobDetail() {
    // const [user, setUser] = useState();
    // const [jobApplication, setJobApplication] = useState({
    //     jobId: '',
    //     userId: '',
    //     applicationText: 'hello'
    // })

    // const { data: session, status } = useSession()
    // console.log(session)

    // const applyToJob = async () => {
    //     setJobApplication({ ...jobApplication, jobId: currentJobDetail.id, userId: user?.user?.id })
    //     await fetch('/api/applyJob', {
    //         method: 'POST',
    //         credentials: 'same-origin',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(
    //             {
    //                 jobId: currentJobDetail.id,
    //                 userId: user?.user?.id,
    //                 applicationText: 'hello'
    //             }
    //         )
    //     }).then(() => toast.success('Applied!'))
    //         .catch(() => toast.error('Something went wrong!'));
    // }

    // useEffect(() => {
    //     async function getUser() {
    //         const data = await useSessionDetail();
    //         setUser(data);
    //     }
    //     getUser()
    // }, [])
    // console.log(user)

    const job = await useGetJobDetail()
    console.log(job)
    return (
        <Card className="hidden lg:flex lg:w-6/12 bg-blue-gray-50 my-4 shadow-sm p-4 items-center justify-center">
            <h1>
                {job.value.title}
            </h1>
            {/* <h1>
                {currentJobDetail?.title}
            </h1> */}
            <Button variant="text" className='bg-blue-gray-100' color="blue-gray" >
                apply
            </Button>
        </Card>
    )
}
