import { of } from 'rxjs'
import { repeatWhen, delay } from 'rxjs/operators'

/**
 * repeat能够反复订阅上游的Observable，但是并不能控制订阅的时间.
 * repeatWhen用于控制上游完结后什么时候重新订阅，比如延迟2秒后重新订阅
 */
const source$ = of(1, 2, 3)
const repeat$ = source$.pipe(repeatWhen(notification$ => {
  return notification$.pipe(delay(2000))
}))

repeat$.subscribe(console.log) // 没隔2s输出1、2、3
