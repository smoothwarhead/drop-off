const createPortfolio = document.querySelector('.create-portfolio');
const closeIcon = document.querySelector('.close-icon');


createPortfolio.addEventListener('click', () => {
    const createForm = document.querySelector('.pop-up');
    createForm.style.display = 'block';

})

closeIcon.addEventListener('click', ()=>{
    const createForm = document.querySelector('.pop-up');
    createForm.style.display = 'none';
})