"use strict"

const userName = document.querySelector('#userName');
const foto = document.querySelector('#foto');
const message = document.querySelector('#message');
const button = document.querySelector('#button');
const result = document.querySelector('#result');

const addTextOnChat = () =>{
    const trimmedName = userName.trim();
    const toUpperCaseName = trimmedName.toUpperCase();
    const correctName = toUpperCaseName.replace(name[0], name[0].toUpperCase());

    result.textContent = correctName; 

};

button.addEventListener('click', addTextOnChat);




// Создадим сервис комментариев. В нём будет три поля ввода:
// поле для ввода имени. Сделайте интерфейс преобразования имени, который учтёт, все нюансы — лишние пробелы, отсутствие больших букв в имени и прочее. 
// Например, было введено пользователем : иВаН .
// Стало: Иван .
// поле для ввода ссылки на аватар;
// поле ввода сообщения. Необходимо реализовать отображение и добавление сообщений, а также функцию checkSpam(str), заменяющую 'viagra' или 'XXX' на *** ;
// функция должна быть нечувствительна к регистру:
// const comment1 = checkSpam('buy ViAgRA now'); //результат buy *** now
// const comment2 = checkSpam('free xxx'); //результат free ***
// const comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit