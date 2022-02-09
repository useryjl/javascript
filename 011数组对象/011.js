//一、创建数组对象 赋值 取值 遍历 
var array= new Array();
array[0]="1";
array[1]="2";
array[2]="3";

// push
console.log("----------------------\n");
var len=array.push("4");
console.log(array);
console.log("len:"+len);
console.log("----------------------\n");

// pop
console.log("----------------------\n");
var rel=array.pop();
console.log(array);
console.log("rel:"+rel);
console.log("----------------------\n");

// unshift()  与push相反,向元素开头添加元素
console.log("----------------------\n");
var len2=array.unshift("666");
console.log(array);
console.log("----------------------\n");


console.log(typeof array);  //object   即数组也是一个内建对象
console.log(array[0]+array[1]+array[2]);

for(var i=0;i<array.length;i++){
    console.log(array[i]);
    console.log(typeof array[i]);
}

console.log("----------------------\n");

//二、 数组字面量创建对象
var arr=[1,2,"3",null];
console.log(typeof arr);
console.log(arr[3]);

// 数组中存放任意数数据类型
function Student(name,age){
    this.name=name;
    this.age=age;
};

var student1=new Student("yjl",1);
var student2=new Student("yjl",2);
var student3=new Student("yjl",3);

var StudentArray=new Array(3);
StudentArray[0]=student1;
StudentArray[1]=student2;
StudentArray[2]=student3;

console.log(StudentArray);

// 数组中存放了三个学生对象
console.log(StudentArray[0].name);
console.log(StudentArray[0].age);





console.log("----------------------\n");
// 回调函数
StudentArray.forEach(
    function(value,index){
        console.log(value.name+"-"+index);
    }
);

console.log("----------------------\n");
console.log("----------------------\n");
console.log("----------------------\n");
// 箭头表达式
StudentArray.forEach(
    (value,index)=>{
        console.log(value.age);
    }
)



// slice测试
var arrayTest=["1","2","3"];
var newarray1=arrayTest.slice(0,3);
console.log(newarray1);
console.log(typeof newarray1);

//splice测试
var spliceArray=arrayTest.splice(0,3,"666我的宝贝");
console.log("原数组："+arrayTest);
console.log("splice方法返回值："+spliceArray);
console.log("原数组："+arrayTest);



//test 删除数组中重复元素
// var numberArray=[1,2,3,2,1,3,4,2,5,2];
var numberArray=["yjl","hello","yl","2","hello","htllo","5","yjl","2","3"];
for(var i=0;i<numberArray.length;i++){
    for(var j=1+i;j<numberArray.length;j++){
        if(numberArray[i]==numberArray[j]){
           var del=numberArray.splice(j,1);
           console.log("del:"+del);
        }
    }
};

console.log(numberArray);

// 数组的其他方法
// toString();   返回字符串
var toString= numberArray.toString();
console.log(toString);
console.log(typeof toString);

// 2.valueof();  返回数组对象
console.log("-----------------------");
var valueof= numberArray.valueOf();
console.log(valueof);

// join();以指定分隔符分割数组，返回字符串；
var str="";
var rels=numberArray.join("-",str);
console.log(rels);


console.log("-----------------------");
console.log("-----------------------");
console.log("-----------------------");


// call();  applay();  函数对象的方法
function fun(){
    console.log(this.name);
}

var oob={ 
    name:"123"
};

var obb={ 
    name:"456"
};


fun.call(oob);
fun.call(obb);

fun.apply(oob);
fun.apply(obb);