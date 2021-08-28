// N.2 Домашнее задание TREESUM
// 1. Разработать «чистую» функцию treeSum, которая получает массив, элементы которого могут быть числами или снова массивами, и так до любого уровня.
// Функция должна рассчитать и вернуть сумму всех числовых элементов массива со всех уровней.
// При написании функции не описывать каких - либо вложенных в неё функций.
// Проверить работу функции можно на следующем массиве(сумма 50):


function treeSum(arr) {
	let result = 0;
	newArr = arr.flat(Infinity);
	for (let num of newArr) {
		result += num;
	}
	return result;
}

console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));
console.log(treeSum([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));




// 2. Создайте функцию, которая принимает число как строку n и возвращает число без конечных и стартовых нулей.
// Конечные нули - это нули после десятичной точки, которые не влияют на значение (например, последние три нуля в 6.7000 и 6.07000).
// Стартовые нули - это нули перед целым числом, которые не влияют на значение (например, первые три нуля в 000427 и 000930).

// removeLeadingTrailing("190.000") ➞ "190"
// removeLeadingTrailing("00803") ➞ "803"
// removeLeadingTrailing("07.1200") ➞ "7.12"
// removeLeadingTrailing("90") ➞ "90"

//Вернуть строку.
//Если вы получаете число с .0 в конце, верните целочисленное значение (например, верните «4», а не «4,0»).
//Если число 0, 0,0, 000, 00,00 и т. Д. ... верните «0».

function removeLeadingTrailing(str) {
	let arr = [];
	let strResult = '';

	for (let i = 0; i < str.length; i++) {
		arr.push(str[i]);
	}

	while (arr[0] === '0') {
		arr.splice(arr[0], 1);
	}

	if (arr.includes('.', 0)) {
		while (arr[arr.length - 1] === '0') {
			arr.splice(-1, 1);
			if (arr[arr.length - 1] === '.') {
				arr.splice(-1, 1);
				break
			}
		}
	}
	if (arr.length === 0) {
		return '0';
	}

	strResult = arr.join('');

	return strResult;


}
console.log(removeLeadingTrailing("190.000"));
console.log(removeLeadingTrailing("00803"));
console.log(removeLeadingTrailing("07.0246436000000"));
console.log(removeLeadingTrailing("90"));
console.log(removeLeadingTrailing("000010000503.3050450300"));
console.log(removeLeadingTrailing("00.000"));

