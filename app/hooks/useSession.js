import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function useSession() {
    try {
        const response = await getServerSession(authOptions);
        console.log(response)
        return response;
    } catch (error) {
        throw new Error('failed')
    }
}
