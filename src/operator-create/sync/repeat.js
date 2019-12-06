import { of } from 'rxjs'
import { repeat } from 'rxjs/operators'

/**
 * repeat的功能是重复上游Observable中的数据若干次，相当于重复订阅上游Observable中的数据若干次
 * 注意repeat只有在Observable对象完结(complete)后才会重新订阅
 */
const source$ = of(1, 2, 3).pipe(repeat(3))

source$.subscribe(console.log)
