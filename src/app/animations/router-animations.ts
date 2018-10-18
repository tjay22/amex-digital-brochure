import { trigger, animate, animation, transition, style, query, group, sequence, state, stagger, animateChild, useAnimation } from '@angular/animations';
//const query = (s,a,o={optional:true})=>q(s,a,o);

const mainSectionAnimation = [
  query(':enter, :leave', style({ position: 'fixed'}), {optional: true}),
  group([
    query(':leave', [
      query('.col-copy', style({
        transform: 'translateX(0%)'
      }), {optional: true}),
      query('.col-image', style({
          transform: 'translateX(0%)'
      }), {optional: true}),
      group([
        query('.col-copy', 
          animate('1.5s cubic-bezier(0.23, 1, 0.32, 1)', style({
              transform: 'translateX(-100%)'
          })),
        {optional: true}),
        query('.col-image', 
          animate('1.5s cubic-bezier(0.23, 1, 0.32, 1)', style({
              transform: 'translateX(100%)'
          })),
        {optional: true}),
      ])
    ]), 
    query(':enter', [
      style({transform: 'translateX(0%) scale(.5)', 'z-index': '1', opacity: 0}),
      animate('.7s ease-in-out', style({ 
        transform: 'scale(1)',
        'z-index': 2,
        opacity: 1
      })),
    ], {optional: true}),
    query(':leave', [
      style({transform: 'translateX(0%) scale(1)', 'z-index': 2})
    ], {optional: true}),
  ])
];

const subSectionAnimation = animation([
  query(':enter, :leave', style({ position: 'fixed' }), {optional: true}),
  query(':leave', [
    query('.col-copy', [
      style({ 'z-index': '-1' })
    ], {optional: true}),
    query('.col-copy-inner', [
      style({ transform: 'translateX(0%)' })
    ], {optional: true}),
    query('.col-image .background-image', [
      style({ opacity: 0 })
    ], {optional: true})
  ], {optional: true}),
  query(':enter', [
    query('.col-copy', [
      style({ 'z-index': '1' })
    ], {optional: true}),
    query('.col-copy-inner', [
      style({ transform: 'translateX({{directionIn}})'})
    ], {optional: true}),
    query('.col-image .background-image', [
      style({ opacity: 0 })
    ], {optional: true})
  ], {optional: true}),
  group([
    group([
      query('@animateContentPanels', animateChild(), {optional: true}),
      query(':leave', [
        query('.col-copy-inner', [
          animate('1s ease-in-out', style({ transform: 'translateX({{directionOut}})' }))
        ], {optional: true})
      ], {optional: true}),
      query(':enter', [
        query('.col-copy-inner', [
          animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], {optional: true})
      ], {optional: true}),
    ])
  ]),
  query(':enter', [
    query('.col-copy-inner', [
      style({ transform: 'translateX(100%)' })
    ], {optional: true})
  ], {optional: true})
]);

const contentPanelsAnimation = [
  query(':leave', [
    query('.section-content', [
      style({ opacity: 0, transform: 'translateX(10%)' })
    ], {optional: true}),
    query('.section-headline .hl-word', [
      style({ opacity: 1, transform: 'translateY(100%)' })
    ], {optional: true})
  ], {optional: true}),
  query(':enter', [
    query('.section-content', [
      style({ opacity: 0, transform: 'translateX(0%)' })
    ], {optional: true}),
    query('.section-headline .hl-word', [
      style({ opacity: 1, transform: 'translateY(100%)' })
    ], {optional: true})
  ], {optional: true}),
  sequence([
    group([
      query(':leave .section-headline .hl-word', stagger(200, [
        style({ transform: 'translateY(0%)' }),
        animate('.5s cubic-bezier(0.6, -0.28, 0.735, 0.045)', style({ transform: 'translateY(100%)' }))
      ]), {optional: true}),
      query(':leave .section-content', [
        style({ opacity: 1, transform: 'translateX(0%)' }),
        animate('1s .8s ease-in-out', style({ opacity: 0, transform: 'translateX(30%)' }))
      ], {optional: true})
    ]),
    group([
      query(':enter .section-headline .hl-word', stagger(200, [
        style({ transform: 'translateY(100%)' }),
        animate('.5s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ transform: 'translateY(0%)' }))
      ]), {optional: true}),
      query(':enter .section-content', [
        style({ opacity: 0, transform: 'translateX(30%)' }),
        animate('1s .8s ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))
      ], {optional: true})
    ])
  ])
];

/*  LAST WORKING ANIMATION */
/*

const contentPanelsAnimation = [
  query(':leave', [
    query('.section-content', [
      style({ opacity: 0, transform: 'translateX(10%)' })
    ]),
    query('.section-headline', [
      style({ opacity: 0, transform: 'translateY(100%)' })
    ])
  ]),
  query(':enter', [
    query('.section-content', [
      style({ opacity: 0, transform: 'translateX(0%)' })
    ]),
    query('.section-headline', [
      style({ opacity: 0, transform: 'translateY(100%)' })
    ])
  ]),
  sequence([
    group([
      query(':leave .section-headline', [
        style({ opacity: 1, transform: 'translateY(0%)' }),
        animate('1s ease-in-out', style({ opacity: 0, transform: 'translateY(100%)' }))
      ]),
      query(':leave .section-content', [
        style({ opacity: 1, transform: 'translateX(0%)' }),
        animate('1s .8s ease-in-out', style({ opacity: 0, transform: 'translateX(10%)' }))
      ])
    ]),
    group([
      query(':enter .section-headline', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('1s 1s ease-in-out', style({ opacity: 1, transform: 'translateY(0%)' }))
      ]),
      query(':enter .section-content', [
        style({ opacity: 0, transform: 'translateX(20%)' }),
        animate('1s .8s ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))
      ])
    ])
  ])
];

*/

const contentAnimation = [
  query(':leave', [
    query('.section-content', [
      style({ opacity: 0, transform: 'translateX(10%)' })
    ])
  ]),
  query(':enter', [
    query('.section-content', [
      style({ opacity: 1, transform: 'translateX(0%)' })
    ])
  ]),
  sequence([
    query(':leave', [
      query('.section-content', [
        style({ opacity: 1, transform: 'translateX(0%)' }),
        animate('.5s .8s ease-in-out', style({ opacity: 0, transform: 'translateX(10%)' }))
      ])
    ]),
    query(':enter', [
      query('.section-content', [
        style({ opacity: 0, transform: 'translateX(10%)' }),
        animate('1s .8s ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))
      ])
    ]),
    //query('@animateHeadline', animateChild())
  ])
];

const headlineAnimation = [
  query(':leave', [
    style({ opacity: 0, transform: 'translateY(100%)' })
  ]),
  query(':enter', [
    style({ opacity: 0, transform: 'translateY(100%)' })
  ]),
  sequence([
    query(':leave .section-headline-inner', [
      style({ opacity: 1, transform: 'translateY(0%)' }),
      animate('1s ease-in-out', style({ opacity: 0, transform: 'translateY(100%)' }))
    ]),
    query(':enter .section-headline-inner', [
      style({ opacity: 0, transform: 'translateY(100%)' }),
      animate('1s ease-in-out', style({ opacity: 1, transform: 'translateY(0%)' }))
    ])
  ])
];

export const routerAnimation = [
  trigger('changeRoute', [
    transition('* => main', mainSectionAnimation),
    transition('* => subsection-right', [
      useAnimation(subSectionAnimation, {
        params: {
          directionIn: '-100%',
          directionOut: '100%'
        }
      })
    ]),
    transition('* => subsection-left', [
      useAnimation(subSectionAnimation, {
        params: {
          directionIn: '100%',
          directionOut: '-100%'
        }
      })
    ]),
    // transition('* => subsection-right', subSectionAnimation('right')),
    // transition('* => subsection-left', subSectionAnimation('left')),
  ]),
  trigger('animateHeadline', [
    transition('* => *', headlineAnimation)
  ]),
  trigger('animateContent', [
    transition('* => *', contentAnimation)
  ]),
  trigger('animateContentPanels', [
    transition('* => *', contentPanelsAnimation)
  ])
];