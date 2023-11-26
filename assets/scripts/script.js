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

    // const correctFoto = foto.value;

    const toLowerCaseСomment = comment.value.toLowerCase();
    console.log(toLowerCaseСomment);
    const correctСomment = toLowerCaseСomment.replace(toLowerCaseСomment[0], toLowerCaseСomment[0].toUpperCase());
    console.log(correctСomment);

    // function checkSpam(correctСomment) {
    //     let lowerСomment = correctСomment.toLowerCase();
    //     return lowerСomment.includes('viagra') || lowerСommente.includes('xxx');
    // }

    resultName.textContent = correctName; 
    // resultImg.setAttribute('src', correctFoto);
    resultComment.textContent = correctСomment;
};

button.addEventListener('click', addTextOnChat);