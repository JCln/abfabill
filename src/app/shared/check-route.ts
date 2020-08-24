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
        for (let i = 0; i < 10; i++) {
            str = str.replace(this.persianNumbers[i], i);
        }
        return str;
    };
    trimStrings = (str: number): string => {
        return str.toString().trim();
    }
    isNull = (value: any) => typeof value === 'undefined' || !value || value.length === 0;

    numbersValidation = <T>(values: T): boolean => {
        const stringVal = values.toString();
        const regexIsPersian = /^[\u06F0-\u06F90-9]+$/;
        if (regexIsPersian.test(stringVal))
            return true;
        return false;
    }
    isMobileScreen = (): boolean => {
        if (screen.width < 880)
            return true;
        return false;
    }
}