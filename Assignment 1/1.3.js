let order = {
    id: 101,
    title: 'H&M',
    price: 3000
}

let printOrder= {
    item : ['Bomber jacket', 'Denim jacket'],
    delivery : 'Monday'
}

let  getPrice = {
    price1 : 1400,
    price2 : 1600
}
let details = Object.assign({}, order, printOrder, getPrice);
console.log(details);