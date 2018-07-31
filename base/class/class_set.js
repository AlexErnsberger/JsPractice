function Set(){
    this.values={};
    this.n=0;
    this.add.apply(this,arguments);
}

Set.prototype.add=function(){
    for(var i=0;i<arguments.length;i++){
        var val=arguments[i];
        var str=Set._v2s(val);
        if(!this.values.hasOwnProperty(str)){
            this.values[str]=val;
            this.n++;
        }
    }
    return this;
}
Set.prototype.remove=function(){
    for(var i=0;i<arguments.length;i++){
        var str=Set._v2s(arguments[i]);
        if(this.values.hasOwnProperty(str)){
            delete this.values[str];
            this.n--;
        }
    }
    return this;
}
Set.prototype.contains=function(value){
    return this.values.hasOwnProperty(Set._v2s(value));
}
Set.prototype.size=function(){
    return this.n;
}
Set.prototype.forEach=function(f,context){
    for(var s in this.values){
        if(this.values.hasOwnProperty(s)){
            f.call(context,this.values[s])
        }
    }
}
Set._v2s=function(val){
    switch(val){
        case undefined:return 'u';
        case null:return 'n';
        case true:return 't';
        case false:return 'f';
        default:switch(typeof val){
            case 'number':return '#'+val;
            case 'string':return '"'+val;
            default:'@'+objectId(val);
        }
    }
    function objectId(o){
        var prop="|**objectid**|";
        if(!o.hasOwnProperty(prop)){
            o[prop]=Set._v2s.next++;
        }
        return o[prop];
    }
}
Set._v2s.next=100;

extend(set.prototype,{
    toString:function(){
        var s="{";
        i=0;
        this.forEach(function(v){
            s+=((i++>0)?",":"")+v;
        });
        return s +"}";
    },
    toLocalString:function(){
        var s="{",
            i=0;
        this.forEach(function(v){
            if(i++>0) {
                s+=',';
            }
            if(v==null){
                s+=v;
            }else{
                s+=v.toLocalString();
            }
        })
        return s+"}";
    },
    toArray:function(){
        var a=[];
        this.forEach(function(v){
            a.push(v);
        })
        return a;
    }
})

Set.prototype.toJSON=Set.prototype.toArray;