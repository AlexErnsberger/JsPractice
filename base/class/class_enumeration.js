function enumeration(namesToValues){
    var enumeration=function (){
        throw 'Cant Instantiate Enumerations'
    }

    var proto=enumeration.prototype={
        constructor:enumeration,
        toString:function(){
            return this.name;
        },
        valueOf:function(){
            return this.value;
        },
        toJSON:function(){
            return this.name;
        }
    }

    enumeration.value=[];
    for(name in namesToValues){
        var e=inherit(proto);
        e.name=name;
        e.value=namesToValues[name];
        enumeration[name]=e;
        enumeration.values.push(e);
    };

    enumeration.foreach=function(f,c){
        for(var i=0;i<this.values.length;i++){
            f.call(c,this.values[i]);
        }
    };
    return enumeration;
 }

function Card(suit,rank){
    this.suit=suit;
    this.rank=rank;
}

Card.suit=enumeration({
    Clubs:1,
    Diamonds:2,
    Hearts:3,
    Spades:4
})
Card.rank=enumeration({
    Two:2,
    Three:3,
    Four:4,
    Five:5,
    Six:6,
    Seven:7,
    Eight:8,
    Nine:9,
    Ten:10,
    Jack:11,
    Queen:12,
    King:13,
    Ace:14
})

Card.prototype.compareTo=function(that){
    if(this.rank<that.rank) return -1;
    if(this.rank>that.rank) return 1;
    return 0;
}

Card.orderByBank=function(a,b){
    return a.compareTo(b);
}

