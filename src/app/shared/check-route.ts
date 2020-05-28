export class CheckRoute {
    constructor() {
        this.getDataFromRoute();
    }
    getedDataIdFromRoute: any = [];

    getDataFromRoute = () => {
        this.getedDataIdFromRoute = window.location.pathname.split('/')[1];
    }
    isNull = (value: any) => typeof value === "undefined" || !value || value.length === 0;
}