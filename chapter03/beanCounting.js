function countBs(arg) {
    let count = 0;
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] === "B") {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC"));

function countChar(arg1, arg2) {
    let count = 0;
    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] === arg2) {
            count++;
        }
    }
    return count;
}

console.log(countChar("kakkerlak", "k"));