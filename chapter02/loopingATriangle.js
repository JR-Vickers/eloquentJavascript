/*
Write a loop that makes seven calls to console.log 
to output the following triangle:

#
##
###
####
#####
######
#######

*/

let line = "";
for (let i = 0; i < 7; i++) {
    line += "#";
    console.log(line);
}