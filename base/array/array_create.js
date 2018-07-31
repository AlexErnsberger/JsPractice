var undefs=[,,,]
// console.log(undefs.length)
for (const iterator of undefs) {
    // console.log(iterator)
}
undefs.forEach(element => {
    // console.log(element)
});

// for (const key in undefs) {
//     if (undefs.hasOwnProperty(key)) {
//        console.log(key);
//     }
// }

for (let index = 0; index < undefs.length; index++) {
    // console.log(undefs[index])
}

// var a=[,,,]
// var b=new Array(3);
// var c=[undefined]
// console.log(a.length)//3
// console.log(b.length)//3

// console.log(0 in a);//false
// console.log(0 in b);//false
// console.log(0 in c);
// console.log(a[0])

// for (const iterator of a) {
//      console.log("a:"+iterator)
// }

// for (const key in a) {
//     console.log(key)
// }

// for (const key in b) {
//     console.log(key)
// }

// for (const iterator of b) {
//     console.log("b:"+iterator)
// }

// var o={
//     x:1,
//     y:2
// }

// var a=[1,2,3]
// console.log(Object.getOwnPropertyNames(o));
// delete o.x;
// console.log(Object.getOwnPropertyNames(o));
// delete a[1];
// console.log(Object.getOwnPropertyNames(a));
// console.log(a.hasOwnProperty('length'))
// console.log(Object.getOwnPropertyDescriptor(a,'length'))
// console.log(Object.keys(a));
// console.log(a.length);
// for (const iterator of a) {
//     console.log("a:"+iterator)
// }

// var a=[1,2,3,4,5]
// for (let index = 0, len = array.length;index <len; index++) {
    
// }

// var table=new Array(10);
// for(let i=0,len=table.length;i<len;i++){
//     table[i]=new Array(10);
// }

// for(let i=0,len=table.length;i<len;i++){
//     for(let j=0,len=table[i].length;j<len;j++){
//         table[i][j]=i*j;
//     }
// }

// console.log(table[4][4])

// var a=[11,22,33,44,55,66]
// a.reverse();
// a.sort(function(a,b){
//     return b-a;
// });
// console.log(a)
// b=a.slice(0,3);
// console.log(b)
// var a=[1,2]
// var b=a.filter(function(item){
//     return item%2==0;
// })
// console.log(b)
// console.log(a.every(function(i){return i<4}));
// b=a.reduce(function(x,y){
//     return x*y;
// },0)
// console.log(b)

// function findall(a,x){
//     var results=[],
//         len=a.length,
//         pos=0
//     while(pos<len){
//         pos=a.indexOf(x,pos);
//         if(pos===-1) break;
//         results.push(a[pos])
//     }
// }

var a=new Array();
// console.log(Object.getOwnPropertyNames(a.__proto__.__proto__))
// console.log(Object.prototype.toString.call(a.__proto__.__proto__))
var s="aa";
// console.log(s instanceof String)
// console.log(Object.getOwnPropertyNames(s))
// console.log(Object.getOwnPropertyDescriptor(s,'length'))
// console.log(Object.getOwnPropertyDescriptor(s.__proto__,'length'))
// console.log(Object.prototype.toString.call(s.__proto__.__proto__))
// console.log(Object.prototype.toString.call(String.__proto__))
// console.log(Object.prototype.toString.call(String.prototype))
//function Foo(){};
// Foo.prototype=Foo;
//var f1=new Foo();
// var s=new String();
// console.log(Object.prototype.toString.call(Function.__proto__))//Object
// console.log(Object.prototype.toString.call(Function.prototype))

// console.log(Object.getOwnPropertyNames(String))
// console.log(Object.getOwnPropertyNames(String.prototype))
// console.log(Object.getOwnPropertyNames(String.__proto__))

// console.log(Object.prototype.toString.call(String.prototype))
// console.log(Object.prototype.toString.call(String.__proto__))
// console.log(Object.prototype.toString.call(String.__proto__.name))
//console.log(Object.getOwnPropertyNames(Function))
// console.log(Object.prototype.toString.call([].__proto__))
// console.log(Object.prototype.toString.call(Array.prototype))
console.log(Object.getOwnPropertyNames(Array))//获取Array的自有属性
console.log(Object.getOwnPropertyNames(Array.prototype))//获取Array.prototype的自有属性
// var a=new Array(1,2,3);
// console.log(Object.getOwnPropertyNames(a))
// var b=[1,2,3];
// console.log(Object.getOwnPropertyNames(b))
// a.forEach(function(item){
//     console.log(item)
// })