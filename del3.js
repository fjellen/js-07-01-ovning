//1
const arr= [
    615, 692, 192, 52, 151, 
    251, 413, 293, 360, 534, 
    89, 728, 35, 166, 462, 556
];

arr.forEach(element => console.log(element));

//break
console.log();

//2
arr.slice().reverse().forEach(function(item){
    console.log(item);
});

//3
let sorterad = [
    615, 692, 192, 52, 151, 
    251, 413, 293, 360, 534, 
    89, 728, 35, 166, 462, 556
];
sorterad.sort((a, b) => b - a);

console.log(sorterad);