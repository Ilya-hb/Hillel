let flattenArr = (arr1) => {
    let arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            arr2.push(arr1[i][j]);
        }
    }
    document.write(`<ol><li>One dimensional array: ${arr2}</li>`);
}
flattenArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

let findPalindrome = (word) => {
    reverseWord = word.split("").reverse().join("");
    document.write(`<li>Word: ${word} <br> Reverse word: ${reverseWord}`);
    if (reverseWord === word) {
        document.write(`<br> The word is palindrome</li>`)
        return true;
    } else {
        document.write(`<br> The word is not a palindrome</li>`)
        return false;
    }
}
findPalindrome('madam')

let addNumber = (...num) => {
    console.log(num);
    let sum = num.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
    console.log(sum);

    document.write(`<li>Numbers: ${num} <br>Sum: ${sum}</li>`)

}
addNumber(2, 4, 5);

let getRandom = (start, end) => {
    let random = start - 0.5 + Math.random() * (end - start + 1);
    document.write(`<li>Random int between ${start} and ${end} is: ${Math.floor(random)}</li>`)
}
getRandom(1, 10);

let deleteElement = (delEl) => {
    let arr = [23, 56, 4, 78, 4, 63, 45, 210, 56];
    document.write(`<li>Array: ${arr}<br>`)
    for (let i = 0; i < arr.length; i++) {
        if (delEl === arr[i]) {
            arr.splice(i, 1);
        }
    }
    document.write(`Array after deleted ${delEl}: ${arr}</li>`)

    console.log(arr);
}
deleteElement(56);
