# range

创建一个可以发送一个范围内的Observable

### 例子

##### 创建一个1-5的Observable

```js
Rx.Observable.range(1,5)
    .subscribe((e) => {
        console.log(e)
    })

```

[range](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-range) - 官方文档