var obj={
    name:"yjl",
    age:22,
    method:function(){
        console.log("method方法");
    }
};


// 遍历对象中的属性， for..in 循环
for(var n in obj){
    console.log(n);
    alert(obj[n]);   //obj.n 错误  因为obj对象没有n这个属性，返回undefined
}


// for(var n in window){
//     console.log(n);
//     alert(obj[n]);   
// }



// 二、测试window对象
var a=123;
function fun(){
    console.log("123");
}

console.log(a);
// 创建的变量和方法都是全局对象window的属性
console.log(window.a);
fun();
// 
window.fun();


// 测试全局作用域
test();

function test(){
    console.log(123456789);
}