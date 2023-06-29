'use server'

import { cookies } from "next/headers";

export default async function useGetJobDetail() {
    const cookieStore = cookies()
    const jobDetail = cookieStore.get('jobDetail');
    console.log(jobDetail)
    return jobDetail
}
