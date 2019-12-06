import { Observable } from 'rxjs'

// 构建一个可观察的对象/数据流
const source$ = new Observable(observer => {
  console.log('start')
  observer.next(1)
  // 异步发送数据
  setTimeout(() => {
    observer.next(2)
    observer.complete() // 发送完成信号，终止数据流
    // 已经complete，以下不起作用
    observer.next(4)
  })
  observer.next(3)
})

// 订阅数据流
source$.subscribe({
  next: item => console.log(item),
  complete: () => console.log('no more data')
})
