

export class CommonUtil {

    static isEmpty = (value: any): boolean => typeof value == undefined || value == '' || value == null || value.length == 0;

    static serializeObject = (form: HTMLFormElement) => {
        const formData = new FormData(form);

        const result = {}

        for (const [name, value] of formData){
            result[name] = value;
        }
        return result;
    }



}


