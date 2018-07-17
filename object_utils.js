exports.inherit=function(p){
    if(p==null) return TypeError();
    if(Object.create){
        return Object.create(p);
    }
    var t=typeof p;
    if(t!=="object"&&t!=="function") return TypeError;
    function f(){};
    f.prototype=p;
    return new f();
}

function extend(p,o){
    for(prop in p){
        o[prop]=p[prop]
    }
    return o;
}

function merge(p,o){
    for(prop in p){
        if(!o.propertyIsEnumerable(prop)){
            o[prop]=p[prop];
        }
    }
    return o;
}

function merge2(o,p){
    for (prop in p){
        if(o.propertyIsEnumerable(prop)) continue;
        o[prop]=p[prop];
    }
    return o;
}

function restrict(o,p){
    for(prop in o){
        if(!(prop in p))delete o[prop];
    }
    return o;
}

function substract(o,p){
    for(prop in p){
        delete o[prop];
    }
}

function union(o,p){
    return  extend(extend({},p),o);
}

function intersection(o,p){
    return extend({},restrict(o,p));
}

function keys(o){
    if(typeof o !=='object' )throw TypeError;
    var result=[];
    for(prop in o){
        if(o.hasOwnProperty(prop))
        result.push(prop);
    }
    return result;
}