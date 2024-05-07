/*
    Keifer Buss 
    COSC-3020-01 
    Last modified May. 06 2024
    Sources:
        - https://caolan.github.io/async/v3/docs.html (Thank you for providing the link in the README!)
*/

var a = require('async');

function async_count(array, key) {
    if (array === undefined || array === []) return 0;
    let accum = 0;

    // Asychronous function
    const check_key = function(i) {
        if (i === key) accum++;
        return;
    }

    // Async call using each
    a.each(array, check_key)
    //console.log(accum)
    return accum;
}