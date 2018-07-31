function type(o){
    var t,c,n;
    if(o===null) return 'null';
    if(o!=o) return 'nan';
    if((t=typeof o)!=='object') return t;
    if((c=classof(o)!=='Object')) return c;
    if(o.constructor&&typeof o.constructor==='function'&&(n==o.constructor.getName())) return n;
}

function classof(o){
    return Object.prototype.toString.call(o).slice(8,-1);
}

