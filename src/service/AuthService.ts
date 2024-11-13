import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {useSession} from "next-auth/react";

class AuthService {

    async getUserFromServerCmpnt(){
        return await getServerSession(authOptions);
    }

    getUserFromClientCmpnt(){
        const session = useSession();
        if (!session) return null;
        return session
    }

}