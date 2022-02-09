//一、包装类的作用  可以使用引用符 .

console.log(typeof String);            //function  即是一个函数
var s=new String("a");                //将字符串"a"转换为包装类s
console.log("typeof s="+typeof s);   //typeof s=object  s是一个对象，对象就可以有属性和方法。
var u=s.toUpperCase();
console.log("u="+u);

// 对象的boolean永远为true  所以不安全，程序中不建议使用包装类
var b= new Boolean(false);
if(b){
    alert(122454454);
}

// 游览器在遇到 var="123";  var=123;时会自动地转换为包装类，
//转换完后就销毁了          可以调用他们的方法。
var h="abcdef";  //相当于 var h= new String("abcdef");  h有自己的原型对象
// 无效
h.hello="hello123";

console.log("h.hello:"+h.hello);  //undefined  

var index=h.indexOf("a");
alert("index:"+index);


// 原型对象
var pro=h.__proto__;
console.log(typeof pro);
// 判断原型对象中是否有idnexOf属性
var has=pro.hasOwnProperty("indexOf");
console.log("has:"+has);   //返回true  //即这些函数全部在原型对象中存在

// String包装类中常用的方法
//indexOf()   toString() 
// lastIndexOf()     --- 字符串从后面往前面数    索引仍从前面计数。
// charAt()  
//split()            --- 将字符串以某种格式分开，并且返回一个数组对象