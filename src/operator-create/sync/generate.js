import { generate } from 'rxjs'

/**
 * generate操作符类似于使用一个for循环定制数据流
 * 以下例子产生的是比10小的偶数的平方组成的同步数据流
 */
const source$ = generate(
  2, // 初始值， 相当于for循环中的i=2
  value => value < 10, //继续的条件， 相当于for中的条件判断
  value => value + 2, //每次值的递增
  value => value * value // 产⽣的结果
);

source$.subscribe(console.log)
