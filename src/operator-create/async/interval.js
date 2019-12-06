import { interval } from 'rxjs'

/**
 * interval接受⼀个数值类型的参数,代表产⽣数据的间隔毫秒数,返回
 * 的Observable对象就按照这个时间间隔输出递增的整数序列,从0开始。
 */
const source$ = interval(3000)

// 依次输出0、1、2、...
source$.subscribe(console.log)
