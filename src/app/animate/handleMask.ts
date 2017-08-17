import {trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const handleMask = trigger('handleMask', [
  state('in', style({ display: 'none' })), 
  transition('void => *', [ 
    animate(400, keyframes([
      style({opacity: 0, offset: 0 }), 
      style({opacity: 1, offset: 1 }) 
    ]))
  ]),
  transition('* => void', [
    animate(300 , keyframes([
      style({opacity: 1, offset: 0 }), 
      style({ opacity: 0, offset: 1 })
    ]))
  ]),
]);