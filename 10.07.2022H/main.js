
let arrayMultiplication = () => {

    let arr1 = [3, 45, 23, 78, 34];
    let arr2 = [4, 2, 34, 4, 12, 1];
    document.write(`<ol><li>First array: ${arr1} <br> Second array: ${arr2}`)
    let arr3 = arr1.length >= arr2.length ? arr1 : arr2;
    for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
        arr3[i] = arr1[i] * arr2[i];
    }
    document.write(`<br>Multiplicated array: ${arr3} </li><br>`)
}
arrayMultiplication();

let duplicateArrayNums = () => {
    let arr = [4, 2, 34, 4, 1, 12, 1, 4];
    let duplicateNums = [];
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j] && !duplicateNums.includes(arr[i])) {
                duplicateNums.push(arr[i]);
            }
        }

    }
    // console.log(duplicateNums);
    document.write(`<li> Array: ${arr} <br>Duplicated numbers: ${duplicateNums} </li><br>`);
}
duplicateArrayNums();

let findLetter = () => {
    let word = prompt(`Enter word: `).toLowerCase();
    let letter = prompt(`Enter some letter to find: `);
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            count++;
        }
    }

    // console.log(`The string contains the following number of ${letter} letter: ${count}`);
    document.write(`<li>The word: ${word} <br>The string contains the following number of '${letter}' letter: ${count}</li></ol>`)

}
findLetter();