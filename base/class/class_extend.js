var extend=(function(){
    for (const p in {toString:null}) {
        return function extend(o){
            for(var i=1;i<arguments.length;i++){
                var source=arguments[i];
                for (const prop in source) {
                    o[prop]=source[prop];
                }
            }
            return o;
        }
    }
    return function patched_extend(o){
        for(var i=1;i<arguments.length;i++){
            var source=arguments[i];
            for (const prop in source) {
                o[prop]=source[prop];
            }
            for(var j=0;j<protoprops.length;j++){
                var prop=protoprops[j];
                if(source.hasOwnProperty(protoprops[j])){
                    o[prop]=source[prop];
                }
            }
        }
    }
    var protoprops=["toString","valueOf","toLocalString","isPrototypeOf","hasOwnProperty","propertyIsEnumerable"];
}())

function defineClass(
    constructor,
    methods,
    statics
){
    if(methods){
        extend(constructor.prototype,methods);
    }
    if(statics){
        extend(constructor,statics);
    }
    return constructor;
}

//用一个简单函数创建子类
function defineSubClass(
    superclass,//父类构造函数
    constructor,//子类构造函数
    methods,//实例方法
    statics//类属性
){
    constructor.prototype=inherit(superclass.prototype);
    constructor.prototype.constructor=constructor;
    if(methods){
        extend(constructor.prototype,methods);
    }
    if(statics){
        extend(constructor.statics);
    }
    return constructor;
}
//定义一个可以用作任何抽象方法的函数
function abstractmethod(){
    throw new Error('This is a abstract method')
}
//定义一个抽象类
function AbstractObject(){
    throw new Error('cant instantiate abstract classes')
}
//给该类定义一个抽象方法add
AbstractObject.prototype.add=abstractmethod;

Object.getOwnPropertyDescriptor//获取属性描述
Object.getOwnPropertyNames//获取自有属性集合
Object.defineProperties//定义类上属性或方法的特性
Object.defineProperty//定义类上单个属性或方法的特性