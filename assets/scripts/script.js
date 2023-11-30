"use strict"

const nameShow = document.getElementById('yes');
const nameHide = document.getElementById('no');
const userName = document.getElementById('userName');
const userNameLabel = document.getElementById('userNameLabel');
const foto = document.getElementById('foto');
const message = document.getElementById('comment');
const button = document.getElementById('button');
const resultName = document.getElementById('resultName');
const resultImg = document.getElementById('resultImg');
const resultComment = document.getElementById('resultComment');

const addNameOnChat = () =>{
    if (nameShow.checked){
        const trimmedName = userName.value.trim();
        const toLowerCaseName = trimmedName.toLowerCase();
        const correctName = toLowerCaseName.replace(toLowerCaseName[0], toLowerCaseName[0].toUpperCase());
        resultName.textContent = correctName;
    }
    else if(nameHide.checked ){
        userNameLabel.style.display = "none";
        userName.style.display = "none";
        resultName.textContent = "username";
    }
}

const addAvatarOnChat = () =>{
    const correctFoto = foto.value;
    resultImg.src = correctFoto;
}
const addTextOnChat = () =>{
    function checkSpam(comment) {
        const correctСomment = comment.replace(/viagra/gi, "***") || comment.replace(/xxx/gi, "***");
        return correctСomment;
    }
    const toLowerCaseСomment = comment.value.toLowerCase();
    const correctСomment = toLowerCaseСomment.replace(toLowerCaseСomment[0], toLowerCaseСomment[0].toUpperCase());
    const checkSpamComment = checkSpam(correctСomment);
    resultComment.textContent = checkSpamComment;
};

button.addEventListener('click', addTextOnChat);
button.addEventListener('click', addAvatarOnChat);
button.addEventListener('click', addNameOnChat);