import { trigger, state, animate, transition, style, query as q, sequence, stagger, animateChild, group } from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

// export const contentAnimation = [
//     trigger('animateContentPanels', [
//         transition(':enter', [
//             group([
//                 query('.section-image', style({
//                     transform: 'scale(1.2)'
//                 })),
//                 query('.section-headline', style({
//                     opacity: 0,
//                     transform: 'translateX(-100px)'
//                 })),
//                 query('.section-image', 
//                     animate('2s cubic-bezier(0.075, 0.82, 0.165, 1)', style({
//                         transform: 'scale(1)'
//                     })),
//                 ),
//                 query('.section-headline', 
//                     animate('.5s cubic-bezier(.75,-0.48,.26,1.52)', style({
//                         opacity: 1, 
//                         transform: 'translateX(0px)'
//                     })),
//                 )
//             ])
//         ]),
//         transition(':leave', [
//             group([
//                 query('.section-image', style({
//                     transform: 'scale(1)'
//                 })),
//                 query('.section-headline', style({
//                     opacity: 1,
//                     transform: 'translateX(0px)'
//                 })),
//                 query('.section-image', 
//                     animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({
//                         transform: 'scale(1.2)'
//                     })),
//                 ),
//                 query('.section-headline', 
//                     animate('.5s cubic-bezier(.75,-0.48,.26,1.52)', style({
//                         opacity: 0, 
//                         transform: 'translateX(-100px)'
//                     })),
//                 )
//             ])
//         ]),
//     ])
// ];

// export const contentAnimation = [
//     trigger('animateContentPanels', [
//         transition(':leave', [
//             query('.col-copy', style({
//                 transform: 'translateX(0%)'
//             })),
//             query('.col-image', style({
//                 transform: 'translateX(0%)'
//             })),
//             group([
//                 query('.col-copy', 
//                     animate('1.5s cubic-bezier(0.23, 1, 0.32, 1)', style({
//                         transform: 'translateX(-100%)'
//                     })),
//                 ),
//                 query('.col-image', 
//                     animate('1.5s cubic-bezier(0.23, 1, 0.32, 1)', style({
//                         transform: 'translateX(100%)'
//                     })),
//                 ),
//             ])
//         ]),
//         transition(':enter', [
//             query('.col-copy', style({
//                 transform: 'translateX(0%)'
//             })),
//             query('.col-image', style({
//                 transform: 'translateX(0%)'
//             })),
//             group([
//                 query('.col-copy', 
//                     animate('1s cubic-bezier(0.23, 1, 0.32, 1)', style({
//                         transform: 'translateX(0%)'
//                     })),
//                 ),
//                 query('.col-image', 
//                     animate('1s cubic-bezier(0.23, 1, 0.32, 1)', style({
//                         transform: 'translateX(0%)'
//                     })),
//                 ),
//             ])
//         ])
//     ])
// ];

const mainSectionAnimation = [
    transition(':enter', [
        query('.col-copy', style({
            transform: 'translateX(0%)'
        })),
        query('.col-image', style({
            transform: 'translateX(0%)'
        })),
        group([
            query('.col-copy', 
                animate('1.5s cubic-bezier(0.23, 1, 0.32, 1)', style({
                    transform: 'translateX(0%)'
                })),
            ),
            query('.col-image', 
                animate('1.5s cubic-bezier(0.23, 1, 0.32, 1)', style({
                    transform: 'translateX(0%)'
                })),
            ),
        ])
    ]),
    transition(':leave', [
        query('.col-copy', style({
            transform: 'translateX(0%)'
        })),
        query('.col-image', style({
            transform: 'translateX(0%)'
        })),
        group([
            query('.col-copy', 
                animate('1.5s cubic-bezier(0.23, 1, 0.32, 1)', style({
                    transform: 'translateX(-100%)'
                })),
            ),
            query('.col-image', 
                animate('1.5s cubic-bezier(0.23, 1, 0.32, 1)', style({
                    transform: 'translateX(100%)'
                })),
            ),
        ])
    ])
];

const subSectionAnimation = [
    query(':enter', [
        query('.col-copy', style({
            transform: 'translateX(0%)'
        })),
        query('.col-image', style({
            transform: 'translateX(0%)'
        })),
        group([
            query('.col-copy', 
                animate('1s cubic-bezier(0.23, 1, 0.32, 1)', style({
                    transform: 'translateX(0%)'
                })),
            ),
            query('.col-image', 
                animate('1s cubic-bezier(0.23, 1, 0.32, 1)', style({
                    transform: 'translateX(0%)'
                })),
            ),
        ])
    ])
];

export const contentAnimation = trigger('animateContentPanels', [
    transition('* => *', mainSectionAnimation)
]);