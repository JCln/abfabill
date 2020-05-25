import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('AppModule <=> ServiceDesk', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '100%' })
            ]),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('350ms ease-in-out', style({ left: '100%' }))
                ]),
                query(':enter', [
                    animate('350ms ease-in-out', style({ left: '0%' }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('* <=> FilterPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('350ms ease-in-out', style({ left: '100%' }))
                ], { optional: true }),
                query(':enter', [
                    animate('350ms ease-in-out', style({ left: '0%' }))
                ], { optional: true })
            ]),
            query(':enter', animateChild(), { optional: true }),
        ])
    ]);