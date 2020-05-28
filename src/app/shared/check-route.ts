export class CheckRoute {
    constructor() {
        this.getDataFromRoute();
    }
    getedDataIdFromRoute: any = [];

    getDataFromRoute = () => {
        this.getedDataIdFromRoute = window.location.pathname.split('/')[1];
    }
}
