// var fun=new Function("alert(typeof fun);");
// console.log(fun);


// 方式一：
function fun(){
    alert(123);
};
// 函数调用
fun();


// 方式二：
var fun1=function(a,b){
    alert("a="+a+",b="+b);
    alert("a="+a+",b="+b.name+","+b.age);
    return "hello yjl";  //return 表示函数结束，不继续执行后面的语句；
};

var rel=fun1(111,222);  //可用一个变量来接受函数的返回值；
console.log(rel);  //undefined

var obj={
    name:"yjl",
    age:22
};

fun1(1,obj);  //函数的参数可以是任何值.

// 五、
(function(){
    console.log("立即执行函数");
})();