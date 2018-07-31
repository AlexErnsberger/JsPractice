whenReady(function(){
    var inputelts=document.getElementsByTagName("input");
    for(var i=0;i<inputelts.length;i++){
        var elt=inputelts[i];
        if(elt.type!="text"||elt.getAttribute("data-allowed-chars")){
            continue;
        }
        if(elt.addEventListener){
            elt.addEventListener("textinput",filter,false);
            elt.addEventListener("textInput",filter,false);
            elt.addEventListener("keypress",filter,false);
        }else if(elt.attachEvent){
            elt.attachEvent("onkeypress",filter);
        }
    }
    function filter(event){
        var e=event||window.event;
        var target=e.target||e.srcElement;
        var text=null;
        if(e.type==="textinput"||e.type==="textInput"){
            text=e.data;
        }else{
            var code=e.keyCode||e.charCode;
            if(code<32||e.charCode==0||e.ctrlKey||e.altKey){
                return;
            }
            text=String.fromCharCode(code);
        }
        var allowed=target.getAttribute("data-allowed-chars");
        var messageid=target.getAttribute("data-messageid");
        if(messageid){
            var messageElement=document.getElementById(messageid);
        }
        for(var i=0;i<text.length;i++){
            var c=text.charAt(i);
            if(allowed.indexOf(c)==-1){
                if(messageElement){
                    messageElement.style.visibility="visible";
                    if(e.preventDefault){
                        e.preventDefault();
                    }
                    if(e.returnValue){
                        e.returnValue=false;
                    }
                    return false;
                }
            }
        }
        if(messageElement){
            messageElement.style.visibility="hidden";
        }

    }
})