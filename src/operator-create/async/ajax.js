import { ajax } from 'rxjs/ajax'

// ajax操作符将http请求的结果封装成Observable对象
const source$ = ajax.get('https://api.github.com/repos/ReactiveX/rxjs')

source$.subscribe(value => {
  console.log(value)
})
