function reverseArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

// function reverseArrayInPlace(array) {
//     for (let i = array.length; i >= 0; i--) {
//         console.log(array[i - 1]);
//     }
//     return array;
// }

function reverseArrayInPlace(array) {
    let counter = array.length;
    for (let i = array.length; i > 0; i--) {
        array.push(array[counter - 2])
        array.splice(counter - 2, 1)
        counter--
    }
    return array;
}



console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]