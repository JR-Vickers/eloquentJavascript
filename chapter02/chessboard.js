/*
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the 
grid there is either a space or a "#" character. The characters 
should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding 
size = 8 and change the program so that it works for any size, 
outputting a grid of the given width and height.
*/

let size = 9, grid = "", counter = 0;

while (grid.length < size * (size + 1)) {
    if ((grid.length + counter) % 2 === 0) {
        grid += " ";
    } else {
        grid += "#";
    }

    if (grid.length % size === 0 && grid.length === size) {
        grid += "\n";
        counter += size % 2;
    } else if ((grid.length + 1) % (size + 1) === 0 && grid.length > size) {
        grid += "\n";
        counter += size % 2;
    }
}
console.log(grid);