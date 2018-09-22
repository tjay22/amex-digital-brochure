import { trigger, state, animate, transition, style, query as q, sequence, stagger, animateChild, group } from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const contentAnimation = [
    trigger('animateImagePanel', [
        transition(':enter', [
            group([
                query('.section-content', style({
                    opacity: 0,
                    transform: 'translateY(150px)'
                })),
                query('.section-image', style({
                    opacity: 0
                })),
                // query('.section-headline', style({
                //     opacity: 0,
                //     transform: 'translateX(-100px)'
                // })),
                query('.section-content', 
                    animate('1s', style({
                        opacity: 1,
                        transform: 'translateY(0px)'
                    })),
                ),
                query('.section-image', 
                    animate('.5s', style({
                        opacity: 1
                    })),
                ),
                // query('.section-headline', 
                //     animate('1s', style({
                //         opacity: 1, 
                //         transform: 'translateX(0px)'
                //     })),
                // )
            ])
        ]),
        transition(':leave', [
            group([
                query('.section-content', style({
                    opacity: 1,
                    transform: 'translateY(0px)'
                })),
                query('.section-image', style({
                    opacity: 1
                })),
                // query('.section-headline', style({
                //     opacity: 1,
                //     transform: 'translateX(0px)'
                // })),
                query('.section-content', 
                    animate('1s', style({
                        opacity: 0,
                        transform: 'translateY(150px)'
                    })),
                ),
                query('.section-image', 
                    animate('.5s', style({
                        opacity: 0
                    })),
                ),
                // query('.section-headline', 
                //     animate('1s', style({
                //         opacity: 0, 
                //         transform: 'translateX(-100px)'
                //     })),
                // )
            ])
        ]),
    ])
];