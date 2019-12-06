import { empty, throwError, never } from 'rxjs'

// 产生一个直接完结（complete）的Observable对象
const source$1 = empty()

// 产生一个直接抛出错误的Observable的对象
const source$2 = throwError(new Error('something wrong'))
source$2.subscribe(null, console.log)

// 产生一个不吐出数据永远不完结（complete）的Observable对象
const source$3 = never()
