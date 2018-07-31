// var s="sssasexx";
// var p=/s/;
// console.log(s.match('a'));


// function SpecialArray(){
//     var values=new Array();
//     values.push.apply(values,arguments);
//     values.toPipedString=function(){
//         return this.join(',');
//     }
//     return values;
// }

// var colors=new SpecialArray('red','yello','blue');
// console.log(colors.toPipedString());

// function SpecialArray(){
//     var values=new Array();
//     values.push.apply(values,arguments);
//     values.toPipedString=function(){
//         return this.join(',');
//     }
//     return values;
// }

// function a(){
//     this.aprop=true;
// }

// a.prototype.getAvalue=function(){
//     return this.aprop;
// }

// function b(){
//     this.bprop=false;
// }

// b.prototype=new a();

// b.prototype.getBvalue=function(){
//     return this.bprop;
// }

// var instance=new b();
// console.log(instance.getAvalue());

function inherit(a,b){
    var prototype=Object(a.prototype);
    prototype.constructor=b;
    b.prototype=prototype;
}

function a(){
    this.aprop=[1,2,3];
}

a.prototype.getAvalue=function(){
    return this.aprop;
}

function b(){
    a.call(this);
}

 b.prototype=inherit(a,b);

b.prototype.getBvalue=function(){
    return this.bprop;
}

var instance=new b();
// console.log(instance.getAvalue());