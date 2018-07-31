function urlArgs(){
    var args={};
    var param=window.location.search.substring(1);
    var params=param.split('&');
    for(var i=0;i<params.length;i++){
        var sp=params.indexOf('=');
        if(i==-1){
            continue;
        }
        var name=params[i].substring(0,sp);
        var value=params[i].substring(sp+1);
        value=decodeURIComponent(value);
        args[name]=value;
    }
    return args;
}

function getElements(){
    var elements={};
    for(var i=0;i<arguments.length;i++){
        var ele=document.getElementById(arguments[i]);
        if(ele==null){

        }
        elements[arguments[i]]=ele;
    }
    return ele;
}

function parent(e,n){
    if(n===undefined){
        n=1;
    }
    while(n-- && e){
        e=e.parentNode;
    }
    if(!e||e.nodeType!==1){
        return null;
    }
    return e;
}

function sibling(e,n){
    while(e&&n!==0){
        if(n>0){
            if(e.nextElementSbiling){
                e=e.nextElementSbiling;
            }else{
                for(e=e.nextSbiling;e&&e.nodeType!==1;e=e.nextSbiling);
            }
            n--;
        }
        else{
            if(e.previousElementSbiling){
                e=e.previousElementSbiling;
            }else{
                for(e=e.previousSbiling;e&&e.nodeType!==1;e=e.previousSbiling);
            }
            n++;
        }
    }
    return e;
}

function child(e,n){
    if(e.children){
        var num=e.childElementCount;
        if(num<n){
            return null;
        }else{
            if(n>=0){
                e=e.childNodes[n];
            }else{
                var r=e.childNodes.resvers();
                e=r.childNodes(-n);
            }
            return e;
        }
    }
    return null;
}


function parent(e,n){
    if(n===undefined){
        n=1;
    }
    while(n-- && e){
        e=e.parentNode;
    }
    if(!e||e.nodeType!==1){
        return null;
    }
    return e;
}

function sbiling(e,n){
    while(e&&n!=0){
        if(n>0){
            if(e.nextElementSbiling){
                e=e.nextElementSbiling;
            }else{
                for(e=e.nextSbiling;e&&e.nodeType!==1;e=e.nextSbiling);
            }
            n--;
        }
        if(n<0){
            if(e.previousElementSbiling){
                e=e.previousElementSbiling;
            }else{
                for(e=e.previousSbiling;e.nodeType!==1;e=e.previousSbiling);
            }
            n++;
        }
    }
    return e;
}

function child(e,n){
    if(e.children){
        if(n<0){
            n+=children.length;
        }
        if(n<0){
            return null;
        }
        e=e.children[n];
    }
    if(n>=0){
        if(e.firstElementChild){
            e=e.firstElementChild;
        }else{
            for(e=e.firstChild;e&&e.nodeType!==1;e=e.nextSbiling);
        }
        return sbiling(e,n);
    }
    if(n<0){
        if(e.lastElementChild){
            e=e.lastElementChild;
        }else{
            for(e=e.lastChild;e&&e.nodeType!==1;e=e.previousSbiling);
        }
        return sibling(e,n+1);
    }
}

// Element.prototype.next=function(){
//     if(this.nextElementSibling){
//         return this.nextElementSibling;
//     }
//     var sib=this.nextSibling;
//     while(sib&&sib.nodeType!==1){
//         sib=sib.nextSibling;
//     }
//     return sib;
// }

// if(!document.documentElement.children){
//     Element.prototype.__defineGetter__('children',function(){
//         var kids=[];
//         for(var c=this.firstChild;c!=null;c=c.nextSbiling){
//             if(c.nodeType===1){
//                 kids.push(c);
//             }
//         }
//         return kids;
//     })
// }

function textContent(e){
    var child,type,s="";
    for(child=e.firstChild;child!=null;child=child.nextSbiling){
        type=child.nodeType;
        if(type===3||type===4){
            s+=child.nodeValue;
        }else if(type===1){
            s+=textContent(child);
        }
    }
    return s;
}

function upcase(n){
    if(n.nodeType===3||n.nodeType===4){
        n.data=n.data.toUpperCase();
    }else{
        for(n=n.firstChild;n!=null;n=n.nextSbiling){
            upcase(n.childNodes[i]);
        }
        for(var i=0;i<n.childNodes.length;i++){
            upcase(n.childNodes[i]);
        }
    }
}

function insertbefore(parent,child,n){
    if(n<0||n>parent.childNodes.length){};
    if(n=parent.childNodes.length){
        parent.appendChild(child);
    }else{
        parent.insertBefore(child,parent.childNodes[n]);
    }

}

function embolden(n){
    if(typeof n ==='string'){
        n=document.getElementById(n);
    }
    var parent=n.parentNode;
    var b=document.createElement('b');
    parent.replaceChild(n,b);
    b.appendChild(n);
}

(function(){
    if(document.createElement('div').outerHTML){
        return;
    }
    function outerHTMLGetter(){
        var container=document.createElement('div');
        container.appendChild(this.childNode(true));
        return container.innerHTML;
    }
    function outerHTMLSetter(value){
        var container=document.createElement('div');
        container.innerHTML=value;
        while(container.firstChild){
            this.parentNode.insertBefore(container.firstChild,this);
        }
        this.parentNode.removeChild(this);
    }
    if(Object.defineProperty){
        Object.defineProperty(Element.prototype,'outerHTML',{
            get:outerHTMLGetter,
            set:outerHTMLSetter,
            enumerable:false,
            configurable:false
        })
    }else{
        Element.prototype.__defineGetter__('outerHTML',outerHTMLGetter);
        Element.prototype.__defineSetter__('outerHTML',outerHTMLSetter);
    }

}())

function reverse(n){
    var f=document.createDocumentFragment();
    while(n.lastChild){
        f.appendChild(n.lastChild);
    }
    return n.appendChild(f);
}

var Insert=(function(){
    if(document.createElement('div').insertAdjacentHTML){
        return {
            before:function(e,h){
                e.insertAdjacentHTML('beforebegin',h)
            },
            after:function(e,h){
                e.insertAdjacentHTML('afterend',h);
            },
            atStart:function(e,h){
                e.insertAdjacentHTML('afterbegin',h);
            },
            atEnd:function(e,h){
                e.insertAdjacentHTML('beforeend',h);
            }
        }
    }
    function fragement(html){
        var elt=document.createElement('div');
        var frag=document.createDocumentFragment();
        elt.innerHTML=html;
        while(elt.firstChild){
            frag.appendChild(elt.firstChild);
        }
        return frag;
    }
}())


onload(function(){
    var doc=document.getElementById('TOC');
    if(!doc){
        doc=document.createElement('div');
        doc.id='TOC';
        document.body.insertBefore(doc,document.body.firstChild);
    }
    var headings;
    if(document.querySelectorAll){
        headings=document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    }else{
        heading=findHeading(document.body,[]);
    }
    function findHeading(root,sects){
        for(var c=root.firstChild;root!=null;c=c.nextSbiling){
            if(c.nodeType!==1){
                continue;
            }
            if(c.tagName.length===2&&c.tagName.charAt(0)==='H'){
                sects.push(c);
            }
            else{
                findHeading(c,sects);
            }
        }
        return sects;
    }
    var sectionNumbers=[0,0,0,0,0,0];
    for(var h=0;h<headings.length;h++){
        var heading=headings[h];
        if(heading.parentNode=='TOC'){
            continue;
        }
        var level=parseInt(heading.tagName.charAt(1));
        if(isNaN(level)||level<1||level>6){
            continue;
        }
        sectionNumbers[level-1]++;

    }
}())

