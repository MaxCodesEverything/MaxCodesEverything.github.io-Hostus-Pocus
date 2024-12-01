const burger = document.getElementById('burger');
const navList = document.getElementById('navList');

burger.addEventListener('click', event => {

    burger.classList.toggle('active');
    navList.classList.toggle('active');
});