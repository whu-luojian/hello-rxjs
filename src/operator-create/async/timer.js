import { timer } from 'rxjs'

/**
 * timer的第⼀个参数可以是⼀个数值，也可以是⼀个Date类型的对象。
 * 如果第⼀个参数是数值，代表毫秒数，产⽣的Observable对象在指定毫秒之后会吐出⼀个数据0，然后⽴刻完结;
 * 如果第一个参数时Date类型的对象，产⽣的Observable对象在指定Date吐出⼀个数据0，然后⽴刻完结。
 */
const source$1 = timer(1000)
// 1s后输出0
source$1.subscribe(console.log)

/**
 * timer还⽀持第⼆个参数，如果使⽤第⼆个参数，那就会产⽣⼀个持续吐出数据的Observable对象，类似interval的数据流。
 * 第⼆个参数指定的是各数据之间的时间间隔，吐出的是从0开始的递增序列
 */
const source$2 = timer(1000, 2000)
// 1s后输出0，再过2s输出1，再过2s输出2，持续下去
source$2.subscribe(console.log)
