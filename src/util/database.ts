import {Pool} from "pg";


export class DatabaseConfig {

    private readonly _rdb: Pool;

    constructor() {
        this._rdb = new Pool({
            user: process.env.POSTGRES_USER || 'postgres',
            password: process.env.POSTGRES_PW || 'postgres',
            database: process.env.POSTGRES_DATABASE || 'postgres',
            host: process.env.POSTGRES_HOST || 'localhost',
            port: Number(process.env.POSTGRES_PORT || 5432),
        });
    }

    public async connectDB(){
        this._rdb.connect().then(()=>{
            return this._rdb;
        }).catch((error: any)=>{
            throw Error(`DB connection fail , error msg : ${error}`);
        });
    }


}
