export default async function useSessionDetail() {
    const response = await fetch('http://localhost:3000/api/getSession');
    try {
        const sessionData = await response.json();
        console.log(sessionData);
        return sessionData;

    } catch (error) {
        throw new Error('failed to fetch data')
    }
    // toast.success('Session got');
}
    