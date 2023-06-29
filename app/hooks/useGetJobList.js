export default async function useGetJobList() {
        const response = await fetch('http://localhost:3000/api/getJob');
        // toast.success('Job List got!');

        if(!response.ok) {
            throw new Error('failed to fetch users')
        }
        const data = await response.json()
        console.log(data)
        return data;
   
}
