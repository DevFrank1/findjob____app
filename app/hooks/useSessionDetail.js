import axios from "axios";
import { toast } from "react-hot-toast";

export default async function useSessionDetail() {
    try {
        const response = await fetch('/api/getSession');
        toast.success('Session got');
        const sessionData = await response.json();
        // console.log(sessionData);
        return sessionData;
    } catch (error) {
        toast.error('Something went wrong!');
        console.log(error);
    }
}