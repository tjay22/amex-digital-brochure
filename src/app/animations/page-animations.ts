import { trigger, state, animate, transition, style, query, sequence, stagger, animateChild, group } from '@angular/animations';

export const pageResizeAnimation = [
    trigger('copyResize', [
        state('collapsed', style({
            width: '75vw'
        })),
        state('expanded', style({
            width: '50vw'
        })),
        transition('expanded <=> collapsed', [
            animate('1s ease-in-out')
        ]),
    ]),
    trigger('imageResize', [
        state('collapsed', style({
            width: '25vw'
        })),
        state('expanded', style({
            width: '50vw'
        })),
        transition('expanded <=> collapsed', [
            animate('1s ease-in-out')
        ])
    ]),
    trigger('buttonRotate', [
        state('collapsed', style({
            transform: 'rotate(180deg)',
        })),
        state('expanded', style({
            transform: 'rotate(0deg)'
        })),
        transition('expanded <=> collapsed', [
            animate('1s ease-out')
        ])
    ])
];