//^[A-Z]+
function upperCase(str) {
    const regexp = /^[A-Z]+/g;
    const result = str.match(regexp);
    if (result) {
        console.log(`String's first character is uppercase`);
    } else {
        console.log(`String's first character is lowercase`);
    }
}
upperCase("Bebraaa");
upperCase("bebraaa");

function isDateString(str) {
    const regexp =
        /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const result = regexp.test(str) ? true : false;
    return result;
}
console.log(isDateString("01/01/2015")); // true
console.log(isDateString("32/01/2015")); // false

function trim(str) {
    const regexp = /^\s{1,}|\s{1,}$/g;
    return str.replace(regexp, '');

}

console.log(trim(" ololo     "));

function vowelCount(str) {
    const regexp = /[aeoiyu]/gi;
    return str.match(regexp).length;
}

console.log(vowelCount('The quick brown fox jumps over the lazy dog')); // 12

function isUSZipCode(str) {
    const regexp = /\d{5}-\d{4}/g;
    const result = str.match(regexp) ? true : false;
    return result;

}
console.log(isUSZipCode("03201-2150")); // true
console.log(isUSZipCode("7892")); // false