export class CheckRoute {
    getedDataIdFromRoute: any = [];

    constructor() {
        this.getDataFromRoute();
    }
    getDataFromRoute = () => {
        this.getedDataIdFromRoute = window.location.pathname.split('/')[1];
    }
    isNull = (value: any) => typeof value === "undefined" || !value || value.length === 0;

}