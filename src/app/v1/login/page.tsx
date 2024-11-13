import styles from "@/styles/pages/login/login.module.scss";


export default function Login(){


    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form action="/login" method="POST">
                    <input type="text" name={"userId"} id={"userId"} autoComplete={""}/>
                    <input type="password" name={"userPw"} id={"userPw"} autoComplete={"current-password"}/>
                    <button type={"submit"}>로그인</button>
                    <a href="http://localhost:8080/oauth2/authorization/kakao">카카오 로그인</a>
                </form>
            </div>
        </div>
    );
}