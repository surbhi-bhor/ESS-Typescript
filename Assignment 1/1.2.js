
var a = 100;
if(a==100){
    var a = 99;
    let b = 20;
    // let b = 22; -> //Uncaught SyntaxError: Identifier 'b' has already been declared
    console.log(a);
    console.log(b);
}
// let b = 22; -> // can be redeclared and used outside the scope previously declared
console.log(a);
console.log(b);  //1.2.js:22 Uncaught ReferenceError: b is not defined