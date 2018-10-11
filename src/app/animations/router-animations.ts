import { trigger, animate, transition, style, query as q, group, sequence, state, stagger, animateChild } from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);
import { TweenMax, TweenLite, TimelineMax, TextPlugin, Linear, Power1, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";
  
export const fadeAnimation = trigger('fadeAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1 }), animate('1s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export const routeSlide = trigger('routeSlide', [
  transition('* <=> *', [
    group([
      query(
        ':enter',
        [style({ transform: 'translateX(0%)' })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ transform: 'translateX(0%)' }), animate('.3s ease-in-out', style({ transform: 'translateX(-100%)' }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ transform: 'translateX(100%)' }), animate('.3s ease-in-out', style({ transform: 'translateX(0%)' }))],
        { optional: true }
      )
    ])
  ])
]);

// export const routerAnimation = trigger('changeRoute', [
//   transition('* => *', [
//     query(':enter, :leave', style({ position: 'fixed'})),
//     query(':enter', style({ transform: 'translateX(100%)' })),
//     sequence([
//       query(':leave', animateChild()), 
//       query(':leave', [
//         style({ transform: 'scale(1)' }),
//         animate('500ms cubic-bezier(0.77, 0, 0.175, 1)', 
//           style({ transform: 'scale(.9)' }))
//       ]),
//       group([
//         query(':leave', [
//           style({ transform: 'translateX(0%) scale(.9)' }),
//           animate('500ms ease-in-out', 
//             style({ transform: 'translateX(-100%) scale(.9)' }))
//         ]),
//         query(':enter', [
//           style({ transform: 'translateX(100%) scale(.9)' }),
//           animate('500ms ease-in-out', 
//             style({ transform: 'translateX(0%) scale(.9)' })),
//         ])
//       ]),
//       query(':enter', [
//         style({ transform: 'scale(.9)' }),
//         animate('500ms cubic-bezier(0.77, 0, 0.175, 1)', 
//           style({ transform: 'scale(1)' }))
//       ]),
//       query(':enter', animateChild()),
//     ])
//   ])
// ]);

// export const routerAnimation = trigger('changeRoute', [
//   transition('* => *', [
//     query(':enter, :leave', style({ position: 'fixed'})),
//     group([
//       query(':leave', animateChild()), 
//       query(':enter', [
//         style({transform: 'translateX(0%) scale(.5)', 'z-index': '1', opacity: 0}),
//         animate('.7s ease-in-out', style({ 
//           transform: 'scale(1)',
//           'z-index': 2,
//           opacity: 1
//         })),
//       ]),
//       query(':leave', [
//         style({transform: 'translateX(0%) scale(1)', 'z-index': 2})
//       ]),
//       query(':enter', animateChild()),
//     ])
//   ])
// ]);

const mainSectionAnimation = [
  query(':enter, :leave', style({ position: 'fixed'})),
  group([
    query(':leave', [
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
    ]), 
    query(':enter', [
      style({transform: 'translateX(0%) scale(.5)', 'z-index': '1', opacity: 0}),
      animate('.7s ease-in-out', style({ 
        transform: 'scale(1)',
        'z-index': 2,
        opacity: 1
      })),
    ]),
    query(':leave', [
      style({transform: 'translateX(0%) scale(1)', 'z-index': 2})
    ]),
  ])
];

const subSectionAnimation = direction => [
  query(':enter, :leave', style({ position: 'fixed' })),
  query(':leave', [
    query('.col-copy', [
      style({ transform: 'translateX(0%)' })
    ])
  ]),
  query(':enter', [
    query('.col-copy', [
      style({ transform: `translateX(${direction === 'right' ? '-' : ''}100%)`})
    ])
  ]),
  group([
    query(':leave', [
      group([
        query('.col-copy', [
          animate('1s ease-in-out', style({ transform: `translateX(${direction === 'left' ? '-' : ''}100%)` }))
        ]),
        query('.col-image', [
          animate('1s ease-in-out', style({ opacity: 0 }))
        ])
      ])
    ]),
    query(':enter', [
      group([
        query('.col-copy', [
          style({ opacity: 1 }),
          animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        query('.col-image', [
          style({ opacity: 0 }),
          animate('1s ease-in-out', style({ opacity: 1 }))
        ])
      ])
    ]),
  ]),
  query('@animateContentPanels', animateChild()),
  query(':enter', [
    query('.col-copy', [
      style({ transform: 'translateX(100%)' })
    ])
  ]),
];

// const subSectionAnimation = [
//   query(':enter, :leave', style({ position: 'fixed'})),
//   query(':leave', [
//     query('.col-copy', style({
//       transform: 'translateX(0%)'
//     })),
//     query('.col-image', style({
//         transform: 'translateX(100%)'
//     })),
//   ]),
//   query(':enter', [
//     query('.col-copy', style({
//       transform: 'translateX(0%)'
//     })),
//     query('.col-image', style({
//       transform: 'translateX(0%)'
//     })),
//   ]),

//   sequence([
//     query(':leave', [
//       group([
//         query('.col-copy', [
//           animate('1000ms cubic-bezier(0.23, 1, 0.32, 1)', style({
//             transform: 'translateX(0%)'
//           }))
//         ]),
//         query('.col-image', [
//           animate('500ms ease-in-out', style({
//             transform: 'translateX(0%)',
//             width: '100vw'
//           }))
//         ])
//       ])
//     ]),
//     query(':enter', [
//       query('.col-copy', [
//         animate('1000ms cubic-bezier(0.23, 1, 0.32, 1)', style({
//           transform: 'translateX(0%)',
//         }))
//       ]),
//       query('.col-image', [
//         animate('500ms ease-in-out', style({
//           transform: 'translateX(100%)',
//           width: '50vw'
//         }))
//       ])
//     ])
//   ])
// ];

const contentPanelsAnimation = [
  query(':leave', [
    query('.section-content', [
      style({ opacity: 0, transform: 'translateX(10%)' })
    ]),
    query('.section-headline-container', [
      style({ opacity: 0 })
    ])
  ]),
  query(':enter', [
    query('.section-content', [
      style({ opacity: 0, transform: 'translateX(0%)' })
    ]),
    query('.section-headline-container', [
      style({ opacity: 0, 'z-index': 101 })
    ])
  ]),
  sequence([
    query(':leave', [
      group([
        query('.section-headline-container', [
          style({ opacity: 1 }),
          animate('.5s ease-in-out', style({ opacity: 0 }))
        ]),
        query('.section-content', [
          style({ opacity: 1, transform: 'translateX(0%)' }),
          animate('1s .8s ease-in-out', style({ opacity: 0, transform: 'translateX(10%)' }))
        ])
      ])
    ]),
    query(':enter', [
      group([
        query('.section-content', [
          style({ opacity: 0, transform: 'translateX(20%)' }),
          animate('1s .8s ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))
        ])
      ])
    ])
  ]),
    query('.section-headline-container', [
      style({ opacity: 1, transform: 'translateY(0%)' }),
      animate('.5s ease-in-out', style({ opacity: 1, transform: 'translateY(100%)' })),
      animate('.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0%)' }))
    ])
];

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
    query('@animateHeadline', animateChild())
  ])
];

const headlineAnimation = [
  query(':leave', [
    query('.section-headline-inner', [
      style({ opacity: 0, transform: 'translateY(100%)' })
    ])
  ]),
  query(':enter', [
    query('.section-headline-inner', [
      style({ opacity: 1, transform: 'translateY(0%)' })
    ])
  ]),
  sequence([
    query(':leave', [
      query('.section-headline-inner', [
        style({ opacity: 1, transform: 'translateY(0%)' }),
        animate('.5s .5s ease-in-out', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ]),
    query(':enter', [
      query('.section-headline-inner', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('1s .5s ease-in-out', style({ opacity: 1, transform: 'translateY(0%)' }))
      ])
    ])
  ])
];


function myInlineMatcherFn(fromState: string, toState: string, element: any, params: {[key:string]: any}): boolean {
  // notice that `element` and `params` are also available here
  console.log("fromState: "+fromState+", toState: "+toState+", element: "+element+", params: "+params.key);
  return toState == 'yes-please-animate';
}

export const routerAnimation = [
  trigger('changeRoute', [
    transition('* => main', mainSectionAnimation),
    transition('* => subsection-right', subSectionAnimation('right')),
    transition('* => subsection-left', subSectionAnimation('left')),
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