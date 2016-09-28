# bindNodeCallBack

将node.js的提供的函数转变为Observable

### 例子

##### 将fs的readFile函数转为Observable

``` js

var fs = require("fs");
var Rx = require("rxjs");
var readFile = Rx.Observable.bindNodeCallback(fs.readFile);
var res = readFile("./index.js","utf8");
res.subscribe(x => console.log(x));

```


[bindNodeCallBack](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-bindNodeCallback) - 官方文档