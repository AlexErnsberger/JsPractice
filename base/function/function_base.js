function trace(o,m){
    var original=o[m];
    o[m]=function(){
        console.log(new Date(),"Entering:",m);
        var result=original.apply(this,arguments);
        console.log(new Date(),"Exiting:",m);
        return result;
    }
}

// console.log(Object.prototype.toString.call())
// function bind(f,o){
//     if(f.bind){
//         return f.bind(o);
//     }else{
//         return function(){
//             f.apply(o,arguments);
//         }
//     }
// }



if(!Function.prototype.bind){
    Function.prototype.bind=function(o/*,args*/){
        var self=this,
            boundArgs=arguments;
        return function(){
            var args=[],
                i;
            for(i=1;i<boundArgs.length;i++){
                args.push(boundArgs[i]);
            }
            for(i=0;i<arguments.length;i++){
                args.push(arguments[i]);
            }
            return self.apply(o,args);
        }
    }
}

var map=Array.prototype.map?function(a,f){ return a.map(f);}:function(a,f){
    var result=[];
    for(var i=0,len=a.length;i<len;i++){
        if(i in a)result[i]=f.call(null,a[i],i,a)
    }
    return result;
}

var reduce=Array.prototype.reduce?function(a,f,initial){
    if(arguments.length>2){
        return a.reduce(f,initial);
    }else{
        return a.reduce(f);
    }
}:function(a,f,initial){
    var i=0,
        len=a.length,
        accumulator;
    if(arguments.length>2){
        accumulator=initial;
    }else{
        if(len===0) throw TypeError();
        while(i<0){
            if(i in a){
                accumulator=a[i++];
                break;
            }else{
                i++;
            }
        }
        if(i===len) throw TypeError();
    }
    while(i<len){
        if(i in a){
            accumulator=f.call(undefined,accumulator,a[i],i,a);
        }
        i++;
    }
    return accumulator;
}

function mapper(f){
    return function(a){
        return map(a,f);
    }
}
var increment=function(x) {
    return x+1;
}

var incrementer=mapper(increment);
incrementer([1,2,3]);

map([1,2,3],increment);


function compose(f,g){
    return function(){
        return f.call(this,g.apply(this,arguments))
    }
}

function array(a,n){
    return Array.prototype.slice.call(a,n||0);
}

function partialLeft(f/*,...*/){
    var args=arguments;
    return function(){
        var a=array(args,1);
        a=a.concat(array(arguments));
        return f.apply(this,a);
    }
}

function memorized(f){
    var cache={};
    return function(){
        var key=arguments.length+Array.prototype.join.call(arguments,",");
        if(key in cache){
            return cache[key];
        }else{
            return cache[key]=f.apply(this,arguments);
        }
    }
}

function gcd(a,b){
    var t;
    if(a<b){
        t=b;
        b=a;
        a=t;
    }
    while(b!=0){
        t=b;
        b=a%b;
        a=t;
    }
    return a;
}