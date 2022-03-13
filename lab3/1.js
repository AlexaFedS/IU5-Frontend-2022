/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let a = ""
    for(let i =0; i< str.length; i++){
       if(str[i-1]===" " || i === 0){
           a += str[i].toUpperCase();
       } else {
           a +=str[i];
       }
    }
    return a;
}

module.exports = capitalize;
