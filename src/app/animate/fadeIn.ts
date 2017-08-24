import {
  trigger, // 动画封装触发，外部的触发器
  state, // 转场状态控制
  style, // 用来书写基本的样式
  transition, // 用来实现css3的 transition
  animate, // 用来实现css3的animations
  keyframes // 用来实现css3 keyframes的
} from '@angular/animations';


export const fadeIn = trigger('fadeIn', [
  state('in', style({ display: 'none' })), // 默认元素不展开
  transition('void => *', [ // 进场动画
    animate(400, keyframes([
      style({ height: '0', opacity: 0, offset: 0 }), // 元素高度0，元素隐藏(透明度为0)，动画帧在0%
      style({ height: '*', opacity: 1, offset: 1 }) // 200ms后高度自适应展开，元素展开(透明度为1)，动画帧在100%
    ]))
  ]),
  transition('* => void', [
    animate(300 , keyframes([
      style({ height: '*', opacity: 1, offset: 0 }), // 与之对应，让元素从显示到隐藏一个过渡
      style({ height: '0', opacity: 0, offset: 1 })
    ]))
  ]),
]);
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