export default async function useGetPostedJobs(id) {
    const response = await fetch('http://localhost:3000/api/getPostedJobs', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            businessId: id
        })
    });

    if (!response.ok) {
        throw new Error('failed to fetch users')
    }
    const jobs = await response.json();
    console.log(jobs);
    return jobs;    
}
