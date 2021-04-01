import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, state
  } from '@angular/animations';

  export const transAnimation = animation([
    style({
      height: '{{ height }}',
      opacity: '{{ opacity }}',
      backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
  ]);

  // Routable animations
export const slideInAnimation =
trigger('routeAnimations', [
  transition('HomePage <=> AboutPage', [
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
      style({ top: '100vh', opacity: '0' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('500ms ease-out', style({ top: '100vh', opacity: '0' }))
      ]),
      query(':enter', [
        animate('500ms 300ms ease-out', style({ top: '0%', opacity: '1' }))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);


export const opacity =
trigger('routeAnimations', [
  transition('HomePage <=> AboutPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      })
    ]),
    query(':enter', [
      style({  opacity: '0' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({  opacity: '0' }))
      ]),
      query(':enter', [
        animate('300ms 200ms ease-out', style({ opacity: '1' }))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);

export const slide =
trigger('slide', [
  state('normal', style({transform: 'translateX(0)'})),
  state('left', style({transform: 'translateX(-100%)'})),
  state('right',style({transform: 'translateX(100%)'})),
 transition(':enter', [
   style({transform: 'translateX(100%)'}), animate('500ms',style({transform: 'translateX(-200px)'}))
 ]),
 transition('normal=>left', [ animate('200ms')
]),
])