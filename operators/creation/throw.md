# throw

创建一个Observable，立即返回一个错误信息

### 例子

##### 创建普通错误Observable

``` js
var throws = Rx.Observable.throw(new Error("报错"));

throws.startWith(7)
        .subscribe((e) => console.log(e),e => console.error(e))
```

##### 用concat联合

``` js
var range = Rx.Observable.range(1,10);
var throws = Rx.Observable.throw(new Error("错误"));

range.concat(throws).subscribe(x => console.log(x),e => console.log(e));
```

[range](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-throw) - 官方文档