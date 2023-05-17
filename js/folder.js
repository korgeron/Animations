const folder = document.querySelector('.folder');
const folder_back = document.querySelector('.folder__back');
const folder_front = document.querySelector('.folder__front');
const texts = document.querySelectorAll('.unselectable')
let isOff = false;

function turnOff () {
    folder.style.animationIterationCount = '1';
    return isOff = true;
}
function off (statement) {
let checked = false;
    if (statement == true) {
        folder_front.style.animation = 'folder-open 1.5s ease-in-out forwards';
         texts.forEach(text => {
            text.style.animation = 'hide-text 1s forwards';
         })
    }




}

folder.addEventListener('click', ()=> {

    let itsOff = turnOff();
    off(itsOff);



})

