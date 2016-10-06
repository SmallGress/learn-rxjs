# buffer

缓存observable的值，当buffer方法内的Observable内的值发射时，发射缓存的值

### 例子

##### 每5秒发射一次值

``` js
var fiveInt = Rx.Observable.interval(5000);
var oneInt = Rx.Observable.interval(1000);

oneInt.buffer(fiveInt)
        .subscribe(e => {
            console.log(e);
        })
```

##### 鼠标点击发射

``` js
var interval = Rx.Observable.interval(1000);
var clicks = Rx.Observable.fromEvent(document, "click");

interval.buffer(clicks)
        .subscribe((e) => {
            console.log(e);
        })
```

[buffer](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-buffer) - 官方文档