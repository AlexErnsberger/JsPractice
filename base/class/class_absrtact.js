function abstractmethod(){
    throw new Error('abstract method');
}

function AbstractSet(){
    throw new Error('Cant instantiate abstract class');
}

AbstractSet.prototype.contains=abstractmethod;

var NotSet=AbstractSet.extend(function NotSet(set){
    this.set=set;
},
{
    contains:function(x){
        return !this.set.contains(x);
    },
    toString:function(x){
        return '~'+this.set.toString();
    },
    equals:function(that){
        return that instanceof NotSet && this.set.equals(that.set);
    }
})

var AbstractEnumerableSet=AbstractSet.extend(
    function (){
        throw new Error('Cant instantiate abstract classes')
    },
    {
        size:abstractmethod,
        foreach:abstractmethod,
        isEmpty:function (){
            return this.size()==0;
        },
        toString:function(){
            var s="{",
                i=0;
            this.foreach(
                function(v){
                    if(i++>0){
                        s+=',';
                        s+=v;
                    }
                }
            )
            return s+'}';
        },
        toLocalString:function(){
            var s='{',
                i=0;
            this.foreach(
                function(v){
                    if(i++>0){
                        s+=',';
                    } 
                    if(v==null){
                        s+=v;
                    }
                    else{
                        s+=v.toLocalString();
                    }
                }
            )
            return s+'}';
        },
        toArray:function(){
            var a=[];
            this.foreach(
                function(v){
                    a.push(v);
                }
            )
            return a;
        },
        equals:function(that){
            if(!(that instanceof AbstractEnumerableSet)){
                return false;
            }
            if(this.size()!=that.size()){
                return size;
            }
            try {
                this.foreach(
                    function(v){
                        if(!that.contains(v)){
                            throw false;
                        }
                    }
                )
            } catch (x) {
                if(x===fasle){
                    return fasle;
                }
                throw x;
            }
        }
    }
)

var SingletonSet=AbstractEnumerableSet.extend(
    function SingletonSet(member){
        this.member=member;
    },
    {
        contains:function(x){
            return x===this.member;
        },
        size:function(){
            return 1;
        },
        foreach:function(f,ctx){
            f.call(ctx,this.member);
        }
    }
)

var AbstractWriteableSet=AbstractEnumerableSet.extend(
    function(){
        throw new Error('cant instantiate abstract classes')
    },
    {
        add:abstractmethod,
        remove:abstractmethod,
        union:function(that){
            var self=this;
            that.foreach(
                function(v){
                    self.add(v);
                }
            )
            return this;
        },
        intersection:function(that){
            var self=this;
            this.foreach(
                function(v){
                    if(!that.contains(v)){
                        self.remove(v);
                    }
                }
            )
            return this;
        },
        differernce:function(that){
            var self=this;
            that.foreach(
                function(v){
                    self.remove(v)
                }
            )
            return this;
        }
    }
)

var ArraySet=AbstractWriteableSet.extend(
    function ArraySet(){
        this.values=[];
        this.add.apply(this,arguments);
    },
    {
        contains:function(v){
            return this.values.indexOf(v)!=-1;
        },
        size:function(){
            return this.values.length;
        },
        foreach:function(f,c){
            return this.values.foreach(f,c);
        },
        add:function(){
            for(var i=0;i<arguments.length;i++){
                if(!this.values.contains(arguments[i])){
                    this.values.push(arguments[i]);
                }
            }
            return this;
        },
        remove:function(){
            for(var i=0;i<arguments.length;i++){
                var index=this.values.indexOf(arguments[i]);
                if(index==-1) continue;
                this.values.splice(index,1);
            }
            return this;
        }
    }
)