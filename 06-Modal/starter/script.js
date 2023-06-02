'use strict';
const showModalBtn = document.querySelectorAll(".show-modal");
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

for (let i = 0; i < showModalBtn.length; i++) {
    showModalBtn[i].addEventListener('click', () => {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
    console.log('clicked')
}

function closeModal() {

    modal.classList.add('hidden')
    overlay.classList.add('hidden')

}

closeModalBtn.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) => e.key === 'Escape' ? closeModal() : console.log(e.key + ' is pressed'))
overlay.addEventListener('click', closeModal)