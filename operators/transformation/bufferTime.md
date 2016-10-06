# bufferTime

创建一个每个隔一段时间发射的Observable

### 例子

##### 每隔5秒发射

``` js
var clicks = Rx.Observable.fromEvent(document, "click");

clicks.bufferTime(5000)
        .subscribe(e => {
            console.log(e);
        })
```

[bufferTime](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferTime) - 官方文档