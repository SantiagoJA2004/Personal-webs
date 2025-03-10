const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");


//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})