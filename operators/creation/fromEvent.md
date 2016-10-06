# fromEvent

根据指定的事件类型，创建Obervable

### 例子

##### 创建事件Obervable

``` js

    Rx.Obervable.fromEvent(documnet,"click")
        .subscribe((e) => {
            console.log(e);
        })

```

[fromEvent](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-fromEvent) - 官方文档