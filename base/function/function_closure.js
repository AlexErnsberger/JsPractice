

// var a=2;

// function f1(){
//     // var a=1;
//     function g(){
//         return a;
//     }
//     return g();
// }

// var f2=function (){
//     //var a=1;
//     function g(){
//         return a;
//     }
//     return g;
// }

// f1();
// f2()();


// for(var i=0;i<100;i++){
//     (function(n){
//         setTimeout(function(){
//             console.log(n)
//         },1000);
//     })(i)
// }

function f(i){
    return function(){
        return i;
    }
}

var a=[]
for (let index = 0; index < 10; index++) {
    a[index]=f(index);
}

console.log(a[5])