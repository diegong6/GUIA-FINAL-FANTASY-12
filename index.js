const intro1 = document.querySelector('.intro1');
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        intro1.classList.add('display-none');
    }, 3000);
})

document.oncontextmenu = function () { return false }

window.onload = function ()
// Para internet Explorer
{
    document.onselectstart = function () { return false; }
    // Para Firefox
    document.onmousedown = function () { return false; }
}