// var w='adcd1234';
// var reg=/[a-z]+\d+/;
// console.log(w.match(reg));
// var reg=/[a-z]+(\d+)/;
// console.log(w.match(reg));

// var reg=/\b[Ss]cript/;
// var w="JavaScript postscript";
// console.log(reg.exec(w));
// var w="script";
// console.log(reg.exec(w));

// var reg=/[Jj]ava(?=\:)/
// var w="java: the define guide"
// console.log(reg.exec(w))
// w="java in a nutshell"
// console.log(reg.exec(w))

// var reg=/java(?!\:)([A-Z]\w*)/;
// var w="javaScript:Script"
// console.log(reg.exec(w));

var reg=/java$/m
var w="java\nis fun "
console.log(reg.exec(w))
reg=/java$/
console.log(reg.exec(w))

