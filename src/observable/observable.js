import { Observable } from 'rxjs'

// 构建一个可观察的对象/数据流
const source$ = new Observable(observer => {
  console.log('start')
  observer.next(1)
  // 异步发送数据
  setTimeout(() => {
    observer.next(2)
  })
  observer.next(3)
})

/**
 * 订阅数据流, subscribe接受一个Obeserver对象作为参数，对象的next属性为数据处理函数，
 * complete属性为数据流完成处理函数,
 * error属性为数据流错误处理函数.
 */
source$.subscribe({
  next: item => console.log(item),
  error: err => console.log(err),
  complete: () => console.log('no more data')
})
/**
 * subscribe可以直接接受函数作为参数,
 * 第一个函数参数为数据处理函数next,
 * 第二个函数参数为错误处理函数error,
 * 第三个函数参数为数据流完成处理函数complete.
 */
source$.subscribe(console.log)
