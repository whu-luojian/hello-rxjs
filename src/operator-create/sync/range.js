import { range } from 'rxjs'

/**
 * range操作符创建指定范围的数字序列的Observable对象
 * range第一个参数为数字序列开始的数字，第二个参数为数字序列的长度
 * range(2, 10)依次吐出1到11共10个数字
 * range(1.5, 3)依次吐出1.5，2.5，3.5共3个数字
 */
const source$ = range(2, 10)

// 订阅数据流
source$.subscribe(console.log)