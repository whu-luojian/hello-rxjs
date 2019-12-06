import { Observable } from 'rxjs'

// 构建一个可观察的对象/数据流
const source$ = new Observable(observer => {
  console.log('start')
  observer.next(1)
  // 异步发送数据
  setTimeout(() => {
    observer.next(2)
    observer.error('something error')
    // 已经error，以下不起作用
    observer.next(4)
  })
  observer.next(3)
})

// 订阅数据流
source$.subscribe({
  next: item => console.log(item),
  error: err => console.log(err)
})
