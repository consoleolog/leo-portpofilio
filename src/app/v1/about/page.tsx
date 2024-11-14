import {container} from "@/app/layout";
import {AuthService} from "@/service/AuthService";


export default async function About(){

    const authService = new AuthService();

    let user = await authService.getUserFromServer();

    console.log(user);

    return (
        <div>
            <h4>About 페이지임</h4>
        </div>
    );
}