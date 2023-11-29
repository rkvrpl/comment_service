"use strict"

const userName = document.getElementById('userName');
const foto = document.getElementById('foto');
const message = document.getElementById('comment');
const button = document.getElementById('button');
const resultName = document.getElementById('resultName');
const resultImg = document.getElementById('resultImg');
const resultComment = document.getElementById('resultComment');

const addTextOnChat = () =>{
    const trimmedName = userName.value.trim();
    const toLowerCaseName = trimmedName.toLowerCase();
    const correctName = toLowerCaseName.replace(toLowerCaseName[0], toLowerCaseName[0].toUpperCase());

    const correctFoto = foto.value;

    function checkSpam(comment) {
        let lowerСomment = comment.toLowerCase();
        return lowerСomment.includes('viagra') || lowerСommente.includes('xxx');
    }
    const toLowerCaseСomment = comment.value.toLowerCase();
    const correctСomment = toLowerCaseСomment.replace(toLowerCaseСomment[0], toLowerCaseСomment[0].toUpperCase());
    const checkSpamComment = checkSpam(correctСomment);

    resultName.textContent = correctName; 
    resultImg.elem.setAttribute('src', 'correctFoto'); 
    resultComment.textContent = checkSpamComment;
};

button.addEventListener('click', addTextOnChat);