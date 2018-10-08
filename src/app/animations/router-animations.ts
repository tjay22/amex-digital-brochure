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

const subSectionAnimation = [
  query(':enter, :leave', style({ position: 'fixed' })),
  query(':leave .col-copy', style({
    transform: 'translateX(0%)'
  })),
  query(':enter .col-copy', style({
    transform: 'translateX(100%)'
  })),
  sequence([
    //query('@animateHeadline', animateChild()),
    //query('@animateContent', animateChild()),
    group([
      query('@animateContentPanels', animateChild()),
      query(':leave .col-copy', animate('1s ease-in-out', style({
        transform: 'translateX(100%)'
      }))),
    ]),
    group([
      query('@animateContentPanels', animateChild()),
      query(':enter .col-copy', animate('1s ease-in-out', style({
        transform: 'translateX(0%)'
      }))),
    ]),
    
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

const childAnimation = [
  // query(':leave .section-content', style({
  //   transform: 'translateX(0%)'
  // })),
  query(':leave .section-headline', style({
    transform: 'translateX(0%)'
  })),
  // query(':enter .section-content', style({
  //   transform: 'translateX(50%)'
  // })),
  query(':enter .section-headline', style({
    transform: 'translateX(50%)'
  })),
    group([
        query(':leave .section-headline', 
            animate('1s cubic-bezier(0.23, 1, 0.32, 1)', style({
                transform: 'translateX(50%)'
            })),
        ),
    ]),
    group([
        query(':enter .section-headline', 
            animate('1s cubic-bezier(0.23, 1, 0.32, 1)', style({
                transform: 'translateX(0%)'
            })),
        ),
    ])
];

const headlineAnimation = [
  query(':leave', style({
    transform: 'translateY(0%)'
  })),
  query(':enter', style({
    transform: 'translateY(50%)'
  })),
  sequence([
    query(':leave', 
      animate('1s cubic-bezier(0.23, 1, 0.32, 1)', style({
        transform: 'translateY(50%)'
      }))
    ),
    query(':enter', 
      animate('1s cubic-bezier(0.23, 1, 0.32, 1)', style({
        transform: 'translateY(0%)'
      }))
    )
  ])
];

function myInlineMatcherFn(fromState: string, toState: string, element: any, params: {[key:string]: any}): boolean {
  // notice that `element` and `params` are also available here
  console.log("fromState: "+fromState+", toState: "+toState+", element: "+element+", params: "+params.key);
  return toState == 'yes-please-animate';
}

export const routerAnimation = [
  trigger('animateHeadline', [
    transition('* => *', headlineAnimation)
  ]),
  trigger('animateContent', [
    transition('* => *', headlineAnimation)
  ]),
  trigger('changeRoute', [
    transition('* => main', mainSectionAnimation),
    transition('* => subsection', subSectionAnimation),
  ]),
  trigger('animateContentPanels', [
    transition('* => *', childAnimation)
  ])
];