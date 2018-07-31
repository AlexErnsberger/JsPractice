var Set=(function invoaction(){
    function Set(){
        this.values={};
        this.n=0;
        this.add.apply(this,arguments);
    }

    Set.prototype.contains=function(value){
        return this.values.hasOwnPorperty(v2s(value));
    }
    

    function v2s(val){}
    function objectId(val){}
    var nextId=1;
    return Set;
}())