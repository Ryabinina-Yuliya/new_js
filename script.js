/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!'. Замените все с помощью глобального поиска и замены.*/

console.log('aaa@bbb@ccc'.replace(/@/g, '!'));


/*2. В переменной date лежит дата в формате '2025-12-31' Преобразуйте эту дату в
формат 31/12/2025'.*/

let array2 = '2025-12-31'.split('-');
console.log(array2[2] + '/' + array2[1] + '/' + array2[0]); 



/*3. Дана строка 'я учу javascript!' Вырежите из нее слово 'учу' и слово 'javascript'тремя разными
способами (через substr, substring, slice).*/

let str3 = 'я учу javascript!';
console.log(str3.slice(2, 16), str3.substr(2, 14), str3.substring(2, 16));


/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы
кубов его элементов. Для решения воспользуйтесь циклом for.*/

let array4 = [4, 2, 5, 19, 13, 0, 10],
    summ = 0;
for (let i = 0; i < array4.length; i++) {
	summ+=Math.pow(array4[i],3);
}
console.log(Math.sqrt(summ).toFixed(0)); // так можно округлять?



/*5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.*/

function task5(a, b) {
	return Math.abs(a - b);
}

let c = task5(3, 5); 
console.log(c); //можно было сделать модулем или надо было через if с < 0 then с = с * -1 ???


/*6. Выведите на экран текущую дату-время в формате 'aaa@bbb@ccc'. Замените все12:59:59 31.12.2014'aaa@bbb@ccc'. Замените все. Для решения этой
задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые
состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).*/

let date = new Date();

function newdate(n) {
if (n > 0 && n < 10) {
	n = '0' + n;
}
return n;
}

console.log('data' + ' ' +newdate(date.getDate())+'.'+newdate(date.getMonth())+'.' + newdate(date.getFullYear()) + ' time ' +  newdate(date.getHours()) +':'+ newdate(date.getMinutes())+':'+newdate(date.getSeconds()));


/*7.Дана строка 'aa aba abba abbba abca abea' Напишите регулярку, которая найдет
строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'. */

console.log('aa aba abba abbba abca abea'.replace(/ab+a/g, 'найдено'));

/*8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код
страны> <код города или сети> <номер телефона>) и упрощенной проверки ввода простого
номера с кодом и без него. Функция должна возвращать true или false.*/

let regaxp8 = /^(\+)+([-()]?\d[-()]?){12}$/gi; // я написала для белорусского, если изменить некоторые параметры (например количество цифр, использование скобок можно расширить и для остальных стран)
let tel = "+375(33)349-96-44";

function testtel(tel) {
	console.log(regaxp8.test(tel));
}

testtel(tel);

/*9. Напишите ф-цию, которая из полного адреса с параметрами и без, например:
https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес доменного имени
(https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/),
параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и
не быть каких-либо составляющих. Ф-ция должна возвращать массив.*/


function domen(url) {
    url = url.match(/^(https?\:\/\/[^\/?#]+)(?:[\/?#]|$)/i); //попробовала, но это при условии если ssl (https);
    return url[1];
}

console.log(domen('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));

/*10. Напишите ф-цию удаления повторов из строки, в т.ч. повторных пробелов (2х и более) и
спецсимволов, например: ]hello hello hello hello world» -> ]hello world». Функция должна
возвращать обработанную строку.*/

console.log('task11');

function return10(str10) {
    str10 = str10.match(/(\b\w+\b\s)(?=.*?\1)/si);  // как возвращать обработанную строку, а не найденный повтор???
    return str10[1];
}

console.log(return10(']hello hello hello hello world'));


/* 1 5_2 homework 
Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и
выводящую введённые данные в следующем виде РАМКА:
*/

//нашла решение в интернете, но решила его сократить, вроде получилось, в задаче разобралась

function topBottomRamka(length){
	var ramka = "";
	for (var i = 0; i < length; i++){
		ramka += "*";
	}
	console.log(ramka);
}

var stroki = [];
stroki.push("Домашняя работа: Функции");
stroki.push("Выполнил: студент гр. W4017");
stroki.push("Иванов Иван Иванович"); 

var dlinaRamki = 0;
for (var i = 0; i < stroki.length; i++){
	if (dlinaRamki < stroki[i].length) {
		dlinaRamki = stroki[i].length;
	}
}
dlinaRamki += 2;

topBottomRamka(dlinaRamki);
for (var i = 0; i < stroki.length; i++){
	var resultString = "*";
	for (var j = 0; j < dlinaRamki; j++){
		if (stroki[i][j] === undefined){
			if (j === dlinaRamki - 2){
				resultString += '*';
			}
			else {
				resultString += ' ';
			}
		}
		else {
			resultString += stroki[i][j];
		}
	}
	console.log(resultString);
}
topBottomRamka(dlinaRamki);

/* 2 5_2 homework
Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:

*
***
*****
*******
*********

Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но
которая выведет перевернутый треугольник.
*/ 
// обычный треугольник делали уже, сделала перевернутый по вашему алгоритму

function task2_5_hw(height) {   

    for (let i = height; i >= 1; i--) {
        str = '';
        for (let j = height - i; j >= 1; j--) str += ' ';
        for (let j = i + i - 1; j >= 1; j--) str += '*';
        console.log(str);
    }
}

task2_5_hw(10);


/* 3 5_2 homework
Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты.
Почта верна при условии:
a. весь адрес не должен содержать русские буквы и спецсимволы, кроме одной
«собачки», знака подчеркивания, дефиса и точки, причем они не могут быть
первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или
«@@», «_@», «@-», «--» и т.п.
b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя
может содержать только буквы, цифры, но не быть первыми и единственными в
имени, и точку;
c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не
может быть длиной менее 2 и более 11 символов.
*/ 

//то что смогла сделать / покажите пожалуйста как проверить язык и длину строки до и после собачки или точки

function email()

{

if (txt.indexOf(".") == -1) {
	console.log("нет точки");
	return false
	}
if ((txt.indexOf(",")>=0)||(txt.indexOf(";")>=0)||(txt.indexOf(" ")>=0)) {
	console.log("неправильные символы в адресе");
	return false
	}
dog = txt.indexOf("@");
	if ((dog == -1) || ((txt.match(/@/g) || []).length > 1)) {
		console.log("должна быть одна собачка");
	return false
	}

if ((dog < 1) || (txt.toString().slice(-1) == "@")) {
		console.log("собачка должна быть после имени");
	return false
	}

if ((txt.charAt(dog - 1) == '.') || (txt.charAt(dog + 1) == '.')||
	(txt.charAt(dog - 1) == '-') || (txt.charAt(dog + 1) == '-')) {
		console.log("недопустимая комбинация спецсимволов");
		return false
		}
	console.log("правильно");
}


email(txt="ryabina@gmail.com"); 
