function range(start, end, step=1) {
    let array = [];
    if (start < end) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    return array;
}

function sum(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        counter += array[i];
    }
    return counter;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));