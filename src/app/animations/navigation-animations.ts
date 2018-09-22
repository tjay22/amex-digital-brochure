import { trigger, state, animate, transition, style, query, sequence, stagger, animateChild, group } from '@angular/animations';

export const navAnimation = [
    trigger('openClose', [
        state('open', style({
            transform: 'translateX(-170px)'
        })),
        state('closed', style({
            transform: 'translateX(0px)'
        })),
        transition('open => closed', [
            animate('0.5s ease-in-out'),
            query('@openCloseDropdown', [
                animateChild()
            ])
        ]),
        transition('closed => open', [
            animate('0.5s ease-in-out'),
            query('@openCloseDropdown', [
                animateChild()
            ])
        ])
    ]),
    trigger('openCloseDropdown', [
        transition('* => *', [
            style({
                transform: 'translateY(-10px)',
                opacity: 0
            }),
            query(':self', [
                stagger(30, [
                    animate('0.3s ease-in-out'), style({
                        transform: 'translateY(0px)',
                        opacity: 1
                    })
                ])
            ])
        ])
    ])
];
