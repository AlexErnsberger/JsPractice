function StringSet(){
    this.set=Object.create(null);
    this.n=0;
    this.add.apply(this,arguments);
}

StringSet.prototype=Object.create(AbstratcWritableSet.prototype,{
    constructor:{
        value:StringSet
    },
    contains:{
        value:function(x){
            return x in this.set;
        }
    },
    size:{
        value:function(){
            return this.n;
        }
    },
    foreach:{
        value:function(f,c){
            Object.keys(this.set).forEach(f,c);
        }
    },
    add:{
        value:function(){
            for(var i=1;i<arguments.length;i++){
                if(!(arguments[i] in this.set)){
                    this.set[arguments[i]]=true;
                    this.n++;
                }   
            }
            return this;
        }
    },
    remove:{
        value:function(){
            for(var i=0;i<=arguments.length;i++){
                if(arguments[i] in this.set){
                    delete this.set[arguments[i]];
                    this.n--;
                }
            }
            return this;
        }
    }
})

(function namespace(){
    function porperties(){
        var names;
        if(arguments.length==0){
            names=Object.getOwnPropertyNames(this);
        }else if(arguments.length==1&&Array.isArray(arguments[0])){
            names=arguments[0];
        }else{
            names=Array.prototype.splice.call(arguments,0);
        }
        return new Properties(this,names);
    }
    Object.defineProperty(Object.prototype,'properties',{
        value:properties,
        enumerable:false,
        writable:true,
        configuarable:true
    })

    function Properties(o,names){
        this.o=o;
        this.names=names;
    }

    Properties.prototype.hide=function(){
        var o=this.o,
            hidden={
                enumerable:false
            }
        this.names.forEach(function(n){
            if(o.hasOwnProperty(n)){
                Object.defineProperty(o,n,hidden);
            }
        })
        return this;
    }

    Properties.prototype.freeze=function(){
        var o=this.o,
            frozen={
                writable:false,
                configuarable:false
            }
        this.names.forEach(function(n){
            if(o.hasOwnProperty(n)){
                Object.defineProperty(o,n,frozen);
            }
        })
        return this;
    }

    Properties.prototype.descriptors=function(){
        var o=this.o,
            desc={};
        this.names.forEach(
            function(n){
                if(!o.hasOwnProperty(n)){
                    return;
                }
                desc[n]=Object.getOwnPropertyDescriptor(o,n);
            }
        )
        return desc;
    }

    Properties.prototype.toString=function(){
        var o=this.o;
        var lines=this.names.map(nameToString);
        return '{'+lines.join(',')+'}';
        function nameToString(n){
            var s="",
                desc=Object.getOwnPropertyDescriptor(o,n);
            
        }
    }
}())