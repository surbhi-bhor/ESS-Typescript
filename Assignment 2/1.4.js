
let map1 = new Map();
let map2 = new Map();

map1.set('user1', ['Heyy!', 'How are you']);
map1.set('user2', ['All good!', 'All safe there?']);
map1.set('user3', ['Pretty much', 'Staying home for the good']);

map2.set('user3', ['Hey buddy', 'how were your exams?']);
map2.set('user4', ['They were god bro', 'how about you?']);
map2.set('user5', ['Some of them were good', 'messed up in others']);
let chatroom1 = new Set(map1);
let chatroom2 = new Set(map2);

for(let [key,value] of map1.entries()){
    console.log(`${key} -> ${value}`);
}
for(let [key,value] of map2.entries()){
    console.log(`${key} -> ${value}`);
}
console.log(map1.size);


console.log(chatroom1);
console.log(chatroom1.size);
