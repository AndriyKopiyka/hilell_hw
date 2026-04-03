document.addEventListener("DOMContentLoaded", (event) => {
 document.getElementById('menu').addEventListener('click', () => {
    document.getElementById('panel').classList.add('show');
 });

  document.getElementById('close-menu').addEventListener('click', () => {
    document.getElementById('panel').classList.remove('show');
 })
});