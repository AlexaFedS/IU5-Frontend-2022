/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let a = str.split(" " );
    let min = parseFloat(a[0]);
    let max = parseFloat(a[0]);
    for(let i = 0; i < a.length; i++){
        a[i] = parseFloat(a[i]);
    }
    for(let j = 0; j<a.length;j++){
        if(min>a[j]) min = a[j];
        if(max < a[j]) max = a[j];
    }
    return {"min": min, "max": max};
}
module.exports = getMinMax;
