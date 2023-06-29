'use server'

import { cookies } from "next/headers";

export default async function useJobDetail(job) {
    const cookieStore = cookies()
    cookieStore.set('jobDetail', job);
    console.log(job.title)
}
