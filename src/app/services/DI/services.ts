import { IServices } from 'src/app/interfaces/iservices';

export const desks: IServices[] = [
    {
        title: 'مشاهده و پرداخت قبض', id: 1, routerLink: 'bill', src: 'assets/imgs/serviceDesk/bill2.png'
    },
    {
        title: 'اعلام کارکرد کنتور', id: 1, routerLink: 'ma', src: 'assets/imgs/serviceDesk/meter.png'
    },
    {
        title: 'صدور قبض میاندوره', id: 1, routerLink: 'ma', src: 'assets/imgs/serviceDesk/annMetter.png'
    },
    {
        title: 'ده قبض آخر', id: 1, routerLink: 'kardex', src: 'assets/imgs/serviceDesk/viewBills.png'
    },
    {
        title: 'نمایش اقساط', id: 1, routerLink: 'installment', src: 'assets/imgs/serviceDesk/installment.png'
    },
    {
        title: 'تغییر شماره همراه', id: 1, routerLink: 'um', src: 'assets/imgs/serviceDesk/mobile.png'
    },
    {
        title: 'درخواست انشعاب فاضلاب', id: 2, routerLink: 'elcs', src: 'assets/imgs/serviceDesk/ensheab.png'
    },
    {
        title: 'تغییر مشخصات', id: 5, routerLink: 'elcs', src: 'assets/imgs/serviceDesk/name.png'
    },
    {
        title: 'تغییر واحد', id: 6, routerLink: 'elcs', src: 'assets/imgs/serviceDesk/vahed.png'
    },
    {
        title: 'تغییر کاربری', id: 7, routerLink: 'elcs', src: 'assets/imgs/serviceDesk/karbari.png'
    },
    {
        title: 'تغییر قطر انشعاب', id: 8, routerLink: 'elcs', src: 'assets/imgs/serviceDesk/change.png'
    },
    {
        title: 'نصب سیفون اضافی', id: 9, routerLink: 'elcs', src: 'assets/imgs/serviceDesk/nvalve.png'
    },
    {
        title: 'نظام مهندسی', id: 29, routerLink: 'elcs', src: 'assets/imgs/serviceDesk/ass.png'
    },
    {
        title: 'قطع یا نصب انشعاب', id: 11, routerLink: 'elcs', src: 'assets/imgs/serviceDesk/openclose.png'
    },
    {
        title: 'سایر خدمات', id: 74, routerLink: 'elcs', src: 'assets/imgs/serviceDesk/confirm.png'
    }
];
