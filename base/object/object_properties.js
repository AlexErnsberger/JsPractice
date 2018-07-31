const getset=require('./object_getterAndsetter')

// console.log(Object.getOwnPropertyDescriptor({x:1},"x"))

// console.log(Object.getOwnPropertyDescriptor(getset.random,'octet'))

// console.log(Object.getOwnPropertyDescriptor({},'x'))

// console.log(Object.getOwnPropertyDescriptor({},'toString'))


var p=Object.defineProperties({},{
    x:{
        value:1,
        writable:true,
        enumerable:true,
        configurable:true
    },
    y:{
        value:1,
        writable:true,
        enumerable:true,
        configurable:true
    },
    r:{
        get:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},
        enumerable:true,
        configurable:true
    }
})

var o={}

Object.defineProperty(o,'x',{
    value:1,
    writable:true,
    enumerable:true,
    configurable:true
})

Object.defineProperty(Object.prototype,'extend',{
    writable:true,
    enumerable:false,
    configurable:true,
    value:function(o){
        var names=o.getOwnPropertyNames(o);
        for(var i=0;i<names.length;i++){
            if(names[i] in this) continue;
            var desc=Object.getOwnPropertyDescriptor(namee[i]);
            this.defineProperty(this,names[i],desc);
        }
    }
})

var p={x:1}
var o=Object.create(p)
console.log(p.isPrototypeOf(o))
console.log(Object.prototype.isPrototypeOf(o))


function classof(o){
    if(o===null) return null;
    if(o===undefined) return undefined;
    return Object.prototype.toString.call(o).slice(8,-1);
}

var a=Object.seal(Object.freeze({x:1}),{y:{value:2,writable:true}})