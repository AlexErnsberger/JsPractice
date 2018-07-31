(function(){
    Object.defineProperty(Object.prototype,'objectId',{
        get:idGetter,
        enumerable:false,
        configurable:false
    })
    function idGetter(){
        if(!(idprop in this)){
            if(!Object.isExtensible(this)){
                throw new Error('111');
            }
            Object.defineProperty(this,idprop,{
                value:nextid++,
                writable:false,
                enumerable:false,
                configurable:false
            })
            return this[idprop];
        };
        var idprop='|**objectId**|';
        var nextid=1;
    }
}())

function Range(from,to){
    var props={
        from:{
            value:form,
            enumerable:true,
            writable:false,
            configurable:false
        },
        to:{
            value:form,
            enumerable:true,
            writable:false,
            configurable:false
        }
    }
    if(this instanceof Range){
        Object.defineProperties(this,props);
    }else{
        return Object.create(Range.prototype,props);
    }
}

Object.defineProperties(Range.prototype,{
    includes:{
        value:function(x){
            return this.from<=x&&x<=this.to;
        }
    },
    foreach:{
        value:function(f){
            for(var x=Math.ceil(this.from);x<=this.to;x++){
                f(x);
            }
        }
    },
    toString:{
        value:function(){
            return '('+this.from+'...'+this.to+')';
        }
    }
})


function freezeProps(o){
    var props=(arguments.length==1)?Object.getOwnPropertyNames(o):Array.prototype.splice.call(arguments,1);
    props.forEach(
        function(n){
            if(!Object.getOwnPropertyDescriptor(o,n).configurable){
                return ;
            }
            Object.defineProperty(o,n,{
                writable:false,
                configurable:false
            })
        }
    )
    return o;
}

function hideProps(o){
    var props=(arguments.length==1)?Object.getOwnPropertyNames(o):Array.prototype.splice.call(arguments,1);
    props.forEach(
        function(n){
            if(!Object.getOwnPropertyDescriptor(o,n).configurable){
                return ;
            }
            Object.defineProperty(o,n,{
                enumerable:false
            })
        }
    )
    return o;
}

function Range(from,to){
    if(from >to){
        throw new Error('');
    }
    function getFrom(){
        return from;
    }
    function getTo(){
        return to;
    }
    function setFrom(f){
        if(f<=to) from =f;
        else throw new Error();
    }
    function setTo(t){
        if(t>=to) to=t;
        else throw new Error();
    }
    Object.defineProperties(this,{
        from:{
            get:getFrom,
            set:setFrom,
            enumerable:true
        },
        to:{
            get:getTo,
            set:setTo,
            enumerable:true
        }
    })
}


