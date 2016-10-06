# fromEventPattern

基于添加和一次处理函数，创建Obervable。

### 例子

##### 给DOM添加事件

``` js
function addHandler(handler) {
    console.log("绑定事件");
    document.addEventListener("click",handler);
} 

function removeHandler(handler) {
    console.log("移除事件");
    document.removeEventListener("click",handler);
}

var clicks = Rx.Observable.fromEventPattern(
    addHandler,
    removeHandler
);

clicks.subscribe((e) => {
    console.log(e);
})

```

[fromEventPattern](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-fromEventPattern) - 官方文档