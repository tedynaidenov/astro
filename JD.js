/*  
    Returns the Julian Day Number i.e. integer
    number assigned to whole solar day starting
    from 0h UT. Julian Day number 0 is 4713BC.

    https://en.wikipedia.org/wiki/Julian_day 
*/
function dateToJDN( date) {
    if (!date || !(date instanceof Date))
        throw "Argument is not valid date";

    var a = Math.round((14 - date.getMonth() + 1)/12);
    var y = date.getFullYear() + 4800 - a;
    var m = date.getMonth() + 1 + 12 * a  - 3;

    return date.getDate()
        + Math.trunc((153 * m + 2)/5)
        + 365 * y
        + Math.trunc(y / 4)
        - Math.trunc(y /100)
        + Math.trunc(y / 400)
        - 32045;
}


/* 
    Returns the Julian Day which is JDN plus
    fraction of the day since previous noon
    in UT. 
    https://en.wikipedia.org/wiki/Julian_day 

*/
function dateToJD(date) {
     if (!date || !(date instanceof Date))
        throw "Argument is not valid date";

     return dateToJDN(date) 
        + (date.getHours() - 12) / 24 
        + date.getMinutes()/1440
        + date.getSeconds()/86400;
}

function test_dateToJD() {
    // Month is zero based!
    if (dateToJD(new Date(2000, 0, 1, 12, 0, 0)) != 2451545)
        throw "dateToJD test fail";

    if (dateToJD(new Date(1999, 0, 1, 0, 0, 0)) != 2451179.5)
        throw "dateToJD test fail";

    if (dateToJD(new Date(1987, 0, 27, 0, 0, 0)) != 2446822.5)
        throw "dateToJD test fail";

    console.log("Testing dateToJD done!")
}

test_dateToJD();

console.log(dateToJDN(new Date()));

