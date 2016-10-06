# of

根据输入的值创建Observable，根据输入的值一个个的发射

### 例子

##### 发射1，2，3

```js
var numbers = Rx.Observable.of(1,2,3);

numbers.subscribe((e) => {
    console.log(e)
})

```

[of](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-of) - 官方文档