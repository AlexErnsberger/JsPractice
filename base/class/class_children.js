function defineSubClass(superclass,constructor,methods,statics){
    constructor.prototype=inherit(superclass.prototype);
    constructor.prototype.constructor=constructor;
    if(methods){
        extend(constructor.prototype,methods);
    }
    if(statics){
        extend(constructor,statics);
    }
    return constructor;
}

Function.prototype.extend=function(constructor,methods,statics){
    return defineSubClass(this,constructor,methods,statics);
}

function SingletonSet(member){
    this.member=member;
}

SingletonSet.prototype=inherit(Set.prototype);

function NonNullSet(){
    Set.apply(this,arguments);
}

NonNullSet.prototype=inherit(Set.prototype);
NonNullSet.prototype.constructor=NonNullSet;

NonNullSet.prototype.add=function(){
    for(var i=0;i<arguments.length;i++){
        if(arguments[i]==null){
            throw new Error('111');
        }
    }
    return Set.prototype.add.apply(this,arguments);
}

var StringSet=filteredSetSubclass(Set,function(x){
    return typeof x==='string';
})

var MySet=filteredSetSubclass(NonNullSet,function(x){
    return typeof x!=='function';
})

function filteredSetSubclass(superclass,filter){
    var constructor=function(){
        superclass.apply(this,arguments);
    }
    var proto=constructor.prototype=inherit(superclass.prototype);
    proto.constructor=constructor;
    proto.add=function(){
        for(var i=0;i<arguments.length;i++){
            if(filter[arguments[i]]){
                throw new Error('222');
            }
        }
        superclass.prototype.add.apply(this,arguments);
    }
    return constructor;
}

var NonNullSet=(function(){
    var superclass=Set;
    return superclass.extend(function(){
        superclass.apply(this,arguments);
    },{
        add:function(){
            for(var i=0;i<arguments.length;i++){
                if(arguments[i]==null){
                    throw new Error('111');
                }
            }
            return superclass.prototype.add.apply(this,arguments);
        }
    })
}())

var FilteredSet=Set.extend(function FilteredSet(set,filter){
    this.set=set;
    this.filter=filter;
},{
    add:function(){
        if(this.filter){
            for(var i=0;i<arguments.length;i++){
                if(!this.filter(arguments[i])){
                    throw new Error(';;;')
                }
            }
            this.set.add.apply(this.set,arguments);
            return this;
        }
    }
}
)