const intro1 = document.querySelector('.intro1');
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        intro1.classList.add('display-none');
    }, 2000);
})