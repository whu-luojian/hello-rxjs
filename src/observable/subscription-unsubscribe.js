import { Observable } from 'rxjs'

// 构建一个可观察的对象/数据流
const source$ = new Observable(observer => {
  let count = 1
  console.log('start')
  const intervalId = setInterval(() => {
    console.log('in onSubscribe', count)
    observer.next(count++)
  }, 1000);
})

// 订阅数据流, subscription表示订阅关系，即Observable和Observer之间的连接关系
const subscription = source$.subscribe(console.log)

// 3.5后unsubscribe,关闭subscription,即断开连接，不再订阅,但是source$并未complete，会持续吐出数据
setTimeout(() => {
  subscription.unsubscribe()
}, 3500);
