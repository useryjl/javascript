var obj=new Object();
var obj2= new Object();
obj.name="杨佳乐";
obj.age=23;
obj2.hello="hello";
alert(obj.name+"--"+obj.age);

// 方式2： [ ]
obj["123"]=789;
alert(obj["123"]);
obj["hello"]=obj2;
// object object
alert(obj["hello"].hello);
console.log(obj["hello"]);