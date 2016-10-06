# bufferCount

创建一个Observable，当数量达到bufferCount第一个参数时发射。

### 例子

##### 缓存5个值

``` js
var interval = Rx.Observable.interval(1000);

var fiveCount = interval.bufferCount(5);

fiveCount.subscribe(e => {
    console.log(e);
})
```

[bufferCount](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferCount) - 官方文档