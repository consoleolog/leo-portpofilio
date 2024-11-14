import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {useSession} from "next-auth/react";
import {NextApiRequest, NextApiResponse} from "next";

export class AuthService {

    async getUserFromServer(req?:NextApiRequest , res? : NextApiResponse){

        if (!req && !res) return await getServerSession(authOptions);

        return await getServerSession(req, res, authOptions);
    }

    getUserFromClient(){
        const session = useSession();
        if (!session) return undefined;
        return session;
    }

}