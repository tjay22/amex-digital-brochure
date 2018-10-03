import { trigger, state, animate, transition, style, query as q, sequence, stagger, animateChild, group } from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const contentAnimation = [
    trigger('animateImagePanel', [
        transition(':enter', [
            group([
                // query('.section-content', style({
                //     opacity: 0,
                //     transform: 'translateY(150px)'
                // })),
                query('.section-image', style({
                    transform: 'scale(1.1)'
                })),
                query('.section-headline', style({
                    opacity: 0,
                    transform: 'translateX(-100px)'
                })),
                query('.section-image', 
                    animate('2s cubic-bezier(0.075, 0.82, 0.165, 1)', style({
                        transform: 'scale(1)'
                    })),
                ),
                query('.section-headline', 
                    animate('.5s cubic-bezier(.75,-0.48,.26,1.52)', style({
                        opacity: 1, 
                        transform: 'translateX(0px)'
                    })),
                )
            ])
        ]),
        transition(':leave', [
            group([
                // query('.section-content', style({
                //     opacity: 1,
                //     transform: 'translateY(0px)'
                // })),
                query('.section-image', style({
                    transform: 'scale(1)'
                })),
                query('.section-headline', style({
                    opacity: 1,
                    transform: 'translateX(0px)'
                })),
                query('.section-content', 
                    animate('1s', style({
                        opacity: 0
                    })),
                ),
                query('.section-image', 
                    animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)', style({
                        transform: 'scale(1.1)'
                    })),
                ),
                query('.section-headline', 
                    animate('.5s cubic-bezier(.75,-0.48,.26,1.52)', style({
                        opacity: 0, 
                        transform: 'translateX(-100px)'
                    })),
                )
            ])
        ]),
    ])
];

// export const contentAnimation = [
//     trigger('animateImagePanel', [
//         transition(':enter', [
//             group([
//                 query('.col-copy', style({
//                     width: '*'
//                 })),
//                 query('.col-image', style({
//                     width: '*'
//                 })),
//                 query('.col-copy', 
//                     animate('1s', style({
//                         width: '50%'
//                     })),
//                 ),
//                 query('.col-image', 
//                     animate('.5s', style({
//                         width: '50%'
//                     })),
//                 )
//             ])
//         ]),
//         transition(':leave', [
//             group([
//                 query('.col-copy', style({
//                     width: '50%'
//                 })),
//                 query('.col-image', style({
//                     width: '50%'
//                 })),
//                 query('.col-copy', 
//                     animate('1s', style({
//                         width: '0%'
//                     })),
//                 ),
//                 query('.col-image', 
//                     animate('.5s', style({
//                         width: '0%'
//                     })),
//                 )
//             ])
//         ]),
//     ])
// ];