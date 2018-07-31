Range.prototype.constructor=Range;
Range.prototype.equals=function(that){
    if(that==null) return false;
    if(that.constructor!==Range){
        return false;
    }
    return this.from===that.from&&this.to===that.to;
}

Set.prototype.equals=function(that){
    if(that==null){
        return false;
    }
    if(this===that){
        return true;
    }
    if(!(hat instanceof Set)){
        return false;
    }
    if(this.size()!=that.size()){
        return false
    }
    try {
        this.foreach(function(v){
            if(!(that.contains(v))){
                throw false;
            }
            return true;
        })
    } catch (x) {
        if(x==false){
            return false
        }
        throw x;
    }
}

var gengric={
    toString:function(){
        var result;
        if(this.constructor&&this.constructor.name){
            result+=this.constructor.name+'';
        }
        var props=Object.getOwnPropertyNames(this);
        // for (const key in this) {
        //     if (this.hasOwnProperty(key)) {
        //         if(typeof this[key] !='function'){

        //         }
        //     }
        // }
        var n=0;
        for (const key in this) {
            if (!this.hasOwnProperty(key)) continue;
            if(typeof this[key] ==='function') continue;
            if(n++){
                result+=',';
            }
            result+=key+':'+this[key];
        }
        return result;
    },
    equals:function(that){
        if(that==null){
            return false;
        }
        if(this.constructor!==that.constructor){
            return false;
        }
        for (const name in object) {
            if(name==='|***objectid*|') continue;
            if(!this.hasOwnProperty(name)) continue;
            if(this[name]!==that[name]){
                return false;
            }
        }
        return true;
    }
}

function Range(from,to){
    this.from=function(){
        return from;
    }
    this.to=function(){
        return to;
    }
}

function Set(){
    this.values={};
    this.n=0;
    if(arguments.length==1&&isArrayLike(arguments[0])){
        this.add.apply(this,arguments[0]);
    }else if(arguments.length>0){
        this.add.apply(this,arguments);
    }
}

