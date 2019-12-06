import { of } from 'rxjs'

/**
 * of操作符创建指定数据集合的Observable对象，将接收的参数依次吐出（依次next接收到的参数）
 * of(1, 2, 3)相当于依次next(1)、next(2)、next(3)的Observable
 */
const source$ = of(1, 2, 3)

// 订阅数据流
source$.subscribe(console.log)