const folder = document.querySelector('.folder');
const folder_back = document.querySelector('.folder__back');
const folder_front = document.querySelector('.folder__front');
const texts = document.querySelectorAll('.unselectable');
const light_source = document.querySelector('.light-source');



folder.addEventListener('click', ()=>{

    folder.style.animationIterationCount = '1';

        if (folder.style.animationIterationCount === '1')
        {
            folder.style.scale = '3.5';
            folder_back.style.bottom = '3rem';
            folder_front.style.bottom = '4.35rem';
            light_source.style.background = 'transparent';
            texts.forEach(text =>{
                text.style.animation = 'hide-text 1s forwards'
            })

            folder_front.style.animation = 'folder__front-open 1s forwards';
        }

})
