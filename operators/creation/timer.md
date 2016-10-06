# timer

创建一个Observable，第一个值之后在第一个参数之后发射，然后每隔第二个参数的时间发射下一个值。

### 例子

##### 创建一个Observbale

``` js
var timer = Rx.Observable.timer(3000,1000);

timer.subscribe(e => {
    console.log(e)
})
```

[timer](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-timer) - 官方文档