# never

创建一个不可发射的Observable

### 例子

##### 用never,并添加startWith创建Observable

``` js
Rx.Observable.never().startWith(8)
    .subscribe((e) => {
        console.log(e);
    })

```

[never](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-never) - 官方文档