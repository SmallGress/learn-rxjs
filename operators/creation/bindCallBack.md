# bindCallBack

将一个函数转变为Obervable

### 例子

##### 让一个普通函数转变为观察者

([jsBin](http://jsbin.com/sumovutiro/edit?js,console))

``` js

    function base(e,subscribeFn){
        console.log("bindCallback:" + e);
            
        // 执行订阅的函数
        subscribeFn("看看123");
    }

    var bindcallback = Rx.Observable.bindCallback(base)
    bindcallback("adsa")
        .subscribe((e) => {
            console.log(e)
        })

```

##### 将JQ的getJSON方法变为观察者（这是官方网的例子）

``` js

var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
var result = getJSONAsObservable('/my/url');
result.subscribe(x => console.log(x), e => console.error(e));

```

[bindCallback](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-bindCallback) - 官方文档

