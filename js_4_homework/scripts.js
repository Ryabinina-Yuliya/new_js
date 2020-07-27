/*Задание 1
 Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
элементы на экран.*/

console.log('Задание 1');


let array1 = [1, 2, 3, 4, 5];

for (let i = 0; i < array1.length; i++) {
    console.log("Chislo iz massiva", array1[i])
}

/*Задание 2 
Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
быть положительными и отрицательными. Выведите на экран только отрицательные
числа, которые больше -10, но меньше -3.*/

console.log('Задание 2');

let array2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for  (let i = 0; i < array2.length; i++) {
    if (array2[i] > -10 && array2[i] < -3)
    console.log("chislo", array2[i]);
}

/*Задание 3
Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите.*/

console.log('Задание 3');

console.log('for');

let array3 = [],
    result = 0;

for (let i = 23; i <= 57; i++) {
    array3.push(i);
}
console.log(array3);

console.log('while');

i=23
while (i <= 57) {
    array3.push(i);
    i++;
}
array3.splice(0, 35);
console.log(array3);

for (let i = 0; i < array3.length; i++) {
    result += array3[i];
}
console.log('Sum: ' +result); // сумма чисел 1400


/*Задание 4
Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.*/
console.log('Задание 4');

let array4 = ['10', '20', '30', '50', '235', '3000'];

i = 0;
while (i < array4.length) {
    if (array4[i][0] == 1 || array4[i][0] == 2 || array4[i][0] == 5) {
        console.log(+array4[i]);
    }
    i++;
}

/* Задание 5
Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
дни недели, а выходные дни выведите жирным.*/

let array5 = ['PN', 'VT', 'SR', 'CH', 'PT', 'SB', 'VS'];

for (let i = 0; i < array5.length; i++) {

    if(array5[i] == 'SB' || array5[i] == 'VS') {
        document.write('<b>' + array5[i]+' ' + '</b>');
    } else {
        document.write(array5[i]+' ');
    }
}

/*Задание 6 
Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
и получите последний элемент массива, используя свойство length.*/

console.log('Задание 6');

let array6 = ['moj ', 'prepodavatel ', 'Sergej ', 'prepodaet ', 'html/css' ]; 

array6.push(' i');
array6.push(' JS');

console.log(array6[array6.length-1]); 
let str = array6.join('');
console.log(str);

/*Задание 7 
Запросите у пользователя по очереди числовые значения при помощи prompt и
сохраните их в массив. Собирайте числа до тех пор пока пользователь не введет пустое
значение. Выведите получившийся массив на экран. Выполните сортировку чисел
массива, и выведите его на экран.*/

console.log('Задание 7');

let array7 = [];

for (let i = 0; array7[i]= +prompt('chislo dla zadanija 7') ; i++) {
    if (array7[i] == '' || undefined) break;
}

console.log(array7);


array7.sort(function(a, b) {
    return a - b;
});

console.log(array7);

/* Задание 8 
Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
используя цикл while и метод reverse.*/

console.log('Задание 8');

//!!!!!!!!!!!! НЕ ПОЛУЧИЛОСЬ СДЕЛАТЬ С ПОМОЩЬЮ WHILE

let array8 = [12, false, 'Текст', 4, 2, -5, 0];
console.log("massiv", array8);
console.log("massiv v obratnom poryadke reverse",array8.reverse());



/* Задание 9 
Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].*/

console.log('Задание 9');

let array9 = [5, 9, 21, , , 9, 78, , , , 6],
    countUndefined = 0;

for (let i = 0; i < array9.length; i++) {
    if (array9[i] == undefined) {
        countUndefined++;
    }
}

console.log("pustih elementov v massive ",countUndefined); 

/* Задание 10 
Найдите сумму элементов массива между двумя нулями (первым и последним нулями
в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
[1,8,0,13,76,8,7,0,22,0,2,3,2].*/

console.log('Задание 10');

//!!!!!!!!!!!! ОН ВЫВОДИТ СУММУ, НО Я ПОНИМАЮ, ЧТО ДЕЛАЕТ ЭТО ПРИ ВСТРЕЧЕ С КАЖДЫМ НУЛЕМ прибавляя сумму еще, ЗАЦИКЛИВАЯСЬ, ЭТО МОЖНО ИСПРАВИТЬ?

let array10 = [48, 9, 6, 0, 21, 2, 1, 6, 8, 0, 76, 8, 4, 13, 2];
let firstZero = array10.indexOf(0),
    secondZero = array10.lastIndexOf(0),
    summa = 0;

for  (let i = 0; i < array10.length; i++) {
    if (array10[i] != 0) {
        console.log("0"); 
    }
    else {
        for (let j = firstZero + 1; j < secondZero; j++) {
            summa +=array10[j];
        }
    console.log ("summa ", summa);
    }
}

/* Задание 11 
Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
пользователь. Например: высота = 5.*/

console.log('Задание 11');

let height = prompt('chislo dlya zadanija 11');
str = '';

i = 1;

for(let i = 1; i <= height; i++) {
    str = '';

    for(let j = 1; j <= height-i; j++) str += ' ';

    for(let j = 1; j <= i+i-1; j++) str += '^';

    console.log(str);
}
