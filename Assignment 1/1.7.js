// a. Print the 3rd value 
let ipl = ['RCB', 'DC', 'MI', 'SRH'];

let [,,winner] = ipl;

console.log(`IPL winner is ${winner}`);

//Retrieve pincode using deep matching.
let organization = {
    name: "Rohit",
    address : {
        city : "Mumbai",
        pinCode : "400-006"
    }
}

let {name, address} = organization;
console.log(`My pincode is: ${address.pinCode}`);