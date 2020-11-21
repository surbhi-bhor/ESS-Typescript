// interface Printable {
//      fn ?: string;
//      ln ?: string;
//      age?: number;
//      radius ? : number;
//      area ? : any;
var employee = {
    objName: "employee",
    fname: "Robin",
    lname: "Sharma",
    age: 25
};
var circle = {
    objName: "circle",
    radius: 8
};
var prints = function (obj) {
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], k = _b[0], v = _b[1];
        console.log(k + ":" + v);
    }
};
var printAll = function () {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    for (var _a = 0, objs_1 = objs; _a < objs_1.length; _a++) {
        var i = objs_1[_a];
        prints(i);
    }
};
printAll(employee, circle);
