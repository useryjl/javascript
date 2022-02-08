var name="全局name";

function fun(){
    console.log(this.name);
};


var obj={
    name:"yjl",
    age:22,
    fun:fun
};


var obj2={
    name:"yjl2",
    age:22,
    fun:fun
};

// 以函数形式调用
window.fun();

//以方法形式调用
obj.fun();
obj2.fun();