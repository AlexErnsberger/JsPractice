var strict=(function() {return (!this);}())
// console.log(strict)

var p='11';

// function a(){
//     console.log("a:"+this);
//     function b(){
//         console.log("b:"+this);
//     }
// }

// function f(){
//     constructor();
// }

// var a=new f();
// console.log(Object.prototype.toString(a.prototype))

function getPropertyNames(o,/*option*/a){
    if(!a) a=[];
    for (const key in o) {
        a.push(key);
    }
    return a;
}

// console.log(Number.NEGATIVE_INFINITY)

function b(x,y){
    console.log(Object.getOwnPropertyNames(arguments))
    // return x=y;
}
// b(1,2);

// var x=1;
// var y=2;

// function push1(array,...items){
//     items[0]=2;
//     items.forEach(function(item){
//         array.push(item);
//         // console.log(item);
//     })
// }
// var x=1;
// var y=2;
// var array=[];
// push1(array,x,y)
// console.log(array)
// console.log(x)

// function push2(array,x,y){
//     arguments[1]=2;
//     console.log(x);
//     for (let index = 1; index < arguments.length; index++) {
//         array.push(arguments[index])
        
//     }
// }


//两个形参
// var x=1
// var y=2

// var arr=[this.x,this.y]
// arr[0]=2;
// console.log(arr)
// console.log(x)

// var arr1={
//     '0':this.x,
//     '1':this.y,
//     length:2
// }
// console.log(arr1[0],arr1[1])
// arr1[0]=2
// console.log(x)

// push2(arr,1,2)
// console.log(arr)
// console.log(x)

// console.log(null==null)
// console.log(null===undefined)
// var extend=(function(){
//     for (const key in {toString:null}) {
//         return function extend(o){
//             for (let index = 1; index < arguments.length; index++) {
//                 var source=arguments[i];
//                 for(var prop in source) o[prop]=source[prop];
//             }
//         }
//     }

// }())

// var scope="1111";
// function checkscope(){
//     var scope="2222";
//     function nested(){
//         var scope="3333";
//         return scope;
//     }
//     return nested();
// }

// console.log(checkscope());

// function test(o){
//     var i=0;
//     if(typeof o=='object'){
//         var j=0;
//         for(var k=0;k<10;k++){
//             console.log(k);
//         }
//         console.log(k);
//     }
//     console.log(j);
// }

// test(new Object())
// console.log(scope);
// var scope="1111";
// function f(){
//     console.log(scope);
//     var scope="2222";
//     console.log(scope)
// }
// f();