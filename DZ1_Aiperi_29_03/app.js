var day = Number(prompt('Enter your day of birth'))
var month = Number(prompt('Enter your month of birth'))

if (day >= 22 && month === 12 || month === 1 && day <= 19) {
    alert(' Ваш знак зодиака Козерог')
} else if (day >= 20 && month === 1 || month === 2 && day <= 18) {
    alert(' Ваш знак зодиака Водолей')
} else if (day >= 19 && month === 2 || month === 3 && day <= 20) {
    alert(' Ваш знак зодиака Рыбы')
} else if (day >= 21 && month === 3 || month === 4 && day <= 19) {
    alert(' Ваш знак зодиака Овен')
} else if (day >= 20 && month === 4 || month === 5 && day <= 20) {
    alert(' Ваш знак зодиака Телец')
} else if (day >= 21 && month === 5 || month === 6 && day <= 20) {
    alert(' Ваш знак зодиака Близнецы')
} else if (day >= 21 && month === 6 || month === 7 && day <= 22) {
    alert(' Ваш знак зодиака Рак')
} else if (day >= 23 && month === 7 || month === 8 && day <= 22) {
    alert(' Ваш знак зодиака Лев')
} else if (day >= 23 && month === 8 || month === 9 && day <= 22) {
    alert(' Ваш знак зодиака Дева')
} else if (day >= 23 && month === 9 || month === 10 && day <= 22) {
    alert(' Ваш знак зодиака Весы')
} else if (day >= 23 && month === 10 || month === 11 && day <= 22) {
    alert(' Ваш знак зодиака Скорпион')
} else if (day >= 23 && month === 11 || day <= 20 && month === 12) {
    alert(' Ваш знак зодиака Стрелец')
} else
{
    alert('Введите корректные данные')
}

