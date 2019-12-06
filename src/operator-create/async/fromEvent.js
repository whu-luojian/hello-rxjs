import { fromEvent } from 'rxjs'

/**
 * fromEvent⽤法是把DOM中的事件或者Node.js的EventEmitter转化为Observable对象中的数据。
 * fromEvent的第⼀个参数是⼀个事件源，在浏览器中，最常见的事件源就是特定的DOM元素，
 * 第⼆个参数是事件的名称，对应DOM事件就是click、mousemove这样的字符串。
 */
const ele = document.getElementById('btn')
const source$ = fromEvent(ele, 'click')

// 监听id为btn的button的click事件
source$.subscribe(() => {
  console.log('click')
})
