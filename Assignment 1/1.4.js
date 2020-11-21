let names = ['Tom', 'Ivan', 'Jerry'];

names = names.map((name) => ({
    name,
    length: name.length
}));

console.log(names);
//console results
// (3) [{…}, {…}, {…}]
// 0: {name: "Tom", length: 3}
// 1: {name: "Ivan", length: 4}
// 2: {name: "Jerry", length: 5}
// length: 3

