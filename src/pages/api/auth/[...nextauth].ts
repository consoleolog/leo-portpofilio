import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";
import PostgresAdapter from "@auth/pg-adapter";
import {container} from "@/app/layout";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: 'telephone',
            name: 'Credentials',
            credentials : {

            },
            async authorize(credentials, req){

                return null;
            },
        }),
    ],
    secret: process.env.JWT_SECRET,
    adapter: PostgresAdapter(await container.db),
}

export default NextAuth(authOptions);