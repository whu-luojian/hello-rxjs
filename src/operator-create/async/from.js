import { from } from 'rxjs'

/**
 * from接收Observable、Promise、Array、Iterable对象为参数，将其转化为Observable对象
 * v6版本fromPromise操作符被废弃，用from替代
 * from接收Iterable对象为参数，包括generator、arguments和字符串，字符串'abc'相当于['a', 'b', 'c']
 */
const source$1 = from([1])
source$1.subscribe(console.log) // 输出1

const source$2 = from('abc')
source$2.subscribe(console.log) // 输出a、b、c
