


export class Account {

    private accountSn: string;

    private accountId: string;

    private password: string;

    private lastLoginDt: Date;

    private regDt: Date;

    private updDt: Date;

    private updUser: Date;

    private _useYn: 'Y' | 'N';

    private _socialYn: 'Y' | 'N';

    get useYn(): 'Y' | 'N' {
        return this._useYn;
    }
    set useYn(value: boolean) {
        this._useYn = value ? 'Y' : 'N';
    }

    constructor() {

    }

}