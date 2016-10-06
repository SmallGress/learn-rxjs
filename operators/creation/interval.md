# interval

创建一个Observable，根据固定的间隔时间，发出连续的数字

### 例子

##### 创建一个interval

``` js
Rx.Observable.interval(1000)
    .subscribe((e) => {
        console.log(e);
    })

```

[interval](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-interval) - 官方文档