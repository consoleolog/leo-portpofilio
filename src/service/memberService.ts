import {CommonUtil} from "@/util/commonUtil";


export class MemberService {

    reqLogin(userId: string, userPw: string): void{
        new Promise<void>((resolve, reject) => {
            if (CommonUtil.isEmpty(userId)){
                reject({
                    code: "USERID_BLANK",
                    msg: "아이디를 입력해 주세요."
                });
            } else if (CommonUtil.isEmpty(userPw)){
                reject({
                    code: "USERPW_BLANK",
                    msg: "비밀번호를 입력해 주세요."
                });
            } else {
                resolve();
            }
        }).then(function (){
            fetch('/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json; charset=utf-8'},
                body: JSON.stringify({
                    userId: userId,
                    userPw: userPw
                }),
                cache: 'no-cache',
            }).then((r)=>{
                if (!r.ok) throw Error(r.statusText);
                return r.json();
            }).then((response)=>{
                console.log(response)
            }).catch((error)=>{
                throw Error(error);
            });
        }).catch(function (error){
            alert(error.msg);
        });
    }

    reqRegister(){

    }

}

