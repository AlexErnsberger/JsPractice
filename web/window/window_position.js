function getScrollOffsets(w){
    var w=w||window;
    if(w.pageXOffset!=null){
        return {x:w.pageXOffset,y:w.pageYOffset};
    }
    var d=w.document;
    if(document.compatMode=='CSS1Compat'){
        return {x:d.documentElement.scrollLeft,y:d.documentElement.scrollTop};
    }
    return {x:d.body.scrollLeft,y:d.body.scrollTop};
}

function getElementPos(elt){
    var x=0,y=0;
    for(var e=elt;e!=null;e=e.offsetParent){
        x+=e.offsetLeft;
        y+=e.offsetTop;
    }
    for(var e=elt.parentNode;e!=null&&e.nodeType==1;e=e.parentNode){
        x-=e.scrollLeft;
        y-=e.scrollTop;
    }
    return {x:x,y:y};
}