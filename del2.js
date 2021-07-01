//1
function number(x) {
    return x;
}

const result = number(1);

console.log(result);

//2
const arrow = (x) => x;

console.log(arrow(6));

//3
function add(x, y) {
    return x +y;
}

const resultadd = add(20, 5);

console.log(resultadd);

//4
const arrowAdd = (x, y) => x + y;

console.log(arrowAdd(10, 5));


//5
function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
}

console.log(addSquares(2, 3));
