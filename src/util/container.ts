import {MemberService} from "@/service/MemberService";
import {DatabaseConfig} from "@/util/database";

export class Container{

    private readonly _memberService: MemberService;

    private readonly _database: DatabaseConfig;

    constructor() {
        this._memberService = new MemberService();
        this._database = new DatabaseConfig();
    }

    get memberService() {
        return this._memberService;
    };

    get db(){
        return this._database.connectDB();
    }

}