# empty

创建一个空的Observable，如果没有其他的操作那么订阅函数最后不会被执行


### 例子

##### 创建一个空的Observable,然后添加操作

([jsBin](http://jsbin.com/geqari/edit?html,js,console))

``` js
Rx.Observable.empty()
  .startWith(8)
  .subscribe((e) => {
      console.log(e)
  })
```

[empty](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-empty) - 官方文档