# from 

从数组、类数组、Promise、generate或者类Observable，创建Observable

### 例子

##### 从数组创建Observable

``` js

var arr = [1,2,3];
Rx.Observable.from(arr)
   .subscribe((x) => {
       console.log("从数组创建:" + x)
   })

```

##### 从数组对象创建Observable

``` js
var arrObj = {
    0: "hello",
    1: "world",
    length: 2
}

Rx.Observable.from(arrObj)
   .subscribe((x) => {
       console.log("从数组对象创建:" + x)
   })

```

##### 从Promise 创建Observable

``` js
var promiseObj = new Promise((res,rej) => {
    res("promise")
})

Rx.Observable.from(promiseObj)
   .subscribe((x) => {
       console.log("从Promise 创建:" + x)
   })

```

[from](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-from) - 官方文档