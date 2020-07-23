export class CheckRoute {
    persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    getedDataIdFromRoute: any = [];

    constructor() {
        this.getDataFromRoute();
    }
    getDataFromRoute = () => {
        this.getedDataIdFromRoute = window.location.pathname.split('/')[1];
    }
    persianToEngNumbers = (str) => {
        if (typeof str === 'string') {
            for (let i = 0; i < 10; i++) {
                str = str.replace(this.persianNumbers[i], i);
            }
        }
        return str;
    };
    isNull = (value: any) => typeof value === "undefined" || !value || value.length === 0;

}