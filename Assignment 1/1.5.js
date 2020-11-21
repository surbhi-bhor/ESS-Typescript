//Question a
let add = function(a= 2, b=9){
   
    console.log(a+b);
};

add();
add(4,4);


//Question b
let userFriends = function(username, ...friends) {
    console.log(`${username} :`);
    console.log(friends);
    for(let i in friends) {
        console.log(friends[i]);
    }
}
userFriends("Sam", "Raj", "rahul");
userFriends("Tom", "Sia", "Dia");


//Question c
let printCapitalNames = function(...friends){
        for(let i in friends){
            console.log(friends[i].toUpperCase());
        }
};

let friendsArray = ['Jay', 'Roy', 'Neha', 'Joy', 'Jerry'];
printCapitalNames(...friendsArray);

