import { Observable } from 'rxjs'

/**
 * create操作符是 Obervable 类的静态函数，本质就是 new Obervable
 */
const source$ = Observable.create(observer => {
  console.log('start')
  observer.next(1)
  observer.next(2)
  observer.next(3)
})

// 订阅数据流
source$.subscribe(console.log)