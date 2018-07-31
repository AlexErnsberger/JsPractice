//获取滚动条偏移量
function getScrollOffsets(w){
    w=w||window;
    if(w.pageXOffset!=null){
        return {
            x:w.pageXOffset,
            y:w.pageYOffset
        };
    }
    var d=w.document;
    if(document.compatMode=="CSS1Compat"){
        return{
            x:d.documentElement.scrollLeft,
            y:d.documentElement.scrollTop
        };
    }
    return {
        x:d.body.scrollLeft,
        y:d.body.scrollTop
    };
}
//查询窗口的视口尺寸
function getViewportSize(w){
    var d=document;
    w=w||window;
    if(w.innerWidth!=null){
        return {
            x:w.innerWidth,
            y:w.innerHeight
        };
    }
    if(document.compatMode=="CSS1Compat"){
        return {
            x:d.documentElement.clientWidth,
            y:d.documentElement.clientHeight
        }
    }
    return {
        x:d.body.clientWidth,
        y:d.body.clientHeight
    }
}

// var box=e.getBoundingClientRect();
// var offsets=getScrollOffsets();
// var x=box.left+offsets.x;
// var y=box.top+offsets.y;

// var w=box.width||box.right-box.left;
// var h=box.height||box.bottom-box.top;

function drag(elementToDrag,event){
    var scroll=getScrollOffsets(),
        startX=event.clientX+scroll.x,
        startY=event.clientY+scroll.y,
        origX=elementToDrag.offsetLeft,
        origY=elementToDrag.offsetTop,
        deltaX=startX-origX,
        deltaY=startY-origY;
    if(document.addEventListener){
        document.addEventListener("mousemove",moveHandler,true);
        document.addEventListener("mouseup",upHandler,true);
    }else if(document.attchEvent){
        elementToDrag.setCapture();
        elementToDrag.attchEvent("onmousemove",moveHandler);
        elementToDrag.attchEvent("onmouseup",upHandler);
        elementToDrag.attchEvent("onlosecapture",upHandler);
    }
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble=true;
    }
    if(event.preventDefault){
        event.preventDefault();
    }else{
        event.returnValue=false;
    }
    function moveHandler(e){
        if(!e){
            e=window.event;
        }
        var scroll=getScrollOffsets();
        elementToDrag.style.left=(scroll.x+e.clientX-deltaX)+"px";
        elementToDrag.style.top=(e.clientY+scroll.y-deltaY)+"px";
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble=true;
        }
    }
    function upHandler(e){
        if(!e){
            e=window.event;
        }
        if(document.removeEventListener){
            document.removeEventListener("mouseup",upHandler,true);
            document.removeEventListener("mousemove",moveHandler,true);
        }else if(document.detachEvent){
            elementToDrag.detachEvent("onlosecapture",upHandler);
            elementToDrag.detachEvent("onmouseup",upHandler);
            elementToDrag.detachEvent("onmousemove",moveHandler);
            elementToDrag.releaseCapture();
        }
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble=true;
        }
    }
    
}