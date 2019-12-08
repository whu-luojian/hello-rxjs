import { range } from 'rxjs'
import { map, filter, scan, catchError } from 'rxjs/operators'

const source$ = range(1, 10)
source$.pipe(
  filter(x => x % 2 === 0), // 过滤出偶数
  map(x => x * x), // 求平方
  scan((acc, x) => acc + x, 0), // 累加
  catchError(err => console.error(err)) // 错误处理
).subscribe(console.log)