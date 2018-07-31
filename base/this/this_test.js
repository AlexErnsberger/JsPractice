var strict=(function(){return !this}());
console.log(strict)


var a=2;
function f(){
    console.log(this.a)
}

f();

