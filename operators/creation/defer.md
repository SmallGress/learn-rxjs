# defer

创建一个可观察者的工厂函数

### 例子

##### 创建一个工厂函数

([jsBin](http://jsbin.com/cedura/edit?html,js,console))

``` js

var deferFn = Rx.Observable.defer(() => {
    var enter = prompt("请输入数字或者英文")

    if (isNaN(parseInt(enter))) {
        return Rx.Observable.of(enter)
    } else {
        return Rx.Observable.interval(1000)
                 .combineLatest(Rx.Observable.of(enter))
    }
})
.subscribe((el) => {
    console.log(el)
})

```

[defer](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-defer) - 官方文档