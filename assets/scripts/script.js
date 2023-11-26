"use strict"

const userName = document.getElementById('userName');
const foto = document.getElementById('foto');
const message = document.getElementById('message');
const button = document.getElementById('button');
const resultName = document.getElementById('resultName');
const resultImg = document.getElementById('resultImg');
const resultComment = document.getElementById('resultComment');

const addTextOnChat = () =>{
    const trimmedName = userName.value.trim();
    const toLowerCaseName = trimmedName.toLowerCase();
    const correctName = toLowerCaseName.replace(toLowerCaseName[0], toLowerCaseName[0].toUpperCase());

    function checkSpam(message) {
        let lowerMessage = message.toLowerCase();
        return lowerMessage.includes('viagra') || lowerMessage.includes('xxx');
    }

    resultName.textContent = correctName.value; 
    resultImg.setAttribute('src', 'foto');
    resultComment.textContent = checkSpam(message);
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