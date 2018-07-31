function extend(o,p){
    for (const key in p) {
        if (p.hasOwnProperty(key)) {
           o[key] = p[key];
        }
    }
    return o;
}

function defineClass(constructor,methods,static){
    if(methods){
        extend(constructor.prototype,methods);
    }
    if(static){
        extend(constructor,static);
    }
}

function Complex(real,imaginary){
    if(isNaN(real)||isNaN(imaginary)){
        throw new TypeError;
    }
    this.r=real;
    this.i=imaginary;
}
Complex.prototype.add=function(that){
    return new Complex(this.r+that.r,this.i+that.i);
}
Complex.prototype.mul=function(that){
    return new Complex(this.r*that.r-this.i*that.i,this.r*that.i+this.i*that.r);
}
Complex.prototype.equals=function(that){
    return that!=null&&that.constructor===Complex&&this.r===that.r&&this.i===that.i;
}

Number.prototype.times=function(f,context){
    var n=Number(this);
    for(var i=0;i<n;i++){
        f.call(context,i);
    }
}

console.log(Object.getOwnPropertyNames(Object.prototype))