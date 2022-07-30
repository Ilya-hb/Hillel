
// 1. Используя рекурсию, напишите функция, которая возвращает массив, содержащий повторения числового аргумента.
// Если аргумент times отрицательный, верните пустой массив.
let replicate = (number, times, array = []) => {
    if (times < 0) {
        return array;
    }
    if (times === 1) {
        return array[0] = number;
    }
    else {
        return array.concat(replicate(number, times - 1, array));
    }
}
console.log(replicate(5, 2));
console.log(replicate(5, -2));
// // 2. Напишите функцию specialMultiply, которая принимает два параметра.
// // Если функции переданы оба параметра, она должна вернуть их произведение.
// // Если функции передается только один параметр, она должна возвращать функцию, которой позже можно передать другой параметр для возврата произведение.
// // Вам придется использовать замыкание и аргументы, чтобы решить эту проблему.
// // Например:
function specialMultiply(a, b) {
    let args = arguments.length === 2 ? a * b : function (b) {
        return a * b;
    }
    return args;

}
console.log(specialMultiply(3, 4));
console.log(specialMultiply(3)(4));
console.log(specialMultiply(2));

// 3. Напишите функцию guessingGame, которая принимает один параметр - это количества попыток игры. 
// Внутри нее рандомно генерируется число от 0 до 10 и она должна возвращать другую функцию, которая принимает параметр предположение в виде числа.
// Если число больше случайного числа, то верните строку "Your guess is too high!".
// Если число меньше случайного числа, то верните строку "Your guess is too low!".
// Если число равно случайному числу, то верните строку "You got it!"
// Если угадали число и продолжают предполагать, то верните строку "You know the answer. What do you want from me?".
// Если превысили количество попыток угадать число, то верните строку "No more guesses the answer was 0! Please start a new game".

let guessingGame = (tries) => {
    let random = Math.floor(0 + Math.random() * (10 - 0 + 1));
    isGuessed = false;
    return function (num) {
        console.log(tries);
        if (isGuessed === true) return console.log(`You know the answer. What do you want from me?`);
        if (num > random) console.log(`Your guess is too high!`);
        else if (num < random) console.log(`Your guess is too low!`);
        else if (num === random) {
            console.log(`You got it!`);
            isGuessed = true;
        }
        if (tries === 0) console.log(`No more guesses, the answer was ${random}! Please start a new game`);
        tries--;
    }
}

let game = guessingGame(3)
game(5);
game(3);
game(2);
game(1);
console.log(`=====NEW GAME=====`);
let game2 = guessingGame(5)
game2(1)
game2(8)
game2(5)
game2(7)
game2(1)
game2(2) 