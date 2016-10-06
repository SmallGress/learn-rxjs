# fromPromise

从Promise创建Observable

### 例子

##### 从fetch创建Observable

``` js
var result = Rx.Observable.fromPromise(
    fetch("http://cdn.bootcss.com/rxjs/5.0.0-beta.12/Rx.min.js")
);

result.subscribe(e => console.log(e))

```

[fromPromise](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-fromPromise) - 官方文档