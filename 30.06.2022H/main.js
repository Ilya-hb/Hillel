// 1. Составьте программу, которая присваивает переменной count значение 7, а затем выводит: в первой строке - это значение, во второй – квадрат этого значения, в третьей – куб этого значения.
let count = 7;
console.log("Значение: " + count);
console.log("Квадрат этого значения: " + count ** 2);
console.log("Куб этого значения: " + count ** 3);
//2. Напишите программу для преобразования температуры по Цельсию в градусы Фаренгейта и наоборот.
let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(celsius + "\u00B0C равно " + fahrenheit + "\u00B0F");
fahrenheit = 73;
celsius = ((fahrenheit - 32) * 5) / 9;
console.log(fahrenheit + "\u00B0F равно " + Math.round(celsius) + "\u00B0C");
