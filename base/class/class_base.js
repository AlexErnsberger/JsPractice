function inherit(o){
    if(o==null) throw TypeError;
    if(Object.create){
        return Object.create(o);
    }
    var t=typeof o;
    if(t!=='function'&&t!=='object'){
        throw TypeError;
    }
    function f(){}
    f.prototype=o;
    return new f();
}

function range(from,to){
    var r=inherit(range.methods);
    r.from=from;
    r.to=to;
    return r;
}

range.methods={
    includes:function(x){
        return this.from<=x&&x<=this.to;
    },
    foreach:function(f){
        for(var x=Math.ceil(this.from);x<=this.to;x++){
            f(x)
        }
    },
    toString:function(){
        return "("+this.from+"..."+this.to+")"
    }
}

var r=range(1,5);
console.log(r.includes(2))
console.log(r.prototype)