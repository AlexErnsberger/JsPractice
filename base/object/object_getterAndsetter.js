const inherit=require('./object_utils')

// var o={
//     data_prop:value,
//     get accessor_prop() {},
//     set accessor_prop(value) {}
// }

var p={
    x:1.0,
    y:1.0,

    get r(){
        return Math.sqrt(this.x*this.x+this.y*this.y)
    },
    set r(newvalue){
        var oldvalue=Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio=newvalue/oldvalue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){
        return Math.atan2(this.y,this.x);
    }   
}

var q=inherit.inherit(p);
q.x=1,q.y=1;
// console.log(q.r);
// console.log(q.theta);


var serialnum={
    $n:0,
    get next(){return this.$n++;},
    set next(n){
        if(n>=$n) this.$n=n;
        else throw '序列号不能比当前值小'
    }
}


exports.random={
    get octet(){
        return Math.floor(Math.random()*256);
    },
    get uint16(){
        return Math.floor(Math.random()*65536);
    },
    get int16(){
        return Math.floor(Math.random()*65536-32768);
    }
}

// console.log(random.octet+" | "+random.uint16+' | '+random.int16+' | ')