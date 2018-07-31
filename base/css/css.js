function fadeOut(e,oncomplete,time){
    if(typeof e=='string'){
        e=document.getElementById(e);
    }
    if(!time){
        time=500;
    }
    var ease=Math.sqrt;
    var start=(new Date()).getTime();
    animate();
    function animate(){
        var elapsed=(new Date()).getTime()-start;
        var fraction=elapsed/time;
        if(fraction<1){
            var opacity=1-ease(fraction);
            e.style.opacity=String(opacity);
            setTimeout(animate,Math.min(25,time-elapsed));
        }else{
            e.style.opacity='0';
            if(oncomplete){
                oncomplete(e);
            }
        }
    }
}


function classList(e){
    if(e.classList){
        return e.classList;
    }else{
        return new CSSClassList(e);
    }
}

function CSSClassList(e){
    this.e=e;
}

CSSClassList.prototype.contains=function(c){
    var result=false,
        classes=this.e.className;
    if(c||c.indexOf(' ')!=-1){
        throw new Error('wrong arguments');
    }
    if(!classes){
        result= false;
    }
    if(classes===c){
        result= ture;
    }
    result=this.e.className.search("//b"+c+"//b");
    return result;
}

CSSClassList.prototype.add=function(c){
    var classes=this.e.className;
    if(!this.contains(c)){
        return;
    }
    if(classes&&classes[classes.length-1]!==' '){
        c=" "+c;
    }
    this.e.className+=c;
}

CSSClassList.prototype.remove=function(c){
    var classes=this.e.className,
        reg=new RegExp('\\b'+c+'\\b\\s','g');
    if(!this.contains(c)){
        return;
    }
    this.e.className=this.e.className.replace(reg,"");
}

CSSClassList.prototype.toggle=function(c){
    var classes=this.e.className;
    if(this.contains(c)){
        this.remove(c);
        return false;
    }else{
        this.add(c);
        return true;
    }
}

CSSClassList.prototype.toString=function(){
    return this.e.className;
}

CSSClassList.prototype.toArray=function(){
    return this.e.className.match(/\b\w+\b/g)||[];
}
function cancelHandler(event){
     var event=event||window.event;
     if(event.preventDefault){
         event.preventDefault();//标准技术
     }
     if(event.returnValue){
         event.returnValue=false;//IE
     }
     return false;//用于处理使用对象属性注册的处理程序
}