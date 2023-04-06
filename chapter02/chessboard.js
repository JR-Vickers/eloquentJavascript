let size = 8;
let line = "";
let s = " ";
let p = "#";

for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
        for (let j = 0; j < size; j++) {
            if (j % 2 === 0) {
                line += s
            } else {
                line += p
            }
        }
    }
    if (i % 2 !== 0) {
        for (let j = 0; j < size; j++) {
            if (j % 2 === 0) {
                line += p
            } else {
                line += s
            }
        }
    }
    line += "\n"
}
console.log(line);