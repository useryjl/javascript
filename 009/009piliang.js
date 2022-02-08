function createObject(name,age){
  var obj=new Object();
  obj.name=name;
  obj.age=age;
  return obj;
};

var relsult=createObject("666",666);
console.log(relsult);

var relsult2=createObject("888",888);
console.log(relsult2);