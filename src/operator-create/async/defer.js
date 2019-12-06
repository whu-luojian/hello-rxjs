import { defer } from 'rxjs'
import { ajax } from 'rxjs/ajax'

/**
 * defer接受⼀个函数作为参数，当defer产⽣的Observable对象被订阅的时候，defer的函数参数就会被调⽤，
 * 预期这个函数会返回另⼀个Observable对象
 * 即推迟Observable对象的创建，当订阅时才创建
 */
const observableFactory = () => {
  return ajax.get('http://www.test.com/')
}

const source$ = defer(observableFactory)  // 此时不触发ajax请求

setTimeout(() => {
  source$.subscribe(console.log)  // 3s后订阅，触发ajax请求
}, 3000);
