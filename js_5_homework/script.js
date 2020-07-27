/* Задание 1
Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа
передаются параметром.*/

console.log('Task1');


function task1(a, b, c) {
	return (a - b) / c;
}

let resultat1 = task1(prompt('a = '), prompt('b = '), prompt('с = ')); // 2
console.log(resultat1);


/* Задание 2
Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается
параметром.*/

console.log('Task2');

let Task2 = function (a) {
	console.log('Kvadrat ' + a*a);
	console.log('Kub ' + a*a*a);
};

Task2(2);

/* Задание 3
Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.*/


console.log('Task3');

let max,
	a1 = prompt('первое число');
	a2 = prompt('второе число');

if (a1 > a2) {
	max = function() { return a1 };
}  
else if (a1 < a2) {
	max = function() { return a2 };
} 
else {
	max = function() { return '!chisla ravny' };
}

let result = max();
console.log('Max chislo:', result);

let min;
	a1 = prompt('первое число');
	a2 = prompt('второе число');

if (a1 < a2) {
	min = function() { return a1 };
}  
else if (a1 > a2) {
	min = function() { return a2 };
} 
else {
	min = function() { return '!chisla ravny' };
}

result = min();
console.log('Min chislo:', result);


/* Задание 4
Напишите две функции: первая ф-ция должна возвращать массив с числовыми
значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая
– выводить полученный массив.*/

//сделала только вторую

console.log('Task4');


function createArray4(length) {

	length = length || 10;

	let array4 = [];

	for(let i = parseInt (prompt('начало массива')); i <= length; i++) {
		array4.push(i);
	}

	console.log(array4);
}

createArray4(prompt('конец массива'));


/* Задание 5
Сделайте функцию isEven() (even - это четный), которая параметром принимает целое
число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true,
если нечетное - false.*/

console.log('Task5');

function isEven(num) {
    if (num > 0 && num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(100));

/* Задание 6
Напишите ф-цию, в которую передается массив с целыми числами. Верните новый
массив, где останутся лежать только четные из этих чисел. Для этого используйте
вспомогательную функцию isEven из предыдущей задачи.*/

console.log('Task6');


function createArray6(length) {
    length = length || 100;
    let array6 = [];

    for (let i = 1; i <= length; i++) {
        array6.push(i);
	}
	

    let newarr = [];

    for (let i = 0; i < array6.length; i++) {
        if (isEven(array6[i])) {
            newarr.push(array6[i]);
        }
    }
    console.log(newarr);
}

createArray6(100);

/* Задание 7
Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр,
непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то
пирамида должна быть нарисована этим символом, например:
*
**
***
****
*****
******
*******
********
**********/


//не получилось


/* Задание 8 
Напишите ф-цию, которая возвращает массив заполненный
числами Фибоначи от 0 до 1000.*/

console.log('Task 8');

function fibonochi(number) {
    let summa = 0,
		array8 = [];
		
	let i = 0;
	while (i < number) {
		if (array8.length == 0) summa = 0;
		if (array8.length > 1)  summa = summa + array8 [array8.length-2];
        if (array8.length == 1) summa = 1;
        

		array8.push( summa);
		i++
	}
	console.log(array8);
}

fibonochi(1000);  


/* Задание 9 
Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
Исп. рекурсию.*/

//не получилось с помощью рекурсии, получалось только через цикл

/*Задание 10 
Дан массив с числами (передается параметром).
Выведите последовательно его элементы, используя рекурсию и не используя цикл.*/

console.log('task10');

function Array10(array) {
    console.log(array[i]);
    i++

    if (i < array.length) Array10(array);
}

let i = 0;

Array10([1, 2, 3, 4, 5]); 

