import axios from "axios";
import { toast } from "react-hot-toast";

export default async function useSessionDetail() {
    try {
        const response = await axios.get('/api/getSession');
        toast.success('Session got');
        const sessionData = await response.data;
        // console.log(sessionData);
        return sessionData;
    } catch (error) {
        toast.error('Something went wrong!');
        console.log(error);
    }
}