export interface IViewBill {
    abBaha: number;
    ahadMaskooni: number;
    ahadNonMaskooni: number;
    barCode: number;
    barge: number;
    billId: number;
    budget: number;
    counterStateId: number;
    currentCounterNumber: number;
    currentCounterReadingDate: string;
    deadLine: string;
    eshterak: number;
    fullName: string;
    id: number;
    jam: number;
    karbariTitle: string;
    karmozdFazelab: number;
    lavazemKahande: number;
    maliat: number;
    masraf: number;
    masrafAverage: number;
    masrafLiter: number;
    payBank: string;
    payDate: string;
    payId: number;
    payable: number;
    preBedOrBes: string;
    preCounterNumber: number;
    preCounterReadingDate: string;
    days: number;
    qotr: string;
    qotrSifoon: string;
    radif: number;
    taxfif: number;
    zarfiatQarardadi: number;
    zoneTitle: string;
    type?: string;
    isPayed?: boolean;
}
